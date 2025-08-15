
import { useState } from "react";
import { useShopping } from "@/contexts/ShoppingContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Minus, Plus, Tag, CreditCard } from "lucide-react";
import { toast } from "@/components/ui/sonner";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cart, removeFromCart, updateQuantity, getCartTotal, applyCoupon, discount, couponCode } = useShopping();
  const [couponInput, setCouponInput] = useState("");

  const handleCouponSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    applyCoupon(couponInput);
    setCouponInput("");
  };

  const handleQuantityChange = (itemId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(itemId);
    } else {
      updateQuantity(itemId, quantity);
    }
  };

  const handleCheckout = () => {
    toast.success("Checkout functionality coming soon!");
  };

  return (
    <div className="container mx-auto px-4 py-16 md:py-24">
      <h1 className="font-serif text-3xl md:text-4xl font-bold mb-8 text-center">Your Shopping Cart</h1>
      
      {cart.length === 0 ? (
        <div className="text-center py-16">
          <div className="mb-4 inline-flex items-center justify-center p-3 bg-pastelblue-100 rounded-full">
            <ShoppingCart className="h-8 w-8 text-pastelblue-500" />
          </div>
          <h2 className="text-xl font-medium mb-2">Your cart is empty</h2>
          <p className="text-gray-500 mb-6">Add some protection kits to your cart to get started.</p>
          <Link to="/">
            <Button className="bg-pastelpink-400 hover:bg-pastelpink-500">Shop Collection</Button>
          </Link>
        </div>
      ) : (
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Cart Items */}
          <div className="lg:w-2/3">
            <div className="bg-white rounded-lg shadow-sm p-6 mb-4">
              <h2 className="text-xl font-semibold mb-4">Cart Items ({cart.length})</h2>
              
              {cart.map(item => (
                <div key={item.id} className="flex flex-col sm:flex-row items-start sm:items-center py-4 border-b border-gray-100">
                  <div className="w-20 h-20 rounded overflow-hidden flex-shrink-0 mb-3 sm:mb-0">
                    <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                  </div>
                  
                  <div className="flex-grow px-4">
                    <h3 className="font-medium">{item.name}</h3>
                    <p className="text-sm text-gray-600 mb-2">{item.category}</p>
                    <p className="font-semibold">${item.price.toFixed(2)}</p>
                  </div>
                  
                  <div className="flex items-center gap-2 mt-3 sm:mt-0">
                    <Button 
                      variant="outline" 
                      size="icon" 
                      className="h-8 w-8 rounded-full p-0"
                      onClick={() => handleQuantityChange(item.id, (item.quantity || 1) - 1)}
                    >
                      <Minus size={14} />
                    </Button>
                    
                    <span className="w-8 text-center">{item.quantity || 1}</span>
                    
                    <Button 
                      variant="outline" 
                      size="icon" 
                      className="h-8 w-8 rounded-full p-0"
                      onClick={() => handleQuantityChange(item.id, (item.quantity || 1) + 1)}
                    >
                      <Plus size={14} />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Order Summary */}
          <div className="lg:w-1/3">
            <div className="bg-white rounded-lg shadow-sm p-6 sticky top-6">
              <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
              
              <div className="space-y-3 mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-600">Subtotal</span>
                  <span>${cart.reduce((sum, item) => sum + item.price * (item.quantity || 1), 0).toFixed(2)}</span>
                </div>
                
                {discount > 0 && (
                  <div className="flex justify-between text-green-600">
                    <span>Discount ({couponCode})</span>
                    <span>-${(cart.reduce((sum, item) => sum + item.price * (item.quantity || 1), 0) * (discount / 100)).toFixed(2)}</span>
                  </div>
                )}
                
                <div className="border-t pt-3 font-semibold flex justify-between">
                  <span>Total</span>
                  <span>${getCartTotal().toFixed(2)}</span>
                </div>
              </div>
              
              {/* Coupon Code */}
              <form onSubmit={handleCouponSubmit} className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">Promo Code</label>
                <div className="flex gap-2">
                  <div className="relative flex-grow">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Tag size={16} className="text-gray-400" />
                    </div>
                    <Input 
                      type="text" 
                      placeholder="Enter code" 
                      className="pl-10" 
                      value={couponInput}
                      onChange={(e) => setCouponInput(e.target.value)}
                    />
                  </div>
                  <Button type="submit">Apply</Button>
                </div>
                <div className="mt-2 text-xs text-gray-500">
                  Try these codes: WELCOME10, SAFETY20, PREMIUM25
                </div>
              </form>
              
              <Button 
                onClick={handleCheckout}
                className="w-full bg-gradient-to-r from-pastelblue-400 to-pastelpink-400 hover:from-pastelblue-500 hover:to-pastelpink-500 text-white"
              >
                <CreditCard size={18} className="mr-2" />
                Proceed to Checkout
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

// For use in the component
const ShoppingCart = ({ className }: { className?: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="24" 
    height="24" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <circle cx="8" cy="21" r="1"/>
    <circle cx="19" cy="21" r="1"/>
    <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/>
  </svg>
);

export default Cart;
