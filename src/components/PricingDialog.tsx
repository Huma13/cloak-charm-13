
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, Crown, Sparkles } from "lucide-react";
import { toast } from "@/components/ui/use-toast";

interface PricingOption {
  name: string;
  price: string;
  features: string[];
  highlighted?: boolean;
}

const pricingOptions: PricingOption[] = [
  {
    name: "Basic Premium",
    price: "₹999/year",
    features: [
      "Custom color selection",
      "Basic engraving options",
      "Standard shipping",
      "Email support"
    ]
  },
  {
    name: "Pro Premium",
    price: "₹1,999/year",
    highlighted: true,
    features: [
      "All Basic Premium features",
      "Advanced customization",
      "Priority shipping",
      "24/7 support",
      "Exclusive events access"
    ]
  },
  {
    name: "Elite Premium",
    price: "₹2,999/year",
    features: [
      "All Pro Premium features",
      "Unlimited customization",
      "Express shipping",
      "Dedicated support agent",
      "VIP events access",
      "Early access to new products"
    ]
  }
];

export function PricingDialog() {
  const handlePurchase = (plan: string) => {
    toast({
      title: "Premium Subscription",
      description: `Thank you for your interest in our ${plan} plan! We'll notify you when premium subscriptions become available.`,
      duration: 5000,
    });
  };

  return (
    <DialogContent className="max-w-4xl">
      <DialogHeader>
        <DialogTitle className="text-2xl font-serif text-center mb-4">
          <span className="bg-gradient-to-r from-lavender-500 to-pastelpink-500 bg-clip-text text-transparent">
            Premium Membership Plans
          </span>
        </DialogTitle>
      </DialogHeader>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-4">
        {pricingOptions.map((option) => (
          <div
            key={option.name}
            className={`rounded-lg p-6 space-y-4 transition-all ${
              option.highlighted
                ? "border-2 border-lavender-400 shadow-lg scale-105"
                : "border border-gray-200"
            }`}
          >
            <div className="text-center">
              <h3 className="text-lg font-medium mb-2 flex items-center justify-center gap-2">
                {option.name}
                {option.highlighted && <Crown className="h-5 w-5 text-lavender-500" />}
              </h3>
              <div className="text-2xl font-bold text-pastelblue-600 mb-4">
                {option.price}
              </div>
            </div>
            <ul className="space-y-3">
              {option.features.map((feature) => (
                <li key={feature} className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-pastelgreen-500 shrink-0" />
                  <span className="text-gray-600 text-sm">{feature}</span>
                </li>
              ))}
            </ul>
            <Button
              onClick={() => handlePurchase(option.name)}
              className={`w-full mt-6 ${
                option.highlighted
                  ? "bg-gradient-to-r from-lavender-400 to-softpink-400 hover:from-lavender-500 hover:to-softpink-500"
                  : ""
              }`}
            >
              Choose Plan
              <Sparkles className="ml-2 h-4 w-4" />
            </Button>
          </div>
        ))}
      </div>
    </DialogContent>
  );
}
