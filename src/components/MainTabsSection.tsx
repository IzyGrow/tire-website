import PhoneMockup from "./PhoneMockup";

const MainTabsSection = () => {
  const mainTabs = [
    {
      id: 'home',
      title: 'Ana Sayfa',
      description: 'Tire Miras uygulamasının ana ekranında şehir hakkında genel bilgiler, güncel duyurular ve hızlı erişim menüleri yer alır. Kullanıcılar buradan tüm özelliklere kolayca ulaşabilir.',
      imagePosition: 'left',
      screenType: 'ana-sayfa' as const
    },
    {
      id: 'map',
      title: 'Harita',
      description: 'GPS destekli interaktif harita ile Tire\'nin tüm önemli noktalarını keşfedin. Konumunuza en yakın tarihi mekanlar, restoranlar ve etkinlik alanları anında görüntülenir.',
      imagePosition: 'right',
      screenType: 'harita' as const
    },
    {
      id: 'tourism',
      title: 'Gezi Noktaları',
      description: 'Tire\'nin tarihi ve kültürel zenginliklerini detaylı şekilde keşfedin. Her gezi noktası için özel fotoğraflar, tarihçe bilgileri ve ziyaret ipuçları bulabilirsiniz.',
      imagePosition: 'left',
      screenType: 'gezi-noktalari' as const
    },
    {
      id: 'events',
      title: 'Etkinlikler',
      description: 'Şehirde düzenlenen güncel etkinlikleri takip edin. Festivallerden konserlere, sergilerden kültürel aktivitelere kadar tüm etkinlik bilgileri burada.',
      imagePosition: 'right',
      screenType: 'etkinlikler' as const
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-background to-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-6 fade-in-up">
            Ana Sekmeler
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto fade-in-up delay-200">
            Tire Miras uygulamasının 4 ana sekmesi ile şehrinizi daha iyi tanıyın
          </p>
        </div>

        <div className="space-y-32">
          {mainTabs.map((tab, index) => (
            <div key={tab.id} className={`grid lg:grid-cols-2 gap-16 items-center fade-in-up delay-${(index + 1) * 200}`}>
              {/* Content */}
              <div className={`${tab.imagePosition === 'right' ? 'lg:order-1' : 'lg:order-2'} space-y-6`}>
                <h3 className="text-3xl lg:text-4xl font-bold text-primary">
                  {tab.title}
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {tab.description}
                </p>
              </div>

              {/* Phone Mockup */}
              <div className={`${tab.imagePosition === 'right' ? 'lg:order-2' : 'lg:order-1'} flex justify-center`}>
                <div className="relative">
                  <PhoneMockup className="w-80" showPlaceholder={false} screenType={tab.screenType} />
                  
                  {/* Floating Elements */}
                  <div className="absolute -top-4 -right-4 w-12 h-12 bg-accent-green/20 rounded-full animate-pulse"></div>
                  <div className="absolute -bottom-6 -left-6 w-8 h-8 bg-primary/20 rounded-full animate-bounce"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MainTabsSection;