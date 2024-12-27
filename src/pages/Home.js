import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div>
      <header className="text-center bg-gradient-to-r from-blue-600 to-blue-400 text-white py-10">
        <h1 className="text-5xl font-bold">ยินดีต้อนรับสู่สาขาเทคโนโลยีสารสนเทศ</h1>
        <p className="text-xl mt-4">
          วิทยาลัยเทคโนโลยีโปลิเทคนิคลานนา เชียงใหม่
        </p>
      </header>
      <section className="py-10 px-5 text-center">
        <h2 className="text-3xl font-semibold mb-4">ปรัชญาของเรา</h2>
        <p className="text-lg">
          “มุ่งเน้นการสร้างบุคลากรที่มีความรู้ ความสามารถ และมีความรับผิดชอบต่อสังคม”
        </p>
      </section>
      <section className="bg-gray-100 py-10">
        <div className="container mx-auto">
          <h2 className="text-3xl font-semibold text-center mb-6">กิจกรรมที่เกี่ยวข้อง</h2>
          <div className="image-grid">
            <div className="image-box">
              <img
                src="https://www.lannapoly.ac.th/web/gallery/20241121-100726.jpg"
                alt="Activity 1"
                className="custom-image"
              />
            </div>
            <div className="image-box">
              <img
                src="https://www.lannapoly.ac.th/web/gallery/20241119-112515.jpg"
                alt="Activity 2"
                className="custom-image"
              />
            </div>
            <div className="image-box">
              <img
                src="https://www.lannapoly.ac.th/web/gallery/20241119-112224.jpg"
                alt="Activity 3"
                className="custom-image"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
