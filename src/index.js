let now = new Date();
let hours = now.getHours();
let minutes = now.getMinutes();

//console.log(now);

let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let formattedDay = days[now.getDay()];

let currentDate = document.querySelector(".current-day");
currentDate.innerHTML = `${formattedDay} ${hours}:${minutes}`;

function city(event) {
  event.preventDefault();
  let cityInput = document.querySelector("#search-city");
  let currentCity = document.querySelector(".current-city");
  currentCity.innerHTML = cityInput.value;

  function weather(response) {
    let temperature = Math.round(response.data.temperature.current);
    let cityTemperature = document.querySelector(".current-temp-value");
    cityTemperature.innerHTML = `${temperature}`;
  }
  let apiKey = "384o5eb54t8f21820fdceb7ff6b5a26b";
  let query = cityInput.value;
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${query}&key=${apiKey}&units=metric`;
  axios.get(apiUrl).then(weather);
}
let form = document.querySelector("#weatherApp");
form.addEventListener("submit", city);
