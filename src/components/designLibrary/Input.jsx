const Input = ({ label, id, className = "", ...props }) => {
  return (
    <>
      {label && (
        <label htmlFor={id} className="block mb-2 text-sm font-medium">
          {label}
        </label>
      )}

      <input
        id={id}
        className={`border p-3 rounded-lg w-full ${className}`}
        {...props}
      />
    </>
  );
};

export default Input;
