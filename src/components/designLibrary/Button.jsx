import React from "react";

const variants = {
  primary:
    "bg-[#C81E3A] text-white shadow-sm hover:bg-[#A81730] active:bg-[#8F1329]",
  secondary:
    "bg-white border border-[#C81E3A] text-[#C81E3A] hover:bg-[#FBE9EC]",
  teal: "bg-[#2F6F62] text-white shadow-sm hover:bg-[#255A4F]",
  ghost: "bg-transparent text-[#C81E3A] hover:bg-[#FBE9EC]",
  dark: "bg-[#1B1F23] text-white hover:bg-black",
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
      className={`inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl font-semibold text-sm font-sans transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C81E3A] focus-visible:ring-offset-2 ${variants[variant]} ${
        props.disabled ? "opacity-50 cursor-not-allowed" : ""
      } ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
