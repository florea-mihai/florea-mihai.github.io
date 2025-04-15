import { RevealOnScroll } from "../RevealOnScroll";

// Data-driven approach: Define project details in an array
const projects = [
  {
    title: "Cloud Platform",
    description:
      "Scalable cloud infrastructure management with real-time monitoring and automated scaling.",
    technologies: ["React", "Node.js", "AWS", "Docker"],
    link: "#",
  },
  {
    title: "AI Analytics Dashboard",
    description:
      "ML-Powered data visualization platform with predictive analytics and interactive reports.",
    technologies: ["React", "TensorFlow", "D3.js", "Tensor"],
    link: "#",
  },
  {
    title: "E-Commerce Web App",
    description:
      "Full-Stack E-Commerce with modern UI, secure payment integration, and real-time inventory management.",
    technologies: ["Next.js", "TypeScript", "Stripe", "PostgreSQL"],
    link: "#",
  },
  {
    title: "Real-Time Chat App",
    description:
      "Scalable chat platform supporting real-time messaging, presence, and group chat features.",
    technologies: ["Socket.IO", "Express", "React", "Redis"],
    link: "#",
  },
];

// Reusable ProjectCard component
const ProjectCard = ({ title, description, technologies, link }) => (
  <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:scale-105 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.1)] transition-transform duration-300">
    <h3 className="text-xl font-bold mb-2">{title}</h3>
    <p className="text-gray-400 mb-4">{description}</p>
    <div className="flex flex-wrap gap-2 mb-4">
      {technologies.map((tech, key) => (
        <span
          key={key}
          className="bg-blue-500/10 text-blue-500 px-3 py-1 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.1)] transition-all"
        >
          {tech}
        </span>
      ))}
    </div>
    <div className="flex justify-between items-center">
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`View details about ${title}`}
        className="text-blue-400 hover:text-blue-300 transition-colors my-4"
      >
        View Project →
      </a>
    </div>
  </div>
);

export const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <ProjectCard
                key={index}
                title={project.title}
                description={project.description}
                technologies={project.technologies}
                link={project.link}
              />
            ))}
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};