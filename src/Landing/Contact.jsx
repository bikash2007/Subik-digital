import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faEnvelope,
  faPhone,
  faLocationDot,
  faPaperPlane,
  faCheck,
  faSpinner,
  faClock,
  faGlobe,
  faExclamationTriangle
} from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp, faInstagram, faLinkedin, faFacebook } from '@fortawesome/free-brands-svg-icons';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: '',
    budget: '',
    timeline: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' | 'error' | null

  const projectTypes = [
    'Branding & Visual Identity',
    'Website Design & Development',
    'UI/UX Design',
    'Social Media Management',
    'Graphics Design',
    'Motion Graphics & Video',
    'Digital Marketing',
    'Other'
  ];

  const budgetRanges = [
    'Below Rs 10,000',
    'Rs 10,000 - Rs 25,000',
    'Rs 25,000 - Rs 50,000',
    'Rs 50,000 - Rs 100,000',
    'Above Rs 100,000'
  ];

  const timelines = [
    'ASAP (Rush)',
    '1-2 Weeks',
    '2-4 Weeks',
    '1-2 Months',
    'Flexible'
  ];

  const contactInfo = [
    {
      icon: faEnvelope,
      title: 'Email Us',
      value: 'subik.info@gmail.com',
      href: 'mailto:subik.info@gmail.com',
      gradient: 'from-cyan-400 to-blue-500'
    },
    {
      icon: faPhone,
      title: 'Call Us',
      value: '+977 9700218621',
      href: 'tel:+9779700218621',
      gradient: 'from-emerald-400 to-teal-500'
    },
    {
      icon: faLocationDot,
      title: 'Location',
      value: 'Kathmandu, Nepal',
      href: '#',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      icon: faClock,
      title: 'Working Hours',
      value: 'Sun - Fri: 10AM - 6PM',
      href: '#',
      gradient: 'from-amber-400 to-orange-500'
    }
  ];

  const socialLinks = [
    { icon: faWhatsapp, href: 'https://wa.me/9779700218621', label: 'WhatsApp', color: 'hover:bg-green-500' },
    { icon: faInstagram, href: 'https://www.instagram.com/subik.info/', label: 'Instagram', color: 'hover:bg-pink-500' },
    { icon: faLinkedin, href: 'https://www.linkedin.com/company/103771862', label: 'LinkedIn', color: 'hover:bg-blue-600' },
    { icon: faFacebook, href: 'https://www.facebook.com/profile.php?id=61562979841228', label: 'Facebook', color: 'hover:bg-blue-500' },
  ];

  // Google Apps Script Web App URL - Replace with your deployed script URL
  const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbz7ofMiEQFZstUSQEaUjWvYNmlEdhoNuCo8LN3eLkom4TJpizx7XIfjtWfKftVdkTYJ_Q/exec';

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Prepare data for Google Sheets
      const submitData = {
        ...formData,
        timestamp: new Date().toISOString(),
      };

      // Send to Google Apps Script
      const response = await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors', // Required for Google Apps Script
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(submitData),
      });

      // Since no-cors doesn't return response, we assume success
      setSubmitStatus('success');
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        projectType: '',
        budget: '',
        timeline: '',
        message: ''
      });

      // Reset status after 5 seconds
      setTimeout(() => setSubmitStatus(null), 5000);

    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus(null), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="relative py-24 lg:py-32 overflow-hidden bg-dark-primary">
      {/* Background */}
      <div className="absolute inset-0 bg-mesh opacity-40" />
      <div className="absolute inset-0 bg-grid opacity-20" />
      
      {/* Floating Orbs */}
      <motion.div 
        className="absolute top-1/4 -right-32 w-96 h-96 bg-neon-purple/15 rounded-full blur-[120px]"
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 10, repeat: Infinity }}
      />
      <motion.div 
        className="absolute bottom-1/4 -left-32 w-96 h-96 bg-neon-cyan/15 rounded-full blur-[120px]"
        animate={{ scale: [1.1, 1, 1.1] }}
        transition={{ duration: 12, repeat: Infinity }}
      />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full glass text-neon-cyan text-sm font-medium mb-4">
            Get In Touch
          </span>
          <h2 className="font-space text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Let's Create <span className="text-gradient">Something Amazing</span>
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Have a project in mind? We'd love to hear about it. Drop us a message and 
            let's start the conversation.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 space-y-6"
          >
            {/* Info Cards */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-1 gap-4">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={info.title}
                  href={info.href}
                  className="glass-card p-6 group transition-all duration-300 hover:border-white/20"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${info.gradient} flex items-center justify-center`}>
                      <FontAwesomeIcon icon={info.icon} className="text-white text-lg" />
                    </div>
                    <div>
                      <div className="text-white/50 text-sm">{info.title}</div>
                      <div className="text-white font-medium group-hover:text-neon-cyan transition-colors">
                        {info.value}
                      </div>
                    </div>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-card p-6"
            >
              <h4 className="font-space font-semibold text-white mb-4">Connect With Us</h4>
              <div className="flex gap-3">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className={`w-11 h-11 rounded-xl glass flex items-center justify-center text-white/60 transition-all duration-300 ${social.color} hover:text-white`}
                    whileHover={{ y: -3, scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FontAwesomeIcon icon={social.icon} className="text-lg" />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Map Preview */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-card p-4 h-48 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-dark-secondary to-dark-tertiary flex items-center justify-center">
                <div className="text-center">
                  <FontAwesomeIcon icon={faGlobe} className="text-4xl text-neon-cyan/50 mb-2" />
                  <p className="text-white/40 text-sm">Kathmandu, Nepal</p>
                  <p className="text-white/30 text-xs">Serving clients worldwide</p>
                </div>
              </div>
              <div className="absolute inset-0 bg-grid opacity-30" />
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3"
          >
            <div className="glass-card p-8 md:p-10">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name & Email Row */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-white/70 text-sm mb-2">Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      required
                      className="input-glass"
                    />
                  </div>
                  <div>
                    <label className="block text-white/70 text-sm mb-2">Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      required
                      className="input-glass"
                    />
                  </div>
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-white/70 text-sm mb-2">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+977 9700218621"
                    className="input-glass"
                  />
                </div>

                {/* Dropdowns Row */}
                <div className="grid md:grid-cols-3 gap-6">
                  <div>
                    <label className="block text-white/70 text-sm mb-2">Project Type</label>
                    <select
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleChange}
                      className="input-glass appearance-none cursor-pointer"
                    >
                      <option value="" className="bg-dark-tertiary">Select type</option>
                      {projectTypes.map(type => (
                        <option key={type} value={type} className="bg-dark-tertiary">{type}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-white/70 text-sm mb-2">Budget Range</label>
                    <select
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      className="input-glass appearance-none cursor-pointer"
                    >
                      <option value="" className="bg-dark-tertiary">Select budget</option>
                      {budgetRanges.map(range => (
                        <option key={range} value={range} className="bg-dark-tertiary">{range}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-white/70 text-sm mb-2">Timeline</label>
                    <select
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleChange}
                      className="input-glass appearance-none cursor-pointer"
                    >
                      <option value="" className="bg-dark-tertiary">Select timeline</option>
                      {timelines.map(time => (
                        <option key={time} value={time} className="bg-dark-tertiary">{time}</option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-white/70 text-sm mb-2">Project Details *</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your project, goals, and any specific requirements..."
                    required
                    rows={5}
                    className="input-glass resize-none"
                  />
                </div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-4 rounded-xl font-space font-semibold text-lg transition-all duration-300 flex items-center justify-center gap-2 ${
                    submitStatus === 'success' 
                      ? 'bg-emerald-500 text-white' 
                      : submitStatus === 'error'
                      ? 'bg-red-500 text-white'
                      : 'btn-neon-filled'
                  }`}
                  whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                  whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                >
                  {isSubmitting ? (
                    <>
                      <FontAwesomeIcon icon={faSpinner} className="animate-spin" />
                      Sending...
                    </>
                  ) : submitStatus === 'success' ? (
                    <>
                      <FontAwesomeIcon icon={faCheck} />
                      Message Sent Successfully!
                    </>
                  ) : submitStatus === 'error' ? (
                    <>
                      <FontAwesomeIcon icon={faExclamationTriangle} />
                      Failed - Please Try Again
                    </>
                  ) : (
                    <>
                      <FontAwesomeIcon icon={faPaperPlane} />
                      Send Message
                    </>
                  )}
                </motion.button>
              </form>

              {/* Privacy Note */}
              <p className="text-white/40 text-xs text-center mt-6">
                By submitting this form, you agree to our Privacy Policy. We'll never share your information.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
