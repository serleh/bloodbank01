import React from "react";

const variants = {
  primary: "bg-red-600 text-white hover:bg-red-700",
  secondary: "bg-white border border-red-600 text-red-600 hover:bg-red-50",
  ghost: "bg-transparent text-red-600 hover:bg-red-100",
  dark: "bg-gray-900 text-white hover:bg-gray-800",
  empty: "",
};

const Button = ({
  children,
  className = "",
  variant = "primary",
  ...props
}) => {
  return (
    <button
      className={`px-6 py-2 rounded-lg transition ${variants[variant]} ${props.disabled ? "opacity-50 cursor-not-allowed" : ""} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
