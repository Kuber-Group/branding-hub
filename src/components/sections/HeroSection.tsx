import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const HeroSection = () => {
  const { ref: statsRef, isVisible: statsVisible } = useScrollAnimation(0.3);

  const stats = [
    { value: "500+", label: "Projects Delivered" },
    { value: "98%", label: "Client Satisfaction" },
    { value: "24hr", label: "Fast Turnaround" },
  ];

  return (
    <section className="relative min-h-[95vh] flex items-center section-dark overflow-hidden">
      {/* Background image — more visible */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-50"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      {/* Lighter gradient overlay for brightness */}
      <div className="absolute inset-0 bg-gradient-to-br from-secondary/85 via-secondary/60 to-secondary/40" />
      
      {/* Accent glow */}
      <div className="absolute top-1/4 -right-32 w-96 h-96 bg-primary/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

      <div className="relative container-tight px-4 md:px-8 lg:px-16 py-20 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left content */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 px-4 py-1.5 rounded-full mb-6 animate-fade-up">
              <Sparkles className="text-primary" size={14} />
              <span className="font-body text-primary text-xs uppercase tracking-widest font-medium">
                Premium Branding & Printing
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-7xl uppercase leading-[0.95] mb-6 animate-fade-up-delay-1">
              Branding & Printing Solutions That Make You{" "}
              <span className="text-primary relative">
                Stand Out
                <span className="absolute -bottom-1 left-0 w-full h-1 bg-primary/60 rounded-full" />
              </span>
            </h1>

            <p className="text-secondary-foreground/80 font-body text-lg md:text-xl max-w-xl mb-10 animate-fade-up-delay-2 leading-relaxed">
              We transform ideas into powerful visual identities — delivering professional branding, printing, and signage with speed, quality, and precision.
            </p>

            <div className="flex flex-wrap gap-4 animate-fade-up-delay-3">
              <Button variant="hero" size="xl" asChild className="group">
                <Link to="/quote">
                  Request a Quote
                  <ArrowRight className="ml-1 transition-transform duration-200 group-hover:translate-x-1" size={18} />
                </Link>
              </Button>
              <Button variant="heroOutline" size="xl" asChild>
                <Link to="/portfolio">View Our Work</Link>
              </Button>
            </div>
          </div>

          {/* Right — stats column */}
          <div className="lg:col-span-5 hidden lg:flex flex-col items-end gap-6" ref={statsRef}>
            {stats.map((stat, i) => (
              <div
                key={stat.label}
                className={`text-right border-r-2 border-primary/40 pr-6 scroll-hidden ${statsVisible ? "scroll-visible" : ""}`}
                style={{ transitionDelay: `${i * 150}ms` }}
              >
                <span className="font-heading text-4xl xl:text-5xl text-primary">{stat.value}</span>
                <p className="font-body text-secondary-foreground/60 text-sm uppercase tracking-wider mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
