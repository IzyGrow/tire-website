import PhoneMockup from "./PhoneMockup";
import QRCodeSection from "./QRCodeSection";
import heroPhoneMockup from "@/assets/hero-phone-mockup.jpg";
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
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6 fade-in-left">
              Tire Miras
            </h1>
            <h2 className="text-2xl lg:text-3xl text-white/90 mb-8 fade-in-left delay-200">
              Şehrinizi Keşfedin
            </h2>
            <p className="text-xl text-white/80 mb-12 max-w-2xl fade-in-left delay-300 leading-relaxed">
              Tire'nin tarihi, kültürel ve turistik mekanlarını mobil uygulamımızla kolayca keşfedin. 
              GPS destekli harita ile rotalar oluşturun, etkinlikleri takip edin.
            </p>
            
            {/* QR Codes */}
            <div className="fade-in-left delay-400">
              <QRCodeSection />
            </div>
          </div>

          {/* Phone Mockup */}
          <div className="flex justify-center lg:justify-end fade-in-right delay-500">
            <div className="relative">
              <PhoneMockup className="w-80 lg:w-96" showPlaceholder={true} />
              
              {/* Floating Elements */}
              <div className="absolute -top-8 -left-8 w-16 h-16 bg-accent-green rounded-full opacity-20 animate-bounce"></div>
              <div className="absolute -bottom-12 -right-8 w-12 h-12 bg-white rounded-full opacity-30 animate-pulse"></div>
            </div>
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