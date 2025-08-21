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

  // GitHub Releases APK download URL - Using GitHub Releases for better bandwidth management
  const apkDownloadUrl = "https://github.com/IzyGrow/tire-website/releases/download/v1.0.0/app-release.apk";

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

    if (androidQRRef.current) {
      generateQRCode(androidQRRef.current, apkDownloadUrl);
    }
  }, [size]);

  const handleDownload = () => {
    // Use GitHub Releases URL for direct download - better bandwidth management
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
      
      <div className={`flex flex-col sm:flex-row items-center justify-center gap-4 ${containerClass}`}>
        {/* iOS QR Code */}
        <div className="qr-container group w-40 h-48 flex-shrink-0">
          <div className="flex flex-col items-center justify-between h-full py-3 w-full">
            <div className={`${qrSize} bg-gradient-to-br from-black to-gray-800 rounded-xl flex items-center justify-center shimmer flex-shrink-0`}>
              <div ref={iosQRRef} className="w-full h-full flex items-center justify-center">
                <div className="text-white text-xs font-mono">YAKINDA</div>
              </div>
            </div>
            <div className="flex flex-col items-center space-y-1 text-sm font-medium text-center w-full">
              <Smartphone className="w-4 h-4 flex-shrink-0" />
              <span className="text-xs text-center">Yakında App Store'da</span>
            </div>
          </div>
        </div>

        {/* Android QR Code */}
        <div 
          className="qr-container group cursor-pointer w-40 h-48 flex-shrink-0"
          onClick={handleDownload}
        >
          <div className="flex flex-col items-center justify-between h-full py-3 w-full">
            <div className={`${qrSize} bg-gradient-to-br from-black to-gray-800 rounded-xl flex items-center justify-center shimmer flex-shrink-0`}>
              <div ref={androidQRRef} className="w-full h-full flex items-center justify-center">
                <div className="text-white text-xs font-mono">QR KOD</div>
              </div>
            </div>
            <div className="flex flex-col items-center space-y-1 text-sm font-medium text-center w-full">
              <Download className="w-4 h-4 flex-shrink-0" />
              <span className="text-xs text-center">APK İndirin</span>
            </div>
          </div>
        </div>
      </div>

      {size === "large" && (
        <div className="text-center text-muted-foreground w-80">
          <p className="text-sm leading-relaxed">iOS ve Android cihazlarınız için ücretsiz olarak indirin. QR kodu telefonunuzla tarayarak hemen indirmeye başlayın.</p>
        </div>
      )}
    </div>
  );
};

export default QRCodeSection;