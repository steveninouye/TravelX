export const selectPlan = ({ plans }, planId) => {
  return plans[planId]
};

export const selectItineraryAttractions = (entities, planId) => {
  const nullAttractions = [];
  return entities.itineraries[planId] ? entities.itineraries[planId].attractions : nullAttractions;
};

export const selectCity = (entities, planId) => {
  let city = { name: '', photos: [] };

  if (entities.itineraries[planId]) {
    city = entities.itineraries[planId].attractions[0].city;
  }

  return city;
}