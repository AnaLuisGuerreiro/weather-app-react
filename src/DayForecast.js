import React from "react";
import Icons from "./Icons";

export default function DayForecast(props) {
  function maxTemp() {
    return `${Math.round(props.data.temperature.maximum)}º`;
  }
  function minTemp() {
    return `${Math.round(props.data.temperature.minimum)}º`;
  }
  function day() {
    let date = new Date(props.data.time * 1000);
    let day = date.getDay();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return days[day];
  }

  return (
    <div className="DayForecast">
      <div className="row align-items-center">
        <div className="col weekday">{day()}</div>
        <div className="col">
          <Icons code={props.data.condition.icon} size={30} />
        </div>
        <div className="col">
          {" "}
          <strong className="max-temp">{maxTemp()} / </strong>
          <span className="min-temp">{minTemp()}</span>
        </div>
      </div>
    </div>
  );
}
