import React from "react";
import "./about.css"
import img_1 from "../../assets/pls-011.jpg.png";
import img_2 from "../../assets/9c61052a0d746431fd27de5185f410fc.png";
import img_3 from "../../assets/a6c7eb7bd18d00c4508f82ffaa65a7cf.jpeg";
import img_4 from "../../assets/d02322209d1977ffd22af10504ef5c7e.jpeg";
import img_5 from "../../assets/5514a264bf807900084f602aa8cf5011.png";
import img_card_1 from "../../assets/pls-044.jpg.png";
import img_card_2 from "../../assets/pls-05.jpg.png";
import img_card_3 from "../../assets/pls-07.jpg.png";
import img_card_4 from "../../assets/pls-06.jpg.png";


function About() {
  return (
    <div className="about" id="About">
      <div className="container">

        <div className="aboutt">
          <div className="about_left">
            <div className="img_1">
              <img src={img_1} alt="" />
            </div>
            <div className="img_2">
              <img className="im_2" src={img_2} alt="" />
          </div>
          </div>
          <div className="about_right">
            <button>ABOUT US</button>
            <h2>APEX 180</h2>
            <p>
              To achieve excellence in dentistry through up-to-date technology and
              highly educated professionals.To change lives everyday by creating
              healthy and beautiful smiles.
            </p>
          
            <div className="provide">
              <img src={img_3} alt="" />
              <p>
                To provide outstanding dental care with a commitment of
                honesty,compassion, quality and integrity.
              </p>
            </div>
          
            <div className="ahmed">
                <div>
                   <img className="circle" src={img_4} alt="" />
                   <div>
                      <h4>DR.Ahmed Moftah</h4>
                      <p>MAIN DOCTOR</p>
                   </div>
                </div>
                <img className="rrrr" src={img_5} alt="" />
            </div>
          
            <p>Bachelor's degree in Oral and Dental Medicine
           a British Fellowship in Cosmetic and Implant Dentistry from the Royal College of Physicians and Surgeons - Glasgow and the Royal College of Surgeons - England - United Kingdom)
          f the American Society for Cosmetic and Implant Dentistry</p>
          </div>
        </div>

        <div className="parent_card">
            <div className="card">
                 <img src={img_card_1} alt="" />
                 <h4>Wisdom Teeth Removal</h4>
                 <p>FROM 1299 $</p>
            </div>
            <div className="card">
                 <img src={img_card_2} alt="" />
                 <h4>Dental Implant Surgery</h4>
                 <p>FROM 350 $</p>
            </div>
            <div className="card">
                 <img src={img_card_3} alt="" />
                 <h4>Bone Grafing Procedures</h4>
                 <p>FROM 2000 $</p>
            </div>
            <div className="card">
                 <img src={img_card_4} alt="" />
                 <h4>Oral Cancer Screening</h4>
                 <p>FROM 150 $</p>
            </div>
        </div>

      </div>
    </div>
  );
}

export default About;
