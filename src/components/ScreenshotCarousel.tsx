import PhoneMockup from "./PhoneMockup";

const ScreenshotCarousel = () => {
  const quickAccessScreens = [
    { id: 'directions', title: 'Nasıl Gelinir', screenType: 'nasil-gelinir' as const },
    { id: 'mayor-message', title: 'Başkanın Mesajı', screenType: 'baskanin-mesaji' as const },
    { id: 'travel-routes', title: 'Gezi Rotaları', screenType: 'gezi-rotalari' as const },
    { id: 'influencer-routes', title: 'Influencer Rotaları', screenType: 'influencer-rotalari' as const },
    { id: 'contact', title: 'Bize Ulaşın', screenType: 'bize-ulasin' as const },
    { id: 'pharmacy', title: 'Nöbetçi Eczaneler', screenType: 'nobetci-eczaneler' as const },
    { id: 'emergency', title: 'Acil Durum', screenType: 'acil-durum' as const }
  ];

  return (
    <div className="py-20 bg-gradient-to-br from-background to-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary mb-4 fade-in-up">
            Hızlı Erişim
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto fade-in-up delay-200">
            Tire Miras uygulamasında en çok kullanılan özelliklere hızlı erişim
          </p>
        </div>

        {/* Horizontal Scrolling Container */}
        <div className="overflow-x-auto pb-8">
          <div className="flex space-x-8 min-w-max px-4">
            {quickAccessScreens.map((screen, index) => (
              <div key={screen.id} className={`flex-shrink-0 fade-in-up delay-${(index + 1) * 100}`}>
                <div className="text-center">
                  <PhoneMockup className="w-64" showPlaceholder={false} screenType={screen.screenType} />
                  <h3 className="mt-6 text-lg font-semibold text-primary">{screen.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>


      </div>
    </div>
  );
};

export default ScreenshotCarousel;