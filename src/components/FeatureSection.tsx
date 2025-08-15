
import { Badge } from "@/components/ui/badge";
import { Shield, Eye, Sparkles, Clock } from "lucide-react";

interface FeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  bgColor: string;
  iconColor: string;
  textColor: string;
}

const Feature = ({ icon, title, description, bgColor, iconColor, textColor }: FeatureProps) => (
  <div className={`flex flex-col items-center text-center p-6 rounded-lg bg-white shadow-sm hover:shadow-md transition-shadow ${bgColor}`}>
    <div className={`p-3 ${iconColor} rounded-full mb-4`}>
      {icon}
    </div>
    <h3 className={`font-semibold text-xl mb-2 ${textColor}`}>{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const FeatureSection = () => {
  const features: FeatureProps[] = [
    {
      icon: <Shield className="h-6 w-6 text-pastelpink-600" />,
      title: "Maximum Protection",
      description: "Engineered with high-quality materials designed to keep you safe in unpredictable situations.",
      bgColor: "bg-gradient-to-br from-pastelpink-50 to-white",
      iconColor: "bg-pastelpink-100",
      textColor: "text-pastelpink-600"
    },
    {
      icon: <Eye className="h-6 w-6 text-pastelblue-600" />,
      title: "Discreet Design",
      description: "Beautifully crafted to blend seamlessly with your everyday accessories while staying accessible.",
      bgColor: "bg-gradient-to-br from-pastelblue-50 to-white",
      iconColor: "bg-pastelblue-100",
      textColor: "text-pastelblue-600"
    },
    {
      icon: <Sparkles className="h-6 w-6 text-pastelyellow-600" />,
      title: "Aesthetically Pleasing",
      description: "Self-defense tools that are as beautiful as they are functional, enhancing your personal style.",
      bgColor: "bg-gradient-to-br from-pastelyellow-50 to-white",
      iconColor: "bg-pastelyellow-100",
      textColor: "text-pastelyellow-700"
    },
    {
      icon: <Clock className="h-6 w-6 text-pastelgreen-600" />,
      title: "Quick Access",
      description: "Thoughtfully designed for immediate accessibility when you need protection the most.",
      bgColor: "bg-gradient-to-br from-pastelgreen-50 to-white",
      iconColor: "bg-pastelgreen-100",
      textColor: "text-pastelgreen-600"
    }
  ];

  return (
    <section id="features" className="py-16 md:py-24 bg-gradient-to-r from-lavender-100 via-pastelblue-100 to-pastelpink-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <Badge variant="outline" className="mb-4 border-lavender-300 text-lavender-700 px-4 py-1">Features</Badge>
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-lavender-600 to-pastelpink-500 bg-clip-text text-transparent">
            Why Choose Our Self-Defense Kits
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our self-defense kits are designed with intention, combining functionality with beauty to ensure you feel confident and protected.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 animate-fade-in">
          {features.map((feature, index) => (
            <Feature key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
