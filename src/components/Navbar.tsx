import { useState, useEffect } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  // Scroll Progress Logic
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav 
        className={`fixed top-0 w-full z-50 transition-all duration-500 border-b ${
          isScrolled 
            ? 'bg-prime-black/80 backdrop-blur-xl border-white/5 py-3' 
            : 'bg-transparent border-transparent py-6'
        }`}
      >
        {/* Scroll Progress Bar (Gold Line at bottom) */}
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-[1px] bg-prime-gold origin-left"
          style={{ scaleX }}
        />

        <div className="max-w-[1400px] mx-auto px-6 flex justify-between items-center">
          
          {/* --- 1. BRAND IDENTITY (Left) --- */}
          <a href="#" className="flex items-center gap-4 group relative z-50">
            {/* LOGO */}
            <img 
                src="/logo.png" 
                alt="RSLT Logo" 
                className="h-10 md:h-14 w-auto object-contain transition-transform duration-300 group-hover:scale-105" 
            />
            
            {/* UNIQUE: Live Recording Timer */}
            <div className="hidden md:flex items-center gap-2 border-l border-white/20 pl-4">
               <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
               <div className="flex flex-col">
                  <span className="text-[9px] text-red-500 font-bold tracking-widest leading-none">REC</span>
                  <RecTimer />
               </div>
            </div>
          </a>

          {/* --- 2. NAVIGATION DOCK (Center - Floating) --- */}
          <div className="hidden md:block absolute left-1/2 -translate-x-1/2">
            <div className={`
              flex items-center gap-1 px-2 py-1.5 rounded-full border transition-all duration-500
              ${isScrolled 
                ? 'bg-white/5 border-white/10 shadow-lg backdrop-blur-md' 
                : 'bg-prime-black/20 border-white/5 backdrop-blur-sm'}
            `}>
              <NavLink href="#work" text="WORK" />
              <NavLink href="#about" text="AGENCY" />
              {/* <NavLink href="#pricing" text="PRICING" /> */}
            </div>
          </div>

          {/* --- 3. ACTION & MOBILE (Right) --- */}
          <div className="flex items-center gap-4 relative z-50">
            {/* Desktop Button */}
            <a 
              href="#contact" 
              className="hidden md:flex items-center gap-2 bg-white text-black px-5 py-2.5 rounded-full text-xs font-bold tracking-widest hover:bg-prime-gold transition-all duration-300 hover:scale-105"
            >
              START PROJECT <ArrowUpRight className="w-3 h-3" />
            </a>

            {/* Mobile Hamburger (Custom Animated) */}
            <button 
              className="md:hidden text-white p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <div className="w-8 flex flex-col items-end gap-1.5 group">
                <span className={`h-[2px] bg-white transition-all duration-300 ${mobileMenuOpen ? 'w-8 rotate-45 translate-y-2' : 'w-6'}`} />
                <span className={`h-[2px] bg-prime-gold transition-all duration-300 ${mobileMenuOpen ? 'opacity-0' : 'w-8 group-hover:w-6'}`} />
                <span className={`h-[2px] bg-white transition-all duration-300 ${mobileMenuOpen ? 'w-8 -rotate-45 -translate-y-2' : 'w-4'}`} />
              </div>
            </button>
          </div>
        </div>
      </nav>

      {/* --- MOBILE OVERLAY (Cinematic Reveal) --- */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, clipPath: "circle(0% at 100% 0%)" }}
            animate={{ opacity: 1, clipPath: "circle(150% at 100% 0%)" }}
            exit={{ opacity: 0, clipPath: "circle(0% at 100% 0%)" }}
            transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-40 bg-prime-black flex flex-col justify-center items-center"
          >
            {/* Background Texture */}
            <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />

            <div className="flex flex-col gap-8 text-center z-10">
              <MobileLink href="#work" text="SELECTED WORK" onClick={() => setMobileMenuOpen(false)} index={0} />
              <MobileLink href="#about" text="THE AGENCY" onClick={() => setMobileMenuOpen(false)} index={1} />
              {/* <MobileLink href="#pricing" text="INVESTMENT" onClick={() => setMobileMenuOpen(false)} index={2} /> */}
              <MobileLink href="#contact" text="START PROJECT" onClick={() => setMobileMenuOpen(false)} index={3} />
            </div>
            
            <div className="absolute bottom-12 text-prime-dim text-xs font-mono tracking-widest flex items-center gap-2">
              <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
              LIVE FEED • MUMBAI
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

// --- HELPER COMPONENTS ---

// 1. Live Timer Component (Simulates Camera Timecode)
const RecTimer = () => {
  const [time, setTime] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime((prev) => prev + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const formatTime = (seconds: number) => {
    const hrs = Math.floor(seconds / 3600).toString().padStart(2, '0');
    const mins = Math.floor((seconds % 3600) / 60).toString().padStart(2, '0');
    const secs = (seconds % 60).toString().padStart(2, '0');
    return `${hrs}:${mins}:${secs}`;
  };

  return (
    <span className="text-[10px] text-white font-mono tracking-widest tabular-nums">
      {formatTime(time)}
    </span>
  );
};

const NavLink = ({ href, text }: { href: string; text: string }) => (
  <a 
    href={href} 
    className="relative px-5 py-2 text-[10px] font-bold tracking-widest text-gray-400 hover:text-white transition-all duration-300 group overflow-hidden"
  >
    <span className="relative z-10">{text}</span>
    {/* Hover glow effect */}
    <span className="absolute inset-0 bg-white/5 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 rounded-full" />
  </a>
);

const MobileLink = ({ href, text, onClick, index }: { href: string; text: string; onClick: () => void; index: number }) => (
  <motion.a 
    href={href} 
    onClick={onClick}
    initial={{ opacity: 0, y: 40 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.2 + (index * 0.1), duration: 0.5 }}
    className="text-4xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-600 hover:to-prime-gold transition-all"
  >
    {text}
  </motion.a>
);

export default Navbar;
