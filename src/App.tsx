import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CoursesSection from './components/CoursesSection';
import StatsSection from './components/StatsSection';
import TestimonialsSection from './components/TestimonialsSection';
import Footer from './components/Footer';
import AuthModal from './components/AuthModal';
import CustomCursor from './components/CustomCursor';

function App() {
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [authMode, setAuthMode] = useState<'login' | 'signup'>('login');

  const openLogin = () => {
    setAuthMode('login');
    setAuthModalOpen(true);
  };

  const openSignup = () => {
    setAuthMode('signup');
    setAuthModalOpen(true);
  };

  return (
    <div className="min-h-screen relative overflow-x-hidden">
      <CustomCursor />
      <Navbar onLoginClick={openLogin} onSignUpClick={openSignup} />
      <Hero onGetStarted={openSignup} onBecomeInstructor={openSignup} />
      <StatsSection />
      <CoursesSection />
      <TestimonialsSection />
      <Footer />
      <AuthModal
        isOpen={authModalOpen}
        onClose={() => setAuthModalOpen(false)}
        mode={authMode}
      />
    </div>
  );
}

export default App;
