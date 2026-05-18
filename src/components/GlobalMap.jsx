import { useState } from 'react';

// Official CIT-U international partners (from admin records)
const partners = [
  {
    id: 'japan',
    name: 'Japan',
    flag: '🇯🇵',
    flagCode: 'jp',
    note: 'Nihon University (MOA) · AI Monozukuri (MOU) · Setsunan University (INTL\' MOU) — Academic exchange & research collaboration',
    link: 'https://cit.edu/2026/02/14/cit-university-winter-program-2026-japan/',
    cx: 872, cy: 185,
  },
  {
    id: 'taiwan',
    name: 'Taiwan',
    flag: '🇹🇼',
    flagCode: 'tw',
    note: 'NCCU & StellarPH (MOU) · Mingshin University of Science & Technology (MOU) · Southern Taiwan University of Science & Technology (Student Exchange Agreement)',
    link: 'https://cit.edu/2025/09/01/cit-university-nccu-and-stellarph-forge-stronger-ties-for-innovation-and-global-collaboration/',
    cx: 825, cy: 225,
  },
  {
    id: 'vietnam',
    name: 'Vietnam',
    flag: '🇻🇳',
    flagCode: 'vn',
    note: 'Dong Nai Technology University (MOU) · Saigon Business School, Ho Chi Minh City (MOU)',
    link: 'https://cit.edu/news-and-updates/',
    cx: 795, cy: 255,
  },
  {
    id: 'malaysia',
    name: 'Malaysia',
    flag: '🇲🇾',
    flagCode: 'my',
    note: 'Universiti Sains Malaysia (MOU) · SEGi University Sdn Bhd, Selangor (MOU)',
    link: 'https://cit.edu/news-and-updates/',
    cx: 772, cy: 278,
  },
  {
    id: 'singapore',
    name: 'Singapore',
    flag: '🇸🇬',
    flagCode: 'sg',
    note: 'IMA Institute of Management Accountants, Inc. — Paya Lebar Square (MOU)',
    link: 'https://cit.edu/news-and-updates/',
    cx: 788, cy: 295,
  },
  {
    id: 'indonesia',
    name: 'Indonesia',
    flag: '🇮🇩',
    flagCode: 'id',
    note: 'Binus University — Jakarta, Indonesia (MOA)',
    link: 'https://cit.edu/news-and-updates/',
    cx: 810, cy: 290,
  },
  {
    id: 'india',
    name: 'India',
    flag: '🇮🇳',
    flagCode: 'in',
    note: 'O.P. Jindal Global University (MOU) · KPR Institute of Engineering & Technology (MOU)',
    link: 'https://cit.edu/2026/01/19/cit-university-strengthens-global-linkages-through-strategic-engagement-with-o-p-jindal-global-university/',
    cx: 710, cy: 233,
  },
  {
    id: 'bangladesh',
    name: 'Bangladesh',
    flag: '🇧🇩',
    flagCode: 'bd',
    note: 'Daffodil International University, Dhaka (MOU) · American International University-Bangladesh (MOU)',
    link: 'https://cit.edu/news-and-updates/',
    cx: 740, cy: 222,
  },
  {
    id: 'australia',
    name: 'Australia',
    flag: '🇦🇺',
    flagCode: 'au',
    note: 'Open Learning — Digital education & online learning partnership',
    link: 'https://cit.edu/2025/07/23/cit-university-strengthens-global-ties-with-france-through-new-partnerships-and-alumni-connections/',
    cx: 838, cy: 368,
  },
  {
    id: 'france',
    name: 'France',
    flag: '🇫🇷',
    flagCode: 'fr',
    note: 'Université de Caen Normandie — MOU for academic partnership, alumni connections & student mobility',
    link: 'https://cit.edu/2025/07/23/cit-university-strengthens-global-ties-with-france-through-new-partnerships-and-alumni-connections/',
    cx: 500, cy: 150,
  },
  {
    id: 'usa',
    name: 'United States',
    flag: '🇺🇸',
    flagCode: 'us',
    note: 'ServiceNow — AI & Digital Workflow Certifications Partnership (with EY GDS)',
    link: 'https://cebudailynews.inquirer.net/632871/cit-university-pioneers-first-of-its-kind-global-academic-model-with-servicenow-and-ey-gds',
    cx: 210, cy: 185,
  },
];

// CIT-U home base — Philippines
const CITU = { cx: 818, cy: 262 };

