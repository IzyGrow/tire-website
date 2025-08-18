import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Youtube } from "lucide-react";
import { Link } from "react-router-dom";
import tireBelediyesiLogo from "@/assets/logo-beyaz.png";

const Footer = () => {
  return (
    <footer className="bg-black text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo and Info */}
          <div className="md:col-span-2">
            <div className="flex items-center mb-6">
              <img 
                src={tireBelediyesiLogo} 
                alt="Tire Belediyesi Logo" 
                className="w-38 h-20 object-contain"
              />
            </div>
            <p className="text-white/70 mb-6 max-w-md">
              Tire'nin tarihi ve kültürel mirasını keşfetmenin en kolay yolu. 
              Şehrimizi daha iyi tanıyın, yaşamınızı kolaylaştırın.
            </p>
            
            {/* Social Media */}
            <div className="flex space-x-4">
              <a 
                href="https://www.facebook.com/tctirebelediyesi/?locale=hi_IN" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-accent-green transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                href="https://x.com/tctirebelediye?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-accent-green transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a 
                href="https://www.instagram.com/tctirebelediyesi/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-accent-green transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="https://www.youtube.com/channel/UCwuRo2yCyVFx6VVgzWwNCMA" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-accent-green transition-colors"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-bold mb-6">İletişim</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 mt-1 text-accent-green" />
                <div>
                  <p className="text-white/90">Cumhuriyet Mahallesi</p>
                  <p className="text-white/90">Belediye Binası</p>
                  <p className="text-white/90">Tire / İzmir</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-accent-green" />
                <p className="text-white/90">(232) 512 10 00</p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-accent-green" />
                <p className="text-white/90">info@tire.bel.tr</p>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold mb-6">Hızlı Bağlantılar</h4>
            <div className="space-y-3">
              <a 
                href="https://tire.bel.tr/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block text-white/80 hover:text-accent-green transition-colors"
              >
                Belediye Web Sitesi
              </a>
              <Link 
                to="/kvkk"
                className="block text-white/80 hover:text-accent-green transition-colors"
              >
                KVKK
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-white/60 text-sm">
              © 2024 Tire Belediyesi. Tüm hakları saklıdır.
            </p>

          </div>
        </div>
      </div>


    </footer>
  );
};

export default Footer;