const Select = ({ label, id, options, className = "", ...props }) => {
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

      <div className="relative">
        <select
          id={id}
          className={`w-full appearance-none border border-[#E8E1DB] bg-white p-3 pr-10 rounded-xl text-[#1B1F23] font-sans transition focus:outline-none focus:ring-2 focus:ring-[#C81E3A]/30 focus:border-[#C81E3A] ${className}`}
          {...props}
        >
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>

        <svg
          className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#5B6168]"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 9l6 6 6-6" />
        </svg>
      </div>
    </div>
  );
};

export default Select;
