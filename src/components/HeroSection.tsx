import { Button } from "@/components/ui/button";
import { Download, Mail } from "lucide-react";
import avatarImage from "@/assets/ayman-avatar.jpg";
import heroBgImage from "@/assets/hero-programming-bg.jpg";

const HeroSection = () => {
  return (
    <section 
      className="min-h-screen flex items-center justify-center px-4 relative"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${heroBgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="max-w-4xl mx-auto text-center text-primary-foreground">
        <div className="mb-8">
          <img
            src={avatarImage}
            alt="Ayman Zakaria - Software Developer"
            className="w-32 h-32 md:w-40 md:h-40 rounded-full mx-auto mb-6 border-4 border-primary shadow-glow"
          />
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4">
            Ayman Zakaria
          </h1>
          <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            "Striving for excellence in every code I write and every project I build."
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg" className="text-lg px-8 py-4">
              <Download className="w-5 h-5" />
              <a href="public/Latest_update_on_CV[1].pdf" download>
                Download CV
              </a>
            </Button>
          <Button variant="hero-outline" size="lg" className="text-lg px-8 py-4">
            <Mail className="w-5 h-5" />
            <a href="mailto:aymanzakaria641@gmail.com">
              Contact Me
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;