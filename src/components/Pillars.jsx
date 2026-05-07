const pillars = [
  {
    id: 'pillar-global-partnerships',
    icon: '🌏',
    title: 'Global Partnerships',
    description:
      'CIT University forges strategic Memoranda of Agreement (MOAs) and Memoranda of Understanding (MOUs) with leading foreign universities and multinational companies, building a robust network of international academic and industry allies.',
  },
  {
    id: 'pillar-student-faculty-mobility',
    icon: '✈️',
    title: 'Student & Faculty Mobility',
    description:
      'Through structured outbound and inbound exchange programs, CIT enables students and faculty to gain first-hand international experience — broadening perspectives and elevating academic excellence on a global stage.',
  },
  {
    id: 'pillar-international-curriculum',
    icon: '📚',
    title: 'International Curriculum',
    description:
      'CIT continuously benchmarks its academic programs against globally recognized standards, integrating international best practices into course design, research methodologies, and instructional frameworks.',
  },
  {
    id: 'pillar-industry-collaboration',
    icon: '🤝',
    title: 'Industry Collaboration',
    description:
      'By partnering with global industry leaders, CIT creates cross-border internship placements and employment pathways that equip graduates with the skills, certifications, and exposure needed to thrive in competitive international markets.',
  },
];

export default function Pillars() {
  return (
    <section id="pillars-section" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="flex items-center justify-center gap-3 mb-3">
            <div className="h-px w-10 bg-cit-gold" />
            <span className="font-opensans text-sm font-semibold text-cit-gold uppercase tracking-widest">
              Foundation
            </span>
            <div className="h-px w-10 bg-cit-gold" />
          </div>
          <h2 className="font-poppins font-bold text-3xl sm:text-4xl text-cit-navy mb-4">
            Our Four Pillars of Internationalization
          </h2>
          <p className="font-opensans text-gray-600 max-w-2xl mx-auto text-base">
            These four pillars form the strategic foundation of CIT University's commitment
            to becoming a globally recognized center of excellence.
          </p>
        </div>

        {/* Pillars grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar, idx) => (
            <div
              key={pillar.id}
              id={pillar.id}
              className="pillar-card card-hover relative flex flex-col p-8 rounded-2xl bg-white border-2 border-cit-navy/10 cursor-default group transition-all duration-300"
            >
              {/* Number badge */}
              <div
                className="absolute top-4 right-4 w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold font-poppins text-cit-navy group-hover:text-white transition-colors"
                style={{ background: '#FFC107' }}
              >
                {String(idx + 1).padStart(2, '0')}
              </div>

              {/* Icon */}
              <div className="text-5xl mb-5">{pillar.icon}</div>

              {/* Title */}
              <h3 className="font-poppins font-bold text-xl text-cit-navy mb-3 group-hover:text-white transition-colors">
                {pillar.title}
              </h3>

              {/* Divider */}
              <div className="h-0.5 w-10 rounded-full mb-4 transition-colors" style={{ background: '#FFC107' }} />

              {/* Description */}
              <p className="font-opensans text-gray-600 text-sm leading-relaxed flex-1">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
