import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";

import "./search.css";

export default function Search() {
  return (
    <div className="Search">
      <form>
        <div className="row">
          <div className="col"></div>
          <div className="col-8">
            <input
              type="search"
              placeholder="Enter a city"
              className="form-control"
              autoFocus="on"
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
