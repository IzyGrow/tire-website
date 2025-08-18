import QRCodeSection from "./QRCodeSection";
import { Download, Star, Users, Shield } from "lucide-react";
import tireBelediyesiLogo from "@/assets/tire-belediyesi-logo.png";

const DownloadSection = () => {
  return (
    <section id="indir" className="py-20 bg-gradient-to-br from-background via-secondary to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-8 fade-in-up">
            <div className="w-24 h-24 bg-hero-gradient rounded-3xl flex items-center justify-center shadow-hard">
              <img 
                src={tireBelediyesiLogo} 
                alt="Tire Miras App Icon" 
                className="w-16 h-16 object-contain"
              />
            </div>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-6 fade-in-up delay-200">
            Hemen İndirin
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-12 fade-in-up delay-300">
            iOS ve Android cihazlarınız için ücretsiz olarak indirin. QR kodu tarayarak hemen başlayın!
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="text-center fade-in-up delay-400">
            <div className="w-16 h-16 bg-accent-gradient rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Download className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-primary mb-2">Ücretsiz</h3>
            <p className="text-muted-foreground">Tamamen ücretsiz kullanım</p>
          </div>
          
          <div className="text-center fade-in-up delay-500">
            <div className="w-16 h-16 bg-accent-gradient rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Star className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-primary mb-2">Güncel</h3>
            <p className="text-muted-foreground">Sürekli güncellenen içerik</p>
          </div>
          
          <div className="text-center fade-in-up delay-600">
            <div className="w-16 h-16 bg-accent-gradient rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Shield className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-primary mb-2">Güvenli</h3>
            <p className="text-muted-foreground">Resmi belediye uygulaması</p>
          </div>
        </div>

        {/* QR Codes */}
        <div className="fade-in-up delay-700">
          <QRCodeSection 
            size="large" 
            showTitle={false}
          />
        </div>

        {/* Device Compatibility */}
        <div className="mt-16 text-center fade-in-up delay-800">
          <div className="glass rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-xl font-bold text-primary mb-4">Sistem Gereksinimleri</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-primary mb-2">iOS</h4>
                <p className="text-muted-foreground">iOS 12.0 ve üzeri</p>
                <p className="text-muted-foreground">iPhone, iPad, iPod touch</p>
              </div>
              <div>
                <h4 className="font-semibold text-primary mb-2">Android</h4>
                <p className="text-muted-foreground">Android 8.0 ve üzeri</p>
                <p className="text-muted-foreground">ARM64 ve ARM32 destekli</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DownloadSection;