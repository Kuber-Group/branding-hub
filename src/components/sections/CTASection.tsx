import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <section className="section-light section-padding">
      <div className="container-tight text-center">
        <h2 className="text-3xl md:text-5xl uppercase mb-6">
          Ready to <span className="text-primary">Elevate</span> Your Brand?
        </h2>
        <p className="text-muted-foreground font-body text-lg max-w-xl mx-auto mb-10">
          Get a custom quote for your branding, printing, or signage project. Fast turnaround guaranteed.
        </p>
        <Button variant="hero" size="xl" asChild>
          <Link to="/quote">Get Your Custom Quote Today</Link>
        </Button>
      </div>
    </section>
  );
};

export default CTASection;
