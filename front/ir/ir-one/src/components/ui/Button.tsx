import React from 'react';
import clsx from 'clsx'; // Optional: clean conditional classnames

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ variant = 'primary', children, ...props }) => {
  return (
    <button
      className={clsx('btn', {
        'btn-primary': variant === 'primary',
        // You can define .btn-secondary in CSS if needed
      })}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
