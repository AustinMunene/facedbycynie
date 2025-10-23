import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Instagram, Settings, Menu, X } from 'lucide-react';
import { useAuth } from '../../features/auth/hooks/useAuth';

export function Header() {
  const { user } = useAuth();
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Services', href: '/services' },
    { name: 'Blog', href: '/blog' },
    { name: 'Book Now', href: '/book' },
  ];

  const getTextColor = (isScrolled: boolean, isHomePage: boolean) => {
    if (isHomePage) {
      return isScrolled ? 'text-gray-800 hover:text-purple-600' : 'text-white hover:text-purple-200';
    }
    return 'text-gray-800 hover:text-purple-600';
  };

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled || !isHomePage || isMobileMenuOpen ? 'bg-white/95 shadow-sm' : 'bg-black/20'
      }`}
    >
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link
            to="/"
            className={`text-2xl font-serif font-semibold ${
              isScrolled || !isHomePage || isMobileMenuOpen ? 'text-purple-600' : 'text-white'
            }`}
          >
            Faced by Cynie
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`transition-colors ${getTextColor(isScrolled, isHomePage)}`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <a 
              href="https://www.instagram.com/faced.by_cyniee_makeup?igsh=a2UxdW00ZXU0bngy" 
              className={`transition-colors ${getTextColor(isScrolled, isHomePage)}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Instagram size={20} />
            </a>
            {user && (
              <Link 
                to="/admin"
                className={`transition-colors ${getTextColor(isScrolled, isHomePage)}`}
                title="Admin Dashboard"
              >
                <Settings size={20} />
              </Link>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-lg"
          >
            {isMobileMenuOpen ? (
              <X className={isScrolled || !isHomePage ? 'text-gray-800' : 'text-white'} size={24} />
            ) : (
              <Menu className={isScrolled || !isHomePage ? 'text-gray-800' : 'text-white'} size={24} />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg py-4 px-4">
            <div className="flex flex-col space-y-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="text-gray-800 hover:text-purple-600 transition-colors py-2"
                >
                  {item.name}
                </Link>
              ))}
              <div className="flex items-center space-x-4 pt-4 border-t">
                <a 
                  href="https://www.instagram.com/faced.by_cyniee_makeup?igsh=a2UxdW00ZXU0bngy" 
                  className="text-gray-800 hover:text-purple-600"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Instagram size={20} />
                </a>
                {user && (
                  <Link 
                    to="/admin"
                    className="text-gray-800 hover:text-purple-600"
                    title="Admin Dashboard"
                  >
                    <Settings size={20} />
                  </Link>
                )}
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}