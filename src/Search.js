import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";

import "./search.css";

export default function Search(props) {
  let [city, setCity] = useState(props.defaultCity);
  function handleSubmit(event) {
    event.preventDefault();
    alert(city);
  }
  function handleCityChange(event) {
    setCity(event.target.value);
  }
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
    </div>
  );
}
