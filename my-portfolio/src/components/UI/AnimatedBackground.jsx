import { useEffect, useRef, useState } from 'react';

const AnimatedBackground = () => {
  const canvasRef = useRef(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationId;
    let mouse = { x: 0, y: 0 };

    // Get CSS variables for colors
    const getColors = () => {
      const style = getComputedStyle(document.documentElement);
      return {
        primary: style.getPropertyValue('--primary').trim() || '#818cf8',
        secondary: style.getPropertyValue('--secondary').trim() || '#f472b6',
        background: style.getPropertyValue('--background').trim() || '#0f172a',
      };
    };

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      setDimensions({ width: window.innerWidth, height: window.innerHeight });
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Track mouse position
    const handleMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };
    window.addEventListener('mousemove', handleMouseMove);

    // Particle system
    class Particle {
      constructor(canvasWidth, canvasHeight) {
        const colors = getColors();
        this.x = Math.random() * canvasWidth;
        this.y = Math.random() * canvasHeight;
        this.size = Math.random() * 2 + 0.5;
        this.speedX = (Math.random() - 0.5) * 0.3;
        this.speedY = (Math.random() - 0.5) * 0.3;
        this.opacity = Math.random() * 0.3 + 0.1;
        this.color = Math.random() > 0.5 ? colors.primary : colors.secondary;
        this.canvasWidth = canvasWidth;
        this.canvasHeight = canvasHeight;
      }

      update(mouseX, mouseY) {
        // Move particle
        this.x += this.speedX;
        this.y += this.speedY;

        // Add mouse interaction
        const dx = mouseX - this.x;
        const dy = mouseY - this.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const maxDistance = 100;

        if (distance < maxDistance) {
          const force = (maxDistance - distance) / maxDistance;
          this.x -= dx * force * 0.02;
          this.y -= dy * force * 0.02;
        }

        // Bounce off edges
        if (this.x > this.canvasWidth) this.speedX = -Math.abs(this.speedX);
        if (this.x < 0) this.speedX = Math.abs(this.speedX);
        if (this.y > this.canvasHeight) this.speedY = -Math.abs(this.speedY);
        if (this.y < 0) this.speedY = Math.abs(this.speedY);
      }

      draw(ctx) {
        // Draw glow effect
        const gradient = ctx.createRadialGradient(
          this.x, this.y, 0,
          this.x, this.y, this.size * 3
        );
        gradient.addColorStop(0, `${this.color}${Math.floor(this.opacity * 255).toString(16).padStart(2, '0')}`);
        gradient.addColorStop(1, `${this.color}00`);

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size * 3, 0, Math.PI * 2);
        ctx.fill();

        // Draw core particle
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    // Create particles
    let particles = [];
    const initParticles = () => {
      const particleCount = Math.min(80, Math.floor(canvas.width * canvas.height / 20000));
      particles = [];
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle(canvas.width, canvas.height));
      }
    };
    initParticles();

    // Draw background gradient
    const drawBackground = () => {
      const colors = getColors();
      
      // Main gradient
      const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
      gradient.addColorStop(0, `${colors.background}ff`);
      gradient.addColorStop(0.5, `${colors.background}ee`);
      gradient.addColorStop(1, `${colors.background}dd`);
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Subtle radial gradients
      const radial1 = ctx.createRadialGradient(
        canvas.width * 0.2, canvas.height * 0.3, 0,
        canvas.width * 0.2, canvas.height * 0.3, canvas.width * 0.5
      );
      radial1.addColorStop(0, `${colors.primary}15`);
      radial1.addColorStop(1, 'transparent');
      ctx.fillStyle = radial1;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      const radial2 = ctx.createRadialGradient(
        canvas.width * 0.8, canvas.height * 0.7, 0,
        canvas.width * 0.8, canvas.height * 0.7, canvas.width * 0.4
      );
      radial2.addColorStop(0, `${colors.secondary}10`);
      radial2.addColorStop(1, 'transparent');
      ctx.fillStyle = radial2;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
    };

    // Draw connections between particles
    const drawConnections = (particlesArray) => {
      const colors = getColors();
      
      for (let i = 0; i < particlesArray.length; i++) {
        for (let j = i + 1; j < particlesArray.length; j++) {
          const dx = particlesArray[i].x - particlesArray[j].x;
          const dy = particlesArray[i].y - particlesArray[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 150) {
            const opacity = 0.2 * (1 - distance / 150);
            const gradient = ctx.createLinearGradient(
              particlesArray[i].x, particlesArray[i].y,
              particlesArray[j].x, particlesArray[j].y
            );
            gradient.addColorStop(0, `${colors.primary}${Math.floor(opacity * 255).toString(16).padStart(2, '0')}`);
            gradient.addColorStop(1, `${colors.secondary}${Math.floor(opacity * 255).toString(16).padStart(2, '0')}`);

            ctx.strokeStyle = gradient;
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.moveTo(particlesArray[i].x, particlesArray[i].y);
            ctx.lineTo(particlesArray[j].x, particlesArray[j].y);
            ctx.stroke();
          }
        }
      }
    };

    // Draw floating elements
    const drawFloatingElements = () => {
      const colors = getColors();
      const time = Date.now() * 0.001;

      // Floating circles
      for (let i = 0; i < 3; i++) {
        const x = canvas.width * 0.3 + Math.sin(time * 0.5 + i) * 100;
        const y = canvas.height * 0.6 + Math.cos(time * 0.3 + i) * 80;
        const size = 30 + Math.sin(time * 0.8 + i) * 10;

        const gradient = ctx.createRadialGradient(x, y, 0, x, y, size);
        gradient.addColorStop(0, `${colors.primary}08`);
        gradient.addColorStop(1, 'transparent');

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(x, y, size, 0, Math.PI * 2);
        ctx.fill();
      }
    };

    // Animation loop
    const animate = () => {
      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw background
      drawBackground();

      // Draw floating elements
      drawFloatingElements();

      // Update and draw particles
      particles.forEach(particle => {
        particle.update(mouse.x, mouse.y);
        particle.draw(ctx);
      });

      // Draw connections
      drawConnections(particles);

      animationId = requestAnimationFrame(animate);
    };

    // Start animation
    animate();

    // Cleanup
    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -1,
        pointerEvents: 'none',
        opacity: 1,
        transition: 'opacity 0.3s ease'
      }}
    />
  );
};

export default AnimatedBackground;