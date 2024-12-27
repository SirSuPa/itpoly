import React from "react";

export default function About() {
  return (
    <div className="container my-4">
      <h1 className="mb-3 text-center text-primary">เกี่ยวกับสาขาเทคโนโลยีสารสนเทศ (IT)</h1>

      <div className="card shadow-lg p-4 mb-4 rounded">
        <h2 className="text-center text-secondary">ประวัติความเป็นมา</h2>
        <p>
          สาขาเทคโนโลยีสารสนเทศก่อตั้งขึ้นเพื่อพัฒนาบุคลากรที่มีความรู้และทักษะ
          ด้านเทคโนโลยีสารสนเทศ รองรับความต้องการของอุตสาหกรรมยุคดิจิทัล
          และส่งเสริมการเรียนรู้แบบบูรณาการ
        </p>
      </div>

      <div className="card shadow-lg p-4 mb-4 rounded">
        <h2 className="text-center text-secondary">วิสัยทัศน์และพันธกิจ</h2>
        <ul>
          <li>พัฒนาผู้เรียนให้มีความรู้และทักษะที่ทันสมัย</li>
          <li>เสริมสร้างความคิดสร้างสรรค์และนวัตกรรม</li>
          <li>สร้างบุคลากรที่มีคุณธรรมและจริยธรรม</li>
        </ul>
      </div>

      <div className="card shadow-lg p-4 mb-4 rounded">
        <h2 className="text-center text-secondary">จุดเด่นของสาขา</h2>
        <p>
          เรามีอุปกรณ์การเรียนการสอนที่ทันสมัย บุคลากรที่เชี่ยวชาญ
          และหลักสูตรที่ตอบโจทย์ความต้องการของตลาดแรงงาน
        </p>
      </div>

      <div className="card shadow-lg p-4 mb-4 rounded">
        <h2 className="text-center text-secondary">ทีมงานของเรา</h2>
        <div className="row">
          <div className="col-md-4 text-center">
            <img
              src="https://via.placeholder.com/150"
              alt="อาจารย์ 1"
              className="rounded-circle mb-2"
            />
            <h5>อาจารย์ A</h5>
            <p>เชี่ยวชาญด้าน Software Development</p>
          </div>
          <div className="col-md-4 text-center">
            <img
              src="https://via.placeholder.com/150"
              alt="อาจารย์ 2"
              className="rounded-circle mb-2"
            />
            <h5>อาจารย์ B</h5>
            <p>เชี่ยวชาญด้าน Network Security</p>
          </div>
          <div className="col-md-4 text-center">
            <img
              src="https://via.placeholder.com/150"
              alt="อาจารย์ 3"
              className="rounded-circle mb-2"
            />
            <h5>อาจารย์ C</h5>
            <p>เชี่ยวชาญด้าน Data Science</p>
          </div>
        </div>
      </div>

      <div className="text-center mt-4">
        <p className="text-muted">
          มาร่วมเป็นส่วนหนึ่งของการเรียนรู้และพัฒนากับสาขาเทคโนโลยีสารสนเทศ
        </p>
      </div>
    </div>
  );
}
