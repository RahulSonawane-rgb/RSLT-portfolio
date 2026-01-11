import { useState } from 'react';
import { InstagramEmbed } from 'react-social-media-embed';
import { reelLinks as defaultLinks } from '../data/reels'; 
import { ArrowUpRight, Zap, Share2, BarChart3, Play } from 'lucide-react';
import { motion } from 'framer-motion';

// --- Sub-Component: The "Smart Glass" Card ---
const ProjectCard = ({ link, index }: { link: string, index: number }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="flex flex-col items-center group relative z-10 w-full"
    >
      
      {/* --- THE GLASS CONTAINER --- */}
      {/* Max width set to typical phone width for perfect aspect ratio */}
      <div className="relative w-full max-w-[360px] bg-[#0f0f0f] border border-white/10 rounded-[2.5rem] overflow-hidden transition-all duration-500 hover:border-prime-gold/40 hover:shadow-[0_0_40px_-10px_rgba(212,175,55,0.2)]">
        
        {/* Top "Sensor" Area (Futuristic Notch) */}
        <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-black/80 to-transparent z-20 pointer-events-none flex justify-between items-start p-5">
            <div className="flex items-center gap-2">
                <div className="w-1 h-1 bg-white/50 rounded-full" />
                <span className="text-[9px] font-mono tracking-widest text-white/50">RSLT-{index + 1}</span>
            </div>
            <div className="px-2 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/5 flex items-center gap-1">
                <Zap className="w-3 h-3 text-prime-gold fill-prime-gold" />
                <span className="text-[8px] font-bold text-white">VIRAL</span>
            </div>
        </div>

        {/* The Video Area */}
        <div className="relative bg-black min-h-[600px] flex justify-center items-center">
            {/* Background Placeholder */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white/5 z-0">
               <Play className="w-12 h-12 opacity-20" />
            </div>

            {/* The Embed */}
            <div className="relative z-10 w-full h-full"> 
               <InstagramEmbed 
                 url={link} 
                 width="100%" 
                 captioned={false}
                 style={{ background: 'transparent' }}
               />
            </div>
        </div>

        {/* Bottom "Smart Dock" (Overlay) */}
        <div className="absolute bottom-4 left-4 right-4 h-14 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl z-20 flex items-center justify-between px-6 transition-all duration-300 group-hover:bg-black/80 group-hover:border-prime-gold/30">
            
            {/* Stat 1: Views (Fake Data for Vibe) */}
            <div className="flex flex-col items-center gap-1 opacity-60 hover:opacity-100 transition-opacity">
                <BarChart3 className="w-4 h-4 text-white" />
                <span className="text-[8px] font-mono text-gray-400">STATS</span>
            </div>

            {/* Center Action Button */}
            <a 
                href={link} 
                target="_blank"
                className="w-10 h-10 -mt-6 bg-prime-gold rounded-full flex items-center justify-center shadow-lg shadow-prime-gold/20 hover:scale-110 transition-transform"
            >
                <ArrowUpRight className="w-5 h-5 text-black" />
            </a>

            {/* Stat 2: Share */}
            <div className="flex flex-col items-center gap-1 opacity-60 hover:opacity-100 transition-opacity">
                <Share2 className="w-4 h-4 text-white" />
                <span className="text-[8px] font-mono text-gray-400">SHARE</span>
            </div>
        </div>

      </div>

    </motion.div>
  );
};

// --- Main Section ---
const Work = () => {
  const [visibleCount, setVisibleCount] = useState(3);
  
  const [activeLinks] = useState(() => {
    const saved = localStorage.getItem('rslt_reels');
    return saved ? JSON.parse(saved) : defaultLinks;
  });

  const showMore = () => {
    setVisibleCount(visibleCount + 3);
  };

  return (
    <section id="work" className="relative py-24 px-4 md:px-8 bg-prime-black overflow-hidden">
      
      {/* Background: Geometric Lines */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_100%)]" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* --- HEADER --- */}
        <div className="text-center mb-20">
          <motion.div 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             className="inline-flex items-center gap-2 mb-4 px-3 py-1 rounded-full border border-white/10 bg-white/5"
          >
             <span className="w-1.5 h-1.5 rounded-full bg-prime-gold animate-pulse"></span>
             <span className="text-[10px] md:text-xs font-mono font-bold tracking-[0.2em] text-gray-300 uppercase">Deployed Projects</span>
          </motion.div>
          
          <h2 className="text-5xl md:text-8xl font-black tracking-tighter text-white leading-none">
            Production <span className="text-transparent bg-clip-text bg-gradient-to-r from-prime-gold to-white/50">Feed.</span>
          </h2>
          <p className="mt-4 text-gray-400 text-xs md:text-sm font-light max-w-lg mx-auto">
            We don't just capture moments; we capture audiences. <br className="hidden md:block"/> 
            Vertical cinema designed to <span className="text-white font-bold">stop the scroll</span>.
          </p>
        </div>

        {/* --- THE GRID --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 place-items-center">
          {activeLinks.slice(0, visibleCount).map((link: string, index: number) => (
             <ProjectCard key={index} link={link} index={index} />
          ))}
        </div>

        {/* --- LOAD MORE --- */}
        {visibleCount < activeLinks.length && (
          <div className="text-center mt-20">
            <button 
              onClick={showMore}
              className="relative px-8 py-3 rounded-full border border-white/20 hover:bg-white hover:text-black hover:border-white transition-all duration-300 group"
            >
              <span className="text-xs font-bold tracking-[0.2em]">VIEW ARCHIVES</span>
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Work;
