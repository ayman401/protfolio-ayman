import { GraduationCap, Award } from "lucide-react";

const EducationSection = () => {
  const education = [
    {
      institution: "Port Said University",
      degree: "BSc Information Technology Management",
      period: "2023 – 2027",
      gpa: "3.5 GPA",
      icon: <GraduationCap className="w-6 h-6" />
    },
    {
      institution: "Behera Military High School",
      degree: "Thanawaya A'ama (General Secondary)",
      period: "2021 – 2023",
      gpa: "High Achievement",
      icon: <Award className="w-6 h-6" />
    }
  ];

  return (
    <section id="education" className="py-20 px-4 bg-background">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-secondary">
          Education
        </h2>
        
        <div className="space-y-8">
          {education.map((edu, index) => (
            <div 
              key={index} 
              className="bg-card rounded-lg shadow-card p-6 md:p-8 hover:shadow-primary transition-all duration-300"
            >
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-primary rounded-lg text-primary-foreground flex-shrink-0">
                  {edu.icon}
                </div>
                
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                    <h3 className="text-xl font-bold text-card-foreground">
                      {edu.institution}
                    </h3>
                    <span className="text-primary font-semibold">
                      {edu.period}
                    </span>
                  </div>
                  
                  <p className="text-lg text-muted-foreground mb-2">
                    {edu.degree}
                  </p>
                  
                  <p className="text-primary font-medium">
                    {edu.gpa}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;