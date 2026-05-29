import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Users,
  Globe2,
  Palette,
  Video,
  TrendingUp,
  Network,
  Rocket,
  CheckCircle2,
  ChevronRight,
  Sparkles,
  HelpCircle
} from "lucide-react";
import { ServiceItem } from "../types";

export default function Services() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [hoveredCardId, setHoveredCardId] = useState<string | null>(null);
  const [activePlaygroundType, setActivePlaygroundType] = useState<string>("influencer");

  const services: ServiceItem[] = [
    {
      id: "smm",
      title: "Social Media Management",
      description: "Scale your presence, automate posting, engage organically, and capture your niche audience with highly targeted distribution strategy.",
      iconName: "smm",
      gradient: "from-pink-500 via-purple-500 to-indigo-600",
      badge: "Viral Priority",
      subservices: [
        "Instagram Management",
        "Facebook Management",
        "WhatsApp Marketing Automation",
        "Targeted Content Planning",
        "Organic Page Growth Hacks"
      ]
    },
    {
      id: "webdev",
      title: "Website Development",
      description: "We build ultra-fast, visually striking websites optimized for bulletproof security, rich interactivity, and maximum client conversions.",
      iconName: "webdev",
      gradient: "from-cyan-500 via-blue-500 to-indigo-600",
      badge: "Next-Gen Stack",
      subservices: [
        "Business Websites & SEO",
        "Portfolio Websites",
        "Ecommerce Platforms",
        "Landing Pages with Form Capture"
      ]
    },
    {
      id: "design",
      title: "Graphic Designing",
      description: "Capture authority with award-winning creative, modern minimal layouts, custom display typography, and cohesive brand identities.",
      iconName: "design",
      gradient: "from-purple-500 via-pink-500 to-red-500",
      badge: "Premium Assets",
      subservices: [
        "Logo Design & Branding Kit",
        "High-Conversion Poster Design",
        "Premium Banner Design",
        "YouTube Thumbnail Optimization",
        "Social Media Post Creation"
      ]
    },
    {
      id: "video",
      title: "Video Editing & Production",
      description: "Stop-scrolling short form edits, TikTok/Reels optimization, interactive sound design, cinematic color correction, and full pre-production scripts.",
      iconName: "video",
      gradient: "from-rose-500 via-orange-500 to-amber-500",
      badge: "4K High Retention",
      subservices: [
        "Reels & TikTok Short Form Edits",
        "Cinematic Product Videos",
        "Dynamic Thumbnail Graphics",
        "Advanced Vlog Post-Production",
        "Audio Enhancements & SFX"
      ]
    },
    {
      id: "marketing",
      title: "Digital Marketing",
      description: "Data-backed performance marketing, paid ads scaling, precise retargeting campaigns, conversion pixel tuning, and monthly ROI reports.",
      iconName: "marketing",
      gradient: "from-emerald-500 via-teal-500 to-cyan-500",
      badge: "ROI Maximizer",
      subservices: [
        "Google & Facebook Ads Tuning",
        "Audience Retargeting Framework",
        "Keywords Optimization & SEO",
        "Full Funnel Blueprinting"
      ]
    },
    {
      id: "network",
      title: "Network Marketing Growth",
      description: "Modernized recruiting and team expansion frameworks, customized funnels, duplicate onboarding pipelines, and massive social lead-gen.",
      iconName: "network",
      gradient: "from-blue-500 via-cyan-500 to-emerald-500",
      badge: "Exclusive",
      subservices: [
        "Lead Capture Pipelines",
        "Automated Presentation Funnels",
        "Social Recruits Masterclass",
        "Team Duplicate Toolkits"
      ]
    },
    {
      id: "paid_growth",
      title: "Paid Growth Services",
      description: "Accelerate your credibility and social proof immediately. High retention follower growth, likes, active comments, safe watch hours, and views booster.",
      iconName: "paid",
      gradient: "from-amber-500 via-purple-600 to-cyan-500",
      badge: "Instant Proof",
      subservices: [
        "Instagram Real Followers & Likes",
        "YouTube Views & Watch Hours Boost",
        "Active Channel Subscribers",
        "Engagement Rates Amplifier"
      ]
    },
    {
      id: "branding",
      title: "Branding & Growth Consulting",
      description: "Direct elite 1-on-1 strategy sessions. Unlocks premium positioning, market authority development, price scaling, and robust operational roadmap.",
      iconName: "consulting",
      gradient: "from-purple-600 via-blue-600 to-indigo-800",
      badge: "Elite Access",
      subservices: [
        "Market Positioning Strategy",
        "Brand Identity Manual",
        "Value Proposition Refinement",
        "Scaling Operation Audits"
      ]
    }
  ];

  // Helper to map icons
  const getIcon = (type: string) => {
    switch (type) {
      case "smm":
        return <Users className="w-6 h-6 text-pink-400" />;
      case "webdev":
        return <Globe2 className="w-6 h-6 text-cyan-400" />;
      case "design":
        return <Palette className="w-6 h-6 text-purple-400" />;
      case "video":
        return <Video className="w-6 h-6 text-rose-400" />;
      case "marketing":
        return <TrendingUp className="w-6 h-6 text-emerald-400" />;
      case "network":
        return <Network className="w-6 h-6 text-blue-400" />;
      case "paid":
        return <Rocket className="w-6 h-6 text-amber-400" />;
      default:
        return <Sparkles className="w-6 h-6 text-indigo-400" />;
    }
  };

  const categories = [
    { id: "all", label: "Full Arsenal" },
    { id: "social", label: "Social & Viral" },
    { id: "tech", label: "Tech & Branding" },
    { id: "growth", label: "Turbo Growth" }
  ];

  const filteredServices = services.filter((s) => {
    if (selectedCategory === "all") return true;
    if (selectedCategory === "social") return ["smm", "video", "design"].includes(s.id);
    if (selectedCategory === "tech") return ["webdev", "branding", "marketing"].includes(s.id);
    if (selectedCategory === "growth") return ["network", "paid_growth"].includes(s.id);
    return true;
  });

  const sandboxOptions = {
    influencer: {
      title: "Creator Accelerator Pack",
      recommendation: "Paid Growth Services + SMM + Video Editing & Content Creation",
      timeline: "Est. Viral Spike: 15-20 Days",
      benefits: ["High retention short form editing for algorithm push", "Instant credibility with safely boosted follower base", "Automated content calendar setup"]
    },
    startup: {
      title: "Business Authority Stack",
      recommendation: "Website Development + Digital Marketing + Branding Kit",
      timeline: "Est. Leads Capture: 7-10 Days",
      benefits: ["Ultra-fast speed optimized interactive website", "Facebook & Google pixel tracking with active ads campaign", "Complete vector logo & identity kit"]
    },
    networker: {
      title: "Network Synergy Engine",
      recommendation: "Network Marketing Growth + SMM + Branding Consulting",
      timeline: "Est. Duplicate Onboarding: Instant",
      benefits: ["High-converting, mobile-first lead capture funnels", "Automated webinar and WhatsApp duplicate modules", "High-authority social proof templates"]
    }
  };

  return (
    <section id="services" className="relative py-24 bg-transparent scale-100 overflow-hidden">
      {/* Background Atmosphere */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-cyan-600/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-12 right-0 w-80 h-80 bg-purple-600/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Title Container */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="text-left">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-cyan-400">
              ⚡ What We Deliver
            </span>
            <h2 className="text-3xl sm:text-5xl font-display font-black text-white mt-2 uppercase">
              POWERFUL SOLUTIONS
            </h2>
            <p className="text-gray-400 mt-3 max-w-xl text-sm sm:text-base">
              A comprehensive operational ecosystem of high-converting marketing, visual production, and digital expansion tools.
            </p>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2 bg-white/5 p-1 rounded-2xl border border-white/10 backdrop-blur-sm self-start">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-mono uppercase tracking-wider font-bold transition-all ${
                  selectedCategory === cat.id
                    ? "bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-md shadow-purple-900/30"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredServices.map((service) => {
            const isHovered = hoveredCardId === service.id;
            return (
              <motion.div
                key={service.id}
                layout
                whileHover={{ y: -6 }}
                onMouseEnter={() => setHoveredCardId(service.id)}
                onMouseLeave={() => setHoveredCardId(null)}
                className="group relative rounded-3xl p-6 bg-white/5 border border-white/10 backdrop-blur-xl transition-all duration-300 flex flex-col justify-between overflow-hidden"
                style={{
                  boxShadow: isHovered 
                    ? "0 20px 40px rgba(0,0,0,0.4)" 
                    : "0 10px 20px rgba(0,0,0,0.2)",
                  transform: isHovered
                    ? "perspective(800px) rotateX(4deg) rotateY(2deg)"
                    : "none",
                  contentVisibility: "auto",
                }}
              >
                {/* Neon background light card */}
                <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${service.gradient} opacity-5 group-hover:opacity-15 blur-2xl transition-opacity duration-500`} />
                <div className={`absolute -inset-px bg-gradient-to-r ${service.gradient} opacity-0 group-hover:opacity-10 rounded-3xl transition-opacity duration-300 pointer-events-none`} />

                {/* Card Header */}
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 rounded-2xl bg-white/5 border border-white/10 group-hover:bg-white/10 group-hover:border-white/20 transition-all">
                      {getIcon(service.iconName)}
                    </div>
                    {service.badge && (
                      <span className="text-[10px] font-mono font-bold px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-cyan-300">
                        {service.badge}
                      </span>
                    )}
                  </div>

                  <h3 className="text-lg sm:text-xl font-display font-black tracking-wide text-white group-hover:text-cyan-300 transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-gray-400 text-xs mt-3 leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Subservice expansion list */}
                <div className="mt-6 pt-4 border-t border-white/5">
                  <span className="text-[9px] font-mono font-bold text-gray-500 uppercase tracking-widest block mb-2.5">
                    Subservices & Features
                  </span>
                  <ul className="flex flex-col gap-1.5">
                    {service.subservices.map((sub, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs text-gray-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 mt-0.5 flex-shrink-0" />
                        <span className="leading-snug">{sub}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Interactive Action Indicators below */}
                <div className="mt-6 flex items-center gap-1 text-xs font-mono text-purple-400 font-bold group-hover:text-cyan-300 transition-colors cursor-pointer self-start">
                  <span>Explore Pack Details</span>
                  <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Dynamic Consultation Custom Sandbox Matchmaker */}
        <div className="mt-20 p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-96 h-96 bg-purple-600/5 rounded-full blur-[100px] pointer-events-none" />
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5 text-left">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-xs font-mono font-bold text-cyan-300">
                <HelpCircle className="w-3.5 h-3.5" />
                Growth Matchmaker
              </span>
              <h3 className="text-2xl sm:text-3xl font-display font-black text-white mt-4 uppercase">
                Which Growth Pack Fits You Best?
              </h3>
              <p className="text-gray-400 text-sm mt-3 leading-relaxed font-light">
                Click your agency category to deploy high-converting service combos configured by Growth X Digital algorithms.
              </p>

              <div className="flex flex-col gap-2 mt-6">
                {[
                  { id: "influencer", label: "Influencer & Content Creator" },
                  { id: "startup", label: "Enterprise Startup / SaaS / Brand" },
                  { id: "networker", label: "Network Marketer / Recruiter" }
                ].map((option) => (
                  <button
                    key={option.id}
                    onClick={() => setActivePlaygroundType(option.id)}
                    className={`py-3 px-4 rounded-xl text-left text-xs font-display font-black uppercase text-white tracking-widest transition-all cursor-pointer ${
                      activePlaygroundType === option.id
                        ? "bg-cyan-500/15 border border-cyan-500/40 text-cyan-300 shadow-lg shadow-cyan-500/5"
                        : "bg-white/5 border border-white/10 hover:bg-white/10"
                    }`}
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="lg:col-span-7">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activePlaygroundType}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="p-6 rounded-2xl bg-black/40 border border-white/10 flex flex-col gap-4 text-left backdrop-blur-2xl"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono uppercase text-gray-400">
                      Recommendation Node
                    </span>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-bold">
                      HIGH DEPLOYMENT RATE
                    </span>
                  </div>

                  <h4 className="text-xl sm:text-2xl font-display font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-300">
                    {sandboxOptions[activePlaygroundType as keyof typeof sandboxOptions].title}
                  </h4>

                  <div className="p-3.5 rounded-xl bg-white/5 border border-white/15">
                    <span className="block text-[10px] font-mono text-gray-400 font-medium leading-none">
                      SERVICES PACK TO INITIALIZE:
                    </span>
                    <span className="block text-sm font-sans font-bold text-white mt-1">
                      {sandboxOptions[activePlaygroundType as keyof typeof sandboxOptions].recommendation}
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 py-1">
                    <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-center">
                      <span className="block text-[8px] font-mono text-gray-400 font-bold uppercase leading-none">
                        TIMEFRAME
                      </span>
                      <span className="block text-xs font-mono font-bold text-purple-400 mt-1">
                        {sandboxOptions[activePlaygroundType as keyof typeof sandboxOptions].timeline}
                      </span>
                    </div>

                    <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-center">
                      <span className="block text-[8px] font-mono text-gray-400 font-bold uppercase leading-none">
                        INTEGRATION
                      </span>
                      <span className="block text-xs font-mono font-bold text-cyan-400 mt-1">
                        Auto API Connected
                      </span>
                    </div>

                    <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-center">
                      <span className="block text-[8px] font-mono text-gray-400 font-bold uppercase leading-none">
                        ROI MULTIPLIER
                      </span>
                      <span className="block text-xs font-mono font-bold text-amber-400 mt-1">
                        Up to 3.5X
                      </span>
                    </div>
                  </div>

                  <div className="mt-2 border-t border-white/5 pt-3">
                    <span className="text-[10px] uppercase font-mono font-bold text-gray-500 tracking-wider">
                      Strategic Advantages Include:
                    </span>
                    <ul className="flex flex-col gap-1.5 mt-2">
                      {sandboxOptions[activePlaygroundType as keyof typeof sandboxOptions].benefits.map((b, i) => (
                        <li key={i} className="flex items-center gap-2.5 text-xs text-gray-300">
                          <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
