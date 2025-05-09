function searchCityEngine(response) {
  let cityNameElement = document.querySelector("#searchform-input");
  cityNameElement.innerHTML = response.data.city;
  let temperature = Math.round(response.data.temperature.current);
  let temperatureValue = document.querySelector("#temperature-value");
  temperatureValue.innerHTML = `${temperature}`;
  let humidity = response.data.temperature.humidity;
  let humidityValue = document.querySelector("#humidity-value");
  humidityValue.innerHTML = `${humidity}`;
  let cloudcondition = document.querySelector("#cloud-condition");
  cloudcondition.innerHTML = response.data.condition.description;
  let wind = document.querySelector("#wind-value");
  wind.innerHTML = response.data.wind.speed;
}

function searchCity(event) {
  event.preventDefault();
  let input = document.querySelector("#searchform-input");
  let cityName = document.querySelector("#city-name");
  cityName.innerHTML = input.value;
  let apiKey = "6fe8tf4ae3fc290f9f3ff43213b0b7od";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${input.value}&key=${apiKey}&unit=metric`;
  axios.get(apiUrl).then(searchCityEngine);
}

let form = document.querySelector("#search-form");
form.addEventListener("submit", searchCity);
