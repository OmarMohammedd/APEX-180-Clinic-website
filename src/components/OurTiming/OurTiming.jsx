import React from "react";
import "./Ourtiming.css";

function OurTiming() {
  return (
    <div className="ourtiming" id="OurTiming">
      <div className="container">
        <div className="overlay"></div>
        <h1>Our Timing</h1>
        <div className="table">
          <div>
            <p>Saturday</p>
            <button>3 TO 10</button>
          </div>
          <div>
            <p>Sunday</p>
            <button>3 TO 10</button>
          </div>
          <div>
            <p>Monday</p>
            <button>3 TO 10</button>
          </div>
          <div>
            <p>Tuesday</p>
            <button>3 TO 10</button>
          </div>
          <div>
            <p>Wednesday</p>
            <button>3 TO 10</button>
          </div>
          <div>
            <p>Thursday</p>
            <button>3 TO 10</button>
          </div>
        </div>
        <div className="call">
          
            <p>Call us</p>
          
          <a href="tel:+201126668255">
            <span>01126668255</span>
          </a>

        </div>
      </div>
    </div>
  );
}

export default OurTiming;
