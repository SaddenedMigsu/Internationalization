import { useState, useRef } from 'react';

const partners = [
  {
    id: 'france',
    name: 'France',
    flag: '🇫🇷',
    note: 'Maternelle Academy — French OJT Program & Language Collaboration',
    cx: '460',
    cy: '105',
  },
  {
    id: 'uae',
    name: 'UAE (Dubai)',
    flag: '🇦🇪',
    note: 'XYZ Designers Dubai — BS Architecture International Internship Program',
    cx: '565',
    cy: '148',
  },
  {
    id: 'usa',
    name: 'United States',
    flag: '🇺🇸',
    note: 'ServiceNow — AI & Digital Workflow Certifications Partnership',
    cx: '165',
    cy: '128',
  },
  {
    id: 'japan',
    name: 'Japan',
    flag: '🇯🇵',
    note: 'Japanese University Partners — Academic Exchange & Research Collaboration',
    cx: '740',
    cy: '118',
  },
  {
    id: 'germany',
    name: 'Germany',
    flag: '🇩🇪',
    note: 'German Academic Partners — Engineering & Technology Collaboration',
    cx: '478',
    cy: '88',
  },
  {
    id: 'south-korea',
    name: 'South Korea',
    flag: '🇰🇷',
    note: 'Korean University Partners — Technology & Innovation Exchange Programs',
    cx: '718',
    cy: '105',
  },
  {
    id: 'australia',
    name: 'Australia',
    flag: '🇦🇺',
    note: 'Australian University Network — Pacific Region Academic Partnerships',
    cx: '730',
    cy: '290',
  },
];

