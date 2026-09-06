"use client";

import SectionReveal from "./SectionReveal";
import ProjectCard from "./ProjectCard";

const freelanceProjects = [
  {
    title: "Chauhan Properties",
    tags: ["Freelance", "Web Development", "React"],
    description:
      "Modern real estate platform built for Chauhan Properties to list and showcase available properties.",
    link: "https://chauhan-properties.grexa.site/",
    image: "/projects/chauhan.png",
  },
  {
    title: "Glitz Bliss Unisex Salon",
    tags: ["Freelance", "Web Development", "UI/UX"],
    description:
      "Elegant booking and service showcase website for Glitz Bliss Unisex Salon.",
    link: "https://gurgaonsector99.glitzandbliss.in/",
    image: "/projects/glitz.png",
  },
  {
    title: "Vasudeva Restaurant",
    tags: ["Freelance", "Web Development", "Frontend"],
    description:
      "Interactive restaurant website featuring dynamic menus and responsive design for Vasudeva Restaurant.",
    link: "https://vasudevarestaurant.in/",
    image: "/projects/vasudeva.png",
  },
];

const selfProjects = [
  {
    title: "Klarify",
    tags: ["FastAPI", "React", "Ollama", "Docker"],
    description:
      "Full-stack contract intelligence parser that extracts financial data and scores completeness from PDF contracts up to 50MB.",
    link: null,
  },
  {
    title: "AI Career Guidance Chatbot",
    tags: ["LangChain", "Pinecone", "FastAPI", "React"],
    description:
      "RAG-powered counseling platform delivering personalized educational guidance with 95%+ retrieval accuracy.",
    link: null,
  },
  {
    title: "Past Perfect",
    tags: ["FastAPI", "SQLAlchemy", "AWS S3"],
    description:
      "AI-powered campus marketplace with real-time ML price forecasting and a live \"Demand Board.\"",
    link: null,
  },
  {
    title: "Synthetic-Bull",
    tags: ["React", "Optuna", "WebSockets"],
    description:
      "Low-latency exchange simulator handling 500k+ orders/sec with an Avellaneda-Stoikov market-making bot.",
    link: null,
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative py-[120px] md:py-[200px]">
      <div className="mx-auto max-w-container px-6 lg:px-8">
        <SectionReveal>
          <p className="text-sm text-primary font-medium tracking-widest uppercase mb-4">
            Projects
          </p>
          <h2 className="font-display text-[clamp(2rem,5vw,3.5rem)] leading-tight text-foreground mb-16">
            SELECTED PROJECTS
          </h2>
        </SectionReveal>

        {/* Freelance Projects */}
        <div className="mb-20">
          <SectionReveal>
            <h3 className="font-display text-2xl md:text-3xl text-foreground mb-8">
              FREELANCE PROJECTS
            </h3>
          </SectionReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {freelanceProjects.map((project, i) => (
              <SectionReveal key={project.title} delay={i * 0.1}>
                <ProjectCard project={project} index={i} />
              </SectionReveal>
            ))}
          </div>
        </div>

        {/* Self Projects */}
        <div>
          <SectionReveal>
            <h3 className="font-display text-2xl md:text-3xl text-foreground mb-8">
              SELF PROJECTS
            </h3>
          </SectionReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {selfProjects.map((project, i) => (
              <SectionReveal key={project.title} delay={i * 0.1}>
                <ProjectCard project={project} index={i + freelanceProjects.length} />
              </SectionReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
