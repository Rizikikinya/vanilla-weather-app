function searchCityEngine(response) {
  let temperature = Math.round(response.data.temperature.current);
  let temperatureValue = document.querySelector("#temperature-value");
  temperatureValue.innerHTML = `${temperature}`;
}

function displayCity(input) {
  let apiKey = "6fe8tf4ae3fc290f9f3ff43213b0b7od";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query={query}&key={key}&unit=metric`;
  apiUrl = apiUrl.replace("{query}", input.value).replace("{key}", apiKey);
  axios.get(apiUrl).then(searchCityEngine);
}

function searchCity(event) {
  event.preventDefault();
  let input = document.querySelector("#searchform-input");
  let cityName = document.querySelector("#city-name");
  cityName.innerHTML = input.value;

  displayCity(input); // Call the function to display the city
}

let form = document.querySelector("#search-form");
form.addEventListener("submit", searchCity);
