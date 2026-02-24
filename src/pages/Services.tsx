import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Palette, Printer, Megaphone, Car, Gift, FileText, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Palette,
    title: "Branding & Corporate Identity",
    description: "Complete brand development including logo design, brand guidelines, business cards, letterheads, and corporate stationery.",
    features: ["Logo Design", "Brand Guidelines", "Business Cards", "Corporate Stationery", "Brand Strategy"],
  },
  {
    icon: Printer,
    title: "Printing & Apparel",
    description: "High-quality digital and offset printing services, custom apparel, uniforms, and promotional merchandise.",
    features: ["Digital Printing", "Offset Printing", "Custom Apparel", "Uniforms", "Promotional Items"],
  },
  {
    icon: Megaphone,
    title: "Signage & Large Format",
    description: "Indoor and outdoor signage, banners, pull-up stands, wall graphics, and large format printing.",
    features: ["Outdoor Signage", "Indoor Displays", "Banners & Flags", "Wall Graphics", "Exhibition Stands"],
  },
  {
    icon: Car,
    title: "Vehicle Branding",
    description: "Full and partial vehicle wraps, fleet branding, magnetic signage, and vehicle graphics.",
    features: ["Full Wraps", "Partial Wraps", "Fleet Branding", "Magnetic Signs", "Window Graphics"],
  },
  {
    icon: Gift,
    title: "Corporate Gifts",
    description: "Branded corporate gifts, promotional products, packaging, and premium presentation items.",
    features: ["Branded Gifts", "Promo Products", "Custom Packaging", "Award Items", "Event Merchandise"],
  },
  {
    icon: FileText,
    title: "Design Services",
    description: "Professional graphic design for all your marketing needs — brochures, flyers, social media, and more.",
    features: ["Brochures", "Flyers", "Social Media", "Infographics", "Presentations"],
  },
];

const processSteps = [
  { step: "01", title: "Consultation", desc: "We discuss your needs, goals, and vision." },
  { step: "02", title: "Concept & Design", desc: "Our team creates designs for your approval." },
  { step: "03", title: "Production", desc: "High-quality production with premium materials." },
  { step: "04", title: "Delivery", desc: "On-time delivery with quality assurance." },
];

const Services = () => {
  return (
    <>
      {/* Hero */}
      <section className="section-dark section-padding pt-32">
        <div className="container-tight">
          <p className="font-heading text-primary uppercase tracking-[0.3em] text-sm mb-3 animate-fade-up">Our Services</p>
          <h1 className="text-4xl md:text-6xl uppercase mb-6 animate-fade-up-delay-1">
            What We <span className="text-primary">Deliver</span>
          </h1>
          <p className="text-secondary-foreground/70 font-body text-lg max-w-2xl animate-fade-up-delay-2">
            Comprehensive branding, printing, and signage solutions tailored to elevate your business presence.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-light section-padding">
        <div className="container-tight">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((svc) => (
              <div key={svc.title} className="group p-8 border border-border hover:border-primary/30 transition-all duration-300 hover:-translate-y-1">
                <svc.icon className="text-primary mb-6" size={28} strokeWidth={1.5} />
                <h2 className="text-lg uppercase mb-3 group-hover:text-primary transition-colors">{svc.title}</h2>
                <p className="text-muted-foreground font-body text-sm leading-relaxed mb-6">{svc.description}</p>
                <ul className="space-y-1">
                  {svc.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-muted-foreground text-xs font-body">
                      <ArrowRight size={10} className="text-primary" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section-dark section-padding">
        <div className="container-tight">
          <div className="text-center mb-16">
            <p className="font-heading text-primary uppercase tracking-[0.3em] text-sm mb-3">How We Work</p>
            <h2 className="text-3xl md:text-5xl uppercase">Our Process</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {processSteps.map((s) => (
              <div key={s.step} className="text-center">
                <span className="font-heading text-5xl text-primary/30">{s.step}</span>
                <h3 className="font-heading text-lg uppercase mt-2 mb-2">{s.title}</h3>
                <p className="text-secondary-foreground/60 font-body text-sm">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-light section-padding text-center">
        <div className="container-tight">
          <h2 className="text-3xl md:text-5xl uppercase mb-6">
            Let's Build Your <span className="text-primary">Brand</span>
          </h2>
          <Button variant="hero" size="xl" asChild>
            <Link to="/quote">Request a Quote</Link>
          </Button>
        </div>
      </section>
    </>
  );
};

export default Services;
