import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Bell, Calendar, Clock, AlertCircle, Info, Award } from 'lucide-react';

const NoticesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const notices = [
    {
      id: 1,
      type: 'important',
      icon: <AlertCircle className="text-destructive" size={24} />,
      title: 'Registration Deadline Extended',
      content: 'Due to overwhelming response, we have extended the registration deadline by 10 days. New deadline: 31st March 2025.',
      date: '2025-01-15',
      time: '10:00 AM',
      bgColor: 'bg-destructive/5',
      borderColor: 'border-destructive/20'
    },
    {
      id: 2,
      type: 'info',
      icon: <Info className="text-primary" size={24} />,
      title: 'Exam Centers Announcement',
      content: 'Exam centers for major cities have been finalized. Check your registered email for the center details and admit card.',
      date: '2025-01-10',
      time: '2:30 PM',
      bgColor: 'bg-primary/5',
      borderColor: 'border-primary/20'
    },
    {
      id: 3,
      type: 'success',
      icon: <Award className="text-success" size={24} />,
      title: 'Prize Structure Updated',
      content: 'Exciting news! We have increased the total prize pool to ₹75 Lakhs with additional scholarship opportunities for top performers.',
      date: '2025-01-08',
      time: '11:15 AM',
      bgColor: 'bg-success/5',
      borderColor: 'border-success/20'
    },
    {
      id: 4,
      type: 'info',
      icon: <Bell className="text-accent" size={24} />,
      title: 'Mock Test Schedule Released',
      content: 'Free mock tests are now available for all registered students. Access through your student portal to practice before the main exam.',
      date: '2025-01-05',
      time: '9:00 AM',
      bgColor: 'bg-accent/5',
      borderColor: 'border-accent/20'
    },
    {
      id: 5,
      type: 'info',
      icon: <Info className="text-secondary" size={24} />,
      title: 'Study Material Available',
      content: 'Comprehensive study materials for all grades are now available for download from the syllabus section.',
      date: '2025-01-03',
      time: '4:45 PM',
      bgColor: 'bg-secondary/5',
      borderColor: 'border-secondary/20'
    }
  ];

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <section id="notices" className="py-20 bg-background" ref={ref}>
      <div className="section-container">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Latest Notices & Updates
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Stay informed with the latest exam updates, announcements, and important information 
            about the Talent Search Examination.
          </p>
        </motion.div>

        {/* Notice Board */}
        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="bg-card rounded-2xl shadow-soft overflow-hidden">
            {/* Header */}
            <div className="bg-gradient-to-r from-primary to-accent p-6 text-white">
              <h3 className="text-2xl font-bold flex items-center">
                <Bell className="mr-3" size={28} />
                Notice Board
              </h3>
              <p className="mt-2 opacity-90">Official announcements and updates</p>
            </div>

            {/* Notices List */}
            <div className="divide-y divide-border">
              {notices.map((notice, index) => (
                <motion.div
                  key={notice.id}
                  className={`p-6 ${notice.bgColor} border-l-4 ${notice.borderColor} hover:shadow-md transition-all duration-300`}
                  initial={{ opacity: 0, x: -30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  whileHover={{ scale: 1.01 }}
                >
                  <div className="flex items-start space-x-4">
                    {/* Icon */}
                    <div className="flex-shrink-0 mt-1">
                      {notice.icon}
                    </div>

                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <h4 className="text-lg font-semibold text-card-foreground mb-2">
                        {notice.title}
                      </h4>
                      <p className="text-muted-foreground mb-4 leading-relaxed">
                        {notice.content}
                      </p>
                      
                      {/* Date and Time */}
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Calendar className="mr-2" size={16} />
                        <span className="mr-4">{formatDate(notice.date)}</span>
                        <Clock className="mr-2" size={16} />
                        <span>{notice.time}</span>
                      </div>
                    </div>

                    {/* New Badge for recent notices */}
                    {index < 2 && (
                      <div className="flex-shrink-0">
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-destructive text-destructive-foreground animate-pulse-soft">
                          NEW
                        </span>
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Footer */}
            <div className="bg-muted p-6 text-center">
              <p className="text-muted-foreground mb-4">
                Want to receive updates directly in your inbox?
              </p>
              <button
                onClick={() => document.querySelector('#registration')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn-hero"
              >
                Register for Email Updates
              </button>
            </div>
          </div>
        </motion.div>

        {/* Quick Links */}
        <motion.div
          className="mt-12 grid md:grid-cols-3 gap-6"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <div className="bg-card rounded-xl p-6 text-center shadow-soft card-hover">
            <Bell className="mx-auto text-primary mb-4" size={32} />
            <h4 className="font-semibold text-card-foreground mb-2">SMS Alerts</h4>
            <p className="text-sm text-muted-foreground">
              Get instant notifications on your mobile
            </p>
          </div>

          <div className="bg-card rounded-xl p-6 text-center shadow-soft card-hover">
            <Calendar className="mx-auto text-success mb-4" size={32} />
            <h4 className="font-semibold text-card-foreground mb-2">Exam Calendar</h4>
            <p className="text-sm text-muted-foreground">
              Important dates and deadlines
            </p>
          </div>

          <div className="bg-card rounded-xl p-6 text-center shadow-soft card-hover">
            <AlertCircle className="mx-auto text-accent mb-4" size={32} />
            <h4 className="font-semibold text-card-foreground mb-2">Help Desk</h4>
            <p className="text-sm text-muted-foreground">
              24/7 support for your queries
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default NoticesSection;