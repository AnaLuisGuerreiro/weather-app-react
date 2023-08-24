import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

import "./search.css";

export default function Search(props) {
  const [city, setCity] = useState(props.defaultCity);

  function search() {
    const apiKey = "37ao80323cfe0b171ed40af823227b0t";
    const apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;

    axios
      .get(apiUrl)
      .then((response) => {
        props.onSearch(response.data);
      })
      .catch((error) => {
        console.error("Erro ao buscar dados da API:", error);
      });
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
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
