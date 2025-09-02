import { Users, Trophy } from "lucide-react";

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-20 px-4 bg-secondary">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-secondary-foreground">
          Experience & Activities
        </h2>
        
        <div className="bg-card rounded-lg shadow-card p-8 md:p-12">
          <div className="flex items-start space-x-4">
            <div className="p-3 bg-primary rounded-lg text-primary-foreground">
              <Trophy className="w-6 h-6" />
            </div>
            
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-card-foreground mb-2">
                ICPC PSU Community Member
              </h3>
              <p className="text-primary font-semibold mb-4">Port Said University</p>
              
              <div className="space-y-4 text-card-foreground/80">
                <div className="flex items-start space-x-3">
                  <Users className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <p>
                    <strong className="text-primary">Mentoring Beginners:</strong> Actively helping 
                    newcomers learn programming fundamentals and develop problem-solving skills 
                    through one-on-one guidance and group sessions.
                  </p>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Trophy className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <p>
                    <strong className="text-primary">Training Sessions:</strong> Participating in 
                    regular competitive programming workshops, algorithm discussions, and 
                    contest preparation sessions to sharpen technical skills.
                  </p>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Users className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <p>
                    <strong className="text-primary">Community Building:</strong> Contributing to 
                    a collaborative learning environment that fosters growth, knowledge sharing, 
                    and competitive excellence among peers.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;