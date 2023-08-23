import React from "react";
import "./forecast.css";

export default function Forecast() {
  return (
    <div className="Forecast">
      <ul className="list-unstyled mt-2">
        <li>
          <div className="row align-items-center">
            <div className="col weekday">Mon</div>
            <div className="col">
              <img
                src="https://ssl.gstatic.com/onebox/weather/64/sunny.png"
                alt="sunny"
              />
            </div>
            <div className="col">
              {" "}
              <strong>20º/ </strong>
              <span className="minimum_temp">12º</span>
            </div>
          </div>
        </li>
        <li>
          <div className="row align-items-center">
            <div className="col weekday">Mon</div>
            <div className="col">
              <img
                src="https://ssl.gstatic.com/onebox/weather/64/sunny.png"
                alt="sunny"
              />
            </div>
            <div className="col">
              {" "}
              <strong>20º/ </strong>
              <span className="minimum_temp">12º</span>
            </div>
          </div>
        </li>
        <li>
          <div className="row align-items-center">
            <div className="col weekday">Mon</div>
            <div className="col">
              <img
                src="https://ssl.gstatic.com/onebox/weather/64/sunny.png"
                alt="sunny"
              />
            </div>
            <div className="col">
              {" "}
              <strong>20º/ </strong>
              <span className="minimum_temp">12º</span>
            </div>
          </div>
        </li>
        <li>
          <div className="row align-items-center">
            <div className="col weekday">Mon</div>
            <div className="col">
              <img
                src="https://ssl.gstatic.com/onebox/weather/64/sunny.png"
                alt="sunny"
              />
            </div>
            <div className="col">
              {" "}
              <strong>20º/ </strong>
              <span className="minimum_temp">12º</span>
            </div>
          </div>
        </li>
        <li>
          <div className="row align-items-center">
            <div className="col weekday">Mon</div>
            <div className="col">
              <img
                src="https://ssl.gstatic.com/onebox/weather/64/sunny.png"
                alt="sunny"
              />
            </div>
            <div className="col">
              {" "}
              <strong>20º/ </strong>
              <span className="minimum_temp">12º</span>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
}
