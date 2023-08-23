import React, { useState } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDroplet } from "@fortawesome/free-solid-svg-icons";
import { faDropletSlash } from "@fortawesome/free-solid-svg-icons";
import { faWind } from "@fortawesome/free-solid-svg-icons";
import { Puff } from "react-loader-spinner";

import "./weather.css";

export default function Weather() {
  const [weatherData, setWeatherData] = useState({ loaded: false });
  function searchUrl(response) {
    setWeatherData({
      date: "Monday, 07h00",
      icon: "https://ssl.gstatic.com/onebox/weather/64/sunny.png",
      iconDescription: response.data.weather[0].description,
      city: response.data.city,
      description: response.data.condition.description,
      temp: Math.round(response.data.temperature.current),
      humidity: response.data.temperature.humidity,
      wind: Math.round(response.data.wind.speed),
    });
  }

  if (weatherData.loaded) {
    return (
      <div className="Weather">
        <p className="pt-2">{weatherData.date}</p>
        <div className="row">
          <div className="col mb-3">
            <img src={weatherData.icon} alt={weatherData.iconDescription} />
            <h1>{weatherData.city}</h1>
            <span className="text-capitalize">{weatherData.description}</span>
          </div>
          <div className="col">
            {" "}
            <h2>
              {weatherData.temp}
              <span className="unit">ºC</span>
            </h2>
            <ul className="list-unstyled">
              <li className="precipitation">
                <FontAwesomeIcon icon={faDroplet} />
                <span> Precipitation: %</span>
              </li>
              <li className="humidity">
                <FontAwesomeIcon icon={faDropletSlash} />
                <span> Humidity: {weatherData.humidity} km/h</span>
              </li>
              <li className="wind">
                <FontAwesomeIcon icon={faWind} />
                <span> Wind: {weatherData.wind} km/h</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "37ao80323cfe0b171ed40af823227b0t";
    const apiUrl = `https://api.shecodes.io/weather/v1/current?query=Porto&key=${apiKey}`;

    axios.get(apiUrl).then(searchUrl);
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
