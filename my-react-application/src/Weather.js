import React, { useState } from "react";

const Weather = () => {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchWeather = async () => {
    if (!city) return;
    setLoading(true);
    setError("");

    try {
      const API_KEY = "your_openweathermap_api_key"; // Get API key from https://openweathermap.org/api
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      );
      const data = await response.json();

      if (data.main) {
        setWeather(`${data.main.temp}°C`);
      } else {
        setError("City not found");
        setWeather(null);
      }
    } catch (err) {
      setError("Error fetching data");
      setWeather(null);
    } finally {
      setLoading(false);
    }
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
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          {error && <p>{error}</p>}
          {weather && <h3>{weather}</h3>}
        </div>
      )}
    </div>
  );
};

export default Weather;
