import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import Button from "./designLibrary/Button";

const navLinkClass = ({ isActive }) =>
  `relative py-1 transition-colors ${
    isActive ? "text-[#C81E3A]" : "text-[#1B1F23] hover:text-[#C81E3A]"
  }`;

const PulseMark = () => (
  <svg
    className="w-7 h-7 shrink-0 text-[#C81E3A]"
    viewBox="0 0 32 32"
    fill="none"
  >
    <path
      d="M2 17h5l2.5-7L14 24l3-14 2 7h11"
      stroke="currentColor"
      strokeWidth="2.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { to: "/", label: "Home" },
    { to: "/blood-information", label: "Blood Information" },
    { to: "/login", label: "Login" },
  ];

  return (
    <header className="bg-white/90 backdrop-blur border-b border-[#E8E1DB] sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* LOGO */}
        <Link to="/" className="flex items-center gap-2">
          <PulseMark />
          <span className="text-lg md:text-xl font-display font-semibold text-[#1B1F23]">
            BloodBank
          </span>
        </Link>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex items-center gap-8 font-sans font-medium text-sm">
          {links.map((link) => (
            <NavLink key={link.to} to={link.to} className={navLinkClass}>
              {link.label}
            </NavLink>
          ))}

          <Link to="/register">
            <Button>Register</Button>
          </Link>
        </div>

        {/* MOBILE BUTTON */}
        <button
          className="md:hidden w-9 h-9 flex items-center justify-center text-[#1B1F23]"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </nav>

      {/* MOBILE MENU */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-[#E8E1DB] px-4 py-4 flex flex-col gap-4 font-sans font-medium text-sm">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              onClick={() => setIsOpen(false)}
              className={navLinkClass}
            >
              {link.label}
            </NavLink>
          ))}

          <Link to="/register" onClick={() => setIsOpen(false)}>
            <Button className="w-full">Register</Button>
          </Link>
        </div>
      )}
    </header>
  );
};

export default Header;
