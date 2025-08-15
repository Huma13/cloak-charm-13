
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Heart, Sparkles, ShoppingCart } from "lucide-react";
import { useState } from "react";
import { useShopping, Product as ProductType } from "@/contexts/ShoppingContext";

interface ProductCardProps {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  isNew?: boolean;
  isBestseller?: boolean;
  isPremium?: boolean;
}

const ProductCard = ({
  id,
  name,
  description,
  price,
  image,
  category,
  isNew = false,
  isBestseller = false,
  isPremium = false,
}: ProductCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const { addToCart, toggleFavorite, isInFavorites } = useShopping();
  const liked = isInFavorites(id);

  // Get pastel color based on category
  const getCategoryColor = (category: string) => {
    const categories = {
      "Personal Protection": "pastelpink",
      "Wearable Protection": "pastelblue",
      "Everyday Carry": "pastelgreen",
      "default": "pastelyellow"
    };
    
    return categories[category as keyof typeof categories] || categories.default;
  };
  
  const categoryColor = getCategoryColor(category);

  const handleAddToCart = () => {
    const product: ProductType = {
      id,
      name,
      description,
      price,
      image,
      category,
      isNew,
      isBestseller,
      isPremium
    };
    addToCart(product);
  };

  const handleToggleFavorite = () => {
    const product: ProductType = {
      id,
      name,
      description,
      price,
      image,
      category,
      isNew,
      isBestseller,
      isPremium
    };
    toggleFavorite(product);
  };

  return (
    <Card 
      className="overflow-hidden hover-scale group card-hover"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative h-64 overflow-hidden">
        <img
          src={image}
          alt={name}
          className={`w-full h-full object-cover object-center transition-transform duration-700 ${isHovered ? "scale-110" : ""}`}
        />
        <div className="absolute top-3 left-3 flex flex-col gap-2">
          {isNew && (
            <Badge className={`bg-${categoryColor}-400 animate-pulse`}>
              New
            </Badge>
          )}
          {isBestseller && (
            <Badge className="bg-softpink-500 animate-pulse">
              Bestseller
            </Badge>
          )}
          {isPremium && (
            <Badge className="bg-gradient-to-r from-lavender-400 to-softpink-400 text-white animate-pulse flex items-center gap-1 border-none">
              <Sparkles size={14} className="animate-spin-slow" />
              <span>Premium</span>
            </Badge>
          )}
        </div>
        <button
          onClick={handleToggleFavorite}
          className={`absolute top-3 right-3 p-2 bg-white/80 rounded-full hover:bg-white transition-colors transform ${liked ? 'scale-110' : 'scale-100'} transition-transform duration-300`}
        >
          <Heart
            className={`${liked ? "text-softpink-500 fill-softpink-500" : "text-gray-400"} transition-colors duration-300`}
            size={18}
          />
        </button>
      </div>
      <CardHeader className={`py-4 bg-${categoryColor}-50`}>
        <div className="flex justify-between items-start">
          <div>
            <p className={`text-sm text-${categoryColor}-700 mb-1`}>{category}</p>
            <h3 className="font-medium text-lg">{name}</h3>
          </div>
          <p className="font-semibold">${price.toFixed(2)}</p>
        </div>
      </CardHeader>
      <CardContent className="py-0">
        <p className="text-gray-600 text-sm line-clamp-2">{description}</p>
      </CardContent>
      <CardFooter className="pt-4 pb-5">
        {isPremium ? (
          <Button className={`w-full bg-gradient-to-r from-lavender-400 to-softpink-400 hover:from-lavender-500 hover:to-softpink-500 text-white button-pop shadow-sm hover:shadow-md transition-all duration-300`}>
            Customize & Buy
          </Button>
        ) : (
          <Button 
            onClick={handleAddToCart}
            className={`w-full bg-${categoryColor}-400 hover:bg-${categoryColor}-500 button-pop shadow-sm hover:shadow-md transition-all duration-300 flex items-center justify-center gap-2`}
          >
            <ShoppingCart size={16} />
            <span>Add to Cart</span>
          </Button>
        )}
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
