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
    <section id="articles-section" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header — plain and editorial */}
        <div className="text-center mb-10">
          <h2 className="font-poppins font-bold text-3xl sm:text-4xl text-gray-900 mb-3">
            IZN Corner
          </h2>
          <p className="font-opensans text-gray-500 max-w-2xl mx-auto text-base">
            Stories, partnerships, and milestones from CIT University's Internationalization Office.
          </p>
          <div className="mt-4 mx-auto w-16 h-1 bg-[#7B1C1C]" />
        </div>

        {/* Category filter pills */}
        <div className="flex flex-wrap gap-2 justify-center mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              id={`filter-${cat.toLowerCase().replace(/\s+/g, '-')}`}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full text-sm font-semibold font-opensans border transition-all duration-200 ${
                activeCategory === cat
                  ? 'bg-[#7B1C1C] text-white border-[#7B1C1C]'
                  : 'bg-white text-gray-600 border-gray-300 hover:border-[#7B1C1C] hover:text-[#7B1C1C]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Cards grid — 3 columns like SDG17 */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {filtered.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>

        {/* View all CTA — plain link style */}
        <div className="text-center mt-10">
          <a
            id="view-all-articles-btn"
            href="https://cit.edu/news-and-updates/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-poppins font-semibold text-sm text-[#7B1C1C] border border-[#7B1C1C] px-6 py-2.5 hover:bg-[#7B1C1C] hover:text-white transition-colors duration-200"
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
