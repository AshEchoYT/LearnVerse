import { motion, useScroll, useTransform } from 'framer-motion';
import { BookOpen, Laptop, Headphones, Sparkles, ArrowDown } from 'lucide-react';
import Button from './Button';

interface HeroProps {
  onGetStarted: () => void;
  onBecomeInstructor: () => void;
}

export default function Hero({ onGetStarted, onBecomeInstructor }: HeroProps) {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 300], [0, 150]);
  const y2 = useTransform(scrollY, [0, 300], [0, -100]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  const floatingIcons = [
    { Icon: BookOpen, delay: 0, className: 'top-20 left-[10%]' },
    { Icon: Laptop, delay: 0.2, className: 'top-40 right-[15%]' },
    { Icon: Headphones, delay: 0.4, className: 'bottom-40 left-[20%]' },
    { Icon: Sparkles, delay: 0.6, className: 'bottom-20 right-[10%]' },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <motion.div
        className="absolute inset-0 bg-gradient-mesh dark:bg-gradient-mesh-dark opacity-30"
        animate={{
          backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'linear',
        }}
        style={{ backgroundSize: '200% 200%' }}
      />

      <div className="absolute inset-0">
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-primary-400 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {floatingIcons.map(({ Icon, delay, className }, index) => (
        <motion.div
          key={index}
          className={`absolute ${className} hidden lg:block`}
          style={{ y: index % 2 === 0 ? y1 : y2 }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 0.6, scale: 1 }}
          transition={{ delay, duration: 1 }}
        >
          <motion.div
            className="glass dark:glass-dark p-6 rounded-2xl shadow-neon-blue"
            animate={{
              y: [0, -20, 0],
              rotate: [0, 5, -5, 0],
            }}
            transition={{
              duration: 6 + index,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            <Icon className="w-12 h-12 text-primary-500" />
          </motion.div>
        </motion.div>
      ))}

      <motion.div
        className="relative z-10 text-center px-4 max-w-5xl mx-auto"
        style={{ opacity }}
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.h1
            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            {['Learn', ' ', 'Anything,', ' ', 'Anytime'].map((word, index) => (
              <motion.span
                key={index}
                className={word.trim() ? 'gradient-text inline-block' : 'inline-block'}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: 0.3 + index * 0.1,
                  ease: 'easeOut',
                }}
              >
                {word}
              </motion.span>
            ))}
          </motion.h1>
        </motion.div>

        <motion.p
          className="text-xl md:text-2xl text-dark-600 dark:text-gray-400 mb-12 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          Master cutting-edge skills with world-class instructors. Build real projects, earn
          certificates, and transform your career with our immersive learning platform.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <Button size="lg" onClick={onGetStarted}>
            Start Learning
          </Button>
          <Button variant="glass" size="lg" onClick={onBecomeInstructor}>
            Become an Instructor
          </Button>
        </motion.div>

        <motion.div
          className="mt-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="inline-flex flex-col items-center gap-2 text-dark-600 dark:text-gray-400"
          >
            <span className="text-sm">Scroll to explore</span>
            <ArrowDown className="w-5 h-5" />
          </motion.div>
        </motion.div>
      </motion.div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white dark:from-dark-900 to-transparent" />
    </section>
  );
}
