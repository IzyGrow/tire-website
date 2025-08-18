import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Youtube, X } from "lucide-react";
import { useState } from "react";
import tireBelediyesiLogo from "@/assets/tire-belediyesi-logo.png";

const Footer = () => {
  const [showKVKK, setShowKVKK] = useState(false);

  const kvkkText = `AYDINLATMA METNİ
DEĞERLİ HEMŞEHRİMİZ; 

KİŞİSEL VERİLERİN KORUNMASI KANUNU İLE İLGİLİ OLARAK SİZLERİ BİLGİLENDİRMEK İSTERİZ.

6698 sayılı Kişisel Verilerin Korunması Kanunu (KVKK) hükümleri gereği, kimliğinizi belirli veya belirlenebilir kılan her türlü bilginiz "Kişisel Veri" olarak aşağıdaki kapsamda, Veri Sorumlusu sıfatıyla TİRE BELEDİYE BAŞKANLIĞI tarafından işlenecektir. "Kişisel Verilerinizin İşlenmesi" ise bu verilerin elde edilmesi, kaydedilmesi, depolanması, muhafaza edilmesi, değiştirilmesi, yeniden düzenlenmesi, açıklanması, aktarılması, devralınması, elde edilebilir hale getirilmesi, sınıflandırılması ya da kullanılmasının engellenmesi gibi veriler üzerinde gerçekleştirilen her türlü işlemi ifade etmektedir.

TİRE BELEDİYE BAŞKANLIĞI olarak kişisel verilerinizin güvenliğine en üst düzeyde önem vererek, sizlere sunduğumuz hizmetlerimizde kişisel verilerinizin güvenliğinin ön planda olduğu bilinciyle faaliyetlerimize devam ettiğimizi belirtmek isteriz.

Kişisel verilerinizin hizmetlerimizde kullanılması sırasında özel hayatınızın gizliliği ve temel hak ve özgürlüklerin korunması temel prensibimizdir.

Kişisel Verilerinizin İşlenme Amaçları ve Hukuki Sebepleri:

Kurumumuzun bağlı bulunduğu kanun ve ilgili mevzuatlar kapsamında sizlere sunulacak hizmetlerde kullanılmak, belediyecilik hizmetlerimizi gerçekleştirmek, bu kapsamda her türlü iş ve işlemin sahibini ve muhatabını belirlemek üzere bilgilerini tespit için, KVKK kapsamında kişisel veri olarak nitelendirilen kimlik bilgileriniz, adresiniz, telefon numaranız, vergi numaranız ve diğer bilgilerinizi kaydetmek, kağıt üzerinde ya da elektronik ortamda gerçekleştirilecek iş ve işlemlere dayanak olacak bilgi ve belgeleri düzenlemek, ilgili mevzuat uyarınca adli ve idari tüm yetkili makamlara öngörülen bilgi saklama, raporlama ve bilgilendirme yükümlülüklerine uymak, Kurumumuzca sunulan veya talep edilen başka hizmetlerimizi sunabilmektir.

Ayrıca Kanunun "Kişisel verilerin işlenme şartları" başlığı altında, ilgili kişinin açık rızası aranmaksızın kişisel verilerinin işlenmesini mümkün kılan şartlar şöyle sıralanmıştır;

a) Kanunlarda açıkça öngörülmesi. 

b) Fiili imkânsızlık nedeniyle rızasını açıklayamayacak durumda bulunan veya rızasına hukuki geçerlilik tanınmayan kişinin kendisinin ya da bir başkasının hayatı veya beden bütünlüğünün korunması için zorunlu olması. 

c) Bir sözleşmenin kurulması veya ifasıyla doğrudan doğruya ilgili olması kaydıyla, sözleşmenin taraflarına ait kişisel verilerin işlenmesinin gerekli olması.

ç) Veri sorumlusunun hukuki yükümlülüğünü yerine getirebilmesi için zorunlu olması. 

d) İlgili kişinin kendisi tarafından alenileştirilmiş olması. 

e) Bir hakkın tesisi, kullanılması veya korunması için veri işlemenin zorunlu olması. 

f) İlgili kişinin temel hak ve özgürlüklerine zarar vermemek kaydıyla, veri sorumlusunun meşru menfaatleri için veri işlenmesinin zorunlu olması.

Kişisel Verilerinizin Aktarılması:

Kurumumuz nezdinde bulunan kişisel verileriniz bağlı bulunduğumuz kanun, sair kanun ve sair mevzuat hükümlerinin zorunlu kıldığı/izin verdiği kişi, kurum ve/veya kuruluşlarla, vatandaşlara sunulmakta olan hizmetlerin yürütülmesi amacıyla Tire belediyesi, bağlı bulunan kanunlar kapsamında veya Tire Belediye Meclisinden onay alınmak suretiyle üniversiteler, kamu kurumları, sivil toplum kuruluşlarıyla ve belediyecilik faaliyetlerimizi yürütmek üzere hizmet alınan üçüncü taraflara yasal sınırlamalar çerçevesinde ve Gizlilik Sözleşmesi ile aktarılabilecektir.

Kişisel Verilerin Toplanma Yöntemi:

Kişisel verileriniz Belediyenin bağlı olduğu kanunlar ve diğer ilgili mevzuatlar uyarınca onay ve/veya imzanızla tanzim edilen belediyecilik işlemlerine ilişkin tüm beyanname/bilgilendirme formları ve sair belgelerle, elektronik onay ve/veya imzanız ile yapacağınız bildirimlerle, Kurumumuz, yerel hizmet birimleri, Web Sayfaları, Mobil Uygulamalar, Çağrı Merkezi, Kiosklar gibi kanallar aracılığı ile sözlü, yazılı veya elektronik ortamda olmak kaydıyla çeşitli yöntemlerle toplanmaktadır.

Kanun'un 11. Maddesi uyarınca haklarınız:

Kurumumuza başvurmak suretiyle kişisel verilerinizin;

a) İşlenip işlenmediğini öğrenme,

b) İşlenmişse bilgi talep etme,

c) İşlenme amacını ve amacına uygun kullanıp kullanılmadığını öğrenme,

ç) Yurt içinde/yurt dışında aktarıldığı 3. Kişileri bilme,

d) Eksik/yanlış işlenmişse düzeltilmesini isteme,

e) KVKK'nın 7. Maddesinde öngörülen şartlar çerçevesinde silinmesini/yok edilmesini isteme,

f) (d) ve (e) maddeleri uyarınca yapılan işlemlerin, kişisel verilerin aktarıldığı üçüncü kişilere bildirilmesini isteme,

g) Münhasıran otomatik sistemler ile analiz edilmesi nedeniyle aleyhinize bir sonucun ortaya çıkmasına itiraz etme,

ğ) Kanuna aykırı işlenmesi sebebiyle zarara uğramanız halinde zararınızın giderilmesini talep etme hakkına sahipsiniz.

KVKK'nın 13. maddesinin 1. fıkrası gereğince, yukarıda belirtilen haklarınızı kullanmak ile ilgili talebinizi, yazılı veya KEP üzerinden elektronik imzalı olarak Kurumumuza iletebilirsiniz. Bu çerçevede Kurumumuza KVKK'nın 11. maddesi kapsamında yapacağınız başvurularda yazılı olarak başvurunuzu ileteceğiniz kanallar ve usuller aşağıda açıklanmaktadır. 

Yukarıda belirtilen haklarınızı kullanmak için kimliğinizi tespit edici gerekli bilgiler ile açıklamalarınızı içeren talebinizi; www.tire.bel.tr adresindeki formu doldurarak, formun imzalı bir nüshasını Tire Belediyesi Yazı İşleri Şube Müdürlüğü Cumhuriyet Mahallesi 29 Ekim Caddesi No:19 Pk: 35900 Tire-İZMİR adresine kimliğinizi tespit edici belgeler ile bizzat elden iletebilir, noter kanalıyla gönderebilir veya ilgili formu tirebel@tire.bel.tr mail veya tirebelediye@hs01.kep.tr adresine güvenli elektronik imzalı olarak iletebilirsiniz.`;

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
              <a 
                href="https://tire.bel.tr/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block text-white/80 hover:text-accent-green transition-colors"
              >
                Belediye Web Sitesi
              </a>
              <button 
                onClick={() => setShowKVKK(true)}
                className="block text-white/80 hover:text-accent-green transition-colors text-left"
              >
                KVKK
              </button>
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

      {/* KVKK Modal */}
      {showKVKK && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-4xl max-h-[80vh] overflow-hidden">
            <div className="flex justify-between items-center p-6 border-b">
              <h2 className="text-2xl font-bold text-primary">KVKK Aydınlatma Metni</h2>
              <button 
                onClick={() => setShowKVKK(false)}
                className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors"
              >
                <X className="w-5 h-5 text-gray-600" />
              </button>
            </div>
            <div className="p-6 overflow-y-auto max-h-[60vh]">
              <pre className="whitespace-pre-wrap text-sm text-gray-700 leading-relaxed">
                {kvkkText}
              </pre>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
};

export default Footer;