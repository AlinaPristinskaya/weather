import React, { useState, useEffect } from "react";
import axios from "axios";


const API_KEY = "b2e2a7ebba6d2ec583c86ad6b30bbac4";

function LocalWeather({lat, lon}){
  const [weather, setWeather]= useState(null);
//in the LocalWeather component I use useEffect with a dependency on props
  useEffect(() => {
    if(lat && lon){
      fetchLocalWeather() 
    }
  }, [lat, lon]);

  const fetchLocalWeather = async (e) => {
    
    try {
      const response = await axios.get(
        `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
      );
      setWeather(response.data);
    } catch (error) {
      console.error("Error fetching local weather:", error);
    }
  };
return (
<div>
    {weather && (
      <div>
        <h2>Weather in {weather.name}</h2>
        <p>{weather.main.temp} °C</p>
        <p>{weather.weather[0].description}</p>
      </div>
    )}
</div>
)

}



export default LocalWeather;