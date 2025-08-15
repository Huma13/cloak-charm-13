
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Sparkles } from "lucide-react";
import CustomizationPanel from "./CustomizationPanel";

const PremiumFeatures = () => {
  return (
    <section id="premium-features" className="py-16 md:py-24 bg-gradient-to-r from-lavender-50 to-softpink-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 border-lavender-400 text-lavender-700 px-4 py-1 bg-lavender-50">
            Premium Experience
          </Badge>
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-lavender-600 to-softpink-600 bg-clip-text text-transparent">
            Custom Color & Premium Personalization
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Exclusive customization options for premium members. Create protection that's uniquely yours.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Customization Preview */}
          <div className="order-2 lg:order-1">
            <CustomizationPanel />
          </div>
          
          {/* Features */}
          <div className="order-1 lg:order-2 space-y-8">
            <div className="mb-8">
              <h3 className="text-2xl font-serif font-bold mb-4">Make It Uniquely Yours</h3>
              <p className="text-gray-600 mb-6">
                Our premium subscription unlocks a world of personalization options. From custom colors to engraved messages, create protection that reflects your personality.
              </p>
              <Button className="bg-gradient-to-r from-lavender-400 to-softpink-400 hover:from-lavender-500 hover:to-softpink-500 text-white flex items-center gap-2">
                <Sparkles size={16} className="animate-spin-slow" />
                <span>Unlock Premium Features</span>
              </Button>
            </div>
          
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <Card>
                <CardContent className="p-6">
                  <div className="h-12 w-12 rounded-full bg-lavender-100 flex items-center justify-center mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-lavender-600">
                      <circle cx="13.5" cy="6.5" r="2.5"/>
                      <path d="M21 16c-.8-2.4-2-4.5-5-4.5-2 0-4 1-5 3"/>
                      <path d="M21 19c-1.3-2.5-3-4-6-4-2.1 0-3.5 1-5 3"/>
                      <path d="M7.5 12.5C5.5 13.5 4 15 3 18"/>
                      <path d="M3 16c1-1 2-1 3 0 .5.5 1 1 2 1"/>
                      <path d="m7 16 4.5 4.5"/>
                      <path d="m12 12 5 2 1.5 3"/>
                    </svg>
                  </div>
                  <h4 className="text-lg font-medium mb-2">Custom Color Selection</h4>
                  <p className="text-gray-600 text-sm">
                    Choose from our expanded palette of colors or select a custom shade from the entire color spectrum.
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <div className="h-12 w-12 rounded-full bg-pastelpink-100 flex items-center justify-center mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-pastelpink-600">
                      <path d="M2 4v16"/>
                      <path d="M2 8h18a2 2 0 0 1 2 2v10"/>
                      <path d="M2 17h20"/>
                      <path d="M6 8v9"/>
                    </svg>
                  </div>
                  <h4 className="text-lg font-medium mb-2">Personal Engraving</h4>
                  <p className="text-gray-600 text-sm">
                    Add your name, a meaningful quote, or emergency contact information with our precision engraving.
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <div className="h-12 w-12 rounded-full bg-pastelblue-100 flex items-center justify-center mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-pastelblue-600">
                      <path d="m7.9 20 6.2-16"/>
                      <path d="M5 4h14"/>
                      <path d="M5 20h14"/>
                    </svg>
                  </div>
                  <h4 className="text-lg font-medium mb-2">Material Upgrades</h4>
                  <p className="text-gray-600 text-sm">
                    Access premium materials like aerospace-grade aluminum, genuine leather, or hypoallergenic options.
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <div className="h-12 w-12 rounded-full bg-pastelgreen-100 flex items-center justify-center mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-pastelgreen-600">
                      <path d="M14 19.9V16h3a2 2 0 0 0 2-2v-2H5v2c0 1.1.9 2 2 2h3v3.9a2 2 0 1 0 4 0Z"/>
                      <path d="M6 12V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8"/>
                    </svg>
                  </div>
                  <h4 className="text-lg font-medium mb-2">Designer Features</h4>
                  <p className="text-gray-600 text-sm">
                    Exclusive add-on features like GPS tracking, extended battery life, and brightness controls.
                  </p>
                </CardContent>
              </Card>
            </div>
            
            <p className="text-sm text-gray-500 italic">Premium features are available with an annual subscription.</p>
            
            <div className="flex flex-wrap gap-4">
              <Button variant="outline" className="border-lavender-300 text-lavender-700 hover:bg-lavender-50">
                Learn More
              </Button>
              <Button variant="link" className="text-softpink-600 flex items-center gap-1 hover:text-softpink-800">
                See Pricing Details <ArrowRight size={16} />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PremiumFeatures;
