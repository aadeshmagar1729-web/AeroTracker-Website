import React from 'react'
import { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-900 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">

        {/* Logo */}
        <h1 className="text-2xl font-bold text-blue-400">
          AeroTracker ✈️
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-lg">
          <li><a href="#" className="hover:text-blue-400 transition">Home</a></li>
          <li><a href="#" className="hover:text-blue-400 transition">Track</a></li>
          <li><a href="#" className="hover:text-blue-400 transition">About</a></li>
          <li><a href="#" className="hover:text-blue-400 transition">Contact</a></li>
        </ul>

        {/* Button */}
        <div className="hidden md:block">
          <button className="bg-blue-500 px-4 py-2 rounded-lg hover:bg-blue-600 transition">
            Login
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4">
          <a href="#" className="block py-2 hover:text-blue-400">Home</a>
          <a href="#" className="block py-2 hover:text-blue-400">Track</a>
          <a href="#" className="block py-2 hover:text-blue-400">About</a>
          <a href="#" className="block py-2 hover:text-blue-400">Contact</a>
        </div>
      )}
    </nav>
  );
}

export default Navbar;

