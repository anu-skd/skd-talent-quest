import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { User, Mail, Phone, MapPin, School, CreditCard, CheckCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const RegistrationForm = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const { toast } = useToast();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    studentName: '',
    gender: '',
    class: '',
    mobile: '',
    email: '',
    aadhar: '',
    address: '',
    city: '',
    school: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitted(true);
      toast({
        title: "Registration Successful!",
        description: "Your registration has been submitted successfully. You will receive a confirmation email shortly.",
      });
    }, 1000);
  };

  if (isSubmitted) {
    return (
      <section id="registration" className="py-20 bg-background">
        <div className="section-container">
          <motion.div
            className="max-w-2xl mx-auto text-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="bg-success/10 rounded-2xl p-12 border border-success/20">
              <CheckCircle className="mx-auto text-success mb-6" size={80} />
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Registration Successful!
              </h2>
              <p className="text-muted-foreground mb-6">
                Thank you for registering for the Talent Search Exam. We've sent a confirmation 
                email to <strong>{formData.email}</strong> with further details.
              </p>
              <button
                onClick={() => setIsSubmitted(false)}
                className="btn-hero"
              >
                Register Another Student
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section id="registration" className="py-20 bg-background" ref={ref}>
      <div className="section-container">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Registration Form
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Fill out the form below to register for the Talent Search Exam. 
            All fields are required for successful registration.
          </p>
        </motion.div>

        {/* Form */}
        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="bg-card rounded-2xl p-8 shadow-soft">
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Personal Information */}
              <div>
                <h3 className="text-2xl font-semibold text-card-foreground mb-6 flex items-center">
                  <User className="text-primary mr-3" size={24} />
                  Personal Information
                </h3>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-card-foreground mb-2">
                      Student Name *
                    </label>
                    <input
                      type="text"
                      name="studentName"
                      value={formData.studentName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-input rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 bg-background"
                      placeholder="Enter full name"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-card-foreground mb-2">
                      Gender *
                    </label>
                    <div className="flex space-x-6 pt-2">
                      <label className="flex items-center">
                        <input
                          type="radio"
                          name="gender"
                          value="male"
                          onChange={handleInputChange}
                          required
                          className="text-primary focus:ring-primary"
                        />
                        <span className="ml-2 text-card-foreground">Male</span>
                      </label>
                      <label className="flex items-center">
                        <input
                          type="radio"
                          name="gender"
                          value="female"
                          onChange={handleInputChange}
                          required
                          className="text-primary focus:ring-primary"
                        />
                        <span className="ml-2 text-card-foreground">Female</span>
                      </label>
                      <label className="flex items-center">
                        <input
                          type="radio"
                          name="gender"
                          value="other"
                          onChange={handleInputChange}
                          required
                          className="text-primary focus:ring-primary"
                        />
                        <span className="ml-2 text-card-foreground">Other</span>
                      </label>
                    </div>
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6 mt-6">
                  <div>
                    <label className="block text-sm font-medium text-card-foreground mb-2">
                      Class *
                    </label>
                    <select
                      name="class"
                      value={formData.class}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-input rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 bg-background"
                    >
                      <option value="">Select Class</option>
                      <option value="VIII">Class VIII</option>
                      <option value="IX">Class IX</option>
                      <option value="X">Class X</option>
                      <option value="XI">Class XI</option>
                      <option value="XII">Class XII</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-card-foreground mb-2">
                      Aadhar Number *
                    </label>
                    <input
                      type="text"
                      name="aadhar"
                      value={formData.aadhar}
                      onChange={handleInputChange}
                      required
                      pattern="[0-9]{12}"
                      maxLength={12}
                      className="w-full px-4 py-3 border border-input rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 bg-background"
                      placeholder="12-digit Aadhar number"
                    />
                  </div>
                </div>
              </div>

              {/* Contact Information */}
              <div>
                <h3 className="text-2xl font-semibold text-card-foreground mb-6 flex items-center">
                  <Phone className="text-success mr-3" size={24} />
                  Contact Information
                </h3>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-card-foreground mb-2">
                      Mobile Number *
                    </label>
                    <input
                      type="tel"
                      name="mobile"
                      value={formData.mobile}
                      onChange={handleInputChange}
                      required
                      pattern="[0-9]{10}"
                      maxLength={10}
                      className="w-full px-4 py-3 border border-input rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 bg-background"
                      placeholder="10-digit mobile number"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-card-foreground mb-2">
                      Email ID *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-input rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 bg-background"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>
              </div>

              {/* Address Information */}
              <div>
                <h3 className="text-2xl font-semibold text-card-foreground mb-6 flex items-center">
                  <MapPin className="text-accent mr-3" size={24} />
                  Address Information
                </h3>
                
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-card-foreground mb-2">
                      Address *
                    </label>
                    <input
                      type="text"
                      name="address"
                      value={formData.address}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-input rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 bg-background"
                      placeholder="Full address"
                    />
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-card-foreground mb-2">
                        City *
                      </label>
                      <input
                        type="text"
                        name="city"
                        value={formData.city}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-input rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 bg-background"
                        placeholder="City name"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-card-foreground mb-2">
                        Current School *
                      </label>
                      <input
                        type="text"
                        name="school"
                        value={formData.school}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-input rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 bg-background"
                        placeholder="School name"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <motion.div
                className="text-center pt-6"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <button
                  type="submit"
                  className="btn-success text-xl px-12 py-4"
                >
                  Complete Registration
                </button>
                <p className="text-sm text-muted-foreground mt-4">
                  By registering, you agree to our terms and conditions.
                </p>
              </motion.div>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default RegistrationForm;