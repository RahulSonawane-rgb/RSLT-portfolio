import { useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { ArrowDown, Scan } from 'lucide-react';

// A high-quality, dark cinematic background
const BG_IMAGE = "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=2670&auto=format&fit=crop";

// --- SUB-COMPONENT: GOLD DUST PARTICLES ---
const GoldParticle = ({ delay, top, left }: { delay: number, top: string, left: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 0 }}
    animate={{ opacity: [0, 0.8, 0], y: -100 }}
    transition={{ duration: 5 + Math.random() * 5, repeat: Infinity, delay: delay, ease: "linear" }}
    className="absolute w-1 h-1 bg-prime-gold rounded-full blur-[1px] pointer-events-none z-10"
    style={{ top, left }}
  />
);

const Hero = () => {
  const { scrollY } = useScroll();
  
  // Parallax & Fade Effects
  const yBg = useTransform(scrollY, [0, 500], [0, 150]);
  const opacityText = useTransform(scrollY, [0, 300], [1, 0]);

  // Mouse Interaction State
//   const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  // Smooth spring animation for mouse movement
  const springX = useSpring(0, { stiffness: 50, damping: 20 });
  const springY = useSpring(0, { stiffness: 50, damping: 20 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const moveX = (clientX - window.innerWidth / 2) / 50; // Sensitivity
      const moveY = (clientY - window.innerHeight / 2) / 50;
      springX.set(moveX);
      springY.set(moveY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [springX, springY]);

  return (
    <section className="relative h-screen flex flex-col justify-center items-center text-center overflow-hidden bg-prime-black perspective-1000">
      
      {/* =========================================
          1. BACKGROUND LAYERS 
         ========================================= */}
      
      {/* Moving Background Image + Mouse Parallax (Opposite direction) */}
      <motion.div 
        style={{ y: yBg, x: springX, scale: 1.1 }} 
        className="absolute inset-0 z-0"
      >
         <div className="absolute inset-0 bg-black/60 z-10" />
         <motion.img
          animate={{ scale: [1.1, 1.15, 1.1] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          src={BG_IMAGE}
          alt="Cinematic Background"
          className="w-full h-full object-cover opacity-60" 
         />
      </motion.div>

      {/* Atmospheric Particles (Gold Dust) */}
      <div className="absolute inset-0 z-10 overflow-hidden">
         <GoldParticle delay={0} top="80%" left="20%" />
         <GoldParticle delay={2} top="60%" left="50%" />
         <GoldParticle delay={4} top="90%" left="80%" />
         <GoldParticle delay={1} top="70%" left="10%" />
         <GoldParticle delay={3} top="85%" left="40%" />
      </div>

      {/* Cinematic Vignette & Grain */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#0a0a0a_95%)] z-10 pointer-events-none" />
      <div className="absolute inset-0 opacity-[0.07] z-10 pointer-events-none mix-blend-overlay bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]" />

      {/* =========================================
          2. CAMERA UI OVERLAY
         ========================================= */}
      <div className="absolute inset-0 z-20 pointer-events-none p-4 md:p-12 flex flex-col justify-between">
         <div className="flex justify-between items-start opacity-60">
            <div className="border border-white/20 px-2 py-1 rounded text-[8px] md:text-[10px] text-white/60 font-mono">
               BAT 84%
            </div>
         </div>
         
         {/* Focus Brackets with subtle pulsing */}
         <motion.div 
            animate={{ opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[85vw] h-[85vh] border border-white/10 rounded-2xl md:rounded-3xl" 
         />

         <div className="flex justify-between items-end opacity-50">
             <div className="text-white/40 text-[10px] font-mono">F/2.8 1/50</div>
             <Scan className="w-4 h-4 md:w-6 md:h-6 text-white/20" />
         </div>
      </div>

      {/* =========================================
          3. MAIN CONTENT (R(e)S(u)LT)
         ========================================= */}
      <motion.div 
        style={{ opacity: opacityText, x: useTransform(springX, (val) => -val * 2), y: useTransform(springY, (val) => -val * 2) }} // Text moves opposite to BG
        className="z-30 relative px-4 w-full"
      >
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
        >
            <p className="text-prime-gold/80 tracking-[0.3em] md:tracking-[0.5em] text-[10px] md:text-xs font-bold mb-4 md:mb-8 uppercase flex items-center justify-center gap-2 md:gap-3">
               <span className="w-4 md:w-8 h-[1px] bg-prime-gold/50"></span>
               Visual Strategy
               <span className="w-4 md:w-8 h-[1px] bg-prime-gold/50"></span>
            </p>

            {/* LOGO TYPOGRAPHY */}
            <h1 className="flex items-baseline justify-center font-black leading-none tracking-tighter drop-shadow-2xl select-none">
              
              {/* R */}
              <span className="hero-text-gradient text-6xl sm:text-8xl md:text-[10rem] lg:text-[12rem]">R</span>
              
              {/* e */}
              <span className="text-3xl sm:text-5xl md:text-[5rem] text-prime-gold font-bold mx-0.5 md:mx-3 transform -translate-y-1 md:-translate-y-2 relative group">
                  e
                  <span className="absolute inset-0 blur-xl bg-prime-gold/30 opacity-60 group-hover:opacity-100 transition-opacity duration-500" />
              </span>

              {/* S */}
              <span className="hero-text-gradient text-6xl sm:text-8xl md:text-[10rem] lg:text-[12rem]">S</span>

              {/* u */}
              <span className="text-3xl sm:text-5xl md:text-[5rem] text-prime-gold font-bold mx-0.5 md:mx-3 transform -translate-y-1 md:-translate-y-2 relative group">
                  u
                  <span className="absolute inset-0 blur-xl bg-prime-gold/30 opacity-60 group-hover:opacity-100 transition-opacity duration-500" />
              </span>

              {/* L */}
              <span className="hero-text-gradient text-6xl sm:text-8xl md:text-[10rem] lg:text-[12rem]">L</span>

              {/* T */}
              <span className="hero-text-gradient text-6xl sm:text-8xl md:text-[10rem] lg:text-[12rem]">T</span>
            </h1>

            <p className="text-sm md:text-xl text-gray-400 font-light mt-6 md:mt-8 max-w-[300px] md:max-w-xl mx-auto leading-relaxed">
              We engineer <span className="text-white font-semibold border-b border-prime-gold/30 pb-0.5">growth</span> through premium <br className="hidden md:block"/> visual storytelling.
            </p>
        </motion.div>
      </motion.div>

      {/* =========================================
          4. SCROLL INDICATOR
         ========================================= */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ delay: 2, repeat: Infinity, duration: 2 }}
        className="absolute bottom-8 md:bottom-10 z-30 cursor-pointer group"
        onClick={() => document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' })}
      >
        <div className="flex flex-col items-center gap-2">
            <span className="text-[8px] md:text-[10px] tracking-widest text-white/30 group-hover:text-prime-gold transition-colors">SCROLL</span>
            <ArrowDown className="w-4 h-4 md:w-5 md:h-5 text-white/30 group-hover:text-prime-gold transition-colors" />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;