// SDGHeader — matches the cit.edu SDG Corner layout:
// 1. SDGCORNER.png banner — centered at natural 800×81px
// 2. Row of SDG 1–17 icons (50×50px) + slot 18 with hover-inflate
// 3. Maroon (#800000) SDG-18 banner — full-width, ~160px tall (cit.edu: 150px icon + padding)

const SDG_ICONS = [
  { num: 1, src: '/sdg1.png' },
  { num: 2, src: '/sdg2.png' },
  { num: 3, src: '/sdg3.png' },
  { num: 4, src: '/sdg4.png' },
  { num: 5, src: '/sdg5.png' },
  { num: 6, src: '/sdg6.png' },
  { num: 7, src: '/sdg7.png' },
  { num: 8, src: '/sdg8.png' },
  { num: 9, src: '/sdg9.png' },
  { num: 10, src: '/sdg10.png' },
  { num: 11, src: '/sdg11.png' },
  { num: 12, src: '/sdg12.png' },
  { num: 13, src: '/sdg13.png' },
  { num: 14, src: '/sdg14.png' },
  { num: 15, src: '/sdg15.png' },
  { num: 16, src: '/sdg16.png' },
  { num: 17, src: '/sdg17.png' },
];

export default function SDGHeader() {
  return (
    <div id="sdg-header">

      {/* ── 1. SDG Corner banner — centered at natural 800×81px (matches cit.edu) ── */}
      <div className="w-full flex justify-center bg-white py-2">
        <img
          src="/SDGCORNER.png"
          alt="Sustainable Development Goals Corner — CIT University"
          width="800"
          height="81"
          className="w-full object-contain"
          style={{ maxWidth: '800px', height: 'auto' }}
          draggable="false"
        />
      </div>

      {/* ── 2. SDG icon strip (1–17 + slot 18) — 50×50px icons, hover inflate ── */}
      <style>{`
        .sdg-icon {
          transition: transform 0.18s ease;
          cursor: default;
        }
        .sdg-icon:hover {
          transform: scale(1.25);
          z-index: 10;
          position: relative;
        }
        .sdg-slot18 {
          transition: transform 0.18s ease;
          cursor: default;
        }
        .sdg-slot18:hover {
          transform: scale(1.25);
          z-index: 10;
          position: relative;
        }
      `}</style>

      <div className="w-full flex justify-center bg-white pb-2">
        <div
          className="flex items-center justify-center flex-nowrap"
          style={{ width: '100%', maxWidth: '1200px', gap: '8px', padding: '6px 12px', overflowX: 'auto' }}
        >
          {SDG_ICONS.map((sdg) => (
            <img
              key={sdg.num}
              src={sdg.src}
              alt={`SDG ${sdg.num}`}
              title={`SDG ${sdg.num}`}
              className="sdg-icon object-cover flex-shrink-0"
              style={{ width: '50px', height: '50px' }}
              draggable="false"
            />
          ))}

          {/* Slot 18 — Internationalization (real sdg18.png icon, highlighted) */}
          <img
            src="/sdg18.png"
            alt="SDG 18 — Internationalization"
            title="SDG 18 — Internationalization (IZN Corner)"
            className="sdg-slot18 object-cover flex-shrink-0"
            style={{
              width: '50px',
              height: '50px',
            }}
            draggable="false"
          />
        </div>
      </div>

      {/* ── 3. SDG-18 banner — width matches article cards (max-w-7xl) ── */}
      <div className="w-full bg-white pt-2 pb-0">
        <div className="max-w-7xl mx-auto">
          <div
            id="sdg18-banner"
            className="flex items-center overflow-hidden"
            style={{ background: '#800000', minHeight: '170px' }}
          >
            {/* Left — sdg18.png icon only */}
            <div
              className="flex items-center justify-center flex-shrink-0 px-8 py-5"
              style={{ minWidth: '180px' }}
            >
              <img
                src="/sdg18.png"
                alt="SDG 18 — Internationalization"
                style={{ width: '160px', height: '160px', objectFit: 'contain' }}
                draggable="false"
              />
            </div>

            {/* Right — description text */}
            <div className="flex items-center px-12 py-6 flex-1">
              <p className="font-opensans font-semibold text-white" style={{ fontSize: '16px', lineHeight: 1.75 }}>
                Strengthen global academic partnerships, promote student and faculty mobility, and
                foster cross-cultural collaboration to produce globally competitive CIT graduates
                ready to thrive on the international stage.
              </p>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
