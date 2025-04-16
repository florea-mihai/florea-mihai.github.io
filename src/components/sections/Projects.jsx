import { RevealOnScroll } from "../RevealOnScroll";

// Optionally, add an emoji or icon for each project
const projectIcons = ["☁️", "📊", "🛒", "💬"];

// Data-driven approach: Define project details in an array
const projects = [
  {
    title: "Cloud Platform",
    description:
      "Scalable cloud infrastructure management with real-time monitoring and automated scaling.",
    technologies: ["React", "Node.js", "AWS", "Docker"],
    link: "#",
    icon: projectIcons[0],
  },
  {
    title: "AI Analytics Dashboard",
    description:
      "ML-powered data visualization platform with predictive analytics and interactive reports.",
    technologies: ["React", "TensorFlow", "D3.js"],
    link: "#",
    icon: projectIcons[1],
  },
  {
    title: "E-Commerce Web App",
    description:
      "Full-stack e-commerce with modern UI, secure payment integration, and real-time inventory management.",
    technologies: ["Next.js", "TypeScript", "Stripe", "PostgreSQL"],
    link: "#",
    icon: projectIcons[2],
  },
  {
    title: "Real-Time Chat App",
    description:
      "Scalable chat platform supporting real-time messaging, presence, and group chat features.",
    technologies: ["Socket.IO", "Express", "React", "Redis"],
    link: "#",
    icon: projectIcons[3],
  },
];

// Reusable ProjectCard component
const ProjectCard = ({ title, description, technologies, link, icon }) => (
  <div className="relative p-6 rounded-2xl border border-blue-400/10 bg-white/10 backdrop-blur-md shadow-lg overflow-hidden flex flex-col h-full group transition-all duration-300 hover:scale-[1.03] hover:shadow-blue-500/20">
    {/* Animated border accent */}
    <div className="absolute inset-0 rounded-2xl pointer-events-none border-2 border-transparent group-hover:border-blue-400/40 transition-all duration-300" />
    <div className="flex items-center gap-3 mb-3">
      {icon && <span className="text-4xl text-blue-300 drop-shadow">{icon}</span>}
      <h3 className="text-2xl font-bold tracking-tight text-white">{title}</h3>
    </div>
    <p className="text-gray-300 mb-4 flex-1">{description}</p>
    <div className="flex flex-wrap gap-2 mb-4">
      {technologies.map((tech, key) => (
        <span
          key={key}
          className="bg-gradient-to-r from-blue-500/20 to-cyan-400/10 text-blue-200 px-3 py-1 rounded-full text-xs font-semibold border border-blue-400/20 shadow-sm hover:bg-blue-500/30 transition-all"
        >
          {tech}
        </span>
      ))}
    </div>
    <div className="flex justify-between items-center mt-auto">
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`View details about ${title}`}
        className="text-blue-400 hover:text-cyan-300 transition-colors font-semibold focus:outline-none focus:ring-2 focus:ring-blue-400"
        tabIndex={0}
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
      className="min-h-screen flex items-center justify-center py-20 bg-black relative"
      aria-label="Projects section"
    >
      {/* Animated background accent for consistency */}
      <div
        aria-hidden="true"
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 120% 90% at 50% 20%, rgba(59,130,246,0.07), transparent 80%)",
        }}
      />
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          {/* Headline */}
          <h2 className="text-4xl font-extrabold mb-4 bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-600 bg-clip-text text-transparent text-center drop-shadow">
            Featured Projects
          </h2>
          {/* Subheading */}
          <p className="text-gray-300 text-lg mb-12 max-w-2xl mx-auto text-center font-light">
            A selection of projects that showcase my passion for building robust, scalable, and user-friendly web applications.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <ProjectCard
                key={index}
                title={project.title}
                description={project.description}
                technologies={project.technologies}
                link={project.link}
                icon={project.icon}
              />
            ))}
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};