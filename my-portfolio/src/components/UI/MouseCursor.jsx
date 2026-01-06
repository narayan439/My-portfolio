import { useEffect, useRef, useState } from 'react';

const MouseCursor = () => {
  const cursorRef = useRef(null);
  const cursorDotRef = useRef(null);
  const trailRef = useRef([]);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if device is mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768 || 'ontouchstart' in window);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    // Don't render custom cursor on mobile
    if (isMobile) {
      document.body.style.cursor = 'auto';
      return;
    }

    const cursor = cursorRef.current;
    const cursorDot = cursorDotRef.current;
    if (!cursor || !cursorDot) return;

    let mouseX = 0;
    let mouseY = 0;
    let cursorX = 0;
    let cursorY = 0;
    let cursorDotX = 0;
    let cursorDotY = 0;
    let isMouseInside = true;
    let isHovering = false;
    let animationId;

    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      isMouseInside = true;
      cursor.style.opacity = '1';
      cursorDot.style.opacity = '1';

      // Check if hovering over interactive elements
      const element = document.elementFromPoint(mouseX, mouseY);
      const isInteractive = element?.tagName === 'A' || 
                           element?.tagName === 'BUTTON' || 
                           element?.classList?.contains('btn') ||
                           element?.classList?.contains('interactive');
      
      if (isInteractive && !isHovering) {
        isHovering = true;
        cursor.style.transform = `translate(${cursorX - 20}px, ${cursorY - 20}px) scale(1.5)`;
        cursorDot.style.transform = `translate(${cursorDotX - 6}px, ${cursorDotY - 6}px) scale(0.6)`;
        cursor.style.borderColor = '#f472b6';
      } else if (!isInteractive && isHovering) {
        isHovering = false;
        cursor.style.borderColor = 'var(--primary)';
      }
    };

    const handleMouseLeave = () => {
      isMouseInside = false;
      cursor.style.opacity = '0';
      cursorDot.style.opacity = '0';
    };

    const handleMouseEnter = () => {
      isMouseInside = true;
      cursor.style.opacity = '1';
      cursorDot.style.opacity = '1';
    };

    const animate = () => {
      // Smooth cursor follow with easing
      const ease = 0.15;
      cursorX += (mouseX - cursorX) * ease;
      cursorY += (mouseY - cursorY) * ease;

      // Faster dot follow
      const dotEase = 0.25;
      cursorDotX += (mouseX - cursorDotX) * dotEase;
      cursorDotY += (mouseY - cursorDotY) * dotEase;

      if (!isHovering) {
        cursor.style.transform = `translate(${cursorX - 15}px, ${cursorY - 15}px)`;
      }
      cursorDot.style.transform = `translate(${cursorDotX - 4}px, ${cursorDotY - 4}px)`;

      animationId = requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('mouseenter', handleMouseEnter);

    // Hide default cursor
    document.body.style.cursor = 'none';

    animationId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('mouseenter', handleMouseEnter);
      document.body.style.cursor = 'auto';
      cancelAnimationFrame(animationId);
    };
  }, [isMobile]);

  // Don't render custom cursor on mobile
  if (isMobile) {
    return null;
  }

  return (
    <>
      {/* Main cursor ring - Enhanced design */}
      <div
        ref={cursorRef}
        style={{
          position: 'fixed',
          pointerEvents: 'none',
          zIndex: 9999,
          width: '30px',
          height: '30px',
          border: '2px solid var(--primary)',
          borderRadius: '50%',
          opacity: 0,
          transition: 'opacity 0.3s ease, border-color 0.2s ease',
          mixBlendMode: 'overlay',
          boxShadow: '0 0 10px rgba(129, 140, 248, 0.3)',
          backdropFilter: 'blur(0.5px)'
        }}
      />
      
      {/* Cursor dot - Inner design */}
      <div
        ref={cursorDotRef}
        style={{
          position: 'fixed',
          pointerEvents: 'none',
          zIndex: 10000,
          width: '8px',
          height: '8px',
          background: 'var(--primary)',
          borderRadius: '50%',
          opacity: 0,
          transition: 'opacity 0.3s ease',
          boxShadow: '0 0 8px rgba(129, 140, 248, 0.6)'
        }}
      />
      
      {/* Decorative cursor aura - appears on hover */}
      <div
        style={{
          position: 'fixed',
          pointerEvents: 'none',
          zIndex: 9998,
          width: '50px',
          height: '50px',
          border: '1px solid rgba(244, 114, 182, 0.2)',
          borderRadius: '50%',
          opacity: 0,
          transition: 'opacity 0.3s ease',
          background: 'radial-gradient(circle, rgba(244, 114, 182, 0.1) 0%, transparent 70%)'
        }}
      />
    </>
  );
};

export default MouseCursor;
