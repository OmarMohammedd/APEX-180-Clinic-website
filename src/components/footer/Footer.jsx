import React from "react";
import "./footer.css";
import img from "../../assets/log00o.png";

function Footer() {
  return (
    <div className="footer" style={{background:'#ccc'}}>
      <div className="container">
      <div className="containerr" dir="rtl">
          <img src={img} alt="" className="responsive-logo logo" />
        <div>
        <i className="icon-map-marker FiPhone"></i>
            <p>
              ٣٥ الحجاز متفرع من شارع لبنان امام سعودي المهندسين
            </p>
        </div>
          <div>
            <i className="icon-phone FiPhone"></i>
            
            <p>
            <a href="tel:+201126668255">
               01126668255
               </a></p>
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
