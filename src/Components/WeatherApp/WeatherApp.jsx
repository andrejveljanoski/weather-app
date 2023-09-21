import React, { useState } from "react";
import "./WeatherApp.css";

import clear_icon from "../Assets/clear.png";
import cloud_icon from "../Assets/cloud.png";
import drizzle_icon from "../Assets/drizzle.png";
import humidity_icon from "../Assets/humidity.png";
import rain_icon from "../Assets/rain.png";
import search_icon from "../Assets/search.png";
import snow_icon from "../Assets/snow.png";
import wind_icon from "../Assets/wind.png";
import { getWeatherForCity } from "../../api";
import { convertKelvinToCelsius } from "../../utils";
import { toast } from "react-toastify";

const WeatherApp = () => {
  const [city, setCity] = useState("");
  const [submittedCity, setSubmittedCity] = useState("");
  const [degreesC, setDegreesC] = useState(0);
  const [humidity, setHumidity] = useState(0);
  const [windSpeed, setWindSpeed] = useState(0);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const weather = await getWeatherForCity(city);
      setDegreesC(convertKelvinToCelsius(weather.main.temp));
      setHumidity(weather.main.humidity);
      setWindSpeed(weather.wind.speed);
      setSubmittedCity(weather.name);
    } catch {
      toast("Oh no! An error occurred! Please try with another city.", {
        type: "error",
      });
    }
    setCity("");
  };

  return (
    <div className="container">
      <form className="top-bar" onSubmit={handleSubmit}>
        <input
          type="text"
          className="cityInput"
          placeholder="Search"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button className="search-icon" type="submit">
          <img src={search_icon} alt="" />
        </button>
      </form>
      <div className="weather-image">
        <img src={cloud_icon} alt="" />
      </div>
      <div className="weather-temp">{degreesC}°c</div>
      <div className="weather-location">{submittedCity}</div>
      <div className="data-container">
        <div className="element">
          <img src={humidity_icon} alt="" className="icon" />
          <div className="data">
            <div className="humidity-percent">{humidity}%</div>
            <div className="text">Humidity</div>
          </div>
        </div>
        <div className="element">
          <img src={wind_icon} alt="" className="icon" />
          <div className="data">
            <div className="humidity-percent">{windSpeed} km/h</div>
            <div className="text">Wind Speed</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherApp;
