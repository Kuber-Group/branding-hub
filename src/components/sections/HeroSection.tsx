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
    <section className="relative min-h-[95vh] flex items-center overflow-hidden bg-[#F8F8F8]">
      {/* Background image — visible through light overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      {/* Light gradient overlay — bright premium feel */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to right, rgba(248,248,248,0.96) 0%, rgba(248,248,248,0.88) 50%, rgba(248,248,248,0.72) 100%)",
        }}
      />

      {/* Subtle warm tint */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#FAFAF8]/30 to-transparent" />

      {/* Soft red glow accents */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[160px]" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary/4 rounded-full blur-[140px]" />

      {/* Subtle abstract red line patterns */}
      <div className="absolute top-20 right-20 w-40 h-px bg-primary/10 rotate-45" />
      <div className="absolute top-32 right-32 w-24 h-px bg-primary/8 rotate-45" />
      <div className="absolute bottom-32 left-16 w-32 h-px bg-primary/10 -rotate-45" />

      {/* Bottom accent line */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

      <div className="relative container-tight px-4 md:px-8 lg:px-16 py-20 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left content */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 bg-primary/8 border border-primary/15 px-4 py-1.5 rounded-full mb-6 animate-fade-up">
              <Sparkles className="text-primary" size={14} />
              <span className="font-body text-primary text-xs uppercase tracking-widest font-medium">
                Premium Branding & Printing
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-7xl uppercase leading-[0.95] mb-6 animate-fade-up-delay-1 text-foreground">
              Branding & Printing Solutions That Make You{" "}
              <span className="text-primary relative">
                Stand Out
                <span className="absolute -bottom-1 left-0 w-full h-1 bg-primary/50 rounded-full" />
              </span>
            </h1>

            <p className="text-muted-foreground font-body text-lg md:text-xl max-w-xl mb-10 animate-fade-up-delay-2 leading-relaxed">
              We transform ideas into powerful visual identities — delivering professional branding, printing, and signage with speed, quality, and precision.
            </p>

            <div className="flex flex-wrap gap-4 animate-fade-up-delay-3">
              <Button variant="hero" size="xl" asChild className="group rounded-[10px] shadow-lg shadow-primary/20">
                <Link to="/quote">
                  Request a Quote
                  <ArrowRight className="ml-1 transition-transform duration-200 group-hover:translate-x-1" size={18} />
                </Link>
              </Button>
              <Button variant="heroOutline" size="xl" asChild className="rounded-[10px] border-primary text-primary hover:bg-primary/5">
                <Link to="/portfolio">View Our Work</Link>
              </Button>
            </div>
          </div>

          {/* Right — stats cards */}
          <div className="lg:col-span-5 hidden lg:flex flex-col items-end gap-5" ref={statsRef}>
            {stats.map((stat, i) => (
              <div
                key={stat.label}
                className={`w-full max-w-[280px] bg-white/85 backdrop-blur-sm rounded-xl p-5 shadow-sm border border-border/50 flex items-center gap-4 scroll-hidden ${statsVisible ? "scroll-visible" : ""}`}
                style={{ transitionDelay: `${i * 150}ms` }}
              >
                <div className="w-1 h-12 bg-primary rounded-full shrink-0" />
                <div>
                  <span className="font-heading text-3xl xl:text-4xl text-primary">{stat.value}</span>
                  <p className="font-body text-muted-foreground text-sm uppercase tracking-wider mt-0.5">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
