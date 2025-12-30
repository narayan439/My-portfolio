import { motion } from 'framer-motion';
import { Award, Briefcase, GraduationCap, Users } from 'lucide-react';

const About = () => {
  const skills = [
    { name: 'Next.js & React', level: 95 },
    { name: 'Angular', level: 90 },
    { name: 'React Native', level: 85 },
    { name: 'Tailwind CSS & CSS3', level: 95 },
    { name: 'Spring Boot', level: 85 },
    { name: 'REST APIs & JWT', level: 90 },
    { name: 'MySQL & Firebase', level: 85 },
    { name: 'Git & GitHub', level: 90 }
  ];

  const experiences = [
    {
      year: '2024 - Present',
      role: 'Full Stack Developer',
      company: 'Building Real Products',
      description: 'Developing modern web and mobile applications using React, Angular, and Spring Boot'
    },
    {
      year: '2023 - 2024',
      role: 'Frontend Developer',
      company: 'Personal Projects',
      description: 'Created Student Result Management System and Homy Booking Platform'
    },
    {
      year: '2022 - Present',
      role: 'B.Tech Computer Science',
      company: 'Pursuing Degree',
      description: 'Building skills through academics and real-world project development'
    }
  ];

  return (
    <section id="about" style={{ 
      background: 'linear-gradient(135deg, rgba(15, 23, 42, 0.8), rgba(30, 41, 59, 0.8))',
      borderTop: '1px solid rgba(99, 102, 241, 0.2)',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Decorative gradient */}
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '-200px',
        width: '500px',
        height: '500px',
        background: 'radial-gradient(circle, rgba(244, 114, 182, 0.1) 0%, transparent 70%)',
        borderRadius: '50%',
        pointerEvents: 'none'
      }} />
      
      <div className="container" style={{ position: 'relative', zIndex: 1, padding: 'clamp(2rem, 5vw, 5rem) clamp(1rem, 3vw, 2rem)' }}>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6 }}
      >
        <motion.h2 
          style={{ 
            textAlign: 'center', 
            marginBottom: '1rem',
            background: 'linear-gradient(135deg, #818cf8, #f472b6)',
            WebkitBackgroundClip: 'text',
            backgroundClip: 'text',
            color: 'transparent',
            fontSize: 'clamp(2rem, 5vw, 3rem)'
          }}
        >
          About Me
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, delay: 0.1 }}
          style={{ 
            textAlign: 'center', 
            maxWidth: '900px', 
            margin: '0 auto 3rem',
            color: 'var(--text-secondary)',
            fontSize: 'clamp(0.95rem, 2vw, 1.1rem)',
            lineHeight: '1.6'
          }}>
          I'm a <strong>Frontend & App Developer</strong> with a strong focus on <strong>clean UI, smooth UX, and performance</strong>. 
          I build modern web and mobile applications using <strong>Next.js, Angular, React Native, and Spring Boot</strong>. 
          I enjoy turning ideas into real products, solving problems with code, and designing interfaces that feel simple, fast, and user-friendly. 
          I'm currently pursuing <strong>B.Tech in Computer Science Engineering</strong> and actively building real-world projects to sharpen my skills.
        </motion.p>
      </motion.div>

      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(clamp(280px, 85vw, 350px), 1fr))', 
        gap: 'clamp(1.5rem, 4vw, 3rem)', 
        marginBottom: '4rem',
        '@media (max-width: 768px)': {
          gridTemplateColumns: '1fr'
        }
      }}>
        {/* Left Column - Skills */}
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
          <motion.h3 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5, delay: 0.1 }}
            style={{ marginBottom: '2rem', color: '#f1f5f9', fontSize: 'clamp(1.1rem, 2.5vw, 1.3rem)' }}>
            Skills & Expertise
          </motion.h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {skills.map((skill, index) => (
              <motion.div 
                key={skill.name}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                  <span style={{ fontWeight: '500', color: '#f1f5f9', fontSize: 'clamp(0.9rem, 2vw, 1rem)' }}>{skill.name}</span>
                  <span style={{ color: '#818cf8', fontWeight: '600', fontSize: 'clamp(0.85rem, 1.8vw, 0.95rem)' }}>{skill.level}%</span>
                </div>
                <div style={{ 
                  width: '100%', 
                  height: '6px', 
                  background: 'rgba(99, 102, 241, 0.2)', 
                  borderRadius: '3px',
                  overflow: 'hidden'
                }}>
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true, margin: '-80px' }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                    style={{
                      height: '100%',
                      background: 'linear-gradient(90deg, #818cf8, #f472b6)',
                      borderRadius: '3px'
                    }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Right Column - Experience */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
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
          <motion.h3 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5, delay: 0.1 }}
            style={{ marginBottom: '2rem', color: '#f1f5f9', fontSize: 'clamp(1.1rem, 2.5vw, 1.3rem)' }}>
            Experience
          </motion.h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                style={{
                  background: 'rgba(15, 23, 42, 0.4)',
                  padding: 'clamp(1rem, 2vw, 1.25rem)',
                  borderRadius: '8px',
                  border: '1px solid rgba(99, 102, 241, 0.15)',
                  borderLeft: '3px solid #818cf8'
                }}
              >
                <div style={{ 
                  display: 'flex', 
                  justifyContent: 'space-between', 
                  alignItems: 'flex-start',
                  marginBottom: '0.5rem',
                  gap: '1rem',
                  flexDirection: 'row',
                  flexWrap: 'wrap'
                }}>
                  <div>
                    <h4 style={{ marginBottom: '0.25rem', color: '#f1f5f9', fontSize: 'clamp(0.95rem, 2vw, 1.05rem)' }}>{exp.role}</h4>
                    <p style={{ color: '#818cf8', fontWeight: '500', fontSize: 'clamp(0.85rem, 1.8vw, 0.95rem)' }}>{exp.company}</p>
                  </div>
                  <span style={{ 
                    background: 'rgba(129, 140, 248, 0.15)', 
                    padding: '0.25rem 0.75rem', 
                    borderRadius: '50px',
                    fontSize: 'clamp(0.75rem, 1.5vw, 0.85rem)',
                    fontWeight: '500',
                    color: '#cbd5e1',
                    whiteSpace: 'nowrap'
                  }}>
                    {exp.year}
                  </span>
                </div>
                <p style={{ fontSize: 'clamp(0.85rem, 1.8vw, 0.9rem)', color: '#cbd5e1' }}>{exp.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Stats */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6 }}
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(clamp(140px, 40vw, 200px), 1fr))',
          gap: 'clamp(1rem, 3vw, 2rem)',
          marginTop: '4rem',
          textAlign: 'center'
        }}
      >
        {[
          { icon: <Briefcase size={32} />, value: '50+', label: 'Projects' },
          { icon: <Users size={32} />, value: '30+', label: 'Clients' },
          { icon: <Award size={32} />, value: '15+', label: 'Awards' },
          { icon: <GraduationCap size={32} />, value: '3+', label: 'Years Exp' }
        ].map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ scale: 1.05, y: -5 }}
            style={{
              padding: 'clamp(1.25rem, 3vw, 2rem)',
              background: 'rgba(30, 41, 59, 0.6)',
              border: '1px solid rgba(99, 102, 241, 0.2)',
              borderRadius: '12px',
              backdropFilter: 'blur(10px)',
              cursor: 'pointer'
            }}
          >
            <motion.div 
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              style={{ 
                display: 'inline-flex', 
                padding: 'clamp(0.75rem, 2vw, 1rem)', 
                background: 'linear-gradient(135deg, rgba(129, 140, 248, 0.15), rgba(244, 114, 182, 0.15))', 
                borderRadius: '50%',
                marginBottom: '1rem'
              }}>
              <div style={{ background: 'linear-gradient(135deg, #818cf8, #f472b6)', WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent' }}>
                {stat.icon}
              </div>
            </motion.div>
            <motion.h3 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              style={{ marginBottom: '0.5rem', color: '#f1f5f9', fontSize: 'clamp(1.5rem, 3vw, 2rem)' }}>
              {stat.value}
            </motion.h3>
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5, delay: index * 0.25 }}
              style={{ color: '#cbd5e1', fontWeight: '500', fontSize: 'clamp(0.85rem, 1.8vw, 1rem)' }}>
              {stat.label}
            </motion.p>
          </motion.div>
        ))}
      </motion.div>
      </div>
    </section>
  );
};

export default About;