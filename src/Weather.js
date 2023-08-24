import React, { useState } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { Puff } from "react-loader-spinner";

import WeatherInfo from "./WeatherInfo";
import "./weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  let [city, setCity] = useState(props.defaultCity);

  function searchUrl(response) {
    setWeatherData({
      ready: true,
      date: new Date(response.data.time * 1000),
      icon: response.data.condition.icon,
      city: response.data.city,
      description: response.data.condition.description,
      temp: Math.round(response.data.temperature.current),
      humidity: response.data.temperature.humidity,
      wind: Math.round(response.data.wind.speed),
    });
  }

  function search() {
    const apiKey = "37ao80323cfe0b171ed40af823227b0t";
    const apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;
    axios.get(apiUrl).then(searchUrl);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }
  function handleCityChange(event) {
    setCity(event.target.value);
  }

  if (weatherData.ready) {
    return (
      <div className="Search">
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col"></div>
            <div className="col-8">
              <input
                type="search"
                placeholder="Enter a city"
                className="form-control"
                autoFocus="on"
                onChange={handleCityChange}
              />
            </div>
            <div className="col text-left">
              <FontAwesomeIcon icon={faPenToSquare} className="pen" />
            </div>
          </div>
        </form>
        <div className="Weather">
          <WeatherInfo data={weatherData} />
        </div>
      </div>
    );
  } else {
    search();
    return (
      <Puff
        height="100"
        width="500"
        radius={1}
        color="#4fa94d"
        ariaLabel="puff-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    );
  }
}
