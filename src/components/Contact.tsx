import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Github, Linkedin, Mail, FileText } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4 text-foreground">Get in Touch</h2>
          <p className="text-center text-muted-foreground mb-12">
            Open to internship opportunities, research collaborations, and data science projects!
          </p>

          <Card className="border-border bg-card">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-6">
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="h-auto py-6 flex-col gap-2 hover:bg-primary hover:text-primary-foreground transition-all"
                  asChild
                >
                  <a href="mailto:heraa.muqri@mail.utoronto.ca">
                    <Mail className="w-6 h-6" />
                    <span className="text-lg font-semibold">Email</span>
                    <span className="text-sm text-muted-foreground">heraa.muqri@mail.utoronto.ca</span>
                  </a>
                </Button>

                <Button 
                  variant="outline" 
                  size="lg" 
                  className="h-auto py-6 flex-col gap-2 hover:bg-primary hover:text-primary-foreground transition-all"
                  asChild
                >
                  <a href="tel:905-462-8303">
                    <Mail className="w-6 h-6" />
                    <span className="text-lg font-semibold">Phone</span>
                    <span className="text-sm text-muted-foreground">905-462-8303</span>
                  </a>
                </Button>

                <Button 
                  variant="outline" 
                  size="lg" 
                  className="h-auto py-6 flex-col gap-2 hover:bg-primary hover:text-primary-foreground transition-all"
                  asChild
                >
                  <a href="https://linkedin.com/in/heraa-muqri" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="w-6 h-6" />
                    <span className="text-lg font-semibold">LinkedIn</span>
                    <span className="text-sm text-muted-foreground">Connect with me</span>
                  </a>
                </Button>

                <Button 
                  variant="outline" 
                  size="lg" 
                  className="h-auto py-6 flex-col gap-2 hover:bg-primary hover:text-primary-foreground transition-all"
                  asChild
                >
                  <a href="https://github.com/heraa-muqri" target="_blank" rel="noopener noreferrer">
                    <Github className="w-6 h-6" />
                    <span className="text-lg font-semibold">GitHub</span>
                    <span className="text-sm text-muted-foreground">View my code</span>
                  </a>
                </Button>

                <Button 
                  variant="outline" 
                  size="lg" 
                  className="h-auto py-6 flex-col gap-2 hover:bg-primary hover:text-primary-foreground transition-all col-span-2"
                  asChild
                >
                  <a href="/Heraa_Muqri_Resume.pdf" target="_blank" rel="noopener noreferrer">
                    <FileText className="w-6 h-6" />
                    <span className="text-lg font-semibold">Resume</span>
                    <span className="text-sm text-muted-foreground">Download PDF</span>
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
