import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { BookOpen, Trophy, Users, Gift, GraduationCap, Target } from 'lucide-react';

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const features = [
    {
      icon: <Trophy className="text-secondary" size={32} />,
      title: "Cash Prizes up to ₹50 Lakhs",
      description: "Win substantial cash rewards based on your performance"
    },
    {
      icon: <GraduationCap className="text-primary" size={32} />,
      title: "Recognition & Certificates",
      description: "Get recognized for your academic excellence with official certificates"
    },
    {
      icon: <Target className="text-success" size={32} />,
      title: "Scholarship Opportunities",
      description: "Qualify for educational scholarships and future opportunities"
    },
    {
      icon: <Gift className="text-accent" size={32} />,
      title: "Exciting Goodies",
      description: "Receive educational materials and exciting prizes"
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-subtle">
      <div className="section-container" ref={ref}>
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            About Talent Search Exam
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover your academic potential and compete with students across the nation 
            in our comprehensive Talent Search Examination designed for grades VIII to XII.
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="bg-card rounded-2xl p-8 shadow-soft">
              <div className="flex items-center mb-6">
                <BookOpen className="text-primary mr-4" size={40} />
                <h3 className="text-2xl font-bold text-card-foreground">
                  Eligibility & Overview
                </h3>
              </div>
              
              <div className="space-y-4 text-muted-foreground">
                <p className="text-lg leading-relaxed">
                  The Talent Search Exam is designed for students from <strong className="text-primary">Grades VIII to XII</strong> 
                  who want to showcase their academic brilliance and compete at a national level.
                </p>
                
                <p className="text-lg leading-relaxed">
                  This comprehensive examination tests students across multiple subjects and 
                  provides them with an opportunity to win substantial rewards while gaining 
                  recognition for their academic achievements.
                </p>
                
                <div className="bg-primary/5 rounded-lg p-4 mt-6">
                  <h4 className="font-semibold text-primary mb-2">Why Participate?</h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center">
                      <Users className="text-success mr-2" size={16} />
                      Compete with 10,000+ students nationwide
                    </li>
                    <li className="flex items-center">
                      <Trophy className="text-secondary mr-2" size={16} />
                      Win from a prize pool of ₹50+ Lakhs
                    </li>
                    <li className="flex items-center">
                      <GraduationCap className="text-primary mr-2" size={16} />
                      Gain academic recognition and credentials
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Features Grid */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="bg-card rounded-xl p-6 shadow-soft card-hover text-center"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="flex justify-center mb-4">
                  {feature.icon}
                </div>
                <h4 className="font-semibold text-card-foreground mb-3">
                  {feature.title}
                </h4>
                <p className="text-sm text-muted-foreground">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Call to Action */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-8 border border-primary/20">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Ready to Showcase Your Talent?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Join thousands of students in this prestigious examination and take the first 
              step towards academic excellence and substantial rewards.
            </p>
            <button 
              onClick={() => document.querySelector('#registration')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-hero"
            >
              Register for the Exam
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;