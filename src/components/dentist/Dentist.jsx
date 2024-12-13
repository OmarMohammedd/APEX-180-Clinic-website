// DentalCard.jsx
import React from 'react';
import { FaFacebook, FaWhatsapp, FaTwitter, FaLinkedin } from 'react-icons/fa';
import './Dentist.css';
import imgDocrot from "../../assets/doctor.jpeg" 

const DentalCard = () => {
  return (
    <div className="card-container">
      <div className="image-container">
        <img 
          src={imgDocrot}
          alt="Professional headshot" 
        />
      </div>

      <div className="content-container">
        <p className="doctor-name">
          <span className="tooth-icon">🦷</span>
          <h2>الدكتور أحمد مفتاح</h2>
        </p>
        <div className="certificates">
  <div className="doctor-credential primary">
    حاصل على بكالوريوس طب الفم والأسنان.
  </div>
  
  <div className="doctor-credential secondary">
    حاصل على الزمالة البريطانية في تجميل وزراعة الأسنان من كلية الأطباء والجراحين الملكية - جلاسكو، وكلية الجراحين الملكية - إنجلترا، المملكة المتحدة.
  </div>
  
  <div className="doctor-credential tertiary">
    عضو في الجمعية الأمريكية لتجميل وزراعة الأسنان.
  </div>
</div>
        {/* <div className="social-icons">
          <button className="social-button">
            <FaFacebook />
          </button>
          <button className="social-button">
            <FaWhatsapp />
          </button>
          <button className="social-button">
            <FaTwitter />
          </button>
          <button className="social-button">
            <FaLinkedin />
          </button>
        </div> */}
      </div>
    </div>
  );
};

export default DentalCard;