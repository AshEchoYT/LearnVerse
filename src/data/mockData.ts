export interface Category {
  id: string;
  name: string;
  slug: string;
  icon: string;
}

export interface Course {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  price: number;
  instructor_name: string;
  instructor_avatar: string;
  rating: number;
  students_count: number;
  duration: string;
  level: string;
  category_id: string;
  featured: boolean;
}

export interface Testimonial {
  id: string;
  student_name: string;
  student_avatar: string;
  content: string;
  rating: number;
  course_title: string;
  featured: boolean;
}

export const categories: Category[] = [
  { id: '1', name: 'Web Development', slug: 'web-development', icon: 'Code' },
  { id: '2', name: 'Data Science', slug: 'data-science', icon: 'BarChart' },
  { id: '3', name: 'Mobile Development', slug: 'mobile-development', icon: 'Smartphone' },
  { id: '4', name: 'Design', slug: 'design', icon: 'Palette' },
  { id: '5', name: 'Business', slug: 'business', icon: 'Briefcase' },
  { id: '6', name: 'Marketing', slug: 'marketing', icon: 'TrendingUp' },
];

export const courses: Course[] = [
  {
    id: '1',
    title: 'Complete Web Development Bootcamp',
    description: 'Master modern web development with React, Node.js, and everything in between. Build real-world projects and launch your career.',
    thumbnail: 'https://images.pexels.com/photos/879109/pexels-photo-879109.jpeg?auto=compress&cs=tinysrgb&w=800',
    price: 99.99,
    instructor_name: 'Sarah Johnson',
    instructor_avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=200',
    rating: 4.8,
    students_count: 15420,
    duration: '48 hours',
    level: 'Beginner',
    category_id: '1',
    featured: true,
  },
  {
    id: '2',
    title: 'Machine Learning & AI Masterclass',
    description: 'Dive deep into artificial intelligence and machine learning. Learn Python, TensorFlow, and build intelligent systems.',
    thumbnail: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800',
    price: 129.99,
    instructor_name: 'Dr. Michael Chen',
    instructor_avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=200',
    rating: 4.9,
    students_count: 12850,
    duration: '36 hours',
    level: 'Advanced',
    category_id: '2',
    featured: true,
  },
  {
    id: '3',
    title: 'iOS App Development with Swift',
    description: 'Build beautiful iOS applications from scratch. Learn SwiftUI, UIKit, and publish to the App Store.',
    thumbnail: 'https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=800',
    price: 109.99,
    instructor_name: 'Emily Rodriguez',
    instructor_avatar: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=200',
    rating: 4.7,
    students_count: 8930,
    duration: '32 hours',
    level: 'Intermediate',
    category_id: '3',
    featured: true,
  },
  {
    id: '4',
    title: 'UI/UX Design Fundamentals',
    description: 'Master the art of user interface and experience design. Create stunning, user-friendly designs that convert.',
    thumbnail: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
    price: 89.99,
    instructor_name: 'Alex Turner',
    instructor_avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=200',
    rating: 4.6,
    students_count: 11240,
    duration: '24 hours',
    level: 'Beginner',
    category_id: '4',
    featured: false,
  },
  {
    id: '5',
    title: 'Digital Marketing Strategy',
    description: 'Learn to create effective marketing campaigns across all digital channels. SEO, social media, content marketing and more.',
    thumbnail: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=800',
    price: 79.99,
    instructor_name: 'Jennifer Lee',
    instructor_avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=200',
    rating: 4.5,
    students_count: 9560,
    duration: '20 hours',
    level: 'Intermediate',
    category_id: '6',
    featured: false,
  },
  {
    id: '6',
    title: 'Business Analytics & Strategy',
    description: 'Transform data into actionable insights. Master Excel, SQL, and business intelligence tools for strategic decision-making.',
    thumbnail: 'https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=800',
    price: 94.99,
    instructor_name: 'Robert Kumar',
    instructor_avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=200',
    rating: 4.7,
    students_count: 7890,
    duration: '28 hours',
    level: 'Intermediate',
    category_id: '5',
    featured: false,
  },
];

export const testimonials: Testimonial[] = [
  {
    id: '1',
    student_name: 'Marcus Williams',
    student_avatar: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=200',
    content: 'This platform completely transformed my career. The instructors are world-class and the content is cutting-edge. I landed my dream job just 3 months after completing the bootcamp!',
    rating: 5,
    course_title: 'Complete Web Development Bootcamp',
    featured: true,
  },
  {
    id: '2',
    student_name: 'Sophia Chen',
    student_avatar: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=200',
    content: 'The Machine Learning course exceeded all my expectations. Complex concepts are explained clearly, and the hands-on projects gave me real portfolio pieces. Absolutely worth every penny!',
    rating: 5,
    course_title: 'Machine Learning & AI Masterclass',
    featured: true,
  },
  {
    id: '3',
    student_name: 'David Anderson',
    student_avatar: 'https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=200',
    content: 'Best investment in my education. The iOS development course is incredibly comprehensive and the instructor support is outstanding. I published my first app to the App Store!',
    rating: 5,
    course_title: 'iOS App Development with Swift',
    featured: true,
  },
  {
    id: '4',
    student_name: 'Isabella Martinez',
    student_avatar: 'https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&w=200',
    content: 'The UI/UX course helped me transition from graphic design to product design. The projects were challenging and rewarding, and I now have an amazing portfolio that gets me interviews.',
    rating: 4,
    course_title: 'UI/UX Design Fundamentals',
    featured: true,
  },
];
