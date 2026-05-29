import { useEffect, useState } from "react";

export default function MouseGlow() {
  const [coords, setCoords] = useState({ x: -100, y: -100 });
  const [active, setActive] = useState(false);

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      setCoords({ x: e.clientX, y: e.clientY });
      if (!active) setActive(true);
    };

    window.addEventListener("mousemove", onMouseMove);
    return () => window.removeEventListener("mousemove", onMouseMove);
  }, [active]);

  if (!active) return null;

  return (
    <div
      id="custom-mouse-glow-orb"
      className="fixed inset-0 pointer-events-none z-10 transition-opacity duration-1000"
      style={{
        background: `radial-gradient(600px circle at ${coords.x}px ${coords.y}px, rgba(99, 102, 241, 0.08), rgba(6, 182, 212, 0.05), transparent 80%)`,
      }}
    />
  );
}
