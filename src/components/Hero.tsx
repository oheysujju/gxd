import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { Instagram, Send, Youtube, Facebook, Globe, MessageSquareCode, Users, Trophy, Play, CheckCircle2 } from "lucide-react";

interface HeroProps {
  onNavigation: (sectionId: string) => void;
}

export default function Hero({ onNavigation }: HeroProps) {
  // Stats counter values state (animates upwards on mount)
  const [clientsCount, setClientsCount] = useState(0);
  const [viewsCount, setViewsCount] = useState(0);
  const [campaignsCount, setCampaignsCount] = useState(0);
  const [satisfactionCount, setSatisfactionCount] = useState(0);

  useEffect(() => {
    const duration = 1500; // ms
    const steps = 60;
    const interval = duration / steps;
    let step = 0;

    const timer = setInterval(() => {
      step++;
      setClientsCount(Math.min(Math.round((500 / steps) * step), 500));
      setViewsCount(Math.min(Math.round((5 / steps) * step * 10) / 10, 5));
      setCampaignsCount(Math.min(Math.round((1000 / steps) * step), 1000));
      setSatisfactionCount(Math.min(Math.round((98 / steps) * step), 98));

      if (step >= steps) clearInterval(timer);
    }, interval);

    return () => clearInterval(timer);
  }, []);

  const floatingSocials = [
    {
      name: "Instagram",
      icon: <Instagram className="w-6 h-6 text-pink-400 group-hover:scale-110 duration-300" />,
      color: "from-pink-500/20 via-rose-500/10 to-transparent",
      borderColor: "border-pink-500/30 group-hover:border-pink-500/80",
      glowColor: "shadow-pink-500/20",
      delay: 0,
      offset: "top-10 left-12",
      badge: "150K+ Reach/Mo",
    },
    {
      name: "WhatsApp",
      icon: <MessageSquareCode className="w-6 h-6 text-emerald-400 group-hover:scale-110 duration-300" />,
      color: "from-emerald-500/20 via-teal-500/10 to-transparent",
      borderColor: "border-emerald-500/30 group-hover:border-emerald-500/80",
      glowColor: "shadow-emerald-500/20",
      delay: 1.5,
      offset: "top-1/4 right-8",
      badge: "Instant Support",
    },
    {
      name: "YouTube",
      icon: <Youtube className="w-6 h-6 text-red-400 group-hover:scale-110 duration-300" />,
      color: "from-red-600/20 via-orange-500/10 to-transparent",
      borderColor: "border-red-500/30 group-hover:border-red-500/80",
      glowColor: "shadow-red-500/20",
      delay: 0.8,
      offset: "bottom-12 left-8",
      badge: "Viral Content",
    },
    {
      name: "Telegram",
      icon: <Send className="w-6 h-6 text-sky-400 group-hover:scale-110 duration-300" />,
      color: "from-sky-500/20 via-blue-500/10 to-transparent",
      borderColor: "border-sky-500/30 group-hover:border-sky-500/80",
      glowColor: "shadow-sky-500/20",
      delay: 2.2,
      offset: "bottom-1/5 right-12",
      badge: "Global Channels",
    },
    {
      name: "Facebook",
      icon: <Facebook className="w-6 h-6 text-blue-500 group-hover:scale-110 duration-300" />,
      color: "from-blue-600/20 via-indigo-500/10 to-transparent",
      borderColor: "border-blue-500/30 group-hover:border-blue-500/80",
      glowColor: "shadow-blue-500/20",
      delay: 0.4,
      offset: "top-1/2 left-1/2 -translate-x-12",
      badge: "Lead Machine",
    },
    {
      name: "Website Portal",
      icon: <Globe className="w-6 h-6 text-cyan-400 group-hover:scale-110 duration-300" />,
      color: "from-cyan-500/20 via-blue-600/10 to-transparent",
      borderColor: "border-cyan-500/30 group-hover:border-cyan-500/80",
      glowColor: "shadow-cyan-500/25",
      delay: 1.8,
      offset: "bottom-4 right-1/3",
      badge: "High Conversion",
    },
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen pt-32 pb-20 flex items-center justify-center overflow-hidden"
    >
      {/* Absolute Atmospheric elements */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Hero text panel */}
          <div className="lg:col-span-7 text-center lg:text-left flex flex-col gap-6 items-center lg:items-start">
            
            {/* Launch Banner tag */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-block px-3 py-1 bg-white/10 border border-white/20 rounded-full text-[10px] uppercase tracking-[0.2em] font-bold text-cyan-300 leading-none"
            >
              Next-Gen Growth Agency 3.0
            </motion.div>

            {/* Glowing H1 Title */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="flex flex-col gap-2"
            >
              <h1 className="text-5xl sm:text-7xl xl:text-8xl font-display font-black tracking-tight leading-[0.9] text-white">
                SCALE <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-cyan-400 to-blue-500">FASTER.</span><br />
                GROW <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-purple-400">SMARTER.</span>
              </h1>
              <p className="mt-4 text-white/50 text-lg sm:text-xl font-sans max-w-md font-light leading-relaxed">
                Dominate social media with high-performance digital strategies and premium responsive fullstack tools.
              </p>
            </motion.div>

            {/* Agency description short bullet highlights */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-left w-full max-w-xl my-2"
            >
              {[
                "Targeted Content Algorithms",
                "Data-Backed Viral Optimization",
                "Conversion-First Fullstack Tech",
                "Custom Growth Consulting & ROI"
              ].map((point, index) => (
                <div key={index} className="flex items-center gap-2 text-sm text-gray-300">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                  <span>{point}</span>
                </div>
              ))}
            </motion.div>

            {/* CTA panel buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto mt-4"
            >
              <button
                onClick={() => onNavigation("contact")}
                className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl font-bold shadow-lg shadow-purple-500/20 hover:scale-105 transition-transform duration-300 cursor-pointer text-center text-white"
              >
                Start Growing
              </button>

              <button
                onClick={() => onNavigation("services")}
                className="w-full sm:w-auto px-8 py-4 bg-white/5 border border-white/10 rounded-xl font-bold hover:bg-white/10 transition-colors duration-300 cursor-pointer text-center text-white"
              >
                View Services
              </button>

              <a
                href="https://wa.me/15550192831"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-6 py-4 rounded-xl bg-emerald-500/10 border border-emerald-500/25 hover:bg-emerald-500/20 text-emerald-400 hover:text-emerald-300 text-center font-display text-sm font-black uppercase tracking-wider duration-300 flex items-center justify-center gap-2"
              >
                WhatsApp Us
              </a>
            </motion.div>

            {/* Interactive stats strip counters - Styled like themed HTML Stats Row */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="w-full max-w-xl grid grid-cols-2 md:grid-cols-4 gap-8 mt-12 pt-8 border-t border-white/5"
            >
              <div>
                <div className="text-2xl sm:text-3xl font-display font-black text-white leading-none">
                  {clientsCount}+
                </div>
                <div className="text-[10px] text-white/40 uppercase tracking-widest mt-2 font-mono">
                  Partners
                </div>
              </div>

              <div>
                <div className="text-2xl sm:text-3xl font-display font-black text-cyan-400 leading-none">
                  {viewsCount}M+
                </div>
                <div className="text-[10px] text-white/40 uppercase tracking-widest mt-2 font-mono">
                  Views
                </div>
              </div>

              <div>
                <div className="text-2xl sm:text-3xl font-display font-black text-purple-400 leading-none">
                  {campaignsCount}+
                </div>
                <div className="text-[10px] text-white/40 uppercase tracking-widest mt-2 font-mono">
                  Campaigns
                </div>
              </div>

              <div>
                <div className="text-2xl sm:text-3xl font-display font-black text-pink-400 leading-none">
                  {satisfactionCount}%
                </div>
                <div className="text-[10px] text-white/40 uppercase tracking-widest mt-2 font-mono">
                  Retention
                </div>
              </div>
            </motion.div>
          </div>

          {/* Social icons 3D floating right canvas panel */}
          <div className="lg:col-span-5 relative h-[450px] sm:h-[550px] w-full flex items-center justify-center">
            
            {/* Orbiting concentric background loops */}
            <div className="absolute w-[360px] h-[360px] sm:w-[450px] sm:h-[450px] rounded-full border border-dashed border-cyan-500/10 animate-[spin_100s_linear_infinite] pointer-events-none" />
            <div className="absolute w-[280px] h-[280px] sm:w-[320px] sm:h-[320px] rounded-full border border-white/5 animate-[spin_60s_linear_infinite_reverse] pointer-events-none" />
            
            {/* Center abstract glowing core */}
            <div className="absolute w-24 h-24 rounded-full bg-gradient-to-tr from-purple-600/30 to-blue-600/30 blur-xl animate-pulse" />
            <div className="absolute w-16 h-16 rounded-full border border-cyan-400/30 animate-ping" />

            {/* Digital Grid Core utilizing Frosted Card theme components */}
            <div className="absolute w-44 h-44 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl flex flex-col items-center justify-center text-center p-4 shadow-2xl transform -rotate-6 group pointer-events-none">
              <span className="text-[10px] font-mono tracking-widest text-[#a855f7] font-bold uppercase leading-none">
                Core Node
              </span>
              <span className="text-xl font-display font-black text-white mt-1.5 leading-none">
                SOCIAL
              </span>
              <span className="text-2xl font-display font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 leading-none">
                GROWTH
              </span>
              <div className="mt-3 flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-[9px] font-mono text-cyan-300">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping" />
                OPTIMIZING...
              </div>
            </div>

            {/* Generated Floating Platform Cards with 3D tilts and gorgeous Frosted Glass filters */}
            {floatingSocials.map((social) => (
              <motion.div
                key={social.name}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.3 + social.delay }}
                className={`absolute ${social.offset} group cursor-pointer`}
              >
                <div
                  className="animate-float px-3.5 py-2.5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl shadow-lg group-hover:scale-110 duration-500 relative flex items-center gap-3 w-40 overflow-hidden"
                  style={{
                    boxShadow: "0 10px 30px rgba(0,0,0,0.5)",
                    transform: "perspective(1000px) rotateX(10deg) rotateY(-5deg)",
                  }}
                >
                  {/* Subtle inner background gradient matching brand */}
                  <div className={`absolute inset-0 bg-gradient-to-t ${social.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                  
                  <div className="relative z-10 p-1.5 rounded-xl bg-white/5 border border-white/10 flex-shrink-0 group-hover:border-white/20 transition-all">
                    {social.icon}
                  </div>

                  <div className="relative z-10 flex flex-col truncate">
                    <span className="text-xs font-display font-black tracking-wide text-white">
                      {social.name}
                    </span>
                    <span className="text-[9px] font-mono text-gray-400 tracking-normal">
                      {social.badge}
                    </span>
                  </div>

                  {/* Laser line effect at bottom */}
                  <div className="absolute inset-x-0 bottom-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                </div>
              </motion.div>
            ))}

            {/* Embedded glowing labels inside Hero visual right-hand */}
            <div className="absolute top-10 right-4 p-2.5 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md pointer-events-none text-left">
              <span className="block text-[8px] font-mono text-[#a855f7] font-bold uppercase tracking-wider">
                Active System Status
              </span>
              <span className="block text-xs font-mono font-medium text-gray-300">
                100% Fully Persistent
              </span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
