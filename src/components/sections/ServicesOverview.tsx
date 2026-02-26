import { Palette, Printer, Megaphone } from "lucide-react";
import { Link } from "react-router-dom";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

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
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="relative overflow-hidden" style={{ padding: 0 }}>
      {/* Deep red gradient background */}
      <div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse at 30% 20%, rgba(164,22,26,0.6) 0%, transparent 60%),
            radial-gradient(ellipse at 70% 80%, rgba(92,10,10,0.8) 0%, transparent 60%),
            linear-gradient(135deg, #5C0A0A 0%, #7A0C0C 30%, #A4161A 55%, #7A0C0C 75%, #5C0A0A 100%)
          `,
        }}
      />

      {/* Chevron pattern overlay - Zimbabwean inspired */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          opacity: 0.08,
          backgroundImage: `
            linear-gradient(60deg, transparent 46%, rgba(255,255,255,0.5) 46%, rgba(255,255,255,0.5) 54%, transparent 54%),
            linear-gradient(-60deg, transparent 46%, rgba(255,255,255,0.5) 46%, rgba(255,255,255,0.5) 54%, transparent 54%),
            linear-gradient(60deg, transparent 46%, rgba(255,255,255,0.3) 46%, rgba(255,255,255,0.3) 54%, transparent 54%),
            linear-gradient(-60deg, transparent 46%, rgba(255,255,255,0.3) 46%, rgba(255,255,255,0.3) 54%, transparent 54%)
          `,
          backgroundSize: '80px 48px, 80px 48px, 80px 48px, 80px 48px',
          backgroundPosition: '0 0, 0 0, 40px 24px, 40px 24px',
        }}
      />

      {/* Diamond / triangular rhythm overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          opacity: 0.05,
          backgroundImage: `
            linear-gradient(45deg, transparent 40%, rgba(193,18,31,0.6) 40%, rgba(193,18,31,0.6) 42%, transparent 42%),
            linear-gradient(-45deg, transparent 40%, rgba(193,18,31,0.6) 40%, rgba(193,18,31,0.6) 42%, transparent 42%),
            linear-gradient(45deg, transparent 58%, rgba(193,18,31,0.6) 58%, rgba(193,18,31,0.6) 60%, transparent 60%),
            linear-gradient(-45deg, transparent 58%, rgba(193,18,31,0.6) 58%, rgba(193,18,31,0.6) 60%, transparent 60%)
          `,
          backgroundSize: '120px 120px',
        }}
      />

      {/* Noise/grain texture */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          opacity: 0.03,
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E")`,
          backgroundSize: '128px 128px',
        }}
      />

      {/* Diagonal lighting gradient */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'linear-gradient(135deg, rgba(255,255,255,0.04) 0%, transparent 50%, rgba(0,0,0,0.15) 100%)',
        }}
      />

      {/* Radial vignette */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.35) 100%)',
        }}
      />

      {/* Content */}
      <div className="relative z-10 section-padding">
        <div className="container-tight" ref={ref}>
          <div className={`text-center mb-16 scroll-hidden ${isVisible ? "scroll-visible" : ""}`}>
            <p className="font-heading text-white/70 uppercase tracking-[0.3em] text-sm mb-3">What We Do</p>
            <h2 className="text-3xl md:text-5xl uppercase text-white">Core Services</h2>
            {/* Accent underline */}
            <div className="mx-auto mt-4 h-[2px] w-24" style={{
              background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.8), transparent)',
            }} />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((svc, i) => (
              <Link
                to="/services"
                key={svc.title}
                className={`group relative p-8 rounded-xl transition-all duration-300 hover:-translate-y-1 scroll-hidden ${isVisible ? "scroll-visible" : ""}`}
                style={{
                  transitionDelay: isVisible ? `${(i + 1) * 150}ms` : "0ms",
                  background: 'rgba(255,255,255,0.06)',
                  backdropFilter: 'blur(10px)',
                  WebkitBackdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255,255,255,0.12)',
                  boxShadow: '0 4px 30px rgba(0,0,0,0.15)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.border = '1px solid rgba(255,255,255,0.25)';
                  e.currentTarget.style.boxShadow = '0 8px 40px rgba(193,18,31,0.2), 0 0 20px rgba(193,18,31,0.08)';
                  e.currentTarget.style.background = 'rgba(255,255,255,0.1)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.border = '1px solid rgba(255,255,255,0.12)';
                  e.currentTarget.style.boxShadow = '0 4px 30px rgba(0,0,0,0.15)';
                  e.currentTarget.style.background = 'rgba(255,255,255,0.06)';
                }}
              >
                <svc.icon className="text-white/90 mb-6 group-hover:text-white transition-colors" size={32} strokeWidth={1.5} />
                <h3 className="text-xl uppercase mb-3 text-white group-hover:text-white transition-colors">{svc.title}</h3>
                <p className="text-white/60 font-body text-sm leading-relaxed">{svc.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;
