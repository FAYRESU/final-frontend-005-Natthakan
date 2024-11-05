import React from "react";

const ReviewBox = () => {
  return (
    <section className="section" id="review">
      <div className="top-header">
        <h1>Review</h1>
      </div>
      <div className="project-container">
        <div className="project-box">
          <i className="uil uil-briefcase-alt"></i>
          <h3>User1</h3>
          <label>"บริการประทับใจ จัดส่งไว แอดมินเพจตอบไว"</label>
        </div>
        <div className="project-box">
          <i className="uil uil-briefcase-alt"></i>
          <h3>User2</h3>
          <label>
            "ต้องการสินค้าประเภทไหนสามารถสอบถามได้
            แล้วแอดมินจะตอบมาอย่างรวดเร็ว"
          </label>
        </div>
        <div className="project-box">
          <i className="uil uil-briefcase-alt"></i>
          <h3>User3</h3>
          <label>
            "ต้องการสินค้าประเภทไหนสามารถสอบถามได้
            แล้วแอดมินจะตอบมาอย่างรวดเร็ว"
          </label>
        </div>
      </div>
    </section>
  );
};

export default ReviewBox;
