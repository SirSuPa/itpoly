import React from 'react';

const Home = () => {
  return (
    <div className="home-container">
      <header className="home-header text-center bg-blue-500 text-white py-10">
        <h1 className="text-4xl font-bold">ยินดีต้อนรับสู่สาขาเทคโนโลยีสารสนเทศ</h1>
        <p className="text-xl mt-4">
          วิทยาลัยเทคโนโลยีโปลิเทคนิคลานนา เชียงใหม่
        </p>
      </header>

      <section className="philosophy py-10 px-5">
        <div className="container mx-auto text-center">
          <h2 className="text-2xl font-semibold mb-4">ปรัชญาของเรา</h2>
          <p className="text-lg">
            “มุ่งเน้นการสร้างบุคลากรที่มีความรู้ ความสามารถ และมีความรับผิดชอบต่อสังคม”
          </p>
        </div>
      </section>

      <section className="activities bg-gray-100 py-10 px-5">
        <div className="container mx-auto">
          <h2 className="text-2xl font-semibold text-center mb-6">กิจกรรมที่เกี่ยวข้อง</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <img
              src="https://via.placeholder.com/300"
              alt="Activity 1"
              className="rounded-lg shadow-lg"
            />
            <img
              src="https://via.placeholder.com/300"
              alt="Activity 2"
              className="rounded-lg shadow-lg"
            />
            <img
              src="https://via.placeholder.com/300"
              alt="Activity 3"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
