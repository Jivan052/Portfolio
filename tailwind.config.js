/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#6366f1', // Indigo
        secondary: '#4f46e5', // Darker indigo
        accent: '#f43f5e', // Rose
        dark: '#1f2937',
        light: '#f8fafc',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },

  extend: {
    animation: {
      'fadeIn': 'fadeIn 0.5s ease-in-out',
    },
    keyframes: {
      fadeIn: {
        '0%': { opacity: '0', transform: 'translateY(20px)' },
        '100%': { opacity: '1', transform: 'translateY(0)' },
      },
    },
  },
  
  plugins: [],
}