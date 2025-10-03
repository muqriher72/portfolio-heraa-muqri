import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Coursework from "@/components/Coursework";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Skills />
      <Experience />
      <Projects />
      <Coursework />
      <Contact />
      
      {/* Footer */}
      <footer className="py-8 bg-secondary text-secondary-foreground">
        <div className="container mx-auto px-6 text-center">
          <p className="text-sm">
            © {new Date().getFullYear()} Heraa Muqri. Engineering Science @ University of Toronto.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
