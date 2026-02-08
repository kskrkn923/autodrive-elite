interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'small' | 'medium' | 'large';
  children: React.ReactNode;
  fullWidth?: boolean;
}

export default function Button({
  variant = 'primary',
  size = 'medium',
  children,
  fullWidth = false,
  className = '',
  ...props
}: ButtonProps) {
  const baseStyles = 'font-semibold rounded-md transition-smooth cursor-pointer border inline-flex items-center justify-center';

  const variantStyles = {
    primary: 'bg-accent text-white border-accent hover:bg-accent-hover hover:border-accent-hover',
    secondary: 'bg-primary text-white border-primary hover:bg-primary-light hover:border-primary-light',
    outline: 'bg-transparent border-2 border-accent text-accent hover:bg-accent hover:text-white',
  };

  const sizeStyles = {
    small: 'px-4 py-2 text-sm',
    medium: 'px-6 py-2.5 text-base',
    large: 'px-8 py-3 text-lg',
  };

  const widthStyle = fullWidth ? 'w-full' : '';

  return (
    <button
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${widthStyle} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
