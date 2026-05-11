import { useState } from 'react';

// Partner markers — coordinates mapped to the 1000×507 viewBox
const partners = [
  {
    id: 'france',
    name: 'France',
    flag: '🇫🇷',
    note: 'Maternelle Academy — French OJT Program & Language Collaboration',
    cx: 480,
    cy: 180,
  },
  {
    id: 'uae',
    name: 'UAE (Dubai)',
    flag: '🇦🇪',
    note: 'XYZ Designers Dubai — BS Architecture International Internship Program',
    cx: 610,
    cy: 240,
  },
  {
    id: 'usa',
    name: 'United States',
    flag: '🇺🇸',
    note: 'ServiceNow — AI & Digital Workflow Certifications Partnership',
    cx: 220,
    cy: 205,
  },
  {
    id: 'japan',
    name: 'Japan',
    flag: '🇯🇵',
    note: 'Japanese University Partners — Academic Exchange & Research Collaboration',
    cx: 815,
    cy: 200,
  },
  {
    id: 'germany',
    name: 'Germany',
    flag: '🇩🇪',
    note: 'German Academic Partners — Engineering & Technology Collaboration',
    cx: 497,
    cy: 165,
  },
  {
    id: 'south-korea',
    name: 'South Korea',
    flag: '🇰🇷',
    note: 'Korean University Partners — Technology & Innovation Exchange Programs',
    cx: 783,
    cy: 200,
  },
  {
    id: 'australia',
    name: 'Australia',
    flag: '🇦🇺',
    note: 'Australian University Network — Pacific Region Academic Partnerships',
    cx: 790,
    cy: 360,
  },
];

// CIT-U home base — Philippines
const CITU = { cx: 775, cy: 273 };

