// UI handling functionality
function updateUI(weatherData) {
  const weatherInfo = document.getElementById("weatherInfo");
  const errorMessage = document.getElementById("errorMessage");

  weatherInfo.classList.remove("hidden");
  errorMessage.classList.add("hidden");

  document.getElementById("cityName").textContent = weatherData.name;
  document.getElementById("temperature").textContent = `${Math.round(
    weatherData.main.temp
  )}°C`;
  document.getElementById("description").textContent =
    weatherData.weather[0].description;
  document.getElementById(
    "humidity"
  ).textContent = `${weatherData.main.humidity}%`;
  document.getElementById("windSpeed").textContent = `${Math.round(
    weatherData.wind.speed * (1 / 0.288)
  )} kph`;

  const iconCode = weatherData.weather[0].icon;
  document.getElementById(
    "weatherIcon"
  ).src = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
}

function showError(message) {
  const weatherInfo = document.getElementById("weatherInfo");
  const errorMessage = document.getElementById("errorMessage");

  weatherInfo.classList.add("hidden");
  errorMessage.classList.remove("hidden");
  errorMessage.textContent = message;
}

async function searchWeather() {
  const cityInput = document.getElementById("cityInput");
  const city = cityInput.value.trim();
  console.log(cityInput);
  if (!city) {
    showError("Please enter a city name");
    return;
  }

  try {
    const weatherData = await fetchWeatherData(city);
    updateUI(weatherData);
  } catch (error) {
    showError(error.message);
  }
}

// Add enter key support for search
document.getElementById("cityInput").addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    searchWeather();
  }
});
