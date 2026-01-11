import { motion } from 'framer-motion';
import { BrainCircuit, Aperture, Zap, Activity, Layers, Fingerprint } from 'lucide-react';

const Agency = () => {
  return (
    <section id="about" className="relative py-24 md:py-32 px-4 md:px-6 bg-prime-black overflow-hidden border-b border-white/5">
      
      {/* --- BACKGROUND LAYERS (Cinematic Depth) --- */}
      {/* 1. The Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:50px_50px]" />
      
      {/* 2. The Glow Orbs (Dynamic Lighting) */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/10 blur-[120px] rounded-full pointer-events-none mix-blend-screen" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-prime-gold/10 blur-[120px] rounded-full pointer-events-none mix-blend-screen" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* --- 1. THE HEADLINE --- */}
        <div className="mb-20 text-center">
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md"
            >
                <Fingerprint className="w-3 h-3 text-prime-gold" />
                <span className="text-gray-400 font-mono text-[10px] tracking-[0.3em] uppercase">Identity Verified</span>
            </motion.div>
            
            <h2 className="text-5xl md:text-8xl font-black text-white tracking-tighter leading-none">
                THE RSLT <br className="md:hidden" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-prime-gold to-white">FORMULA.</span>
            </h2>
        </div>

        {/* --- 2. THE FUSION ENGINE (Unique Layout) --- */}
        <div className="relative flex flex-col md:flex-row gap-6 md:gap-0 items-stretch justify-center">
            
            {/* --- LEFT CARD: STRATEGY (Rahul) --- */}
            <motion.div 
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex-1 group relative bg-gradient-to-b from-white/5 to-transparent border border-white/10 rounded-3xl md:rounded-r-none p-8 md:p-12 overflow-hidden hover:border-white/20 transition-all duration-500"
            >
                {/* Background Decor */}
                <BrainCircuit className="absolute -right-10 -bottom-10 w-64 h-64 text-white/5 group-hover:text-white/10 transition-colors duration-500 rotate-12" />
                
                <div className="relative z-10">
                    <div className="w-12 h-12 mb-6 rounded-xl bg-purple-500/20 flex items-center justify-center border border-purple-500/30 text-purple-400">
                        <Activity className="w-6 h-6" />
                    </div>
                    
                    <h3 className="text-3xl font-black text-white mb-2 uppercase italic tracking-tighter">Narrative</h3>
                    <p className="text-xs font-mono text-purple-400 tracking-widest mb-6">MODULE A: PSYCHOLOGY</p>
                    
                    <p className="text-gray-400 text-sm leading-relaxed mb-8">
                        "We don't guess. We engineer." <br/>
                        Every script is built on retention data. We use pacing, pattern interrupts, and psychological hooks to ensure the viewer cannot look away.
                    </p>

                    <div className="flex flex-wrap gap-2">
                        <Tag text="Retention Engineering" color="purple" />
                        <Tag text="Viral Scripting" color="purple" />
                        <Tag text="Hook Design" color="purple" />
                    </div>
                </div>
            </motion.div>


            {/* --- CENTER: THE FUSION CORE (The Cool Animation) --- */}
            <div className="relative z-20 flex items-center justify-center h-20 md:h-auto md:w-0">
                <div className="absolute md:relative flex items-center justify-center w-16 h-16 md:w-20 md:h-20 bg-black border border-white/20 rounded-full shadow-[0_0_50px_rgba(212,175,55,0.4)] z-30">
                    <motion.div 
                        animate={{ rotate: 360 }}
                        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                        className="absolute inset-0 rounded-full border-t border-prime-gold opacity-50"
                    />
                    <Zap className="w-6 h-6 md:w-8 md:h-8 text-prime-gold fill-prime-gold animate-pulse" />
                </div>
                {/* Connector Lines */}
                <div className="absolute top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-prime-gold/50 to-transparent hidden md:block" />
                <div className="absolute left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-prime-gold/50 to-transparent md:hidden" />
            </div>


            {/* --- RIGHT CARD: PRODUCTION (Shubham) --- */}
            <motion.div 
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex-1 group relative bg-gradient-to-b from-white/5 to-transparent border border-white/10 rounded-3xl md:rounded-l-none p-8 md:p-12 overflow-hidden hover:border-prime-gold/30 transition-all duration-500"
            >
                {/* Background Decor */}
                <Aperture className="absolute -right-10 -bottom-10 w-64 h-64 text-prime-gold/5 group-hover:text-prime-gold/10 transition-colors duration-500 -rotate-12" />

                <div className="relative z-10 text-right md:text-left">
                    <div className="w-12 h-12 mb-6 ml-auto md:ml-0 rounded-xl bg-prime-gold/20 flex items-center justify-center border border-prime-gold/30 text-prime-gold">
                        <Layers className="w-6 h-6" />
                    </div>

                    <h3 className="text-3xl font-black text-white mb-2 uppercase italic tracking-tighter">Aesthetics</h3>
                    <p className="text-xs font-mono text-prime-gold tracking-widest mb-6">MODULE B: EXECUTION</p>
                    
                    <p className="text-gray-400 text-sm leading-relaxed mb-8">
                        "Visuals that demand authority." <br/>
                        We specialize in high-fidelity imaging. Through aggressive color grading and dynamic sound design, we create a texture that feels expensive.
                    </p>

                    <div className="flex flex-wrap gap-2 justify-end md:justify-start">
                        <Tag text="High-Fidelity Imaging" color="gold" />
                        <Tag text="Dynamic Sound Design" color="gold" />
                        <Tag text="Aggressive Grading" color="gold" />
                    </div>
                </div>
            </motion.div>

        </div>

        {/* --- 3. BOTTOM DATA STREAM (The Responsive Footer) --- */}
        <div className="mt-6 md:mt-0 flex flex-col md:flex-row border border-white/10 rounded-3xl md:rounded-t-none bg-black/40 backdrop-blur-lg overflow-hidden">
             <div className="flex-1 p-6 border-b md:border-b-0 md:border-r border-white/10 flex items-center justify-between">
                <span className="text-gray-500 text-[10px] font-mono tracking-widest">TURNAROUND</span>
                <span className="text-white font-bold">24-48 HOURS</span>
             </div>
             <div className="flex-1 p-6 border-b md:border-b-0 md:border-r border-white/10 flex items-center justify-between">
                <span className="text-gray-500 text-[10px] font-mono tracking-widest">OUTPUT</span>
                <span className="text-white font-bold">4K 60FPS / 10-BIT</span>
             </div>
             <div className="flex-1 p-6 bg-prime-gold/10 flex items-center justify-between">
                <span className="text-prime-gold text-[10px] font-mono tracking-widest">STATUS</span>
                <div className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-prime-gold rounded-full animate-pulse" />
                    <span className="text-prime-gold font-bold">ACCEPTING CLIENTS</span>
                </div>
             </div>
        </div>

      </div>
    </section>
  );
};

// --- Helper Components ---

const Tag = ({ text, color }: { text: string, color: 'purple' | 'gold' }) => {
    const styles = color === 'purple' 
        ? 'bg-purple-500/10 text-purple-300 border-purple-500/20' 
        : 'bg-prime-gold/10 text-prime-gold border-prime-gold/20';

    return (
        <span className={`px-3 py-1 rounded text-[10px] font-bold uppercase tracking-wide border ${styles}`}>
            {text}
        </span>
    );
};

export default Agency;
