import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";

const serviceTypes = [
  "Branding & Corporate Identity",
  "Printing & Apparel",
  "Signage & Large Format",
  "Vehicle Branding",
  "Corporate Gifts",
  "Design Services",
];

const Quote = () => {
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    // Simulate submission
    setTimeout(() => {
      setLoading(false);
      toast.success("Quote request submitted! We'll get back to you within 24 hours.");
      (e.target as HTMLFormElement).reset();
    }, 1500);
  };

  return (
    <>
      <section className="section-dark section-padding pt-32">
        <div className="container-tight">
          <p className="font-heading text-primary uppercase tracking-[0.3em] text-sm mb-3 animate-fade-up">Get Started</p>
          <h1 className="text-4xl md:text-6xl uppercase mb-6 animate-fade-up-delay-1">
            Request a <span className="text-primary">Quote</span>
          </h1>
          <p className="text-secondary-foreground/70 font-body text-lg max-w-2xl animate-fade-up-delay-2">
            Tell us about your project and we'll get back to you with a detailed quote within 24 hours.
          </p>
        </div>
      </section>

      <section className="section-light section-padding">
        <div className="container-tight max-w-2xl">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label className="font-heading text-xs uppercase tracking-widest">Contact Name *</Label>
                <Input required placeholder="Your full name" className="border-border focus:border-primary" />
              </div>
              <div className="space-y-2">
                <Label className="font-heading text-xs uppercase tracking-widest">Email *</Label>
                <Input required type="email" placeholder="your@email.com" className="border-border focus:border-primary" />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label className="font-heading text-xs uppercase tracking-widest">Phone *</Label>
                <Input required type="tel" placeholder="+263 123 456 7890" className="border-border focus:border-primary" />
              </div>
              <div className="space-y-2">
                <Label className="font-heading text-xs uppercase tracking-widest">Service Type *</Label>
                <Select required>
                  <SelectTrigger className="border-border focus:border-primary">
                    <SelectValue placeholder="Select service" />
                  </SelectTrigger>
                  <SelectContent>
                    {serviceTypes.map((s) => (
                      <SelectItem key={s} value={s}>{s}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label className="font-heading text-xs uppercase tracking-widest">Quantity</Label>
                <Input type="number" placeholder="Estimated quantity" className="border-border focus:border-primary" />
              </div>
              <div className="space-y-2">
                <Label className="font-heading text-xs uppercase tracking-widest">Deadline</Label>
                <Input type="date" className="border-border focus:border-primary" />
              </div>
            </div>

            <div className="space-y-2">
              <Label className="font-heading text-xs uppercase tracking-widest">Project Description *</Label>
              <Textarea
                required
                placeholder="Describe your project requirements, specifications, and any special needs..."
                rows={5}
                className="border-border focus:border-primary resize-none"
              />
            </div>

            <div className="space-y-2">
              <Label className="font-heading text-xs uppercase tracking-widest">File Upload</Label>
              <Input type="file" accept=".pdf,.jpg,.png,.ai,.psd,.eps" className="border-border" />
              <p className="text-muted-foreground text-xs font-body">Accepted: PDF, JPG, PNG, AI, PSD, EPS (max 10MB)</p>
            </div>

            <Button type="submit" variant="hero" size="xl" className="w-full" disabled={loading}>
              {loading ? "Submitting..." : "Submit Quote Request"}
            </Button>
          </form>
        </div>
      </section>
    </>
  );
};

export default Quote;
