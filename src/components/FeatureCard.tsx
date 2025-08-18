import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  delay?: string;
}

const FeatureCard = ({ icon: Icon, title, description, delay = "" }: FeatureCardProps) => {
  return (
    <div className={`feature-card fade-in-up ${delay} group`}>
      <div className="flex flex-col items-center text-center space-y-4">
        <div className="w-16 h-16 bg-accent-gradient rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
          <Icon className="w-8 h-8 text-white" />
        </div>
        <h3 className="text-xl font-bold text-primary">{title}</h3>
        <p className="text-muted-foreground leading-relaxed">{description}</p>
      </div>
    </div>
  );
};

export default FeatureCard;