export default function GlobalMap() {
  const [tooltip, setTooltip] = useState(null);
  const [activeId, setActiveId] = useState(null);

  const handleEnter = (p) => { setTooltip(p); setActiveId(p.id); };
  const handleLeave = () => { setTooltip(null); setActiveId(null); };
  const handleClick = (p) => {
    const next = activeId === p.id ? null : p.id;
    setActiveId(next);
    setTooltip(next ? p : null);
  };

  return (
    <section
      id="global-map-section"
      className="relative py-20"
      style={{
        backgroundImage: 'url(/redbg.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="absolute inset-0" style={{ background: 'rgba(50, 8, 8, 0.72)' }} />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-3">
            <div className="h-px w-10 bg-cit-gold" />
            <span className="font-opensans text-sm font-semibold text-cit-gold uppercase tracking-widest">
              Global Network
            </span>
            <div className="h-px w-10 bg-cit-gold" />
          </div>
          <h2 className="font-poppins font-bold text-3xl sm:text-4xl text-white mb-4">
            Our Global Partners
          </h2>
          <p className="font-opensans text-white/70 max-w-2xl mx-auto text-base">
            Hover or click the markers to explore CIT University's international partnerships
            across the globe.
          </p>
        </div>

        {/* Map container */}
        <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl mb-10">
          <style>{`
            @keyframes pulseRing {
              0%   { r: 8;  opacity: 0.8; }
              100% { r: 24; opacity: 0;   }
            }
            .pulse-a { animation: pulseRing 2s ease-out infinite; }
            .pulse-b { animation: pulseRing 2s ease-out infinite 0.7s; }
            .pulse-c { animation: pulseRing 2s ease-out infinite 1.4s; }
            @keyframes dashFlow {
              to { stroke-dashoffset: -20; }
            }
            .flow-line {
              stroke-dasharray: 4 6;
              animation: dashFlow 1.5s linear infinite;
            }
            @keyframes dotBob {
              0%, 100% { transform: translateY(0px); }
              50%       { transform: translateY(-3px); }
            }
            .home-dot { animation: dotBob 2s ease-in-out infinite; }
          `}</style>

          {/* Map image */}
          <div className="relative w-full" style={{ aspectRatio: '1000 / 507' }}>
            <img
              src="/redmap.jpg"
              alt="World Map"
              className="absolute inset-0 w-full h-full object-cover"
              draggable="false"
            />

            {/* SVG overlay — same viewBox as image ratio */}
            <svg
              viewBox="0 0 1000 507"
              className="absolute inset-0 w-full h-full"
              xmlns="http://www.w3.org/2000/svg"
              style={{ overflow: 'visible' }}
            >
              <defs>
                <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
                  <feDropShadow dx="0" dy="2" stdDeviation="4" floodColor="#000" floodOpacity="0.5" />
                </filter>
                <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                  <feGaussianBlur stdDeviation="3" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>

              {/* Connection lines from CIT-U to each partner */}
              {partners.map((p) => (
                <line
                  key={`line-${p.id}`}
                  x1={CITU.cx} y1={CITU.cy}
                  x2={p.cx} y2={p.cy}
                  stroke="#FFC107"
                  strokeWidth={activeId === p.id ? 1.6 : 0.8}
                  opacity={activeId === p.id ? 0.9 : 0.3}
                  strokeLinecap="round"
                  className="flow-line transition-all duration-300"
                />
              ))}

              {/* CIT-U home marker */}
              <g className="home-dot" style={{ transformOrigin: `${CITU.cx}px ${CITU.cy}px` }}>
                <circle cx={CITU.cx} cy={CITU.cy} r="12" fill="#FFC107" opacity="0.15" />
                <circle cx={CITU.cx} cy={CITU.cy} r="7" fill="#FFC107" filter="url(#glow)" />
                <circle cx={CITU.cx} cy={CITU.cy} r="3" fill="white" />
              </g>
              <text
                x={CITU.cx} y={CITU.cy + 20}
                textAnchor="middle"
                fill="#FFC107"
                fontSize="9"
                fontFamily="Poppins, sans-serif"
                fontWeight="bold"
                opacity="0.95"
              >
                CIT-U
              </text>

              {/* Partner markers */}
              {partners.map((p, i) => {
                const pulseClasses = ['pulse-a', 'pulse-b', 'pulse-c'];
                const cls = pulseClasses[i % 3];
                const isActive = activeId === p.id;
                return (
                  <g key={p.id}>
                    {/* Pulse ring */}
                    <circle
                      cx={p.cx} cy={p.cy}
                      fill="none"
                      stroke="#FFC107"
                      strokeWidth="1.5"
                      opacity="0"
                      r="8"
                      className={cls}
                    />
                    {/* Active glow */}
                    {isActive && (
                      <circle cx={p.cx} cy={p.cy} r="16" fill="#FFC107" opacity="0.2" />
                    )}
                    {/* Main dot */}
                    <circle
                      cx={p.cx} cy={p.cy}
                      r={isActive ? 9 : 7}
                      fill={isActive ? '#FFD54F' : '#FFC107'}
                      stroke="white"
                      strokeWidth="2"
                      filter="url(#glow)"
                      className="cursor-pointer transition-all duration-200"
                      onMouseEnter={() => handleEnter(p)}
                      onMouseLeave={handleLeave}
                      onClick={() => handleClick(p)}
                    />
                  </g>
                );
              })}

              {/* Tooltip */}
              {tooltip && (() => {
                const cx = tooltip.cx;
                const cy = tooltip.cy;
                const tipW = 205;
                const tipH = 80;
                const tipX = Math.min(Math.max(cx - tipW / 2, 8), 1000 - tipW - 8);
                const tipY = cy < 110 ? cy + 20 : cy - tipH - 20;
                return (
                  <g>
                    {/* Arrow */}
                    <line
                      x1={cx} y1={cy < 110 ? cy + 9 : cy - 9}
                      x2={cx} y2={tipY + (cy < 110 ? 0 : tipH)}
                      stroke="#FFC107" strokeWidth="1.2" opacity="0.6"
                    />
                    {/* Card */}
                    <rect
                      x={tipX} y={tipY}
                      width={tipW} height={tipH}
                      rx="8" ry="8"
                      fill="#3B0A0A"
                      stroke="#FFC107"
                      strokeWidth="1.5"
                      filter="url(#shadow)"
                    />
                    {/* Gold top accent */}
                    <rect
                      x={tipX} y={tipY}
                      width={tipW} height="22"
                      rx="8" fill="#FFC107" opacity="0.15"
                    />
                    <text
                      x={tipX + tipW / 2} y={tipY + 15}
                      textAnchor="middle"
                      fill="#FFC107"
                      fontSize="11"
                      fontWeight="bold"
                      fontFamily="Poppins, sans-serif"
                    >
                      {tooltip.flag} {tooltip.name}
                    </text>
                    <foreignObject x={tipX + 8} y={tipY + 27} width={tipW - 16} height={tipH - 32}>
                      <div xmlns="http://www.w3.org/1999/xhtml"
                        style={{ fontSize: '9px', color: 'rgba(255,255,255,0.88)', fontFamily: 'Open Sans, sans-serif', lineHeight: '1.4' }}>
                        {tooltip.note}
                      </div>
                    </foreignObject>
                  </g>
                );
              })()}
            </svg>
          </div>
        </div>

        {/* Partner flag pills */}
        <div className="text-center">
          <p className="font-opensans text-white/60 text-sm mb-5 uppercase tracking-wider">
            Partner Nations
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {partners.map((p) => (
              <button
                key={p.id}
                id={`flag-pill-${p.id}`}
                onMouseEnter={() => handleEnter(p)}
                onMouseLeave={handleLeave}
                onClick={() => handleClick(p)}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 bg-white/10 backdrop-blur-sm text-white text-sm font-opensans hover:border-cit-gold hover:bg-white/20 transition-all duration-200 cursor-pointer"
                style={{ borderColor: activeId === p.id ? '#FFC107' : undefined }}
              >
                <span className="text-xl">{p.flag}</span>
                <span>{p.name}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
