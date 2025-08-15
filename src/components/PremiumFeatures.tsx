
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import { ArrowRight, Sparkles } from "lucide-react";
import { useState } from "react";
import CustomizationPanel from "./CustomizationPanel";
import { PricingDialog } from "./PricingDialog";

const PremiumFeatures = () => {
  const [isPricingOpen, setIsPricingOpen] = useState(false);

  return (
    <section id="premium-features" className="py-16 md:py-24 bg-gradient-to-br from-lavender-50 via-softpink-50 to-pastelblue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 border-lavender-400 text-lavender-700 px-6 py-2 bg-white/80 backdrop-blur-sm">
            ✨ Premium Experience
          </Badge>
          <h2 className="font-serif text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-lavender-600 via-softpink-600 to-pastelblue-600 bg-clip-text text-transparent leading-tight">
            Custom Colors & Premium<br />Personalization
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
            Transform your protection into a personal statement. Our premium membership unlocks endless customization possibilities, from bespoke colors to meaningful engravings.
          </p>
        </div>
        
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-16 items-center">
          {/* Customization Preview - Enhanced */}
          <div className="order-2 xl:order-1 relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-lavender-200 to-softpink-200 rounded-3xl opacity-20 blur-xl"></div>
            <div className="relative bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl">
              <CustomizationPanel />
            </div>
          </div>
          
          {/* Features - Enhanced Layout */}
          <div className="order-1 xl:order-2 space-y-10">
            <div className="text-center xl:text-left">
              <h3 className="text-3xl font-serif font-bold mb-6 text-gray-800">Make It Uniquely Yours</h3>
              <p className="text-gray-600 mb-8 text-lg leading-relaxed">
                Our premium subscription opens doors to a world of personalization. Create protection that doesn't just keep you safe—it tells your story.
              </p>
              <Dialog open={isPricingOpen} onOpenChange={setIsPricingOpen}>
                <DialogTrigger asChild>
                  <Button className="bg-gradient-to-r from-lavender-400 via-softpink-400 to-pastelblue-400 hover:from-lavender-500 hover:via-softpink-500 hover:to-pastelblue-500 text-white px-8 py-3 rounded-full text-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                    <Sparkles size={20} className="animate-pulse mr-2" />
                    <span>Unlock Premium Features</span>
                  </Button>
                </DialogTrigger>
                <PricingDialog />
              </Dialog>
            </div>
          
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="border-0 shadow-lg bg-gradient-to-br from-lavender-50 to-white hover:shadow-xl transition-all duration-300">
                <CardContent className="p-8">
                  <div className="h-16 w-16 rounded-2xl bg-gradient-to-br from-lavender-100 to-lavender-200 flex items-center justify-center mb-6 shadow-inner">
                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-lavender-600">
                      <circle cx="13.5" cy="6.5" r="2.5"/>
                      <path d="M21 16c-.8-2.4-2-4.5-5-4.5-2 0-4 1-5 3"/>
                      <path d="M21 19c-1.3-2.5-3-4-6-4-2.1 0-3.5 1-5 3"/>
                      <path d="M7.5 12.5C5.5 13.5 4 15 3 18"/>
                      <path d="M3 16c1-1 2-1 3 0 .5.5 1 1 2 1"/>
                      <path d="m7 16 4.5 4.5"/>
                      <path d="m12 12 5 2 1.5 3"/>
                    </svg>
                  </div>
                  <h4 className="text-xl font-semibold mb-3 text-gray-800">Custom Color Selection</h4>
                  <p className="text-gray-600 leading-relaxed">
                    Choose from our expanded palette or select any custom shade from the entire color spectrum to match your style perfectly.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border-0 shadow-lg bg-gradient-to-br from-pastelpink-50 to-white hover:shadow-xl transition-all duration-300">
                <CardContent className="p-8">
                  <div className="h-16 w-16 rounded-2xl bg-gradient-to-br from-pastelpink-100 to-pastelpink-200 flex items-center justify-center mb-6 shadow-inner">
                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-pastelpink-600">
                      <path d="M2 4v16"/>
                      <path d="M2 8h18a2 2 0 0 1 2 2v10"/>
                      <path d="M2 17h20"/>
                      <path d="M6 8v9"/>
                    </svg>
                  </div>
                  <h4 className="text-xl font-semibold mb-3 text-gray-800">Personal Engraving</h4>
                  <p className="text-gray-600 leading-relaxed">
                    Add meaningful quotes, names, or emergency contacts with our precision laser engraving technology.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border-0 shadow-lg bg-gradient-to-br from-pastelblue-50 to-white hover:shadow-xl transition-all duration-300">
                <CardContent className="p-8">
                  <div className="h-16 w-16 rounded-2xl bg-gradient-to-br from-pastelblue-100 to-pastelblue-200 flex items-center justify-center mb-6 shadow-inner">
                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-pastelblue-600">
                      <path d="m7.9 20 6.2-16"/>
                      <path d="M5 4h14"/>
                      <path d="M5 20h14"/>
                    </svg>
                  </div>
                  <h4 className="text-xl font-semibold mb-3 text-gray-800">Material Upgrades</h4>
                  <p className="text-gray-600 leading-relaxed">
                    Access premium materials like aerospace-grade aluminum, genuine leather, or hypoallergenic options.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border-0 shadow-lg bg-gradient-to-br from-pastelgreen-50 to-white hover:shadow-xl transition-all duration-300">
                <CardContent className="p-8">
                  <div className="h-16 w-16 rounded-2xl bg-gradient-to-br from-pastelgreen-100 to-pastelgreen-200 flex items-center justify-center mb-6 shadow-inner">
                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-pastelgreen-600">
                      <path d="M14 19.9V16h3a2 2 0 0 0 2-2v-2H5v2c0 1.1.9 2 2 2h3v3.9a2 2 0 1 0 4 0Z"/>
                      <path d="M6 12V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8"/>
                    </svg>
                  </div>
                  <h4 className="text-xl font-semibold mb-3 text-gray-800">Designer Features</h4>
                  <p className="text-gray-600 leading-relaxed">
                    Exclusive add-ons like GPS tracking, extended battery life, and brightness controls for the ultimate experience.
                  </p>
                </CardContent>
              </Card>
            </div>
            
            <div className="text-center xl:text-left">
              <p className="text-sm text-gray-500 italic mb-6">Premium features available with annual subscription starting at ₹999/year</p>
              
              <div className="flex flex-wrap gap-4 justify-center xl:justify-start">
                <Button variant="outline" className="border-lavender-300 text-lavender-700 hover:bg-lavender-50 px-6 py-2 rounded-full">
                  Learn More
                </Button>
                <Button 
                  variant="link" 
                  className="text-softpink-600 flex items-center gap-2 hover:text-softpink-800 font-medium"
                  onClick={() => setIsPricingOpen(true)}
                >
                  See Pricing Details <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PremiumFeatures;
