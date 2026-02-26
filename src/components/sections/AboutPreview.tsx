import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Palette, PenTool, Layers, ArrowRight } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const pillars = [
  {
    icon: Palette,
    title: "Creative Vision",
    desc: "Bold, original design concepts that capture your brand's unique identity and resonate with your audience.",
  },
  {
    icon: PenTool,
    title: "Design Expertise",
    desc: "Skilled designers delivering pixel-perfect execution across print, digital, and large-format media.",
  },
  {
    icon: Layers,
    title: "End-to-End Delivery",
    desc: "From concept to production — we handle every stage with precision, speed, and premium materials.",
  },
];

const AboutPreview = () => {
  const { ref, isVisible } = useScrollAnimation();
  const { ref: pillarsRef, isVisible: pillarsVisible } = useScrollAnimation(0.1);

  return (
    <section className="section-light section-padding overflow-hidden">
      <div className="container-tight">
        {/* Intro */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20" ref={ref}>
          <div>
            <p className={`font-heading text-primary uppercase tracking-[0.3em] text-sm mb-3 scroll-hidden ${isVisible ? "scroll-visible" : ""}`}>
              Who We Are
            </p>
            <h2 className={`text-3xl md:text-5xl uppercase mb-6 scroll-hidden ${isVisible ? "scroll-visible" : ""}`} style={{ transitionDelay: "100ms" }}>
              Where <span className="text-primary">Art</span> Meets{" "}
              <span className="text-primary">Strategy</span>
            </h2>
            <div className={`space-y-4 text-muted-foreground font-body leading-relaxed scroll-hidden ${isVisible ? "scroll-visible" : ""}`} style={{ transitionDelay: "200ms" }}>
              <p>
                At <strong className="text-foreground">Branding Hub</strong>, we don't just print — we craft visual experiences. Our team of designers and print specialists combine artistic excellence with strategic thinking to build brands that command attention.
              </p>
              <p>
                Every project is an opportunity to push creative boundaries while delivering results that drive real business growth.
              </p>
            </div>
            <div className={`mt-8 scroll-hidden ${isVisible ? "scroll-visible" : ""}`} style={{ transitionDelay: "300ms" }}>
              <Button variant="default" size="lg" asChild className="group">
                <Link to="/about">
                  Learn More About Us
                  <ArrowRight className="ml-1 transition-transform duration-200 group-hover:translate-x-1" size={16} />
                </Link>
              </Button>
            </div>
          </div>

          {/* Visual block */}
          <div className={`relative scroll-hidden-scale ${isVisible ? "scroll-visible-scale" : ""}`} style={{ transitionDelay: "200ms" }}>
            <div className="aspect-[4/3] bg-secondary relative overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <span className="font-heading text-7xl md:text-8xl text-primary/10 uppercase select-none leading-none">BH</span>
                  <p className="font-heading text-secondary-foreground/30 uppercase tracking-[0.4em] text-xs mt-2">Est. 2020</p>
                </div>
              </div>
              {/* Decorative corner accents */}
              <div className="absolute top-0 left-0 w-12 h-12 border-t-2 border-l-2 border-primary/40" />
              <div className="absolute bottom-0 right-0 w-12 h-12 border-b-2 border-r-2 border-primary/40" />
            </div>
          </div>
        </div>

        {/* Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8" ref={pillarsRef}>
          {pillars.map((pillar, i) => (
            <div
              key={pillar.title}
              className={`group p-8 border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 scroll-hidden ${pillarsVisible ? "scroll-visible" : ""}`}
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              <pillar.icon
                className="text-primary mb-5 transition-transform duration-300 group-hover:scale-110"
                size={32}
                strokeWidth={1.5}
              />
              <h3 className="font-heading text-xl uppercase mb-3">{pillar.title}</h3>
              <p className="text-muted-foreground font-body text-sm leading-relaxed">{pillar.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;
