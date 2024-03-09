import React from "react";
import "./Hello.css";
const Hello = () => {
  return (
    <>
      <div className="hello">
        <div className="hero-container">
          <div className="hello-left-left">
            <p>slick.</p>
          </div>
          <div className="hero-left-right">
            <div className="hello-left">
              <h3>
                Our philosophy is simple: start small, validate swiftly, and
                scale incrementally.
              </h3>
            </div>
            <div className="hello-right">
              <div className="hello-right-content">
                <p>
                  We believe in crafting Minimum Viable Products that serve as
                  agile launchpads, allowing founders to test hypotheses, gather
                  insights.
                </p>
                <h4>
                  OUR INFO
                  <hr></hr>
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hello;
