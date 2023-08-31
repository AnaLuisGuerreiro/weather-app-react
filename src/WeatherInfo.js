import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDropletSlash } from "@fortawesome/free-solid-svg-icons";
import { faWind } from "@fortawesome/free-solid-svg-icons";

import WeatherIcon from "./Icons";
import Units from "./Units";
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
          <WeatherIcon code={props.data.icon} size={60} />
          <h1>{props.data.city}</h1>
          <span className="text-capitalize">{props.data.description}</span>
        </div>
        <div className="col">
          {" "}
          <Units celsius={props.data.temp} />
          <span>--------------</span>
          <ul className="list-unstyled">
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
