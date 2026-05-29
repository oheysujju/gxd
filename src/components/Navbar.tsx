import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, Phone, Instagram, Send, Mail, Play } from "lucide-react";

interface NavbarProps {
  activeSection: string;
}

export default function Navbar({ activeSection }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "services", label: "Services" },
    { id: "portfolio", label: "Portfolio" },
    { id: "pricing", label: "Pricing" },
    { id: "testimonials", label: "Testimonials" },
    { id: "contact", label: "Contact" },
  ];

  const quickActions = [
    {
      id: "phone",
      icon: <Phone className="w-4 h-4" />,
      label: "+1 (555) 019-2831",
      href: "tel:+15550192831",
      color: "hover:text-cyan-400 hover:border-cyan-400/50 hover:bg-cyan-500/10",
      glowColor: "rgba(6, 182, 212, 0.4)",
    },
    {
      id: "instagram",
      icon: <Instagram className="w-4 h-4" />,
      label: "@GrowthX.Digital",
      href: "https://instagram.com",
      color: "hover:text-pink-400 hover:border-pink-400/50 hover:bg-pink-500/10",
      glowColor: "rgba(236, 72, 153, 0.4)",
    },
    {
      id: "whatsapp",
      icon: <Send className="w-4 h-4" />,
      label: "WhatsApp Chat",
      href: "https://wa.me/15550192831",
      color: "hover:text-emerald-400 hover:border-emerald-400/50 hover:bg-emerald-500/10",
      glowColor: "rgba(16, 185, 129, 0.4)",
    },
    {
      id: "email",
      icon: <Mail className="w-4 h-4" />,
      label: "hello@growthxdigital.com",
      href: "mailto:hello@growthxdigital.com",
      color: "hover:text-purple-400 hover:border-purple-400/50 hover:bg-purple-500/10",
      glowColor: "rgba(168, 85, 247, 0.4)",
    },
  ];

  const scrollToSection = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // height of sticky navbar
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
    <header
      id="main-sticky-header"
      className={`fixed top-0 left-0 w-full z-40 transition-all duration-500 ${
        scrolled
          ? "py-3 bg-black/20 backdrop-blur-xl border-b border-white/10 shadow-lg shadow-black/40"
          : "py-6 bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("home");
              }}
              className="flex items-center gap-2 group cursor-pointer"
            >
              <div className="relative w-8 h-8 bg-gradient-to-tr from-purple-500 to-cyan-400 rounded-lg flex items-center justify-center font-bold text-black text-lg transition-transform group-hover:scale-105">
                <span className="relative z-10 font-sans font-black">X</span>
              </div>
              <div className="flex flex-col">
                <span className="text-white font-sans font-black text-sm tracking-tight leading-none uppercase">
                  GROWTH <span className="text-cyan-400">X</span> DIGITAL
                </span>
                <span className="text-[8px] uppercase tracking-[0.3em] text-gray-400 font-mono font-bold leading-none mt-0.5">
                  Next-Gen Agency
                </span>
              </div>
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 bg-white/5 p-1 rounded-full border border-white/10 backdrop-blur-md">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`relative px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-300 ${
                  activeSection === item.id
                    ? "text-cyan-300"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                {activeSection === item.id && (
                  <motion.div
                    layoutId="activeNavBG"
                    className="absolute inset-0 bg-white/10 rounded-full border border-cyan-400/20"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{item.label}</span>
              </button>
            ))}
          </nav>

          {/* Floating Actions for Desktop */}
          <div className="hidden lg:flex items-center gap-3">
            <div className="flex items-center gap-2 bg-white/5 p-1 rounded-xl border border-white/10 backdrop-blur-md">
              {quickActions.map((action) => (
                <div key={action.id} className="relative group">
                  <a
                    href={action.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-9 h-9 rounded-lg border border-white/10 bg-black/20 text-gray-400 flex items-center justify-center transition-all duration-300 relative ${action.color}`}
                    style={{
                      contentVisibility: "auto",
                    }}
                  >
                    {action.icon}
                  </a>
                  {/* Floating glass tooltip */}
                  <div className="absolute top-12 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none scale-90 group-hover:scale-100 z-50">
                    <div className="bg-gray-950/95 border border-white/10 text-white text-xs font-mono py-1.5 px-3 rounded-md shadow-xl whitespace-nowrap">
                      {action.label}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <button
              onClick={() => scrollToSection("contact")}
              className="px-5 py-2 bg-white text-black font-bold text-xs rounded-full uppercase tracking-tighter hover:bg-cyan-400 hover:scale-105 transition-all active:scale-95 duration-300 cursor-pointer"
            >
              Start Growing
            </button>
          </div>

          {/* Mobile Hamburguer Menu Button */}
          <div className="flex items-center gap-3 lg:hidden">
            {/* Quick action bar */}
            <div className="flex gap-1.5 bg-gray-900/50 p-1 rounded-lg border border-white/5">
              {quickActions.slice(2, 4).map((action) => (
                <a
                  key={action.id}
                  href={action.href}
                  className={`w-8 h-8 rounded-md border border-white/10 bg-gray-950 text-gray-400 flex items-center justify-center transition-all duration-300 ${action.color}`}
                >
                  {action.icon}
                </a>
              ))}
            </div>

            <button
              id="mobile-menu-trigger"
              onClick={() => setIsOpen(!isOpen)}
              className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-drawer-overlay"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-gray-950/98 border-t border-b border-white/10 backdrop-blur-xl py-6 px-4 shadow-2xl lg:hidden z-50 flex flex-col gap-6"
          >
            {/* Navigation links */}
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`py-3 px-4 rounded-xl text-left font-display font-black uppercase text-sm tracking-wider flex items-center justify-between group ${
                    activeSection === item.id
                      ? "bg-gradient-to-r from-purple-500/15 to-cyan-500/5 text-cyan-300 border border-cyan-500/20"
                      : "text-gray-400 hover:text-white hover:bg-white/5"
                  }`}
                >
                  <span>{item.label}</span>
                  <span className="text-[10px] font-mono font-bold opacity-40 group-hover:opacity-100 transition-opacity">
                    [ 0{navItems.indexOf(item) + 1} ]
                  </span>
                </button>
              ))}
            </div>

            {/* Quick Contacts details on Mobile */}
            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 flex flex-col gap-3">
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-cyan-400">
                Direct Terminal Hotlines
              </span>
              <div className="grid grid-cols-2 gap-2 mt-1">
                {quickActions.map((action) => (
                  <a
                    key={action.id}
                    href={action.href}
                    className="flex items-center gap-2.5 p-2 rounded-lg bg-gray-950 border border-white/15 text-gray-300 hover:text-white text-xs hover:border-cyan-500/50 transition-colors"
                  >
                    <span className="text-cyan-400">{action.icon}</span>
                    <span className="font-mono text-[10px] truncate">
                      {action.id.toUpperCase()}
                    </span>
                  </a>
                ))}
              </div>
            </div>

            <button
              onClick={() => scrollToSection("contact")}
              className="w-full py-4 bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-500 rounded-xl font-display font-black tracking-widest uppercase text-white text-center shadow-lg hover:shadow-cyan-500/30 transition-all leading-none"
            >
              Initialize Direct Growth Consultation
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
