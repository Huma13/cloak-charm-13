import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search, Filter, ArrowLeft, Clock } from "lucide-react";
import ProductCard from "@/components/ProductCard";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const allProducts = [
  {
    id: "1",
    name: "Serene Mist Kit",
    description: "An elegant pepper spray kit disguised as a luxury perfume atomizer, featuring a safety alarm pendant, mini torch keychain, and a customised card-holder",
    price: 549,
    image: "/lovable-uploads/33e5ed6f-f145-4c8f-9421-6ed7a04a58a9.png",
    category: "Personal Protection",
    isNew: true,
    isPremium: true,
  },
  {
    id: "2",
    name: "Echo Alarm Pendant",
    description: "A beautiful stone pendant necklace that conceals a 130dB personal alarm triggered by a discreet, stylist button.",
    price: 129,
    image: "/lovable-uploads/113d1726-c956-4e54-9875-7e4a2c2f2339.png",
    category: "Wearable Protection",
    isBestseller: true,
  },
  {
    id: "3",
    name: "Dusk Guardian Kit",
    description: "A concept self-defense kit integrating a kubaton keychain, alarm pendant, pepper spray, and flashlight into a cohesive design that balances functionality with aesthetics.",
    price: 679,
    image: "/lovable-uploads/37b9f038-1534-417a-ab8d-1925574ffcd6.png",
    category: "Personal Protection",
    isPremium: true,
  },
  {
    id: "4",
    name: "Rose Petal Alarm",
    description: "A fashionable rose-shaped pendant with hidden panic button that sends GPS alerts to your emergency contacts.",
    price: 149,
    image: "/lovable-uploads/ecb027a2-b4b6-4cc2-8fe1-f2a716cdc504.png",
    category: "Wearable Protection",
  },
  {
    id: "5",
    name: "Velvet Touch Defender",
    description: "A sophisticated compact mirror with hidden stun gun capability for discreet protection.",
    price: 799,
    image: "/lovable-uploads/velvet-touch-defender.png",
    category: "Personal Protection",
    isPremium: true,
  },
  {
    id: "6",
    name: "Crystal Guardian Ring",
    description: "An elegant ring with crystal design that conceals a panic button with GPS tracking.",
    price: 199,
    image: "/lovable-uploads/crystal-guardian-ring.png",
    category: "Wearable Protection",
  },
  {
    id: "7",
    name: "Moonlight Safety Pin",
    description: "A decorative brooch that doubles as a personal alarm with LED flashlight functionality.",
    price: 99,
    image: "/lovable-uploads/moonlight-safety-pin.png",
    category: "Wearable Protection",
    isNew: true,
  },
  {
    id: "8",
    name: "Aurora Defense Kit",
    description: "A premium defense pen with tactical tip and built-in emergency whistle in rose gold finish.",
    price: 729,
    image: "/lovable-uploads/aurora-defense-kit.png",
    category: "Everyday Carry",
    isPremium: true,
  },
  {
    id: "9",
    name: "Blossom Shield Charm",
    description: "A delicate flower-shaped charm that conceals a 120dB alarm with emergency LED strobe light.",
    price: 129,
    image: "/lovable-uploads/blossom-shield-charm.png",
    category: "Wearable Protection",
  },
  {
    id: "10",
    name: "Midnight Whisper Kit",
    description: "A sleek black lipstick case containing pepper gel with precision spray nozzle.",
    price: 429,
    image: "/lovable-uploads/midnight-whisper-kit.png",
    category: "Personal Protection",
    isPremium: true,
  },
  {
    id: "11",
    name: "Starlight Escape Tool",
    description: "A beautiful star-shaped car accessory with hidden glass breaker and seatbelt cutter.",
    price: 329,
    image: "/lovable-uploads/starlight-escape-tool.png",
    category: "Everyday Carry",
  },
  {
    id: "12",
    name: "Garden Guardian Watch",
    description: "An elegant smartwatch with integrated panic button and GPS tracking in floral design.",
    price: 1299,
    image: "/lovable-uploads/garden-guardian-watch.png",
    category: "Wearable Protection",
    isPremium: true,
    isNew: true,
  }
];

const comingSoonProducts = [
  {
    name: "Pearl Essence Shield",
    description: "Luxury pearl necklace with built-in emergency beacon",
    category: "Wearable Protection",
    image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&h=600&fit=crop",
  },
  {
    name: "Diamond Dust Defender",
    description: "Crystalline compact with advanced protection features",
    category: "Personal Protection", 
    image: "https://images.unsplash.com/photo-1583292650898-7d22cd27ca6f?w=800&h=600&fit=crop",
  },
  {
    name: "Silk Touch Guardian",
    description: "Ultra-soft scarf with integrated safety alerts",
    category: "Wearable Protection",
    image: "https://media.istockphoto.com/id/1163621655/photo/flowing-transparent-cloth-wave-green-waving-silk-flying-textile-3d-illustration.jpg?s=612x612&w=0&k=20&c=EXzNxl0kHsDqalJwHPqsfiBffhv-E8R8qr-V4IZYyao=",
  }
];

const Products = () => {
  const navigate = useNavigate();
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
        {/* Back Button */}
        <div className="mb-6">
          <Button 
            variant="ghost" 
            onClick={() => navigate('/')}
            className="flex items-center gap-2 text-gray-600 hover:text-gray-800"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Button>
        </div>

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

        {/* Coming Soon Section */}
        <div className="mt-16">
          <div className="text-center mb-8">
            <Badge variant="outline" className="mb-4 border-pastelpink-400 text-pastelpink-700 px-4 py-1">
              Coming Soon
            </Badge>
            <h2 className="font-serif text-2xl md:text-3xl font-bold mb-4 bg-gradient-to-r from-pastelpink-600 to-lavender-600 bg-clip-text text-transparent">
              New Arrivals in Development
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Exciting new protection products currently being crafted by our design team.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {comingSoonProducts.map((product, index) => (
              <div 
                key={product.name} 
                className="relative group animate-fade-in" 
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-all duration-300">
                  <div className="relative">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                      <div className="bg-white/90 backdrop-blur-sm rounded-full p-3">
                        <Clock className="h-6 w-6 text-pastelpink-600" />
                      </div>
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-medium text-lg mb-2">{product.name}</h3>
                    <p className="text-gray-600 text-sm mb-3">{product.description}</p>
                    <Badge variant="outline" className="text-xs">
                      {product.category}
                    </Badge>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <p className="text-gray-500 italic">Stay tuned for these beautiful additions to our collection!</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
