import React, { useState, useEffect } from 'react';
import { FcServices } from "react-icons/fc";
import { RiFileList2Line } from "react-icons/ri";
import { PiStudentFill } from "react-icons/pi";
import { Link } from 'react-router-dom';
import Signout from './Signout';

const Header = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const savedUser = localStorage.getItem("user");
    setUser(savedUser);
  }, []);

  return (
    <div>
      <header className="text-gray-600 body-font bg-blue-300">
        {/* Added justify-between to space out Left, Center, and Right sections */}
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center justify-between">
          
          {/* Left Side: Navigation Links */}
          <nav className="flex flex-wrap items-center text-base mb-4 md:mb-0">
            <span className="mr-5 hover:text-gray-900 cursor-pointer">🏠Home</span>
            <span className="mr-5 hover:text-gray-900 cursor-pointer">⁉️About</span>
            <span className="mr-2 inline-flex items-center"><FcServices /></span>
            <span className="mr-5 hover:text-gray-900 cursor-pointer">Services</span>
            <span className="text-red-700 ml-1 mr-2 inline-flex items-center"><RiFileList2Line /></span>
            <Link to="/records"><span className="hover:text-gray-900 cursor-pointer">Records</span></Link>
          </nav>

          {/* Middle: Logo (STUDENT PORTAL) */}
          <div className="flex items-center text-gray-900 mb-4 md:mb-0">
            <span className="text-fuchsia-600 text-xl"><PiStudentFill /></span>
            <span className="ml-3 text-2xl font-medium text-fuchsia-800">STUDENT PORTAL</span>
          </div>

          {/* Right Side: Sign In / Sign Out */}
          <div>
            {user ? (
              <div className="flex items-center gap-4">
                <span className="text-gray-700 font-medium">Hi, {user}</span>
                <Signout onSignOut={() => setUser(null)} />
              </div>
            ) : (
              <Link
                to="/signin"
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition"
              >
                Sign In
              </Link>
            )}
          </div>

        </div>
      </header>
    </div>
  );
};

export default Header;