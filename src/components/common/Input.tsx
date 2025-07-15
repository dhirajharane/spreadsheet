import type { FC, ChangeEvent, KeyboardEvent } from 'react';

interface InputProps {
  value: string;
  onChange: (value: string) => void;
  onSubmit: () => void;
  placeholder?: string;
  className?: string;
}

export const Input: FC<InputProps> = ({ value, onChange, onSubmit, placeholder, className = '' }) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      console.log(`Input submitted with value: ${value}`);
      onSubmit();
    }
  };

  return (
    <input
      type="text"
      value={value}
      onChange={handleChange}
      onKeyDown={handleKeyDown}
      placeholder={placeholder}
      className={`border border-[#E8ECEF] rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-[#0066FF] ${className}`}
    />
  );
};