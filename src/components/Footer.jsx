export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      id: 'footer-facebook',
      label: 'Facebook',
      href: 'https://www.facebook.com/CITUniversity',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </svg>
      ),
    },
    {
      id: 'footer-twitter',
      label: 'Twitter / X',
      href: 'https://twitter.com/CITUniversity',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      ),
    },
    {
      id: 'footer-youtube',
      label: 'YouTube',
      href: 'https://www.youtube.com/@CITUniversity',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
        </svg>
      ),
    },
    {
      id: 'footer-linkedin',
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/school/cit-university',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      ),
    },
  ];

  const footerLinks = [
    { label: 'Home', href: 'https://cit.edu' },
    { label: 'About CIT', href: 'https://cit.edu/about' },
    { label: 'Academics', href: 'https://cit.edu/academics' },
    { label: 'Admissions', href: 'https://cit.edu/admissions' },
    { label: 'Research', href: 'https://cit.edu/research' },
    { label: 'SDG Corner', href: 'https://cit.edu/sdg-corner/sdg17/' },
  ];

  return (
    <footer id="main-footer" className="bg-cit-navy text-white">
      {/* SDG banner strip */}
      <div className="bg-cit-navy-dark py-6">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div
              className="w-14 h-14 rounded-xl flex items-center justify-center text-2xl font-poppins font-black text-white shadow-lg flex-shrink-0"
              style={{ background: '#19486A' }}
            >
              17
            </div>
            <div>
              <p className="font-poppins font-semibold text-white text-sm">
                IZN Corner supports UN Sustainable Development Goal 17
              </p>
              <p className="font-opensans text-white/70 text-xs mt-0.5">
                Partnerships for the Goals
              </p>
            </div>
          </div>
          <a
            id="sdg17-link"
            href="https://cit.edu/sdg-corner/sdg17/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold font-poppins border border-white/30 text-white hover:bg-white/10 hover:border-white/60 transition-all duration-200 flex-shrink-0"
          >
            View SDG Corner →
          </a>
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-5">
              <img
                src="https://cit.edu/wp-content/uploads/2023/07/cit-logo.png"
                alt="CIT University Logo"
                className="h-12 w-auto"
                onError={(e) => { e.target.style.display = 'none'; }}
              />
              <div>
                <div className="font-poppins font-bold text-white text-lg leading-none">
                  CIT University
                </div>
                <div className="font-opensans text-white/60 text-xs leading-none mt-1">
                  Cebu Institute of Technology – University
                </div>
              </div>
            </div>
            <p className="font-opensans text-white/70 text-sm leading-relaxed max-w-sm mb-6">
              A premier technology university in the Philippines committed to producing
              globally competitive graduates through excellence in education, research,
              and international engagement.
            </p>

            {/* Address */}
            <address className="not-italic font-opensans text-white/60 text-sm space-y-1">
              <div className="flex items-start gap-2">
                <span className="mt-0.5 flex-shrink-0">📍</span>
                <span>N. Bacalso Ave., Cebu City, Philippines 6000</span>
              </div>
              <div className="flex items-center gap-2">
                <span>📧</span>
                <a href="mailto:internationalization@cit.edu" className="hover:text-cit-gold transition-colors">
                  internationalization@cit.edu
                </a>
              </div>
              <div className="flex items-center gap-2">
                <span>🌐</span>
                <a href="https://cit.edu" target="_blank" rel="noopener noreferrer" className="hover:text-cit-gold transition-colors">
                  cit.edu
                </a>
              </div>
            </address>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-poppins font-bold text-white text-sm uppercase tracking-wider mb-5">
              Quick Links
            </h3>
            <ul className="space-y-2.5">
              {footerLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-opensans text-white/60 text-sm hover:text-cit-gold transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-cit-gold/40 group-hover:bg-cit-gold transition-colors" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* IZN Corner links */}
          <div>
            <h3 className="font-poppins font-bold text-white text-sm uppercase tracking-wider mb-5">
              IZN Corner
            </h3>
            <ul className="space-y-2.5">
              {[
                { label: 'About IZN', anchor: '#about-section' },
                { label: 'Global Stories', anchor: '#articles-section' },
                { label: 'Our Partners', anchor: '#global-map-section' },
                { label: 'Our Pillars', anchor: '#pillars-section' },
                { label: 'Voices from the World', anchor: '#testimonials-section' },
                { label: 'Contact IZN Office', anchor: '#cta-banner' },
              ].map((item) => (
                <li key={item.label}>
                  <a
                    href={item.anchor}
                    className="font-opensans text-white/60 text-sm hover:text-cit-gold transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-cit-gold/40 group-hover:bg-cit-gold transition-colors" />
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Copyright */}
          <p className="font-opensans text-white/50 text-xs text-center sm:text-left">
            © {currentYear} CIT University — Cebu Institute of Technology – University.
            All rights reserved. IZN Corner | Internationalization Office.
          </p>

          {/* Social links */}
          <div className="flex items-center gap-3">
            {socialLinks.map((social) => (
              <a
                key={social.id}
                id={social.id}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="w-9 h-9 rounded-full flex items-center justify-center text-white/60 hover:text-white border border-white/20 hover:border-cit-gold hover:bg-white/10 transition-all duration-200"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
