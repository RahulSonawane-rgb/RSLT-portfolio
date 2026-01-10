import { useState } from 'react';
import { InstagramEmbed } from 'react-social-media-embed';
import { reelLinks as defaultLinks } from '../data/reels'; 
import { ArrowUpRight, Instagram } from 'lucide-react';

// --- Sub-Component: The "Pro" Card ---
const ReelCard = ({ link }: { link: string }) => {

  return (
    <div className="flex flex-col items-center group relative z-10">
      
      {/* Decorative Glow Effect behind the card (Subtle) */}
      <div className="absolute inset-0 bg-prime-gold/5 blur-[40px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

      {/* The Premium Glass Frame */}
      {/* w-full and max-w ensures it fits on mobile but doesn't get too big on desktop */}
      <div className="relative w-full max-w-[350px] p-2 bg-prime-charcoal/80 backdrop-blur-sm border border-white/10 rounded-[2.5rem] shadow-2xl transition-all duration-500 hover:border-prime-gold/40 hover:shadow-[0_0_30px_-5px_rgba(212,175,55,0.15)] hover:-translate-y-2">

        {/* The Embed Container */}
        {/* min-h ensures the card has height before video loads */}
        <div className="overflow-hidden rounded-[2rem] bg-black min-h-[500px] flex justify-center items-center">
          {/* We set width to '100%' so it fills our responsive container */}
          <div className="w-full"> 
             <InstagramEmbed 
                url={link} 
                width="100%" 
                captioned={false}
             />
          </div>
        </div>
      </div>

      {/* "View on App" Button (Appears on Hover) */}
      <a 
        href={link}
        target="_blank"
        rel="noreferrer"
        className="mt-6 flex items-center gap-2 text-[10px] font-bold tracking-[0.2em] text-prime-dim opacity-0 transform translate-y-2 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0 hover:text-white"
      >
        <Instagram className="w-3 h-3" />
        VIEW ON INSTAGRAM
      </a>
    </div>
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
    <section id="work" className="py-24 px-6 max-w-7xl mx-auto overflow-hidden">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6 border-b border-white/5 pb-8">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="h-[1px] w-8 bg-prime-gold"></span>
            <span className="text-prime-gold text-xs font-bold tracking-widest">PORTFOLIO</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-white">
            RECENT <span className="text-transparent bg-clip-text bg-gradient-to-r from-prime-gold to-white/50">DROPS</span>
          </h2>
        </div>
        
        <a 
          href="https://www.instagram.com/rslt.creation/?utm_source=ig_web_button_share_sheet" 
          target="_blank" 
          className="hidden md:flex items-center gap-2 bg-white text-black px-6 py-3 rounded-full hover:bg-prime-gold transition-all font-bold text-sm tracking-wide"
        >
          FOLLOW RSLT <ArrowUpRight className="w-4 h-4" />
        </a>
      </div>

      {/* The Grid */}
      {/* Centered on mobile, 2 cols on tablet, 3 on desktop */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 place-items-center">
        {activeLinks.slice(0, visibleCount).map((link: string, index: number) => (
           <ReelCard key={index} link={link} />
        ))}
      </div>

      {/* Load More */}
      {visibleCount < activeLinks.length && (
        <div className="text-center mt-24">
          <button 
            onClick={showMore}
            className="group relative inline-flex h-14 items-center justify-center overflow-hidden rounded-full bg-prime-charcoal px-10 font-medium text-white transition-all duration-300 hover:bg-white hover:text-black border border-white/10"
          >
            <span className="mr-2 text-xs font-bold tracking-[0.2em]">LOAD ARCHIVES</span>
            <div className="absolute right-0 translate-x-full transition-transform duration-300 group-hover:-translate-x-6">
               <ArrowUpRight className="w-4 h-4" />
            </div>
          </button>
        </div>
      )}
    </section>
  );
};

export default Work;