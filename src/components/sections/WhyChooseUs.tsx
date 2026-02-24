import { Clock, Award, PenTool, Package, HeadphonesIcon } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const reasons = [
  { icon: Clock, title: "Fast Turnaround", desc: "Quick delivery without compromising quality" },
  { icon: Award, title: "Premium Materials", desc: "Only the highest quality materials and finishes" },
  { icon: PenTool, title: "Professional Design", desc: "Expert designers bringing your vision to life" },
  { icon: Package, title: "Bulk Order Capacity", desc: "Large-scale production with consistent results" },
  { icon: HeadphonesIcon, title: "Reliable Support", desc: "Dedicated project management from start to finish" },
];

const WhyChooseUs = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="section-dark section-padding">
      <div className="container-tight" ref={ref}>
        <div className={`text-center mb-16 scroll-hidden ${isVisible ? "scroll-visible" : ""}`}>
          <p className="font-heading text-primary uppercase tracking-[0.3em] text-sm mb-3">Why Us</p>
          <h2 className="text-3xl md:text-5xl uppercase">Built on Excellence</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
          {reasons.map((r, i) => (
            <div
              key={r.title}
              className={`text-center group scroll-hidden ${isVisible ? "scroll-visible" : ""}`}
              style={{ transitionDelay: isVisible ? `${(i + 1) * 100}ms` : "0ms" }}
            >
              <div className="inline-flex items-center justify-center w-14 h-14 border border-primary/30 mb-4 group-hover:bg-primary group-hover:border-primary transition-all duration-300">
                <r.icon size={24} className="text-primary group-hover:text-primary-foreground transition-colors" strokeWidth={1.5} />
              </div>
              <h3 className="font-heading text-sm uppercase tracking-wider mb-2">{r.title}</h3>
              <p className="text-secondary-foreground/60 font-body text-xs leading-relaxed">{r.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
