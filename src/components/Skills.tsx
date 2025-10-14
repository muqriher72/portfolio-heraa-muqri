import { Brain, Code, Database, LineChart } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const skills = [
  {
    icon: Brain,
    title: "Machine Learning",
    description: "PyTorch, TensorFlow, Keras, TabPFN, Neural Networks, Reinforcement Learning"
  },
  {
    icon: LineChart,
    title: "Data Analysis",
    description: "Python, R, Pandas, NumPy, A/B Testing, Statistical Modeling, EDA"
  },
  {
    icon: Code,
    title: "Tools & Platforms",
    description: "PowerBI, Tableau, Docker, Streamlit, Git, Jupyter, Google Colab"
  },
  {
    icon: Database,
    title: "Data Engineering",
    description: "SQL, REST APIs, LLM Integration, OCR, Web Scraping, ETL Pipelines"
  }
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-4 text-foreground">Expertise</h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Specialized in building intelligent systems and extracting meaningful insights from complex datasets
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-border bg-card"
            >
              <CardContent className="p-6 text-center">
                <div className="mb-4 inline-block p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                  <skill.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-card-foreground">{skill.title}</h3>
                <p className="text-muted-foreground text-sm">{skill.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
