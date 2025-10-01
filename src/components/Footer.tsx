import { motion } from 'framer-motion';
import { Facebook, Twitter, Linkedin, Instagram, Youtube, Mail, MapPin, Phone, GraduationCap, ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    { icon: Facebook, href: '#', color: 'hover:text-blue-500' },
    { icon: Twitter, href: '#', color: 'hover:text-sky-400' },
    { icon: Linkedin, href: '#', color: 'hover:text-blue-600' },
    { icon: Instagram, href: '#', color: 'hover:text-pink-500' },
    { icon: Youtube, href: '#', color: 'hover:text-red-500' },
  ];

  const footerLinks = {
    'Learn': ['Browse Courses', 'Categories', 'For Business', 'Become Instructor', 'Get Mobile App'],
    'Company': ['About Us', 'Careers', 'Press', 'Blog', 'Contact'],
    'Support': ['Help Center', 'FAQs', 'Terms of Service', 'Privacy Policy', 'Cookie Policy'],
  };

  return (
    <footer className="relative overflow-hidden bg-dark-900 text-white">
      <motion.div
        className="absolute inset-0 opacity-20"
        animate={{
          background: [
            'linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)',
            'linear-gradient(135deg, #f093fb 0%, #667eea 50%, #764ba2 100%)',
            'linear-gradient(135deg, #764ba2 0%, #f093fb 50%, #667eea 100%)',
          ],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              >
                <GraduationCap className="w-8 h-8 text-primary-400" />
              </motion.div>
              <span className="text-2xl font-bold gradient-text-blue">LearnVerse</span>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              Empowering learners worldwide with cutting-edge courses and expert instructors. Join millions transforming their careers through education.
            </p>

            <div className="space-y-3">
              <div className="flex items-center gap-3 text-gray-400">
                <Mail className="w-5 h-5 text-primary-400" />
                <span>hello@learnverse.com</span>
              </div>
              <div className="flex items-center gap-3 text-gray-400">
                <Phone className="w-5 h-5 text-primary-400" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-3 text-gray-400">
                <MapPin className="w-5 h-5 text-primary-400" />
                <span>San Francisco, CA 94102</span>
              </div>
            </div>
          </div>

          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-lg font-bold mb-4 gradient-text-blue">{category}</h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <motion.a
                      href="#"
                      className="text-gray-400 hover:text-white transition-colors"
                      whileHover={{ x: 5 }}
                    >
                      {link}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-gray-400 text-sm">
              © 2025 LearnVerse. All rights reserved.
            </p>

            <div className="flex items-center gap-4">
              {socialLinks.map(({ icon: Icon, href, color }) => (
                <motion.a
                  key={href}
                  href={href}
                  className={`p-3 glass-dark rounded-full shadow-glass-dark ${color} transition-colors`}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </div>

      <motion.button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 p-4 glass-dark rounded-full shadow-neon-blue z-40"
        whileHover={{ scale: 1.1, y: -5 }}
        whileTap={{ scale: 0.9 }}
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
      >
        <ArrowUp className="w-6 h-6 text-primary-400" />
      </motion.button>
    </footer>
  );
}
