import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";
import { TimelineEvent } from "../types";
import { Briefcase, Milestone, Award, Flame, ChevronRight } from "lucide-react";

export default function About() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [activeTimelineStep, setActiveTimelineStep] = useState(0);

  // Rotating Globe / Digital Network simulator using mathematical rotation formulas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = (canvas.width = 400);
    let height = (canvas.height = 400);

    const handleResize = () => {
      if (!canvas) return;
      const rect = canvas.getBoundingClientRect();
      width = canvas.width = rect.width;
      height = canvas.height = rect.height;
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    // 3D Nodes array (simulated globe wrapping)
    interface GlobeNode {
      x: number;
      y: number;
      z: number;
      label?: string;
    }

    const nodes: GlobeNode[] = [];
    const count = 40;
    const radius = 130;

    // Create uniform spherical distribution (Fibonacci Sphere algorithm)
    for (let i = 0; i < count; i++) {
      const phi = Math.acos(-1 + (2 * i) / count);
      const theta = Math.sqrt(count * Math.PI) * phi;
      
      const brands = ["Instagram", "Meta", "YouTube", "Growth X", "WhatsApp", "ROI", "Global Network", "Growth"];
      const label = i % 5 === 0 ? brands[Math.floor(i / 5) % brands.length] : undefined;

      nodes.push({
        x: Math.sin(phi) * Math.cos(theta) * radius,
        y: Math.sin(phi) * Math.sin(theta) * radius,
        z: Math.cos(phi) * radius,
        label,
      });
    }

    let angleX = 0.004;
    let angleY = 0.006;
    let animationFrame: number;

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Save center coordinates
      const cx = width / 2;
      const cy = height / 2;

      // Draw background atmospheric planetary shadow rings
      ctx.beginPath();
      ctx.arc(cx, cy, radius * 1.15, 0, Math.PI * 2);
      ctx.strokeStyle = "rgba(168, 85, 247, 0.03)";
      ctx.lineWidth = 1;
      ctx.stroke();

      ctx.beginPath();
      ctx.arc(cx, cy, radius * 0.7, 0, Math.PI * 2);
      ctx.strokeStyle = "rgba(6, 182, 212, 0.02)";
      ctx.lineWidth = 0.5;
      ctx.stroke();

      // Compute rotation matrices
      const cosX = Math.cos(angleX);
      const sinX = Math.sin(angleX);
      const cosY = Math.cos(angleY);
      const sinY = Math.sin(angleY);

      // Rotate nodes and store projected 2D coordinates
      const projected = nodes.map((node) => {
        // Rotate Y axis
        let x1 = node.x * cosY - node.z * sinY;
        let z1 = node.z * cosY + node.x * sinY;

        // Rotate X axis
        let y2 = node.y * cosX - z1 * sinX;
        let z2 = z1 * cosX + node.y * sinX;

        // Save rotated position
        node.x = x1;
        node.y = y2;
        node.z = z2;

        // Projection
        const focal = 350;
        const scale = focal / (focal + z2);
        const px = cx + x1 * scale;
        const py = cy + y2 * scale;
        const opacity = (radius - z2) / (radius * 2) + 0.3; // alpha based on depth

        return { px, py, scale, opacity, node };
      });

      // Draw connections/wireframes between nearest projected nodes
      ctx.lineWidth = 0.5;
      for (let i = 0; i < projected.length; i++) {
        const u = projected[i];
        for (let j = i + 1; j < projected.length; j++) {
          const v = projected[j];
          const dist = Math.hypot(u.node.x - v.node.x, u.node.y - v.node.y, u.node.z - v.node.z);
          
          if (dist < 85) {
            ctx.beginPath();
            ctx.moveTo(u.px, u.py);
            ctx.lineTo(v.px, v.py);
            // Blend opacity factor with depth
            const lineOpacity = (1 - dist / 85) * Math.min(u.opacity, v.opacity) * 0.25;
            ctx.strokeStyle = `rgba(6, 182, 212, ${lineOpacity})`;
            ctx.stroke();
          }
        }
      }

      // Draw the nodes
      projected.forEach(({ px, py, scale, opacity, node }) => {
        const rad = Math.max(0.5, 3 * scale);
        ctx.beginPath();
        ctx.arc(px, py, rad, 0, Math.PI * 2);

        if (node.label) {
          ctx.fillStyle = "#ec4899"; // pink for label anchor nodes
          ctx.shadowBlur = 10;
          ctx.shadowColor = "#ec4899";
        } else if (opacity > 0.6) {
          ctx.fillStyle = "#06b6d4"; // Cyan for front node particles
          ctx.shadowBlur = 0;
        } else {
          ctx.fillStyle = "#3b82f6"; // Blue for background node particles
          ctx.shadowBlur = 0;
        }

        ctx.fill();
        ctx.shadowBlur = 0; // reset shadow

        // Render floating network labels/nodes
        if (node.label && opacity > 0.6) {
          ctx.fillStyle = "rgba(255, 255, 255, 0.9)";
          ctx.font = "8px JetBrains Mono, monospace";
          ctx.fillText(`[${node.label}]`, px + 6, py + 3);
          
          // Small network connector tick
          ctx.beginPath();
          ctx.moveTo(px, py);
          ctx.lineTo(px + 4, py);
          ctx.strokeStyle = "rgba(236,72,153,0.5)";
          ctx.stroke();
        }
      });

      animationFrame = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrame);
    };
  }, []);

  const timelineEvents: TimelineEvent[] = [
    {
      year: "2023",
      title: "Agency Grounding",
      description: "Founded with one simple, clear goal: replace sluggish legacy corporate marketing models with hyper-fast viral distribution algorithms.",
    },
    {
      year: "2024",
      title: "The 10M View Mark",
      description: "Developed proprietary short form viral hooks, expanding operations to manage 150+ international business profiles seamlessly.",
    },
    {
      year: "2025",
      title: "Automation Fusion",
      description: "Integrated full-stack developer modules, automated lead-acquisition funnels, and precision web tools to bulletproof client conversions.",
    },
    {
      year: "2026",
      title: "Growth X 3.0",
      description: "Scaling into a pre-eminent network growth, digital consulting, and automated social management node delivering pure ROI globally.",
    }
  ];

  return (
    <section id="about" className="relative py-24 bg-transparent overflow-hidden">
      {/* Visual background lines */}
      <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:24px_24px] opacity-15 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Globe Animation on Left */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center relative">
            <div className="absolute -inset-4 rounded-full bg-gradient-to-tr from-cyan-500/10 to-purple-500/10 blur-[80px] pointer-events-none" />
            
            {/* Globe container tag */}
            <div className="w-full max-w-[340px] sm:max-w-[400px] aspect-square rounded-full border border-white/10 bg-white/5 backdrop-blur-xl relative flex items-center justify-center p-4 shadow-2xl">
              <canvas
                ref={canvasRef}
                className="w-full h-full relative z-10"
                style={{ imageRendering: "auto" }}
              />

              {/* Wireframe border text markings */}
              <div className="absolute top-4 left-1/2 -translate-x-1/2 text-[8px] font-mono tracking-[0.3em] font-black uppercase text-cyan-400">
                // CONSTANT GLOBAL SPHERE
              </div>
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-[8px] font-mono tracking-[0.3em] font-black uppercase text-purple-400">
                ROI GENERATOR V3
              </div>
            </div>

            {/* Glowing System Specs Cards */}
            <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 px-4 py-2 bg-white/5 border border-white/10 rounded-2xl flex items-center gap-3 shadow-xl backdrop-blur-xl">
              <span className="flex h-2.5 w-2.5 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500" />
              </span>
              <span className="text-xs font-mono font-medium text-gray-300 whitespace-nowrap">
                Network Latency: <span className="text-green-400">0.02ms</span>
              </span>
            </div>
          </div>

          {/* Text and Timeline Content on Right */}
          <div className="lg:col-span-7 text-left flex flex-col gap-6">
            <div>
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#06b6d4]">
                🧬 Who We Are
              </span>
              <h2 className="text-3xl sm:text-5xl font-display font-black text-white mt-2 leading-none uppercase">
                GROWTH X SYSTEM
              </h2>
            </div>

            {/* Crucial requested text quote */}
            <p className="text-base sm:text-xl text-gray-200 leading-relaxed font-light italic border-l-2 border-cyan-400 pl-4 py-1">
              "We help brands, creators, influencers, startups and businesses grow online through social media management, digital marketing, website development, branding and powerful growth solutions."
            </p>

            <p className="text-gray-400 text-sm leading-relaxed max-w-2xl">
              By combining high-conversion digital assets with deep social media intelligence, we provide businesses with a highly optimized customer engine that functions completely online. We do not rest on default models; we innovate at the exact speed of algorithm updates.
            </p>

            {/* Interactive Timeline section */}
            <div className="mt-6 pt-6 border-t border-white/5">
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-cyan-400 block mb-6">
                🚀 Agency Evolution Timeline
              </span>

              {/* Horizontal / Vertical Timeline list */}
              <div className="grid grid-cols-1 sm:grid-cols-4 gap-3">
                {timelineEvents.map((event, index) => {
                  const isActive = activeTimelineStep === index;
                  return (
                    <div
                      key={event.year}
                      onClick={() => setActiveTimelineStep(index)}
                      className={`p-4 rounded-2xl border transition-all duration-300 cursor-pointer text-left relative overflow-hidden flex flex-col justify-between ${
                        isActive
                          ? "bg-gradient-to-tr from-purple-950/40 to-cyan-950/15 border-cyan-500/50 shadow-lg shadow-purple-500/5"
                          : "bg-white/5 border-white/10 hover:bg-white/10"
                      }`}
                    >
                      <div>
                        <div className="flex items-center justify-between">
                          <span className={`text-base font-display font-black ${isActive ? "text-cyan-300" : "text-gray-400"}`}>
                            {event.year}
                          </span>
                          {isActive && <Flame className="w-4 h-4 text-pink-500 animate-pulse" />}
                        </div>
                        <h4 className="text-xs sm:text-sm font-display font-bold text-white mt-1 leading-tight">
                          {event.title}
                        </h4>
                      </div>

                      {/* Active indicator bar */}
                      <div className={`w-full h-1 rounded-full mt-3 transition-colors duration-500 ${isActive ? "bg-gradient-to-r from-purple-500 to-cyan-400" : "bg-gray-800"}`} />
                    </div>
                  );
                })}
              </div>

              {/* Active timeline detailed pane with AnimatePresence */}
              <div className="mt-4 p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl shadow-inner text-left">
                <span className="text-[9px] font-mono text-purple-400 font-bold uppercase tracking-widest">
                  Milestone Details [Year {timelineEvents[activeTimelineStep].year}]
                </span>
                <p className="text-xs sm:text-sm text-gray-300 mt-2 font-light leading-relaxed">
                  {timelineEvents[activeTimelineStep].description}
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
