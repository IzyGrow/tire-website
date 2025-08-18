import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Youtube } from "lucide-react";
import tireBelediyesiLogo from "@/assets/tire-belediyesi-logo.png";

const Footer = () => {
  return (
    <footer className="bg-primary text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo and Info */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <img 
                src={tireBelediyesiLogo} 
                alt="Tire Belediyesi Logo" 
                className="w-12 h-12 object-contain bg-white rounded-xl p-2"
              />
              <div>
                <h3 className="text-2xl font-bold">Tire Belediyesi</h3>
                <p className="text-white/80">Mobil Uygulama</p>
              </div>
            </div>
            <p className="text-white/70 mb-6 max-w-md">
              Tire'nin tarihi ve kültürel mirasını keşfetmenin en kolay yolu. 
              Şehrimizi daha iyi tanıyın, yaşamınızı kolaylaştırın.
            </p>
            
            {/* Social Media */}
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-accent-green transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-accent-green transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-accent-green transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-accent-green transition-colors">
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
              <a href="#" className="block text-white/80 hover:text-accent-green transition-colors">
                Belediye Web Sitesi
              </a>
              <a href="#" className="block text-white/80 hover:text-accent-green transition-colors">
                KVKK
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-white/60 text-sm">
              © 2024 Tire Belediyesi. Tüm hakları saklıdır.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-white/60 hover:text-white text-sm transition-colors">
                Gizlilik Politikası
              </a>
              <a href="#" className="text-white/60 hover:text-white text-sm transition-colors">
                Kullanım Şartları
              </a>
              <a href="#" className="text-white/60 hover:text-white text-sm transition-colors">
                KVKK
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;