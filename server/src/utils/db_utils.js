import fs from 'fs';
import { resolve } from 'path';
import request from 'request';
import rp from 'request-promise';

import { googleApi } from '../config/keys';

export const savePhoto = (
   photoRef,
   fileResponseBoolean,
   errorResponseBoolean
) => {
   const filePath = resolve(__dirname, `../img/${photoRef}.jpg`);
   if (fs.existsSync(filePath)) {
      res.sendFile(filePath);
   } else {
      const file = fs.createWriteStream(filePath);
      const photoUrl = `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${photoRef}&key=${googleApi}`;
      rp(photoUrl)
         .then((response) => {
            response.pipe(file);
            file.on('finish', () => {
               file.close(() => {
                  if (fileResponseBoolean) res.sendFile(filePath);
               });
            });
         })
         .catch((err) => {
            if (errorResponseBoolean)
               res.status(500).send('Could not get photo');
         });
   }
};
