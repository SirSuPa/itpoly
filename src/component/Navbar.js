import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-blue-500 text-white p-4 shadow-md">
      <div className="container mx-auto flex items-center justify-between">
        <Link to="/" className="text-xl font-bold">Lanna Poly</Link>
        <button className="text-white text-2xl md:hidden" onClick={toggleDrawer}>
          <FaBars />
        </button>
        {/* <ul className="hidden md:flex space-x-6">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/courses">Courses</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul> */}
      </div>
      {isOpen && (
        <div className="bg-blue-700 p-4 md:hidden">
          <ul className="space-y-4">
            <li><Link to="/" onClick={toggleDrawer}>Home</Link></li>
            <li><Link to="/about" onClick={toggleDrawer}>About</Link></li>
            <li><Link to="/courses" onClick={toggleDrawer}>Courses</Link></li>
            <li><Link to="/contact" onClick={toggleDrawer}>Contact</Link></li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
