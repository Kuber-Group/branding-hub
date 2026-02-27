import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";
import { toast } from "sonner";

const Contact = () => {
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast.success("Message sent! We'll respond shortly.");
      (e.target as HTMLFormElement).reset();
    }, 1000);
  };

  return (
    <>
      <section className="section-dark section-padding pt-32">
        <div className="container-tight">
          <p className="font-heading text-primary uppercase tracking-[0.3em] text-sm mb-3 animate-fade-up">Get in Touch</p>
          <h1 className="text-4xl md:text-6xl uppercase mb-6 animate-fade-up-delay-1">
            Contact <span className="text-primary">Us</span>
          </h1>
          <p className="text-secondary-foreground/70 font-body text-lg max-w-2xl animate-fade-up-delay-2">
            Ready to start your next project? Reach out and let's make it happen.
          </p>
        </div>
      </section>

      <section className="section-light section-padding">
        <div className="container-tight">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <div>
              <h2 className="text-2xl uppercase mb-8">Get In Touch</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 border border-primary/30 flex items-center justify-center flex-shrink-0">
                    <Phone size={16} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-heading text-sm uppercase tracking-wider mb-1">Phone</h3>
                    <p className="text-muted-foreground font-body text-sm">+263 777 754 077</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 border border-primary/30 flex items-center justify-center flex-shrink-0">
                    <Mail size={16} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-heading text-sm uppercase tracking-wider mb-1">Email</h3>
                    <p className="text-muted-foreground font-body text-sm">info@brandinghub.co.za</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 border border-primary/30 flex items-center justify-center flex-shrink-0">
                    <MapPin size={16} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-heading text-sm uppercase tracking-wider mb-1">Location</h3>
                    <p className="text-muted-foreground font-body text-sm">Office 101, 1st Floor, Masiye Business Suites, Bulawayo, Zimbabwe, 263 Bulawayo, Zimbabwe</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 border border-primary/30 flex items-center justify-center flex-shrink-0">
                    <MessageCircle size={16} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-heading text-sm uppercase tracking-wider mb-1">WhatsApp</h3>
                    <a
                      href="https://wa.me/263777754077"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary font-body text-sm hover:underline"
                    >
                      Chat with us on WhatsApp
                    </a>
                  </div>
                </div>
              </div>

              {/* Static Map Placeholder */}
              <div className="mt-10 aspect-video bg-secondary border border-border flex items-center justify-center">
                <span className="font-heading text-sm uppercase tracking-wider text-secondary-foreground/15 select-none">Map — Bulawayo, ZW</span>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="text-2xl uppercase mb-8">Send a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label className="font-heading text-xs uppercase tracking-widest">Name *</Label>
                  <Input required placeholder="Your name" className="border-border focus:border-primary" />
                </div>
                <div className="space-y-2">
                  <Label className="font-heading text-xs uppercase tracking-widest">Email *</Label>
                  <Input required type="email" placeholder="your@email.com" className="border-border focus:border-primary" />
                </div>
                <div className="space-y-2">
                  <Label className="font-heading text-xs uppercase tracking-widest">Phone</Label>
                  <Input type="tel" placeholder="+263 123 345 678" className="border-border focus:border-primary" />
                </div>
                <div className="space-y-2">
                  <Label className="font-heading text-xs uppercase tracking-widest">Message *</Label>
                  <Textarea
                    required
                    placeholder="How can we help you?"
                    rows={5}
                    className="border-border focus:border-primary resize-none"
                  />
                </div>
                <Button type="submit" variant="hero" size="xl" className="w-full" disabled={loading}>
                  {loading ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
