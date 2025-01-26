import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import AnimatedSection from './AnimatedSection';
import PulsingButton from './PulsingButton';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log(formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <h2 className="text-3xl font-bold text-center mb-12">Contact Me</h2>
        </AnimatedSection>
        
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <AnimatedSection delay={0.2}>
            <h3 className="text-xl font-semibold mb-6">Get in Touch</h3>
            <div className="space-y-6">
              <motion.div
                whileHover={{ x: 5 }}
                className="flex items-center"
              >
                <FaEnvelope className="text-primary w-6 h-6 mr-4" />
                <div>
                  <p className="text-gray-600">Email</p>
                  <a href="mailto:john@example.com" className="text-primary">
                    jamadarjivan01@gmail.com
                  </a>
                </div>
              </motion.div>
              <motion.div
                whileHover={{ x: 5 }}
                className="flex items-center"
              >
                <FaPhone className="text-primary w-6 h-6 mr-4" />
                <div>
                  <p className="text-gray-600">Phone</p>
                  <a href="tel:+1234567890" className="text-primary">
                    +91 1234567890
                  </a>
                </div>
              </motion.div>
              <motion.div
                whileHover={{ x: 5 }}
                className="flex items-center"
              >
                <FaMapMarkerAlt className="text-primary w-6 h-6 mr-4" />
                <div>
                  <p className="text-gray-600">Location</p>
                  <p className="text-gray-900">Whitefield, Bengaluru</p>
                </div>
              </motion.div>
            </div>
          </AnimatedSection>

          {/* Contact Form */}
          <AnimatedSection delay={0.4}>
            <form onSubmit={handleSubmit} className="space-y-6">
              <motion.div
                whileHover={{ y: -2 }}
                whileTap={{ y: 0 }}
              >
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
                />
              </motion.div>
              <motion.div
                whileHover={{ y: -2 }}
                whileTap={{ y: 0 }}
              >
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
                />
              </motion.div>
              <motion.div
                whileHover={{ y: -2 }}
                whileTap={{ y: 0 }}
              >
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
                />
              </motion.div>
              <div className=" text-center w-full px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-secondary transition-colors ">
                Send Message
              </div>
            </form>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}