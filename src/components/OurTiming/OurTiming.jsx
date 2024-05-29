import React from "react";
import "./Ourtiming.css";
import img_card_1 from "../../assets/pls-044.jpg.png";
import img_card_2 from "../../assets/pls-05.jpg.png";
import img_card_3 from "../../assets/pls-07.jpg.png";
import img_card_4 from "../../assets/pls-06.jpg.png";


function OurTiming() {
  return (
    <div className="ourtimingg">
        <h1 className="h1">Our Timing</h1>
      <div className="ourtiming" id="OurTiming">
      <div className="container">
        <div className="overlay"></div>

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
        <div className="calll">

          <p className="location">٣٥ الحجاز متفرع من شارع لبنان امام سعودي المهندسين</p>
          
          <div className="call">
              <p>Call us</p>
            
            <a href="tel:+201126668255">
              <span>01126668255</span>
            </a>
          </div>

        </div>
        
      </div>
    </div>

    <div className="container">
    <div className="parent_card">
          <div className="card">
            <img src={img_card_1} alt="" />
            <h4>طب اسنان الاطفال</h4>
          </div>
          <div className="card">
            <img src={img_card_2} alt="" />
            <h4>زراعة الاسنان</h4>
          </div>
          <div className="card">
            <img src={img_card_3} alt="" />
            <h4>تجميل</h4>
          </div>
          <div className="card">
            <img src={img_card_4} alt="" />
            <h4>تركيبات</h4>

          </div>
        </div>
    </div>
    </div>
  
  );
}

export default OurTiming;
