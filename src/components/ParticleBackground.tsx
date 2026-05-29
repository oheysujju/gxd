import { useEffect, useRef } from "react";

export default function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Particle structure
    interface Particle {
      x: number;
      y: number;
      z: number;
      vx: number;
      vy: number;
      vz: number;
      color: string;
      size: number;
    }

    const particleCount = 120;
    const particles: Particle[] = [];
    const colors = ["#a855f7", "#3b82f6", "#06b6d4", "#ec4899"];

    // Initialize 3D particles
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: (Math.random() - 0.5) * width * 1.5,
        y: (Math.random() - 0.5) * height * 1.5,
        z: Math.random() * 800 + 100, // Depth
        vx: (Math.random() - 0.5) * 0.8,
        vy: (Math.random() - 0.5) * 0.8,
        vz: -Math.random() * 0.5 - 0.2, // drifting forward
        size: Math.random() * 3 + 1,
        color: colors[Math.floor(Math.random() * colors.length)],
      });
    }

    // Interactive mouse coordinates
    let mouseX = 0;
    let mouseY = 0;
    let targetMouseX = 0;
    let targetMouseY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      // Relative to screen center
      targetMouseX = e.clientX - width / 2;
      targetMouseY = e.clientY - height / 2;
    };

    window.addEventListener("mousemove", handleMouseMove);

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);

    const focalLength = 400;

    // Render loop
    const render = () => {
      // Soft background accumulation to create trails
      ctx.fillStyle = "rgba(3, 7, 18, 0.2)";
      ctx.fillRect(0, 0, width, height);

      // Dampened mouse inertia
      mouseX += (targetMouseX - mouseX) * 0.05;
      mouseY += (targetMouseY - mouseY) * 0.05;

      // Update & Draw
      particles.forEach((p) => {
        // Apply velocity
        p.x += p.vx;
        p.y += p.vy;
        p.z += p.vz;

        // Reset particle if it drifts too close or out of bounds
        if (p.z <= 10) {
          p.z = 900;
          p.x = (Math.random() - 0.5) * width * 1.5;
          p.y = (Math.random() - 0.5) * height * 1.5;
        }

        // Project particle onto 2D viewport
        const scale = focalLength / (focalLength + p.z);
        
        // Dynamic offset based on mouse location and depth factor
        const depthFactor = (900 - p.z) / 900; // closer = moves more with mouse
        const projX = p.x * scale + width / 2 + mouseX * depthFactor * 0.5;
        const projY = p.y * scale + height / 2 + mouseY * depthFactor * 0.5;
        const radius = p.size * scale * 1.5;

        if (projX >= 0 && projX <= width && projY >= 0 && projY <= height) {
          // Draw connecting wires for particles close in space
          particles.forEach((p2) => {
            if (p === p2) return;
            const distZ = Math.abs(p.z - p2.z);
            if (distZ < 80) {
              const distX = Math.abs(p.x - p2.x);
              const distY = Math.abs(p.y - p2.y);
              const distance = Math.hypot(distX, distY);
              
              if (distance < 120) {
                const scale2 = focalLength / (focalLength + p2.z);
                const projX2 = p2.x * scale2 + width / 2 + mouseX * ((900 - p2.z) / 900) * 0.5;
                const projY2 = p2.y * scale2 + height / 2 + mouseY * ((900 - p2.z) / 900) * 0.5;

                // Wire opacity based on distance and depth
                const opacity = (1 - distance / 120) * (200 / p.z) * 0.15;
                ctx.beginPath();
                ctx.moveTo(projX, projY);
                ctx.lineTo(projX2, projY2);
                ctx.strokeStyle = `rgba(59, 130, 246, ${opacity})`;
                ctx.lineWidth = 0.5;
                ctx.stroke();
              }
            }
          });

          // Draw the glow dot
          ctx.beginPath();
          ctx.arc(projX, projY, radius, 0, Math.PI * 2);
          ctx.fillStyle = p.color;
          ctx.fill();

          // Particle outer atmospheric glow
          if (p.z < 300) {
            ctx.beginPath();
            ctx.arc(projX, projY, radius * 3, 0, Math.PI * 2);
            ctx.fillStyle = p.color === "#a855f7" 
              ? "rgba(168, 85, 247, 0.06)" 
              : p.color === "#06b6d4" 
              ? "rgba(6, 182, 212, 0.06)" 
              : "rgba(59, 130, 246, 0.06)";
            ctx.fill();
          }
        }
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      id="particles-ambient-canvas"
      className="fixed inset-0 pointer-events-none z-0"
      style={{ mixBlendMode: "screen" }}
    />
  );
}
