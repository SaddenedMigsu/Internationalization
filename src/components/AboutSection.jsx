export default function AboutSection() {
  const stats = [
    {
      id: 'countries-stat',
      icon: '🌍',
      value: '10+',
      label: 'Countries Reached',
      description: 'Active international partnerships across Asia, Europe, the Middle East, and the Pacific.',
    },
    {
      id: 'moa-stat',
      icon: '📜',
      value: '50+',
      label: 'MOA/MOU Partners',
      description: 'Memoranda of Agreement and Understanding with universities and industry partners worldwide.',
    },
    {
      id: 'students-stat',
      icon: '✈️',
      value: '100+',
      label: 'Outbound Students',
      description: 'CIT students and faculty who have participated in international mobility programs.',
    },
  ];

  return (
    <section id="about-section" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section label */}
        <div className="flex items-center gap-3 mb-3">
          <div className="h-1 w-10 rounded-full bg-cit-gold" />
          <span className="font-opensans text-sm font-semibold text-cit-gold uppercase tracking-widest">
            About
          </span>
        </div>

        <h2 className="font-poppins font-bold text-3xl sm:text-4xl text-cit-navy mb-14">
          What is Internationalization?
        </h2>

        {/* Two-column layout */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Text column */}
          <div>
            <p className="font-opensans text-gray-700 text-lg leading-relaxed mb-6">
              The{' '}
              <strong className="text-cit-navy">Internationalization Office of CIT University</strong>,
              under the leadership of{' '}
              <strong className="text-cit-navy">Dr. Larmie S. Feliscuzo</strong>, drives CIT's vision
              to produce globally competitive graduates through international partnerships, student and
              faculty mobility programs, and cross-cultural academic exchanges.
            </p>
            <p className="font-opensans text-gray-600 text-base leading-relaxed mb-8">
              Our office serves as the primary gateway connecting CIT University to the international
              academic and industry community — fostering collaboration that enriches the educational
              experience for every CITean and positions the university as a globally recognized
              institution of excellence.
            </p>

            {/* Key focus areas */}
            <ul className="space-y-3">
              {[
                'Establishing MOAs/MOUs with foreign universities and industry leaders',
                'Facilitating student and faculty exchange programs',
                'Integrating global perspectives into the curriculum',
                'Developing cross-border internship and research opportunities',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 font-opensans text-gray-700">
                  <span
                    className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center mt-0.5 text-xs font-bold"
                    style={{ background: '#FFC107', color: '#7B1C1C' }}
                  >
                    ✓
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Right column - illustrative visual */}
          <div className="relative">
            <div
              className="relative rounded-2xl overflow-hidden shadow-2xl"
              style={{ background: 'linear-gradient(135deg, #7B1C1C 0%, #9B2335 100%)' }}
            >
              <div className="p-10 text-center">
                {/* Globe illustration */}
                <div className="mx-auto w-48 h-48 relative mb-6">
                  <div className="w-48 h-48 rounded-full border-4 border-cit-gold/30 flex items-center justify-center relative overflow-hidden"
                    style={{ background: 'rgba(255,255,255,0.08)' }}>
                    <span className="text-8xl">🌏</span>
                    {/* Orbit ring */}
                    <div className="absolute inset-0 rounded-full border-2 border-dashed border-cit-gold/40 animate-spin"
                      style={{ animationDuration: '20s' }} />
                  </div>
                  {/* Satellite dots */}
                  {[0, 72, 144, 216, 288].map((deg, i) => (
                    <div
                      key={i}
                      className="absolute w-4 h-4 rounded-full bg-cit-gold shadow-lg"
                      style={{
                        top: `${50 + 46 * Math.sin((deg * Math.PI) / 180)}%`,
                        left: `${50 + 46 * Math.cos((deg * Math.PI) / 180)}%`,
                        transform: 'translate(-50%, -50%)',
                      }}
                    />
                  ))}
                </div>

                <h3 className="font-poppins font-bold text-white text-xl mb-2">
                  CIT's Global Network
                </h3>
                <p className="font-opensans text-white/70 text-sm">
                  Connected to partners across 6 continents
                </p>

                {/* Mini flag strip */}
                <div className="flex justify-center gap-2 mt-6 text-2xl">
                  {['🇵🇭', '🇫🇷', '🇦🇪', '🇺🇸', '🇯🇵', '🇩🇪', '🇰🇷'].map((flag) => (
                    <span key={flag} className="hover:scale-125 transition-transform cursor-default" title={flag}>
                      {flag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Floating accents */}
            <div
              className="absolute -top-4 -right-4 w-24 h-24 rounded-full opacity-20 blur-xl"
              style={{ background: '#FFC107' }}
            />
            <div
              className="absolute -bottom-4 -left-4 w-32 h-32 rounded-full opacity-15 blur-xl"
              style={{ background: '#7B1C1C' }}
            />
          </div>
        </div>

        {/* Stats strip */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {stats.map((stat) => (
            <div
              key={stat.id}
              id={stat.id}
              className="card-hover rounded-2xl p-8 text-center border border-gray-100 shadow-sm"
              style={{ background: 'linear-gradient(135deg, #fff8f8 0%, #fff 100%)' }}
            >
              <div className="text-4xl mb-3">{stat.icon}</div>
              <div
                className="font-poppins font-extrabold text-5xl mb-1"
                style={{ color: '#7B1C1C' }}
              >
                {stat.value}
              </div>
              <div className="font-poppins font-semibold text-gray-800 text-lg mb-2">
                {stat.label}
              </div>
              <div className="font-opensans text-gray-500 text-sm leading-relaxed">
                {stat.description}
              </div>
              <div className="mt-4 h-1 w-16 mx-auto rounded-full" style={{ background: '#FFC107' }} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
