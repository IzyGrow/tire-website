import { Smartphone, Download } from "lucide-react";

interface QRCodeSectionProps {
  title?: string;
  showTitle?: boolean;
  size?: "small" | "large";
}

const QRCodeSection = ({ title, showTitle = false, size = "small" }: QRCodeSectionProps) => {
  const qrSize = size === "large" ? "w-32 h-32" : "w-24 h-24";
  const containerClass = size === "large" ? "gap-8" : "gap-4";

  return (
    <div className="flex flex-col items-center space-y-6">
      {showTitle && title && (
        <h3 className="text-2xl font-bold text-center">{title}</h3>
      )}
      
      <div className={`flex flex-col sm:flex-row items-center justify-center ${containerClass}`}>
        {/* iOS QR Code */}
        <div className="qr-container group cursor-pointer">
          <div className="flex flex-col items-center space-y-3">
            <div className={`${qrSize} bg-gradient-to-br from-black to-gray-800 rounded-xl flex items-center justify-center shimmer`}>
              <div className="text-white text-xs font-mono">QR KOD</div>
            </div>
            <div className="flex items-center space-x-2 text-sm font-medium">
              <Smartphone className="w-4 h-4" />
              <span>App Store'dan İndirin</span>
            </div>
            <div className="text-xs text-muted-foreground">iOS 12+</div>
          </div>
        </div>

        {/* Android QR Code */}
        <div className="qr-container group cursor-pointer">
          <div className="flex flex-col items-center space-y-3">
            <div className={`${qrSize} bg-gradient-to-br from-black to-gray-800 rounded-xl flex items-center justify-center shimmer`}>
              <div className="text-white text-xs font-mono">QR KOD</div>
            </div>
            <div className="flex items-center space-x-2 text-sm font-medium">
              <Download className="w-4 h-4" />
              <span>Google Play'den İndirin</span>
            </div>
            <div className="text-xs text-muted-foreground">Android 8+</div>
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