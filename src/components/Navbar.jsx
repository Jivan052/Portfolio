import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes, FaExternalLinkAlt } from 'react-icons/fa';
import { FaLaptopCode, FaNewspaper } from "react-icons/fa6";
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [blogHighlighted, setBlogHighlighted] = useState(false);
  
  // Check if page is scrolled for navbar styling
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  // Periodically highlight the blog link
  useEffect(() => {
    const interval = setInterval(() => {
      setBlogHighlighted(true);
      setTimeout(() => setBlogHighlighted(false), 2000);
    }, 10000);
    
    return () => clearInterval(interval);
  }, []);

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

  // Blog item with special effects
  const blogItem = { 
    name: 'My Blogs', 
    href: 'https://thinkerwithme.blogspot.com/',
    isExternal: true,
    isNew: true
  };

  return (
    <nav className={`fixed w-full transition-all duration-300 z-50 ${
      isScrolled ? 'bg-white shadow-md' : 'bg-white/95'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="text-2xl font-bold text-gray-800">
              <span><FaLaptopCode className="inline-block text-5xl text-primary mr-2"/></span>Jivan.
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-7">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
              >
                {item.name}
              </a>
            ))}
            
            {/* Blog Link with NEW Badge */}
            <div className="relative">
              <motion.a
                href={blogItem.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`relative flex items-center gap-1 px-3 py-2 rounded-md text-sm font-medium group ${
                  blogHighlighted 
                    ? 'text-white bg-gradient-to-r from-blue-500 to-primary shadow-md' 
                    : 'text-primary bg-blue-50 hover:bg-blue-100'
                } transition-all duration-300`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
              >
                <FaNewspaper className={`${blogHighlighted ? 'animate-bounce' : ''}`} />
                <span>{blogItem.name}</span>
                
                {/* Glow effect when highlighted */}
                {blogHighlighted && (
                  <motion.div 
                    className="absolute inset-0 rounded-md -z-10"
                    initial={{ boxShadow: "0 0 0 0 rgba(59, 130, 246, 0)" }}
                    animate={{ 
                      boxShadow: [
                        "0 0 0 0 rgba(59, 130, 246, 0.4)",
                        "0 0 0 8px rgba(59, 130, 246, 0)"
                      ]
                    }}
                    transition={{ 
                      repeat: 3,
                      duration: 1.5
                    }}
                  />
                )}
                
                {/* NEW Badge */}
                <motion.div 
                  className="absolute -top-1 -right-1"
                  animate={{ 
                    scale: blogHighlighted ? [1, 1.2, 1] : [1, 1.1, 1] 
                  }}
                  transition={{ 
                    repeat: Infinity,
                    repeatType: "reverse",
                    duration: blogHighlighted ? 0.5 : 2
                  }}
                >
                  <motion.div 
                    className="bg-red-500 text-white text-[9px] font-bold px-1.5 py-0.5 rounded-full shadow-lg"
                    animate={{ 
                      boxShadow: blogHighlighted ? [
                        "0 0 0 0 rgba(239, 68, 68, 0.7)",
                        "0 0 0 5px rgba(239, 68, 68, 0)",
                      ] : "none"
                    }}
                    transition={{ 
                      repeat: blogHighlighted ? 3 : 0,
                      duration: 1
                    }}
                  >
                    NEW
                  </motion.div>
                </motion.div>
              </motion.a>
            </div>
          </div>

          {/* Mobile Navigation Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-primary"
            >
              {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            className="md:hidden bg-white shadow-lg"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 hover:text-primary block px-3 py-2 rounded-md text-base font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              
              {/* Mobile Blog Link with NEW Badge */}
              <div className="relative mt-2">
                <a
                  href={blogItem.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`relative flex items-center gap-2 px-3 py-2 rounded-md text-base font-medium w-full ${
                    blogHighlighted 
                      ? 'text-white bg-gradient-to-r from-blue-500 to-primary shadow-sm' 
                      : 'text-primary bg-blue-50'
                  } transition-all duration-300`}
                  onClick={() => setIsOpen(false)}
                >
                  <FaNewspaper className={`${blogHighlighted ? 'animate-bounce' : ''}`} />
                  <span>{blogItem.name}</span>
                  <FaExternalLinkAlt size={12} className="opacity-70" />
                  
                  {/* NEW Badge (Mobile) */}
                  <motion.div 
                    className="absolute right-3 top-1"
                    animate={{ 
                      scale: [1, 1.1, 1] 
                    }}
                    transition={{ 
                      repeat: Infinity,
                      duration: 2
                    }}
                  >
                    <motion.div 
                      className="bg-red-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full shadow-lg"
                      animate={{ 
                        boxShadow: blogHighlighted ? [
                          "0 0 0 0 rgba(255, 255, 255, 0.7)",
                          "0 0 0 4px rgba(255, 255, 255, 0)",
                        ] : "none"
                      }}
                      transition={{ 
                        repeat: blogHighlighted ? 3 : 0,
                        duration: 1
                      }}
                    >
                      NEW
                    </motion.div>
                  </motion.div>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}