export default function GlobalMap() {
  const [tooltip, setTooltip] = useState(null);
  const svgRef = useRef(null);

  const handleDotClick = (partner) => {
    setTooltip(tooltip?.id === partner.id ? null : { ...partner });
  };

  const handleDotEnter = (partner) => {
    setTooltip({ ...partner });
  };

  const handleDotLeave = () => {
    setTooltip(null);
  };

  return (
    <section id="global-map-section" className="py-20" style={{ background: 'linear-gradient(135deg, #001f5b 0%, #003087 100%)' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
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
            Click or hover on the markers to explore CIT University's international partnerships
            across the globe.
          </p>
        </div>

        {/* Map container */}
        <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl mb-10">
          <div className="relative overflow-x-auto">
            <svg
              ref={svgRef}
              viewBox="0 0 900 450"
              className="w-full min-w-[600px]"
              xmlns="http://www.w3.org/2000/svg"
              style={{ background: '#001440' }}
            >
              {/* Ocean background */}
              <rect width="900" height="450" fill="#001440" />

              {/* Grid lines */}
              <g stroke="#FFC107" strokeWidth="0.3" opacity="0.15">
                {[75, 150, 225, 300, 375].map((y) => (
                  <line key={`h${y}`} x1="0" y1={y} x2="900" y2={y} />
                ))}
                {[90, 180, 270, 360, 450, 540, 630, 720, 810].map((x) => (
                  <line key={`v${x}`} x1={x} y1="0" x2={x} y2="450" />
                ))}
                {/* Equator */}
                <line x1="0" y1="225" x2="900" y2="225" stroke="#FFC107" strokeWidth="0.8" opacity="0.3" />
              </g>

              {/* Continent shapes — stylized SVG world map */}
              <g fill="#0a2f6e" stroke="#1a4a8a" strokeWidth="0.8">
                {/* North America */}
                <path d="M 100 60 L 175 50 L 215 80 L 230 110 L 225 150 L 210 175 L 180 195 L 145 200 L 115 185 L 90 155 L 80 115 L 85 80 Z" />
                {/* Greenland */}
                <path d="M 195 30 L 235 25 L 250 45 L 240 65 L 210 68 L 195 55 Z" />
                {/* Central America */}
                <path d="M 170 200 L 195 195 L 205 215 L 195 230 L 175 225 Z" />
                {/* Caribbean */}
                <ellipse cx="225" cy="205" rx="15" ry="8" />
                {/* South America */}
                <path d="M 185 240 L 235 228 L 260 255 L 268 300 L 265 350 L 248 385 L 220 398 L 195 385 L 178 355 L 170 310 L 172 265 Z" />
                {/* Western Europe */}
                <path d="M 415 55 L 468 48 L 500 65 L 505 90 L 490 105 L 462 110 L 435 100 L 415 80 Z" />
                {/* Scandinavia */}
                <path d="M 445 30 L 475 25 L 490 45 L 480 65 L 458 68 L 442 55 Z" />
                {/* Eastern Europe / Western Asia */}
                <path d="M 500 55 L 565 48 L 600 70 L 605 100 L 590 120 L 560 125 L 525 115 L 500 95 Z" />
                {/* Africa */}
                <path d="M 430 135 L 490 125 L 525 150 L 535 200 L 530 265 L 510 310 L 485 330 L 455 325 L 430 295 L 415 250 L 412 195 L 418 155 Z" />
                {/* Middle East */}
                <path d="M 530 120 L 590 110 L 615 130 L 618 160 L 600 175 L 570 170 L 545 155 Z" />
                {/* Central Asia */}
                <path d="M 600 65 L 680 55 L 720 75 L 730 105 L 715 125 L 680 130 L 645 120 L 615 105 Z" />
                {/* Indian Subcontinent */}
                <path d="M 600 130 L 650 125 L 665 145 L 660 180 L 640 200 L 615 195 L 600 170 Z" />
                {/* East Asia */}
                <path d="M 690 60 L 770 55 L 800 80 L 805 115 L 785 135 L 755 140 L 720 130 L 695 110 Z" />
                {/* Southeast Asia */}
                <path d="M 680 145 L 720 140 L 745 160 L 750 185 L 730 200 L 705 195 L 685 175 Z" />
                {/* Philippines dot */}
                <circle cx="745" cy="180" r="6" fill="#FFC107" opacity="0.7" />
                {/* Japan */}
                <path d="M 775 80 L 800 78 L 815 95 L 810 115 L 790 120 L 772 108 Z" />
                {/* Australia */}
                <path d="M 690 260 L 760 255 L 800 275 L 808 320 L 795 355 L 760 368 L 725 360 L 700 335 L 688 295 Z" />
                {/* New Zealand */}
                <path d="M 815 320 L 835 315 L 845 335 L 838 355 L 820 350 L 812 335 Z" />
                {/* UK / Ireland */}
                <ellipse cx="420" cy="60" rx="12" ry="18" />
                {/* Iceland */}
                <ellipse cx="385" cy="40" rx="14" ry="10" />
              </g>

              {/* Partner marker dots with pulse rings */}
              {partners.map((p) => (
                <g key={p.id}>
                  {/* Pulse rings */}
                  <circle
                    cx={p.cx}
                    cy={p.cy}
                    r="14"
                    fill="none"
                    stroke="#FFC107"
                    strokeWidth="1.5"
                    opacity="0"
                    className="pulse-ring"
                    style={{ transformOrigin: `${p.cx}px ${p.cy}px`, animationDelay: `${Math.random() * 2}s` }}
                  />
                  <circle
                    cx={p.cx}
                    cy={p.cy}
                    r="10"
                    fill="none"
                    stroke="#FFC107"
                    strokeWidth="1"
                    opacity="0"
                    className="pulse-ring"
                    style={{ transformOrigin: `${p.cx}px ${p.cy}px`, animationDelay: `${Math.random() * 2 + 0.5}s` }}
                  />
                  {/* Clickable dot */}
                  <circle
                    cx={p.cx}
                    cy={p.cy}
                    r="7"
                    fill={tooltip?.id === p.id ? '#FFD54F' : '#FFC107'}
                    stroke="white"
                    strokeWidth="2"
                    className="cursor-pointer hover:scale-125 transition-transform"
                    style={{ transformOrigin: `${p.cx}px ${p.cy}px` }}
                    onMouseEnter={() => handleDotEnter(p)}
                    onMouseLeave={handleDotLeave}
                    onClick={() => handleDotClick(p)}
                  />
                </g>
              ))}

              {/* Tooltip in SVG */}
              {tooltip && (() => {
                const cx = Number(tooltip.cx);
                const cy = Number(tooltip.cy);
                const tipW = 180;
                const tipH = 70;
                const tipX = Math.min(Math.max(cx - tipW / 2, 5), 900 - tipW - 5);
                const tipY = cy < 80 ? cy + 15 : cy - tipH - 15;
                return (
                  <g>
                    <rect
                      x={tipX}
                      y={tipY}
                      width={tipW}
                      height={tipH}
                      rx="6"
                      fill="#001f5b"
                      stroke="#FFC107"
                      strokeWidth="1.5"
                    />
                    <text
                      x={tipX + tipW / 2}
                      y={tipY + 22}
                      textAnchor="middle"
                      fill="#FFC107"
                      fontSize="11"
                      fontWeight="bold"
                      fontFamily="Poppins, sans-serif"
                    >
                      {tooltip.flag} {tooltip.name}
                    </text>
                    {/* Wrap note text */}
                    <foreignObject x={tipX + 8} y={tipY + 30} width={tipW - 16} height={tipH - 35}>
                      <div xmlns="http://www.w3.org/1999/xhtml"
                        style={{ fontSize: '9px', color: 'rgba(255,255,255,0.85)', fontFamily: 'Open Sans, sans-serif', lineHeight: '1.3' }}>
                        {tooltip.note}
                      </div>
                    </foreignObject>
                  </g>
                );
              })()}

              {/* CIT Philippines label */}
              <text x="745" y="200" textAnchor="middle" fill="#FFC107" fontSize="9" fontFamily="Poppins, sans-serif" fontWeight="bold">
                CIT-U
              </text>
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
                onMouseEnter={() => setTooltip(p)}
                onMouseLeave={() => setTooltip(null)}
                onClick={() => handleDotClick(p)}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 bg-white/10 backdrop-blur-sm text-white text-sm font-opensans hover:border-cit-gold hover:bg-white/20 transition-all duration-200 cursor-pointer"
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
