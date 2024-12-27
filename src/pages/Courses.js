import React from 'react';

const Courses = () => {
  return (
    <div className="py-10 px-5">
      <header className="text-center bg-green-100 py-10">
        <h1 className="text-4xl font-bold text-green-600">หลักสูตรที่เปิดสอน</h1>
      </header>
      <section className="container mx-auto py-10">
        <h2 className="text-2xl font-semibold mb-6">หลักสูตรที่มีให้เลือก</h2>
        <ul className="list-disc pl-10 text-lg">
          <li>ปวช. - พื้นฐานความรู้ด้านเทคโนโลยีสารสนเทศ</li>
          <li>ปวส. - ทักษะวิชาชีพเชิงลึกในสายเทคโนโลยี</li>
        </ul>
        <h2 className="text-2xl font-semibold mt-8 mb-4">ความเชี่ยวชาญที่นักศึกษาจะได้รับ</h2>
        <p>
          การพัฒนาเว็บไซต์, การบริหารจัดการฐานข้อมูล, และทักษะด้านเครือข่ายคอมพิวเตอร์
        </p>
      </section>
    </div>
  );
};

export default Courses;
