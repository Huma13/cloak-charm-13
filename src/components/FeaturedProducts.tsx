
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import ProductCard from "./ProductCard";

const products = [
  {
    id: "1",
    name: "Serene Mist Kit",
    description: "An elegant pepper spray disguised as a luxury perfume atomizer, featuring a lavender casing.",
    price: 549,
    image: "/lovable-uploads/33e5ed6f-f145-4c8f-9421-6ed7a04a58a9.png",
    category: "Everyday Carry",
    isNew: true,
    isPremium: true,
  },
  {
    id: "2",
    name: "Echo Alarm Pendant",
    description: "A beautiful stone pendant necklace that conceals a 130dB personal alarm triggered by a discreet button.",
    price: 149,
    image: "/lovable-uploads/113d1726-c956-4e54-9875-7e4a2c2f2339.png",
    category: "Wearable Protection",
    isBestseller: true,
  },
  {
    id: "3",
    name: "Dusk Guardian Kit",
    description: "A concept self-defense kit integrating a kubaton keychain, alarm pendant, pepper spray, and flashlight into a cohesive design that balances functionality with aesthetics.",
    price: 679,
    image: "https://sdmntprcentralus.oaiusercontent.com/files/00000000-437c-61f5-8c14-8daa1e921788/raw?se=2025-08-17T06%3A25%3A10Z&sp=r&sv=2024-08-04&sr=b&scid=9f3d62bf-60ff-527b-b7e6-faa577b35a67&skoid=add8ee7d-5fc7-451e-b06e-a82b2276cf62&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-08-17T05%3A23%3A22Z&ske=2025-08-18T05%3A23%3A22Z&sks=b&skv=2024-08-04&sig=NNce1Lg8H5Z/sbgI1jBhmGK3QWpwDFQist9nptcB66c%3D",
    category: "Personal Protection",
    isPremium: true,
  },
  {
    id: "4",
    name: "Rose Petal Alarm",
    description: "A fashionable rose-shaped pendant with hidden panic button that sends GPS alerts to your emergency contacts.",
    price: 149,
    image: "https://sdmntprcentralus.oaiusercontent.com/files/00000000-f310-61f5-8ac0-9467f67ec7af/raw?se=2025-08-17T06%3A31%3A43Z&sp=r&sv=2024-08-04&sr=b&scid=a2819045-2614-59ab-810b-c165c9426ade&skoid=add8ee7d-5fc7-451e-b06e-a82b2276cf62&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-08-16T21%3A30%3A59Z&ske=2025-08-17T21%3A30%3A59Z&sks=b&skv=2024-08-04&sig=3QZo0iE%2BOY6psAEk%2BSKjgiKzjRJCOdc2e29m%2BnHBywo%3D",
    category: "Wearable Protection",
  }
];

const FeaturedProducts = () => {
  const navigate = useNavigate();

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
          <Button 
            variant="outline" 
            className="border-pastelblue-300 text-pastelblue-700 hover:bg-pastelblue-50 button-pop"
            onClick={() => navigate('/products')}
          >
            View All Products <ArrowRight className="ml-2 h-4 w-4 animate-bounce-subtle" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
