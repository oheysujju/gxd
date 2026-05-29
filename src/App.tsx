import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { BrainCircuit, Play, ArrowUp, Send, Instagram, Mail, Phone, CheckCircle } from "lucide-react";

// Component imports
import ParticleBackground from "./components/ParticleBackground";
import MouseGlow from "./components/MouseGlow";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import Pricing from "./components/Pricing";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";

export default function App() {
  const [loading, setLoading] = useState(true);
  const [loadingTextIndex, setLoadingTextIndex] = useState(0);
  const [activeSection, setActiveSection] = useState("home");
  const [showScrollTop, setShowScrollTop] = useState(false);

  const loaderDiagnostics = [
    "BOOTING CLIENT NODE...",
    "STABILIZING 3D SPACIAL PARTICLE MATRIX...",
    "TUNING VIRAL CONTENT ALGORITHMS...",
    "SYNCHRONIZING SECURE GATEWAYS...",
    "GROWTH X DIGITAL COMPILATION COMPLETE ✓"
  ];

  // Cycles loading diagnosic phrases
  useEffect(() => {
    if (!loading) return;
    const interval = setInterval(() => {
      setLoadingTextIndex((prev) => (prev < loaderDiagnostics.length - 1 ? prev + 1 : prev));
    }, 400);

    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => {
      clearInterval(interval);
      clearTimeout(timer);
    };
  }, [loading]);

  // Track window scroll to toggle Back to Top toggle
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Tracks active scrolling elements to notify Nav Link indicators
  useEffect(() => {
    const sections = ["home", "about", "services", "portfolio", "pricing", "testimonials", "contact"];
    const observerOptions = {
      root: null,
      rootMargin: "-25% 0px -55% 0px", // triggers when element is roughly in middle of viewport
      threshold: 0,
    };

    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => {
      sections.forEach((id) => {
        const el = document.getElementById(id);
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <div id="growthx-root-shell" className="relative text-gray-100 bg-[#020205] min-h-screen overflow-hidden selection:bg-cyan-500/25 selection:text-white">
      
      {/* Background Mesh Gradients from Frosted Glass Theme */}
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-purple-600/20 rounded-full blur-[120px] pointer-events-none z-0" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-cyan-600/20 rounded-full blur-[150px] pointer-events-none z-0" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40%] h-[40%] bg-blue-600/10 rounded-full blur-[100px] pointer-events-none z-0" />

      {/* 3D and Cursor Ambient FX */}
      <ParticleBackground />
      <MouseGlow />

      <AnimatePresence mode="wait">
        {loading ? (
          /* Premium Cyberpunk Loader Screen */
          <motion.div
            key="gxd-system-loader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, y: -40 }}
            transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 bg-[#020205] z-50 flex flex-col items-center justify-center p-6"
          >
            <div className="flex flex-col items-center max-w-md w-full relative">
              
              {/* Radial loading background flare */}
              <div className="absolute w-[220px] h-[220px] bg-purple-600/10 rounded-full blur-[80px]" />

              {/* Glowing spinning visual loop */}
              <div className="relative w-20 h-20 rounded-2xl bg-gradient-to-tr from-purple-500 to-cyan-400 flex items-center justify-center shadow-2xl shadow-purple-950/30 mb-8 animate-pulse">
                <BrainCircuit className="w-10 h-10 text-white animate-spin-slow" />
              </div>

              {/* H1 header loader badge */}
              <h2 className="text-xl sm:text-2xl font-display font-black tracking-[0.25em] text-white uppercase text-center leading-none">
                GROWTH <span className="text-cyan-300">X</span>
              </h2>
              <span className="text-[10px] font-mono text-gray-500 tracking-[0.4em] uppercase font-bold mt-2">
                DIGITAL INC.
              </span>

              {/* Progress diagnostic terminal trackers */}
              <div className="w-full mt-10 p-4 rounded-xl bg-white/5 border border-white/5 font-mono text-xs text-left text-gray-400 min-h-16 relative overflow-hidden">
                <div className="flex items-center gap-2 text-cyan-300 font-bold mb-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping" />
                  [NODE_INIT]:
                </div>
                <div className="text-gray-300 leading-relaxed font-semibold transition-all">
                  {loaderDiagnostics[loadingTextIndex]}
                </div>
                {/* Horizontal digital line progressor */}
                <div className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-purple-500 to-cyan-400 transition-all duration-300" style={{ width: `${((loadingTextIndex + 1) / loaderDiagnostics.length) * 100}%` }} />
              </div>

              <div className="mt-8 text-[8px] font-mono text-gray-600 uppercase tracking-widest text-center">
                System Ver: 3.1.2 // Secure Core Online
              </div>
            </div>
          </motion.div>
        ) : (
          /* Complete Main Functional Layout */
          <motion.div
            key="gxd-main-viewport"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col relative"
          >
            {/* Nav Menu */}
            <Navbar activeSection={activeSection} />

            {/* Core Segment Blocks */}
            <main className="flex-1 relative z-10">
              <Hero onNavigation={scrollToSection} />
              <About />
              <Services />
              <Portfolio />
              <Pricing />
              <Testimonials />
              <Contact />
            </main>

            {/* Premium Futuristic Footer */}
            <footer className="relative z-10 bg-black/40 border-t border-white/10 backdrop-blur-2xl pt-16 pb-8 text-left">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-12">
                  
                  {/* Brand Column */}
                  <div className="md:col-span-4 flex flex-col gap-4">
                    <div className="flex items-center gap-2 group cursor-pointer">
                      <div className="relative w-10 h-10 rounded-xl bg-gradient-to-tr from-purple-500 to-cyan-400 flex items-center justify-center font-bold text-black text-lg tracking-wider overflow-hidden">
                        <span className="relative z-10 font-display">G</span>
                      </div>
                      <div>
                        <span className="text-white font-display font-black text-lg tracking-wider block leading-none">
                          GROWTH <span className="text-cyan-300">X</span>
                        </span>
                        <span className="text-[10px] uppercase tracking-[0.25em] text-gray-400 font-mono font-bold block mt-0.5">
                          DIGITAL
                        </span>
                      </div>
                    </div>

                    <p className="text-gray-400 text-xs leading-relaxed max-w-sm font-light mt-2">
                      Leverage advanced content algorithms, beautiful responsive web architecture, and instant credibility workflows to outpace your niche immediately.
                    </p>

                    {/* Social networks strip */}
                    <div className="flex items-center gap-2.5 mt-2">
                      {[
                        { icon: <Instagram className="w-4 h-4" />, href: "https://instagram.com" },
                        { icon: <Send className="w-4 h-4" />, href: "https://wa.me/15550192831" },
                        { icon: <Mail className="w-4 h-4" />, href: "mailto:hello@growthxdigital.com" }
                      ].map((item, id) => (
                        <a
                          key={id}
                          href={item.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-8 h-8 rounded-lg border border-white/10 bg-white/5 flex items-center justify-center text-gray-400 hover:text-white hover:border-cyan-400 hover:bg-cyan-500/10 transition-colors"
                        >
                          {item.icon}
                        </a>
                      ))}
                    </div>
                  </div>

                  {/* Sitemap Navigation Links */}
                  <div className="md:col-span-2 flex flex-col gap-3">
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-purple-400">
                      Sitemap Node
                    </span>
                    <ul className="flex flex-col gap-2 text-xs font-mono">
                      {["Home", "About", "Services", "Portfolio"].map((page) => (
                        <li key={page}>
                          <a
                            href={`#${page.toLowerCase()}`}
                            onClick={(e) => {
                              e.preventDefault();
                              scrollToSection(page.toLowerCase());
                            }}
                            className="text-gray-400 hover:text-cyan-300 transition-colors"
                          >
                            // {page}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Operational details metrics column utilizing frosted styling */}
                  <div className="md:col-span-2 flex flex-col gap-3">
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-cyan-300">
                      Sub-Ecosystem
                    </span>
                    <ul className="flex flex-col gap-2 text-xs font-mono">
                      {["Pricing", "Testimonials", "Contact"].map((page) => (
                        <li key={page}>
                          <a
                            href={`#${page.toLowerCase()}`}
                            onClick={(e) => {
                              e.preventDefault();
                              scrollToSection(page.toLowerCase());
                            }}
                            className="text-gray-400 hover:text-cyan-300 transition-colors"
                          >
                            // {page}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Operational status utilizing Frosted Glass theme components */}
                  <div className="md:col-span-4 p-5 rounded-2xl bg-white/5 border border-white/10 flex flex-col gap-3 backdrop-blur-xl">
                    <div className="flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-cyan-400 animate-ping" />
                      <span className="text-[10px] font-mono font-bold uppercase text-gray-300">
                        Operational Status: ONLINE
                      </span>
                    </div>

                    <div className="space-y-1">
                      <div className="flex items-center justify-between text-xs text-gray-400">
                        <span>Success Metric Verified:</span>
                        <span className="text-cyan-300 font-mono">100% Core</span>
                      </div>
                      <div className="flex items-center justify-between text-xs text-gray-400">
                        <span>Response Speed:</span>
                        <span className="text-purple-400 font-mono">~2 Hrs Express</span>
                      </div>
                    </div>

                    <div className="mt-2 text-[9px] font-mono text-gray-500 text-center uppercase tracking-widest border-t border-white/5 pt-3">
                      Data feeds safely protected via TLS Node
                    </div>
                  </div>

                </div>

                {/* Final bottom copyright strip */}
                <hr className="border-white/10" />
                
                <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <p className="text-[10px] font-mono text-gray-400">
                    © 2026 Growth X Digital. All privileges reserved. Powered by Antigravity Engines.
                  </p>

                  <div className="flex items-center gap-4 text-[10px] font-mono text-gray-500">
                    <a href="#about" className="hover:text-white">Security Audits</a>
                    <span>//</span>
                    <a href="#services" className="hover:text-white">Algorithm Policies</a>
                  </div>
                </div>

              </div>
            </footer>

            {/* Back to Top Quick Scroll Anchor block */}
            <AnimatePresence>
              {showScrollTop && (
                <motion.button
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  onClick={() => scrollToSection("home")}
                  className="fixed bottom-6 right-6 w-11 h-11 rounded-full bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-500 text-white flex items-center justify-center shadow-xl shadow-purple-900/30 z-40 hover:scale-110 duration-300 active:scale-95 border border-white/20 cursor-pointer"
                >
                  <ArrowUp className="w-5 h-5" />
                </motion.button>
              )}
            </AnimatePresence>

          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
