function searchCityEngine(response) {
  let cityName = document.querySelector("#city-name");

  cityName.innerHTML = response.data.city;

  let temperatureValue = document.querySelector("#temperature-value");
  temperatureValue.innerHTML = Math.round(response.data.temperature.current);

  let humidityValue = document.querySelector("#humidity-value");
  let humidity = response.data.temperature.humidity;
  humidityValue.innerHTML = `${humidity}%`;
  let cloudcondition = document.querySelector("#cloud-condition");
  cloudcondition.innerHTML = response.data.condition.description;
  let wind = document.querySelector("#wind-value");
  let windvalue = response.data.wind.speed;
  wind.innerHTML = `${windvalue} km/h`;
  let emoji = document.querySelector("#weather-emoji");
  emoji.innerHTML = `<img src="${response.data.condition.icon_url}" alt="${response.data.condition.icon}" />`;

  let today = document.querySelector("#current-dates");
  let date = new Date(response.data.time * 1000);
  today.innerHTML = currentDateFormat(date);
}
function currentDateFormat(date) {
  let currentDate = new Date();
  let hour = currentDate.getHours();
  let minutes = currentDate.getMinutes();
  if (hour < 10) {
    hour = `0${hour}`;
  }
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[currentDate.getDay()];
  return `${day} ${hour}:${minutes},`;
}

function searchCity(event) {
  event.preventDefault();
  let input = document.querySelector("#searchform-input");

  let apiKey = "6fe8tf4ae3fc290f9f3ff43213b0b7od";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${input.value}&key=${apiKey}&unit=metric`;
  axios.get(apiUrl).then(searchCityEngine);
  defaultCity();
}

let form = document.querySelector("#search-form");
form.addEventListener("submit", searchCity);
function displayForecast() {
  let forecast = document.querySelector("#weather-forecast");
  let days = ["Sunday", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  forecastHtml = "";
  for (let i = 0; i < days.length; i++) {
    let day = days[i];
    forecastHtml += `
    <div>
      <span class="day">${data.condition.time}</span>
      <br />
     <img src="${daata.condition.icon - url}" alt="${
      data.condition.description
    }" class="day-emoji" />
      <br />
      <span class="day-temperature">
        <strong>${data.temperature.maximum}&deg</strong> ${
      data.temperature.minimum
    }&deg
      </span>
    </div>`;
  }

  forecast.innerHTML = forecastHtml;
}
displayForecast();
// default city
function defaultCity() {
  let apiKey = "6fe8tf4ae3fc290f9f3ff43213b0b7od";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=London&key=${apiKey}&unit=metric`;
  axios.get(apiUrl).then(searchCityEngine);
}
defaultCity();
function showForecast() {
  let apiKey = "6fe8tf4ae3fc290f9f3ff43213b0b7od";
  let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayForecast);
}
