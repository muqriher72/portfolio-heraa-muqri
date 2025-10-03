import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, Brain, Database, Code } from "lucide-react";

const courses = [
  {
    category: "Machine Learning & AI",
    icon: Brain,
    courses: [
      "Machine Learning & Data Mining",
      "Artificial Intelligence Fundamentals",
      "Deep Learning & Neural Networks"
    ]
  },
  {
    category: "Mathematics & Statistics",
    icon: BookOpen,
    courses: [
      "Probability & Statistics",
      "Linear Algebra",
      "Multivariable Calculus",
      "Differential Equations"
    ]
  },
  {
    category: "Computer Science",
    icon: Code,
    courses: [
      "Algorithms & Data Structures",
      "Object-Oriented Programming",
      "Software Engineering Principles"
    ]
  },
  {
    category: "Data Science",
    icon: Database,
    courses: [
      "Data Analytics & Visualization",
      "Database Systems",
      "Big Data Processing"
    ]
  }
];

const Coursework = () => {
  return (
    <section id="coursework" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-4 text-foreground">Relevant Coursework</h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Key courses that built my foundation in machine learning, data science, and software engineering
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {courses.map((category, index) => {
            const Icon = category.icon;
            return (
              <Card 
                key={index}
                className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-border bg-card"
              >
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 rounded-lg bg-primary/10 text-primary">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>
                  <CardTitle className="text-lg text-card-foreground">
                    {category.category}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {category.courses.map((course, i) => (
                      <li key={i} className="text-sm text-muted-foreground flex items-start">
                        <span className="text-primary mr-2">•</span>
                        <span>{course}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Coursework;
