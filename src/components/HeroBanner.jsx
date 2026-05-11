import Antigravity from './Antigravity';

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

      {/* Antigravity particle canvas — fills the hero entirely */}
      <div className="absolute inset-0" style={{ zIndex: 1 }}>
        <Antigravity
          count={280}
          magnetRadius={3}
          ringRadius={3.5}
          waveSpeed={0.3}
          waveAmplitude={0.6}
          particleSize={0.6}
          lerpSpeed={0.04}
          color="#FFC107"
          autoAnimate={true}
          particleVariance={0.6}
          rotationSpeed={0.05}
          depthFactor={0.5}
          pulseSpeed={2}
          particleShape="capsule"
          fieldStrength={12}
        />
      </div>

      {/* Gold accent line */}
      <div
        className="absolute bottom-0 left-0 right-0 h-1"
        style={{ background: '#FFC107', zIndex: 2 }}
      />

      {/* Content */}
      <div className="relative max-w-5xl mx-auto px-6 text-center" style={{ zIndex: 3 }}>
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
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce" style={{ zIndex: 3 }}>
        <svg className="w-6 h-6 text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  );
}
