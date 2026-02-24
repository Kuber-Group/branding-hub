import { useState } from "react";
import { Link } from "react-router-dom";

const categories = ["All", "Apparel", "Signage", "Corporate Branding", "Vehicle Branding"];

const projects = [
  { title: "Corporate Identity Suite", category: "Corporate Branding", color: "bg-accent" },
  { title: "Fleet Vehicle Wraps", category: "Vehicle Branding", color: "bg-secondary" },
  { title: "Custom Team Apparel", category: "Apparel", color: "bg-deep-red" },
  { title: "Outdoor Billboard Campaign", category: "Signage", color: "bg-accent" },
  { title: "Event Merchandise", category: "Apparel", color: "bg-secondary" },
  { title: "Retail Signage System", category: "Signage", color: "bg-accent" },
];

const FeaturedProjects = () => {
  const [active, setActive] = useState("All");
  const filtered = active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <section className="section-light section-padding">
      <div className="container-tight">
        <div className="text-center mb-12">
          <p className="font-heading text-primary uppercase tracking-[0.3em] text-sm mb-3">Our Work</p>
          <h2 className="text-3xl md:text-5xl uppercase">Featured Projects</h2>
        </div>

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
            <Link
              to="/portfolio"
              key={`${p.title}-${i}`}
              className="group relative aspect-[4/3] overflow-hidden border border-border"
            >
              <div className={`absolute inset-0 ${p.color} flex items-center justify-center`}>
                <span className="font-heading text-xl uppercase tracking-wider text-secondary-foreground/20 select-none">
                  {p.category}
                </span>
              </div>
              <div className="absolute inset-0 bg-secondary/0 group-hover:bg-secondary/80 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                <div className="text-center">
                  <p className="font-heading text-lg uppercase text-secondary-foreground">{p.title}</p>
                  <p className="text-primary text-xs uppercase tracking-widest mt-1">{p.category}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/portfolio"
            className="font-heading text-sm uppercase tracking-widest text-primary hover:text-accent transition-colors border-b border-primary/30 pb-1"
          >
            View All Projects →
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
