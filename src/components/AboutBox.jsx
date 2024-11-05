import React from "react";
import avatar from "../assets/images/book.jpg";
import mai from "../assets/images/mai.png";

const AboutBox = () => {
  return (
    <section className="section" id="about">
      <div className="top-header">
        <h1>About As</h1>
      </div>
      <div className="row">
        {/**About Me */}
        <div className="col">
          <div className="about-info">
            <h3>สมุดริมลวด สมุดสันห่วง ขนาด A5 ลายลิขสิทธิ์แท้</h3>
            <p>
              ขนาด A5 (14.2x21.cm) กระดาษ 80 แกรม จำนวน 40 แผ่น แบบมีเส้นบรรทัด
              มีปกให้เลือก 4 ลาย
            </p>
            <div className="about-image">
              <div className="image">
                <img src={avatar} alt="avatar" />
              </div>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="about-info">
            <h3>ไม้บรรทัดฟุตเหล็ก ยาว 20 เซนติเมตร </h3>
            <p>
              เหมาะสำหรับนักเรียน นักศึกษา ใช้งานได้เหมือนไม้บรรทัดปกติ
              น้ำหนักเบา พกพาสะดวก น่าใช้งาน ไม้บรรทัดยาว 20 เซนติเมตร (8 นิ้ว)
              ไม่หักไม่งอ แข็งแรง ทนทาน ผลิตจากวัสดุคุณภาพดี
              ปลอดภัยเพราะไม่มีสารเคมี
            </p>
            <div className="about-image">
              <div className="image">
                <img src={mai} alt="avatar" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutBox;
