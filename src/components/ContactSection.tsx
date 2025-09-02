import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Github, Linkedin } from "lucide-react";

const ContactSection = () => {
  const contactInfo = [
    {
      icon: <Mail className="w-5 h-5" />,
      label: "Email",
      value: "aymanzakaria641@gmail.com",
      href: "mailto:aymanzakaria641@gmail.com"
    },
    {
      icon: <Phone className="w-5 h-5" />,
      label: "Phone",
      value: "(+20) 1070355658",
      href: "tel:+201070355658"
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      label: "Location",
      value: "Port Said, Egypt",
      href: "#"
    }
  ];

  const socialLinks = [
    {
      icon: <Github className="w-6 h-6" />,
      label: "GitHub",
      href: "https://github.com/ayman401"
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/ayman-zakaria-270737294/"
    }
  ];

  return (
    <section id="contact" className="py-20 px-4 bg-gradient-dark">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-primary-foreground">
          Let's Connect
        </h2>
        <p className="text-xl text-primary-foreground/80 mb-12 max-w-2xl mx-auto">
          Ready to collaborate on your next project? I'm always excited to discuss 
          new opportunities and innovative ideas.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {contactInfo.map((contact, index) => (
            <a
              key={index}
              href={contact.href}
              className="bg-card rounded-lg p-6 hover:shadow-primary transition-all duration-300 hover:scale-105 group"
            >
              <div className="flex flex-col items-center text-center">
                <div className="p-3 bg-primary rounded-lg text-primary-foreground mb-4 group-hover:shadow-glow transition-all duration-300">
                  {contact.icon}
                </div>
                <h3 className="font-semibold text-card-foreground mb-2">
                  {contact.label}
                </h3>
                <p className="text-muted-foreground group-hover:text-primary transition-colors">
                  {contact.value}
                </p>
              </div>
            </a>
          ))}
        </div>
        
        <div className="flex justify-center gap-4 mb-8">
          {socialLinks.map((social, index) => (
            <Button
              key={index}
              variant="hero-outline"
              size="lg"
              asChild
              className="hover:scale-110"
            >
              <a href={social.href} target="_blank" rel="noopener noreferrer">
                {social.icon}
                {social.label}
              </a>
            </Button>
          ))}
        </div>

        <Button variant="hero" size="lg" className="text-lg px-8 py-4" asChild>
          <a href="mailto:aymanzakaria641@gmail.com" aria-label="Send email to Ayman">
            <Mail className="w-5 h-5 inline-block mr-2" />
            Get In Touch
          </a>
        </Button>
      </div>
    </section>
  );
};

export default ContactSection;