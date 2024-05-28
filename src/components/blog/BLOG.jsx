import React from "react";
import "./blog.css";
import img1 from "../../assets/div.png";
import img2 from "../../assets/div-2.png";
import img3 from "../../assets/div-11.png";
import img4 from "../../assets/div-3.png";

function BLOG() {
  return (
    <div className="blog" id="Blog">
      <div className="container">
        <button>THE BLOG</button>
        <h2>تحقق من أخبارنا</h2>
        <div className="parent_carddd">
          <div className="cardd active">
            <div className="image">
              <img src={img1} alt="" />
            </div>
          <div className="cosmetic" dir="rtl">
              <h3>الحشوات التجميليه</h3>
              <p>
              الحشوات التجميلية ، والمعروفة أيضا باسم الحشوات المركبة أو الحشوات الملونة بالأسنان ، هي بديل بلون الأسنان لحشوات الملغم التقليدية. إنها مصنوعة من راتنج بلاستيكي مركب ، وتبدو تماما مثل الأسنان الطبيعية.
              </p>
          </div>
          </div>
          <div className="cardd">
            <div className="image">
              <img src={img2} alt="" />
            </div>
          <div className="cosmetic" dir="rtl">
              <h3>زراعة الاسنان </h3>
              <p>
              زراعة الأسنان هي طرف اصطناعي يتفاعل مع عظم الفك أو الجمجمة لدعم بدلة الأسنان مثل التاج والجسر وطقم الأسنان ...
            
              </p>
          </div>
          </div>
          <div className="cardd">
            <div className="image">
              <img src={img3} alt="" />
            </div>
          <div className="cosmetic" dir="rtl">
              <h3>آخر الأحداث</h3>
              <p>
              هناك عدة أنواع من إجراءات جراحة الفم التي يتم إجراؤها كل عام. بعض من أكثرها شيوعا تشمل قلع الأسنان ، ترقيع عظام الأسنان ، زراعة الأسنان ، جراحة اللثة ، جراحة الفك التصحيحية ، جراحة توقف التنفس أثناء النوم وإصلاح الشفة المشقوقة والحنك المشقوق              </p>
          </div>
          </div>
          <div className="cardd">
            <div className="image">
              <img src={img4} alt="" />
            </div>
          <div className="cosmetic" dir="rtl">
              <h3>موقع جديد</h3>
              <p>
              يوفر معلومات حول الخدمات والأسعار وساعات العمل.   يسهل على المرضى حجز المواعيد              </p>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BLOG;
