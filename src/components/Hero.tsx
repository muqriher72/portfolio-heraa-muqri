import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";

const Hero = () => {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-secondary/85 to-primary/90" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <h1 className="text-5xl md:text-7xl font-bold text-primary-foreground mb-6 animate-fade-in">
          Heraa Muqri
        </h1>
        <p className="text-xl md:text-2xl text-primary-foreground/90 mb-4 max-w-3xl mx-auto">
          Engineering Science Student @ University of Toronto
        </p>
        <p className="text-lg md:text-xl text-primary-foreground/80 mb-8 max-w-3xl mx-auto">
          Machine Intelligence Major | Data Engineer | Building LLM-powered solutions and intelligent systems
        </p>
        <div className="flex gap-4 justify-center flex-wrap max-w-4xl mx-auto">
          <Button 
            size="lg" 
            variant="outline"
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            className="text-lg px-8 bg-white/10 border-white/30 text-white hover:bg-white/20 transition-all hover:scale-105"
          >
            Projects
          </Button>
          <Button 
            size="lg" 
            variant="outline"
            onClick={() => document.getElementById('coursework')?.scrollIntoView({ behavior: 'smooth' })}
            className="text-lg px-8 bg-white/10 border-white/30 text-white hover:bg-white/20 transition-all hover:scale-105"
          >
            Coursework
          </Button>
          <Button 
            size="lg" 
            variant="outline"
            onClick={() => document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' })}
            className="text-lg px-8 bg-white/10 border-white/30 text-white hover:bg-white/20 transition-all hover:scale-105"
          >
            Skills
          </Button>
          <Button 
            size="lg" 
            variant="outline"
            onClick={() => document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' })}
            className="text-lg px-8 bg-white/10 border-white/30 text-white hover:bg-white/20 transition-all hover:scale-105"
          >
            Experience
          </Button>
          <Button 
            size="lg" 
            variant="outline"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="text-lg px-8 bg-white/10 border-white/30 text-white hover:bg-white/20 transition-all hover:scale-105"
          >
            Get in Touch
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <ArrowDown className="w-6 h-6 text-primary-foreground/70" />
      </div>
    </section>
  );
};

export default Hero;
