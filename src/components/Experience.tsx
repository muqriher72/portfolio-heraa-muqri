import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, Calendar } from "lucide-react";

const experiences = [
  {
    title: "Data Engineer Intern",
    company: "Xylem",
    location: "Toronto, Canada",
    period: "Aug 2025 - Current",
    highlights: [
      "Built and deployed LLM-powered web app with Gemini API, OCR, and Streamlit achieving 88% accuracy, adopted by 300+ engineers",
      "Integrated Excel MCP server with REST APIs for automated file processing across workflows",
      "Partnered with engineers and developers to roll out tool into production, improving cross-team adoption"
    ],
    tags: ["Python", "Gemini API", "Streamlit", "OCR", "REST APIs"]
  },
  {
    title: "Operational Strategy and People Analytics Intern",
    company: "Amazon - Extern",
    location: "Remote",
    period: "Jun 2025 - Aug 2025",
    highlights: [
      "Performed web scraping and sentiment analysis on 135+ Glassdoor reviews and 20 YouTube videos using Python NLP",
      "Created visualizations with Matplotlib to identify operational pain points in fulfillment centers",
      "Translated qualitative feedback into actionable retention strategies"
    ],
    tags: ["Python", "NLP", "Web Scraping", "Matplotlib", "Sentiment Analysis"]
  },
  {
    title: "Data Engineer Intern",
    company: "Xylem",
    location: "Toronto, Canada",
    period: "May 2024 - Aug 2024",
    highlights: [
      "Automated A/B testing on 200+ datasets using Python and MATLAB, reducing manual testing time by ~90%",
      "Automated calculation of confusion matrix, ROC curves, and optimal data threshold determination",
      "Collaborated with cross-functional teams to optimize tool design, reducing signal noise by ~87%",
      "Wrote detailed statistical reports with data visualizations to support engineering decisions"
    ],
    tags: ["Python", "MATLAB", "A/B Testing", "Statistical Analysis", "Excel"]
  }
];

const leadership = {
  title: "Vice President of Finance",
  organization: "Women in Science and Engineering (WISE)",
  location: "Toronto, Canada",
  period: "Jul 2023 - Current",
  highlights: [
    "Led 7-person team to secure $75,500+ in sponsorships within 5 months from Xylem and 20+ companies",
    "Designed financial reports and feedback analyses, increasing sponsorship success rates by 85%",
    "Achieved 200% increase in ticket sales for 2024 WISE National Conference with 400+ attendees"
  ],
  tags: ["Leadership", "Financial Analysis", "Market Research", "Sponsorship"]
};

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-4 text-foreground">Experience</h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Professional internships and leadership roles where I've applied data science and engineering skills
        </p>

        {/* Work Experience */}
        <div className="max-w-4xl mx-auto mb-16">
          <h3 className="text-2xl font-semibold mb-6 text-foreground flex items-center gap-2">
            <Briefcase className="w-6 h-6 text-primary" />
            Work Experience
          </h3>
          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <Card key={index} className="border-border bg-card hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2">
                    <div>
                      <CardTitle className="text-card-foreground">{exp.title}</CardTitle>
                      <CardDescription className="text-lg font-medium text-primary mt-1">
                        {exp.company} • {exp.location}
                      </CardDescription>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground text-sm">
                      <Calendar className="w-4 h-4" />
                      {exp.period}
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-4">
                    {exp.highlights.map((highlight, i) => (
                      <li key={i} className="text-muted-foreground flex gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2">
                    {exp.tags.map((tag, i) => (
                      <Badge key={i} variant="secondary">{tag}</Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Leadership */}
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-semibold mb-6 text-foreground">Leadership</h3>
          <Card className="border-border bg-card hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2">
                <div>
                  <CardTitle className="text-card-foreground">{leadership.title}</CardTitle>
                  <CardDescription className="text-lg font-medium text-primary mt-1">
                    {leadership.organization} • {leadership.location}
                  </CardDescription>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground text-sm">
                  <Calendar className="w-4 h-4" />
                  {leadership.period}
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 mb-4">
                {leadership.highlights.map((highlight, i) => (
                  <li key={i} className="text-muted-foreground flex gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-2">
                {leadership.tags.map((tag, i) => (
                  <Badge key={i} variant="secondary">{tag}</Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Experience;
