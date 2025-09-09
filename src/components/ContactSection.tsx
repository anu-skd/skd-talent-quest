import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Mail, Phone, MapPin, Clock, Facebook, Instagram, Youtube, MessageCircle, Send } from 'lucide-react';

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const contactInfo = [
    {
      icon: <Mail className="text-primary" size={24} />,
      title: 'Email Address',
      content: 'skdnsci02@gmail.com',
      description: 'Send us your queries anytime',
      action: 'mailto:skdnsci02@gmail.com'
    },
    {
      icon: <Phone className="text-success" size={24} />,
      title: 'Phone Number',
      content: '+91 9876543210',
      description: 'Call us during business hours',
      action: 'tel:+919876543210'
    },
    {
      icon: <MapPin className="text-accent" size={24} />,
      title: 'Address',
      content: 'SKD New Standard Coaching Institute',
      description: 'Visit our campus for guidance',
      action: '#'
    },
    {
      icon: <Clock className="text-secondary" size={24} />,
      title: 'Working Hours',
      content: 'Mon - Sat: 9:00 AM - 6:00 PM',
      description: 'Sunday: Closed',
      action: '#'
    }
  ];

  const socialLinks = [
    {
      icon: <Facebook size={20} />,
      name: 'Facebook',
      url: '#',
      color: 'hover:text-blue-600'
    },
    {
      icon: <Instagram size={20} />,
      name: 'Instagram',
      url: '#',
      color: 'hover:text-pink-600'
    },
    {
      icon: <Youtube size={20} />,
      name: 'YouTube',
      url: '#',
      color: 'hover:text-red-600'
    },
    {
      icon: <MessageCircle size={20} />,
      name: 'WhatsApp',
      url: 'https://wa.me/919876543210',
      color: 'hover:text-green-600'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-background" ref={ref}>
      <div className="section-container">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Get in Touch
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Have questions about the Talent Search Exam? Our dedicated support team 
            is here to help you with registration, syllabus, and exam-related queries.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold text-foreground mb-8">
              Contact Information
            </h3>
            
            <div className="space-y-6">
              {contactInfo.map((item, index) => (
                <motion.div
                  key={index}
                  className="bg-card rounded-xl p-6 shadow-soft card-hover"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 mt-1">
                      {item.icon}
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-card-foreground mb-1">
                        {item.title}
                      </h4>
                      {item.action && item.action !== '#' ? (
                        <a
                          href={item.action}
                          className="text-primary font-medium hover:text-primary-dark transition-colors duration-300"
                        >
                          {item.content}
                        </a>
                      ) : (
                        <p className="text-card-foreground font-medium">{item.content}</p>
                      )}
                      <p className="text-muted-foreground text-sm mt-1">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Social Media Links */}
            <motion.div
              className="mt-8"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <h4 className="font-semibold text-foreground mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target={social.url !== '#' ? '_blank' : undefined}
                    rel={social.url !== '#' ? 'noopener noreferrer' : undefined}
                    className={`bg-card rounded-lg p-3 shadow-soft transition-all duration-300 ${social.color} hover:scale-110`}
                    title={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Quick Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="bg-card rounded-2xl p-8 shadow-soft">
              <h3 className="text-2xl font-bold text-card-foreground mb-6">
                Quick Contact Form
              </h3>
              
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-card-foreground mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3 border border-input rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 bg-background"
                      placeholder="Enter your name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-card-foreground mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      className="w-full px-4 py-3 border border-input rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 bg-background"
                      placeholder="Your phone number"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-card-foreground mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    className="w-full px-4 py-3 border border-input rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 bg-background"
                    placeholder="your.email@example.com"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-card-foreground mb-2">
                    Subject
                  </label>
                  <select className="w-full px-4 py-3 border border-input rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 bg-background">
                    <option>Select a subject</option>
                    <option>Registration Query</option>
                    <option>Exam Information</option>
                    <option>Syllabus Related</option>
                    <option>Technical Support</option>
                    <option>Other</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-card-foreground mb-2">
                    Message *
                  </label>
                  <textarea
                    rows={4}
                    required
                    className="w-full px-4 py-3 border border-input rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 bg-background resize-none"
                    placeholder="Type your message here..."
                  ></textarea>
                </div>
                
                <motion.button
                  type="submit"
                  className="w-full btn-success flex items-center justify-center"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Send className="mr-2" size={20} />
                  Send Message
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>

        {/* Map Placeholder */}
        <motion.div
          className="mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <div className="bg-card rounded-2xl p-8 shadow-soft text-center">
            <MapPin className="mx-auto text-primary mb-4" size={48} />
            <h3 className="text-xl font-semibold text-card-foreground mb-2">
              Visit Our Campus
            </h3>
            <p className="text-muted-foreground mb-4">
              SKD New Standard Coaching Institute - Your pathway to academic excellence
            </p>
            <button className="btn-hero">
              View on Google Maps
            </button>
          </div>
        </motion.div>
      </div>

      {/* Footer */}
      <div className="border-t border-border mt-16 pt-8">
        <div className="section-container text-center">
          <p className="text-muted-foreground">
            © 2026 SKD New Standard Coaching Institute. All Rights Reserved.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;