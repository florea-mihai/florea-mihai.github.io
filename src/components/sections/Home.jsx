import { RevealOnScroll } from "../RevealOnScroll";

export const Home = () => {
  return (
    <header
      id="home"
      className="min-h-screen flex items-center justify-center relative bg-black text-gray-100 overflow-hidden"
      aria-label="Homepage section"
    >
      {/* Animated background gradient */}
      <div
        aria-hidden="true"
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 30%, rgba(59,130,246,0.12), transparent 80%)",
        }}
      />
      <RevealOnScroll>
        <div className="text-center z-10 px-4">
          {/* Tagline */}
          <p className="uppercase tracking-widest text-xs text-blue-400 mb-3 animate-fade-in">
            Full-Stack Developer & Problem Solver
          </p>

          {/* Heading */}
          <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent leading-tight animate-fade-in">
            Hi, I'm Mihai Florea.
          </h1>

          {/* Tech stack badges */}
          <div className="flex flex-wrap justify-center gap-2 mb-6 animate-fade-in delay-150">
            {["React", "Node.js", "TypeScript", "Tailwind CSS"].map((tech) => (
              <span
                key={tech}
                className="bg-blue-500/10 text-blue-400 px-3 py-1 rounded-full text-xs font-medium border border-blue-500/20"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Subheading */}
          <p className="text-gray-400 text-lg mb-8 max-w-lg mx-auto animate-fade-in delay-200">
            I love crafting clean, efficient code and building web applications that are both functional and visually appealing. My expertise spans both front-end and back-end, enabling me to deliver complete solutions from start to finish.
          </p>

          {/* Call-to-Action Buttons */}
          <div className="flex justify-center space-x-4 animate-fade-in delay-400">
            <a
              href="#projects"
              aria-label="View my projects"
              className="bg-blue-500 text-white px-6 py-3 rounded font-medium transition-transform duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400 hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]"
            >
              View Projects
            </a>
            <a
              href="#contact"
              aria-label="Contact me"
              className="border border-blue-500/50 text-blue-500 py-3 px-6 rounded font-medium transition-transform duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400 hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.2)] hover:bg-blue-500/10"
            >
              Contact Me
            </a>
          </div>

          {/* Scroll Down Indicator */}
          <div className="mt-12 flex justify-center animate-fade-in delay-700">
            <a
              href="#about"
              aria-label="Scroll to About section"
              className="flex flex-col items-center group"
            >
              <span className="text-xs text-gray-400 mb-1 group-hover:text-blue-400 transition-colors">
                Scroll Down
              </span>
              <span className="w-6 h-6 border-b-2 border-r-2 border-blue-400 transform rotate-45 animate-bounce" />
            </a>
          </div>
        </div>
      </RevealOnScroll>
    </header>
  );
};