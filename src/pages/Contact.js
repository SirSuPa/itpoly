import React from 'react';

const Contact = () => {
  return (
    <div className="py-10 px-5">
      <header className="text-center bg-yellow-100 py-10">
        <h1 className="text-4xl font-bold text-yellow-600">ติดต่อเรา</h1>
      </header>
      <section className="container mx-auto py-10">
        <form className="grid grid-cols-1 gap-4 max-w-lg mx-auto">
          <input
            type="text"
            placeholder="ชื่อของคุณ"
            className="border rounded px-4 py-2"
          />
          <input
            type="email"
            placeholder="อีเมลของคุณ"
            className="border rounded px-4 py-2"
          />
          <textarea
            placeholder="ข้อความของคุณ"
            className="border rounded px-4 py-2"
            rows="4"
          ></textarea>
          <button className="bg-blue-500 text-white py-2 rounded">
            ส่งข้อความ
          </button>
        </form>
        <div className="text-center mt-10">
          <p>เบอร์โทร: 012-345-6789</p>
          <p>อีเมล: info@lanna-poly.ac.th</p>
        </div>
        <div className="mt-6">
          <iframe
            src="https://www.google.com/maps/embed?pb=..."
            title="Google Maps"
            className="w-full h-64 border-0"
            allowFullScreen=""
          ></iframe>
        </div>
      </section>
    </div>
  );
};

export default Contact;
