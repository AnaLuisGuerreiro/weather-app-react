import React, { useState } from "react";

import "./weather.css";

export default function Units(props) {
  const [unit, setUnit] = useState("celsius");

  function showFharenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }
  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }
  function fahrenheit() {
    return (props.celsius * 9) / 5 + 32;
  }

  if (unit === "celsius") {
    return (
      <div className="Units">
        <h2>
          {props.celsius}
          <span className="unit">
            ºC
            <a href="/" onClick={showFharenheit}>
              <span> | </span>
              ºF
            </a>
          </span>
        </h2>
      </div>
    );
  } else {
    return (
      <div className="Units">
        <h2>
          {Math.round(fahrenheit())}
          <span className="unit">
            <a href="/" onClick={showCelsius}>
              ºC
              <span> | </span>
            </a>
            ºF
          </span>
        </h2>
      </div>
    );
  }
}
