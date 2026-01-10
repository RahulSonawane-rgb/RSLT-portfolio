import { useState, useRef, type FormEvent } from 'react';
import emailjs from '@emailjs/browser';
import { Send, Loader2, Phone } from 'lucide-react';

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<null | 'success' | 'error'>(null);

  // --- CONFIGURATION ---
  const SERVICE_ID = "service_div840e";      // Replace with yours
  const PUBLIC_KEY = "4j1XD3cw_NsvW-7Yk";      // Replace with yours
  const ADMIN_TEMPLATE_ID = "template_yelpszs";   // Template for YOU
  const CLIENT_TEMPLATE_ID = "template_kagp0um"; // Template for CLIENT (The Welcome one)

  const sendEmail = (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // 1. Send Email to Admin (Rahul & Shubham)
    // We use sendForm because it grabs all fields automatically
    const sendToAdmin = emailjs.sendForm(
      SERVICE_ID, 
      ADMIN_TEMPLATE_ID, 
      formRef.current!, 
      PUBLIC_KEY
    );

    // 2. Send Auto-Reply to Client
    // We manually extract values because sendForm can't run twice on same reference easily in some cases,
    // or we want to be specific about the data.
    const formData = new FormData(formRef.current!);
    const clientData = {
      user_name: formData.get('user_name'),
      user_email: formData.get('user_email'),
      brand_name: formData.get('brand_name'),
    };

    const sendToClient = emailjs.send(
      SERVICE_ID,
      CLIENT_TEMPLATE_ID,
      clientData,
      PUBLIC_KEY
    );

    // Wait for BOTH emails to send
    Promise.all([sendToAdmin, sendToClient])
      .then(() => {
        setLoading(false);
        setStatus('success');
        formRef.current?.reset();
      })
      .catch((error) => {
        console.error("Email Error:", error);
        setLoading(false);
        setStatus('error');
      });
  };

  return (
    <section id="contact" className="py-32 px-6 max-w-3xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-black mb-4 tracking-tighter">START A PROJECT</h2>
        <p className="text-gray-400">Fill the form below. We reply within 24 hours.</p>
      </div>

      <form ref={formRef} onSubmit={sendEmail} className="space-y-6">
        
        {/* Name & Mobile Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <input 
            type="text" 
            name="user_name" 
            placeholder="Your Name" 
            required 
            className="w-full bg-prime-charcoal border border-white/10 p-4 rounded-lg focus:outline-none focus:border-prime-gold text-white placeholder:text-gray-600 transition-colors" 
          />
          <div className="relative">
            <input 
              type="tel" 
              name="user_mobile" 
              placeholder="Mobile Number" 
              required 
              className="w-full bg-prime-charcoal border border-white/10 p-4 pl-12 rounded-lg focus:outline-none focus:border-prime-gold text-white placeholder:text-gray-600 transition-colors" 
            />
            <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
          </div>
        </div>

        {/* Email & Brand Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input 
                type="email" 
                name="user_email" 
                placeholder="Your Email" 
                required 
                className="w-full bg-prime-charcoal border border-white/10 p-4 rounded-lg focus:outline-none focus:border-prime-gold text-white placeholder:text-gray-600 transition-colors" 
            />
            <input 
                type="text" 
                name="brand_name" 
                placeholder="Brand / Business Name" 
                required
                className="w-full bg-prime-charcoal border border-white/10 p-4 rounded-lg focus:outline-none focus:border-prime-gold text-white placeholder:text-gray-600 transition-colors" 
            />
        </div>

        <textarea 
            name="message" 
            rows={5} 
            placeholder="Tell us about your goals..." 
            required 
            className="w-full bg-prime-charcoal border border-white/10 p-4 rounded-lg focus:outline-none focus:border-prime-gold text-white placeholder:text-gray-600 transition-colors"
        ></textarea>
        
        <button 
            type="submit" 
            disabled={loading} 
            className="w-full bg-white text-black font-bold py-4 rounded-lg hover:bg-prime-gold transition-colors flex justify-center items-center gap-2 tracking-widest text-sm"
        >
          {loading ? <Loader2 className="animate-spin" /> : <><Send className="w-4 h-4" /> SEND INQUIRY</>}
        </button>

        {status === 'success' && (
            <div className="p-4 bg-green-500/10 border border-green-500/20 text-green-500 text-center rounded-lg">
                Query received! Check your email for a confirmation.
            </div>
        )}
        {status === 'error' && (
            <div className="p-4 bg-red-500/10 border border-red-500/20 text-red-500 text-center rounded-lg">
                Something went wrong. Please DM us on Instagram.
            </div>
        )}
      </form>
    </section>
  );
};

export default Contact;