export default function ArticleCard({ article }) {
  const { id, title, excerpt, category, date, imageUrl, badgeColor, badgeTextColor } = article;

  return (
    <article
      id={`article-card-${id}`}
      className="card-hover flex flex-col rounded-2xl overflow-hidden bg-white border border-gray-100 shadow-sm group"
    >
      {/* Image */}
      <div className="relative overflow-hidden h-52 flex-shrink-0">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
          onError={(e) => {
            e.target.src =
              'https://placehold.co/400x220/7B1C1C/FFFFFF?text=CIT+IZN';
          }}
        />
        {/* Category badge */}
        <span
          className={`absolute top-3 left-3 ${badgeColor} ${badgeTextColor} text-xs font-semibold font-opensans px-3 py-1 rounded-full shadow-md uppercase tracking-wide`}
        >
          {category}
        </span>
        {/* Image overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-6">
        {/* Date */}
        <div className="flex items-center gap-2 mb-3">
          <svg className="w-3.5 h-3.5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          <span className="font-opensans text-xs text-gray-400 uppercase tracking-wide">
            {date}
          </span>
        </div>

        {/* Title */}
        <h3 className="font-poppins font-bold text-cit-navy text-lg leading-snug mb-3 group-hover:text-cit-navy-light transition-colors duration-200 line-clamp-2">
          {title}
        </h3>

        {/* Excerpt */}
        <p className="font-opensans text-gray-600 text-sm leading-relaxed flex-1 line-clamp-3 mb-5">
          {excerpt}
        </p>

        {/* Read more */}
        <div className="pt-4 border-t border-gray-100">
          <button
            id={`read-more-btn-${id}`}
            className="group/btn inline-flex items-center gap-2 font-poppins font-semibold text-sm text-cit-navy hover:text-cit-gold transition-colors duration-200"
          >
            Read More
            <svg
              className="w-4 h-4 transition-transform duration-200 group-hover/btn:translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>
      </div>
    </article>
  );
}
