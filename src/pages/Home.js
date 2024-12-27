import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

export default function Home() {
  return (
    <div className="container my-4">
      <h1 className="mb-3 text-center text-success">ข้อมูลทั่วไปของสาขา</h1>
      <div className="card shadow-lg p-4 mb-4 rounded">
        <p>
          การคิดและทำอย่างสร้างสรรค์ คือแรงผลักดันที่พวกเรา ชาวเทคโนโลยีสารสนทศ วิทยาลัยเทคโนโลยีโปลิเทคนิคลานนา เชียงใหม่ ใช้เป็นแนวทางในการผลิตคอมพิวเตอร์ สร้างองค์ความที่โดนเด่นโดยบุคลากรผู้ทรงคุณวุฒิทั้งภายในและภายนอกสถานศึกษา เพิ่มพูนทักษะ ในด้านซ่อมบำรุงรักษาคอมพิวเตอร์ทั้งซอฟต์แวร์ และฮาร์ดแวร์ ผู้ที่สำเร็จการศึกษาสาขาสามารถประกอบอาชีพ ช่างในทุกองค์กรที่มีคอมพิวเตอร์หรือระบบสารสนเทศ ธุรกิจที่มีเทคโนโลยีสารสนเทศอยู่ ธุรกิจที่มีเทคโนโลยีสารสนเทศเป็นแกนหลัก ได้แก่ ธุรกิจผลิตซอฟต์แวร์หรือโปรแกรมคอมพิวเตอร์ ธุรกิจบริการด้านข้อมูลข่าวสาร ธุรกิจด้านการให้บริการระบบเครือข่ายคอมพิวเตอร์ ระบบอินเตอร์เน็ตหรือระบบเครือข่ายมือถือ ธุรกิจให้บริการด้านพาณิชย์ อิเล็กทรอนิกส์หรืออี-คอมเมิร์ช ธุรกิจให้คำปรึกษาด้านเทคโนโลยีสารสนทศ หรือที่เรียกว่าธุรกิจคอนซัลแตนต์ ธุรกิจแอนิเมชันและเกม
        </p>
      </div>

      <div className="d-flex justify-content-center my-4">
        <div id="carouselExample" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src="https://www.lannapoly.ac.th/web/assets/img-it-UTNwL-IP.jpeg" className="d-block w-100 img-fluid rounded" alt="Slide 1" />
            </div>
            <div className="carousel-item">
              <img src="https://www.lannapoly.ac.th/web/gallery/20240401-034105.jpg" className="d-block w-100 img-fluid rounded" alt="Slide 2" />
            </div>
            <div className="carousel-item">
              <img src="https://www.lannapoly.ac.th/web/gallery/20241204-024758.jpg" className="d-block w-100 img-fluid rounded" alt="Slide 3" />
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>

      <h2 className="text-center mt-5 text-success">ยินดีต้อนรับสู่สาขาเทคโนโลยีสารสนเทศ (IT)</h2>
      <div className="card shadow-lg p-4 mb-4 rounded">
        <p className="text-center">
          เราเชื่อมั่นในพลังของเทคโนโลยีในการเชื่อมต่อ สร้างสรรค์ และขับเคลื่อนโลกไปสู่อนาคตที่ดียิ่งขึ้น ที่นี่คือสถานที่ที่ความคิดสร้างสรรค์และความเชี่ยวชาญทางเทคโนโลยีมาบรรจบกัน เพื่อสร้างโอกาสใหม่ๆ ให้กับคุณและสังคม เรามุ่งมั่นที่จะสนับสนุนการเรียนรู้และพัฒนาของคุณในทุกๆ ก้าวของเส้นทาง IT ไปด้วยกัน!
        </p>
      </div>

      <h3 className="text-center mt-4 text-success">นวัตกรรมเพื่อการพัฒนา ความรู้เพื่อความยั่งยืน</h3>
      <div className="card shadow-lg p-4 mb-4 rounded">
        <p className="text-center">
          เรามุ่งมั่นสร้างบุคลากรที่มีความรู้ ความสามารถ และจริยธรรม พร้อมที่จะเป็นผู้นำในยุคดิจิทัล เพื่อสร้างความเปลี่ยนแปลงเชิงบวกให้กับสังคมและโลกของเรา ผ่านการพัฒนาทางเทคโนโลยีที่ก้าวล้ำและยั่งยืน
        </p>
      </div>
    </div>
  );
}
