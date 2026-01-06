import { motion } from 'framer-motion';
import { useState, useRef } from 'react';
import { Send, Mail, Phone, MapPin, Linkedin, Github, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const formRef = useRef();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [status, setStatus] = useState({
    loading: false,
    success: false,
    error: null
  });

  // Initialize EmailJS (do this once)
  emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY || '8N3yBOQkm5JqtQIU-');

  // EmailJS Configuration
  const emailConfig = {
    serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID || 'service_c78utze',
    templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'template_8xe9s1m',
    publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || '8N3yBOQkm5JqtQIU-'
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, success: false, error: null });

    try {
      // Validate form
      if (!formData.name || !formData.email || !formData.message) {
        throw new Error('Please fill all fields');
      }

      // EmailJS parameters for sending to your email
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        to_name: 'Narayan', // Your name
        to_email: 'narayansahu2888@email.com', // Your email
        date_time: new Date().toLocaleString(),
        reply_to: formData.email
      };

      // Send email using EmailJS
      const result = await emailjs.send(
        emailConfig.serviceId,
        emailConfig.templateId,
        templateParams,
        emailConfig.publicKey
      );

      console.log('Email sent successfully:', result);

      // Send auto-reply to user
      await sendAutoReply(formData);

      // Update status
      setStatus({ loading: false, success: true, error: null });
      setFormData({ name: '', email: '', message: '' });

      // Reset success message after 5 seconds
      setTimeout(() => {
        setStatus({ loading: false, success: false, error: null });
      }, 5000);

    } catch (error) {
      console.error('Email send failed:', error);
      setStatus({
        loading: false,
        success: false,
        error: error.text || 'Failed to send message. Please try again.'
      });
    }
  };

  // Send auto-reply email to user
  const sendAutoReply = async (userData) => {
    try {
      const autoReplyParams = {
        to_email: userData.email,
        to_name: userData.name,
        from_name: 'Narayan Sahu',
        from_email: 'narayansahu2888@email.com',
        subject: 'Thank You - Message Received',
        message: 'Thank you for reaching out! I\'ve received your message and will get back to you within 24 hours.',
        date_time: new Date().toLocaleString()
      };

      await emailjs.send(
        emailConfig.serviceId,
        import.meta.env.VITE_EMAILJS_AUTO_REPLY_TEMPLATE_ID || 'template_auto_reply',
        autoReplyParams,
        emailConfig.publicKey
      );

      console.log('Auto-reply sent successfully');
    } catch (error) {
      console.warn('Auto-reply failed (non-critical):', error);
    }
  };
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const socialLinks = [
    { icon: <Linkedin size={24} />, label: 'LinkedIn', url: 'https://www.linkedin.com/in/narayan-sahu-1752a0393?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' },
    { icon: <Github size={24} />, label: 'GitHub', url: 'https://github.com/narayan439' },
    { icon: <Mail size={24} />, label: 'Email', url: 'mailto:narayansahu2888@email.com' }
  ];

  const contactInfo = [
  { 
    icon: <Mail size={20} />, 
    text: 'narayansahu2888@gmail.com',
    link: 'mailto:narayansahu2888@gmail.com'
  },
  { 
    icon: <Phone size={20} />, 
    text: '+91 63713 49473',
    link: 'tel:+916371349473'
  },
  { 
    icon: <MapPin size={20} />, 
    text: 'Bhubaneswar, India',
  }
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
            }}
          >
            Have a project in mind? Let's discuss how we can create 
            something amazing together.
          </motion.p>
        </motion.div>

        {/* Status Messages */}
        <div style={{ 
          maxWidth: '600px', 
          margin: '0 auto 2rem',
          textAlign: 'center'
        }}>
          {status.success && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              style={{
                background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.2), rgba(16, 185, 129, 0.1))',
                border: '1px solid rgba(16, 185, 129, 0.3)',
                color: '#10b981',
                padding: '1rem 1.5rem',
                borderRadius: '12px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.75rem',
                marginBottom: '1rem'
              }}
            >
              <CheckCircle size={24} />
              <div>
                <div style={{ fontWeight: '600', fontSize: '1.1rem' }}>
                  Message Sent Successfully!
                </div>
                <div style={{ fontSize: '0.9rem', opacity: 0.9 }}>
                  I've received your message and will get back to you within 24 hours.
                </div>
              </div>
            </motion.div>
          )}

          {status.error && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              style={{
                background: 'linear-gradient(135deg, rgba(239, 68, 68, 0.2), rgba(239, 68, 68, 0.1))',
                border: '1px solid rgba(239, 68, 68, 0.3)',
                color: '#ef4444',
                padding: '1rem 1.5rem',
                borderRadius: '12px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.75rem',
                marginBottom: '1rem'
              }}
            >
              <AlertCircle size={24} />
              <div>
                <div style={{ fontWeight: '600', fontSize: '1.1rem' }}>
                  Oops! Something went wrong
                </div>
                <div style={{ fontSize: '0.9rem', opacity: 0.9 }}>
                  {status.error}
                </div>
              </div>
            </motion.div>
          )}
        </div>

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
            <form ref={formRef} onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
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
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  disabled={status.loading}
                  style={{
                    width: '100%',
                    padding: '0.75rem 1rem',
                    border: '1px solid rgba(99, 102, 241, 0.3)',
                    borderRadius: '8px',
                    fontSize: 'clamp(0.9rem, 2vw, 1rem)',
                    background: 'rgba(15, 23, 42, 0.5)',
                    color: '#f1f5f9',
                    transition: 'border-color 0.3s ease, box-shadow 0.3s ease',
                    opacity: status.loading ? 0.7 : 1,
                    cursor: status.loading ? 'not-allowed' : 'text'
                  }}
                  onFocus={(e) => {
                    if (!status.loading) {
                      e.target.style.borderColor = '#818cf8';
                      e.target.style.boxShadow = '0 0 10px rgba(129, 140, 248, 0.3)';
                    }
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
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  disabled={status.loading}
                  style={{
                    width: '100%',
                    padding: '0.75rem 1rem',
                    border: '1px solid rgba(99, 102, 241, 0.3)',
                    borderRadius: '8px',
                    fontSize: 'clamp(0.9rem, 2vw, 1rem)',
                    background: 'rgba(15, 23, 42, 0.5)',
                    color: '#f1f5f9',
                    transition: 'border-color 0.3s ease, box-shadow 0.3s ease',
                    opacity: status.loading ? 0.7 : 1,
                    cursor: status.loading ? 'not-allowed' : 'text'
                  }}
                  onFocus={(e) => {
                    if (!status.loading) {
                      e.target.style.borderColor = '#818cf8';
                      e.target.style.boxShadow = '0 0 10px rgba(129, 140, 248, 0.3)';
                    }
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
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  disabled={status.loading}
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
                    color: '#f1f5f9',
                    opacity: status.loading ? 0.7 : 1,
                    cursor: status.loading ? 'not-allowed' : 'text'
                  }}
                  onFocus={(e) => {
                    if (!status.loading) {
                      e.target.style.borderColor = '#818cf8';
                      e.target.style.boxShadow = '0 0 10px rgba(129, 140, 248, 0.3)';
                    }
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
                whileHover={{ scale: status.loading ? 1 : 1.05 }}
                whileTap={{ scale: status.loading ? 1 : 0.95 }}
                disabled={status.loading}
                style={{
                  padding: 'clamp(0.75rem, 2vw, 1rem) clamp(1.5rem, 3vw, 2rem)',
                  background: status.loading 
                    ? 'rgba(99, 102, 241, 0.5)' 
                    : 'linear-gradient(135deg, #818cf8, #f472b6)',
                  color: 'white',
                  border: 'none',
                  borderRadius: '8px',
                  fontSize: 'clamp(0.9rem, 1.8vw, 1rem)',
                  fontWeight: '600',
                  cursor: status.loading ? 'not-allowed' : 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.5rem',
                  marginTop: '1rem',
                  transition: 'all 0.3s ease'
                }}
              >
                {status.loading ? (
                  <>
                    <Loader2 size={20} style={{ animation: 'spin 1s linear infinite' }} />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={20} />
                    Send Message
                  </>
                )}
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
                style={{ marginBottom: '1.5rem', color: '#f1f5f9', fontSize: 'clamp(1.1rem, 2.5vw, 1.3rem)' }}
              >
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
                    onClick={() => {
                      if (index === 0) {
                        window.location.href = `mailto:${info.text}`;
                      } else if (index === 1) {
                        window.location.href = `tel:${info.text.replace(/\D/g, '')}`;
                      }
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
                      }}
                    >
                      {info.icon}
                    </motion.div>
                    <span style={{ fontWeight: '500', color: '#f1f5f9', fontSize: 'clamp(0.9rem, 1.8vw, 1rem)' }}>
                      {info.text}
                    </span>
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
                style={{ marginBottom: '1.5rem', color: '#f1f5f9', fontSize: 'clamp(1.1rem, 2.5vw, 1.3rem)' }}
              >
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
                      display: 'inline-flex',
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
                      cursor: 'pointer',
                      flexShrink: 0,
                      minWidth: '45px',
                      minHeight: '45px'
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
                style={{ marginBottom: '1rem', color: '#f1f5f9', fontSize: 'clamp(1rem, 2vw, 1.1rem)' }}
              >
                Response Time
              </motion.h4>
              <motion.p 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.5, delay: 0.45 }}
                style={{ opacity: 0.9, marginBottom: '0.5rem', color: '#cbd5e1', fontSize: 'clamp(0.9rem, 1.8vw, 1rem)' }}
              >
                I typically respond within 24 hours
              </motion.p>
              <motion.p 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.5, delay: 0.5 }}
                style={{ fontSize: 'clamp(0.85rem, 1.6vw, 0.9rem)', opacity: 0.8, color: '#cbd5e1' }}
              >
                Available for freelance projects and full-time opportunities
              </motion.p>
            </motion.div>
          </motion.div>
        </div>

        {/* Powered by EmailJS badge */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          style={{
            textAlign: 'center',
            marginTop: '3rem',
            fontSize: 'clamp(0.8rem, 1.5vw, 0.9rem)',
            color: 'rgba(203, 213, 225, 0.6)'
          }}
        >
          <a 
            href="https://www.emailjs.com" 
            target="_blank" 
            rel="noopener noreferrer"
            style={{ 
              color: 'rgba(129, 140, 248, 0.8)', 
              textDecoration: 'none',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.25rem'
            }}
          >
            
           
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;