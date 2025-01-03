import React from "react";
import "./Home.css";

const Home = () => {
  const activities = [
    {
      img: "https://scontent.fbkk12-1.fna.fbcdn.net/v/t39.30808-6/458708196_1035385225254236_8144245667648011470_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=106&ccb=1-7&_nc_sid=127cfc&_nc_ohc=LHWMiJDHM9cQ7kNvgEei8_T&_nc_oc=AdhHawl9934jpcue0ywUWTPV9cbA-TzC3TO9okQauYD4F6QgnFzdxDc3WBdjxu93k7g&_nc_zt=23&_nc_ht=scontent.fbkk12-1.fna&_nc_gid=AqOM9RptaDdk4egQjaYHhBu&oh=00_AYD58QqAvh0C7vjqOGenI_AqUVOz1pyA4fCRZ7iwIKKZxw&oe=677D4911",
      title: "กิจกรรม 1",
      description: "กีฬาสี",
    },
    {
      img: "https://www.lannapoly.ac.th/web/gallery/20241119-112515.jpg",
      title: "กิจกรรม 2",
      description: "รับปริญญา",
    },
    {
      img: "https://www.lannapoly.ac.th/web/gallery/20241119-112224.jpg",
      title: "กิจกรรม 3",
      description: "ประชุมผู้ปกครอง",
    },
  ];

  return (
    <div>
      <header className="text-center bg-gradient-to-r from-blue-600 to-blue-400 text-white py-10">
        <h1 className="text-5xl font-bold">ยินดีต้อนรับสู่สาขาเทคโนโลยีสารสนเทศ</h1>
        <p className="text-xl mt-4">วิทยาลัยเทคโนโลยีโปลิเทคนิคลานนา เชียงใหม่</p>
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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {activities.map((activity, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                <img
                  src={activity.img}
                  alt={activity.title}
                  className="w-full h-32 object-cover border-2 border-gray-300" // เพิ่มกรอบและปรับขนาด
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold mb-2">{activity.title}</h3>
                  <p className="text-gray-700">{activity.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
