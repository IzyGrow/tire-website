import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ScreenshotCarousel from "@/components/ScreenshotCarousel";
import MainTabsSection from "@/components/MainTabsSection";
import CategoriesSection from "@/components/CategoriesSection";
import DownloadSection from "@/components/DownloadSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <ScreenshotCarousel />
      <MainTabsSection />
      <CategoriesSection />
      <DownloadSection />
      <Footer />
    </div>
  );
};

export default Index;
