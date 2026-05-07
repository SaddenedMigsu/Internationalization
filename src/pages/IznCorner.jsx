import Navbar from '../components/Navbar';
import HeroBanner from '../components/HeroBanner';
import AboutSection from '../components/AboutSection';
import ArticleGrid from '../components/ArticleGrid';
import GlobalMap from '../components/GlobalMap';
import Pillars from '../components/Pillars';
import Testimonials from '../components/Testimonials';
import CTABanner from '../components/CTABanner';
import Footer from '../components/Footer';

export default function IznCorner() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Sticky Navbar */}
      <Navbar />

      {/* Offset for sticky navbar (height ~65px including 4px accent bar) */}
      <main className="flex-1 pt-[69px]">
        {/* 1. Hero Banner */}
        <HeroBanner />

        {/* 2. About Internationalization */}
        <AboutSection />

        {/* 3. Featured Articles Grid */}
        <ArticleGrid />

        {/* 4. Interactive Global Map */}
        <GlobalMap />

        {/* 5. Four Pillars */}
        <Pillars />

        {/* 6. Testimonials */}
        <Testimonials />

        {/* 7. Call to Action */}
        <CTABanner />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
