import { motion } from 'framer-motion';
import { useState } from 'react';
import { Send, Mail, Phone, MapPin, Linkedin, Github, Dribbble } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Add your form submission logic here
    alert('Message sent! (This is a demo)');
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const socialLinks = [
    { icon: <Linkedin size={24} />, label: 'LinkedIn', url: 'https://linkedin.com/in/yourname' },
    { icon: <Github size={24} />, label: 'GitHub', url: 'https://github.com/narayan439' },
    { icon: <Mail size={24} />, label: 'Email', url: 'mailto:narayansahu2888@email.com' }
  ];

  const contactInfo = [
    { icon: <Mail size={20} />, text: 'narayansahu2888@email.com' },
    { icon: <Phone size={20} />, text: '+91-6371349473' },
    { icon: <MapPin size={20} />, text: 'India' }
  ];

  return (
    <section id="contact" style={{ 
      background: 'linear-gradient(135deg, rgba(15, 23, 42, 0.8), rgba(30, 41, 59, 0.8))',
      borderTop: '1px solid rgba(99, 102, 241, 0.2)',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Decorative gradient */}
      <div style={{
        position: 'absolute',
        top: '-100px',
        right: '-200px',
        width: '500px',
        height: '500px',
        background: 'radial-gradient(circle, rgba(129, 140, 248, 0.1) 0%, transparent 70%)',
        borderRadius: '50%',
        pointerEvents: 'none'
      }} />
      
      <div className="container" style={{ position: 'relative', zIndex: 1, padding: 'clamp(2rem, 5vw, 5rem) clamp(1rem, 3vw, 2rem)' }}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: '3rem' }}
        >
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
            style={{ 
              background: 'linear-gradient(135deg, #818cf8, #f472b6)',
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
              color: 'transparent',
              marginBottom: '1rem',
              fontSize: 'clamp(2rem, 5vw, 3rem)'
            }}
          >
            Let's Work Together
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{ 
              maxWidth: '600px', 
              margin: '0 auto',
              color: '#cbd5e1',
            fontSize: 'clamp(0.95rem, 2vw, 1.05rem)'
          }}>
            Have a project in mind? Let's discuss how we can create 
            something amazing together.
          </motion.p>
        </motion.div>

        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(clamp(280px, 85vw, 350px), 1fr))', 
          gap: 'clamp(1.5rem, 4vw, 3rem)',
          maxWidth: '1100px',
          margin: '0 auto'
        }}>
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            style={{
              background: 'rgba(30, 41, 59, 0.6)',
              border: '1px solid rgba(99, 102, 241, 0.2)',
              borderRadius: '12px',
              padding: 'clamp(1.25rem, 3vw, 2rem)',
              backdropFilter: 'blur(10px)'
            }}
          >
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.4 }}
              >
                <label htmlFor="name" style={{ 
                  display: 'block', 
                  marginBottom: '0.5rem', 
                  fontWeight: '500',
                  color: '#f1f5f9',
                  fontSize: 'clamp(0.9rem, 1.8vw, 1rem)'
                }}>
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  style={{
                    width: '100%',
                    padding: '0.75rem 1rem',
                    border: '1px solid rgba(99, 102, 241, 0.3)',
                    borderRadius: '8px',
                    fontSize: 'clamp(0.9rem, 2vw, 1rem)',
                    background: 'rgba(15, 23, 42, 0.5)',
                    color: '#f1f5f9',
                    transition: 'border-color 0.3s ease, box-shadow 0.3s ease'
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = '#818cf8';
                    e.target.style.boxShadow = '0 0 10px rgba(129, 140, 248, 0.3)';
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = 'rgba(99, 102, 241, 0.3)';
                    e.target.style.boxShadow = 'none';
                  }}
                  placeholder="Your name"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.4, delay: 0.05 }}
              >
                <label htmlFor="email" style={{ 
                  display: 'block', 
                  marginBottom: '0.5rem', 
                  fontWeight: '500',
                  color: '#f1f5f9',
                  fontSize: 'clamp(0.9rem, 1.8vw, 1rem)'
                }}>
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  style={{
                    width: '100%',
                    padding: '0.75rem 1rem',
                    border: '1px solid rgba(99, 102, 241, 0.3)',
                    borderRadius: '8px',
                    fontSize: 'clamp(0.9rem, 2vw, 1rem)',
                    background: 'rgba(15, 23, 42, 0.5)',
                    color: '#f1f5f9',
                    transition: 'border-color 0.3s ease, box-shadow 0.3s ease'
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = '#818cf8';
                    e.target.style.boxShadow = '0 0 10px rgba(129, 140, 248, 0.3)';
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = 'rgba(99, 102, 241, 0.3)';
                    e.target.style.boxShadow = 'none';
                  }}
                  placeholder="your.email@example.com"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.4, delay: 0.1 }}
              >
                <label htmlFor="message" style={{ 
                  display: 'block', 
                  marginBottom: '0.5rem', 
                  fontWeight: '500',
                  color: '#f1f5f9',
                  fontSize: 'clamp(0.9rem, 1.8vw, 1rem)'
                }}>
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  style={{
                    width: '100%',
                    padding: '0.75rem 1rem',
                    border: '1px solid rgba(99, 102, 241, 0.3)',
                    borderRadius: '8px',
                    fontSize: 'clamp(0.9rem, 2vw, 1rem)',
                    resize: 'vertical',
                    minHeight: '150px',
                    transition: 'border-color 0.3s ease, box-shadow 0.3s ease',
                    background: 'rgba(15, 23, 42, 0.5)',
                    color: '#f1f5f9'
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = '#818cf8';
                    e.target.style.boxShadow = '0 0 10px rgba(129, 140, 248, 0.3)';
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = 'rgba(99, 102, 241, 0.3)';
                    e.target.style.boxShadow = 'none';
                  }}
                  placeholder="Tell me about your project..."
                />
              </motion.div>

              <motion.button
                type="submit"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.4, delay: 0.15 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                style={{
                  padding: 'clamp(0.75rem, 2vw, 1rem) clamp(1.5rem, 3vw, 2rem)',
                  background: 'linear-gradient(135deg, #818cf8, #f472b6)',
                  color: 'white',
                  border: 'none',
                  borderRadius: '8px',
                  fontSize: 'clamp(0.9rem, 1.8vw, 1rem)',
                  fontWeight: '600',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.5rem',
                  marginTop: '1rem'
                }}
              >
                <Send size={20} />
                Send Message
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}
          >
            <div>
              <motion.h3 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.5, delay: 0.1 }}
                style={{ marginBottom: '1.5rem', color: '#f1f5f9', fontSize: 'clamp(1.1rem, 2.5vw, 1.3rem)' }}>
                Get in Touch
              </motion.h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: '-80px' }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ scale: 1.02, x: 5 }}
                    style={{ 
                      display: 'flex', 
                      alignItems: 'center', 
                      gap: '1rem',
                      padding: 'clamp(0.75rem, 2vw, 1rem)',
                      background: 'rgba(30, 41, 59, 0.4)',
                      border: '1px solid rgba(99, 102, 241, 0.15)',
                      borderRadius: '8px',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease'
                    }}
                  >
                    <motion.div 
                      whileHover={{ scale: 1.2 }}
                      style={{ 
                        display: 'flex', 
                        alignItems: 'center', 
                        justifyContent: 'center',
                        width: '40px',
                        height: '40px',
                        background: 'rgba(99, 102, 241, 0.2)',
                        borderRadius: '50%',
                        color: '#818cf8'
                      }}>
                      {info.icon}
                    </motion.div>
                    <span style={{ fontWeight: '500', color: '#f1f5f9', fontSize: 'clamp(0.9rem, 1.8vw, 1rem)' }}>{info.text}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            <div>
              <motion.h3 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.5, delay: 0.2 }}
                style={{ marginBottom: '1.5rem', color: '#f1f5f9', fontSize: 'clamp(1.1rem, 2.5vw, 1.3rem)' }}>
                Connect With Me
              </motion.h3>
              <div style={{ display: 'flex', gap: 'clamp(0.75rem, 2vw, 1rem)', flexWrap: 'wrap' }}>
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true, margin: '-80px' }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    whileHover={{ scale: 1.15, y: -8 }}
                    whileTap={{ scale: 0.9 }}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: 'clamp(45px, 10vw, 50px)',
                      height: 'clamp(45px, 10vw, 50px)',
                      background: 'rgba(99, 102, 241, 0.15)',
                      borderRadius: '50%',
                      color: '#818cf8',
                      textDecoration: 'none',
                      border: '1px solid rgba(99, 102, 241, 0.3)',
                      transition: 'all 0.3s ease',
                      cursor: 'pointer'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = 'linear-gradient(135deg, #818cf8, #f472b6)';
                      e.currentTarget.style.color = 'white';
                      e.currentTarget.style.borderColor = '#818cf8';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = 'rgba(99, 102, 241, 0.15)';
                      e.currentTarget.style.color = '#818cf8';
                      e.currentTarget.style.borderColor = 'rgba(99, 102, 241, 0.3)';
                    }}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6, delay: 0.3 }}
              whileHover={{ scale: 1.02 }}
              style={{
                padding: 'clamp(1.25rem, 3vw, 2rem)',
                background: 'linear-gradient(135deg, rgba(129, 140, 248, 0.15), rgba(244, 114, 182, 0.15))',
                border: '1px solid rgba(99, 102, 241, 0.3)',
                borderRadius: '12px',
                color: '#f1f5f9',
                marginTop: '1rem',
                cursor: 'pointer',
                transition: 'all 0.3s ease'
              }}
            >
              <motion.h4 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.5, delay: 0.4 }}
                style={{ marginBottom: '1rem', color: '#f1f5f9', fontSize: 'clamp(1rem, 2vw, 1.1rem)' }}>
                Response Time
              </motion.h4>
              <motion.p 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.5, delay: 0.45 }}
                style={{ opacity: 0.9, marginBottom: '0.5rem', color: '#cbd5e1', fontSize: 'clamp(0.9rem, 1.8vw, 1rem)' }}>
                I typically respond within 24 hours
              </motion.p>
              <motion.p 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.5, delay: 0.5 }}
                style={{ fontSize: 'clamp(0.85rem, 1.6vw, 0.9rem)', opacity: 0.8, color: '#cbd5e1' }}>
                Available for freelance projects and full-time opportunities
              </motion.p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;