const skills = {
  technical: [
    { name: "JavaScript", level: 90 },
    { name: "React.js", level: 85 },
    { name: "Node.js", level: 60 },
    { name: "Python", level: 90 },
    { name: "HTML/CSS", level: 90 },
    { name: "C/C++", level: 80 },
    { name: "Java", level: 70 },
    { name: "MongoDB & MySQL", level: 80 },
    { name: "Django", level: 50 },
  ],
  soft: [
    "Team Leadership",
    "Problem Solving",
    "Project Management",
    "Product Design & Management",
    "Communication",
    "Agile Methodologies",
  ],
  tools: [
    "Git",
    "Github",
    "Canva",
    "AWS",
    "GCP",
    "VS Code",
    "Figma",
    "SnowFlake",
    "Datastax",
    "Langflow",
    "Postman API",
    "Excel, PowerPoint, Word",
  ],
};

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Skills</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Technical Skills */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Technical Skills</h3>
            <div className="space-y-4">
              {skills.technical.map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-1">
                    <span className="text-gray-700">{skill.name}</span>
                    <span className="text-gray-600">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-primary rounded-full h-2"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Soft Skills */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Soft Skills</h3>
            <div className="grid grid-cols-2 gap-4">
              {skills.soft.map((skill, index) => (
                <div
                  key={index}
                  className="bg-primary/10 rounded-lg p-3 text-primary"
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>

          {/* Tools & Technologies */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Tools & Technologies</h3>
            <div className="grid grid-cols-2 gap-4">
              {skills.tools.map((tool, index) => (
                <div
                  key={index}
                  className="bg-secondary/10 rounded-lg p-3 text-secondary"
                >
                  {tool}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}