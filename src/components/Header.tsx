import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Phone, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/projects", label: "Projects" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) =>
    path === "/" ? location.pathname === "/" : location.pathname.startsWith(path);

  return (
    <header className="sticky top-0 z-50 w-full shadow-sm bg-card">
      {/* Top bar */}
      <div className="bg-primary text-primary-foreground text-sm py-2 px-4">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <span className="hidden sm:block font-medium tracking-wide">
            Your Garden. Our Passion.
          </span>
          <a
            href="tel:0614567890"
            className="flex items-center gap-2 font-semibold hover:opacity-80 transition-opacity ml-auto sm:ml-0"
          >
            <Phone className="w-3.5 h-3.5" />
            061 456 7890
          </a>
        </div>
      </div>

      {/* Main nav */}
      <div className="bg-card border-b border-border">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          {/* Text wordmark */}
          <Link to="/" className="flex flex-col leading-tight group">
            <span className="font-heading font-bold text-xl tracking-tight text-foreground group-hover:text-primary transition-colors">
              Brennan Landscaping
            </span>
            <span className="text-xs font-medium text-muted-foreground tracking-widest uppercase mt-0.5">
              & Garden Design
            </span>
            <span className="block h-0.5 w-8 bg-accent mt-1 rounded-full" />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  isActive(link.to)
                    ? "text-primary border-b-2 border-primary pb-0.5"
                    : "text-foreground"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="tel:0614567890"
              className="flex items-center gap-2 text-sm font-semibold text-primary hover:opacity-80 transition-opacity"
            >
              <Phone className="w-4 h-4" />
              061 456 7890
            </a>
            <Button asChild className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold px-5">
              <Link to="/contact">Get a Free Quote</Link>
            </Button>
          </div>

          {/* Mobile menu toggle */}
          <button
            className="md:hidden p-2 rounded-md text-foreground hover:bg-muted transition-colors"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="md:hidden border-t border-border bg-card px-4 pt-3 pb-5">
            <nav className="flex flex-col gap-1 mb-5">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={() => setMobileOpen(false)}
                  className={`px-3 py-2.5 rounded-md text-sm font-medium transition-colors hover:bg-muted hover:text-primary ${
                    isActive(link.to)
                      ? "text-primary bg-muted font-semibold"
                      : "text-foreground"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            <div className="flex flex-col gap-3 pt-4 border-t border-border">
              <a
                href="tel:0614567890"
                className="flex items-center gap-2 text-sm font-semibold text-primary hover:opacity-80 transition-opacity px-3"
              >
                <Phone className="w-4 h-4" />
                061 456 7890
              </a>
              <Button
                asChild
                className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold w-full"
              >
                <Link to="/contact" onClick={() => setMobileOpen(false)}>
                  Get a Free Quote
                </Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}