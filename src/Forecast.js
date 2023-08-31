import React, { useState, useEffect } from "react";
import "./forecast.css";

import DayForecast from "./DayForecast";
import axios from "axios";

export default function Forecast(props) {
  const [loaded, setLoader] = useState(false);
  const [forecastData, setForcastData] = useState();

  useEffect(() => {
    setLoader(false);
  }, [props.coordinates]);

  function handleResponse(response) {
    setForcastData(response.data.daily);
    setLoader(true);
  }

  function load() {
    let apiKey = "37ao80323cfe0b171ed40af823227b0t";
    let lon = props.coordinates.longitude;
    let lat = props.coordinates.latitude;
    let urlApi = `https://api.shecodes.io/weather/v1/forecast?lon=${lon}&lat=${lat}&key=${apiKey}&units=metric`;

    axios.get(urlApi).then(handleResponse);
  }

  if (loaded) {
    return (
      <div className="Forecast">
        <ul className="list-unstyled mt-2">
          {forecastData.map(function (dailyForecast, index) {
            if (index < 5) {
              return (
                <li>
                  <div className="row align-items-center" key={index}>
                    <DayForecast data={dailyForecast} />
                  </div>
                </li>
              );
            } else {
              return null;
            }
          })}
        </ul>
      </div>
    );
  } else {
    load();
    return null;
  }
}
