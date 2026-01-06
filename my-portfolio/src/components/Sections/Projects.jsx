import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { projects } from '../data/projects';
import { ExternalLink, Github, Eye, ChevronRight } from 'lucide-react';

const Projects = () => {
  const [filter, setFilter] = useState('all');
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const categories = ['all', 'full stack','backend', 'frontend'];
  
  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category.toLowerCase() === filter);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
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

  // Handle View button click
  const handleViewClick = (project) => {
    // Priority order for view link:
    // 1. liveUrl (for portfolio)
    // 2. links.live (for other projects)
    // 3. links.web (for projects with web URLs)
    // 4. links.demo
    // 5. link (fallback)
    // 6. githubUrl (for portfolio)
    // 7. links.github
    
    let url = '#';
    
    if (project.liveUrl) {
      url = project.liveUrl; // Portfolio has liveUrl
    } else if (project.links?.live) {
      url = project.links.live;
    } else if (project.links?.web) {
      url = project.links.web;
    } else if (project.links?.demo) {
      url = project.links.demo;
    } else if (project.link) {
      url = project.link; // Fallback link
    } else if (project.githubUrl) {
      url = project.githubUrl; // Portfolio GitHub
    } else if (project.links?.github) {
      url = project.links.github;
    }
    
    if (url !== '#') {
      window.open(url, '_blank', 'noopener,noreferrer');
    }
  };

  // Handle GitHub button click
  const handleGitHubClick = (project) => {
    // Priority order for GitHub:
    // 1. githubUrl (portfolio)
    // 2. links.github
    // 3. links.figma (for design projects)
    // 4. Fallback to view URL
    
    let url = '#';
    
    if (project.githubUrl) {
      url = project.githubUrl; // Portfolio GitHub
    } else if (project.links?.github) {
      url = project.links.github;
    } else if (project.links?.figma) {
      url = project.links.figma; // For design projects
    } else if (project.links?.behance) {
      url = project.links.behance; // Alternative for design
    } else if (project.links?.prototype) {
      url = project.links.prototype; // For prototypes
    } else if (project.liveUrl) {
      url = project.liveUrl; // Fallback to live URL
    } else if (project.links?.live) {
      url = project.links.live; // Fallback to demo
    }
    
    if (url !== '#') {
      window.open(url, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <section id="projects" style={{ 
      background: 'linear-gradient(135deg, rgba(15, 23, 42, 0.8), rgba(30, 41, 59, 0.8))',
      borderTop: '1px solid rgba(99, 102, 241, 0.2)',
      borderBottom: '1px solid rgba(99, 102, 241, 0.2)',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Decorative gradient overlay */}
      <div style={{
        position: 'absolute',
        top: 0,
        right: 0,
        width: '500px',
        height: '500px',
        background: 'radial-gradient(circle, rgba(129, 140, 248, 0.1) 0%, transparent 70%)',
        borderRadius: '50%',
        pointerEvents: 'none'
      }} />
      
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: isMobile ? "-50px" : "-100px" }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: '3rem', paddingTop: '3rem' }}
        >
          <motion.h2 
            style={{ 
              marginBottom: '1rem',
              background: 'linear-gradient(135deg, #818cf8, #f472b6)',
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
              color: 'transparent'
            }}
          >
            Featured Projects
          </motion.h2>
          <p style={{ 
            maxWidth: '600px', 
            margin: '0 auto 2rem',
            fontSize: isMobile ? '1rem' : '1.1rem',
            color: 'var(--text-secondary)'
          }}>
            A selection of my recent design work and case studies
          </p>
        </motion.div>

        {/* Filter Buttons - Scrollable on mobile */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{
            display: 'flex',
            gap: '0.75rem',
            marginBottom: '2.5rem',
            overflowX: isMobile ? 'auto' : 'visible',
            padding: isMobile ? '0.5rem 0 1rem' : '0',
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
            WebkitOverflowScrolling: 'touch',
            justifyContent: isMobile ? 'flex-start' : 'center'
          }}
        >
          <style>
            {`
              .filter-scroll::-webkit-scrollbar {
                display: none;
              }
            `}
          </style>
          {categories.map((category) => (
            <motion.button
              key={category}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setFilter(category)}
              style={{
                padding: '0.5rem 1.25rem',
                borderRadius: '50px',
                border: 'none',
                background: filter === category 
                  ? 'linear-gradient(135deg, #818cf8, #f472b6)' 
                  : 'rgba(129, 140, 248, 0.1)',
                color: filter === category ? 'white' : '#cbd5e1',
                cursor: 'pointer',
                fontWeight: '500',
                transition: 'all 0.3s ease',
                fontSize: '0.9rem',
                whiteSpace: 'nowrap',
                flexShrink: 0,
                borderBottom: filter === category ? '2px solid #f472b6' : 'none'
              }}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: isMobile ? "-50px" : "-100px" }}
          style={{
            display: 'grid',
            gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fill, minmax(350px, 1fr))',
            gap: isMobile ? '1.5rem' : '2rem'
          }}
        >
          {filteredProjects.map((project, index) => (
            <motion.article
              key={project.id}
              variants={itemVariants}
              custom={index}
              whileHover={!isMobile ? { y: -10 } : {}}
              style={{
                background: 'rgba(30, 41, 59, 0.8)',
                borderRadius: '16px',
                border: '1px solid rgba(99, 102, 241, 0.2)',
                overflow: 'hidden',
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)',
                transition: 'all 0.3s ease',
                backdropFilter: 'blur(10px)',
                display: 'flex',
                flexDirection: 'column',
                height: '100%'
              }}
            >
              {/* Project Image */}
              <div style={{ 
                position: 'relative', 
                overflow: 'hidden', 
                height: isMobile ? '200px' : '250px'
              }}>
                <motion.img
                  src={project.image}
                  alt={project.title}
                  whileHover={!isMobile ? { scale: 1.1 } : {}}
                  transition={{ duration: 0.5 }}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover'
                  }}
                />
                
                {project.featured && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2 }}
                    style={{
                      position: 'absolute',
                      top: '0.75rem',
                      left: '0.75rem',
                      background: 'var(--secondary)',
                      color: 'white',
                      padding: '0.25rem 0.75rem',
                      borderRadius: '50px',
                      fontSize: '0.75rem',
                      fontWeight: '600'
                    }}
                  >
                    Featured
                  </motion.div>
                )}
              </div>

              {/* Project Content */}
              <div style={{ 
                padding: isMobile ? '1.5rem' : '2rem', 
                flex: 1,
                display: 'flex',
                flexDirection: 'column'
              }}>
                <div style={{ 
                  display: 'flex', 
                  justifyContent: 'space-between', 
                  alignItems: 'flex-start', 
                  marginBottom: '0.75rem' 
                }}>
                  <div style={{ flex: 1 }}>
                    <span style={{ 
                      color: 'var(--primary)', 
                      fontSize: '0.8rem', 
                      fontWeight: '600',
                      textTransform: 'uppercase',
                      letterSpacing: '0.5px',
                      display: 'block',
                      marginBottom: '0.25rem'
                    }}>
                      {project.category}
                    </span>
                    <h3 style={{ 
                      margin: '0.25rem 0',
                      fontSize: isMobile ? '1.1rem' : '1.25rem'
                    }}>
                      {project.title}
                    </h3>
                  </div>
                  
                  <motion.a
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      handleViewClick(project);
                    }}
                    whileHover={{ rotate: 45 }}
                    whileTap={{ scale: 0.9 }}
                    style={{ 
                      display: 'inline-block',
                      marginLeft: '0.5rem',
                      flexShrink: 0,
                      color: 'var(--primary)',
                      textDecoration: 'none'
                    }}
                    aria-label={`View ${project.title} details`}
                  >
                    <ExternalLink size={isMobile ? 18 : 20} />
                  </motion.a>
                </div>

                <p style={{ 
                  marginBottom: '1rem', 
                  fontSize: isMobile ? '0.9rem' : '0.95rem',
                  flex: 1
                }}>
                  {project.description}
                </p>

                {/* Tags */}
                <div style={{ 
                  display: 'flex', 
                  gap: '0.5rem', 
                  flexWrap: 'wrap', 
                  marginBottom: '1.25rem'
                }}>
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      style={{
                        padding: '0.25rem 0.5rem',
                        background: 'rgba(99, 102, 241, 0.1)',
                        color: 'var(--primary)',
                        borderRadius: '50px',
                        fontSize: '0.75rem',
                        fontWeight: '500'
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div style={{ 
                  display: 'flex', 
                  gap: '0.75rem',
                  marginTop: 'auto'
                }}>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => handleViewClick(project)}
                    style={{
                      flex: 1,
                      padding: isMobile ? '0.6rem' : '0.75rem',
                      background: 'var(--primary-gradient)',
                      color: 'white',
                      border: 'none',
                      borderRadius: '8px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '0.5rem',
                      cursor: 'pointer',
                      fontWeight: '500',
                      fontSize: isMobile ? '0.85rem' : '0.9rem'
                    }}
                  >
                    <Eye size={isMobile ? 16 : 18} />
                    View
                  </motion.button>
                  
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => handleGitHubClick(project)}
                    style={{
                      padding: isMobile ? '0.6rem 1rem' : '0.75rem 1.5rem',
                      background: 'transparent',
                      border: '2px solid var(--gray-light)',
                      borderRadius: '8px',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      cursor: 'pointer',
                      fontWeight: '500',
                      fontSize: isMobile ? '0.85rem' : '0.9rem',
                      flexShrink: 0
                    }}
                  >
                    <Github size={isMobile ? 16 : 18} />
                    <span className="hidden-mobile">Code</span>
                  </motion.button>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ textAlign: 'center', marginTop: '3rem' }}
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn btn-secondary"
            style={{ 
              padding: isMobile ? '0.75rem 2rem' : '1rem 3rem',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem'
            }}
          >
            View All Projects
            <ChevronRight size={20} />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;