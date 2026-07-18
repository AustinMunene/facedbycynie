import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Instagram, Settings, Menu, X } from 'lucide-react';
import { useAuth } from '../../features/auth/hooks/useAuth';

export function Header() {
  const { user } = useAuth();
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMobileMenuOpen(false);
      }
    };
    if (isMobileMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isMobileMenuOpen]);

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Services', href: '/services' },
    { name: 'Blog', href: '/blog' },
    { name: 'Book Now', href: '/book' },
  ];

  const isActive = (href: string) =>
    href === '/' ? location.pathname === '/' : location.pathname.startsWith(href);

  const iconBtn =
    'w-9 h-9 flex items-center justify-center rounded-full bg-white/50 border border-warmgray-200/70 text-warmgray-600 hover:text-blush-600 hover:border-blush-300 hover:bg-white transition-all duration-280';

  return (
    <header
      ref={menuRef}
      className={`fixed w-full z-50 frosted transition-all duration-500 ${
        isScrolled
          ? 'border-b border-warmgray-200/60 shadow-[0_1px_3px_rgba(61,53,51,0.05)]'
          : 'border-b border-warmgray-200/30'
      }`}
    >
      <nav className="container mx-auto px-5 lg:px-8">
        {/* Top row: brand centered, icons right */}
        <div
          className={`relative flex items-center justify-between lg:justify-center transition-all duration-500 ${
            isScrolled ? 'h-16 lg:pt-3 lg:pb-2' : 'h-16 lg:pt-5 lg:pb-2'
          }`}
        >
          <Link to="/" className="flex items-center leading-none group">
            <span className="font-accent text-2xl lg:text-[30px] text-warmgray-900 transition-colors duration-300">
              Faced by Cynie
            </span>
          </Link>

          {/* Desktop icons — top right */}
          <div className="hidden lg:flex items-center gap-2.5 absolute right-0">
            <a
              href="https://www.instagram.com/faced.by_cyniee_makeup?igsh=a2UxdW00ZXU0bngy"
              className={iconBtn}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <Instagram size={16} strokeWidth={1.5} />
            </a>
            {user && (
              <Link to="/admin" className={iconBtn} title="Admin Dashboard">
                <Settings size={16} strokeWidth={1.5} />
              </Link>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 -mr-2 absolute right-0"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="text-warmgray-800" size={22} strokeWidth={1.5} />
            ) : (
              <Menu className="text-warmgray-800" size={22} strokeWidth={1.5} />
            )}
          </button>
        </div>

        {/* Nav row — centered, active underline */}
        <div className="hidden lg:flex items-center justify-center gap-9 pb-3">
          {navigation.map((item) => {
            const active = isActive(item.href);
            return (
              <Link
                key={item.name}
                to={item.href}
                className={`relative font-sans text-[11px] font-normal tracking-[0.18em] uppercase pb-1 transition-colors duration-280 ${
                  active
                    ? 'text-warmgray-900'
                    : 'text-warmgray-600 hover:text-blush-600'
                }`}
              >
                {item.name}
                <span
                  className={`absolute left-0 -bottom-px h-px bg-blush-500 transition-all duration-300 ${
                    active ? 'w-full' : 'w-0'
                  }`}
                />
              </Link>
            );
          })}
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-400 ease-[var(--ease-out)] ${
            isMobileMenuOpen ? 'max-h-[400px] pb-6' : 'max-h-0'
          }`}
        >
          <div className="flex flex-col gap-1 pt-2 border-t border-warmgray-200/60">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`relative font-sans text-[12px] font-normal tracking-[0.14em] uppercase py-3 px-1 transition-colors duration-280 ${
                  isActive(item.href)
                    ? 'text-blush-600'
                    : 'text-warmgray-700 hover:text-blush-600'
                }`}
              >
                {item.name}
              </Link>
            ))}
            <div className="flex items-center gap-3 pt-4 mt-2 border-t border-warmgray-200/60 px-1">
              <a
                href="https://www.instagram.com/faced.by_cyniee_makeup?igsh=a2UxdW00ZXU0bngy"
                className={iconBtn}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <Instagram size={16} strokeWidth={1.5} />
              </a>
              {user && (
                <Link to="/admin" className={iconBtn} title="Admin Dashboard">
                  <Settings size={16} strokeWidth={1.5} />
                </Link>
              )}
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
