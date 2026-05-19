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
      {/* Official CIT University Navbar */}
      <Navbar />

      <main className="flex-1">
        {/* 1. Featured Articles Grid with IZN Corner header */}
        <ArticleGrid />

        {/* 2. Interactive Global Map */}
        <GlobalMap />

        {/* 3. About the Office */}
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
