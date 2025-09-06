import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Download, BookOpen, FileText, CheckCircle } from 'lucide-react';

const SyllabusSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const syllabusData = [
    {
      class: 'VIII',
      subjects: ['Mathematics', 'Science', 'Social Science', 'English', 'General Knowledge'],
      duration: '2 Hours',
      marks: 200,
      color: 'from-primary to-blue-600'
    },
    {
      class: 'IX',
      subjects: ['Mathematics', 'Science', 'Social Science', 'English', 'General Knowledge'],
      duration: '2.5 Hours',
      marks: 250,
      color: 'from-success to-green-600'
    },
    {
      class: 'X',
      subjects: ['Mathematics', 'Science', 'Social Science', 'English', 'General Knowledge'],
      duration: '2.5 Hours',
      marks: 250,
      color: 'from-secondary to-yellow-600'
    },
    {
      class: 'XI',
      subjects: ['Physics', 'Chemistry', 'Mathematics', 'English', 'General Knowledge'],
      duration: '3 Hours',
      marks: 300,
      color: 'from-accent to-purple-600'
    },
    {
      class: 'XII',
      subjects: ['Physics', 'Chemistry', 'Mathematics', 'English', 'General Knowledge'],
      duration: '3 Hours',
      marks: 300,
      color: 'from-pink-500 to-red-500'
    }
  ];

  const handleDownload = (className: string) => {
    // Simulate PDF download
    alert(`Downloading syllabus for Class ${className}...`);
  };

  return (
    <section id="syllabus" className="py-20 bg-gradient-subtle" ref={ref}>
      <div className="section-container">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Exam Syllabus
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Download detailed syllabus for each grade level. Prepare effectively with our 
            comprehensive study materials and examination patterns.
          </p>
        </motion.div>

        {/* Syllabus Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {syllabusData.map((item, index) => (
            <motion.div
              key={index}
              className="bg-card rounded-2xl overflow-hidden shadow-soft card-hover"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
            >
              {/* Header with Gradient */}
              <div className={`bg-gradient-to-r ${item.color} p-6 text-white`}>
                <div className="flex items-center justify-between">
                  <h3 className="text-2xl font-bold">Class {item.class}</h3>
                  <BookOpen size={28} />
                </div>
                <div className="flex justify-between items-center mt-4 text-sm">
                  <span>Duration: {item.duration}</span>
                  <span>Total Marks: {item.marks}</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h4 className="font-semibold text-card-foreground mb-4">Subjects Covered:</h4>
                <ul className="space-y-2 mb-6">
                  {item.subjects.map((subject, subIndex) => (
                    <li key={subIndex} className="flex items-center text-muted-foreground">
                      <CheckCircle className="text-success mr-2" size={16} />
                      {subject}
                    </li>
                  ))}
                </ul>
                
                <button
                  onClick={() => handleDownload(item.class)}
                  className="w-full btn-hero flex items-center justify-center"
                >
                  <Download className="mr-2" size={20} />
                  Download Syllabus
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* General Guidelines */}
        <motion.div
          className="bg-card rounded-2xl p-8 shadow-soft"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <h3 className="text-2xl font-bold text-card-foreground mb-6 flex items-center">
            <FileText className="text-primary mr-3" size={28} />
            General Guidelines
          </h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-semibold text-card-foreground mb-3">Exam Pattern</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-center">
                  <CheckCircle className="text-success mr-2" size={16} />
                  Multiple Choice Questions (MCQs)
                </li>
                <li className="flex items-center">
                  <CheckCircle className="text-success mr-2" size={16} />
                  Objective type questions only
                </li>
                <li className="flex items-center">
                  <CheckCircle className="text-success mr-2" size={16} />
                  Negative marking for wrong answers
                </li>
                <li className="flex items-center">
                  <CheckCircle className="text-success mr-2" size={16} />
                  OMR sheet based examination
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-card-foreground mb-3">Preparation Tips</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-center">
                  <CheckCircle className="text-primary mr-2" size={16} />
                  Study according to NCERT curriculum
                </li>
                <li className="flex items-center">
                  <CheckCircle className="text-primary mr-2" size={16} />
                  Practice previous year questions
                </li>
                <li className="flex items-center">
                  <CheckCircle className="text-primary mr-2" size={16} />
                  Focus on time management
                </li>
                <li className="flex items-center">
                  <CheckCircle className="text-primary mr-2" size={16} />
                  Take mock tests regularly
                </li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SyllabusSection;