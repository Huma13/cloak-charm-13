
import { Badge } from "@/components/ui/badge";

const CompanyIntro = () => {
  return (
    <section id="about" className="bg-gradient-to-r from-pastelblue-100 via-pastelpink-100 to-pastelyellow-100 py-16 text-center animate-fade-in">
      <div className="container mx-auto px-4">
        <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4 animate-scale-in">
          <span className="bg-gradient-to-r from-pastelblue-500 via-pastelpink-500 via-pastelyellow-500 via-pastelgreen-500 to-lavender-500 bg-clip-text text-transparent animate-pulse">
            CloakCharm
          </span>
        </h1>
        <p className="text-xl text-gray-700 max-w-2xl mx-auto mb-6">
          Redefining personal safety with elegance and discretion
        </p>
        <div className="flex flex-wrap justify-center gap-2">
          <Badge variant="outline" className="mb-4 border-pastelgreen-400 text-pastelgreen-700 px-4 py-1 bg-pastelgreen-50">
            Innovative Self-Defense
          </Badge>
          <Badge variant="outline" className="mb-4 border-pastelpink-400 text-pastelpink-700 px-4 py-1 bg-pastelpink-50">
            Stylish Protection
          </Badge>
          <Badge variant="outline" className="mb-4 border-pastelblue-400 text-pastelblue-700 px-4 py-1 bg-pastelblue-50">
            Designer Safety
          </Badge>
        </div>
      </div>
    </section>
  );
};

export default CompanyIntro;
