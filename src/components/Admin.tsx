import { useState, useEffect } from 'react';
import { reelLinks as initialLinks } from '../data/reels';
import { Trash2, Plus, Copy, LogOut } from 'lucide-react';

const Admin = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  // Load from local storage if available, else use default file
  const [links, setLinks] = useState<string[]>(() => {
    const saved = localStorage.getItem('rslt_reels');
    return saved ? JSON.parse(saved) : initialLinks;
  });
  const [newLink, setNewLink] = useState('');

  // Simple Login Check
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === 'RSLT#8007') {
      setIsAuthenticated(true);
      localStorage.setItem('rslt_admin_session', 'true');
    } else {
      alert('Access Denied: Incorrect Password');
    }
  };

  // Check session on load
  useEffect(() => {
    if (localStorage.getItem('rslt_admin_session') === 'true') {
      setIsAuthenticated(true);
    }
  }, []);

  // Add Link
  const addLink = () => {
    if (!newLink) return;
    const updated = [newLink, ...links];
    setLinks(updated);
    localStorage.setItem('rslt_reels', JSON.stringify(updated));
    setNewLink('');
  };

  // Remove Link
  const removeLink = (index: number) => {
    const updated = links.filter((_, i) => i !== index);
    setLinks(updated);
    localStorage.setItem('rslt_reels', JSON.stringify(updated));
  };

  // Copy to Clipboard (To update code)
  const copyToCode = () => {
    const code = `export const reelLinks = ${JSON.stringify(links, null, 2)};`;
    navigator.clipboard.writeText(code);
    alert('Code copied! Paste this into src/data/reels.ts to make it permanent for everyone.');
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem('rslt_admin_session');
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-prime-black flex items-center justify-center px-4">
        <form onSubmit={handleLogin} className="bg-prime-charcoal p-8 rounded-2xl border border-white/10 w-full max-w-md">
          <h2 className="text-2xl font-bold mb-6 text-center">RSLT ADMIN</h2>
          <input 
            type="password" 
            placeholder="Enter Password" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full bg-black border border-white/20 p-4 rounded-lg mb-4 text-white focus:border-prime-gold outline-none"
          />
          <button className="w-full bg-prime-gold text-black font-bold py-4 rounded-lg hover:bg-white transition-all">
            UNLOCK PANEL
          </button>
        </form>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-prime-black text-white p-6 md:p-12">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-12">
          <h1 className="text-3xl font-bold tracking-tighter">LINK MANAGER</h1>
          <button onClick={handleLogout} className="flex items-center gap-2 text-red-500 hover:text-red-400">
            <LogOut size={20} /> LOGOUT
          </button>
        </div>

        {/* Add New Section */}
        <div className="bg-prime-charcoal p-6 rounded-xl border border-white/10 mb-8">
          <h3 className="text-lg font-bold mb-4 text-prime-gold">ADD NEW REEL</h3>
          <div className="flex gap-4">
            <input 
              type="text" 
              placeholder="Paste Instagram Reel Link here..." 
              value={newLink}
              onChange={(e) => setNewLink(e.target.value)}
              className="flex-1 bg-black border border-white/20 p-4 rounded-lg text-white focus:border-prime-gold outline-none"
            />
            <button onClick={addLink} className="bg-white text-black px-6 rounded-lg font-bold hover:bg-prime-gold transition-all">
              <Plus />
            </button>
          </div>
        </div>

        {/* List Section */}
        <div className="space-y-4">
          {links.map((link, index) => (
            <div key={index} className="flex items-center justify-between bg-black/50 p-4 rounded-lg border border-white/5">
              <span className="truncate flex-1 text-prime-silver mr-4">{link}</span>
              <button onClick={() => removeLink(index)} className="text-red-500 hover:bg-red-500/10 p-2 rounded-lg transition-all">
                <Trash2 size={20} />
              </button>
            </div>
          ))}
        </div>

        {/* Export Section */}
        <div className="mt-12 p-6 bg-blue-900/20 border border-blue-500/30 rounded-xl flex justify-between items-center">
          <div>
            <h4 className="font-bold text-blue-400 mb-1">Make Changes Permanent?</h4>
            <p className="text-xs text-blue-200/60">Since you don't have a database yet, copy this list and paste it into your code file.</p>
          </div>
          <button onClick={copyToCode} className="flex items-center gap-2 bg-blue-600 hover:bg-blue-500 px-6 py-3 rounded-lg font-bold text-sm">
            <Copy size={16} /> COPY DATA
          </button>
        </div>
      </div>
    </div>
  );
};

export default Admin;