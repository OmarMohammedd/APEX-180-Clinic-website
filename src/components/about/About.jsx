import React from "react";
import "./about.css";
import img_1 from "../../assets/doctor-back.jpeg";
import img_2 from "../../assets/9c61052a0d746431fd27de5185f410fc.png";
import img_3 from "../../assets/a6c7eb7bd18d00c4508f82ffaa65a7cf.jpeg";
import img_4 from "../../assets/avatar.png";
import img_5 from "../../assets/5514a264bf807900084f602aa8cf5011.png";


function About() {
  return (
    <div className="about" id="About">
      <div className="container">
        <div className="aboutt">
          <div className="about_left">
            <div className="img_1">
              <img src={img_1} alt="" />
            </div>
          </div>
          <div className="about_right">
            <button>ABOUT US</button>
            <h2>APEX 180</h2>
            <p>
              To achieve excellence in dentistry through up-to-date technology
              and highly educated professionals.To change lives everyday by
              creating healthy and beautiful smiles.
            </p>

            <div className="provide">
              <img src={img_3} alt="" />
              <p dir="rtl">
              تقديم رعاية أسنان متميزة مع الالتزام بالصدق والرحمة والجودة والنزاهة.
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

            <p dir="rtl" className="paragraph">
            بكالريوس طب الفم والاسنان <br />
حاصل علي الزماله البربطانيه  في تجميل وزراعه الاسنان من كلية الاطباء والجراحين الملكيه _ جلاسكو وكلية الجراحين الملكيه -إنجلترا- المملكه المتحده )
عضو في الجمعيه المريكيه لتجميل وزراعه الاسنان
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
