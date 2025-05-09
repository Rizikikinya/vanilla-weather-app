function displayCity(response) {
    console.log(response)
  let city = "paris";
  let apiKey = "6fe8tf4ae3fc290f9f3ff43213b0b7od";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query={query}&key={key}&unit=metric`;
  apiUrl = apiUrl.replace("{query}", city).replace("{key}", apiKey);
  axios.get(apiUrl).then(searchCityEngine);
}
