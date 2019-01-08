import fs from 'fs';
import { resolve } from 'path';
import request from 'request';
import rp from 'request-promise';

import { googleApi } from '../config/keys';
import City from '../models/City';
import Attraction from '../models/Attraction';
import ItineraryPackage from '../models/ItineraryPackage';
import { cityUrl, unsplashUrl, photoUrl } from '../utils/api_urls';
import { unzipSync } from 'zlib';

export const getItinerary = (attractions) =>
  new Promise((resolve, reject) => {
    ItineraryPackage.findOne({ attractions })
      .populate({
        path: 'attractions',
        populate: { path: 'city' }
      })
      .then((itinerary) => {
        if (itinerary) {
          resolve(itinerary);
        } else {
          const newItinerary = new ItineraryPackage({ attractions });
          newItinerary
            .save()
            .then((itinerary) => {
              ItineraryPackage.findById(itinerary._id)
                .populate({
                  path: 'attractions',
                  populate: { path: 'city' }
                })
                .then((itinerary) => {
                  resolve(itinerary);
                });
            })
            .catch((err) => {
              resolve(err);
            });
        }
      })
      .catch((err) => reject(err));
  });

export const getCity = (cityName) =>
  new Promise((resolve, reject) => {
    City.findOne({ name: cityName })
      .then((city) => {
        if (city) {
          resolve({ city, isFound: true });
        } else {
          const cityQuery = cityName.split(' ').join('%20');
          rp(unsplashUrl(cityQuery)).then((json) => {
            const { results } = JSON.parse(json);
            const photos = results.map((result) => result.urls.full);
            const newCity = new City({ name: cityName, photos });
            newCity.save().then((city) => {
              resolve({ city, isFound: false });
            });
          });
        }
      })
      .catch((err) => reject(err));
  });

export const requestCityAttractions = (url, city, resolve, reject) => {
  rp(url)
    .then((json1) => {
      let { results, next_page_token } = JSON.parse(json1);
      if (results.length > 0) {
        const attractions = results.map((attraction) => {
          attraction.city = city._id;
          return attraction;
        });
        Attraction.create(attractions).then((attractions) => {
          if (next_page_token) {
            setTimeout(() => {
              rp(`${url}&pagetoken=${next_page_token}`).then((json2) => {
                let { results, next_page_token } = JSON.parse(json2);
                if (results.length > 0) {
                  const attractions = results.map((attraction) => {
                    attraction.city = city._id;
                    return attraction;
                  });
                  Attraction.create(attractions).then(() => {
                    if (next_page_token) {
                      setTimeout(() => {
                        rp(`${url}&pagetoken=${next_page_token}`).then(
                          (json2) => {
                            let { results } = JSON.parse(json2);
                            if (results.length > 0) {
                              const attractions = results.map((attraction) => {
                                attraction.city = city._id;
                                return attraction;
                              });
                              Attraction.create(attractions)
                                .then(() => console.log('Attractions created'))
                                .catch(() => console.log('error occured'));
                            }
                          }
                        );
                      }, 5000);
                    }
                  });
                }
              });
            }, 5000);
          }
          resolve(attractions);
        });
      } else {
        resolve([]);
      }
    })
    .catch((err) => {
      reject(err);
    });
};

export const getCityAttractions = (cityName) =>
  new Promise((resolve, reject) => {
    let url = cityUrl(cityName);
    getCity(cityName).then(({ city, isFound }) => {
      if (isFound) {
        Attraction.find({ city: city._id })
          .then((attractions) => {
            resolve(attractions);
          })
          .catch((err) => {
            reject(err);
          });
      } else {
        requestCityAttractions(url, city, resolve, reject);
      }
    });
  });

export const savePhoto = (
  req,
  res,
  photoRef,
  fileResponseBoolean,
  errorResponseBoolean
) => {
  const filePath = resolve(__dirname, `../img/${photoRef}.jpg`);
  if (fs.existsSync(filePath)) {
    if (fileResponseBoolean) res.sendFile(filePath);
  } else {
    const file = fs.createWriteStream(filePath);
    request(photoUrl(photoRef)).on('response', (response) => {
      response.pipe(file);
      file.on('finish', () => {
        file.close(() => {
          if (fileResponseBoolean) res.sendFile(filePath);
        });
      });
    });
  }
};
