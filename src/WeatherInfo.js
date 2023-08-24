import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDroplet } from "@fortawesome/free-solid-svg-icons";
import { faDropletSlash } from "@fortawesome/free-solid-svg-icons";
import { faWind } from "@fortawesome/free-solid-svg-icons";

import FormattedDate from "./FormattedDate";

import "./weather.css";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <p className="pt-2">
        <FormattedDate date={props.data.date} />
      </p>
      <div className="row">
        <div className="col mb-3">
          <img src={props.data.icon} alt={props.data.iconDescription} />
          <h1>{props.data.city}</h1>
          <span className="text-capitalize">{props.data.description}</span>
        </div>
        <div className="col">
          {" "}
          <h2>
            {props.data.temp}
            <span className="unit">ºC</span>
          </h2>
          <ul className="list-unstyled">
            <li className="precipitation">
              <FontAwesomeIcon icon={faDroplet} />
              <span> Precipitation: %</span>
            </li>
            <li className="humidity">
              <FontAwesomeIcon icon={faDropletSlash} />
              <span> Humidity: {props.data.humidity} km/h</span>
            </li>
            <li className="wind">
              <FontAwesomeIcon icon={faWind} />
              <span> Wind: {props.data.wind} km/h</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
