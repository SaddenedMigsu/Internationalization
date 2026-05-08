const testimonials = [
  {
    id: 'testimonial-villamor',
    quote:
      "This program reflects CIT University\u2019s commitment to opening our doors to international opportunities while also promoting a global perspective among our students and faculty. Our internationalization initiatives are a testament to CIT\u2019s vision of producing graduates who are not only technically competent but globally competitive and culturally aware.",
    name: 'Engr. Bernard Nicolas E. Villamor',
    title: 'University President, CIT University',
    avatar: '🎓',
    role: 'University Leadership',
  },
  {
    id: 'testimonial-mosqueda',
    quote:
      'My internship in Dubai was the most transformative experience of my academic journey. CIT prepared me not just technically but culturally — the university gave me the confidence to compete and excel on an international stage. I am proud to represent CIT University in the global arena.',
    name: 'Dave Andrey Mosqueda',
    title: 'BS Architecture Graduate | Dubai Intern, XYZ Designers UAE',
    avatar: '🏛️',
    role: 'CIT Graduate',
  },
  {
    id: 'testimonial-faculty',
    quote:
      'The internationalization initiatives at CIT have fundamentally changed how we teach. By integrating global standards into our curriculum and connecting our students with real-world international experiences, we are preparing them for careers that transcend borders.',
    name: 'Dr. Larmie S. Feliscuzo',
    title: 'Director, Internationalization Office — CIT University',
    avatar: '🌍',
    role: 'IZN Office Director',
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials-section" className="py-20 bg-cit-light">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="flex items-center justify-center gap-3 mb-3">
            <div className="h-px w-10 bg-cit-gold" />
            <span className="font-opensans text-sm font-semibold text-cit-gold uppercase tracking-widest">
              Testimonials
            </span>
            <div className="h-px w-10 bg-cit-gold" />
          </div>
          <h2 className="font-poppins font-bold text-3xl sm:text-4xl text-cit-navy mb-4">
            Voices from the World
          </h2>
          <p className="font-opensans text-gray-600 max-w-2xl mx-auto text-base">
            Hear from the people who have lived CIT's internationalization journey firsthand —
            our leaders, graduates, and faculty who are shaping a globally competitive CIT.
          </p>
        </div>

        {/* Testimonial cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div
              key={t.id}
              id={t.id}
              className="card-hover relative bg-white rounded-2xl p-8 shadow-sm border border-gray-100 flex flex-col"
              style={{ borderLeft: '4px solid #FFC107' }}
            >
              {/* Quote icon */}
              <div className="text-5xl text-cit-gold/20 font-poppins font-black leading-none mb-3 select-none">
                &ldquo;
              </div>

              {/* Role badge */}
              <span className="inline-block mb-4 text-xs font-semibold font-opensans px-3 py-1 rounded-full bg-red-50 text-cit-navy uppercase tracking-wide w-fit">
                {t.role}
              </span>

              {/* Quote */}
              <blockquote className="font-opensans text-gray-700 text-sm leading-relaxed italic flex-1 mb-6">
                &ldquo;{t.quote}&rdquo;
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-4 pt-5 border-t border-gray-100">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center text-2xl flex-shrink-0 shadow-inner"
                  style={{ background: 'linear-gradient(135deg, #7B1C1C 0%, #9B2335 100%)' }}
                >
                  {t.avatar}
                </div>
                <div>
                  <div className="font-poppins font-bold text-cit-navy text-sm">
                    {t.name}
                  </div>
                  <div className="font-opensans text-gray-500 text-xs mt-0.5 leading-tight">
                    {t.title}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
