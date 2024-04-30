//Weather Component: Allows the user to input a city name and fetches the weather for that city.

import React, { useState } from "react";
import axios from "axios";
import init from "./init.json";

const API_KEY = "b2e2a7ebba6d2ec583c86ad6b30bbac4";

function Weather() {
  //For better clarity, I add data for the first render
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(init);
  //then fetchWeather is called every time you submit the form
  const fetchWeather = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get(
        `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      );
      setWeather(response.data);
    } catch (error) {
      alert("Error fetching weather data:", error);
    }
  };

  return (
    <div>
      <form onSubmit={fetchWeather}>
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Enter a city name"
        />
        <button type="submit">Get Weather</button>
      </form>
      {weather && (
        <div>
          <h2>Weather in {weather.name}</h2>
          <p>{weather.main.temp} °C</p>
          <p>{weather.weather[0].description}</p>
        </div>
      )}
    </div>
  );
}

export default Weather;
