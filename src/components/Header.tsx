import { Menu, X } from "lucide-react";
import { useState } from "react";
import tireBelediyesiLogo from "@/assets/tire-belediyesi-logo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img 
              src={tireBelediyesiLogo} 
              alt="Tire Belediyesi Logo" 
              className="w-10 h-10 object-contain"
            />
            <div>
              <h1 className="text-xl font-bold text-primary">Tire Belediyesi</h1>
              <p className="text-sm text-muted-foreground">Mobil Uygulama</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('ana-sayfa')}
              className="text-primary hover:text-accent-green transition-colors font-medium"
            >
              Ana Sayfa
            </button>
            <button 
              onClick={() => scrollToSection('ozellikler')}
              className="text-primary hover:text-accent-green transition-colors font-medium"
            >
              Özellikler
            </button>
            <button 
              onClick={() => scrollToSection('ekran-goruntuleri')}
              className="text-primary hover:text-accent-green transition-colors font-medium"
            >
              Ekran Görüntüleri
            </button>
            <button 
              onClick={() => scrollToSection('indir')}
              className="bg-accent-gradient text-white px-6 py-2 rounded-full font-medium hover:scale-105 transition-transform"
            >
              Hemen İndir
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-primary hover:text-accent-green transition-colors"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <nav className="flex flex-col space-y-4">
              <button 
                onClick={() => scrollToSection('ana-sayfa')}
                className="text-left text-primary hover:text-accent-green transition-colors font-medium"
              >
                Ana Sayfa
              </button>
              <button 
                onClick={() => scrollToSection('ozellikler')}
                className="text-left text-primary hover:text-accent-green transition-colors font-medium"
              >
                Özellikler
              </button>
              <button 
                onClick={() => scrollToSection('ekran-goruntuleri')}
                className="text-left text-primary hover:text-accent-green transition-colors font-medium"
              >
                Ekran Görüntüleri
              </button>
              <button 
                onClick={() => scrollToSection('indir')}
                className="text-left bg-accent-gradient text-white px-6 py-2 rounded-full font-medium w-fit"
              >
                Hemen İndir
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;