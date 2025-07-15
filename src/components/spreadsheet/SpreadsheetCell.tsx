import {type FC, useState, useEffect, useRef } from 'react';
import { Input } from '../common/Input';



interface SpreadsheetCellProps {
  value: string;
  onChange: (value: string) => void;
}

export const SpreadsheetCell: FC<SpreadsheetCellProps> = ({ value, onChange }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [inputValue, setInputValue] = useState(value);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isEditing && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isEditing]);

  const handleDoubleClick = () => {
    setIsEditing(true);
  };

  const handleSubmit = () => {
    onChange(inputValue);
    setIsEditing(false);
  };

  return isEditing ? (
    <Input
      value={inputValue}
      onChange={setInputValue}
      onSubmit={handleSubmit}
      placeholder=""
      className="w-full h-full border-none focus:ring-0"
    />
  ) : (
    <div
      className="p-2 w-full h-full cursor-text text-[#1A1D1F]"
      onDoubleClick={handleDoubleClick}
    >
      {value}
    </div>
  );
};