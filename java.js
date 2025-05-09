function searchCityEngine(response) {
  console.log(response.data);
  let cityNameElement = document.querySelector("#searchform-input");
  cityNameElement.innerHTML = response.data.city;

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
  let emoji = document.querySelector("#emoji-icon");
  emoji.innerHTML = `<img src="${response.data.condition.icon_url}" alt="weather icon" />`;
  let date = document.querySelector("#current-date");
  let currentDate = new Date(response.data.time * 1000);
  function currentDateFormat(date) 
   {
    let newDate=new Dates();
    hour=newDate.getHours();
    minutes=newDate.getMinutes();
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
    let day= days[newDate.getDay()];
    return `${day} ${hour}:${minutes}`;
      
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
