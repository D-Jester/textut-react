import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom"

export default function Navbar(props) {
  return (
    <div>
      <nav
        className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
      >
        <div className="container-fluid">
          <Link className="navbar-brand" to="">
            <b>{props.title}</b>
          </Link>          
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  {props.first}
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  {props.second}
                </Link>
              </li>
            </ul>
          </div>
          <div
            className={`form-check form-switch text-${
              props.mode === "dark" ? "light" : "dark"
            }`}
          >
            <input
              className="form-check-input"
              type="checkbox"
              role="switch"
              onClick={props.toggleMode}
              id="flexSwitchCheckDefault"
            />
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
              {props.mode === "dark" ? "Light Mode" : "Dark Mode"}
            </label>
          </div>
        </div>
      </nav>
    </div>
  );
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  first: PropTypes.string.isRequired,
  second: PropTypes.string.isRequired,
};

Navbar.defaultProps = {
  title: "App name",
  first: "First option",
  second: "Second option",
};
