import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaDownload, FaTimes, FaAward, FaTrophy, FaGamepad, 
         FaLinkedin, FaFileAlt, FaGithub, FaLaptopCode, FaDesktop, FaMobile } from 'react-icons/fa';

const achievementTypes = [
  {
    id: 'technical',
    icon: <FaLaptopCode className="text-blue-500" />,
    title: 'Technical Expertise',
    description: 'Find all the languages and frameworks I\'ve mastered',
    points: 30
  },
  {
    id: 'projects',
    icon: <FaAward className="text-yellow-500" />,
    title: 'Projects Completed',
    description: 'Discover the range of projects in my portfolio',
    points: 25
  },
  {
    id: 'experience',
    icon: <FaTrophy className="text-green-500" />,
    title: 'Work Experience',
    description: 'Explore my professional journey and accomplishments',
    points: 35
  }
];

export default function ResumeDownload({ floatingButton = false }) {
  const [showPopup, setShowPopup] = useState(false);
  const [gameStarted, setGameStarted] = useState(false);
  const [score, setScore] = useState(0);
  const [achievements, setAchievements] = useState([]);
  const [rewardEarned, setRewardEarned] = useState(false);
  const [lastAchievement, setLastAchievement] = useState(null);
  const [confettiActive, setConfettiActive] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Check if device is mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile(); // Check on initial load
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    // Check if score is enough to earn the resume download
    if (score >= 75 && !rewardEarned) {
      setRewardEarned(true);
      setConfettiActive(true);
      
      // Optional: add confetti effect using canvas-confetti library
      if (typeof window !== 'undefined') {
        try {
          const confetti = require('canvas-confetti');
          confetti({
            particleCount: 100,
            spread: 70,
            origin: { y: 0.6 }
          });
        } catch (e) {
          console.log('Confetti not available');
        }
      }
      
      setTimeout(() => setConfettiActive(false), 3000);
    }
  }, [score, rewardEarned]);

  // Control body scroll when popup is open
  useEffect(() => {
    if (showPopup) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [showPopup]);

  const unlockAchievement = useCallback((achievement) => {
    if (!achievements.find(a => a.id === achievement.id)) {
      setAchievements(prev => [...prev, achievement]);
      setScore(prevScore => prevScore + achievement.points);
      setLastAchievement(achievement);
      
      // Show achievement notification
      setTimeout(() => setLastAchievement(null), 3000);
    }
  }, [achievements]);
  
  const startGame = () => {
    setGameStarted(true);
    setScore(0);
    setAchievements([]);
    setRewardEarned(false);
  };

  const resetGame = () => {
    setGameStarted(false);
    setScore(0);
    setAchievements([]);
    setRewardEarned(false);
  };

  // Render different button styles based on whether it's floating or inline
  const renderButton = () => {
    if (floatingButton) {
      return (
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setShowPopup(true)}
          className="bg-primary text-white rounded-full shadow-xl p-4 hover:bg-primary/90 transition-all"
          aria-label="Download Resume"
        >
          <FaFileAlt size={20} />
        </motion.button>
      );
    }
    
    return (
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setShowPopup(true)}
        className="bg-primary text-white font-medium py-3 px-6 rounded-full inline-flex items-center gap-2 shadow-md hover:shadow-lg transition-all"
      >
        <FaFileAlt />
        <span>Download My Resume</span>
      </motion.button>
    );
  };

  return (
    <>
      {renderButton()}

      <AnimatePresence>
        {showPopup && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-y-auto"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden my-2 mx-auto"
              style={{ maxHeight: 'calc(100vh - 40px)' }}
            >
              {/* Popup Header */}
              <div className="bg-gradient-to-r from-primary to-secondary p-4 sm:p-5 text-white flex justify-between items-center sticky top-0 z-10">
                <h3 className="text-lg sm:text-xl font-bold">Resume Quest</h3>
                <button 
                  onClick={() => setShowPopup(false)}
                  className="text-white hover:text-gray-200 transition-colors"
                >
                  <FaTimes size={20} />
                </button>
              </div>

              <div className="p-4 sm:p-6 overflow-y-auto" style={{ maxHeight: 'calc(100vh - 120px)' }}>
                {!gameStarted ? (
                  /* Game Introduction Screen */
                  <div className="text-center">
                    <FaGamepad className="text-5xl sm:text-6xl mx-auto text-primary my-4" />
                    <h3 className="text-xl sm:text-2xl font-bold mb-3">Unlock My Resume</h3>
                    <p className="text-gray-600 mb-6">
                      {isMobile ? (
                        <>
                          <FaMobile className="inline-block mr-2 text-primary" />
                          Tap each achievement card to unlock your rewards and access my resume.
                        </>
                      ) : (
                        <>
                          <FaDesktop className="inline-block mr-2 text-primary" />
                          Explore my skills and experience to earn points and unlock my resume.
                        </>
                      )}
                      <br />
                      Collect at least 75 points to access the download!
                    </p>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={startGame}
                      className="bg-primary text-white font-bold py-3 px-8 rounded-lg shadow-md"
                    >
                      Start Quest
                    </motion.button>
                  </div>
                ) : (
                  /* Game Active Screen */
                  <div>
                    {/* Score Display */}
                    <div className="flex justify-between items-center mb-6">
                      <div className="text-base sm:text-lg font-bold">
                        Score: <span className="text-primary">{score}/100</span>
                      </div>
                      <div className="bg-gray-200 h-2 sm:h-3 rounded-full flex-1 mx-2 sm:mx-4">
                        <motion.div 
                          animate={{ width: `${score}%` }}
                          className="h-full bg-primary rounded-full"
                        />
                      </div>
                    </div>

                    {/* Achievement Cards */}
                    <div className="space-y-3 sm:space-y-4 mb-6">
                      {achievementTypes.map((achievement) => (
                        <motion.div
                          key={achievement.id}
                          whileHover={{ scale: isMobile ? 1 : 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          onClick={() => unlockAchievement(achievement)}
                          className={`p-3 sm:p-4 rounded-lg border-2 cursor-pointer transition-all ${
                            achievements.find(a => a.id === achievement.id)
                              ? "border-green-500 bg-green-50"
                              : "border-gray-200 hover:border-primary/50"
                          }`}
                        >
                          <div className="flex items-center">
                            <div className="p-2 sm:p-3 rounded-full bg-gray-100 mr-3 sm:mr-4 flex-shrink-0">
                              {achievement.icon}
                            </div>
                            <div className="flex-1 min-w-0">
                              <h4 className="text-base sm:text-lg font-bold truncate">{achievement.title}</h4>
                              <p className="text-xs sm:text-sm text-gray-600 line-clamp-2">{achievement.description}</p>
                            </div>
                            <div className="bg-primary/10 text-primary font-bold px-2 py-1 rounded-lg text-xs sm:text-sm flex-shrink-0 ml-2">
                              +{achievement.points}
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                    
                    {/* Resume Download Button or Locked Message */}
                    {rewardEarned ? (
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center"
                      >
                        <div className={`p-3 sm:p-4 mb-4 rounded-lg ${confettiActive ? "bg-green-100" : "bg-green-50"}`}>
                          <h4 className="text-green-600 font-bold text-lg mb-2">
                            Congratulations! 🎉
                          </h4>
                          <p className="text-gray-600">
                            You've earned access to my professional resume.
                          </p>
                        </div>
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={() => window.open('https://drive.google.com/file/d/1mGVWkht1CV-XASDCJkpdvzK5fMpL681Q/view?usp=sharing', '_blank')}
                          className="bg-primary text-white font-bold py-2 sm:py-3 px-4 sm:px-6 rounded-lg shadow-md inline-flex items-center gap-2"
                        >
                          <FaDownload />
                          See my Resume
                        </motion.button>
                        <div className="mt-4">
                          <button
                            onClick={resetGame}
                            className="text-gray-500 underline text-xs sm:text-sm"
                          >
                            Reset and Try Again
                          </button>
                        </div>
                      </motion.div>
                    ) : (
                      <div className="text-center p-3 sm:p-4 bg-gray-50 rounded-lg">
                        <FaFileAlt className="text-2xl sm:text-3xl text-gray-400 mx-auto mb-2" />
                        <p className="text-gray-600 text-sm sm:text-base">
                          Keep exploring to unlock my resume!
                        </p>
                        <p className="text-xs sm:text-sm text-gray-500 mt-2">
                          Need <strong>{75 - score}</strong> more points
                        </p>
                      </div>
                    )}
                  </div>
                )}
              </div>
              
              {/* Social links */}
              <div className="border-t border-gray-200 p-3 sm:p-4 flex justify-center space-x-4 sticky bottom-0 bg-white">
                <a 
                  href="https://github.com/Jivan052" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-primary transition-colors"
                >
                  <FaGithub size={isMobile ? 18 : 20} />
                </a>
                <a 
                  href="https://www.linkedin.com/in/jivan-jamdar/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-primary transition-colors"
                >
                  <FaLinkedin size={isMobile ? 18 : 20} />
                </a>
              </div>
            </motion.div>

            {/* Achievement Notification */}
            <AnimatePresence>
              {lastAchievement && (
                <motion.div
                  initial={{ opacity: 0, y: 50, x: "-50%" }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -50 }}
                  className="fixed bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 bg-white rounded-lg shadow-xl p-3 sm:p-4 flex items-center max-w-[calc(100vw-32px)]"
                >
                  <div className="p-1.5 sm:p-2 rounded-full bg-green-100 mr-2 sm:mr-3 flex-shrink-0">
                    {lastAchievement.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-bold text-sm sm:text-base">Achievement Unlocked!</p>
                    <p className="text-xs sm:text-sm text-gray-600 truncate">{lastAchievement.title}</p>
                  </div>
                  <div className="ml-2 sm:ml-4 bg-green-100 text-green-600 font-bold px-2 py-1 rounded-lg text-xs sm:text-sm flex-shrink-0">
                    +{lastAchievement.points}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}