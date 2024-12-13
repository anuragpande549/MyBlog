import React, { useId } from 'react';

function Select({
  options,
  label,
  className,
  ...props
}, ref) {
  const id = useId();
  
  return (
    <div className="w-full mb-4">
      {label && (
        <label
          htmlFor={id}
          className="inline-block mb-2 text-sm font-medium text-gray-700"
        >
          {label}
        </label>
      )}
      <select
        {...props}
        id={id}
        ref={ref}
        className={`w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${className}`}
      >
        {options?.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}

export default React.forwardRef(Select);
