import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search, Filter } from "lucide-react";
import ProductCard from "@/components/ProductCard";
import { useState } from "react";

const allProducts = [
  {
    id: "1",
    name: "Serene Mist Kit",
    description: "An elegant pepper spray disguised as a luxury perfume atomizer, featuring a lavender casing.",
    price: 549,
    image: "/lovable-uploads/33e5ed6f-f145-4c8f-9421-6ed7a04a58a9.png",
    category: "Personal Protection",
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
    description: "A sleek keychain with integrated kubaton and LED flashlight in anodized aluminum with soft touch coating.",
    price: 549,
    image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=800&h=600&fit=crop",
    category: "Everyday Carry",
    isPremium: true,
  },
  {
    id: "4",
    name: "Rose Petal Alarm",
    description: "A fashionable bracelet with hidden panic button that sends GPS alerts to your emergency contacts.",
    price: 149,
    image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=800&h=600&fit=crop",
    category: "Wearable Protection",
  },
  {
    id: "5",
    name: "Velvet Touch Defender",
    description: "A sophisticated compact mirror with hidden stun gun capability for discreet protection.",
    price: 899,
    image: "https://images.unsplash.com/photo-1583292650898-7d22cd27ca6f?w=800&h=600&fit=crop",
    category: "Personal Protection",
    isPremium: true,
  },
  {
    id: "6",
    name: "Crystal Guardian Ring",
    description: "An elegant ring with crystal design that conceals a panic button with GPS tracking.",
    price: 249,
    image: "https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=800&h=600&fit=crop",
    category: "Wearable Protection",
  },
  {
    id: "7",
    name: "Moonlight Safety Pin",
    description: "A decorative brooch that doubles as a personal alarm with LED flashlight functionality.",
    price: 199,
    image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&h=600&fit=crop",
    category: "Wearable Protection",
    isNew: true,
  },
  {
    id: "8",
    name: "Aurora Defense Kit",
    description: "A premium defense pen with tactical tip and built-in emergency whistle in rose gold finish.",
    price: 699,
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop",
    category: "Everyday Carry",
    isPremium: true,
  }
];

const Products = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sortBy, setSortBy] = useState("name");

  const categories = ["all", "Personal Protection", "Wearable Protection", "Everyday Carry"];

  const filteredProducts = allProducts
    .filter(product => 
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.description.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .filter(product => 
      selectedCategory === "all" || product.category === selectedCategory
    )
    .sort((a, b) => {
      switch (sortBy) {
        case "price-low":
          return a.price - b.price;
        case "price-high":
          return b.price - a.price;
        case "name":
        default:
          return a.name.localeCompare(b.name);
      }
    });

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4 border-pastelblue-400 text-pastelblue-700 px-4 py-1">
            Complete Collection
          </Badge>
          <h1 className="font-serif text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-pastelblue-600 to-pastelgreen-600 bg-clip-text text-transparent">
            All Protection Products
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our complete range of stylish self-defense products designed for modern safety.
          </p>
        </div>

        {/* Filters */}
        <div className="mb-8 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input
              placeholder="Search products..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
          
          <Select value={selectedCategory} onValueChange={setSelectedCategory}>
            <SelectTrigger>
              <Filter className="h-4 w-4 mr-2" />
              <SelectValue placeholder="Category" />
            </SelectTrigger>
            <SelectContent>
              {categories.map(category => (
                <SelectItem key={category} value={category}>
                  {category === "all" ? "All Categories" : category}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Select value={sortBy} onValueChange={setSortBy}>
            <SelectTrigger>
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="name">Name (A-Z)</SelectItem>
              <SelectItem value="price-low">Price (Low to High)</SelectItem>
              <SelectItem value="price-high">Price (High to Low)</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product, index) => (
            <div 
              key={product.id} 
              className="animate-fade-in" 
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <ProductCard {...product} />
            </div>
          ))}
        </div>

        {/* No Results */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No products found matching your criteria.</p>
            <Button 
              variant="outline" 
              onClick={() => {
                setSearchTerm("");
                setSelectedCategory("all");
              }}
              className="mt-4"
            >
              Clear Filters
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Products;