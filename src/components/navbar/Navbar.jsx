import React from "react";
import "./navbar.css";
import logo from "../../assets/logo.png";
import { TiLocationOutline } from "react-icons/ti";
import { FiPhone } from "react-icons/fi";


function Navbar() {
  return (
  <header>
      <div className="navbar">
      <div className="container">
        <div className="image">
          <img src={logo} alt="" className="responsive-logo"/>
        </div>

        <div className="center_navbar">
          <TiLocationOutline className="TiLocationOutline"/>
          <p>
            35 Al-Hejaz, located from Lebanon Street, <br /> in front of Saudi
            Mohandiseen
          </p>
        </div>

        <div className="left_navbar">
          <FiPhone className="FiPhone"/>
          <p>CALL US :01126668255</p>
        </div>
      </div>
    </div>

    
      <div className="header">
      <div className="container">
      <h1>Experience the Difference</h1>
      <h1 className="our">In Our Dental care</h1>
      </div>
    </div>
  </header>
  );
}

export default Navbar;
