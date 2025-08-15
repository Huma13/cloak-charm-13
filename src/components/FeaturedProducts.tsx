
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import ProductCard from "./ProductCard";

const products = [
  {
    id: "1",
    name: "Serene Mist Kit",
    description: "An elegant pepper spray disguised as a luxury perfume atomizer, featuring a lavender casing.",
    price: 45.99,
    image: "https://images.unsplash.com/photo-1582562124811-c09040d0a901?w=800&h=600&fit=crop",
    category: "Personal Protection",
    isNew: true,
    isPremium: true,
  },
  {
    id: "2",
    name: "Echo Alarm Pendant",
    description: "A beautiful stone pendant necklace that conceals a 130dB personal alarm triggered by a discreet button.",
    price: 39.99,
    image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=800&h=600&fit=crop",
    category: "Wearable Protection",
    isBestseller: true,
  },
  {
    id: "3",
    name: "Dusk Guardian Kit",
    description: "A sleek keychain with integrated kubaton and LED flashlight in anodized aluminum with soft touch coating.",
    price: 35.99,
    image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=800&h=600&fit=crop",
    category: "Everyday Carry",
    isPremium: true,
  },
  {
    id: "4",
    name: "Rose Petal Alarm",
    description: "A fashionable bracelet with hidden panic button that sends GPS alerts to your emergency contacts.",
    price: 49.99,
    image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=800&h=600&fit=crop",
    category: "Wearable Protection",
  }
];

const FeaturedProducts = () => {
  return (
    <section id="collections" className="py-16 md:py-24 pastel-gradient-green bg-opacity-30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <Badge variant="outline" className="mb-4 border-pastelgreen-400 text-pastelgreen-700 px-4 py-1">Collection</Badge>
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-pastelgreen-600 to-pastelblue-600 bg-clip-text text-transparent">Featured Protection Kits</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our most popular self-defense items, designed to blend seamlessly with your everyday style.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <div 
              key={product.id} 
              className="animate-fade-in" 
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <ProductCard {...product} />
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center animate-fade-in" style={{ animationDelay: "600ms" }}>
          <Button variant="outline" className="border-pastelblue-300 text-pastelblue-700 hover:bg-pastelblue-50 button-pop">
            View All Products <ArrowRight className="ml-2 h-4 w-4 animate-bounce-subtle" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
