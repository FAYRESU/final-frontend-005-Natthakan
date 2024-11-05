import React from "react";

const PopularBox = () => {
  return (
    <section className="section" id="popular">
      <div className="top-header">
        <h1>Popular</h1>
      </div>
      <div className="project-container">
        <div className="project-box">
          <i className="uil uil-briefcase-alt"></i>
          <h3>อันดับ 1</h3>
          <label>ไม้บรรทัด ความยาว 30 เซนติเมตร</label>
        </div>
        <div className="project-box">
          <i className="uil uil-briefcase-alt"></i>
          <h3>อันดับ 2</h3>
          <label>ดินสอสีไม้ 12 แท่ง</label>
        </div>
        <div className="project-box">
          <i className="uil uil-briefcase-alt"></i>
          <h3>อันดับ 3</h3>
          <label>อุปกรณ์ระบายสีน้ำ</label>
        </div>
        <div className="project-box">
          <i className="uil uil-briefcase-alt"></i>
          <h3>อันดับ 4</h3>
          <label>อุปกรณ์วาดรูป</label>
        </div>
        <div className="project-box">
          <i className="uil uil-briefcase-alt"></i>
          <h3>อันดับ 5</h3>
          <label>สมุดรายงาน</label>
        </div>
        <div className="project-box">
          <i className="uil uil-briefcase-alt"></i>
          <h3>อันดับ 6</h3>
          <label>สมุดระบายสี</label>
        </div>
      </div>
    </section>
  );
};

export default PopularBox;
