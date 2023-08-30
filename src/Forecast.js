import React, { useState } from "react";
import "./forecast.css";

import DayForecast from "./DayForecast";
import axios from "axios";

export default function Forecast(props) {
  const [loaded, setLoader] = useState(false);
  const [forecastData, setForcastData] = useState();
  function handleResponse(response) {
    setForcastData(response.data.daily);
    setLoader(true);
  }

  if (loaded) {
    console.log(forecastData);
    return (
      <div className="Forecast">
        <ul className="list-unstyled mt-2">
          <li>
            <div className="row align-items-center">
              <DayForecast data={forecastData[0]} />
            </div>
          </li>
        </ul>
      </div>
    );
  } else {
    let apiKey = "37ao80323cfe0b171ed40af823227b0t";
    let lon = props.coordinates.longitude;
    let lat = props.coordinates.latitude;
    let urlApi = `https://api.shecodes.io/weather/v1/forecast?lon=${lon}&lat=${lat}&key=${apiKey}&units=metric`;

    axios.get(urlApi).then(handleResponse);
    return null;
  }
}
