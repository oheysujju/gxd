import { useState, FormEvent } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Send, Instagram, ArrowRight, MessageSquare, MapPin, Mail, Phone, Calendar, Receipt, Sparkles } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    businessName: "",
    serviceNeeded: "Social Media Management",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [receiptNumber, setReceiptNumber] = useState("");

  const services = [
    "Social Media Management",
    "Website Development",
    "Graphic Designing",
    "Video Editing & Content Creation",
    "Digital Marketing",
    "Network Marketing Solutions",
    "Paid Growth Services",
    "Branding & Business Consulting"
  ];

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone) return;

    // Generate a futuristic transaction/receipt number
    const rand = Math.floor(100000 + Math.random() * 900000);
    setReceiptNumber(`GXD-NODE-${rand}`);
    setSubmitted(true);
  };

  return (
    <section id="contact" className="relative py-24 bg-transparent scale-100 overflow-hidden">
      {/* Glow blobs */}
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-600/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-cyan-600/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Direct Address / Shortcut side panel */}
          <div className="lg:col-span-5 text-left flex flex-col gap-8">
            <div>
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#06b6d4]">
                // SECURE TERMINAL TRANSMISSION
              </span>
              <h2 className="text-3xl sm:text-5xl font-display font-black text-white mt-2 leading-none uppercase">
                CONNECT TO GXD
              </h2>
              <p className="text-gray-400 mt-4 text-xs sm:text-sm leading-relaxed font-light">
                Connect with our core optimization nodes instantly. Initiate high-retention social campaigns, full-stack builds, or elite marketing consulting pipelines now.
              </p>
            </div>

            {/* Quick specifications listing details */}
            <div className="flex flex-col gap-4">
              <a
                href="mailto:hello@growthxdigital.com"
                className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md hover:border-cyan-500/30 hover:bg-white/10 transition-all group"
              >
                <div className="p-3.5 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 group-hover:bg-cyan-500 group-hover:text-black duration-300">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="truncate">
                  <span className="block text-[9px] font-mono font-bold text-gray-500 uppercase tracking-widest">
                    SECURE MAILING NODE
                  </span>
                  <span className="block text-sm font-sans font-bold text-white group-hover:text-cyan-300 transition-colors">
                    hello@growthxdigital.com
                  </span>
                </div>
              </a>

              <a
                href="tel:+15550192831"
                className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md hover:border-purple-500/30 hover:bg-white/10 transition-all group"
              >
                <div className="p-3.5 rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-400 group-hover:bg-purple-500 group-hover:text-black duration-300">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="block text-[9px] font-mono font-bold text-gray-500 uppercase tracking-widest">
                    ACTIVE CALL DOCK
                  </span>
                  <span className="block text-sm font-sans font-bold text-white group-hover:text-purple-300 transition-colors">
                    +1 (555) 019-2831
                  </span>
                </div>
              </a>

              <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">
                <div className="p-3.5 rounded-xl bg-pink-500/10 border border-pink-500/20 text-pink-400">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="block text-[9px] font-mono font-bold text-gray-500 uppercase tracking-widest">
                    HQ GRID COORDINATES
                  </span>
                  <span className="block text-sm font-sans font-bold text-white">
                    Cyber Tower III, Metropolis West
                  </span>
                </div>
              </div>
            </div>

            {/* Alternative Chat launchers: WhatsApp and Instagram */}
            <div className="p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">
              <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-cyan-400 block mb-4">
                🚀 Instant Micro-Channels:
              </span>
              <div className="grid grid-cols-2 gap-3">
                <a
                  href="https://wa.me/15550192831"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 p-3.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20 hover:bg-emerald-500 hover:text-black text-emerald-400 hover:scale-105 duration-300 cursor-pointer font-display text-xs font-bold uppercase tracking-wider"
                >
                  <MessageSquare className="w-4 h-4 fill-current" />
                  WhatsApp Us
                </a>

                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 p-3.5 rounded-xl bg-pink-500/10 border border-pink-500/20 hover:bg-pink-500 hover:text-black text-pink-400 hover:scale-105 duration-300 cursor-pointer font-display text-xs font-bold uppercase tracking-wider"
                >
                  <Instagram className="w-4 h-4" />
                  Instagram DM
                </a>
              </div>
            </div>

            {/* Embedded dark aesthetic map placeholder */}
            <div className="w-full h-44 rounded-2xl border border-white/10 relative overflow-hidden bg-gray-900 shadow-inner">
              <div
                className="absolute inset-0 bg-cover bg-center grayscale opacity-15"
                style={{
                  backgroundImage: "url('https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=600')",
                }}
              />
              {/* Overlay wireframe map graphics */}
              <div className="absolute inset-0 bg-radial-gradient from-transparent to-black pointer-events-none" />
              
              <div className="absolute inset-0 p-4 flex flex-col justify-between">
                <span className="text-[9px] font-mono font-bold uppercase text-purple-400 tracking-wider">
                  🎯 Geo Location Core Active
                </span>

                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 bg-cyan-400 rounded-full animate-ping" />
                  <span className="text-[10px] font-mono text-white">
                    Latitude: 37.7749° N, Longitude: 122.4194° W
                  </span>
                </div>
              </div>
            </div>

          </div>

          {/* Form Side Panel */}
          <div className="lg:col-span-7 w-full">
            <AnimatePresence mode="wait">
              {!submitted ? (
                <motion.div
                  key="contact-form-pane"
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  className="p-6 sm:p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl shadow-2xl relative"
                  style={{
                    contentVisibility: "auto",
                  }}
                >
                  {/* Subtle decorative scanline */}
                  <div className="absolute top-0 right-1/4 w-32 h-[1px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent animate-pulse" />

                  <h3 className="text-xl sm:text-2xl font-display font-black text-white text-left uppercase mb-6 tracking-wide">
                    INITIALIZE CONSULTATION REQUEST
                  </h3>

                  <form onSubmit={handleSubmit} className="flex flex-col gap-4 text-left">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Name input */}
                      <div className="flex flex-col gap-1.5">
                        <label className="text-[10px] font-mono text-gray-400 font-bold uppercase tracking-wider">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="Your Name"
                          className="px-4 py-3 bg-white/5 border border-white/10 backdrop-blur-md rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 text-sm font-sans transition-colors"
                        />
                      </div>

                      {/* Email input */}
                      <div className="flex flex-col gap-1.5">
                        <label className="text-[10px] font-mono text-gray-400 font-bold uppercase tracking-wider">
                          Secure Email *
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="you@example.com"
                          className="px-4 py-3 bg-white/5 border border-white/10 backdrop-blur-md rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 text-sm font-sans transition-colors"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Phone Input */}
                      <div className="flex flex-col gap-1.5">
                        <label className="text-[10px] font-mono text-gray-400 font-bold uppercase tracking-wider">
                          Phone / Whatsapp Hotline *
                        </label>
                        <input
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="(555) 000-0000"
                          className="px-4 py-3 bg-white/5 border border-white/10 backdrop-blur-md rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 text-sm font-sans transition-colors"
                        />
                      </div>

                      {/* Business Name Input */}
                      <div className="flex flex-col gap-1.5">
                        <label className="text-[10px] font-mono text-gray-400 font-bold uppercase tracking-wider">
                          Business / Agency Name
                        </label>
                        <input
                          type="text"
                          value={formData.businessName}
                          onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                          placeholder="Entity Title"
                          className="px-4 py-3 bg-white/5 border border-white/10 backdrop-blur-md rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 text-sm font-sans transition-colors"
                        />
                      </div>
                    </div>

                    {/* Service needed drop down */}
                    <div className="flex flex-col gap-1.5">
                      <label className="text-[10px] font-mono text-gray-400 font-bold uppercase tracking-wider">
                        Required Service Node
                      </label>
                    <select
                      value={formData.serviceNeeded}
                      onChange={(e) => setFormData({ ...formData, serviceNeeded: e.target.value })}
                      className="px-3 py-3 bg-white/5 border border-white/10 backdrop-blur-md rounded-xl text-white focus:outline-none focus:border-cyan-400 text-sm font-sans transition-colors"
                    >
                        {services.map((service) => (
                          <option key={service} value={service} className="bg-gray-950">
                            {service}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Message input */}
                    <div className="flex flex-col gap-1.5">
                      <label className="text-[10px] font-mono text-gray-400 font-bold uppercase tracking-wider">
                        Transmission Message / Goal parameters
                      </label>
                      <textarea
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="State your timeline, existing followers count, or technical requirements..."
                      className="px-4 py-3 bg-white/5 border border-white/10 backdrop-blur-md rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 text-sm font-sans resize-none transition-colors"
                      />
                    </div>

                    {/* Futuristic Disclaimer */}
                    <div className="p-3 rounded-lg bg-white/5 text-[10px] text-gray-400 font-mono flex items-center gap-2.5 my-1 leading-normal">
                      <Calendar className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                      <span>Transmission is secure and fully audited. Estimated node processing speed: ~2 hours.</span>
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      className="w-full py-4.5 bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-500 rounded-xl font-display font-black text-sm tracking-widest uppercase text-white shadow-xl shadow-purple-600/35 hover:scale-[1.02] active:scale-95 duration-300 flex items-center justify-center gap-2.5 cursor-pointer"
                    >
                      Initialize System Consultation
                      <Send className="w-4 h-4" />
                    </button>
                  </form>
                </motion.div>
              ) : (
                <motion.div
                  key="form-success-pane"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  className="p-8 rounded-3xl bg-gray-900 border border-emerald-500/30 backdrop-blur-xl shadow-xl space-y-6"
                >
                  {/* Digital Receipt view */}
                  <div className="flex items-center gap-3 text-emerald-400 font-mono text-left">
                    <Receipt className="w-8 h-8 animate-pulse" />
                    <div>
                      <span className="block text-xs uppercase font-bold text-emerald-400">
                        TRANSMISSION DELIVERED UNIFIED ✓
                      </span>
                      <span className="block text-[9px] text-gray-400 font-bold uppercase tracking-widest mt-0.5">
                        ID: {receiptNumber}
                      </span>
                    </div>
                  </div>

                  <hr className="border-white/10" />

                  <div className="text-left space-y-4 font-mono text-xs text-gray-300">
                    <span className="text-[10px] text-cyan-400 font-bold block bg-cyan-500/5 py-1 px-2.5 border border-cyan-500/20 rounded">
                      SPECIFICATION RECEIPT CODES:
                    </span>

                    <div className="grid grid-cols-2 gap-4 py-2 border-b border-white/5 last:border-0">
                      <div>
                        <span className="text-gray-500 block uppercase text-[10px]">Recipient Node:</span>
                        <span className="text-white block font-bold mt-0.5">{formData.name}</span>
                      </div>
                      <div>
                        <span className="text-gray-500 block uppercase text-[10px]">Client Hotline:</span>
                        <span className="text-white block font-bold mt-0.5">{formData.phone}</span>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4 py-2 border-b border-white/5 last:border-0">
                      <div>
                        <span className="text-gray-500 block uppercase text-[10px]">Secure Email:</span>
                        <span className="text-white block font-bold mt-0.5 truncate">{formData.email}</span>
                      </div>
                      <div>
                        <span className="text-gray-500 block uppercase text-[10px]">Selected Package:</span>
                        <span className="text-cyan-400 block font-bold mt-0.5 font-display text-[10px]">{formData.serviceNeeded}</span>
                      </div>
                    </div>

                    {formData.businessName && (
                      <div className="py-2 border-b border-white/5 last:border-0">
                        <span className="text-gray-500 block uppercase text-[10px]">Company Entity:</span>
                        <span className="text-white block font-bold mt-0.5">{formData.businessName}</span>
                      </div>
                    )}

                    {formData.message && (
                      <div className="bg-black/50 p-3.5 border border-white/5 rounded-xl">
                        <span className="text-gray-500 block uppercase text-[9px] mb-1">AUDIT BRIEF:</span>
                        <p className="text-gray-300 font-sans leading-relaxed text-xs">
                          {formData.message}
                        </p>
                      </div>
                    )}
                  </div>

                  <div className="flex flex-col sm:flex-row gap-2 mt-4">
                    <a
                      href="https://wa.me/15550192831"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 py-3 px-4 bg-emerald-500/10 border border-emerald-500/25 text-emerald-400 rounded-xl font-display text-xs font-bold uppercase tracking-wider text-center flex items-center justify-center gap-2"
                    >
                      <Sparkles className="w-4 h-4" />
                      Priority WhatsApp Acceleration
                    </a>
                    
                    <button
                      onClick={() => setSubmitted(false)}
                      className="px-6 py-3 bg-white/5 border border-white/10 hover:border-cyan-500/50 hover:bg-white/10 text-gray-400 hover:text-white rounded-xl font-display text-xs font-bold uppercase tracking-wider transition-all"
                    >
                      Reset Form Node
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
}
