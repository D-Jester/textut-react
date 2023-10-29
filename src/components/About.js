import React, { useState } from "react";
import PropTypes from "prop-types";
export default function About(props) {    
  return (
    <>
      <div className={`container text-${props.mode === "dark" ? "light" : "dark"}`}>
        <h1>{props.heading}</h1>
        <div className="accordion accordion-flush" id="accordionFlushExample">
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseOne"
                aria-expanded="false"
                aria-controls="flush-collapseOne"
                style={{color:(props.mode==="dark")?"white":"black",
                backgroundColor:(props.mode==="dark")?"#454749":"white"}}
              >
                What is TextUT?
              </button>
            </h2>
            <div
              id="flush-collapseOne"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionFlushExample"
              style={{color:(props.mode==="dark")?"white":"black",
                backgroundColor:(props.mode==="dark")?"#454749":"white"}}
            >
              <div className="accordion-body">
                Its a basic <strong>text utilities app</strong>, with different options to 
                change text according to user's choice.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseTwo"
                aria-expanded="false"
                aria-controls="flush-collapseTwo"
                style={{color:(props.mode==="dark")?"white":"black",
                backgroundColor:(props.mode==="dark")?"#454749":"white"}}
              >
                Is there dark mode for this web app?
              </button>
            </h2>
            <div
              id="flush-collapseTwo"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionFlushExample"
              style={{color:(props.mode==="dark")?"white":"black",
                backgroundColor:(props.mode==="dark")?"#454749":"white"}}
            >
              <div className="accordion-body">
                Dark mode can be switched on or off from the top right corner of the 
                navigation bar.
              </div>
            </div>
          </div>         
        </div>
      </div>
    </>
  );
}

About.propTypes = {
  heading: PropTypes.string.isRequired,
  mode: PropTypes.string.isRequired,
};

About.defaultProps = {
  heading: "About Us:",
};
