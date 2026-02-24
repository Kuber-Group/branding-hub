import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center section-dark overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-secondary via-secondary/90 to-secondary/50" />
      <div className="relative container-tight px-4 md:px-8 lg:px-16 py-20">
        <div className="max-w-3xl">
          <p className="font-heading text-primary uppercase tracking-[0.3em] text-sm mb-4 animate-fade-up">
            Premium Branding & Printing
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-7xl uppercase leading-[0.95] mb-6 animate-fade-up-delay-1">
            Branding & Printing Solutions That Make You{" "}
            <span className="text-primary">Stand Out</span>
          </h1>
          <p className="text-secondary-foreground/70 font-body text-lg md:text-xl max-w-xl mb-10 animate-fade-up-delay-2">
            Professional visual identity solutions delivered with speed, quality, and precision. From concept to completion.
          </p>
          <div className="flex flex-wrap gap-4 animate-fade-up-delay-3">
            <Button variant="hero" size="xl" asChild>
              <Link to="/quote">Request a Quote</Link>
            </Button>
            <Button variant="heroOutline" size="xl" asChild>
              <Link to="/portfolio">View Our Work</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
