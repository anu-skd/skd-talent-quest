import { motion } from 'framer-motion';
import { Calendar, Award, Users, Facebook, Instagram, Youtube } from 'lucide-react';
import heroImage from '../assets/hero-education.jpg';
import CountdownTimer from './CountdownTimer';

const HeroSection = () => {
  const scrollToRegistration = () => {
    const element = document.querySelector('#registration');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen bg-gradient-hero overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Students studying"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-accent/60"></div>
      </div>

      <div className="relative z-10 section-container pt-24 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-6rem)]">
          {/* Content */}
          <motion.div
            className="text-center lg:text-left"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Institute Name */}
            <motion.h1
              className="text-5xl md:text-6xl font-bold text-white mb-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              SKD New Standard
              <span className="block text-3xl md:text-4xl font-semibold text-secondary mt-2">
                Coaching Institute
              </span>
            </motion.h1>

            {/* Title */}
            <motion.h2
              className="text-2xl md:text-3xl font-semibold text-white/90 mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Talent Search Exam
              <span className="block text-lg text-secondary">Grades VIII–XII</span>
            </motion.h2>

            {/* Prize Banner */}
            <motion.div
              className="flex justify-center lg:justify-start mb-8"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <div className="prize-banner animate-float">
                <Award className="inline-block mr-2" size={24} />
                Up to ₹50 Lakhs Cash Prizes + Certificates & Goodies
              </div>
            </motion.div>

            {/* CTA Button */}
            <motion.div
              className="flex justify-center lg:justify-start mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <button
                onClick={scrollToRegistration}
                className="btn-success text-xl px-12 py-4"
              >
                Register Now
              </button>
            </motion.div>

            {/* Social Media Icons */}
            <motion.div
              className="flex justify-center lg:justify-start space-x-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              <a href="#" className="text-white hover:text-secondary transition-colors duration-300">
                <Facebook size={28} />
              </a>
              <a href="#" className="text-white hover:text-secondary transition-colors duration-300">
                <Instagram size={28} />
              </a>
              <a href="#" className="text-white hover:text-secondary transition-colors duration-300">
                <Youtube size={28} />
              </a>
            </motion.div>
          </motion.div>

          {/* Stats Cards */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <motion.div
              className="bg-white/10 backdrop-blur-md rounded-2xl p-6 text-center card-hover"
              whileHover={{ scale: 1.05 }}
            >
              <Calendar className="mx-auto mb-4 text-secondary" size={48} />
              <h3 className="text-2xl font-bold text-white mb-2">Exam Date</h3>
              <p className="text-white/80">Coming Soon</p>
            </motion.div>

            <motion.div
              className="bg-white/10 backdrop-blur-md rounded-2xl p-6 text-center card-hover"
              whileHover={{ scale: 1.05 }}
            >
              <Award className="mx-auto mb-4 text-secondary" size={48} />
              <h3 className="text-2xl font-bold text-white mb-2">Prizes</h3>
              <p className="text-white/80">₹50 Lakhs+</p>
            </motion.div>

            <motion.div
              className="bg-white/10 backdrop-blur-md rounded-2xl p-6 text-center card-hover"
              whileHover={{ scale: 1.05 }}
            >
              <Users className="mx-auto mb-4 text-secondary" size={48} />
              <h3 className="text-2xl font-bold text-white mb-2">Students</h3>
              <p className="text-white/80">10,000+</p>
            </motion.div>

            {/* Countdown Timer */}
            <div className="sm:col-span-2 lg:col-span-1">
              <CountdownTimer />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;