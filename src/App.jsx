import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Contact from './components/Contact';
import BubbleBackground from './components/BubbleBackground';
import Education from './components/Education';

function App() {
  return (
    <div className="min-h-screen bg-light">
      <BubbleBackground />
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <About />
        <Education /> 
        <Projects />
        <Skills />
        <Experience />
        <Contact />
      </main>
      <footer className="bg-dark text-white py-8 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p>&copy; {new Date().getFullYear()} Jivan. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;