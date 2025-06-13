import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { LuMessagesSquare } from "react-icons/lu";
import { FiBell } from "react-icons/fi";
import { CgProfile } from "react-icons/cg";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("Jobs");
  const token = "vdvddvd";

  const navItems = ["Jobs", "Networking", "My Connections", "Services"];

  return (
    <header className="sticky w-full shadow-sm px-4 md:px-15 bg-white top-0 left-0 z-50">
      <div className=" mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img
            src="/Staffbook7-01 1.png"
            alt="Staff Book Logo"
            className="w-[254px] h-[90px] object-contain"
          />
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-1 items-center text-base font-medium text-[#101022]">
          {navItems.map((item) => (
            <a
              key={item}
              href="#"
              onClick={() => setActiveLink(item)}
              className={`px-5 py-2 rounded-3xl ${
                activeLink === item ? "bg-[#F0E5FD]" : ""
              }`}
            >
              {item}
            </a>
          ))}

          {token ? (
            <div className="flex items-center space-x-4 ml-4">
              <LuMessagesSquare className="text-2xl cursor-pointer" />
              <FiBell className="text-2xl cursor-pointer" />
              <CgProfile className="text-2xl cursor-pointer" />
            </div>
          ) : (
            <button className="ml-4 bg-gradient-to-r from-[#5B5DE6] to-[#921294] text-white px-5 py-2 rounded-full shadow hover:opacity-90 transition">
              Sign up
            </button>
          )}
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="md:hidden mt-1 px-4 space-y-1 bg-white pb-4 shadow-md">
          {navItems.map((item) => (
            <a
              key={item}
              href="#"
              onClick={() => setActiveLink(item)}
              className={`block px-3 py-2 rounded text-[#101022] ${
                activeLink === item ? "bg-[#F0E5FD]" : ""
              }`}
            >
              {item}
            </a>
          ))}

          {token ? (
            <div className="flex space-x-6 px-3 pt-2">
              <LuMessagesSquare className="text-2xl cursor-pointer" />
              <FiBell className="text-2xl cursor-pointer" />
              <CgProfile className="text-2xl cursor-pointer" />
            </div>
          ) : (
            <button className="mt-3 w-full bg-gradient-to-r from-[#5B5DE6] to-[#921294] text-white py-2 rounded-full shadow hover:opacity-90 transition">
              Sign up
            </button>
          )}
        </div>
      )}
    </header>
  );
};

export default Header;
