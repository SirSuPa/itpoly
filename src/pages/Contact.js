import React from "react";

export default function Contact() {
  return (
    <div className="container my-4">
      <h1 className="mb-3 text-center text-danger">ติดต่อเรา</h1>

      <div className="card shadow-lg p-4 mb-4 rounded">
        <h2 className="text-center text-secondary">ที่อยู่</h2>
        <p className="text-center">
          วิทยาลัยเทคโนโลยีโปลิเทคนิคลานนา <br />
          123 ถนนบางกอกน้อย, เชียงใหม่, 50200, ประเทศไทย
        </p>
      </div>

      <div className="card shadow-lg p-4 mb-4 rounded">
        <h2 className="text-center text-secondary">ช่องทางการติดต่อ</h2>
        <ul className="list-unstyled">
          <li>
            <strong>โทรศัพท์:</strong> 053-123456
          </li>
          <li>
            <strong>อีเมล์:</strong> info@lannapoly.ac.th
          </li>
          <li>
            <strong>เว็บไซต์:</strong> <a href="https://www.lannapoly.ac.th">www.lannapoly.ac.th</a>
          </li>
        </ul>
      </div>

      <div className="card shadow-lg p-4 mb-4 rounded">
        <h2 className="text-center text-secondary">แบบฟอร์มติดต่อ</h2>
        <form>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">ชื่อ-นามสกุล</label>
            <input type="text" className="form-control" id="name" placeholder="กรอกชื่อของคุณ" />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">อีเมล์</label>
            <input type="email" className="form-control" id="email" placeholder="กรอกอีเมล์ของคุณ" />
          </div>
          <div className="mb-3">
            <label htmlFor="message" className="form-label">ข้อความ</label>
            <textarea className="form-control" id="message" rows="4" placeholder="กรอกข้อความของคุณ"></textarea>
          </div>
          <button type="submit" className="btn btn-primary">ส่งข้อความ</button>
        </form>
      </div>
    </div>
  );
}
        