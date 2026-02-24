const testimonials = [
  {
    quote: "BrandForge delivered our entire corporate identity in record time. The quality exceeded our expectations.",
    name: "Sarah Molefe",
    role: "Marketing Director, Apex Holdings",
  },
  {
    quote: "From vehicle wraps to office signage, they handled everything with precision and professionalism.",
    name: "James Ndlovu",
    role: "Operations Manager, FleetPro",
  },
  {
    quote: "Outstanding print quality and turnaround time. They've been our go-to partner for three years.",
    name: "Thandi Khumalo",
    role: "CEO, Urban Style Co.",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="section-dark section-padding">
      <div className="container-tight">
        <div className="text-center mb-16">
          <p className="font-heading text-primary uppercase tracking-[0.3em] text-sm mb-3">Testimonials</p>
          <h2 className="text-3xl md:text-5xl uppercase">What Our Clients Say</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div key={t.name} className="p-8 border border-secondary-foreground/10 hover:border-primary/30 transition-all duration-300">
              <div className="text-primary text-4xl font-heading mb-4">"</div>
              <p className="text-secondary-foreground/80 font-body text-sm leading-relaxed mb-6">{t.quote}</p>
              <div>
                <p className="font-heading text-sm uppercase tracking-wider">{t.name}</p>
                <p className="text-secondary-foreground/50 font-body text-xs">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
