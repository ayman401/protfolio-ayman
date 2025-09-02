import { Code, Database, Settings, Cpu } from "lucide-react";

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <Code className="w-6 h-6" />,
      skills: ["C++ (Proficient)", "Python (Proficient)", "HTML", "CSS"]
    },
    {
      title: "Frameworks",
      icon: <Settings className="w-6 h-6" />,
      skills: ["React.js", "Node.js", "Express.js", "Mongoose"]
    },
    {
      title: "Databases",
      icon: <Database className="w-6 h-6" />,
      skills: ["MongoDB", "SQL"]
    },
    {
      title: "Tools & Concepts",
      icon: <Cpu className="w-6 h-6" />,
      skills: ["Git & GitHub", "VS Code", "OOP", "Data Structures", "Algorithms"]
    }
  ];

  return (
    <section id="skills" className="py-20 px-4 bg-secondary">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-secondary-foreground">
          Skills & Technologies
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <div 
              key={index}
              className="bg-card rounded-lg p-6 shadow-card hover:shadow-primary transition-all duration-300 hover:scale-105"
            >
              <div className="flex items-center mb-4">
                <div className="p-2 bg-primary rounded-lg text-primary-foreground mr-3">
                  {category.icon}
                </div>
                <h3 className="text-lg font-semibold text-card-foreground">
                  {category.title}
                </h3>
              </div>
              
              <ul className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <li 
                    key={skillIndex}
                    className="text-muted-foreground hover:text-primary transition-colors duration-200"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;