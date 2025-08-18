import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import ScreenshotCarousel from "@/components/ScreenshotCarousel";
import CategoriesSection from "@/components/CategoriesSection";
import DownloadSection from "@/components/DownloadSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <FeaturesSection />
      <ScreenshotCarousel />
      <CategoriesSection />
      <DownloadSection />
      <Footer />
    </div>
  );
};

export default Index;
