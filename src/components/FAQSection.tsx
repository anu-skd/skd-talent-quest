import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';

const FAQSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [openFAQ, setOpenFAQ] = useState<number | null>(0);

  const faqs = [
    {
      question: 'Who can participate in the Talent Search Exam?',
      answer: 'Students from Grades VIII to XII who are currently enrolled in any recognized school can participate in our Talent Search Examination. Age restrictions may apply based on the grade level.'
    },
    {
      question: 'What is the exam pattern and duration?',
      answer: 'The exam consists of Multiple Choice Questions (MCQs) covering subjects like Mathematics, Science, Social Science, English, and General Knowledge. Duration varies from 2-3 hours depending on the grade level.'
    },
    {
      question: 'How much are the cash prizes and when will they be distributed?',
      answer: 'We offer cash prizes up to ₹50 Lakhs along with certificates and goodies. Prize distribution happens within 30 days of result declaration. Winners will be contacted directly for the prize ceremony.'
    },
    {
      question: 'Is there any registration fee for the exam?',
      answer: 'The registration process is completely free of cost. We believe in providing equal opportunities to all students regardless of their economic background.'
    },
    {
      question: 'Can I change my exam center after registration?',
      answer: 'Exam center changes are allowed up to 15 days before the exam date, subject to availability. Please contact our support team for center change requests.'
    },
    {
      question: 'What documents do I need to bring on exam day?',
      answer: 'You need to bring your admit card, a valid photo ID (Aadhar card, school ID, or passport), and a few passport-size photographs. Electronic devices are strictly prohibited.'
    },
    {
      question: 'Will there be negative marking in the exam?',
      answer: 'Yes, there will be negative marking for incorrect answers. For every wrong answer, 0.25 marks will be deducted. It\'s advisable to attempt questions you are confident about.'
    },
    {
      question: 'How can I access study materials and mock tests?',
      answer: 'Registered students can access free study materials and mock tests through their student portal. Syllabus PDFs are available for download in the syllabus section of our website.'
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <section className="py-20 bg-background" ref={ref}>
      <div className="section-container">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Find answers to commonly asked questions about the Talent Search Exam, 
            registration process, and examination guidelines.
          </p>
        </motion.div>

        {/* FAQ Accordion */}
        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                className="bg-card rounded-xl shadow-soft overflow-hidden border border-border"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
              >
                {/* Question */}
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-muted/50 transition-colors duration-300"
                >
                  <div className="flex items-center space-x-3">
                    <HelpCircle className="text-primary flex-shrink-0" size={20} />
                    <h3 className="font-semibold text-card-foreground pr-4">
                      {faq.question}
                    </h3>
                  </div>
                  <div className="flex-shrink-0">
                    {openFAQ === index ? (
                      <ChevronUp className="text-primary" size={24} />
                    ) : (
                      <ChevronDown className="text-primary" size={24} />
                    )}
                  </div>
                </button>

                {/* Answer */}
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{
                    height: openFAQ === index ? 'auto' : 0,
                    opacity: openFAQ === index ? 1 : 0
                  }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                  className="overflow-hidden"
                >
                  <div className="px-6 pb-4 pl-11">
                    <p className="text-muted-foreground leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Contact for More Questions */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-8 border border-primary/20">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Still Have Questions?
            </h3>
            <p className="text-muted-foreground mb-6">
              Our support team is available to help you with any additional queries 
              about the Talent Search Examination.
            </p>
            <button
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-hero"
            >
              Contact Support Team
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;