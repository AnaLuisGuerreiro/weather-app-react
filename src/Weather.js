import React, { useState, useEffect } from "react";
import axios from "axios";
import { Puff } from "react-loader-spinner";

import WeatherInfo from "./WeatherInfo";
import "./weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });

  function searchUrl(response) {
    console.log(response);
    setWeatherData({
      ready: true,
      date: new Date(response.data.time * 1000),
      icon: "https://ssl.gstatic.com/onebox/weather/64/sunny.png",
      iconDescription: " ",
      city: response.data.city,
      description: response.data.condition.description,
      temp: Math.round(response.data.temperature.current),
      humidity: response.data.temperature.humidity,
      wind: Math.round(response.data.wind.speed),
    });
  }

  useEffect(() => {
    const apiKey = "37ao80323cfe0b171ed40af823227b0t";
    const apiUrl = `https://api.shecodes.io/weather/v1/current?query=${props.defaultCity}&key=${apiKey}`;
    axios.get(apiUrl).then(searchUrl);
  }, [props.defaultCity]);

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <WeatherInfo data={weatherData} />
      </div>
    );
  } else {
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
