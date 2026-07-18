import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "./designLibrary/Button";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white text-black shadow-md sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 py-5 flex items-center justify-between">
        {/* LOGO */}
        <h1 className="text-xl md:text-2xl font-bold">
          🩸 <span className="ml-1">BloodBank</span>
        </h1>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex items-center gap-6 font-medium">
          <Link to="/" className="hover:text-red-600 transition">
            Home
          </Link>

          <Link to="/login" className="hover:text-red-600 transition">
            Login
          </Link>

          <Link to="/register">
            <Button>Register</Button>
          </Link>
          <Link to="/blood-information">Blood Information</Link>
        </div>

        {/* MOBILE BUTTON */}
        <Button
          variant="empty"
          className="md:hidden text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </Button>
      </nav>

      {/* MOBILE MENU */}
      {isOpen && (
        <div className="md:hidden bg-white px-4 pb-4 flex flex-col gap-3">
          <Link to="/" onClick={() => setIsOpen(false)}>
            Home
          </Link>

          <Link to="/login" onClick={() => setIsOpen(false)}>
            Login
          </Link>

          <Link to="/register" onClick={() => setIsOpen(false)}>
            Register
          </Link>
        </div>
      )}
    </header>
  );
};

export default Header;
