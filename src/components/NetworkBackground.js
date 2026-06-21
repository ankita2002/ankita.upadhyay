import { useEffect, useRef } from "react";

export const NetworkBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let animationFrameId;
    let width = window.innerWidth;
    let height = window.innerHeight;
    let points = [];

    const POINT_COUNT = 100;
    const LINK_DISTANCE = 290;

    const resizeCanvas = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
      createPoints();
    };

    const createPoints = () => {
      points = Array.from({ length: POINT_COUNT }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.8,
        vy: (Math.random() - 0.5) * 0.8,
        r: Math.random() * 2.8 + 1.8,
      }));
    };

    const movePoints = () => {
      const SPEED = 0.5;
      for (const p of points) {
        p.x += p.vx * SPEED;
        p.y += p.vy + SPEED;

        if (p.x <= 0 || p.x >= width) p.vx *= -1;
        if (p.y <= 0 || p.y >= height) p.vy *= -1;
      }
    };

    const drawBackground = () => {
      ctx.clearRect(0, 0, width, height);

      ctx.fillStyle = "#000";
      ctx.fillRect(0, 0, width, height);

      const glow1 = ctx.createRadialGradient(
        width * 0.2,
        height * 0.35,
        0,
        width * 0.2,
        height * 0.35,
        width * 0.35
      );
      glow1.addColorStop(0, "rgba(255, 170, 60, 0.08)");
      glow1.addColorStop(1, "rgba(0, 0, 0, 0)");

      const glow2 = ctx.createRadialGradient(
        width * 0.75,
        height * 0.6,
        0,
        width * 0.75,
        height * 0.6,
        width * 0.3
      );
      glow2.addColorStop(0, "rgba(255, 210, 120, 0.06)");
      glow2.addColorStop(1, "rgba(0, 0, 0, 0)");

      ctx.fillStyle = glow1;
      ctx.fillRect(0, 0, width, height);

      ctx.fillStyle = glow2;
      ctx.fillRect(0, 0, width, height);
    };

    const drawConnections = () => {
      for (let i = 0; i < points.length; i++) {
        for (let j = i + 1; j < points.length; j++) {
          const a = points[i];
          const b = points[j];

          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < LINK_DISTANCE) {
            const alpha = (1 - dist / LINK_DISTANCE) * 0.85;

            const gradient = ctx.createLinearGradient(a.x, a.y, b.x, b.y);
            gradient.addColorStop(0, `rgba(255, 185, 70, ${alpha})`);
            gradient.addColorStop(0.5, `rgba(255, 220, 140, ${alpha})`);
            gradient.addColorStop(1, `rgba(255, 160, 50, ${alpha})`);

            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.strokeStyle = gradient;
            ctx.lineWidth = 1.8;
            ctx.shadowColor = "rgba(255, 190, 90, 0.45)";
            ctx.shadowBlur = 14;
            ctx.stroke();
            ctx.closePath();
          }
        }
      }
    };

    const drawPoints = () => {
      for (const p of points) {
        const glow = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.r * 6);
        glow.addColorStop(0, "rgba(255, 245, 210, 1)");
        glow.addColorStop(0.35, "rgba(255, 210, 120, 0.95)");
        glow.addColorStop(0.7, "rgba(255, 170, 60, 0.35)");
        glow.addColorStop(1, "rgba(255, 140, 40, 0)");

        ctx.beginPath();
        ctx.fillStyle = glow;
        ctx.arc(p.x, p.y, p.r * 6, 0, Math.PI * 2);
        ctx.fill();
        ctx.closePath();

        ctx.beginPath();
        ctx.fillStyle = "rgba(255, 230, 170, 0.98)";
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.shadowColor = "rgba(255, 210, 120, 0.9)";
        ctx.shadowBlur = 18;
        ctx.fill();
        ctx.closePath();
      }
    };

    const animate = () => {
      drawBackground();
      movePoints();
      drawConnections();
      drawPoints();
      animationFrameId = requestAnimationFrame(animate);
    };

    resizeCanvas();
    animate();

    window.addEventListener("resize", resizeCanvas);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  return <canvas ref={canvasRef} className="network-lines-canvas" />;
};