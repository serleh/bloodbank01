const Input = ({ label, id, className = "", ...props }) => {
  return (
    <div className="w-full">
      {label && (
        <label
          htmlFor={id}
          className="block mb-1.5 text-sm font-medium text-[#1B1F23] font-sans"
        >
          {label}
        </label>
      )}

      <input
        id={id}
        className={`w-full border border-[#E8E1DB] bg-white p-3 rounded-xl text-[#1B1F23] placeholder:text-[#9AA0A6] font-sans transition focus:outline-none focus:ring-2 focus:ring-[#C81E3A]/30 focus:border-[#C81E3A] ${className}`}
        {...props}
      />
    </div>
  );
};

export default Input;
