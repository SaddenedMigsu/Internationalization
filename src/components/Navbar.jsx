import { useState } from 'react';

const NAV_LINKS = [
  { label: 'Home', href: 'https://cit.edu/', dropdown: false },
  { label: 'About Us', href: 'https://cit.edu/about-cit/', dropdown: true },
  { label: 'Academics', href: 'https://cit.edu/academics/', dropdown: true },
  { label: 'Admission', href: 'https://cit.edu/admission/', dropdown: true },
  { label: 'Scholarships', href: 'https://cit.edu/scholarships/', dropdown: true },
  { label: 'Student Life', href: 'https://cit.edu/student-life/', dropdown: true },
  { label: 'SDG Corner', href: 'https://cit.edu/sdg-corner/', dropdown: false },
  { label: 'More', href: 'https://cit.edu/', dropdown: true },
  { label: 'News and Updates', href: 'https://cit.edu/news-and-updates/', dropdown: false },
];

// Chevron down icon
const Chevron = () => (
  <span style={{ fontSize: '9px', marginLeft: '3px', color: '#000000', lineHeight: 1 }}>&#9660;</span>
);

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header id="main-navbar" className="sticky top-0 left-0 right-0 z-50 bg-white shadow-sm">
      <nav className="w-full px-4 sm:px-6">
        <div className="flex items-center justify-between h-[90px]">

          {/* Logo — cit-header.png constrained to navbar height */}
          <a href="https://cit.edu/" target="_blank" rel="noopener noreferrer" className="flex-shrink-0">
            <img
              src="https://cit.edu/wp-content/uploads/2023/07/cit-logo.png"
              srcSet="https://cit.edu/wp-content/uploads/2023/07/cit-logo-300x59.png 300w, https://cit.edu/wp-content/uploads/2023/07/cit-logo-1024x201.png 1024w, https://cit.edu/wp-content/uploads/2023/07/cit-logo-768x151.png 768w, https://cit.edu/wp-content/uploads/2023/07/cit-logo.png 1492w"
              sizes="(max-width: 1492px) 100vw, 1492px"
              width="1492"
              height="293"
              alt="Cebu Institute of Technology – University"
              className="h-[66px] w-auto object-contain"
              draggable="false"
            />
          </a>

          {/* Desktop nav links */}
          <ul className="hidden lg:flex items-center gap-0.5 ml-auto">
            {NAV_LINKS.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center px-3 py-2 text-[14px] hover:text-[#7B1C1C] transition-colors duration-150 whitespace-nowrap"
                  style={{ fontFamily: 'Open Sans, sans-serif', color: '#333333', fontWeight: '400' }}
                >
                  {link.label}
                  {link.dropdown && <Chevron />}
                </a>
              </li>
            ))}
          </ul>

          {/* Right — LAIR icon + WITS */}
          <div className="hidden lg:flex items-center gap-3">
            {/* LAIR */}
            <a
              href="https://lair.education/"
              target="_blank"
              rel="noopener noreferrer"
              title="LAIR — Learning & AI Resource"
              className="flex items-center"
            >
              <img
                src="/cit-lair.png"
                alt="LAIR"
                className="h-[28px] w-auto object-contain hover:opacity-80 transition-opacity"
                draggable="false"
              />
            </a>

            {/* WITS */}
            <a
              href="https://student.cituwits.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-sm hover:opacity-75 transition-opacity"
              style={{ color: '#CC0000', fontFamily: 'Open Sans, sans-serif', letterSpacing: '0.04em' }}
            >
              WITS
            </a>
          </div>

          {/* Hamburger (mobile) */}
          <button
            id="hamburger-menu-btn"
            className="lg:hidden flex flex-col justify-center items-center w-10 h-10 gap-1.5 rounded-md hover:bg-gray-100 transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation menu"
          >
            <span className={`block w-6 h-0.5 bg-[#7B1C1C] transition-all duration-300 origin-center ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block w-6 h-0.5 bg-[#7B1C1C] transition-all duration-300 ${menuOpen ? 'opacity-0 scale-x-0' : ''}`} />
            <span className={`block w-6 h-0.5 bg-[#7B1C1C] transition-all duration-300 origin-center ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden overflow-hidden transition-all duration-300 ${menuOpen ? 'max-h-screen pb-4' : 'max-h-0'}`}>
          <ul className="flex flex-col gap-1 pt-2 border-t border-gray-100">
            {NAV_LINKS.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between px-4 py-2.5 text-sm text-gray-700 hover:text-[#7B1C1C] hover:bg-red-50 transition-colors"
                  style={{ fontFamily: 'Open Sans, sans-serif' }}
                  onClick={() => setMenuOpen(false)}
                >
                  <span>{link.label}</span>
                  {link.dropdown && <Chevron />}
                </a>
              </li>
            ))}
            {/* Mobile LAIR + WITS */}
            <li className="flex items-center gap-4 px-4 py-2.5 border-t border-gray-100 mt-1">
              <a href="https://lair.education/" target="_blank" rel="noopener noreferrer">
                <img src="/cit-lair.png" alt="LAIR" className="h-[24px] w-auto object-contain" />
              </a>
              <a href="https://student.cituwits.com/" target="_blank" rel="noopener noreferrer"
                className="font-bold text-sm" style={{ color: '#CC0000' }}>
                WITS
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
