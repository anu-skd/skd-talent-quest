import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const CountdownTimer = () => {
  // Set exam date to 3 months from now for demo
  const examDate = new Date();
  examDate.setMonth(examDate.getMonth() + 3);
  examDate.setDate(15); // 15th of the month
  examDate.setHours(10, 0, 0, 0); // 10:00 AM

  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date().getTime();
      const examTime = examDate.getTime();
      const difference = examTime - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);

  const timeUnits = [
    { label: 'Days', value: timeLeft.days },
    { label: 'Hours', value: timeLeft.hours },
    { label: 'Minutes', value: timeLeft.minutes },
    { label: 'Seconds', value: timeLeft.seconds }
  ];

  return (
    <motion.div
      className="bg-white/10 backdrop-blur-md rounded-2xl p-6 text-center"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, delay: 1.2 }}
    >
      <h3 className="text-xl font-bold text-white mb-4">Exam Countdown</h3>
      <div className="grid grid-cols-4 gap-2 sm:gap-4">
        {timeUnits.map((unit, index) => (
          <motion.div
            key={unit.label}
            className="bg-white/20 rounded-lg p-2 sm:p-3"
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
          >
            <div className="text-lg sm:text-2xl font-bold text-white">
              {unit.value.toString().padStart(2, '0')}
            </div>
            <div className="text-xs sm:text-sm text-white/80">
              {unit.label}
            </div>
          </motion.div>
        ))}
      </div>
      <p className="text-sm text-white/80 mt-4">
        Exam Date: {examDate.toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'long',
          day: 'numeric'
        })}
      </p>
    </motion.div>
  );
};

export default CountdownTimer;