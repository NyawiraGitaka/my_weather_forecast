function searchCity(event) {
    event.preventDefault();
    let searchInput = document.querySelector("#search-input");
    let cityName = document.querySelector(".weather-city");
    cityName.innerHTML = searchInput.value;
};

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", searchCity);