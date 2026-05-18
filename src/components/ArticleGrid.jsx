import ArticleCard from './ArticleCard';
import articles from '../data/articles';

export default function ArticleGrid() {
  return (
    <section id="articles-section" className="bg-white">

      {/* ── IZN Corner Header — modern editorial, CIT maroon/gold/white theme ── */}
      <div className="relative overflow-hidden" style={{ background: '#7B1C1C' }}>

        {/* Subtle diagonal gold accent — top right decoration */}
        <div
          className="absolute top-0 right-0 pointer-events-none"
          style={{
            width: '320px',
            height: '100%',
            background: 'linear-gradient(135deg, transparent 60%, rgba(212,175,55,0.12) 100%)',
          }}
        />
        {/* Thin gold bottom border */}
        <div className="absolute bottom-0 left-0 right-0" style={{ height: '3px', background: 'linear-gradient(90deg, #7B1C1C, #D4AF37, #7B1C1C)' }} />

        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-14">
          <div className="flex flex-col items-center text-center gap-3">

            {/* Eyebrow — gold pill label */}
            <span
              className="inline-flex items-center gap-2 font-opensans font-semibold uppercase tracking-widest text-xs px-4 py-1.5 rounded-full"
              style={{ background: 'rgba(212,175,55,0.15)', color: '#D4AF37', border: '1px solid rgba(212,175,55,0.35)', letterSpacing: '0.18em' }}
            >
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                <circle cx="5" cy="5" r="4" stroke="#D4AF37" strokeWidth="1.5"/>
              </svg>
              CIT University · Office of Internationalization
            </span>

            {/* Main title */}
            <h1
              className="font-poppins font-black text-white"
              style={{ fontSize: 'clamp(36px, 6vw, 64px)', lineHeight: 1.05, letterSpacing: '-0.02em' }}
            >
              IZN Corner
            </h1>

            {/* Gold rule */}
            <div style={{ width: '56px', height: '3px', background: '#D4AF37', borderRadius: '2px', margin: '2px 0' }} />

            {/* Subtitle */}
            <p
              className="font-opensans text-white/75 max-w-xl"
              style={{ fontSize: 'clamp(14px, 1.5vw, 16px)', lineHeight: 1.7 }}
            >
              Stories, partnerships, and milestones from CIT University's
              Internationalization Office — connecting Cebu to the world.
            </p>

          </div>
        </div>
      </div>

      {/* ── Article Cards ── */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {articles.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>

        {/* View all CTA */}
        <div className="text-center mt-12">
          <a
            id="view-all-articles-btn"
            href="https://cit.edu/news-and-updates/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-poppins font-semibold text-sm px-7 py-3 transition-all duration-200"
            style={{
              color: '#7B1C1C',
              border: '1.5px solid #7B1C1C',
            }}
            onMouseEnter={e => { e.currentTarget.style.background='#7B1C1C'; e.currentTarget.style.color='#fff'; }}
            onMouseLeave={e => { e.currentTarget.style.background='transparent'; e.currentTarget.style.color='#7B1C1C'; }}
          >
            View All Articles on CIT.edu
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>

    </section>
  );
}
