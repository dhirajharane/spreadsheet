import type { FC, MouseEvent } from 'react';

interface ButtonProps {
  children: React.ReactNode;
  onClick: () => void;
  variant?: 'primary' | 'secondary';
  className?: string;
}

export const Button: FC<ButtonProps> = ({ children, onClick, variant = 'primary', className = '' }) => {
  const baseStyles = 'px-3 py-1 rounded font-medium focus:outline-none';
  const variantStyles =
    variant === 'primary'
      ? 'bg-[#0066FF] text-white hover:bg-[#0055CC]'
      : 'bg-[#F5F6F5] text-[#1A1D1F] hover:bg-[#E8ECEF]';

  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    console.log(`${children} button clicked`);
    onClick();
  };

  return (
    <button className={`${baseStyles} ${variantStyles} ${className}`} onClick={handleClick}>
      {children}
    </button>
  );
};