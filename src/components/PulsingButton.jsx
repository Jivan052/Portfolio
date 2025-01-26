import { motion } from 'framer-motion';

export default function PulsingButton({ children, onClick, className = '' }) {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`relative ${className}`}
      onClick={onClick}
    >
      <motion.span
        className="absolute inset-0 rounded-md bg-primary/30"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.7, 0, 0.7],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      {children}
    </motion.button>
  );
}