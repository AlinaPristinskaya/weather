
import React from "react";
import { useGeolocated } from "react-geolocated";
import LocalWeather from './LocalWeather'

// Use https://www.npmjs.com/package/react-geolocated to get geolocation
// and pass latitude and longitude to the component LocalWeather

const Demo = () => {
  const { coords, isGeolocationAvailable, isGeolocationEnabled } =
    useGeolocated({
      positionOptions: {
        enableHighAccuracy: false,
      },
      userDecisionTimeout: 5000,
    });
  return !isGeolocationAvailable ? (
    <div>Your browser does not support Geolocation</div>
  ) : !isGeolocationEnabled ? (
    <div>Geolocation is not enabled</div>
  ) : coords ? (
    <LocalWeather lat={coords.latitude} lon={coords.longitude}></LocalWeather>
   
  ) : (
    <div>Getting the location data&hellip; </div>
  );
};

export default Demo;
