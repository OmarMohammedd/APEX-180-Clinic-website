import React from 'react'
import "./footer.css"
import img from "../../assets/log00o.png"
import { FiPhone } from "react-icons/fi";


function Footer() {
  return (
    <div className='footer'>
        <div className="container">
             <img src={img} alt="" className="responsive-logo"/>
              <p>© Copyright - <span>APEX 180 </span>| Developed by 
                 <a href="https://wa.me/+201090540382"> Omar AbdElraheem </a>
              </p>
             <div>
                  <FiPhone className="FiPhone"/>
                  <p>CALL US :01126668255</p>
             </div>
        </div>
    </div>
  )
}

export default Footer