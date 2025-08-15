
import React, { createContext, useState, useContext } from "react";
import { toast } from "@/components/ui/sonner";

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  isNew?: boolean;
  isBestseller?: boolean;
  isPremium?: boolean;
  quantity?: number;
}

interface ShoppingContextType {
  cart: Product[];
  favorites: Product[];
  addToCart: (product: Product) => void;
  removeFromCart: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  toggleFavorite: (product: Product) => void;
  isInFavorites: (productId: string) => boolean;
  getCartTotal: () => number;
  applyCoupon: (code: string) => boolean;
  discount: number;
  couponCode: string | null;
  clearCart: () => void;
}

const ShoppingContext = createContext<ShoppingContextType | undefined>(undefined);

export const ShoppingProvider = ({ children }: { children: React.ReactNode }) => {
  const [cart, setCart] = useState<Product[]>([]);
  const [favorites, setFavorites] = useState<Product[]>([]);
  const [discount, setDiscount] = useState(0);
  const [couponCode, setCouponCode] = useState<string | null>(null);

  // Available coupon codes and their discount percentages
  const availableCoupons: Record<string, number> = {
    "WELCOME10": 10,
    "SAFETY20": 20,
    "PREMIUM25": 25,
    "GLOWUP30": 30
  };

  const addToCart = (product: Product) => {
    setCart(prevCart => {
      const existingProduct = prevCart.find(item => item.id === product.id);
      
      if (existingProduct) {
        return prevCart.map(item => 
          item.id === product.id 
            ? { ...item, quantity: (item.quantity || 1) + 1 }
            : item
        );
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
    
    toast(`${product.name} added to cart`);
  };

  const removeFromCart = (productId: string) => {
    setCart(prevCart => prevCart.filter(item => item.id !== productId));
  };

  const updateQuantity = (productId: string, quantity: number) => {
    if (quantity < 1) return;
    
    setCart(prevCart => 
      prevCart.map(item => 
        item.id === productId ? { ...item, quantity } : item
      )
    );
  };

  const toggleFavorite = (product: Product) => {
    setFavorites(prevFavorites => {
      const isAlreadyFavorite = prevFavorites.some(item => item.id === product.id);
      
      if (isAlreadyFavorite) {
        toast(`${product.name} removed from favorites`);
        return prevFavorites.filter(item => item.id !== product.id);
      } else {
        toast(`${product.name} added to favorites`);
        return [...prevFavorites, product];
      }
    });
  };

  const isInFavorites = (productId: string) => {
    return favorites.some(item => item.id === productId);
  };

  const getCartTotal = () => {
    const subtotal = cart.reduce((total, item) => {
      return total + item.price * (item.quantity || 1);
    }, 0);
    
    // Apply discount if applicable
    if (discount > 0) {
      return subtotal * (1 - (discount / 100));
    }
    
    return subtotal;
  };

  const applyCoupon = (code: string) => {
    const upperCaseCode = code.toUpperCase();
    
    if (availableCoupons[upperCaseCode]) {
      setDiscount(availableCoupons[upperCaseCode]);
      setCouponCode(upperCaseCode);
      toast.success(`Coupon ${upperCaseCode} applied - ${availableCoupons[upperCaseCode]}% off!`);
      return true;
    } else {
      toast.error("Invalid coupon code");
      return false;
    }
  };

  const clearCart = () => {
    setCart([]);
    setDiscount(0);
    setCouponCode(null);
  };

  const value = {
    cart,
    favorites,
    addToCart,
    removeFromCart,
    updateQuantity,
    toggleFavorite,
    isInFavorites,
    getCartTotal,
    applyCoupon,
    discount,
    couponCode,
    clearCart
  };

  return (
    <ShoppingContext.Provider value={value}>
      {children}
    </ShoppingContext.Provider>
  );
};

export const useShopping = () => {
  const context = useContext(ShoppingContext);
  if (context === undefined) {
    throw new Error("useShopping must be used within a ShoppingProvider");
  }
  return context;
};
