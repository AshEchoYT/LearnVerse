import { motion } from 'framer-motion';
import { Users, BookOpen, Award, TrendingUp } from 'lucide-react';
import { useInView } from '../hooks/useInView';
import { useEffect, useState } from 'react';

interface Stat {
  icon: any;
  value: number;
  label: string;
  suffix: string;
}

const stats: Stat[] = [
  { icon: Users, value: 50000, label: 'Active Students', suffix: '+' },
  { icon: BookOpen, value: 500, label: 'Courses Available', suffix: '+' },
  { icon: Award, value: 98, label: 'Success Rate', suffix: '%' },
  { icon: TrendingUp, value: 15000, label: 'Certificates Issued', suffix: '+' },
];

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const duration = 2000;
    const steps = 60;
    const increment = value / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [value]);

  return (
    <span>
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}

export default function StatsSection() {
  const { ref, isInView } = useInView({ threshold: 0.3 });

  return (
    <section className="py-20 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-primary-500/5 via-neon-cyan/5 to-primary-500/5" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, rotateY: 5 }}
              className="glass dark:glass-dark rounded-2xl p-8 text-center shadow-glass dark:shadow-glass-dark preserve-3d"
            >
              <motion.div
                className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-primary-400 to-primary-600 mb-4 shadow-neon-blue"
                animate={{
                  boxShadow: [
                    '0 0 20px rgba(0, 153, 255, 0.3)',
                    '0 0 40px rgba(0, 153, 255, 0.5)',
                    '0 0 20px rgba(0, 153, 255, 0.3)',
                  ],
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <stat.icon className="w-8 h-8 text-white" />
              </motion.div>
              <h3 className="text-4xl md:text-5xl font-bold gradient-text-blue mb-2">
                {isInView && <Counter value={stat.value} suffix={stat.suffix} />}
              </h3>
              <p className="text-dark-600 dark:text-gray-400 font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
