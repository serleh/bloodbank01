import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white-600 text-black shadow-md sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <h1 className="text-xl md:text-2xl font-bold">
          🩸 <span className="ml-1">BloodBank</span>
        </h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-6 font-medium">
          <Link to="/" className="hover:text-gray-200 transition">
            Home
          </Link>
          <Link to="/add-donor" className="hover:text-gray-200 transition">
            Add Donor
          </Link>
        </div>

        {/* Mobile Button */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white-500 px-4 pb-4 flex flex-col gap-3">
          <Link
            to="/"
            className="hover:text-gray-200"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/add-donor"
            className="hover:text-gray-200"
            onClick={() => setIsOpen(false)}
          >
            Add Donor
          </Link>
        </div>
      )}
    </header>
  );
};

export default Header;
