import React,{useState} from "react";
import "./navbar.css";
import logo from "../../assets/log00o.png";
import { Link } from "react-router-dom";
import DentalCard from "../dentist/Dentist";


function Navbar() {

  const [state, setstate] = useState(false)
const clicke = () => {
  setstate(!state)
}


  return (
    
  <header>
     <nav>
     <div className="container">
        <Link to='/'>
        <div className="image">
          <img src={logo} alt="" className="responsive-logo"/>
        </div>
        </Link>

        <div>
          <ul id="navbar" className={state ? "#navbar active" : "#navbar"}>
            <li>
              <a className="active" href="#About">
               About
              </a>
            </li>
            <li>
              <a href="#OurTiming">Our Timing</a>
            </li>
            <li>
              <a href="#Transformation">Transformation</a>
            </li>
            <li>
              <a href="#Contact">Contact </a>
            </li>
            <li>
              <a href="#Blog">Blog </a>
            </li>
          </ul>
        </div>

        <div id="moblie" onClick={clicke} style={{marginTop:"0.7rem"}}>
          <i id="bar" 
          style={{color:'white', }}
            // className={state ? "fas fa-times" : "fas fa-bars"}
            className={state ? "icon-times" : "icon-bars"}
          ></i>
        </div>
      </div>
      </nav>
  

    
      <div className="header">
        <div className="overrr"></div>
      <div className="container">
      <h1 className="Experience">Experience the Difference</h1>
      <h1 className="our">In Our Dental care</h1>
      </div>
    </div>

  
  </header>
  );
}

export default Navbar;
