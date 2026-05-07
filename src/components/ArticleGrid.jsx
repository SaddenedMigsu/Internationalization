import { useState } from 'react';
import ArticleCard from './ArticleCard';
import articles from '../data/articles';

export default function ArticleGrid() {
  const [activeCategory, setActiveCategory] = useState('All');
  const categories = ['All', ...new Set(articles.map((a) => a.category))];

  const filtered =
    activeCategory === 'All'
      ? articles
      : articles.filter((a) => a.category === activeCategory);

  return (
    <section id="articles-section" className="py-20 bg-cit-light">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-3">
            <div className="h-px w-10 bg-cit-gold" />
            <span className="font-opensans text-sm font-semibold text-cit-gold uppercase tracking-widest">
              Stories & Milestones
            </span>
            <div className="h-px w-10 bg-cit-gold" />
          </div>
          <h2 className="font-poppins font-bold text-3xl sm:text-4xl text-cit-navy mb-4">
            Global Stories & Milestones
          </h2>
          <p className="font-opensans text-gray-600 max-w-2xl mx-auto text-base">
            Discover how CIT University students and faculty are making their mark on the world
            stage through partnerships, exchanges, and international achievements.
          </p>
        </div>

        {/* Category filter pills */}
        <div className="flex flex-wrap gap-2 justify-center mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              id={`filter-${cat.toLowerCase().replace(' ', '-')}`}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full text-sm font-semibold font-opensans border transition-all duration-200 ${
                activeCategory === cat
                  ? 'bg-cit-navy text-white border-cit-navy shadow-md'
                  : 'bg-white text-gray-600 border-gray-200 hover:border-cit-navy hover:text-cit-navy'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {filtered.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>

        {/* View all CTA */}
        <div className="text-center mt-12">
          <button
            id="view-all-articles-btn"
            className="inline-flex items-center gap-3 px-8 py-3.5 rounded-full font-poppins font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-lg"
            style={{ background: 'linear-gradient(135deg, #003087 0%, #004db3 100%)' }}
          >
            <span>View All Articles</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
