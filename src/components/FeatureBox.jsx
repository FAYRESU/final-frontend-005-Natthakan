import React from "react";
import avatar from "../assets/images/book.jpg";
const FeaturedBox = () => {
  return (
    <section className="featured-box" id="home">
      <div className="featured-text">
        <div className="featured-name">
          ร้านค้า <span className="typedText"></span>
        </div>
        <div className="featured-text-info">
          <p>
            สมุดริมลวด สมุดสันห่วง ขนาด A5 ลายลิขสิทธิ์แท้ ขนาด A5 (14.2x21.cm)
            กระดาษ 80 แกรม จำนวน 40 แผ่น แบบมีเส้นบรรทัด มีปกให้เลือก 4 ลาย
          </p>
        </div>
        <div className="featured-text-btn">
          <button className="btn">
            Show Now <i className="uil uil-import"></i>
          </button>
          <button className="btn">
            Know More <i className="uil uil-import"></i>
          </button>
        </div>
        <div className="social_icons">
          <div className="icon">
            <a href="https://www.instagram.com/">
              <i className="uil uil-instagram-alt"></i>
            </a>
          </div>
          <div className="icon">
            <a href="https://www.facebook.com/?locale=th_TH">
              <i className="uil uil-facebook"></i>
            </a>
          </div>
          <div className="icon">
            <a href="https://github.com/FAYRESU">
              <i className="uil uil-github"></i>
            </a>
          </div>
        </div>
      </div>
      <div className="featured-image">
        <div className="image">
          <img src={avatar} alt="avatar" />
        </div>
      </div>
      <div className="scroll-icon-box">
        <a href="#about" className="scroll-btn">
          <i className="uil uil-mouse-alt"></i>
          <p>Scroll Down</p>
        </a>
      </div>
    </section>
  );
};

export default FeaturedBox;
