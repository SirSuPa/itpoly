import React from "react";

export default function Courses() {
  return (
    <div className="container my-4">
      <h1 className="mb-3 text-center text-info">หลักสูตรที่เปิดสอน</h1>

      <div className="card shadow-lg p-4 mb-4 rounded">
        <h2 className="text-center text-secondary">หลักสูตร 1: พื้นฐานการเขียนโปรแกรม</h2>
        <p>
          หลักสูตรนี้ออกแบบมาเพื่อให้ผู้เรียนได้เรียนรู้พื้นฐานการเขียนโปรแกรม
          โดยใช้ภาษา Python ซึ่งเป็นภาษาที่นิยมใช้ในการพัฒนาโปรแกรมต่าง ๆ
          ตั้งแต่การเขียนโปรแกรมเบื้องต้นจนถึงการประยุกต์ใช้งานในสาขาอื่น ๆ
        </p>
      </div>

      <div className="card shadow-lg p-4 mb-4 rounded">
        <h2 className="text-center text-secondary">หลักสูตร 2: การพัฒนาเว็บไซต์</h2>
        <p>
          หลักสูตรนี้จะช่วยให้ผู้เรียนสามารถพัฒนาเว็บไซต์ด้วย HTML, CSS, JavaScript
          รวมถึงการใช้งานเครื่องมือและเฟรมเวิร์กต่าง ๆ เช่น React เพื่อสร้างเว็บไซต์ที่มีประสิทธิภาพ
        </p>
      </div>

      <div className="card shadow-lg p-4 mb-4 rounded">
        <h2 className="text-center text-secondary">หลักสูตร 3: การดูแลและบำรุงรักษาคอมพิวเตอร์</h2>
        <p>
          หลักสูตรนี้เหมาะสำหรับผู้ที่ต้องการเรียนรู้การดูแลและบำรุงรักษาคอมพิวเตอร์
          ทั้งในด้านฮาร์ดแวร์และซอฟต์แวร์ รวมถึงการจัดการระบบปฏิบัติการและการแก้ไขปัญหาทางเทคนิค
        </p>
      </div>

      <div className="card shadow-lg p-4 mb-4 rounded">
        <h2 className="text-center text-secondary">หลักสูตร 4: การพัฒนาแอปพลิเคชันมือถือ</h2>
        <p>
          หลักสูตรนี้เหมาะสำหรับผู้ที่สนใจการพัฒนาแอปพลิเคชันสำหรับอุปกรณ์มือถือ
          โดยใช้เทคโนโลยี React Native หรือ Flutter เพื่อสร้างแอปพลิเคชันที่รองรับทั้งระบบ iOS และ Android
        </p>
      </div>
    </div>
  );
}
