export default function CTABanner() {
  return (
    <section
      id="cta-banner"
      className="py-20 relative overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #001f5b 0%, #003087 60%, #004db3 100%)' }}
    >
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 rounded-full opacity-10 blur-3xl"
        style={{ background: '#FFC107', transform: 'translate(-50%, -50%)' }} />
      <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full opacity-10 blur-3xl"
        style={{ background: '#FFC107', transform: 'translate(50%, 50%)' }} />

      {/* Gold accent line top */}
      <div className="absolute top-0 left-0 right-0 h-1" style={{ background: '#FFC107' }} />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        {/* Icon */}
        <div className="w-16 h-16 rounded-full mx-auto mb-6 flex items-center justify-center text-3xl shadow-xl"
          style={{ background: '#FFC107' }}>
          🌐
        </div>

        {/* Heading */}
        <h2 className="font-poppins font-bold text-3xl sm:text-4xl lg:text-5xl text-white mb-5">
          Interested in Going Global?
        </h2>

        {/* Subtext */}
        <p className="font-opensans text-white/80 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
          Connect with the CIT University Internationalization Office to learn about exchange
          programs, MOUs, and global opportunities available to students and faculty.
        </p>

        {/* CTA button */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            id="contact-izn-office-btn"
            href="mailto:internationalization@cit.edu"
            className="group inline-flex items-center gap-3 px-8 py-4 rounded-full font-poppins font-bold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            style={{ background: '#FFC107', color: '#003087' }}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <span>Contact the IZN Office</span>
            <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>

          <a
            href="https://cit.edu"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-poppins font-semibold text-lg text-white border-2 border-white/40 hover:border-white hover:bg-white/10 transition-all duration-300"
          >
            Visit CIT Website
          </a>
        </div>

        {/* Contact details strip */}
        <div className="mt-12 flex flex-col sm:flex-row gap-6 justify-center items-center">
          {[
            { icon: '📧', text: 'internationalization@cit.edu' },
            { icon: '📍', text: 'N. Bacalso Ave., Cebu City, Philippines' },
            { icon: '🌐', text: 'cit.edu' },
          ].map((item) => (
            <div key={item.text} className="flex items-center gap-2 text-white/70 font-opensans text-sm">
              <span>{item.icon}</span>
              <span>{item.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
