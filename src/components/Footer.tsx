import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";
import logo from "@/assets/bh-logo.png";

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container-tight section-padding pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img src={logo} alt="Branding Hub" className="h-10 w-auto" />
              <h3 className="text-2xl uppercase tracking-wider">
                Branding<span className="text-primary">Hub</span>
              </h3>
            </div>
            <p className="text-secondary-foreground/70 font-body text-sm leading-relaxed">
              Premium branding, printing, and signage solutions. We deliver professional visual identity with speed, quality, and precision.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm uppercase tracking-widest mb-4 text-primary">Quick Links</h4>
            <ul className="space-y-2 font-body text-sm">
              {[
                { label: "Home", to: "/" },
                { label: "Services", to: "/services" },
                { label: "Portfolio", to: "/portfolio" },
                { label: "About Us", to: "/about" },
                { label: "Request a Quote", to: "/quote" },
              ].map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="text-secondary-foreground/70 hover:text-primary transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm uppercase tracking-widest mb-4 text-primary">Services</h4>
            <ul className="space-y-2 font-body text-sm text-secondary-foreground/70">
              <li>Branding & Corporate</li>
              <li>Printing & Apparel</li>
              <li>Signage & Large Format</li>
              <li>Vehicle Branding</li>
              <li>Corporate Gifts</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm uppercase tracking-widest mb-4 text-primary">Contact</h4>
            <ul className="space-y-3 font-body text-sm">
              <li className="flex items-center gap-2 text-secondary-foreground/70">
                <Phone size={14} className="text-primary" />
                +27 11 000 0000
              </li>
              <li className="flex items-center gap-2 text-secondary-foreground/70">
                <Mail size={14} className="text-primary" />
                info@brandinghub.co.za
              </li>
              <li className="flex items-start gap-2 text-secondary-foreground/70">
                <MapPin size={14} className="text-primary mt-0.5" />
                Johannesburg, South Africa
              </li>
            </ul>
            <a
              href="https://wa.me/27110000000"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-4 px-4 py-2 bg-primary/10 border border-primary/20 text-primary text-sm font-heading uppercase tracking-wider hover:bg-primary hover:text-primary-foreground transition-all duration-200"
            >
              WhatsApp Us
            </a>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-secondary-foreground/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-secondary-foreground/50 text-xs font-body">
            © {new Date().getFullYear()} Branding Hub. All rights reserved.
          </p>
          <div className="flex gap-6">
            {["Facebook", "Instagram", "LinkedIn"].map((s) => (
              <a key={s} href="#" className="text-secondary-foreground/50 hover:text-primary text-xs font-heading uppercase tracking-wider transition-colors">
                {s}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
