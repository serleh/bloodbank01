const Select = ({ label, id, options, className = "", ...props }) => {
  return (
    <>
      {label && (
        <label htmlFor={id} className="block text-sm font-medium">
          {label}
        </label>
      )}

      <select
        id={id}
        className={`w-full border p-3 rounded-lg mt-1 ${className}`}
        {...props}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </>
  );
};

export default Select;
