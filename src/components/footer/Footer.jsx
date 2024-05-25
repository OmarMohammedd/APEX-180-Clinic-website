import React from "react";
import "./footer.css";
import img from "../../assets/log00o.png";

function Footer() {
  return (
    <div className="footer">
      <div className="container">
      <div className="containerr">
          <img src={img} alt="" className="responsive-logo logo" />
        <div>
        <i className="fa-solid fa-location-dot FiPhone"></i>
            <p>
              35 Al-Hejaz, located from Lebanon Street, in front of Saudi
              Mohandiseen
            </p>
        </div>
          <div>
            <i className="fa-solid fa-phone FiPhone"></i>
            <p>CALL US :01126668255</p>
          </div>
      </div>

        <p className="pragraph">© Copyright - <span>APEX 180 </span>| Developed by 
                 <a href="https://wa.me/+201090540382"> Omar AbdElraheem </a>
        </p>
      </div>
    </div>
  );
}

export default Footer;
