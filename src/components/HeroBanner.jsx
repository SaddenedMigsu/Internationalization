export default function HeroBanner() {
  const scrollToArticles = () => {
    const el = document.getElementById('articles-section');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero-banner"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: 'url(/redbg.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Dark maroon overlay for text readability */}
      <div className="absolute inset-0" style={{ background: 'rgba(50, 8, 8, 0.62)' }} />
      {/* World map SVG overlay */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <svg
          viewBox="0 0 1000 500"
          className="w-full h-full object-cover"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid slice"
        >
          {/* Simplified world map paths - continents */}
          <g fill="#FFFFFF" stroke="#FFC107" strokeWidth="0.5">
            {/* North America */}
            <path d="M 130 80 L 200 70 L 240 100 L 260 140 L 230 170 L 200 200 L 160 210 L 130 190 L 110 160 L 100 120 Z" />
            {/* South America */}
            <path d="M 200 230 L 240 220 L 260 260 L 260 320 L 240 360 L 210 380 L 185 360 L 175 320 L 180 270 Z" />
            {/* Europe */}
            <path d="M 450 60 L 510 55 L 540 80 L 530 110 L 500 120 L 470 115 L 445 95 Z" />
            {/* Africa */}
            <path d="M 460 140 L 510 130 L 540 160 L 545 220 L 530 280 L 505 310 L 475 300 L 455 260 L 445 200 L 450 160 Z" />
            {/* Asia */}
            <path d="M 545 60 L 680 50 L 740 80 L 750 130 L 720 160 L 680 165 L 640 150 L 600 160 L 570 145 L 545 120 L 540 90 Z" />
            {/* Australia */}
            <path d="M 680 270 L 730 260 L 770 275 L 775 315 L 755 340 L 720 345 L 695 330 L 680 305 Z" />
            {/* Oceania dots */}
            <circle cx="790" cy="300" r="8" />
            <circle cx="810" cy="285" r="5" />
          </g>
          {/* Grid lines */}
          <g stroke="#FFC107" strokeWidth="0.3" opacity="0.4">
            {[100, 200, 300, 400].map((y) => (
              <line key={`h${y}`} x1="0" y1={y} x2="1000" y2={y} />
            ))}
            {[100, 200, 300, 400, 500, 600, 700, 800, 900].map((x) => (
              <line key={`v${x}`} x1={x} y1="0" x2={x} y2="500" />
            ))}
          </g>
        </svg>
      </div>

      {/* Decorative circles */}
      <div className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full border border-cit-gold opacity-10 animate-pulse" />
      <div className="absolute bottom-1/4 left-1/4 w-48 h-48 rounded-full border border-white opacity-10 animate-pulse" style={{ animationDelay: '1s' }} />

      {/* Gold accent line */}
      <div
        className="absolute bottom-0 left-0 right-0 h-1"
        style={{ background: '#FFC107' }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-5 py-2 mb-8">
          <span className="text-cit-gold font-semibold text-sm font-opensans tracking-wider uppercase">
            🌏 CIT University
          </span>
          <span className="w-px h-4 bg-white/30" />
          <span className="text-white/80 text-sm font-opensans">
            Internationalization Office
          </span>
        </div>

        {/* Main heading */}
        <h1 className="font-poppins font-bold text-white mb-6 leading-tight">
          <span className="block text-4xl sm:text-5xl lg:text-6xl xl:text-7xl">
            IZN Corner
          </span>
          <span
            className="block text-2xl sm:text-3xl lg:text-4xl mt-2"
            style={{ color: '#FFC107' }}
          >
            Internationalization at CIT University
          </span>
        </h1>

        {/* Subtext */}
        <p className="font-opensans text-white/85 text-lg sm:text-xl lg:text-2xl max-w-3xl mx-auto mb-10 leading-relaxed">
          Bridging Cebu to the World through Global Partnerships, Student Exchange,
          and International Collaboration
        </p>

        {/* CTA Button */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            id="explore-global-reach-btn"
            onClick={scrollToArticles}
            className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-full font-poppins font-semibold text-cit-navy text-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:scale-105"
            style={{ background: '#FFC107' }}
          >
            <span>Explore Our Global Reach</span>
            <svg
              className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </button>

          <a
            href="https://cit.edu/sdg-corner/sdg17/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-poppins font-semibold text-white border-2 border-white/40 text-lg hover:border-white hover:bg-white/10 transition-all duration-300"
          >
            SDG Corner
          </a>
        </div>

        {/* Stats preview */}
        <div className="mt-16 grid grid-cols-3 gap-4 max-w-lg mx-auto">
          {[
            { value: '10+', label: 'Countries' },
            { value: '50+', label: 'Partners' },
            { value: '100+', label: 'Students' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="font-poppins font-bold text-3xl text-cit-gold">
                {stat.value}
              </div>
              <div className="font-opensans text-white/70 text-xs uppercase tracking-wider">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  );
}
