const testimonials = [
  {
    id: 'testimonial-maranga',
    quote:
      "CIT University gave me the foundation to take my thesis project — CodeChum — all the way to an international research conference in Hong Kong. The university's culture of innovation and excellence pushes every student to think beyond the classroom and reach for the global stage.",
    name: 'Jemar Jude Maranga',
    title: 'BS Computer Science, Magna Cum Laude | Founder & CEO, CodeChum & GradeChum',
    // Photo publicly available on LinkedIn and cit.edu TICTalks feature
    photo: '/Jemar.jpg',
    role: 'CIT Alumni · Class of 2018',
  },
  {
    id: 'testimonial-mosqueda',
    quote:
      'My internship in Dubai was the most transformative experience of my academic journey. CIT prepared me not just technically but culturally — the university gave me the confidence to compete and excel on an international stage. I am proud to represent CIT University in the global arena.',
    name: 'Dave Andrey B. Mosqueda',
    title: 'BS Architecture Graduate | International Intern, XYZ Designers — Dubai, UAE',
    // Photo publicly available on cit.edu
    photo: '/Dave.jpg',
    role: 'CIT Alumni · Class of 2024',
  },
  {
    id: 'testimonial-siago',
    quote:
      "Our journey at CIT University shaped us into resilient and globally minded engineers. From overcoming academic challenges to striving for excellence, CIT-U gave us the confidence to pursue opportunities beyond borders and succeed on an international level.",
    name: 'Jelly Ann Siago & Jolly Babe Siago',
    title: 'BS Civil Engineering Graduate | BS Electrical Engineering Graduate, CIT University',
    // Photo publicly posted on CIT University feature article
    photo: '/Siago.jpg',
    role: 'CIT Alumni · Class of 2025',
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
            Voices from Our Alumni
          </h2>
          <p className="font-opensans text-gray-600 max-w-2xl mx-auto text-base">
            Hear from CIT University graduates who have taken their skills to the world stage —
            and how a CIT education opened global doors for them.
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
                <div className="w-12 h-12 rounded-full flex-shrink-0 overflow-hidden ring-2 ring-cit-gold/40 shadow-md">
                  <img
                    src={t.photo}
                    alt={t.name}
                    className="w-full h-full object-cover object-top"
                  />
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
