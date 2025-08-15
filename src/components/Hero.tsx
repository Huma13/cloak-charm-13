
import { Button } from "@/components/ui/button";
import { ShieldCheck, Sparkles } from "lucide-react";

const Hero = () => {
  const handleShopClick = () => {
    const collectionsSection = document.getElementById('collections');
    if (collectionsSection) {
      collectionsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handlePremiumClick = () => {
    const premiumSection = document.getElementById('premium-features');
    if (premiumSection) {
      premiumSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative overflow-hidden pastel-gradient-mixed">
      {/* Decorative floating elements */}
      <div className="absolute top-20 left-[10%] w-12 h-12 rounded-full bg-pastelblue-200 animate-float opacity-60"></div>
      <div className="absolute top-40 right-[15%] w-16 h-16 rounded-full bg-pastelpink-200 animate-float animation-delay-1000 opacity-70"></div>
      <div className="absolute bottom-20 left-[20%] w-14 h-14 rounded-full bg-pastelgreen-200 animate-bounce-subtle opacity-60"></div>
      <div className="absolute bottom-40 right-[25%] w-10 h-10 rounded-full bg-pastelyellow-200 animate-pulse opacity-70"></div>
      
      <div className="container mx-auto px-4 py-24 md:py-32 flex flex-col items-center">
        <div className="animate-fade-in flex flex-col items-center text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center justify-center p-2 mb-6 bg-pastelblue-200 rounded-full animate-pulse">
            <ShieldCheck className="h-6 w-6 text-pastelblue-600 mr-2" />
            <span className="text-sm font-medium text-pastelblue-800">Protection without suspicion</span>
          </div>
          
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight animate-scale-in">
            Safety That <span className="bg-gradient-to-r from-lavender-400 to-pastelblue-400 bg-clip-text text-transparent">Blends In</span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl animate-fade-in" style={{animationDelay: "200ms"}}>
            Self-defense kits designed to look like everyday accessories. So discreet, no one will ever know they're actually keeping you safe.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 w-full justify-center animate-fade-in" style={{animationDelay: "400ms"}}>
            <Button 
              size="lg" 
              onClick={handleShopClick}
              className="bg-pastelpink-400 hover:bg-pastelpink-500 text-white button-pop shadow-md hover:shadow-lg transition-all duration-300"
            >
              Shop Collection
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              onClick={handlePremiumClick}
              className="border-pastelblue-300 text-pastelblue-700 hover:bg-pastelblue-50 button-pop group"
            >
              Premium Personalization <Sparkles size={16} className="ml-1 text-lavender-500 group-hover:animate-spin-slow" />
            </Button>
          </div>

          <div className="mt-6 px-4 py-2 bg-lavender-100 rounded-lg border border-lavender-200 animate-fade-in" style={{animationDelay: "600ms"}}>
            <p className="text-sm text-lavender-700 italic">
              "Every item is uniquely customizable for premium members — making your protection truly one-of-a-kind."
            </p>
          </div>
        </div>
      </div>
      
      <div className="absolute -bottom-16 left-0 right-0 h-40 bg-gradient-to-t from-background to-transparent z-10"></div>
    </div>
  );
};

export default Hero;
