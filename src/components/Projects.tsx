import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import mlImage from "@/assets/project-ml.jpg";
import analyticsImage from "@/assets/project-analytics.jpg";
import extraImage from "@/assets/project-extra.jpg";

const categoryImages = {
  ml: mlImage,
  "data-analytics": analyticsImage,
  extracurricular: extraImage,
};

const projects = [
  {
    category: "ml",
    title: "GPT-4 and TabPFN-Based ML System for Personalized Study Advice",
    description: "Developed a personalized academic recommendation system using TabPFN for grade prediction (R² of 0.953) and kNN with GPT-4 API integration for study habit suggestions. Performed EDA on 2,392 students' data.",
    tags: ["Python", "TabPFN", "GPT-4", "kNN"],
    github: "#",
    demo: "#"
  },
  {
    category: "ml",
    title: "ML Model for Alzheimer's Causing Mutations in Women",
    description: "Preprocessed 357,000+ data points and trained a Borzoi model with random forest classifier. Reduced noise by 20% through statistical analysis at Toronto Bioinformatics hackathon.",
    tags: ["Python", "Borzoi", "Random Forest", "Google Colab"],
    github: "#",
    demo: "#"
  },
  {
    category: "ml",
    title: "MLP Neural Network for Stress Detection",
    description: "Trained and tested an MLP model with hyperparameter tuning to classify stress based on EEG and ECG signals. Published in STEMFellowship Journal and presented at Microsoft Toronto.",
    tags: ["TensorFlow", "Sklearn", "Neural Networks"],
    github: "#",
    demo: "#"
  },
  {
    category: "ml",
    title: "Decision Tree Classifier for Undiagnosed Disease Treatment Prediction",
    description: "Trained and tested a decision tree classifier using data from Harvard University's Disease Network with 88% accuracy. Collaborated with a team of 3 using NumPy, Pandas, and Sklearn. Published in STEMFellowship Journal.",
    tags: ["Python", "Scikit-learn", "Decision Trees", "NumPy", "Pandas", "Research"],
    github: "#",
    demo: "#"
  },
  {
    category: "data-analytics",
    title: "Advertising Campaign Performance Analytics",
    description: "Conducted A/B hypothesis testing and regression analysis on Facebook and AdWords campaigns. Created interactive Tableau dashboard projecting 30% increase in conversions and 15% cost reduction.",
    tags: ["Python", "Tableau", "A/B Testing"],
    github: "#",
    demo: "#"
  },
  {
    category: "data-analytics",
    title: "Vendor Performance Analytics",
    description: "Conducted product analytics to identify underperforming SKUs. Developed Power BI dashboard tracking vendor KPIs, identifying $2.71M in unsold inventory and validating 74% unit cost reduction.",
    tags: ["Python", "SQL", "PowerBI"],
    github: "#",
    demo: "#"
  },
  {
    category: "data-analytics",
    title: "Community Wellness Data Visualization - GenWell",
    description: "Created Tableau dashboards visualizing social capital data of 4,000+ Toronto residents. Identified high-risk areas for social isolation and presented recommendations to GenWell CEO.",
    tags: ["Tableau", "Excel", "Data Viz"],
    github: "#",
    demo: "#"
  },
  {
    category: "extracurricular",
    title: "RL System for Speech Disfluency (Published Research)",
    description: "Collaborated with 17 students to develop a reinforcement learning model to optimize medication adjustments for minimizing speech disfluency using YouTube video data preprocessing.",
    tags: ["Research", "RL", "Python"],
    github: "#",
    demo: "#"
  },
  {
    category: "extracurricular",
    title: "EcoSpout: Water Filtration System (1st Place)",
    description: "Led market research and user research to design water filtration system. Won 1st place at UofT Engineering Competition and advanced to 2024 Ontario Engineering Competition.",
    tags: ["Product Design", "Market Research"],
    github: "#",
    demo: "#"
  },
  {
    category: "extracurricular",
    title: "SeaPU: IoT Water Monitoring System",
    description: "Conducted user research with 30+ surveys on Indonesian farmers. Built prototype using ArduinoUNO and temperature sensors with QA/QC testing in team of 6.",
    tags: ["IoT", "Arduino", "Product Design"],
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
          A showcase of my machine learning projects, data engineering internships, and research contributions
        </p>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full max-w-2xl mx-auto grid-cols-4 mb-12">
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="ml">ML/AI</TabsTrigger>
            <TabsTrigger value="data-analytics">Analytics</TabsTrigger>
            <TabsTrigger value="extracurricular">Extra</TabsTrigger>
          </TabsList>

          <TabsContent value={activeTab} className="mt-0">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProjects.map((project, index) => (
                <Card 
                  key={index}
                  className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-border bg-card overflow-hidden"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={categoryImages[project.category as keyof typeof categoryImages]} 
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card/90 to-transparent" />
                  </div>
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
