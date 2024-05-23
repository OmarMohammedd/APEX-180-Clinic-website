import React from "react";
import "./blog.css";
import img1 from "../../assets/div.png";
import img2 from "../../assets/div-2.png";
import img3 from "../../assets/div-11.png";
import img4 from "../../assets/div-3.png";

function BLOG() {
  return (
    <div className="blog">
      <div className="container">
        <button>THE BLOG</button>
        <h2>Check Our News</h2>
        <div className="parent_carddd">
          <div className="cardd active">
            <div className="image">
              <img src={img1} alt="" />
            </div>
          <div className="cosmetic">
              <h3>cosmetic fillings</h3>
              <p>
                Cosmetic fillings, also known as composite fillings or
                tooth-colored fillings, are a tooth-colored alternative to
                traditional amalgam fillings. They are made of a composite plastic
                resin, and they look just like natural teeth.
              </p>
          </div>
          </div>
          <div className="cardd">
            <div className="image">
              <img src={img2} alt="" />
            </div>
          <div className="cosmetic">
              <h3>Dental implants</h3>
              <p>
              A dental implant is a prosthesis that interfaces with the bone of the jaw or skull to support a dental prosthesis such as a crown, bridge, denture, ...
            
              </p>
          </div>
          </div>
          <div className="cardd">
            <div className="image">
              <img src={img3} alt="" />
            </div>
          <div className="cosmetic">
              <h3>Latest Event</h3>
              <p>
              There are several types of oral surgery procedures performed each year. Some of the most common include tooth extraction, dental bone grafts, dental implants, periodontal surgery, corrective jaw surgery, sleep apnea surgery and cleft lip and palate repair
              </p>
          </div>
          </div>
          <div className="cardd">
            <div className="image">
              <img src={img4} alt="" />
            </div>
          <div className="cosmetic">
              <h3>New Website</h3>
              <p>
              Phasellus enim librobland vel sapien vitae, condime ntum ul tricies magnaetq uisque eu ismod orci.
              </p>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BLOG;
