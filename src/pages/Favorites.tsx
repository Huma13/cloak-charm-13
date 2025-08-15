
import { useShopping } from "@/contexts/ShoppingContext";
import { Button } from "@/components/ui/button";
import { Heart, ShoppingCart } from "lucide-react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Link } from "react-router-dom";

const Favorites = () => {
  const { favorites, addToCart, toggleFavorite } = useShopping();

  return (
    <div className="container mx-auto px-4 py-16 md:py-24">
      <h1 className="font-serif text-3xl md:text-4xl font-bold mb-8 text-center">Your Favorites</h1>
      
      {favorites.length === 0 ? (
        <div className="text-center py-16">
          <div className="mb-4 inline-flex items-center justify-center p-3 bg-pastelpink-100 rounded-full">
            <Heart className="h-8 w-8 text-pastelpink-500" />
          </div>
          <h2 className="text-xl font-medium mb-2">No favorites yet</h2>
          <p className="text-gray-500 mb-6">Heart the items you like to save them for later.</p>
          <Link to="/">
            <Button className="bg-pastelpink-400 hover:bg-pastelpink-500">Browse Products</Button>
          </Link>
        </div>
      ) : (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {favorites.map(item => (
              <Card key={item.id} className="overflow-hidden">
                <div className="relative h-48">
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    className="w-full h-full object-cover" 
                  />
                  <button
                    onClick={() => toggleFavorite(item)}
                    className="absolute top-3 right-3 p-2 bg-white/80 rounded-full hover:bg-white transition-colors"
                  >
                    <Heart
                      className="text-softpink-500 fill-softpink-500"
                      size={18}
                    />
                  </button>
                </div>
                
                <CardContent className="p-4">
                  <h3 className="font-medium">{item.name}</h3>
                  <p className="text-sm text-gray-600 mb-2">{item.category}</p>
                  <p className="font-semibold">${item.price.toFixed(2)}</p>
                </CardContent>
                
                <CardFooter className="p-4 pt-0">
                  <Button 
                    onClick={() => addToCart(item)}
                    className="w-full bg-pastelblue-400 hover:bg-pastelblue-500"
                  >
                    <ShoppingCart size={16} className="mr-2" />
                    Add to Cart
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Favorites;
