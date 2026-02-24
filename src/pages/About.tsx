import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Target, Eye, Cog, Users } from "lucide-react";

const About = () => {
  return (
    <>
      {/* Hero */}
      <section className="section-dark section-padding pt-32">
        <div className="container-tight">
          <p className="font-heading text-primary uppercase tracking-[0.3em] text-sm mb-3 animate-fade-up">About Us</p>
          <h1 className="text-4xl md:text-6xl uppercase mb-6 animate-fade-up-delay-1">
            Built on <span className="text-primary">Precision</span>
          </h1>
          <p className="text-secondary-foreground/70 font-body text-lg max-w-2xl animate-fade-up-delay-2">
            We are a premium branding, printing, and signage company committed to delivering exceptional visual identity solutions across Africa.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="section-light section-padding">
        <div className="container-tight">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="font-heading text-primary uppercase tracking-[0.3em] text-sm mb-3">Our Story</p>
              <h2 className="text-3xl md:text-4xl uppercase mb-6">
                From Humble Beginnings to Industry Leadership
              </h2>
              <div className="space-y-4 text-muted-foreground font-body text-sm leading-relaxed">
                <p>
                  BrandForge was founded with a simple mission: to provide businesses with the highest quality branding and printing solutions at competitive prices.
                </p>
                <p>
                  What started as a small printing operation has grown into a full-service branding partner serving corporate clients, SMEs, and government institutions across the continent.
                </p>
                <p>
                  Today, we operate with state-of-the-art equipment and a team of dedicated professionals who share a passion for quality and innovation.
                </p>
              </div>
            </div>
            <div className="aspect-square bg-secondary border border-border flex items-center justify-center">
              <span className="font-heading text-2xl uppercase tracking-wider text-secondary-foreground/10 select-none">Brand Forge HQ</span>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-dark section-padding">
        <div className="container-tight">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="p-8 border border-secondary-foreground/10">
              <Target className="text-primary mb-4" size={28} strokeWidth={1.5} />
              <h2 className="text-2xl uppercase mb-4">Our Mission</h2>
              <p className="text-secondary-foreground/70 font-body text-sm leading-relaxed">
                To empower businesses with premium, affordable branding solutions that communicate professionalism and build lasting trust with their audiences.
              </p>
            </div>
            <div className="p-8 border border-secondary-foreground/10">
              <Eye className="text-primary mb-4" size={28} strokeWidth={1.5} />
              <h2 className="text-2xl uppercase mb-4">Our Vision</h2>
              <p className="text-secondary-foreground/70 font-body text-sm leading-relaxed">
                To be Africa's most trusted branding and printing partner — known for quality, speed, and innovation in every project we deliver.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section-light section-padding">
        <div className="container-tight">
          <div className="text-center mb-16">
            <p className="font-heading text-primary uppercase tracking-[0.3em] text-sm mb-3">How We Work</p>
            <h2 className="text-3xl md:text-5xl uppercase">Our Process</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { n: "01", title: "Discovery", desc: "Understanding your brand, audience, and objectives." },
              { n: "02", title: "Strategy", desc: "Developing a tailored creative strategy." },
              { n: "03", title: "Execution", desc: "Precision production with premium materials." },
              { n: "04", title: "Delivery", desc: "On-time delivery with full quality assurance." },
            ].map((s) => (
              <div key={s.n} className="text-center">
                <span className="font-heading text-5xl text-primary/20">{s.n}</span>
                <h3 className="font-heading text-lg uppercase mt-2 mb-2">{s.title}</h3>
                <p className="text-muted-foreground font-body text-sm">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team (Optional) */}
      <section className="section-dark section-padding">
        <div className="container-tight text-center">
          <Users className="text-primary mx-auto mb-4" size={32} strokeWidth={1.5} />
          <h2 className="text-3xl md:text-5xl uppercase mb-6">Our Team</h2>
          <p className="text-secondary-foreground/70 font-body max-w-xl mx-auto mb-10">
            A dedicated team of designers, print specialists, and project managers committed to delivering excellence on every project.
          </p>
          <Button variant="hero" size="xl" asChild>
            <Link to="/contact">Work With Us</Link>
          </Button>
        </div>
      </section>
    </>
  );
};

export default About;
