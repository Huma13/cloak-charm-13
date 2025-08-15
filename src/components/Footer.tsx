
import { Mail, User, Clock, Phone, Instagram, Info, HelpCircle, ShoppingCart, Heart } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const Footer = () => {
  const faqItems = [
    {
      question: "How discreet are the self-defense products?",
      answer: "Our products are designed to look like everyday accessories and items. They blend seamlessly with your style while providing protection when needed."
    },
    {
      question: "Are your products legal to carry?",
      answer: "Our products are designed to comply with most regulations, but we recommend checking your local laws regarding personal safety items before making a purchase."
    },
    {
      question: "Do you offer international shipping?",
      answer: "Yes, we ship worldwide. Shipping costs and delivery times vary by location."
    },
    {
      question: "What is your return policy?",
      answer: "We offer a 30-day return policy for unused items in their original packaging. Custom items are non-refundable."
    }
  ];

  return (
    <footer className="bg-gradient-to-r from-pastelblue-50 to-pastelpink-50 py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="mb-6 md:mb-0 animate-fade-in">
            <h3 className="font-serif text-xl font-bold bg-gradient-to-r from-lavender-600 to-pastelpink-600 bg-clip-text text-transparent">CloakCharm</h3>
            <p className="text-gray-500 text-sm mt-1">Protection with purpose, designed beautifully.</p>
          </div>
          
          <div className="flex gap-8 animate-fade-in" style={{animationDelay: "200ms"}}>
            <a href="#collections" className="text-gray-600 hover:text-pastelblue-600 underline-animation">Shop</a>
            <a href="#about" className="text-gray-600 hover:text-pastelpink-600 underline-animation">About</a>
            <a href="#faq" className="text-gray-600 hover:text-pastelgreen-600 underline-animation">FAQ</a>
            <a href="#contact" className="text-gray-600 hover:text-lavender-600 underline-animation">Contact</a>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div id="about" className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex items-center mb-4">
              <Info className="text-pastelpink-600 mr-2" />
              <h3 className="font-semibold text-xl">About CloakCharm</h3>
            </div>
            <p className="text-gray-600 mb-4">
              Founded in 2025, CloakCharm was born from a simple idea: safety shouldn't compromise style. We believe everyone deserves to feel confident and protected while expressing their personal aesthetic.
            </p>
            <p className="text-gray-600">
              Our team of designers and safety experts collaborate to create beautiful yet functional self-defense accessories that seamlessly blend into everyday life.
            </p>
          </div>
          
          <div id="faq" className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex items-center mb-4">
              <HelpCircle className="text-pastelblue-600 mr-2" />
              <h3 className="font-semibold text-xl">Frequently Asked Questions</h3>
            </div>
            <Accordion type="single" collapsible className="w-full">
              {faqItems.map((item, i) => (
                <AccordionItem key={i} value={`item-${i}`}>
                  <AccordionTrigger className="text-left">{item.question}</AccordionTrigger>
                  <AccordionContent>{item.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
          <h3 className="font-semibold text-xl mb-4 text-center">Our Collaborations</h3>
          <div className="text-center p-4 bg-gradient-to-r from-lavender-100 to-pastelpink-100 rounded-lg">
            <p className="text-lg font-semibold text-gray-700 mb-2">Coming Soon</p>
            <p className="text-gray-600">We're working on exciting collaborations with leading brands and safety advocates.</p>
            <p className="text-gray-600 mt-2">Join our mailing list to be the first to know when they launch!</p>
          </div>
        </div>
        
        <Separator className="my-8" />
        
        <div id="contact" className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8 animate-fade-in" style={{animationDelay: "400ms"}}>
          <div className="text-center">
            <div className="bg-lavender-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
              <User className="text-lavender-600" />
            </div>
            <h4 className="font-medium text-gray-700 mb-1">Contact Person</h4>
            <p className="text-gray-500">Huma</p>
          </div>

          <div className="text-center">
            <div className="flex flex-col items-center gap-4">
              <div>
                <div className="bg-pastelpink-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Mail className="text-pastelpink-600" />
                </div>
                <h4 className="font-medium text-gray-700 mb-1">Email</h4>
                <a href="mailto:13.huma.2102@gmail.com" className="text-gray-500 hover:text-pastelpink-600 transition-colors block">
                  13.huma.2102@gmail.com
                </a>
              </div>
              
              <div>
                <div className="bg-pastelpink-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Phone className="text-pastelpink-600" />
                </div>
                <h4 className="font-medium text-gray-700 mb-1">Phone</h4>
                <a href="tel:+917259389997" className="text-gray-500 hover:text-pastelpink-600 transition-colors">
                  +91 7259389997
                </a>
              </div>
            </div>
          </div>
          
          <div className="text-center">
            <div className="flex flex-col items-center gap-4">
              <div>
                <div className="bg-pastelgreen-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Clock className="text-pastelgreen-600" />
                </div>
                <h4 className="font-medium text-gray-700 mb-1">Hours</h4>
                <p className="text-gray-500 mb-1">10 AM to 5 PM (IST)</p>
              </div>
              
              <div>
                <div className="bg-pastelgreen-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Instagram className="text-pastelgreen-600" />
                </div>
                <h4 className="font-medium text-gray-700 mb-1">Social</h4>
                <a 
                  href="https://instagram.com/Cloak_Charm" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center justify-center gap-1 text-gray-500 hover:text-pastelpink-600 transition-colors"
                >
                  <Instagram size={16} />
                  @Cloak_Charm
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center text-gray-500 text-sm animate-fade-in" style={{animationDelay: "600ms"}}>
          <p>© {new Date().getFullYear()} CloakCharm. All rights reserved.</p>
          <p className="mt-2">All products are designed for self-defense purposes only.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
