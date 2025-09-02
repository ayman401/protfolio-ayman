const AboutSection = () => {
  return (
    <section id="about" className="py-20 px-4 bg-background">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-secondary">
          About Me
        </h2>
        
        <div className="bg-card rounded-lg shadow-card p-8 md:p-12">
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-card-foreground/80 leading-relaxed mb-6">
              I'm a dedicated student at the Faculty of Technology Management and Information Systems 
              at <strong className="text-primary">Port Said University</strong>, where I'm pursuing my passion 
              for technology and innovation.
            </p>
            
            <p className="text-lg text-card-foreground/80 leading-relaxed mb-6">
              My journey in programming is driven by an insatiable curiosity for 
              <strong className="text-primary"> Problem Solving</strong> and creating efficient solutions 
              using languages like <strong className="text-primary">C++</strong> and 
              <strong className="text-primary"> Python</strong>.
            </p>
            
            <p className="text-lg text-card-foreground/80 leading-relaxed">
              Looking ahead, I'm excited about diving deeper into the world of 
              <strong className="text-primary"> Robotics</strong> and 
              <strong className="text-primary"> Embedded Systems</strong>, where I believe the future 
              of technology lies in creating intelligent, interconnected solutions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;