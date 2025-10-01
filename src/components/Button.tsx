import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'glass';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  type?: 'button' | 'submit' | 'reset';
}

export default function Button({
  children,
  onClick,
  variant = 'primary',
  size = 'md',
  className = '',
  type = 'button',
}: ButtonProps) {
  const baseStyles = 'relative overflow-hidden font-semibold rounded-lg transition-all duration-300 preserve-3d';

  const variantStyles = {
    primary: 'bg-gradient-to-r from-primary-500 to-primary-600 text-white hover:from-primary-600 hover:to-primary-700 shadow-neon-blue',
    secondary: 'bg-gradient-to-r from-neon-cyan to-neon-blue text-white hover:shadow-neon-cyan',
    glass: 'glass dark:glass-dark text-dark-900 dark:text-white border border-white/20 hover:border-white/40',
  };

  const sizeStyles = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  return (
    <motion.button
      type={type}
      onClick={onClick}
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
      whileHover={{
        scale: 1.05,
        rotateX: 5,
        rotateY: 5,
      }}
      whileTap={{
        scale: 0.95,
        rotateX: 0,
        rotateY: 0,
      }}
      transition={{ type: 'spring', stiffness: 400, damping: 17 }}
    >
      <motion.span
        className="absolute inset-0 bg-white/20"
        initial={{ scale: 0, opacity: 0 }}
        whileHover={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.3 }}
        style={{ borderRadius: 'inherit' }}
      />
      <span className="relative z-10">{children}</span>

      <motion.span
        className="absolute inset-0 rounded-lg opacity-0"
        whileTap={{
          opacity: [0, 1, 0],
          scale: [0.8, 1.2, 1.5],
        }}
        transition={{ duration: 0.6 }}
        style={{
          background: 'radial-gradient(circle, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0) 70%)',
        }}
      />
    </motion.button>
  );
}
