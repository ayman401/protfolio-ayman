import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from "lucide-react";
import todoThumbnail from "@/assets/todo-app-thumbnail.jpg";
import restaurantThumbnail from "@/assets/restaurant-app-thumbnail.jpg";
import ecommerceThumbnail from "@/assets/ecommerce-app-thumbnail.jpg";
import transcriptThumbnail from "@/assets/transcript-app-thumbnail.jpg";

const ProjectsSection = () => {
  const projects = [
    {
      title: "To-Do List App",
      description: "A responsive task management application built with HTML, CSS, and JavaScript featuring local storage persistence and intuitive user interface.",
      technologies: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/ayman401/To-Do-List.git",
      liveDemo: "https://ayman401.github.io/To-Do-List/",
      thumbnail: todoThumbnail
    },
    {
      title: "Restaurant Web App",
      description: "Interactive restaurant website with menu display and order simulation system, showcasing modern web design principles.",
      technologies: ["React", "CSS", "JavaScript"],
      github: "https://github.com/ayman401/Food-Lover.git",
      liveDemo: "https://ayman401.github.io/Food-Lover/",
      thumbnail: restaurantThumbnail
    },
    {
      title: "E-commerce Website",
      description: "Full-stack e-commerce platform with user authentication, product catalog, and shopping cart functionality.",
      technologies: ["Node.js", "JavaScript", "MongoDB"],
      github: "https://github.com/ayman401/E-commerce.git",
      liveDemo: "https://ayman401.github.io/E-commerce/",
      thumbnail: ecommerceThumbnail
    },
    {
      title: "Transcript Extractor",
      description: "Python script that extracts and processes transcripts from audio and video files using speech recognition technology.",
      technologies: ["Python", "Speech Recognition", "File Processing"],
      github: "https://github.com/ayman401/Extract_transcript.git",
      liveDemo: " https://ayman401.github.io/Extract_transcript/",
      thumbnail: transcriptThumbnail
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-secondary">
          Featured Projects
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="group hover:shadow-primary transition-all duration-300 hover:scale-105 overflow-hidden">
              <div className="aspect-video w-full overflow-hidden">
                <img 
                  src={project.thumbnail} 
                  alt={`${project.title} preview`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-xl font-bold text-card-foreground group-hover:text-primary transition-colors">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  {project.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-4">
                  <Button variant="outline" size="sm" asChild>
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4" />
                      View Code
                    </a>
                  </Button>
                  <Button variant="ghost" size="sm">
                    <a href={project.liveDemo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;