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
    <section id="articles-section" className="pt-4 pb-16 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

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
