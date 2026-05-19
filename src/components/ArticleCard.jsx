export default function ArticleCard({ article }) {
  const { id, title, excerpt, category, date, imageUrl, link } = article;

  return (
    /*
     * Structure mirrors the official CIT Elementor card:
     *   .elementor-post__card
     *     ├── .elementor-post__thumbnail__link  (image)
     *     ├── .elementor-post__badge            (badge, sibling to image)
     *     ├── .elementor-post__text             (title + excerpt + read-more)
     *     └── .elementor-post__meta-data        (date)
     */
    <article
      id={`article-card-${id}`}
      className="flex flex-col bg-white border border-gray-200 overflow-hidden group relative"
    >
      {/* Thumbnail — 3:2 ratio matches official 300×200 image */}
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="block overflow-hidden w-full"
        style={{ aspectRatio: '3 / 2' }}
        aria-label={`Read more about ${title}`}
        tabIndex={-1}
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
      </a>

      {/* Badge — sibling to image, absolutely positioned over card top-right */}
      <div
        className="absolute top-3 right-3 bg-black text-white text-xs font-semibold font-opensans px-3 py-1 uppercase tracking-widest"
        style={{ borderRadius: '999px' }}
      >
        News and Updates
      </div>

      {/* Text content */}
      <div className="flex flex-col flex-1 px-6 pt-5 pb-3">
        {/* Title — DM Serif Display ≈ Noyh Medium */}
        <h3
          className="text-gray-900 text-xl leading-snug mb-4 group-hover:text-[#7B1C1C] transition-colors duration-200"
          style={{ fontFamily: '"DM Serif Display", Georgia, serif', fontWeight: 500 }}
        >
          <a href={link} target="_blank" rel="noopener noreferrer">
            {title}
          </a>
        </h3>

        {/* Excerpt — Source Sans 3 ≈ PF Bague Sans Std Regular */}
        <div className="flex-1 mb-4">
          <p
            className="text-gray-600 text-sm leading-relaxed line-clamp-4"
            style={{ fontFamily: '"Source Sans 3", "Open Sans", sans-serif', fontWeight: 400 }}
          >
            {excerpt}
          </p>
        </div>

        {/* Read More */}
        <a
          id={`read-more-btn-${id}`}
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center font-poppins font-normal text-sm text-black hover:underline mb-1"
          style={{ textTransform: 'none' }}
          tabIndex={-1}
        >
          Read More »
        </a>
      </div>

      {/* Meta data — date at bottom, separated by border */}
      <div className="px-6 pb-5 pt-3 border-t border-gray-100">
        <span className="font-opensans text-xs text-gray-400">{date}</span>
      </div>
    </article>
  );
}
