import React, { useState } from "react";

const Weather = () => {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);

  const fetchWeather = async () => {
    if (!city) return;
    const API_KEY = "your_openweathermap_api_key"; // Get API key from https://openweathermap.org/api
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    );
    const data = await response.json();
    setWeather(data.main ? `${data.main.temp}°C` : "City not found");
  };

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h2>Weather App</h2>
      <input
        type="text"
        placeholder="Enter city"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button onClick={fetchWeather}>Get Weather</button>
      <h3>{weather}</h3>
    </div>
  );
};

export default Weather;
