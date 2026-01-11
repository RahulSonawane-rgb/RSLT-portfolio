import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Work from './components/Work';
// import Pricing from './components/Pricing';
import Agency from './components/Agency';
import Contact from './components/Contact';
import Admin from './components/Admin';

// The Main Website Page
const Home = () => (
  <>
    <Navbar />
    <Hero />
    <Work />
    <Agency />
    {/* <Pricing /> */}
    <Contact />
    <footer className="py-8 text-center text-gray-600 text-sm border-t border-white/5 bg-prime-black">
      &copy; {new Date().getFullYear()} RSLT Media. Jalgaon.
    </footer>
  </>
);

function App() {
  return (
    <Router>
      <div className="bg-prime-black min-h-screen text-white font-sans selection:bg-prime-gold selection:text-black">
        <Routes>
          {/* Normal User Route */}
          <Route path="/" element={<Home />} />
          
          {/* Admin Route */}
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
