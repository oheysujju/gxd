import { useState } from "react";
import { motion } from "motion/react";
import { Check, Flame, Star, ShieldCheck, Zap } from "lucide-react";
import { PricingPlan } from "../types";

export default function Pricing() {
  const [billingPeriod, setBillingPeriod] = useState<"monthly" | "yearly">("monthly");

  const plans: PricingPlan[] = [
    {
      id: "starter",
      name: "Starter",
      price: billingPeriod === "monthly" ? "$299" : "$239",
      period: "/mo",
      description: "Ideal for individual creators, freelancers, and small startups needing immediate baseline social visibility.",
      features: [
        "1 Social Media Profile Management",
        "12 High-Quality Custom Posts/mo",
        "Basic Content & Copy Planning",
        "Standard Graphic Designing",
        "WhatsApp Broadcast Guidance",
        "Monthly PDF Metrics Reports"
      ],
      popular: false,
      gradient: "from-blue-500/20 to-transparent",
    },
    {
      id: "pro",
      name: "Pro Growth",
      price: billingPeriod === "monthly" ? "$599" : "$479",
      period: "/mo",
      description: "The sweet spot for expanding brands, local businesses, and influencers seeking massive content output.",
      features: [
        "3 Social Media Profiles Managed",
        "24 High-Retaining Graphics & Carousels",
        "4 Reel/Short Edited Videos (4K)",
        "Advanced Hashtag & Trend Scaling",
        "Targeted Paid Growth Starter Pack",
        "Weekly System Health Audits"
      ],
      popular: true,
      gradient: "from-purple-500/20 to-transparent",
    },
    {
      id: "business",
      name: "Business Tier",
      price: billingPeriod === "monthly" ? "$999" : "$799",
      period: "/mo",
      description: "Fully optimized for professional e-commerce stores, active startups, and high-recruitment networkers.",
      features: [
        "5 Social Media Profiles Managed",
        "Unlimited Custom Post Artwork",
        "12 Cinematic Edited Video Reels/mo",
        "1 Custom Interactive Landing Page/mo",
        "Google & Facebook Ads Configuration",
        "24/7 VIP Communication Sync"
      ],
      popular: false,
      gradient: "from-cyan-500/20 to-transparent",
    },
    {
      id: "premium",
      name: "Premium Ultra",
      price: billingPeriod === "monthly" ? "$1,499" : "$1,199",
      period: "/mo",
      description: "Complete hands-off enterprise solution. Overhauls public authority, viral scaling, custom coding, and ROI.",
      features: [
        "All Social Profiles Managed (Sovereign)",
        "Full Content Crew & Copywriting Engine",
        "24 Advanced Cinematic Videos (Reels/TikTok)",
        "Premium Complete Business Website",
        "Massive Dedicated Paid Engagement Boost",
        "1-on-1 Elite Scaling Consulting"
      ],
      popular: false,
      gradient: "from-pink-500/20 to-transparent",
    }
  ];

  return (
    <section id="pricing" className="relative py-24 bg-transparent scale-100 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.03),transparent_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Title and Billing Toggle */}
        <div className="flex flex-col items-center mb-16 text-center">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#06b6d4]">
            // Flexible Subscriptions
          </span>
          <h2 className="text-3xl sm:text-5xl font-display font-black text-white mt-2 leading-none uppercase">
            STRATEGIC PRICING
          </h2>
          <p className="text-gray-400 mt-4 max-w-xl text-sm sm:text-base">
            Select an operational scaling plan and secure your brand's digital acceleration immediate.
          </p>

          {/* Billing Toggle Slider */}
          <div className="flex items-center gap-4 mt-8 bg-white/5 p-1 rounded-full border border-white/10 backdrop-blur-sm">
            <button
              onClick={() => setBillingPeriod("monthly")}
              className={`px-4 py-2 rounded-full text-xs font-mono font-bold uppercase tracking-wider transition-all cursor-pointer ${
                billingPeriod === "monthly"
                  ? "bg-gradient-to-r from-purple-600 to-blue-500 text-white shadow-md shadow-purple-900/40"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              Monthly Term
            </button>
            <button
              onClick={() => setBillingPeriod("yearly")}
              className={`px-4 py-2 rounded-full text-xs font-mono font-bold uppercase tracking-wider transition-all cursor-pointer relative ${
                billingPeriod === "yearly"
                  ? "bg-gradient-to-r from-purple-600 to-blue-500 text-white shadow-md shadow-purple-900/40"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              Annual Billing
              {/* Floating Discount Tag */}
              <span className="absolute -top-7 -right-8 bg-cyan-400 text-gray-950 text-[8px] font-mono font-black py-0.5 px-1.5 rounded-full uppercase tracking-wider animate-bounce">
                -20% ROI Bonus
              </span>
            </button>
          </div>
        </div>

        {/* Pricing Matrix */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 items-stretch">
          {plans.map((plan) => {
            return (
              <div
                key={plan.id}
                className={`rounded-3xl p-6 bg-white/5 border backdrop-blur-xl flex flex-col justify-between relative transition-all duration-500 ${
                  plan.popular
                    ? "border-purple-500/50 shadow-2xl shadow-purple-950/40 scale-100 xl:scale-[1.03] z-10"
                    : "border-white/10 hover:border-cyan-400/40 hover:-translate-y-1"
                }`}
                style={{
                  contentVisibility: "auto",
                }}
              >
                {/* Visual Popular Tag & Glowing accents */}
                <div className={`absolute inset-0 rounded-3xl bg-gradient-to-b ${plan.gradient} opacity-20 pointer-events-none`} />

                {plan.popular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-3.5 py-1 bg-gradient-to-r from-pink-500 via-purple-600 to-cyan-400 rounded-full flex items-center gap-1.5 shadow-lg shadow-purple-900/40 text-[9px] font-mono font-black text-white uppercase tracking-widest leading-none">
                    <Flame className="w-3 h-3 fill-white" />
                    RECOMMENDED SYSTEM
                  </div>
                )}

                <div>
                  {/* Plan Identification */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono font-bold uppercase tracking-widest text-gray-400">
                      [{plan.name}]
                    </span>
                    {plan.popular ? (
                      <Star className="w-4 h-4 text-purple-400 fill-purple-400" />
                    ) : plan.id === "premium" ? (
                      <ShieldCheck className="w-4 h-4 text-pink-400" />
                    ) : (
                      <Zap className="w-4 h-4 text-cyan-400" />
                    )}
                  </div>

                  {/* Price Header */}
                  <div className="flex items-baseline gap-1 mt-4">
                    <span className="text-4xl sm:text-5xl font-display font-black text-white tracking-tight">
                      {plan.price}
                    </span>
                    <span className="text-gray-400 font-mono text-xs">
                      {plan.period}
                    </span>
                  </div>

                  <p className="text-gray-400 text-xs mt-3 leading-relaxed font-light min-h-12">
                    {plan.description}
                  </p>

                  <div className="mt-6 pt-6 border-t border-white/5">
                    <span className="text-[9px] font-mono font-bold uppercase tracking-widest text-cyan-400 block mb-4">
                      PACK ADVANTAGES:
                    </span>

                    <ul className="flex flex-col gap-3">
                      {plan.features.map((feat, i) => (
                        <li key={i} className="flex items-start gap-2.5 text-xs text-gray-300">
                          <Check className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                          <span className="leading-snug">{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Glow Call-To-Action CTA button */}
                <div className="mt-8 pt-6 border-t border-white/5">
                  <a
                    href="#contact"
                    className={`w-full py-3 px-4 rounded-xl font-display text-xs font-bold uppercase tracking-widest text-center block transition-all relative overflow-hidden cursor-pointer ${
                      plan.popular
                        ? "bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-500 text-white shadow-xl shadow-purple-600/30 hover:scale-105 active:scale-95 duration-300"
                        : "bg-white/5 border border-white/10 hover:bg-white/10 hover:border-cyan-500/50 text-gray-300 hover:text-white duration-300"
                    }`}
                  >
                    DEPLOY THIS PACK
                  </a>
                </div>

              </div>
            );
          })}
        </div>

        {/* Customized Custom Quote Anchor */}
        <div className="mt-16 text-center max-w-2xl mx-auto p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl shadow-2xl">
          <span className="text-[10px] uppercase font-mono font-bold text-gray-400 tracking-widest">
            Enterprise Scale Requirements?
          </span>
          <p className="text-xs sm:text-sm text-gray-300 mt-2 font-light">
            We offer bespoke scaling parameters for multinational brands, high-tier creators, and automated network networks. <a href="#contact" className="text-cyan-400 font-bold hover:underline">Get a Custom Quote</a>.
          </p>
        </div>

      </div>
    </section>
  );
}
