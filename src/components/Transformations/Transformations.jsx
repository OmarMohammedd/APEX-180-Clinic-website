import React from 'react'
import "./Transformations.css"
import img1 from "../../assets/Component 21.png"
import img2 from "../../assets/pls-12.jpg.png"
import img3 from "../../assets/pls-11.jpg.png"
import img4 from "../../assets/pls-13.jpg.png"


function Transformations() {
  return (
    <div className='Transformations'>
      <div className="over"></div>
           <div className="container">
               <div className="Transformations_left">
                   <img src={img1} alt="" />
               </div>
               <div className="Transformations_right">
                   <button className='first-btn'>BEFORE / AFTER</button>
                   <h3>Transformations</h3>

                   <div className='first_Transformations_right'>
                      <img src={img2} alt="" />
                      <div>
                         <h4>Cosmetic dentistry</h4>
                         <p className='frinst'>Lorem ipsum dolor sit amet, cons ectetur adipiscing elit quisque.</p>
                      </div>
                      <div>
                        <p className='seconde'>$ 1200</p>
                        <button>NEW</button>
                      </div>
                   </div>

                   <div className='first_Transformations_right'>
                      <img src={img3} alt="" />
                      <div>
                         <h4>Nerve stuffing</h4>
                         <p className='frinst'>Vivamus non lacus vel tellus molestie dictum. Morbi malesuada nibh vel.</p>
                      </div>
                      <div>
                        <p className='seconde'>$ 1999</p>
                        <button className='transparce'>NEW</button>
                      </div>
                   </div>

                   <div className='first_Transformations_right dddd'>
                      <img src={img4} alt="" />
                      <div>
                         <h4>tooth implant</h4>
                         <p className='frinst'>Curabitur scelerisque odio elementu maauris varius dictum maecenas facil.</p>
                      </div>
                      <div>
                        <p className='seconde'>$ 99</p>
                        <button className='transparce'>NEW</button>
                      </div>
                   </div>

               </div>
           </div>
    </div>
  )
}

export default Transformations