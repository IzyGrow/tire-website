import PhoneMockup from "./PhoneMockup";

const ScreenshotCarousel = () => {
  const placeholderScreens = [
    { id: 'home', title: 'Ana Sayfa' },
    { id: 'map', title: 'Harita' },
    { id: 'events', title: 'Etkinlikler' },
    { id: 'tourism', title: 'Gezi Noktaları' },
    { id: 'routes', title: 'Rotalar' },
    { id: 'pharmacy', title: 'Nöbetçi Eczaneler' }
  ];

  return (
    <div className="py-20 bg-gradient-to-br from-background to-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary mb-4 fade-in-up">
            Uygulama Ekran Görüntüleri
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto fade-in-up delay-200">
            Tire Miras uygulamasının kullanıcı dostu arayüzünü keşfedin
          </p>
        </div>

        {/* Horizontal Scrolling Container */}
        <div className="overflow-x-auto pb-8">
          <div className="flex space-x-8 min-w-max px-4">
            {placeholderScreens.map((screen, index) => (
              <div key={screen.id} className={`flex-shrink-0 fade-in-up delay-${(index + 1) * 100}`}>
                <div className="text-center">
                  <PhoneMockup className="w-64" showPlaceholder={true} />
                  <h3 className="mt-6 text-lg font-semibold text-primary">{screen.title}</h3>
                  <p className="text-sm text-muted-foreground mt-2">
                    Ekran görüntüsü yakında eklenecek
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Note for Future Updates */}
        <div className="text-center mt-12 fade-in-up delay-600">
          <div className="glass rounded-2xl p-6 max-w-2xl mx-auto">
            <p className="text-muted-foreground">
              <strong>Not:</strong> Gerçek uygulama ekran görüntüleri theapplaunchpad.com servisi kullanılarak yakında eklenecektir.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScreenshotCarousel;