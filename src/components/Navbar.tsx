import { motion, useScroll, useTransform } from 'framer-motion';
import { Menu, X, GraduationCap } from 'lucide-react';
import { useState } from 'react';
import Button from './Button';
import ThemeToggle from './ThemeToggle';
import { categories } from '../data/mockData';

interface NavbarProps {
  onLoginClick: () => void;
  onSignUpClick: () => void;
}

export default function Navbar({ onLoginClick, onSignUpClick }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCategoriesOpen, setIsCategoriesOpen] = useState(false);
  const { scrollY } = useScroll();

  const backgroundColor = useTransform(
    scrollY,
    [0, 100],
    ['rgba(255, 255, 255, 0)', 'rgba(255, 255, 255, 0.1)']
  );

  const backdropBlur = useTransform(scrollY, [0, 100], ['blur(0px)', 'blur(20px)']);

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50 border-b border-white/10"
      style={{
        backgroundColor,
        backdropFilter: backdropBlur,
        WebkitBackdropFilter: backdropBlur,
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <motion.div
            className="flex items-center space-x-2 cursor-pointer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
            >
              <GraduationCap className="w-8 h-8 text-primary-500" />
            </motion.div>
            <span className="text-2xl font-bold gradient-text-blue">LearnVerse</span>
          </motion.div>

          <div className="hidden md:flex items-center space-x-8">
            <div className="relative">
              <motion.button
                className="text-dark-700 dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
                onClick={() => setIsCategoriesOpen(!isCategoriesOpen)}
                whileHover={{ scale: 1.05 }}
              >
                Categories
              </motion.button>
              {isCategoriesOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="absolute top-full mt-2 w-64 glass dark:glass-dark rounded-xl shadow-glass dark:shadow-glass-dark p-4 grid grid-cols-2 gap-2"
                >
                  {categories.map((category) => (
                    <motion.a
                      key={category.id}
                      href={`#${category.slug}`}
                      className="p-2 rounded-lg hover:bg-white/10 dark:hover:bg-white/5 transition-colors text-sm"
                      whileHover={{ scale: 1.05 }}
                      onClick={() => setIsCategoriesOpen(false)}
                    >
                      {category.name}
                    </motion.a>
                  ))}
                </motion.div>
              )}
            </div>
            <a
              href="#courses"
              className="text-dark-700 dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
            >
              Courses
            </a>
            <a
              href="#testimonials"
              className="text-dark-700 dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
            >
              Testimonials
            </a>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <ThemeToggle />
            <Button variant="glass" size="sm" onClick={onLoginClick}>
              Login
            </Button>
            <Button variant="primary" size="sm" onClick={onSignUpClick}>
              Sign Up
            </Button>
          </div>

          <motion.button
            className="md:hidden text-dark-700 dark:text-gray-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            whileTap={{ scale: 0.9 }}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </motion.button>
        </div>
      </div>

      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden glass dark:glass-dark"
        >
          <div className="px-4 py-6 space-y-4">
            <a
              href="#categories"
              className="block text-dark-700 dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-400"
              onClick={() => setIsMenuOpen(false)}
            >
              Categories
            </a>
            <a
              href="#courses"
              className="block text-dark-700 dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-400"
              onClick={() => setIsMenuOpen(false)}
            >
              Courses
            </a>
            <a
              href="#testimonials"
              className="block text-dark-700 dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-400"
              onClick={() => setIsMenuOpen(false)}
            >
              Testimonials
            </a>
            <div className="flex items-center space-x-4 pt-4 border-t border-white/10">
              <ThemeToggle />
              <Button variant="glass" size="sm" onClick={onLoginClick} className="flex-1">
                Login
              </Button>
              <Button variant="primary" size="sm" onClick={onSignUpClick} className="flex-1">
                Sign Up
              </Button>
            </div>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}
