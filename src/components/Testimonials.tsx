import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Quote, Star, ArrowUpRight, ArrowLeftRight, CheckCircle } from "lucide-react";
import { TestimonialItem } from "../types";

export default function Testimonials() {
  const [filterType, setFilterType] = useState<"all" | "creators" | "commerce" | "startups">("all");

  const testimonials: TestimonialItem[] = [
    {
      id: "t1",
      name: "Marcus Aurelius",
      role: "Founder & Creative Director",
      company: "Rethink Clothing Co.",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150",
      rating: 5,
      content: "Growth X Digital overran our expectations. Our organic follower base went from 2K to 150K in less than 3 months, while our e-commerce online store sales rose by 320%. Safe, automated, and hyper-diligent.",
    },
    {
      id: "t2",
      name: "Sonia Patel",
      role: "YouTube Tech Reviewer",
      company: "TechNexus YouTube Node",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150",
      rating: 5,
      content: "The YouTube thumbnail optimization and Reels scripting they provided completely changed our CTR metrics. We went from a stagnant 3% to a booming 11% CTR, securing a 400K subscribers node multiplier. Exceptional craftsmanship!",
    },
    {
      id: "t3",
      name: "Derrick Jenkins",
      role: "Elite Network Field Lead",
      company: "Synergy BioTech Networks",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150",
      rating: 5,
      content: "Building duplicate lead-capture funnels has always been massive friction. Growth X Digital built a modernized automated landing pipeline that recuits and replicates with zero manual hours. Our team rose by 500 partners in 40 days.",
    },
    {
      id: "t4",
      name: "Aria Sterling",
      role: "Chief Marketing Officer",
      company: "AeroSpace Smart-Tired",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=150",
      rating: 5,
      content: "Their fullstack landing page engineering and Google PPC campaign configuration resulted in a massive surge of qualified client leads. Extremely fast communication and premium aesthetic styling. 10/10 recommend.",
    }
  ];

  const filterMap = {
    all: testimonials,
    creators: [testimonials[1]],
    commerce: [testimonials[0]],
    startups: [testimonials[2], testimonials[3]]
  };

  const currentTestimonials = filterMap[filterType];

  return (
    <section id="testimonials" className="relative py-24 bg-transparent scale-100 overflow-hidden">
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-purple-600/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        {/* Section Header */}
        <div className="flex flex-col items-center mb-16">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#06b6d4]">
            // Verified Clients Opinions
          </span>
          <h2 className="text-3xl sm:text-5xl font-display font-black text-white mt-2 leading-none uppercase">
            RESONATING METRICS
          </h2>
          <p className="text-gray-400 mt-4 max-w-xl text-sm sm:text-base">
            Check real-world growth validation from content creators, global agencies, e-commerce stores, and active lead networks.
          </p>

          {/* Testimonial Filter Tags */}
          <div className="flex flex-wrap items-center justify-center gap-1.5 mt-8 bg-white/5 p-1 rounded-2xl border border-white/10 backdrop-blur-sm">
            {[
              { id: "all", label: "Full Sphere" },
              { id: "creators", label: "Creators" },
              { id: "commerce", label: "E-Commerce" },
              { id: "startups", label: "Startups & Services" }
            ].map((tag) => (
              <button
                key={tag.id}
                onClick={() => setFilterType(tag.id as keyof typeof filterMap)}
                className={`px-4 py-2 rounded-xl text-xs font-mono font-bold uppercase transition-all cursor-pointer ${
                  filterType === tag.id
                    ? "bg-gradient-to-r from-purple-600 to-blue-500 text-white"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                {tag.label}
              </button>
            ))}
          </div>
        </div>

        {/* Testimonials Grid representation */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto items-stretch">
          <AnimatePresence mode="popLayout">
            {currentTestimonials.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="p-6 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl relative flex flex-col justify-between text-left group overflow-hidden shadow-2xl"
                style={{
                  transform: "perspective(800px) rotateX(2deg)",
                  contentVisibility: "auto",
                }}
              >
                {/* Visual quote accent indicator */}
                <div className="absolute top-6 right-6 text-gray-800 pointer-events-none group-hover:text-purple-900 group-hover:scale-105 duration-500">
                  <Quote className="w-12 h-12 rotate-180 opacity-20" />
                </div>

                <div>
                  {/* Star Rating stack */}
                  <div className="flex items-center gap-1 mb-4">
                    {Array.from({ length: item.rating }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
                    ))}
                  </div>

                  {/* Testimonial body content */}
                  <p className="text-gray-300 text-sm sm:text-base leading-relaxed font-light mb-6">
                    "{item.content}"
                  </p>
                </div>

                {/* Profile Header Block */}
                <div className="flex items-center gap-3.5 pt-4 border-t border-white/5 mt-auto">
                  <div className="w-11 h-11 rounded-full overflow-hidden border border-white/20 relative flex-shrink-0">
                    <img
                      src={item.avatar}
                      alt={item.name}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>

                  <div className="truncate text-left">
                    <span className="block text-sm font-display font-bold text-white uppercase tracking-wider leading-none">
                      {item.name}
                    </span>
                    <span className="block text-[10px] sm:text-xs font-mono text-gray-400 mt-1 truncate">
                      {item.role}, <span className="text-cyan-400 font-bold">{item.company}</span>
                    </span>
                  </div>

                  <span className="ml-auto p-1.5 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-[10px] font-mono text-emerald-400 font-black tracking-wider uppercase inline-flex items-center gap-1">
                    <CheckCircle className="w-3 h-3" />
                    Verified
                  </span>
                </div>

              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Global agency proof indices */}
        <div className="mt-16 pt-8 border-t border-white/5 max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-around gap-6">
          <div className="text-center sm:text-left">
            <span className="block text-2xl font-display font-black text-white leading-none">
              4.9 / 5.0
            </span>
            <span className="block text-[10px] font-mono text-gray-500 uppercase tracking-widest mt-1">
              AVERAGE TRUST INDEX
            </span>
          </div>

          <div className="text-center sm:text-left">
            <span className="block text-2xl font-display font-black text-cyan-400 leading-none">
              98.2%
            </span>
            <span className="block text-[10px] font-mono text-gray-500 uppercase tracking-widest mt-1">
              SURGING NET PROMOTER VALUE
            </span>
          </div>

          <div className="text-center sm:text-left">
            <span className="block text-2xl font-display font-black text-purple-400 leading-none">
              100%
            </span>
            <span className="block text-[10px] font-mono text-gray-500 uppercase tracking-widest mt-1">
              VERIFIED ROI DELIVERIES
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}
