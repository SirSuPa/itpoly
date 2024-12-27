import React from 'react';

const About = () => {
  return (
    <div className="py-10 px-5">
      <header className="text-center bg-blue-100 py-10">
        <h1 className="text-4xl font-bold text-blue-600">เกี่ยวกับเรา</h1>
      </header>
      <section className="container mx-auto py-10 text-lg">
        <h2 className="text-2xl font-semibold mb-4">แนะนำวิทยาลัย</h2>
        <p>
          วิทยาลัยเทคโนโลยีโปลิเทคนิคลานนา เชียงใหม่ เป็นสถาบันการศึกษาที่มุ่งเน้นการพัฒนาทักษะวิชาชีพ
          เพื่อเตรียมความพร้อมสำหรับการทำงานในสายอาชีพที่เกี่ยวข้องกับเทคโนโลยีสารสนเทศ
        </p>
        <h2 className="text-2xl font-semibold mt-6 mb-4">เป้าหมายและวิสัยทัศน์</h2>
        <p>
          สร้างนักศึกษาให้มีความสามารถที่ตอบสนองความต้องการของตลาดแรงงาน และมีความรับผิดชอบต่อสังคม
        </p>
      </section>
    </div>
  );
};

export default About;
