import { ReactNode } from "react";
import anaSayfaImg from "@/assets/ana_sayfa.png";
import splashScreenImg from "@/assets/splash_screen.png";
import acilDurumImg from "@/assets/acilDurum.png";
import nobetciEczanelerImg from "@/assets/nobetciEczaneler.png";
import baskaninMesajiImg from "@/assets/baskaninMesaji.png";
import nasilGelinirImg from "@/assets/nasilGelinir.png";
import bizeUlasinImg from "@/assets/bizeUlasin.png";
import influencerRotalarıImg from "@/assets/influencerRotalari.png";
import geziRotalarıImg from "@/assets/geziRotalari.png";
import etkinliklerImg from "@/assets/etkinlikler.png";
import geziNoktalariImg from "@/assets/gezi_noktalari.png";
import haritaImg from "@/assets/harita.png";

interface PhoneMockupProps {
  children?: ReactNode;
  className?: string;
  showPlaceholder?: boolean;
  screenType?: 'ana-sayfa' | 'splash-screen' | 'acil-durum' | 'nobetci-eczaneler' | 'baskanin-mesaji' | 'nasil-gelinir' | 'bize-ulasin' | 'influencer-rotalari' | 'gezi-rotalari' | 'etkinlikler' | 'gezi-noktalari' | 'harita';
}

const PhoneMockup = ({ children, className = "", showPlaceholder = true, screenType }: PhoneMockupProps) => {
  const getScreenImage = () => {
    const screenImages = {
      'ana-sayfa': anaSayfaImg,
      'splash-screen': splashScreenImg,
      'acil-durum': acilDurumImg,
      'nobetci-eczaneler': nobetciEczanelerImg,
      'baskanin-mesaji': baskaninMesajiImg,
      'nasil-gelinir': nasilGelinirImg,
      'bize-ulasin': bizeUlasinImg,
      'influencer-rotalari': influencerRotalarıImg,
      'gezi-rotalari': geziRotalarıImg,
      'etkinlikler': etkinliklerImg,
      'gezi-noktalari': geziNoktalariImg,
      'harita': haritaImg,
    };
    
    return screenType ? screenImages[screenType] : null;
  };

  const screenImage = getScreenImage();

  return (
    <div className={`phone-mockup ${className} float-animation`}>
      <div className="phone-screen">
        {screenImage ? (
          <img 
            src={screenImage} 
            alt="Mobil uygulama ekran görüntüsü" 
            className="w-full h-full object-cover rounded-[2.5rem]"
          />
        ) : showPlaceholder ? (
          <div className="w-full h-full bg-gradient-to-br from-primary to-primary-light flex flex-col items-center justify-center p-8">
            <div className="bg-white/20 backdrop-blur-sm rounded-3xl p-6 text-center text-white">
              <div className="w-16 h-16 bg-white/30 rounded-2xl mx-auto mb-4 shimmer"></div>
              <div className="space-y-2">
                <div className="h-4 bg-white/40 rounded-full shimmer"></div>
                <div className="h-3 bg-white/30 rounded-full shimmer"></div>
                <div className="h-3 bg-white/30 rounded-full w-3/4 mx-auto shimmer"></div>
              </div>
            </div>
            <div className="mt-8 text-white/80 text-sm font-medium">
              Tire Miras
            </div>
          </div>
        ) : (
          children
        )}
      </div>
    </div>
  );
};

export default PhoneMockup;