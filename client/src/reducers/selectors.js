export const selectPlan = ({ plans }, planId) => {
  return plans[planId]
};

export const selectItineraryAttractions = (entities, planId) => {
  const nullAttractions = [];
  return entities.itineraries[planId] ? entities.itineraries[planId].attractions : nullAttractions;
};