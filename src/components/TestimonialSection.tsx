
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

interface TestimonialProps {
  quote: string;
  rating: number;
  bgColor: string;
  textColor: string;
}

const StarRating = ({ rating }: { rating: number }) => {
  return (
    <div className="flex">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          size={16}
          className={`${
            i < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
          }`}
        />
      ))}
    </div>
  );
};

const TestimonialCard = ({ quote, rating, bgColor, textColor }: TestimonialProps) => {
  return (
    <Card className={`shadow-sm hover:shadow-md transition-shadow ${bgColor}`}>
      <CardContent className="p-6">
        <StarRating rating={rating} />
        <p className={`my-4 ${textColor}`}>{quote}</p>
        <div className="flex items-center mt-6">
          <p className="font-medium text-sm italic">― Anonymous Customer</p>
        </div>
      </CardContent>
    </Card>
  );
};

const TestimonialSection = () => {
  const testimonials: TestimonialProps[] = [
    {
      quote: "The sleek design of my safety kit makes it easy to carry while still looking stylish. I feel more confident knowing I'm protected.",
      rating: 5,
      bgColor: "bg-gradient-to-br from-pastelpink-100 to-lavender-50",
      textColor: "text-pastelpink-700"
    },
    {
      quote: "These kits blend into my everyday accessories perfectly. No one would guess they're designed for protection.",
      rating: 4,
      bgColor: "bg-gradient-to-br from-pastelblue-100 to-pastelgreen-50",
      textColor: "text-pastelblue-700"
    },
    {
      quote: "As a college student walking around campus late at night, my kit gives me peace of mind while still matching my aesthetic.",
      rating: 5,
      bgColor: "bg-gradient-to-br from-pastelyellow-100 to-pastelpink-50",
      textColor: "text-pastelyellow-700"
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-r from-lavender-100 to-pastelpink-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-pastelblue-600 to-pastelpink-600 bg-clip-text text-transparent">
            What Our Customers Say
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Real experiences from people who prioritize both personal safety and aesthetic expression.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-fade-in">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
