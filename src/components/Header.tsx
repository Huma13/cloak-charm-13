
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Heart, ShoppingCart, Menu, X } from "lucide-react";
import { useShopping } from "@/contexts/ShoppingContext";

const Header = () => {
  const { cart, favorites } = useShopping();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  
  // Hide header on home page when at the top
  const isHome = location.pathname === "/";
  const shouldShowHeader = !isHome || isScrolled;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    setIsMenuOpen(false);
    
    if (location.pathname !== "/") {
      window.location.href = `/#${sectionId}`;
      return;
    }
    
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        shouldShowHeader
          ? "bg-white shadow-sm py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="font-serif text-xl font-bold">
          <span className="bg-gradient-to-r from-pastelblue-400 to-pastelpink-400 bg-clip-text text-transparent">
            CloakCharm
          </span>
          <span className="text-xs italic ml-1 text-gray-500">by Huma</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <Link
            to="/"
            className="text-gray-700 hover:text-pastelpink-500 transition-colors"
          >
            Home
          </Link>
          <button
            onClick={() => scrollToSection('collections')}
            className="text-gray-700 hover:text-pastelpink-500 transition-colors text-left"
          >
            Collection
          </button>
          <button
            onClick={() => scrollToSection('premium-features')}
            className="text-gray-700 hover:text-pastelpink-500 transition-colors text-left"
          >
            Premium
          </button>
          <button
            onClick={() => scrollToSection('about')}
            className="text-gray-700 hover:text-pastelpink-500 transition-colors text-left"
          >
            About
          </button>
        </nav>

        {/* Action Buttons */}
        <div className="flex items-center gap-3">
          <Link to="/favorites" className="relative p-2 hover:bg-gray-100 rounded-full">
            <Heart className="h-5 w-5 text-pastelpink-500" />
            {favorites.length > 0 && (
              <span className="absolute -top-1 -right-1 bg-pastelpink-500 text-white w-5 h-5 flex items-center justify-center text-xs rounded-full">
                {favorites.length}
              </span>
            )}
          </Link>
          <Link to="/cart" className="relative p-2 hover:bg-gray-100 rounded-full">
            <ShoppingCart className="h-5 w-5 text-pastelblue-500" />
            {cart.length > 0 && (
              <span className="absolute -top-1 -right-1 bg-pastelblue-500 text-white w-5 h-5 flex items-center justify-center text-xs rounded-full">
                {cart.reduce((sum, item) => sum + (item.quantity || 1), 0)}
              </span>
            )}
          </Link>

          {/* Mobile Menu Button */}
          <button
            className="p-2 md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-gray-700" />
            ) : (
              <Menu className="h-6 w-6 text-gray-700" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t py-4 px-4 absolute top-full left-0 right-0 shadow-md">
          <nav className="flex flex-col gap-4">
            <Link
              to="/"
              className="text-gray-700 hover:text-pastelpink-500 transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <button
              onClick={() => scrollToSection('collections')}
              className="text-gray-700 hover:text-pastelpink-500 transition-colors py-2 text-left"
            >
              Collection
            </button>
            <button
              onClick={() => scrollToSection('premium-features')}
              className="text-gray-700 hover:text-pastelpink-500 transition-colors py-2 text-left"
            >
              Premium
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="text-gray-700 hover:text-pastelpink-500 transition-colors py-2 text-left"
            >
              About
            </button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
