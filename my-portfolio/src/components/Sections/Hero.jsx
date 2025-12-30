import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, MousePointerClick } from 'lucide-react';
import { useEffect, useState } from 'react';

const Hero = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    }
  };

  return (
    <section 
      id="home" 
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
        paddingTop: '4rem' /* Account for fixed navbar */
      }}
    >
      <div className="container">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          style={{ maxWidth: '800px', textAlign: isMobile ? 'center' : 'left' }}
        >
          {/* Badge */}
          <motion.div
            variants={itemVariants}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              background: 'rgba(99, 102, 241, 0.1)',
              padding: '0.5rem 1rem',
              borderRadius: '50px',
              marginBottom: '2rem',
              marginLeft: isMobile ? 'auto' : '0',
              marginRight: isMobile ? 'auto' : '0',
              width: 'fit-content'
            }}
          >
            <Sparkles size={16} />
            <span style={{ fontSize: '0.9rem', fontWeight: '500' }}>
              UX/UI Designer & Frontend Developer
            </span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1 
            variants={itemVariants}
            style={{ 
              fontSize: isMobile ? '2.5rem' : '3.5rem',
              lineHeight: 1.2
            }}
          >
            Crafting <span className="text-gradient">Digital Experiences</span> 
            {!isMobile && <br />}That Inspire & Engage
          </motion.h1>

          {/* Subtitle */}
          <motion.p 
            variants={itemVariants}
            style={{ 
              fontSize: isMobile ? '1.1rem' : '1.2rem', 
              marginBottom: '2.5rem',
              maxWidth: '600px',
              marginLeft: isMobile ? 'auto' : '0',
              marginRight: isMobile ? 'auto' : '0'
            }}
          >
            I design and build beautiful, functional interfaces that solve real problems 
            and create meaningful connections.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div 
            variants={itemVariants}
            style={{ 
              display: 'flex', 
              gap: '1rem', 
              flexWrap: 'wrap',
              justifyContent: isMobile ? 'center' : 'flex-start'
            }}
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn btn-primary"
              style={{ 
                display: 'flex', 
                alignItems: 'center', 
                gap: '0.5rem',
                padding: isMobile ? '0.75rem 1.5rem' : '0.8rem 2rem'
              }}
            >
              View My Work
              <ArrowRight size={20} />
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn btn-secondary"
              style={{
                padding: isMobile ? '0.75rem 1.5rem' : '0.8rem 2rem'
              }}
            >
              Contact Me
            </motion.button>
          </motion.div>

          {/* Stats - Stack on mobile */}
          <motion.div
            variants={itemVariants}
            style={{
              display: 'flex',
              gap: isMobile ? '1.5rem' : '3rem',
              marginTop: '3rem',
              flexWrap: 'wrap',
              justifyContent: isMobile ? 'center' : 'flex-start'
            }}
          >
            {[
              { number: '50+', label: 'Projects' },
              { number: '3+', label: 'Years Experience' },
              { number: '100%', label: 'Satisfaction' }
            ].map((stat, index) => (
              <div 
                key={index}
                style={{
                  textAlign: 'center',
                  flex: isMobile ? '1 0 calc(50% - 1.5rem)' : 'none',
                  minWidth: isMobile ? '120px' : 'auto'
                }}
              >
                <h3 style={{ 
                  color: 'var(--primary)', 
                  marginBottom: '0.25rem',
                  fontSize: isMobile ? '1.75rem' : '2rem'
                }}>
                  {stat.number}
                </h3>
                <p style={{ 
                  fontSize: isMobile ? '0.85rem' : '0.9rem',
                  marginBottom: 0
                }}>
                  {stat.label}
                </p>
              </div>
            ))}
          </motion.div>

          {/* Scroll Indicator - Only show on desktop */}
          {!isMobile && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5 }}
              style={{
                position: 'absolute',
                bottom: '2rem',
                left: '50%',
                transform: 'translateX(-50%)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '0.5rem'
              }}
            >
              <span style={{ fontSize: '0.8rem', color: 'var(--gray)' }}>
                Scroll to explore
              </span>
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
              >
                <MousePointerClick size={20} />
              </motion.div>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;