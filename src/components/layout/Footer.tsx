import { Link } from 'react-router-dom';
import { Instagram } from 'lucide-react';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Portfolio', href: '/portfolio' },
  { name: 'Services', href: '/services' },
  { name: 'Blog', href: '/blog' },
  { name: 'Book Now', href: '/book' },
];

export function Footer() {
  return (
    <footer className="bg-cream-50 border-t border-warmgray-200/60">
      <div className="container mx-auto px-5 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-8 gap-y-10 lg:gap-16">
          {/* Brand */}
          <div className="col-span-2 lg:col-span-1">
            <Link
              to="/"
              className="text-2xl font-accent text-warmgray-900 inline-block mb-3"
            >
              Faced by Cynie
            </Link>
            <p className="text-warmgray-500 text-[12px] leading-[1.75] max-w-xs">
              Professional makeup artistry and lash enhancements for the
              modern woman.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p className="text-[11px] font-sans font-normal tracking-[0.25em] uppercase text-warmgray-400 mb-5">
              Navigation
            </p>
            <nav className="flex flex-col gap-3">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="text-[12px] font-sans text-warmgray-600 hover:text-blush-600 transition-colors duration-280 w-fit"
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Connect */}
          <div>
            <p className="text-[11px] font-sans font-normal tracking-[0.25em] uppercase text-warmgray-400 mb-5">
              Connect
            </p>
            <div className="flex gap-5 mb-6">
              <a
                href="https://www.instagram.com/faced.by_cyniee_makeup?igsh=a2UxdW00ZXU0bngy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-warmgray-400 hover:text-blush-600 transition-colors duration-280"
              >
                <Instagram size={18} strokeWidth={1.5} />
              </a>
              <a
                href="https://www.tiktok.com/@faced.bycyniee?_t=8sI7zwEL6HO&_r=1"
                target="_blank"
                rel="noopener noreferrer"
                className="text-warmgray-400 hover:text-blush-600 transition-colors duration-280"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="w-[18px] h-[18px]"
                  fill="currentColor"
                >
                  <path d="M16.6 5.82s.51.5 0 0A4.278 4.278 0 0 1 15.54 3h-3.09v12.4a2.592 2.592 0 0 1-2.59 2.5c-1.42 0-2.6-1.16-2.6-2.6 0-1.72 1.66-3.01 3.37-2.48V9.66c-3.45-.46-6.47 2.22-6.47 5.64 0 3.33 2.76 5.7 5.69 5.7 3.14 0 5.69-2.55 5.69-5.7V9.01a7.35 7.35 0 0 0 4.3 1.38V7.3s-1.88.09-3.24-1.48z" />
                </svg>
              </a>
            </div>
            <p className="text-warmgray-400 text-[11px]">
              Nairobi, Kenya
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 pt-8 border-t border-warmgray-200/60 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-[10px] text-warmgray-400 tracking-wide">
            &copy; {new Date().getFullYear()} Faced by Cynie. All Rights Reserved.
          </p>
          <p className="text-[11px] text-warmgray-300 tracking-[0.15em] uppercase">
            Crafted with care
          </p>
        </div>
      </div>
    </footer>
  );
}
