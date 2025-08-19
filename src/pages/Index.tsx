import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import MainTabsSection from "@/components/MainTabsSection";
import DownloadSection from "@/components/DownloadSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <MainTabsSection />
      <DownloadSection />
      <Footer />
    </div>
  );
};

export default Index;
