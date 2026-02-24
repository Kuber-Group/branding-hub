import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/bh-logo.png";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "Services", to: "/services" },
  { label: "Portfolio", to: "/portfolio" },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-secondary/95 backdrop-blur-sm border-b border-secondary-foreground/10">
      <nav className="container-tight flex items-center justify-between h-16 px-4 md:px-8 lg:px-16">
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="Branding Hub" className="h-10 w-auto" />
          <span className="font-heading text-xl tracking-wider text-secondary-foreground uppercase">
            Branding<span className="text-primary">Hub</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`font-heading text-sm uppercase tracking-widest transition-colors duration-200 ${
                location.pathname === link.to
                  ? "text-primary"
                  : "text-secondary-foreground/80 hover:text-primary"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Button variant="hero" size="sm" asChild>
            <Link to="/quote">Get a Quote</Link>
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-secondary-foreground"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-secondary border-t border-secondary-foreground/10">
          <div className="flex flex-col px-4 py-4 gap-3">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setOpen(false)}
                className={`font-heading text-sm uppercase tracking-widest py-2 transition-colors ${
                  location.pathname === link.to
                    ? "text-primary"
                    : "text-secondary-foreground/80"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Button variant="hero" size="sm" asChild className="mt-2">
              <Link to="/quote" onClick={() => setOpen(false)}>Get a Quote</Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
