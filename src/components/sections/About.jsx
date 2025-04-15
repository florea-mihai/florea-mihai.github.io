import { RevealOnScroll } from "../RevealOnScroll";

// Reusable component for skill lists
const SkillList = ({ title, skills }) => (
  <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
    <h3 className="text-xl font-bold mb-4">{title}</h3>
    <div className="flex flex-wrap gap-2">
      {skills.map((skill, index) => (
        <span
          key={index}
          className="bg-blue-500/10 text-blue-500 px-3 py-1 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.1)] transition-all"
        >
          {skill}
        </span>
      ))}
    </div>
  </div>
);

// Reusable component for education and work experience cards
const InfoCard = ({ title, content }) => (
  <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
    <h3 className="text-xl font-bold mb-4">{title}</h3>
    <div className="text-gray-300">{content}</div>
  </div>
);

export const About = () => {
  const frontendSkills = [
    "React",
    "Vue",
    "TypeScript",
    "Tailwind CSS",
    "Svelte",
    "JavaScript",
  ];
  const backendSkills = ["Node.js", "Express", "MongoDB", "AWS", "GraphQL"];

  const educationContent = (
    <ul className="list-disc list-inside space-y-2">
      <li>
        <strong>Bachelor's Degree in Computer Science</strong> - University of
        XYZ (2020 - 2023)
      </li>
      <li>
        Relevant Coursework: Data Structures, Cloud Computing, Web Development,
        Database Management
      </li>
    </ul>
  );

  const workExperienceContent = (
    <div className="space-y-4">
      <div>
        <h4 className="font-semibold">Software Engineer at ABC Corp (2020 - Present)</h4>
        <p>Developed and maintained microservices for cloud-based applications.</p>
      </div>
      <div>
        <h4 className="font-semibold">Intern at DEF Startups (2019 - 2020)</h4>
        <p>
          Assisted in building front-end components for web applications using
          React and Vue.js.
        </p>
      </div>
    </div>
  );

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            About Me
          </h2>

          {/* About Me Section */}
          <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
            <p className="text-gray-300 mb-6">
              Passionate developer with expertise in building scalable web
              applications and creating innovative solutions.
            </p>

            {/* Skills Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <SkillList title="Frontend" skills={frontendSkills} />
              <SkillList title="Backend" skills={backendSkills} />
            </div>
          </div>

          {/* Education and Work Experience Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <InfoCard title="🏫 Education" content={educationContent} />
            <InfoCard title="💼 Work Experience" content={workExperienceContent} />
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};