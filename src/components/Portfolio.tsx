import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronLeft, ChevronRight, CheckCircle, Smartphone, ArrowRight, Eye, Sparkles } from "lucide-react";
import { PortfolioProject } from "../types";

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [currentIndex, setCurrentIndex] = useState(0);

  const projects: PortfolioProject[] = [
    {
      id: "proj1",
      title: "Solantis Crypto Portal",
      category: "Website Designs",
      description: "Interactive Web3 landing page with high-fidelity glassmorphism, floating nodes, and standard form captures. Retuned conversion metrics by 210%.",
      image: "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?auto=format&fit=crop&q=80&w=800",
      stats: {
        label: "Conversion Rate",
        before: "1.2%",
        after: "4.8%",
      },
    },
    {
      id: "proj2",
      title: "Rebellion Fitness Campaign",
      category: "Social Media Campaigns",
      description: "Complete Reels content takeover. Optimized video hooks, high retention subtitles, and automated WhatsApp onboarding pipelines.",
      image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&q=80&w=800",
      stats: {
        label: "Weekly Views",
        before: "3.5K",
        after: "1.2M",
      },
    },
    {
      id: "proj3",
      title: "Apex Streetwear Branding",
      category: "Branding Projects",
      description: "A complete visual identity overhauling brand assets, typography manuals, package designs, and vector logos for a luxury streetwear conglomerate.",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=800",
      stats: {
        label: "Domain Authority",
        before: "Low Visual",
        after: "High-Tier Brand",
      },
    },
    {
      id: "proj4",
      title: "Tech Alpha Thumbnail System",
      category: "YouTube Thumbnails",
      description: "High-contrast, extreme click-optimized thumbnails with custom visual graphics, eye-level framing, and optimized text size guidelines.",
      image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=800",
      stats: {
        label: "CTR Output",
        before: "3.4%",
        after: "11.6%",
      },
    },
    {
      id: "proj5",
      title: "Zephyr SaaS Platform",
      category: "Website Designs",
      description: "Desktop-first minimal interface built for maximum speed, styled using custom Tailwind layouts, and fitted with continuous scroll animations.",
      image: "https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&q=80&w=800",
      stats: {
        label: "Bounce Rate",
        before: "64%",
        after: "21%",
      },
    },
    {
      id: "proj6",
      title: "Nexus Digital Agency",
      category: "Graphic Designs",
      description: "Custom social media grid design incorporating micro-illustration patterns, glowing elements, and responsive structural layouts.",
      image: "https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?auto=format&fit=crop&q=80&w=800",
      stats: {
        label: "Organic Shares",
        before: "45 / mo",
        after: "3.2K / mo",
      },
    }
  ];

  const categories = [
    { id: "all", label: "Show All" },
    { id: "Website Designs", label: "Website Designs" },
    { id: "Social Media Campaigns", label: "Social Media Campaigns" },
    { id: "Graphic Designs", label: "Graphic Designs" },
    { id: "YouTube Thumbnails", label: "YouTube Thumbnails" },
    { id: "Branding Projects", label: "Branding Projects" }
  ];

  const filteredProjects = projects.filter((p) => {
    if (activeCategory === "all") return true;
    return p.category === activeCategory;
  });

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === filteredProjects.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? filteredProjects.length - 1 : prevIndex - 1
    );
  };

  // Safe guard current index bounds on category shift
  const currentProject = filteredProjects[currentIndex] || filteredProjects[0] || projects[0];

  return (
    <section id="portfolio" className="relative py-24 bg-transparent scale-100 overflow-hidden">
      {/* Ambient backgrounds */}
      <div className="absolute top-1/4 right-1/4 w-80 h-80 bg-blue-600/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        {/* Section Header */}
        <div className="flex flex-col items-center mb-16">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#06b6d4]">
            // Production Archive
          </span>
          <h2 className="text-3xl sm:text-5xl font-display font-black text-white mt-2 leading-none uppercase">
            INTELLIGENT PORTFOLIO
          </h2>
          <p className="text-gray-400 mt-4 max-w-2xl text-sm sm:text-base">
            Explore live digital campaigns, visual assets, high-converting platforms, and brand strategies launched via Growth X Digital.
          </p>

          {/* Filtering Tabs bar */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8 bg-white/5 p-1 rounded-2xl border border-white/10 backdrop-blur-md max-w-4xl">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => {
                  setActiveCategory(cat.id);
                  setCurrentIndex(0);
                }}
                className={`px-4 py-2.5 rounded-xl text-xs font-mono uppercase tracking-wider font-bold transition-all ${
                  activeCategory === cat.id
                    ? "bg-gradient-to-r from-purple-600 to-blue-600 text-white"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Carousel Slide Track */}
        {filteredProjects.length > 0 ? (
          <div className="mt-8 max-w-5xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white/5 border border-white/10 rounded-3xl p-6 sm:p-8 backdrop-blur-xl relative shadow-2xl">
              
              {/* Project Image Panel */}
              <div className="lg:col-span-7 aspect-video sm:aspect-[4/3] lg:aspect-square xl:aspect-[4/3] rounded-2xl overflow-hidden relative group shadow-2xl">
                <img
                  src={currentProject.image}
                  alt={currentProject.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                
                {/* Image Overlay gradients */}
                <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/40 to-transparent" />
                
                <span className="absolute top-4 left-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/80 border border-white/10 text-[10px] font-mono font-bold uppercase text-cyan-400">
                  <Smartphone className="w-3 h-3" />
                  {currentProject.category}
                </span>
              </div>

              {/* Project Details Panel */}
              <div className="lg:col-span-5 text-left flex flex-col justify-between h-full gap-6">
                <div className="flex flex-col gap-4">
                  <div className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-purple-400 uppercase leading-none">
                    <Sparkles className="w-3.5 h-3.5 text-pink-500" />
                    Spotlight Archive [0{currentIndex + 1}]
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-display font-black text-white leading-tight uppercase">
                    {currentProject.title}
                  </h3>

                  <p className="text-gray-300 text-sm leading-relaxed font-light">
                    {currentProject.description}
                  </p>
                </div>

                {/* Before / After growth showcase cards inside detail pane */}
                <div className="p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-cyan-400/10 to-transparent rounded-full blur-xl pointer-events-none" />
                  
                  <span className="text-[9px] font-mono font-bold tracking-widest uppercase text-gray-400 block mb-3">
                    Verified Performance Spike:
                  </span>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-2.5 rounded-xl bg-red-500/5 border border-red-500/10 text-center relative">
                      <span className="block text-[8px] font-mono text-gray-400 font-bold uppercase leading-none">
                        Before Growth X
                      </span>
                      <span className="block text-lg font-mono font-bold text-red-400 mt-1">
                        {currentProject.stats.before}
                      </span>
                    </div>

                    <div className="p-2.5 rounded-xl bg-emerald-500/5 border border-emerald-500/10 text-center relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/10 to-transparent opacity-30 pointer-events-none" />
                      <span className="block text-[8px] font-mono text-cyan-300 font-bold uppercase leading-none">
                        After Growth X
                      </span>
                      <span className="block text-lg font-mono font-bold text-emerald-400 mt-1">
                        {currentProject.stats.after}
                      </span>
                    </div>
                  </div>

                  <div className="mt-3 flex items-center justify-between text-[10px] font-mono text-gray-400 px-1">
                    <span>Performance Matrix:</span>
                    <span className="text-green-400 font-bold">Successfully Verified ✓</span>
                  </div>
                </div>

                {/* Carousel Controls */}
                <div className="flex items-center justify-between mt-4">
                  <div className="flex items-center gap-2">
                    <button
                      onClick={prevSlide}
                      className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-cyan-500 duration-300 cursor-pointer"
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </button>
                    <button
                      onClick={nextSlide}
                      className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-cyan-500 duration-300 cursor-pointer"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </div>

                  <span className="text-xs font-mono font-bold text-gray-500">
                    [ 0{currentIndex + 1} / 0{filteredProjects.length} ]
                  </span>
                </div>

              </div>
            </div>
          </div>
        ) : (
          <div className="p-12 text-center text-gray-400 font-mono">
            No projects found in this node.
          </div>
        )}

        {/* Dynamic Horizontal Quick Highlights strip below */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {[
            { tag: "01", header: "Apple Style UI", text: "Pixel-perfect margins, striking layouts, and custom display fonts." },
            { tag: "02", header: "Tesla Performance", text: "High-speed responses, native React states, and light payloads." },
            { tag: "03", header: "Smart SaaS Core", text: "Designed explicitly for immediate conversion scaling and high organic ROI." }
          ].map((feat) => (
            <div key={feat.tag} className="p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md text-left flex items-start gap-3">
              <span className="font-mono text-xs font-bold text-cyan-400 mt-1">[{feat.tag}]</span>
              <div>
                <h4 className="text-sm font-display font-bold text-white uppercase tracking-wider">{feat.header}</h4>
                <p className="text-gray-400 text-xs mt-1.5 leading-relaxed">{feat.text}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
