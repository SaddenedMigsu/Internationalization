import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const navLinks = [
  { label: 'Home', href: 'https://cit.edu', external: true },
  { label: 'About Us', href: 'https://cit.edu/about', external: true },
  { label: 'Academics', href: 'https://cit.edu/academics', external: true },
  { label: 'SDG Corner', href: 'https://cit.edu/sdg-corner/sdg17/', external: true },
  { label: 'IZN Corner', href: '/izn-corner', external: false },
  { label: 'News', href: 'https://cit.edu/news', external: true },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'shadow-lg bg-white' : 'bg-white'
      }`}
    >
      {/* Top accent bar */}
      <div className="h-1 bg-gradient-to-r from-cit-navy via-cit-gold to-cit-navy" />

      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/izn-corner" className="flex items-center gap-3 flex-shrink-0">
            <img
              src="https://cit.edu/wp-content/uploads/2023/07/cit-logo.png"
              alt="CIT University Logo"
              className="h-10 w-auto object-contain"
              onError={(e) => {
                e.target.style.display = 'none';
              }}
            />
            <div className="hidden sm:flex flex-col leading-tight">
              <span className="font-poppins font-700 text-cit-navy text-sm font-bold leading-none">
                CIT University
              </span>
              <span className="font-opensans text-xs text-gray-500 leading-none">
                Cebu Institute of Technology
              </span>
            </div>
          </Link>

          {/* Desktop nav links */}
          <ul className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive =
                !link.external && location.pathname === link.href;
              return (
                <li key={link.label}>
                  {link.external ? (
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`px-3 py-2 rounded-md text-sm font-medium font-opensans transition-colors duration-200 ${
                        isActive
                          ? 'text-cit-navy font-semibold border-b-2 border-cit-gold'
                          : 'text-gray-700 hover:text-cit-navy hover:bg-cit-light'
                      }`}
                    >
                      {link.label}
                    </a>
                  ) : (
                    <Link
                      to={link.href}
                      className={`px-3 py-2 rounded-md text-sm font-medium font-opensans transition-colors duration-200 ${
                        isActive
                          ? 'text-cit-navy font-semibold border-b-2 border-cit-gold bg-red-50'
                          : 'text-gray-700 hover:text-cit-navy hover:bg-cit-light'
                      }`}
                    >
                      {link.label}
                    </Link>
                  )}
                </li>
              );
            })}
          </ul>

          {/* Hamburger */}
          <button
            id="hamburger-menu-btn"
            className="lg:hidden flex flex-col justify-center items-center w-10 h-10 gap-1.5 rounded-md hover:bg-gray-100 transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation menu"
          >
            <span
              className={`block w-6 h-0.5 bg-cit-navy transition-all duration-300 origin-center ${
                menuOpen ? 'rotate-45 translate-y-2' : ''
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-cit-navy transition-all duration-300 ${
                menuOpen ? 'opacity-0 scale-x-0' : ''
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-cit-navy transition-all duration-300 origin-center ${
                menuOpen ? '-rotate-45 -translate-y-2' : ''
              }`}
            />
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ${
            menuOpen ? 'max-h-96 pb-4' : 'max-h-0'
          }`}
        >
          <ul className="flex flex-col gap-1 pt-2 border-t border-gray-100">
            {navLinks.map((link) => {
              const isActive =
                !link.external && location.pathname === link.href;
              return (
                <li key={link.label}>
                  {link.external ? (
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`block px-4 py-2.5 rounded-md text-sm font-medium font-opensans transition-colors ${
                        isActive
                          ? 'text-cit-navy font-semibold bg-red-50 border-l-4 border-cit-gold'
                          : 'text-gray-700 hover:text-cit-navy hover:bg-cit-light'
                      }`}
                      onClick={() => setMenuOpen(false)}
                    >
                      {link.label}
                    </a>
                  ) : (
                    <Link
                      to={link.href}
                      className={`block px-4 py-2.5 rounded-md text-sm font-medium font-opensans transition-colors ${
                        isActive
                          ? 'text-cit-navy font-semibold bg-red-50 border-l-4 border-cit-gold'
                          : 'text-gray-700 hover:text-cit-navy hover:bg-cit-light'
                      }`}
                      onClick={() => setMenuOpen(false)}
                    >
                      {link.label}
                    </Link>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      </nav>
    </header>
  );
}
