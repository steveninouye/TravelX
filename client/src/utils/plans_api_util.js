export const fetchPlans = () => {
  return $.ajax({
    method: ''
  })
}

export const fetchGoogleApiKey = () =>
  axios.get(`/api/google`);