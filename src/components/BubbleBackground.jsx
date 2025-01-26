import { useEffect, useRef } from 'react';

export default function BubbleBackground() {
  const canvasRef = useRef(null);
  const bubbles = useRef([]);
  const mousePosition = useRef({ x: 0, y: 0 });
  const animationFrameId = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const createBubble = (x, y, isMouseBubble = false) => {
      return {
        x,
        y,
        size: isMouseBubble ? 2 : Math.random() * 150 + 1,
        speedX: (Math.random() - 0.5) * 3,
        speedY: -Math.random() * 0.5 - 0.2,
        opacity: 2,
        isMouseBubble,
      };
    };

    const addRandomBubble = () => {
      if (bubbles.current.length < 50) {
        const x = Math.random() * canvas.width;
        const y = canvas.height + 10;
        bubbles.current.push(createBubble(x, y));
      }
    };

    const addMouseBubble = (x, y) => {
      for (let i = 0; i < 3; i++) {
        bubbles.current.push(createBubble(x, y, true));
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Add random bubbles
      if (Math.random() < 0.1) addRandomBubble();
      
      // Add mouse bubbles
      if (mousePosition.current.x && mousePosition.current.y) {
        addMouseBubble(mousePosition.current.x, mousePosition.current.y);
      }

      bubbles.current = bubbles.current.filter(bubble => {
        bubble.x += bubble.speedX;
        bubble.y += bubble.speedY;
        bubble.opacity -= 0.005;

        ctx.beginPath();
        ctx.arc(bubble.x, bubble.y, bubble.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(99, 102, 241, ${bubble.opacity * 0.2})`;
        ctx.fill();

        return bubble.opacity > 0 && bubble.y > -10;
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mousePosition.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      };
    };

    const handleResize = () => {
      resizeCanvas();
      bubbles.current = [];
    };

    resizeCanvas();
    window.addEventListener('resize', handleResize);
    canvas.addEventListener('mousemove', handleMouseMove);
    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
      canvas.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ opacity: 0.7 }}
    />
  );
}