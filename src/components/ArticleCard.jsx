export default function ArticleCard({ article }) {
  const { id, title, excerpt, category, date, imageUrl, link } = article;

  return (
    <article
      id={`article-card-${id}`}
      className="flex flex-col bg-white border border-gray-200 overflow-hidden group"
    >
      {/* Image */}
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="block relative overflow-hidden"
        style={{ height: '220px' }}
        aria-label={`Read more about ${title}`}
      >
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
          onError={(e) => {
            e.target.src =
              'https://placehold.co/800x450/7B1C1C/FFFFFF?text=CIT+IZN';
          }}
        />
        {/* Category badge — matches SDG17 "NEWS AND UPDATES" style */}
        <span className="absolute top-3 left-3 bg-black text-white text-xs font-semibold font-opensans px-3 py-1 uppercase tracking-widest">
          NEWS AND UPDATES
        </span>
      </a>

      {/* Content */}
      <div className="flex flex-col flex-1 p-5">
        {/* Title */}
        <h3 className="font-poppins font-bold text-gray-900 text-lg leading-snug mb-3 group-hover:text-[#7B1C1C] transition-colors duration-200">
          {title}
        </h3>

        {/* Excerpt */}
        <p className="font-opensans text-gray-600 text-sm leading-relaxed flex-1 line-clamp-3 mb-4">
          {excerpt}
        </p>

        {/* Read more — matches cit.edu "READ MORE »" style */}
        <a
          id={`read-more-btn-${id}`}
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center font-poppins font-bold text-sm text-[#7B1C1C] hover:underline"
        >
          READ MORE »
        </a>

        {/* Date */}
        <p className="font-opensans text-xs text-gray-400 mt-4 pt-4 border-t border-gray-100">
          {date}
        </p>
      </div>
    </article>
  );
}
