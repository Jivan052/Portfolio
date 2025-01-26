import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { FaHackerrank } from "react-icons/fa6";
import { SiKaggle } from "react-icons/si";
import { useState, useEffect } from 'react';

const socials = [
  { Icon: FaGithub, url: "https://github.com/Jivan052" },
  { Icon: FaLinkedin, url: "https://www.linkedin.com/in/jivan-jamdar/" },
  { Icon: FaHackerrank, url: "https://www.hackerrank.com/profile/Jivan01" },
  { Icon: SiKaggle, url: "https://www.kaggle.com/jivan1234" },
];

const socialVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: i => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: i * 0.1,
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
    }, 3000); // Change every 2 seconds

    return () => clearInterval(interval);
  }, []);


  return (
    <div className="min-h-screen flex items-center justify-center relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
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
                className="rounded-full shadow-lg relative z-10"
              />
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
            </div>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-4xl sm:text-5xl font-bold text-dark mb-4"
          >
            Jivan Jamdar
          </motion.h1>

          <motion.div
            key={titleIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="h-9" 
          >
            <h2 className="text-xl sm:text-2xl text-primary font-bold ">
              {titles[titleIndex]}
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-lg text-gray-700 max-w-2xl mx-auto mb-8"
          >
            Passionate about creating elegant solutions to complex problems. 
            Specializing in modern web technologies and user-centric product design.
          </motion.p>
          <motion.div
            initial="hidden"
            animate="visible"
            className="flex justify-center space-x-6"
          >

          {socials.map((item, i) => (
        <motion.a
          key={i}
          custom={i}
          variants={socialVariants}
          href={item.url}
          className="text-dark hover:text-primary transform hover:scale-110 transition-transform"
        >
          <item.Icon size={24} />
        </motion.a>
      ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}