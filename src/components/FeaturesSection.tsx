import { MapPin, Calendar, Route, Pill, MessageSquare, Navigation } from "lucide-react";
import FeatureCard from "./FeatureCard";

const FeaturesSection = () => {
  const features = [
    {
      icon: MapPin,
      title: "Gezi Noktaları",
      description: "Tire'nin tarihi ve kültürel mekanlarını keşfedin. Detaylı bilgiler ve fotoğraflarla."
    },
    {
      icon: Navigation,
      title: "Harita Görünümü", 
      description: "GPS ile konum tabanlı rehberlik. Çevrenizdekileri anında görün."
    },
    {
      icon: Calendar,
      title: "Etkinlikler",
      description: "Şehirdeki güncel etkinlikleri takip edin. Festivallerden konserlere kadar."
    },
    {
      icon: Route,
      title: "Rota Önerileri",
      description: "Kişiselleştirilmiş gezi rotaları. Zamanınıza uygun planlama."
    },
    {
      icon: Pill,
      title: "Nöbetçi Eczaneler",
      description: "Acil durumlar için en yakın nöbetçi eczaneyi hızla bulun."
    },
    {
      icon: MessageSquare,
      title: "Başkanın Mesajı",
      description: "Belediye başkanından güncel duyurular ve önemli bilgilendirmeler."
    }
  ];

  return (
    <section id="ozellikler" className="py-20 bg-gradient-to-br from-background to-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-6 fade-in-up">
            Uygulamanın Özellikleri
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto fade-in-up delay-200">
            Tire Miras uygulaması ile şehrinizi daha iyi tanıyın ve yaşamınızı kolaylaştırın
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={feature.title}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              delay={`delay-${(index + 1) * 100}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;