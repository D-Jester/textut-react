import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom"

export default function Navbar(props) {
  return (
    <div>
      <nav
        class={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
      >
        <div class="container-fluid">
          <Link class="navbar-brand" to="">
            <b>{props.title}</b>
          </Link>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <Link class="nav-link active" aria-current="page" to="/">
                  {props.first}
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/about">
                  {props.second}
                </Link>
              </li>
            </ul>
          </div>
          <div
            class={`form-check form-switch text-${
              props.mode === "dark" ? "light" : "dark"
            }`}
          >
            <input
              class="form-check-input"
              type="checkbox"
              role="switch"
              onClick={props.toggleMode}
              id="flexSwitchCheckDefault"
            />
            <label class="form-check-label" for="flexSwitchCheckDefault">
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
