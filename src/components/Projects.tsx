import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    category: "ml",
    title: "Predictive Analytics Model",
    description: "Built an ensemble machine learning model achieving 94% accuracy in predicting customer churn using XGBoost and Random Forest.",
    tags: ["Python", "scikit-learn", "XGBoost"],
    github: "#",
    demo: "#"
  },
  {
    category: "ml",
    title: "Computer Vision System",
    description: "Developed a real-time object detection system using YOLO and TensorFlow for autonomous vehicle applications.",
    tags: ["TensorFlow", "OpenCV", "YOLO"],
    github: "#",
    demo: "#"
  },
  {
    category: "internship",
    title: "Data Pipeline Architecture",
    description: "Designed and implemented scalable ETL pipelines processing 10M+ daily records using Apache Spark and AWS.",
    tags: ["Apache Spark", "AWS", "Python"],
    github: "#",
    demo: "#"
  },
  {
    category: "internship",
    title: "NLP Sentiment Analysis",
    description: "Created a sentiment analysis tool for social media data using BERT transformers, deployed on cloud infrastructure.",
    tags: ["BERT", "NLP", "Docker"],
    github: "#",
    demo: "#"
  },
  {
    category: "extracurricular",
    title: "Academic Research Project",
    description: "Published research on novel deep learning architectures for time-series forecasting in financial markets.",
    tags: ["Research", "PyTorch", "Time-series"],
    github: "#",
    demo: "#"
  },
  {
    category: "extracurricular",
    title: "Open Source Contribution",
    description: "Active contributor to pandas and scikit-learn, focusing on optimization and new feature development.",
    tags: ["Open Source", "Python", "pandas"],
    github: "#",
    demo: "#"
  }
];

const Projects = () => {
  const [activeTab, setActiveTab] = useState("all");

  const filteredProjects = activeTab === "all" 
    ? projects 
    : projects.filter(p => p.category === activeTab);

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-4 text-foreground">Projects & Work</h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          A showcase of my data science projects, internship work, and extracurricular contributions
        </p>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-4 mb-12">
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="ml">ML/DS</TabsTrigger>
            <TabsTrigger value="internship">Internships</TabsTrigger>
            <TabsTrigger value="extracurricular">Extra</TabsTrigger>
          </TabsList>

          <TabsContent value={activeTab} className="mt-0">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProjects.map((project, index) => (
                <Card 
                  key={index}
                  className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-border bg-card"
                >
                  <CardHeader>
                    <CardTitle className="text-card-foreground group-hover:text-primary transition-colors">
                      {project.title}
                    </CardTitle>
                    <CardDescription className="text-muted-foreground">
                      {project.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag, i) => (
                        <Badge key={i} variant="secondary">{tag}</Badge>
                      ))}
                    </div>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm" className="flex-1" asChild>
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <Github className="w-4 h-4 mr-2" />
                          Code
                        </a>
                      </Button>
                      <Button variant="default" size="sm" className="flex-1" asChild>
                        <a href={project.demo} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-4 h-4 mr-2" />
                          View
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default Projects;
