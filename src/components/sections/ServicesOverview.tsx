import { Palette, Printer, Megaphone } from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  {
    icon: Palette,
    title: "Branding & Corporate",
    description: "Logo design, corporate identity, brand guidelines, business cards, and stationery that define your professional image.",
  },
  {
    icon: Printer,
    title: "Printing & Apparel",
    description: "High-quality digital and offset printing, custom apparel, promotional items, and packaging solutions.",
  },
  {
    icon: Megaphone,
    title: "Signage & Large Format",
    description: "Indoor and outdoor signage, banners, vehicle wraps, and large format printing for maximum visibility.",
  },
];

const ServicesOverview = () => {
  return (
    <section className="section-light section-padding">
      <div className="container-tight">
        <div className="text-center mb-16">
          <p className="font-heading text-primary uppercase tracking-[0.3em] text-sm mb-3">What We Do</p>
          <h2 className="text-3xl md:text-5xl uppercase">Core Services</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((svc, i) => (
            <Link
              to="/services"
              key={svc.title}
              className={`group p-8 border border-border hover:border-primary/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/5 animate-fade-up-delay-${i + 1}`}
            >
              <svc.icon className="text-primary mb-6" size={32} strokeWidth={1.5} />
              <h3 className="text-xl uppercase mb-3 group-hover:text-primary transition-colors">{svc.title}</h3>
              <p className="text-muted-foreground font-body text-sm leading-relaxed">{svc.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;