export default function GlobalMap() {
  const [tooltip, setTooltip] = useState(null);
  const [activeId, setActiveId] = useState(null);

  const handleEnter = (p) => { setTooltip(p); setActiveId(p.id); };
  const handleLeave = () => { setTooltip(null); setActiveId(null); };
  const handleClick = (p) => {
    setActiveId(activeId === p.id ? null : p.id);
    setTooltip(activeId === p.id ? null : p);
    if (p.link) window.open(p.link, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="global-map-section" className="relative py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-3">
            <div className="h-px w-10 bg-[#7B1C1C]" />
            <span className="font-opensans text-sm font-semibold text-[#7B1C1C] uppercase tracking-widest">
              Global Network
            </span>
            <div className="h-px w-10 bg-[#7B1C1C]" />
          </div>
          <h2 className="font-poppins font-bold text-3xl sm:text-4xl text-gray-900 mb-4">
            Our Global Partners
          </h2>
          <p className="font-opensans text-gray-500 max-w-2xl mx-auto text-base">
            Click any marker or pill to read the article about CIT University's
            international partnerships across the globe.
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
            @keyframes dashFlow { to { stroke-dashoffset: -20; } }
            .flow-line { stroke-dasharray: 4 6; animation: dashFlow 1.5s linear infinite; }
            @keyframes dotBob {
              0%, 100% { transform: translateY(0px); }
              50%       { transform: translateY(-3px); }
            }
            .home-dot { animation: dotBob 2s ease-in-out infinite; }
          `}</style>

          <div className="relative w-full" style={{ aspectRatio: '1000 / 507' }}>
            <img
              src="/mapmaroon.jpg"
              alt="World Map"
              className="absolute inset-0 w-full h-full object-cover"
              draggable="false"
            />

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
                    <circle
                      cx={p.cx} cy={p.cy}
                      fill="none" stroke="#FFC107" strokeWidth="1.5"
                      opacity="0" r="8" className={cls}
                    />
                    {isActive && (
                      <circle cx={p.cx} cy={p.cy} r="16" fill="#FFC107" opacity="0.2" />
                    )}
                    <circle
                      cx={p.cx} cy={p.cy}
                      r={isActive ? 9 : 7}
                      fill={isActive ? '#FFD54F' : '#FFC107'}
                      stroke="white" strokeWidth="2"
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
                const tipW = 230;
                const tipH = 90;
                const tipX = Math.min(Math.max(cx - tipW / 2, 8), 1000 - tipW - 8);
                const tipY = cy < 110 ? cy + 20 : cy - tipH - 20;
                return (
                  <g>
                    <line
                      x1={cx} y1={cy < 110 ? cy + 9 : cy - 9}
                      x2={cx} y2={tipY + (cy < 110 ? 0 : tipH)}
                      stroke="#FFC107" strokeWidth="1.2" opacity="0.6"
                    />
                    <rect
                      x={tipX} y={tipY}
                      width={tipW} height={tipH}
                      rx="8" ry="8"
                      fill="#3B0A0A"
                      stroke="#FFC107" strokeWidth="1.5"
                      filter="url(#shadow)"
                    />
                    <rect
                      x={tipX} y={tipY}
                      width={tipW} height="22"
                      rx="8" fill="#FFC107" opacity="0.15"
                    />
                    <text
                      x={tipX + tipW / 2} y={tipY + 15}
                      textAnchor="middle"
                      fill="#FFC107" fontSize="11"
                      fontWeight="bold" fontFamily="Poppins, sans-serif"
                    >
                      {tooltip.flag} {tooltip.name}
                    </text>
                    <foreignObject x={tipX + 8} y={tipY + 27} width={tipW - 16} height={tipH - 32}>
                      <div xmlns="http://www.w3.org/1999/xhtml"
                        style={{ fontSize: '8.5px', color: 'rgba(255,255,255,0.88)', fontFamily: 'Open Sans, sans-serif', lineHeight: '1.45' }}>
                        {tooltip.note}
                      </div>
                    </foreignObject>
                  </g>
                );
              })()}
            </svg>
          </div>
        </div>

        {/* Partner flag pills — row 1: 6, row 2: 5 */}
        <div className="text-center">
          <p className="font-opensans text-gray-500 text-sm mb-5 uppercase tracking-wider">
            Partner Nations
          </p>
          {/* Row 1 — 6 pills */}
          <div className="flex justify-center gap-3 mb-3">
            {partners.slice(0, 6).map((p) => (
              <button
                key={p.id}
                id={`flag-pill-${p.id}`}
                onMouseEnter={() => handleEnter(p)}
                onMouseLeave={handleLeave}
                onClick={() => handleClick(p)}
                className="inline-flex items-center justify-center gap-2 rounded-full border text-sm font-opensans transition-all duration-200 cursor-pointer bg-white"
                style={{
                  width: '148px', height: '42px', flexShrink: 0,
                  borderColor: activeId === p.id ? '#7B1C1C' : '#D1D5DB',
                  color: activeId === p.id ? '#7B1C1C' : '#374151',
                  fontWeight: activeId === p.id ? '600' : '400',
                }}
              >
                <img src={`https://flagcdn.com/w20/${p.flagCode}.png`} srcSet={`https://flagcdn.com/w40/${p.flagCode}.png 2x`} width="20" height="15" alt={p.name} className="rounded-sm object-cover flex-shrink-0" />
                <span className="truncate">{p.name}</span>
              </button>
            ))}
          </div>
          {/* Row 2 — 5 pills */}
          <div className="flex justify-center gap-3">
            {partners.slice(6).map((p) => (
              <button
                key={p.id}
                id={`flag-pill-${p.id}`}
                onMouseEnter={() => handleEnter(p)}
                onMouseLeave={handleLeave}
                onClick={() => handleClick(p)}
                className="inline-flex items-center justify-center gap-2 rounded-full border text-sm font-opensans transition-all duration-200 cursor-pointer bg-white"
                style={{
                  width: '148px', height: '42px', flexShrink: 0,
                  borderColor: activeId === p.id ? '#7B1C1C' : '#D1D5DB',
                  color: activeId === p.id ? '#7B1C1C' : '#374151',
                  fontWeight: activeId === p.id ? '600' : '400',
                }}
              >
                <img src={`https://flagcdn.com/w20/${p.flagCode}.png`} srcSet={`https://flagcdn.com/w40/${p.flagCode}.png 2x`} width="20" height="15" alt={p.name} className="rounded-sm object-cover flex-shrink-0" />
                <span className="truncate">{p.name}</span>
              </button>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
