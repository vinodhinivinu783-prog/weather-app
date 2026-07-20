async function getWeather() {
  const city = document.getElementById("city").value;

  if(city === "") {
    document.getElementById("weatherResult").innerHTML = "Please enter a city 🏙️";
    return;
  }

  const apiKey = "bfeb67120eb96afd39e8e5c0cb5ab4f5";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (data.cod === "404") {
      document.getElementById("weatherResult").innerHTML = "City not found ❌";
      return;
    }

    const temp = data.main.temp;
    const weather = data.weather[0].description;
    const cityName = data.name;

    document.getElementById("weatherResult").innerHTML = `
      <h2>${cityName}</h2>
      <p>🌡️ Temperature: ${temp}°C</p>
      <p>🌥️ Condition: ${weather}</p>
    `;

  } catch (error) {
    document.getElementById("weatherResult").innerHTML = "Error fetching data ❌ - Key may not be active yet";
  }
}
