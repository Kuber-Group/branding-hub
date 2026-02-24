import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const categories = ["All", "Apparel", "Signage", "Corporate Branding", "Vehicle Branding"];

const projects = [
  { title: "Apex Holdings Full Rebrand", category: "Corporate Branding", desc: "Complete corporate identity redesign" },
  { title: "FleetPro Vehicle Wraps", category: "Vehicle Branding", desc: "50+ vehicle fleet branding" },
  { title: "Urban Style Apparel Line", category: "Apparel", desc: "Custom branded workwear collection" },
  { title: "Metro Mall Signage", category: "Signage", desc: "Full retail signage system" },
  { title: "StartUp Summit Merchandise", category: "Apparel", desc: "Conference branded merchandise" },
  { title: "CityGrill Restaurant Signage", category: "Signage", desc: "Indoor and outdoor branding" },
  { title: "TechVentures Brand Kit", category: "Corporate Branding", desc: "Startup brand identity package" },
  { title: "Rapid Courier Fleet Wrap", category: "Vehicle Branding", desc: "Delivery fleet full wraps" },
  { title: "Heritage Bank Collateral", category: "Corporate Branding", desc: "Print and digital brand assets" },
];

const Portfolio = () => {
  const [active, setActive] = useState("All");
  const filtered = active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <>
      <section className="section-dark section-padding pt-32">
        <div className="container-tight">
          <p className="font-heading text-primary uppercase tracking-[0.3em] text-sm mb-3 animate-fade-up">Portfolio</p>
          <h1 className="text-4xl md:text-6xl uppercase mb-6 animate-fade-up-delay-1">
            Our <span className="text-primary">Work</span>
          </h1>
          <p className="text-secondary-foreground/70 font-body text-lg max-w-2xl animate-fade-up-delay-2">
            A showcase of our branding, printing, and signage projects delivered with excellence.
          </p>
        </div>
      </section>

      <section className="section-light section-padding">
        <div className="container-tight">
          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`font-heading text-xs uppercase tracking-widest px-4 py-2 border transition-all duration-200 ${
                  active === cat
                    ? "bg-primary text-primary-foreground border-primary"
                    : "border-border text-muted-foreground hover:border-primary hover:text-primary"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((p, i) => (
              <div
                key={`${p.title}-${i}`}
                className="group border border-border hover:border-primary/30 transition-all duration-300 overflow-hidden"
              >
                <div className="aspect-[4/3] bg-secondary flex items-center justify-center">
                  <span className="font-heading text-lg uppercase tracking-wider text-secondary-foreground/15 select-none">
                    {p.category}
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="font-heading text-base uppercase mb-1 group-hover:text-primary transition-colors">{p.title}</h3>
                  <p className="text-muted-foreground font-body text-sm">{p.desc}</p>
                  <p className="text-primary text-xs uppercase tracking-widest mt-3 font-heading">{p.category}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-dark section-padding text-center">
        <div className="container-tight">
          <h2 className="text-3xl md:text-5xl uppercase mb-6">
            Have a Project in <span className="text-primary">Mind?</span>
          </h2>
          <Button variant="hero" size="xl" asChild>
            <Link to="/quote">Get Started</Link>
          </Button>
        </div>
      </section>
    </>
  );
};

export default Portfolio;
