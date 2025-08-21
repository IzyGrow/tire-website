import { Smartphone, Download } from "lucide-react";
import { useEffect, useRef } from "react";
import QRCode from "qrcode";

interface QRCodeSectionProps {
  title?: string;
  showTitle?: boolean;
  size?: "small" | "large";
}

const QRCodeSection = ({ title, showTitle = false, size = "small" }: QRCodeSectionProps) => {
  const qrSize = size === "large" ? "w-32 h-32" : "w-24 h-24";
  const containerClass = size === "large" ? "gap-8" : "gap-4";
  
  const androidQRRef = useRef<HTMLDivElement>(null);
  const iosQRRef = useRef<HTMLDivElement>(null);

  // Generate QR codes when component mounts
  useEffect(() => {
    const generateQRCode = async (element: HTMLDivElement, url: string) => {
      try {
        const qrDataURL = await QRCode.toDataURL(url, {
          width: size === "large" ? 128 : 96,
          margin: 1,
          color: {
            dark: "#000000",
            light: "#FFFFFF"
          }
        });
        
        // Clear existing content and add QR code image
        element.innerHTML = '';
        const img = document.createElement('img');
        img.src = qrDataURL;
        img.alt = "QR Code";
        img.className = "w-full h-full object-contain rounded-lg";
        element.appendChild(img);
      } catch (error) {
        console.error('QR code generation failed:', error);
        // Fallback to text if QR generation fails
        element.innerHTML = '<div class="text-white text-xs font-mono">QR KOD</div>';
      }
    };

    // Get current domain for APK download URL
    const currentDomain = window.location.origin;
    const apkDownloadUrl = `${currentDomain}/tire-app.apk`;

    if (androidQRRef.current) {
      generateQRCode(androidQRRef.current, apkDownloadUrl);
    }
  }, [size]);

  const handleDownload = () => {
    const currentDomain = window.location.origin;
    const apkDownloadUrl = `${currentDomain}/tire-app.apk`;
    
    // Create a temporary link and trigger download
    const link = document.createElement('a');
    link.href = apkDownloadUrl;
    link.download = 'tire-app.apk';
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="flex flex-col items-center space-y-6">
      {showTitle && title && (
        <h3 className="text-2xl font-bold text-center">{title}</h3>
      )}
      
      <div className={`flex flex-col sm:flex-row items-center justify-center ${containerClass}`}>
        {/* iOS QR Code */}
        <div className="qr-container group">
          <div className="flex flex-col items-center space-y-3">
            <div className={`${qrSize} bg-gradient-to-br from-black to-gray-800 rounded-xl flex items-center justify-center shimmer`}>
              <div ref={iosQRRef} className="w-full h-full flex items-center justify-center">
                <div className="text-white text-xs font-mono">YAKINDA</div>
              </div>
            </div>
            <div className="flex items-center space-x-2 text-sm font-medium">
              <Smartphone className="w-4 h-4" />
              <span>Yakında App Store'da</span>
            </div>
          </div>
        </div>

        {/* Android QR Code */}
        <div 
          className="qr-container group cursor-pointer"
          onClick={handleDownload}
        >
          <div className="flex flex-col items-center space-y-3">
            <div className={`${qrSize} bg-gradient-to-br from-black to-gray-800 rounded-xl flex items-center justify-center shimmer`}>
              <div ref={androidQRRef} className="w-full h-full flex items-center justify-center">
                <div className="text-white text-xs font-mono">QR KOD</div>
              </div>
            </div>
            <div className="flex items-center space-x-2 text-sm font-medium">
              <Download className="w-4 h-4" />
              <span>APK İndirin</span>
            </div>
          </div>
        </div>
      </div>

      {size === "large" && (
        <div className="text-center text-muted-foreground max-w-md">
          <p>iOS ve Android cihazlarınız için ücretsiz olarak indirin. QR kodu telefonunuzla tarayarak hemen indirmeye başlayın.</p>
        </div>
      )}
    </div>
  );
};

export default QRCodeSection;