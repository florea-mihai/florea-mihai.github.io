import { RevealOnScroll } from "../RevealOnScroll";

// SkillList: consistent, accessible, visually clear
const SkillList = ({ title, icon, skills }) => (
  <div className="rounded-2xl p-6 bg-white/10 border border-blue-900/30 shadow-md hover:shadow-blue-900/30 hover:scale-[1.02] transition-all duration-300">
    <div className="flex items-center gap-2 mb-3">
      {icon && (
        <span className="text-2xl text-blue-400" aria-hidden="true">{icon}</span>
      )}
      <h3 className="text-lg font-semibold text-white">{title}</h3>
    </div>
    <ul className="flex flex-wrap gap-2" aria-label={`${title} skills`}>
      {skills.map((skill, idx) => (
        <li
          key={skill}
          className="bg-blue-500/10 text-blue-300 px-3 py-1 rounded-full text-xs font-medium border border-blue-500/20"
        >
          {skill}
        </li>
      ))}
    </ul>
  </div>
);

// InfoCard: for education and work, with semantic markup
const InfoCard = ({ title, icon, content }) => (
  <div className="p-6 rounded-2xl border border-blue-900/30 bg-white/10 backdrop-blur-md shadow-md hover:shadow-blue-900/30 hover:scale-[1.02] transition-all duration-300">
    <div className="flex items-center gap-2 mb-3">
      {icon && (
        <span className="text-xl text-cyan-300" aria-hidden="true">{icon}</span>
      )}
      <h3 className="text-lg font-semibold text-white">{title}</h3>
    </div>
    <div className="text-gray-300 text-sm">{content}</div>
  </div>
);

export const About = () => {
  const frontendSkills = [
    "React", "Vue", "TypeScript", "Tailwind CSS", "Svelte", "JavaScript"
  ];
  const backendSkills = [
    "Node.js", "Express", "MongoDB", "AWS", "GraphQL"
  ];
  const softSkills = [
    "Problem Solving", "Teamwork", "Communication", "Adaptability", "Time Management", "Creativity"
  ];

  const educationContent = (
    <ul className="space-y-2">
      <li>
        <h4 className="font-semibold text-blue-300 text-sm">BSc Computer Science — University of XYZ</h4>
        <p className="text-xs text-gray-400">2020–2023 &mdash; Focus: Data Structures, Cloud, Web, Databases</p>
      </li>
      <li>
        <h4 className="font-semibold text-blue-300 text-sm">High School of Informatics — ABC High School</h4>
        <p className="text-xs text-gray-400">2016–2020 &mdash; Focus: Mathematics, Algorithms, Programming Fundamentals</p>
      </li>
    </ul>
  );

  const workExperienceContent = (
    <ul className="space-y-2">
      <li>
        <h4 className="font-semibold text-blue-300 text-sm">Software Engineer, ABC Corp</h4>
        <p className="text-xs text-gray-400">2020–Present — Built and maintained scalable cloud microservices.</p>
      </li>
      <li>
        <h4 className="font-semibold text-blue-300 text-sm">Intern, DEF Startups</h4>
        <p className="text-xs text-gray-400">2019–2020 — Developed UI components with React & Vue.</p>
      </li>
    </ul>
  );

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center relative bg-black text-gray-100 overflow-hidden py-20"
      aria-label="About Me section"
    >
      {/* Animated background accent for consistency */}
      <div
        aria-hidden="true"
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 30%, rgba(59,130,246,0.12), transparent 80%)",
        }}
      />
      <RevealOnScroll>
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent leading-tight animate-fade-in">
            About me
          </h2>
          <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto font-light animate-fade-in delay-200">
            I’m Mihai, a developer passionate about building robust, maintainable, and delightful digital experiences. I thrive on solving complex problems and delivering clean, scalable solutions.
          </p>

          {/* Skills Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10 animate-fade-in delay-300">
            <SkillList title="Frontend" icon="🎨" skills={frontendSkills} />
            <SkillList title="Backend" icon="🛠️" skills={backendSkills} />
            <SkillList title="Soft Skills" icon="🤝" skills={softSkills} />
          </div>

          {/* Divider */}
          <div className="h-px w-20 mx-auto bg-blue-900/40 opacity-60 rounded-full mb-10" />

          {/* Education and Work Experience Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-fade-in delay-400">
            <InfoCard title="Education" icon="🏫" content={educationContent} />
            <InfoCard title="Work Experience" icon="💼" content={workExperienceContent} />
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};