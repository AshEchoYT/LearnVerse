import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export default function Card({ children, className = '', hover = true }: CardProps) {
  return (
    <motion.div
      className={`glass dark:glass-dark rounded-2xl p-6 shadow-glass dark:shadow-glass-dark ${className}`}
      whileHover={hover ? {
        scale: 1.02,
        rotateX: 2,
        rotateY: 2,
        transition: { type: 'spring', stiffness: 300, damping: 20 }
      } : undefined}
      style={{ transformStyle: 'preserve-3d' }}
    >
      {children}
    </motion.div>
  );
}
