import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';
import student1 from '../assets/student1.jpg';
import student2 from '../assets/student2.jpg';
import student3 from '../assets/student3.jpg';

const TestimonialsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: 'Arjun Sharma',
      class: 'Class X',
      image: student1,
      rating: 5,
      content: 'The Talent Search Exam helped me discover my potential in mathematics. I won ₹2 lakhs and got admission to my dream school with a scholarship. The exam pattern was fair and the study materials provided were excellent.',
      achievement: 'Winner - ₹2 Lakhs Prize'
    },
    {
      id: 2,
      name: 'Priya Patel',
      class: 'Class XII',
      image: student2,
      rating: 5,
      content: 'This exam gave me the confidence to pursue engineering. The comprehensive syllabus coverage and competitive environment pushed me to perform better. I am grateful for the recognition and financial support.',
      achievement: 'State Topper - ₹5 Lakhs Prize'
    },
    {
      id: 3,
      name: 'Rahul Kumar',
      class: 'Class XI',
      image: student3,
      rating: 5,
      content: 'SKD New Standard Coaching Institute provided excellent guidance for the exam preparation. The mock tests were very helpful, and the result exceeded my expectations. Highly recommend to all students.',
      achievement: 'Regional Winner - ₹1.5 Lakhs Prize'
    },
    {
      id: 4,
      name: 'Sneha Gupta',
      class: 'Class IX',
      image: student2, // Reusing image for demo
      rating: 5,
      content: 'The exam was well-organized and the questions were challenging yet fair. It helped me identify my strengths and weaknesses. The certificate I received has added great value to my academic profile.',
      achievement: 'Excellence Certificate + ₹50,000'
    },
    {
      id: 5,
      name: 'Vikash Singh',
      class: 'Class VIII',
      image: student1, // Reusing image for demo
      rating: 5,
      content: 'Being the youngest participant, I was nervous initially. But the supportive environment and well-structured exam format helped me perform my best. This experience boosted my confidence tremendously.',
      achievement: 'Youngest Achiever Award + ₹25,000'
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToTestimonial = (index: number) => {
    setCurrentTestimonial(index);
  };

  return (
    <section id="testimonials" className="py-20 bg-gradient-subtle" ref={ref}>
      <div className="section-container">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Student Success Stories
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Hear from our successful students who have achieved excellence in the 
            Talent Search Exam and transformed their academic journey.
          </p>
        </motion.div>

        {/* Main Testimonial Carousel */}
        <motion.div
          className="max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="relative bg-card rounded-3xl shadow-strong overflow-hidden">
            {/* Background Quote */}
            <div className="absolute top-8 right-8 opacity-5">
              <Quote size={120} />
            </div>

            <div className="relative p-8 md:p-12">
              {/* Current Testimonial */}
              <motion.div
                key={currentTestimonial}
                className="flex flex-col lg:flex-row items-center gap-8"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                {/* Student Image and Info */}
                <div className="flex-shrink-0 text-center">
                  <div className="relative">
                    <img
                      src={testimonials[currentTestimonial].image}
                      alt={testimonials[currentTestimonial].name}
                      className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-4 border-primary/20 shadow-lg"
                    />
                    <div className="absolute -bottom-2 -right-2 bg-success rounded-full p-2">
                      <Star className="text-white" size={20} fill="currentColor" />
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-card-foreground mt-4">
                    {testimonials[currentTestimonial].name}
                  </h3>
                  <p className="text-muted-foreground">
                    {testimonials[currentTestimonial].class}
                  </p>
                  
                  {/* Star Rating */}
                  <div className="flex justify-center mt-2 space-x-1">
                    {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                      <Star key={i} size={16} className="text-secondary" fill="currentColor" />
                    ))}
                  </div>
                </div>

                {/* Testimonial Content */}
                <div className="flex-1 text-center lg:text-left">
                  <div className="bg-primary/5 rounded-2xl p-6 mb-4">
                    <p className="text-lg leading-relaxed text-card-foreground mb-4">
                      "{testimonials[currentTestimonial].content}"
                    </p>
                  </div>
                  
                  <div className="bg-gradient-to-r from-success/10 to-secondary/10 rounded-xl p-4 border border-success/20">
                    <p className="font-semibold text-success">
                      🏆 {testimonials[currentTestimonial].achievement}
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Navigation Arrows */}
              <div className="absolute top-1/2 -translate-y-1/2 left-4 right-4 flex justify-between pointer-events-none">
                <button
                  onClick={prevTestimonial}
                  className="bg-white shadow-lg rounded-full p-3 hover:bg-gray-50 transition-colors duration-300 pointer-events-auto"
                >
                  <ChevronLeft size={24} className="text-primary" />
                </button>
                <button
                  onClick={nextTestimonial}
                  className="bg-white shadow-lg rounded-full p-3 hover:bg-gray-50 transition-colors duration-300 pointer-events-auto"
                >
                  <ChevronRight size={24} className="text-primary" />
                </button>
              </div>
            </div>
          </div>

          {/* Pagination Dots */}
          <div className="flex justify-center mt-8 space-x-3">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentTestimonial
                    ? 'bg-primary scale-125'
                    : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
                }`}
              />
            ))}
          </div>
        </motion.div>

        {/* Summary Stats */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="text-center bg-card rounded-xl p-6 shadow-soft">
            <div className="text-3xl font-bold text-primary mb-2">10,000+</div>
            <div className="text-muted-foreground">Happy Students</div>
          </div>
          <div className="text-center bg-card rounded-xl p-6 shadow-soft">
            <div className="text-3xl font-bold text-success mb-2">₹50L+</div>
            <div className="text-muted-foreground">Prizes Distributed</div>
          </div>
          <div className="text-center bg-card rounded-xl p-6 shadow-soft">
            <div className="text-3xl font-bold text-secondary mb-2">95%</div>
            <div className="text-muted-foreground">Satisfaction Rate</div>
          </div>
          <div className="text-center bg-card rounded-xl p-6 shadow-soft">
            <div className="text-3xl font-bold text-accent mb-2">500+</div>
            <div className="text-muted-foreground">Schools Covered</div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-8 border border-primary/20">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Ready to Join Our Success Stories?
            </h3>
            <p className="text-muted-foreground mb-6">
              Take the first step towards academic excellence and substantial rewards.
            </p>
            <button
              onClick={() => document.querySelector('#registration')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-success text-lg px-8 py-3"
            >
              Start Your Journey Today
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;