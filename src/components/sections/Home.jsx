import { RevealOnScroll } from "../RevealOnScroll";

export const Home = () => {
  return (
    <header
      id="home"
      className="min-h-screen flex items-center justify-center relative bg-black text-gray-100"
    >
      <RevealOnScroll>
        <div className="text-center z-10 px-4">
          {/* Heading */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent leading-tight animate-fade-in">
            Hi, I'm Mihai Florea.
          </h1>

          {/* Subheading */}
          <p className="text-gray-400 text-lg mb-8 max-w-lg mx-auto animate-fade-in delay-200">
            I'm a full-stack developer who loves crafting clean and efficient
            code. I have a passion for creating web applications that are not
            only functional but also visually appealing. My expertise lies in
            both front-end and back-end development, allowing me to build
            complete solutions from start to finish.
          </p>

          {/* Call-to-Action Buttons */}
          <div className="flex justify-center space-x-4 animate-fade-in delay-400">
            <a
              href="#projects"
              aria-label="View my projects"
              className="bg-blue-500 text-white px-6 py-3 rounded font-medium transition-transform duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]"
            >
              View Projects
            </a>

            <a
              href="#contact"
              aria-label="Contact me"
              className="border border-blue-500/50 text-blue-500 py-3 px-6 rounded font-medium transition-transform duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.2)] hover:bg-blue-500/10"
            >
              Contact Me
            </a>
          </div>
        </div>
      </RevealOnScroll>
    </header>
  );
};