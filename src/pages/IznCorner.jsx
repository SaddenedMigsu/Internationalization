import Navbar from '../components/Navbar';
import ArticleGrid from '../components/ArticleGrid';
import GlobalMap from '../components/GlobalMap';
import AboutSection from '../components/AboutSection';
import Pillars from '../components/Pillars';
import Testimonials from '../components/Testimonials';
import CTABanner from '../components/CTABanner';
import Footer from '../components/Footer';

export default function IznCorner() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Sticky Navbar */}
      <Navbar />

      {/* Offset for sticky navbar */}
      <main className="flex-1 pt-[69px]">
        {/* 1. Featured Articles Grid — first thing users see */}
        <ArticleGrid />

        {/* 2. Interactive Global Map */}
        <GlobalMap />

        {/* 3. About Internationalization */}
        <AboutSection />

        {/* 4. Four Pillars */}
        <Pillars />

        {/* 5. Testimonials */}
        <Testimonials />

        {/* 6. Call to Action */}
        <CTABanner />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
