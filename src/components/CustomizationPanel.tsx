
import React, { useState, useRef } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Palette, 
  PenTool, 
  Shield, 
  Check, 
  Lock,
  Crown
} from "lucide-react";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { toast } from "@/hooks/use-toast";
import { Dialog, DialogTrigger, DialogContent } from "@/components/ui/dialog";
import { PricingDialog } from "./PricingDialog";

interface ColorOption {
  name: string;
  value: string;
  bgClass: string;
  textClass: string;
}

interface FeatureOption {
  id: string;
  name: string;
  description: string;
  icon: JSX.Element;
}

const CustomizationPanel = ({ isPremiumUser = false }) => {
  const [selectedColor, setSelectedColor] = useState<string>("lavender");
  const [customColor, setCustomColor] = useState<string>("#b38aff");
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>(["alarm", "light"]);
  const [engravingText, setEngravingText] = useState<string>("");
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const colorPickerRef = useRef<HTMLInputElement>(null);

  const colorOptions: ColorOption[] = [
    { name: "Lavender", value: "lavender", bgClass: "bg-lavender-400", textClass: "text-lavender-700" },
    { name: "Rose Pink", value: "rose", bgClass: "bg-pastelpink-400", textClass: "text-pastelpink-700" },
    { name: "Sky Blue", value: "skyblue", bgClass: "bg-pastelblue-400", textClass: "text-pastelblue-700" },
    { name: "Mint Green", value: "mint", bgClass: "bg-pastelgreen-400", textClass: "text-pastelgreen-700" },
    { name: "Soft Yellow", value: "yellow", bgClass: "bg-pastelyellow-400", textClass: "text-amber-700" },
    { name: "Pearl White", value: "pearl", bgClass: "bg-gray-100", textClass: "text-gray-700" },
  ];

  const featureOptions: FeatureOption[] = [
    { 
      id: "alarm", 
      name: "Safety Alarm", 
      description: "Built-in 120dB alarm that can be triggered with a simple button press", 
      icon: <Shield className="h-4 w-4" />
    },
    { 
      id: "light", 
      name: "LED Light", 
      description: "Integrated bright LED light for visibility in dark areas", 
      icon: <Shield className="h-4 w-4" />
    },
    { 
      id: "tracker", 
      name: "GPS Tracker", 
      description: "Connects to your phone for location tracking", 
      icon: <Shield className="h-4 w-4" />
    },
    { 
      id: "spray", 
      name: "Defense Spray", 
      description: "Quick-release compartment for defense spray (spray sold separately)", 
      icon: <Shield className="h-4 w-4" />
    },
  ];

  const handleColorSelect = (color: string) => {
    setSelectedColor(color);
  };

  const handleFeatureToggle = (featureId: string) => {
    setSelectedFeatures((prev) => {
      if (prev.includes(featureId)) {
        return prev.filter(id => id !== featureId);
      } else {
        return [...prev, featureId];
      }
    });
  };

  const handleSubmitCustomizations = () => {
    if (!isPremiumUser) {
      toast({
        title: "Premium Feature",
        description: "This feature is only available for premium members. Please upgrade to access customization options.",
        duration: 5000,
      });
      return;
    }

    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Customization Saved",
        description: `Your customization preferences have been saved.`,
      });
    }, 1000);
  };

  const handleCustomColorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCustomColor(e.target.value);
    setSelectedColor("custom");
  };

  const handleColorPickerClick = () => {
    if (colorPickerRef.current && isPremiumUser) {
      colorPickerRef.current.click();
    } else if (!isPremiumUser) {
      toast({
        title: "Premium Feature",
        description: "Custom color selection is only available for premium members",
        duration: 3000,
      });
    }
  };

  const PremiumFeatureOverlay = ({ children }: { children: React.ReactNode }) => {
    if (isPremiumUser) {
      return <>{children}</>;
    }
    
    return (
      <div className="relative">
        <div className="absolute inset-0 bg-gray-200/60 backdrop-blur-[1px] flex flex-col items-center justify-center z-10 rounded-lg">
          <Lock className="h-8 w-8 text-gray-500 mb-2" />
          <p className="text-gray-700 font-medium text-center px-6">Premium Feature</p>
          <Dialog>
            <DialogTrigger asChild>
              <Button 
                size="sm" 
                variant="outline"
                className="mt-4 border-lavender-300 text-lavender-700"
              >
                <Crown className="h-4 w-4 mr-1" />
                Upgrade to Premium
              </Button>
            </DialogTrigger>
            <PricingDialog />
          </Dialog>
        </div>
        {children}
      </div>
    );
  };

  return (
    <div className="bg-white/80 rounded-xl shadow-md p-6 animate-fade-in">
      <h3 className="font-serif text-2xl font-medium mb-6 text-center bg-gradient-to-r from-lavender-600 to-pastelpink-600 bg-clip-text text-transparent">
        Customize Your Protection
      </h3>
      
      <Tabs defaultValue="color">
        <TabsList className="grid grid-cols-3 mb-6">
          <TabsTrigger value="color" className="flex items-center gap-2 px-4">
            <Palette className="h-4 w-4" /> Colors
          </TabsTrigger>
          <TabsTrigger value="engraving" className="flex items-center gap-2 px-4">
            <PenTool className="h-4 w-4" /> Engraving
          </TabsTrigger>
          <TabsTrigger value="features" className="flex items-center gap-2 px-4">
            <Shield className="h-4 w-4" /> Features
          </TabsTrigger>
        </TabsList>
        
        {/* Color Selection Panel */}
        <TabsContent value="color" className="space-y-4">
          <p className="text-sm text-gray-600 mb-4">
            Choose a color that matches your style and aesthetic preferences
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {colorOptions.map((color) => (
              <div key={color.value} className="relative">
                <button
                  onClick={() => handleColorSelect(color.value)}
                  className={`w-full h-24 rounded-lg ${color.bgClass} transition-all duration-200 
                    ${selectedColor === color.value ? "ring-4 ring-lavender-300 scale-105" : "hover:scale-105"}
                  `}
                  aria-label={`Select ${color.name} color`}
                >
                  {selectedColor === color.value && (
                    <div className="absolute top-2 right-2 bg-white rounded-full p-1">
                      <Check className="h-4 w-4 text-lavender-600" />
                    </div>
                  )}
                </button>
                <p className={`text-center mt-2 text-sm font-medium ${color.textClass}`}>
                  {color.name}
                </p>
              </div>
            ))}
            
            <PremiumFeatureOverlay>
              <div className="relative">
                <button
                  onClick={handleColorPickerClick}
                  className={`w-full h-24 rounded-lg transition-all duration-200 
                    ${selectedColor === "custom" ? "ring-4 ring-lavender-300 scale-105" : "hover:scale-105"}
                  `}
                  style={{ backgroundColor: customColor }}
                  aria-label="Select custom color"
                >
                  {selectedColor === "custom" && (
                    <div className="absolute top-2 right-2 bg-white rounded-full p-1">
                      <Check className="h-4 w-4 text-lavender-600" />
                    </div>
                  )}
                </button>
                <p className="text-center mt-2 text-sm font-medium text-gray-700">
                  Custom Color
                </p>
                <input 
                  ref={colorPickerRef}
                  type="color" 
                  value={customColor}
                  onChange={handleCustomColorChange}
                  className="sr-only"
                  disabled={!isPremiumUser}
                />
              </div>
            </PremiumFeatureOverlay>
          </div>
        </TabsContent>
        
        {/* Engraving Panel */}
        <TabsContent value="engraving" className="space-y-6">
          <p className="text-sm text-gray-600 mb-4">
            Add a personal touch with custom engraving (up to 20 characters)
          </p>
          
          <PremiumFeatureOverlay>
            <div className="space-y-4">
              <div>
                <Label htmlFor="engravingText" className="text-sm font-medium mb-1 block">
                  Engraving Text
                </Label>
                <Input 
                  id="engravingText"
                  value={engravingText}
                  onChange={(e) => setEngravingText(e.target.value)}
                  maxLength={20}
                  placeholder="Enter text to engrave..."
                  className="w-full"
                  disabled={!isPremiumUser}
                />
                <p className="text-xs text-gray-500 mt-1">
                  {20 - engravingText.length} characters remaining
                </p>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-sm text-gray-600 mb-2">Preview:</p>
                <div className="h-16 bg-white rounded border flex items-center justify-center">
                  {engravingText ? (
                    <p className="font-serif italic">{engravingText}</p>
                  ) : (
                    <p className="text-gray-400 italic text-sm">Engraving preview will appear here</p>
                  )}
                </div>
              </div>
            </div>
          </PremiumFeatureOverlay>
        </TabsContent>
        
        {/* Features Selection Panel */}
        <TabsContent value="features" className="space-y-6">
          <p className="text-sm text-gray-600 mb-4">
            Select the safety features you want to include
          </p>
          
          <PremiumFeatureOverlay>
            <div className="space-y-3">
              {featureOptions.map((feature) => (
                <div 
                  key={feature.id}
                  onClick={() => isPremiumUser && handleFeatureToggle(feature.id)}
                  className={`p-4 rounded-lg border transition-all ${isPremiumUser ? "cursor-pointer" : ""}
                    ${selectedFeatures.includes(feature.id) 
                      ? "border-lavender-400 bg-lavender-50" 
                      : "border-gray-200 hover:border-lavender-200"}
                  `}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className={`p-2 rounded-full 
                        ${selectedFeatures.includes(feature.id) ? "bg-lavender-100" : "bg-gray-100"}`}>
                        {feature.icon}
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-800">{feature.name}</h4>
                        <p className="text-xs text-gray-500">{feature.description}</p>
                      </div>
                    </div>
                    <div>
                      {selectedFeatures.includes(feature.id) ? (
                        <div className="h-6 w-6 rounded-full bg-lavender-400 flex items-center justify-center">
                          <Check className="h-4 w-4 text-white" />
                        </div>
                      ) : (
                        <div className="h-6 w-6 rounded-full border-2 border-gray-300"></div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </PremiumFeatureOverlay>
        </TabsContent>
      </Tabs>

      <Separator className="my-6" />
      
      <div className="flex items-center justify-between">
        <div>
          <h4 className="text-sm font-medium text-gray-700">Selected Options:</h4>
          <div className="flex flex-wrap gap-2 mt-2">
            <Badge variant="outline" className="bg-lavender-50">
              {selectedColor === "custom" 
                ? "Custom Color" 
                : `${colorOptions.find(c => c.value === selectedColor)?.name || "Default"} Color`}
            </Badge>
            {engravingText && (
              <Badge variant="outline" className="bg-pastelpink-50">
                Custom Engraving
              </Badge>
            )}
            <Badge variant="outline" className="bg-pastelblue-50">
              {selectedFeatures.length} Features
            </Badge>
          </div>
        </div>
        
        <Button
          onClick={handleSubmitCustomizations}
          className="bg-gradient-to-r from-lavender-400 to-pastelpink-400 hover:from-lavender-500 hover:to-pastelpink-500 text-white button-pop"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Saving..." : "Save Customization"}
        </Button>
      </div>
    </div>
  );
};

export default CustomizationPanel;
