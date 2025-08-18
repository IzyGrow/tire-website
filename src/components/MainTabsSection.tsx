import PhoneMockup from "./PhoneMockup";

const MainTabsSection = () => {
  const mainTabs = [
    {
      id: 'home',
      title: 'Ana Sayfa',
      description: 'Tire Miras uygulamasının ana ekranında şehir hakkında genel bilgiler, güncel duyurular ve hızlı erişim menüleri yer alır. Kullanıcılar buradan tüm özelliklere kolayca ulaşabilir.',
      imagePosition: 'left',
      // Ana sayfa ekran görüntüsü burada olacak
      screenshot: 'ana-sayfa'
    },
    {
      id: 'map',
      title: 'Harita',
      description: 'GPS destekli interaktif harita ile Tire\'nin tüm önemli noktalarını keşfedin. Konumunuza en yakın tarihi mekanlar, restoranlar ve etkinlik alanları anında görüntülenir.',
      imagePosition: 'right',
      // Harita ekran görüntüsü burada olacak
      screenshot: 'harita'
    },
    {
      id: 'tourism',
      title: 'Gezi Noktaları',
      description: 'Tire\'nin tarihi ve kültürel zenginliklerini detaylı şekilde keşfedin. Her gezi noktası için özel fotoğraflar, tarihçe bilgileri ve ziyaret ipuçları bulabilirsiniz.',
      imagePosition: 'left',
      // Gezi noktaları ekran görüntüsü burada olacak
      screenshot: 'gezi-noktalari'
    },
    {
      id: 'events',
      title: 'Etkinlikler',
      description: 'Şehirde düzenlenen güncel etkinlikleri takip edin. Festivallerden konserlere, sergilerden kültürel aktivitelere kadar tüm etkinlik bilgileri burada.',
      imagePosition: 'right',
      // Etkinlikler ekran görüntüsü burada olacak
      screenshot: 'etkinlikler'
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
                <div className="inline-block px-4 py-2 bg-accent-green/10 rounded-full">
                  <span className="text-accent-green font-medium">Yakında eklenecek</span>
                </div>
              </div>

              {/* Phone Screenshot */}
              <div className={`${tab.imagePosition === 'right' ? 'lg:order-2' : 'lg:order-1'} flex justify-center`}>
                <div className="relative">
                  {/* Bu kısım gerçek ekran görüntüleri ile değiştirilecek */}
                  <div className="w-80 h-[600px] bg-accent-green rounded-[3rem] p-4 shadow-2xl">
                    <div className="w-full h-full bg-white rounded-[2.5rem] overflow-hidden relative">
                      {/* Status bar */}
                      <div className="h-12 bg-gray-900 flex items-center justify-between px-6 text-white text-sm">
                        <span>14:22</span>
                        <div className="flex space-x-1">
                          <div className="w-4 h-2 bg-white rounded-sm"></div>
                          <div className="w-6 h-2 bg-white rounded-sm"></div>
                        </div>
                      </div>
                      
                      {/* Content placeholder */}
                      <div className="p-6 space-y-4">
                        <div className="text-center">
                          <h4 className="text-xl font-bold text-gray-800">{tab.title}</h4>
                          <p className="text-sm text-gray-600 mt-2">
                            Gerçek ekran görüntüsü yakında eklenecek
                          </p>
                        </div>
                        
                        {/* Mock content based on screen type */}
                        {tab.screenshot === 'ana-sayfa' && (
                          <div className="space-y-3">
                            <div className="h-20 bg-gray-100 rounded-lg"></div>
                            <div className="grid grid-cols-2 gap-2">
                              <div className="h-16 bg-green-100 rounded-lg"></div>
                              <div className="h-16 bg-blue-100 rounded-lg"></div>
                            </div>
                            <div className="h-32 bg-gray-100 rounded-lg"></div>
                          </div>
                        )}
                        
                        {tab.screenshot === 'harita' && (
                          <div className="space-y-3">
                            <div className="h-48 bg-green-50 rounded-lg relative">
                              <div className="absolute top-2 left-2 right-2 h-8 bg-white rounded shadow-sm"></div>
                              <div className="absolute bottom-4 left-4 w-6 h-6 bg-green-500 rounded-full"></div>
                              <div className="absolute top-16 right-8 w-4 h-4 bg-green-400 rounded-full"></div>
                            </div>
                          </div>
                        )}
                        
                        {tab.screenshot === 'gezi-noktalari' && (
                          <div className="space-y-2">
                            <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                              <div className="w-12 h-12 bg-green-200 rounded"></div>
                              <div className="flex-1">
                                <div className="h-3 bg-gray-300 rounded mb-1"></div>
                                <div className="h-2 bg-gray-200 rounded w-3/4"></div>
                              </div>
                            </div>
                            <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                              <div className="w-12 h-12 bg-green-200 rounded"></div>
                              <div className="flex-1">
                                <div className="h-3 bg-gray-300 rounded mb-1"></div>
                                <div className="h-2 bg-gray-200 rounded w-3/4"></div>
                              </div>
                            </div>
                          </div>
                        )}
                        
                        {tab.screenshot === 'etkinlikler' && (
                          <div className="space-y-3">
                            <div className="p-3 bg-orange-50 rounded-lg">
                              <div className="h-3 bg-orange-300 rounded mb-2"></div>
                              <div className="h-2 bg-orange-200 rounded w-2/3"></div>
                            </div>
                            <div className="p-3 bg-yellow-50 rounded-lg">
                              <div className="h-16 bg-yellow-200 rounded mb-2"></div>
                              <div className="h-2 bg-yellow-300 rounded"></div>
                            </div>
                          </div>
                        )}
                      </div>
                      
                      {/* Bottom navigation */}
                      <div className="absolute bottom-0 left-0 right-0 h-16 bg-white border-t flex items-center justify-around">
                        <div className={`w-8 h-8 rounded ${tab.screenshot === 'ana-sayfa' ? 'bg-green-500' : 'bg-gray-300'}`}></div>
                        <div className={`w-8 h-8 rounded ${tab.screenshot === 'harita' ? 'bg-green-500' : 'bg-gray-300'}`}></div>
                        <div className={`w-8 h-8 rounded ${tab.screenshot === 'gezi-noktalari' ? 'bg-green-500' : 'bg-gray-300'}`}></div>
                        <div className={`w-8 h-8 rounded ${tab.screenshot === 'etkinlikler' ? 'bg-green-500' : 'bg-gray-300'}`}></div>
                      </div>
                    </div>
                  </div>
                  
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