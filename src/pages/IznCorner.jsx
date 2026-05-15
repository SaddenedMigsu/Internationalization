import Navbar from '../components/Navbar';
import SDGHeader from '../components/SDGHeader';
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

      <main className="flex-1 pt-[69px]">
        {/* 1. SDG Corner header — matches cit.edu layout */}
        <SDGHeader />

        {/* 2. Featured Articles Grid */}
        <ArticleGrid />

        {/* 3. Interactive Global Map */}
        <GlobalMap />

        {/* 4. About the Office */}
        <AboutSection />

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
