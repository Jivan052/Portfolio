import { useEffect, useRef } from 'react';
import { color, motion } from 'framer-motion';

export default function About() {
  // Animation variables
  const typingRef = useRef(null);
  const blinkRef = useRef(null);
  
  // Set up the typing animation effect
  useEffect(() => {
    if (typingRef.current && blinkRef.current) {
      // Add a blinking cursor effect
      const blinkInterval = setInterval(() => {
        if (blinkRef.current) {
          blinkRef.current.style.opacity = blinkRef.current.style.opacity === '0' ? '1' : '0';
        }
      }, 530);
      
      return () => clearInterval(blinkInterval);
    }
  }, []);

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      {/* Subtle background elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-blue-50 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
      <div className="absolute bottom-10 left-10 w-72 h-72 bg-purple-50 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.h2 
          className="text-4xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          About Me
        </motion.h2>
        
        <div className="max-w-3xl mx-auto">
          {/* Terminal-style container */}
          <motion.div 
            className="bg-gray-900 rounded-lg shadow-xl overflow-hidden mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* Terminal header */}
            <div className="bg-gray-800 px-4 py-2 flex items-center">
              <div className="flex space-x-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <div className="mx-auto text-gray-400 text-sm font-mono">jivan@portfolio ~ /about-me</div>
            </div>
            
            {/* Terminal content */}
            <div className="p-5 font-mono text-sm text-green-400 space-y-4">
              <div className="flex items-start">
                <span className="text-yellow-400 mr-2">$</span>
                <span className="typing-effect">cat about.md</span>
              </div>
              
              <div className="ml-4 text-blue-300 font-bold">// Just short intro...</div>
              
              <div className="ml-4 text-gray-300 leading-relaxed paragraph-typing-effect">
              Hey there! <br>
              </br>I’m a frontend developer, open-source enthusiast, and an AI & ML explorer who loves building real-time applications that actually solve problems. 
              I’m all about clean code, intuitive user experiences, and making tech both scalable and fun.
              </div>
              
              <div className="ml-4 text-blue-300 font-bold"></div>
              
              <div className="ml-4 text-gray-300 leading-relaxed paragraph-typing-effect-2">
              Diving deep into <b style={{color:'yellow'}}>Web3</b> and <b style={{color:'yellow'}}>DeFi</b>, experimenting with scalable solutions, and competing in hackathons. 
              Oh, and I have a knack for cool conversations, effective teamwork, and dropping funny code snippets along the way!
              </div>
              
              <div className="flex items-start">
                <span className="text-yellow-400 mr-2">$</span>
                <span ref={typingRef} className="typing-cursor"></span>
                <span ref={blinkRef} className="h-4 w-2 bg-blue-400 ml-0.5"></span>
              </div>
            </div>
          </motion.div>
          
          {/* Quote section */}
          <motion.div 
            className="text-center mt-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 1.2, duration: 0.8 }}
          >
            <p className="text-gray-500 italic">
              Coding scalable tech, cracking open-source mysteries, and dropping funny code snippets—because life’s too short for boring bugs🤷‍♂️!
            </p>
            <br></br>
            <br></br>
            <p className="text-gray-500 italic">
              <b>COOL PEOPLES, COOL THINGS - Creates COOL product!</b>
            </p>
          </motion.div>
        </div>
      </div>
      
      {/* CSS for animations */}
      <style jsx>{`
        .typing-effect {
          overflow: hidden;
          white-space: nowrap;
          border-right: 2px solid transparent;
          width: fit-content;
          animation: typing 1s steps(10, end), blink 1s step-end infinite alternate;
        }
        
        .paragraph-typing-effect {
          overflow: hidden;
          animation: paragraph-reveal 2s ease-out forwards;
          max-height: 0;
        }
        
        .paragraph-typing-effect-2 {
          overflow: hidden;
          animation: paragraph-reveal 2s ease-out 0.5s forwards;
          max-height: 0;
        }
        
        .typing-cursor {
          white-space: nowrap;
        }
        
        @keyframes typing {
          from { width: 0 }
          to { width: 100% }
        }
        
        @keyframes blink {
          50% { border-color: rgba(59, 130, 246, 0.7); }
        }
        
        @keyframes paragraph-reveal {
          from { 
            max-height: 0;
            opacity: 0;
          }
          to { 
            max-height: 300px;
            opacity: 1;
          }
        }
      `}</style>
    </section>
  );
}