import { motion } from 'framer-motion';
import { BrainCircuit, Aperture, CheckCircle2 } from 'lucide-react';

const Agency = () => {
  return (
    <section id="about" className="relative py-32 px-6 bg-prime-black overflow-hidden border-b border-white/5">
      
      {/* Background: Technical Grid (Blueprint Look) */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
      <div className="absolute inset-0 bg-gradient-to-t from-prime-black via-transparent to-transparent" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* --- HEADER --- */}
        <div className="mb-20">
            <motion.div 
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="flex items-center gap-4 mb-4"
            >
                <span className="h-[1px] w-12 bg-prime-gold"></span>
                <span className="text-prime-gold font-mono text-xs tracking-[0.3em] uppercase">The Architecture</span>
            </motion.div>
            
            <h2 className="text-4xl md:text-7xl font-black text-white tracking-tighter max-w-4xl">
                TWO MINDS. <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-500 to-white">ONE OUTCOME.</span>
            </h2>
        </div>

        {/* --- THE SPLIT (Strategy vs Production) --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-0">
            
            {/* LEFT: RAHUL (Strategy) */}
            <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="group relative p-8 md:p-12 border border-white/10 bg-prime-charcoal/30 backdrop-blur-sm rounded-3xl md:rounded-r-none md:border-r-0 hover:bg-prime-charcoal/50 transition-all duration-500"
            >
                <div className="absolute top-0 right-0 p-4 opacity-20 group-hover:opacity-100 transition-opacity">
                    <BrainCircuit className="w-24 h-24 text-white" strokeWidth={1} />
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-2">THE STRATEGY</h3>
                <p className="text-prime-dim font-mono text-xs tracking-widest mb-6">HEAD OF NARRATIVE</p>
                
                <p className="text-gray-400 leading-relaxed mb-8 max-w-md">
                    "A pretty video without a plan is just art, not marketing." <br/><br/>
                    We analyze algorithms, retention charts, and psychological hooks to write scripts that don't just get viewed—they get remembered.
                </p>

                <ul className="space-y-3">
                    <ListItem text="Viral Scripting Architecture" />
                    <ListItem text="Audience Psychology" />
                    <ListItem text="Hook Optimization" />
                </ul>
            </motion.div>

            {/* RIGHT: SHUBHAM (Visuals) */}
            <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="group relative p-8 md:p-12 border border-white/10 bg-prime-charcoal/30 backdrop-blur-sm rounded-3xl md:rounded-l-none border-t border-white/10 md:border-t-white/10 md:border-l hover:bg-prime-charcoal/50 transition-all duration-500"
            >
                <div className="absolute top-0 right-0 p-4 opacity-20 group-hover:opacity-100 transition-opacity">
                    <Aperture className="w-24 h-24 text-prime-gold" strokeWidth={1} />
                </div>

                <h3 className="text-2xl font-bold text-white mb-2">THE VISUALS</h3>
                <p className="text-prime-gold font-mono text-xs tracking-widest mb-6">HEAD OF PRODUCTION</p>
                
                <p className="text-gray-400 leading-relaxed mb-8 max-w-md">
                    "Lighting and framing define the value of your brand." <br/><br/>
                    Using cinema-grade gear and dynamic editing, we turn the script into a visual asset that builds trust instantly.
                </p>

                <ul className="space-y-3">
                    <ListItem text="4K Cinema Production" />
                    <ListItem text="Color Grading & Sound Design" />
                    <ListItem text="Dynamic VFX Editing" />
                </ul>
            </motion.div>
        </div>

        {/* --- BOTTOM STATS BAR --- */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
            {/* <StatBox label="VIEWS GENERATED" value="1.2M+" /> */}
            <StatBox label="CLIENTS SCALED" value="15+" />
            <StatBox label="RETENTION RATE" value="48%" />
            <StatBox label="ROAS INCREASE" value="3x" highlight />
        </div>
      </div>
    </section>
  );
};

// --- Helper Components ---

const ListItem = ({ text }: { text: string }) => (
    <div className="flex items-center gap-3 text-sm text-gray-300">
        <CheckCircle2 className="w-4 h-4 text-prime-gold" />
        {text}
    </div>
);

const StatBox = ({ label, value, highlight }: { label: string, value: string, highlight?: boolean }) => (
    <div className={`p-6 rounded-2xl border ${highlight ? 'border-prime-gold/30 bg-prime-gold/5' : 'border-white/5 bg-white/5'} flex flex-col items-center justify-center text-center`}>
        <div className={`text-3xl font-black mb-1 ${highlight ? 'text-prime-gold' : 'text-white'}`}>{value}</div>
        <div className="text-[10px] text-gray-500 font-mono tracking-widest">{label}</div>
    </div>
);

export default Agency;