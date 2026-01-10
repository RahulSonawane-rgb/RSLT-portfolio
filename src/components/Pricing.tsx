import { Check } from 'lucide-react';

const plans = [
  {
    name: "STARTER",
    price: "₹15,000",
    desc: "Perfect for personal brands.",
    features: ["4 High-Quality Reels", "Basic Scripting", "Trend Research", "1 Revision Round"]
  },
  {
    name: "GROWTH",
    price: "₹35,000",
    desc: "For businesses scaling up. (Best Value)",
    features: ["8 High-Quality Reels", "Professional Scripting", "On-Location Shoot (1 Day)", "Strategic Hashtags", "Cover Design"]
  },
  {
    name: "PRIME",
    price: "Custom",
    desc: "Full production house experience.",
    features: ["Unlimited Content Strategy", "Cinematic Production", "Actors & Models", "Drone Shots", "Dedicated Manager"]
  }
];

const Pricing = () => {
  return (
    <section id="pricing" className="py-32 px-6 bg-prime-dark border-y border-white/5">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold mb-16 text-center">INVESTMENT</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, i) => (
            <div key={i} className={`p-8 rounded-2xl border ${i === 1 ? 'border-prime-gold bg-prime-gold/5' : 'border-white/10 bg-prime-black'} flex flex-col`}>
              <h3 className="text-lg font-bold text-gray-400 mb-2">{plan.name}</h3>
              <div className="text-4xl font-black mb-4">{plan.price}</div>
              <p className="text-sm text-gray-500 mb-8">{plan.desc}</p>
              
              <ul className="space-y-4 mb-8 flex-1">
                {plan.features.map((feat, index) => (
                  <li key={index} className="flex gap-3 text-sm">
                    <Check className="w-5 h-5 text-prime-gold" /> {feat}
                  </li>
                ))}
              </ul>

              <button className={`w-full py-4 rounded-lg font-bold transition-all ${i === 1 ? 'bg-prime-gold text-black hover:bg-white' : 'bg-white/10 hover:bg-white hover:text-black'}`}>
                CHOOSE PLAN
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;