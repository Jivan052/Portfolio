import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaArrowDown } from 'react-icons/fa';
import { FaHackerrank } from "react-icons/fa6";
import { SiKaggle, SiHuggingface } from "react-icons/si";
import { useState, useEffect } from 'react';

const socials = [
  { Icon: FaGithub, url: "https://github.com/Jivan052", label: "GitHub" },
  { Icon: FaLinkedin, url: "https://www.linkedin.com/in/jivan-jamdar/", label: "LinkedIn" },
  { Icon: SiHuggingface, url: "https://huggingface.co/Jivan01", label: "Hugging Face" },
  { Icon: FaHackerrank, url: "https://www.hackerrank.com/profile/Jivan01", label: "HackerRank" },
  { Icon: SiKaggle, url: "https://www.kaggle.com/jivan1234", label: "Kaggle" },
  

];

const socialVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: i => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1 + 0.6,
      duration: 0.5,
      ease: "easeOut"
    },
  }),
};

const titles = [
  "Frontend Developer",
  "Open Source Contributor",
  "UI/UX Enthusiast",
  "Tech Lead"
];

export default function Hero() {
  const [titleIndex, setTitleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTitleIndex((prev) => (prev + 1) % titles.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 -z-10">
        <motion.div 
          className="absolute top-20 left-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl"
          animate={{
            x: [0, 30, 0],
            y: [0, 40, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-20 right-10 w-80 h-80 bg-secondary/10 rounded-full blur-3xl"
          animate={{
            x: [0, -30, 0],
            y: [0, -40, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        {/* Tech pattern background - subtle code-like pattern */}
        <div className="absolute inset-0 opacity-[0.03] bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCI+CjxyZWN0IHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgZmlsbD0ibm9uZSIgLz4KPHBhdGggZD0iTTAgMEw1IDAgTDUgNSBMMCAwTTEwIDBMMTUgMCBMMTUgNSBMMTAgME0wIDEwTDUgMTAgTDUgMTUgTDAgMTBNMTAgMTBMMTUgMTAgTDE1IDE1IEwxMCAxMCIgZmlsbD0iIzMzMyIgLz4KPC9zdmc+')]"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.5,
              ease: [0, 0.71, 0.2, 1.01],
            }}
            className="mb-8 relative"
          >
            <div className="w-48 h-48 mx-auto relative">
              <img
                src="https://i.pinimg.com/736x/9d/37/12/9d371210337e4417faf9daa7f280769f.jpg"
                alt="Professional headshot"
                className="rounded-full shadow-lg relative z-10 border-4 border-white object-cover w-full h-full"
              />
              
              {/* Primary pulsing circle */}
              <motion.div
                className="absolute inset-0 rounded-full bg-primary/20"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 0, 0.5],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              
              {/* Secondary pulsing circle */}
              <motion.div
                className="absolute inset-0 rounded-full bg-secondary/30"
                animate={{
                  scale: [1.1, 1.3, 1.1],
                  opacity: [0.3, 0, 0.3],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1
                }}
              />
              
              {/* Decorative dots */}
              <div className="absolute -right-2 -top-2 w-5 h-5 bg-primary rounded-full z-20"></div>
              <div className="absolute -left-2 -bottom-2 w-4 h-4 bg-secondary rounded-full z-20"></div>
            </div>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-5xl sm:text-6xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"
          >
            Jivan Jamdar
          </motion.h1>

          <div className="h-12 mb-6 relative overflow-hidden">
            <motion.div
              key={titleIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-xl sm:text-2xl font-medium flex items-center justify-center gap-2">
                <span className="text-dark">I'm a</span>
                <span className="text-primary font-bold">{titles[titleIndex]}</span>
              </h2>
            </motion.div>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-lg text-gray-700 max-w-2xl mx-auto mb-8 leading-relaxed"
          >
            Passionate about creating elegant solutions to complex problems. 
            Specializing in modern web technologies and user-centric product design 
            with a focus on delivering exceptional user experiences.
          </motion.p>
          
          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mb-12"
          >
            <a 
              href="#contact" 
              className="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-full 
                      font-medium transition-all shadow-md hover:shadow-lg transform 
                      hover:-translate-y-1 inline-flex items-center gap-2"
            >
              <span>Get in Touch</span>
              <FaArrowDown className="animate-bounce" />
            </a>
          </motion.div>
          
          {/* Social Icons with enhanced design */}
          <div className="relative">
            <motion.div
              initial="hidden"
              animate="visible"
              className="flex justify-center space-x-8"
            >
              {socials.map((item, i) => (
                <motion.a
                  key={i}
                  custom={i}
                  variants={socialVariants}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={item.label}
                  className="text-dark hover:text-primary transform hover:scale-125 transition-all 
                           duration-300 p-2 rounded-full hover:bg-gray-100 relative group"
                >
                  <item.Icon size={26} />
                  <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100
                                 transition-opacity text-xs bg-dark text-white px-2 py-1 rounded whitespace-nowrap">
                    {item.label}
                  </span>
                </motion.a>
              ))}
            </motion.div>
            
            {/* Decorative line under social icons */}
            <motion.div 
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: '200px', opacity: 1 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="h-0.5 bg-gradient-to-r from-transparent via-gray-300 to-transparent mx-auto mt-8"
            />
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center pt-1"
        >
          <motion.div 
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-3 bg-primary rounded-full"
          />
        </motion.div>
      </motion.div>
    </div>
  );
}