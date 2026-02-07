import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || !isHomePage
          ? 'bg-brand-blue shadow-lg py-3' 
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <img 
              src="/Apidan3.jpg" 
              alt="Apidaniels Logo" 
              className="h-12 w-auto"
            />
            <div className="hidden md:block">
              <div className="text-white font-bold text-lg">APIDANIELS</div>
              <div className="text-white text-xs">AUTO & TRADE LLC</div>
            </div>
          </Link>
          
          {/* Navigation Links - Hidden on mobile */}
          <div className="hidden md:flex space-x-8 items-center">
            {isHomePage ? (
              <>
                <a 
                  href="#home" 
                  className="text-white hover:text-brand-red transition font-medium"
                >
                  Home
                </a>
                <a 
                  href="#about" 
                  className="text-white hover:text-brand-red transition font-medium"
                >
                  About
                </a>
                <a 
                  href="#services" 
                  className="text-white hover:text-brand-red transition font-medium"
                >
                  Services
                </a>
                <a 
                  href="#brands" 
                  className="text-white hover:text-brand-red transition font-medium"
                >
                  Brands
                </a>
                <Link 
                  to="/cars"
                  className="text-white hover:text-brand-red transition font-medium"
                >
                  View Cars
                </Link>
                <a 
                  href="#contact" 
                  className="text-white hover:text-brand-red transition font-medium"
                >
                  Contact
                </a>
              </>
            ) : (
              <>
                <Link 
                  to="/" 
                  className="text-white hover:text-brand-red transition font-medium"
                >
                  Home
                </Link>
                <Link 
                  to="/cars"
                  className="text-white hover:text-brand-red transition font-medium"
                >
                  View Cars
                </Link>
                <a 
                  href="/#contact" 
                  className="text-white hover:text-brand-red transition font-medium"
                >
                  Contact
                </a>
              </>
            )}
          </div>
          
          {/* WhatsApp Button */}
          <a 
            href="https://wa.me/17743140055" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-brand-red px-6 py-2 rounded-lg text-white font-bold hover:bg-red-700 transition transform hover:scale-105"
          >
            WhatsApp
          </a>
        </div>
      </div>
    </nav>
  );
}