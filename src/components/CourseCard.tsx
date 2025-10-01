import { motion } from 'framer-motion';
import { Star, Users, Clock } from 'lucide-react';
import { Course } from '../data/mockData';
import Card from './Card';
import Button from './Button';

interface CourseCardProps {
  course: Course;
}

export default function CourseCard({ course }: CourseCardProps) {
  return (
    <Card className="h-full flex flex-col overflow-hidden">
      <motion.div
        className="relative h-48 -m-6 mb-4 overflow-hidden rounded-t-2xl"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
      >
        <img
          src={course.thumbnail}
          alt={course.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute top-4 right-4">
          <span className="glass-dark px-3 py-1 rounded-full text-xs font-semibold text-white">
            {course.level}
          </span>
        </div>
        <div className="absolute bottom-4 left-4 flex items-center gap-2">
          <img
            src={course.instructor_avatar}
            alt={course.instructor_name}
            className="w-10 h-10 rounded-full border-2 border-white/50"
          />
          <div className="text-white">
            <p className="text-sm font-semibold">{course.instructor_name}</p>
          </div>
        </div>
      </motion.div>

      <div className="flex-1 flex flex-col">
        <h3 className="text-xl font-bold mb-2 text-dark-900 dark:text-white line-clamp-2">
          {course.title}
        </h3>
        <p className="text-dark-600 dark:text-gray-400 text-sm mb-4 line-clamp-2 flex-1">
          {course.description}
        </p>

        <div className="flex items-center gap-4 mb-4 text-sm text-dark-600 dark:text-gray-400">
          <div className="flex items-center gap-1">
            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            <span className="font-semibold">{course.rating}</span>
          </div>
          <div className="flex items-center gap-1">
            <Users className="w-4 h-4" />
            <span>{course.students_count.toLocaleString()}</span>
          </div>
          <div className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            <span>{course.duration}</span>
          </div>
        </div>

        <div className="flex items-center justify-between pt-4 border-t border-white/10">
          <span className="text-2xl font-bold gradient-text-blue">
            ${course.price}
          </span>
          <Button size="sm">Enroll Now</Button>
        </div>
      </div>
    </Card>
  );
}
