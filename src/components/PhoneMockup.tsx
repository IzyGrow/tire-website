import { ReactNode } from "react";

interface PhoneMockupProps {
  children?: ReactNode;
  className?: string;
  showPlaceholder?: boolean;
}

const PhoneMockup = ({ children, className = "", showPlaceholder = true }: PhoneMockupProps) => {
  return (
    <div className={`phone-mockup ${className} float-animation`}>
      <div className="phone-screen">
        {showPlaceholder ? (
          <div className="w-full h-full bg-gradient-to-br from-primary to-primary-light flex flex-col items-center justify-center p-8">
            <div className="bg-white/20 backdrop-blur-sm rounded-3xl p-6 text-center text-white">
              <div className="w-16 h-16 bg-white/30 rounded-2xl mx-auto mb-4 shimmer"></div>
              <div className="space-y-2">
                <div className="h-4 bg-white/40 rounded-full shimmer"></div>
                <div className="h-3 bg-white/30 rounded-full shimmer"></div>
                <div className="h-3 bg-white/30 rounded-full w-3/4 mx-auto shimmer"></div>
              </div>
            </div>
            <div className="mt-8 text-white/80 text-sm font-medium">
              Tire Miras
            </div>
          </div>
        ) : (
          children
        )}
      </div>
    </div>
  );
};

export default PhoneMockup;