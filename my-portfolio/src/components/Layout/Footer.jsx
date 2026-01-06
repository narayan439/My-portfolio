import { motion } from 'framer-motion';
import { Heart, Mail, Github, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.1,
        duration: 0.5
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100, damping: 12 }
    }
  };

  return (
    <motion.footer
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      style={{
        background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.1), rgba(244, 114, 182, 0.05))',
        borderTop: '1px solid rgba(99, 102, 241, 0.3)',
        color: 'white',
        padding: '4rem 2rem 2rem'
      }}
    >
      <div className="container">
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '3rem',
          marginBottom: '3rem'
        }}>
          {/* Brand Column */}
          <motion.div variants={itemVariants}>
            <div style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1rem' }}>
              <span style={{ background: 'linear-gradient(135deg, #818cf8, #f472b6)', WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent' }}>
               NS Developer
              </span>
            </div>
            <p style={{ color: 'rgba(255,255,255,0.6)', marginBottom: '2rem', maxWidth: '300px' }}>
              Creating beautiful, functional designs that make a difference.
            </p>
            <div style={{ display: 'flex', gap: '1rem' }}>
              {[
                { icon: Mail, href: 'narayansahu2888@gmail.com' },
                { icon: Github, href: 'https://github.com/narayan439' },
                { icon: Linkedin, href: 'https://www.linkedin.com/in/narayan-sahu-1752a0393?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' },
                // { icon: Twitter, href: '#' }
              ].map((social, idx) => (
                <motion.a
                  key={idx}
                  href={social.href}
                  whileHover={{ scale: 1.2, y: -5 }}
                  whileTap={{ scale: 0.9 }}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '40px',
                    height: '40px',
                    borderRadius: '50%',
                    background: 'rgba(129, 140, 248, 0.2)',
                    border: '1px solid rgba(129, 140, 248, 0.3)',
                    color: '#818cf8',
                    transition: 'all 0.3s ease'
                  }}
                >
                  <social.icon size={18} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants}>
            <h4 style={{ marginBottom: '1.5rem', fontSize: '1.1rem', color: '#ffffff' }}>Quick Links</h4>
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {['Home', 'Projects', 'About', 'Contact'].map((item, idx) => (
                <motion.li 
                  key={item}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  viewport={{ once: true }}
                >
                  <motion.a
                    href={`#${item.toLowerCase()}`}
                    whileHover={{ x: 5, color: '#f472b6' }}
                    style={{
                      color: 'rgba(255,255,255,0.6)',
                      textDecoration: 'none',
                      transition: 'all 0.3s ease',
                      display: 'block'
                    }}
                  >
                    {item}
                  </motion.a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div variants={itemVariants}>
            <h4 style={{ marginBottom: '1.5rem', fontSize: '1.1rem', color: '#ffffff' }}>Services</h4>
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {['UI/UX Design', 'Web Design', 'Mobile App Design', 'Brand Identity'].map((service, idx) => (
                <motion.li 
                  key={service}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  viewport={{ once: true }}
                >
                  <span style={{ color: 'rgba(255,255,255,0.6)' }}>
                    {service}
                  </span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Divider */}
        <motion.div 
          variants={itemVariants}
          style={{ 
            height: '1px', 
            background: 'rgba(99, 102, 241, 0.3)', 
            margin: '2rem 0' 
          }} 
        />

        {/* Copyright */}
        <motion.div 
          variants={itemVariants}
          style={{ 
            display: 'flex', 
            justifyContent: 'space-between', 
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '1rem'
          }}
        >
          <p style={{ color: 'rgba(255,255,255,0.5)' }}>
            © {currentYear} NS Developer. All rights reserved.
          </p>
          
          <motion.p
            style={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: '0.5rem',
              color: 'rgba(255,255,255,0.5)'
            }}
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            Made with <Heart size={16} style={{ color: '#f472b6' }} /> NS Developer
          </motion.p>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;