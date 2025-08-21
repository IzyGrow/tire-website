import QRCodeSection from "./QRCodeSection";
import tireHeritageBg from "@/assets/tire-heritage-bg.jpg";

const HeroSection = () => {
  return (
    <section 
      id="ana-sayfa" 
      className="min-h-screen flex items-center relative overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(46, 82, 102, 0.8), rgba(46, 82, 102, 0.9)), url(${tireHeritageBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="container mx-auto px-4 py-24 relative z-10">
        <div className="text-center">
          <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6 fade-in-up">
            Tire Miras
          </h1>
          <h2 className="text-2xl lg:text-3xl text-white/90 mb-8 fade-in-up delay-200">
            Şehrimizi Keşfedin
          </h2>
          <p className="text-xl text-white/80 mb-12 max-w-3xl mx-auto fade-in-up delay-300 leading-relaxed">
            Tire'nin tarihi, kültürel ve turistik mekanlarını mobil uygulamımızla kolayca keşfedin. 
            GPS destekli harita ile rotalar oluşturun, etkinlikleri takip edin.
          </p>
          
          {/* QR Codes */}
          <div className="fade-in-up delay-400">
            <QRCodeSection />
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-accent-green/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-white/5 rounded-full blur-3xl"></div>
    </section>
  );
};

export default HeroSection;