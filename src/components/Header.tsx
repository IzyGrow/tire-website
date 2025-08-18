import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import tireBelediyesiLogo from "@/assets/tire-logo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const handleNavigation = (sectionId: string) => {
    if (location.pathname !== '/') {
      // Eğer ana sayfada değilsek, ana sayfaya git ve sonra scroll yap
      window.location.href = `/#${sectionId}`;
    } else {
      scrollToSection(sectionId);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <img 
              src={tireBelediyesiLogo} 
              alt="Tire Belediyesi Logo" 
              className="w-48 h-48 object-contain p-6"
            />
            <div>
              <h1 className="text-xl font-bold text-primary">Tire Belediyesi</h1>
              <p className="text-sm text-muted-foreground">Mobil Uygulama</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => handleNavigation('ana-sayfa')}
              className="text-primary hover:text-accent-green transition-colors font-medium"
            >
              Ana Sayfa
            </button>
            <button 
              onClick={() => handleNavigation('indir')}
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
                onClick={() => handleNavigation('ana-sayfa')}
                className="text-left text-primary hover:text-accent-green transition-colors font-medium"
              >
                Ana Sayfa
              </button>
              <button 
                onClick={() => handleNavigation('indir')}
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