function updateWeatherDetails(response) {
  let cityTemp = document.querySelector("#weather-temp-value");
  let cityName = document.querySelector(".weather-city");

  cityTemp.innerHTML = Math.round(response.data.temperature.current);
  cityName.innerHTML = response.data.city;
}

function searchCity(city) {
  let apiKey = "314o3fa79375c2341f0ct1d3593ab8a2";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
  axios.get(apiUrl).then(updateWeatherDetails);
}

function getCity(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-input");

  searchCity(searchInput.value);
}

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", getCity);
searchCity("Tallinn")