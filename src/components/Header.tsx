import { Link, useLocation } from "react-router-dom";
import { Menu, X, Instagram } from "lucide-react";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import ThemeToggle from "@/components/ThemeToggle";

const navLinks = [
  { to: "/lookbook", label: "Lookbook" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

export default function Header() {
  const { pathname } = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const isHome = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const transparent = isHome && !scrolled && !mobileOpen;

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        transparent
          ? "bg-transparent border-b border-transparent"
          : "bg-background border-b border-border shadow-sm"
      )}
    >
      <div className="flex items-center justify-between px-6 py-4 max-w-7xl mx-auto">
        <Link
          to="/"
          className={cn(
            "text-2xl font-light tracking-[0.2em] uppercase transition-colors",
            transparent ? "text-white" : "text-foreground"
          )}
        >
          Baridi
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map(link => (
            <Link
              key={link.to}
              to={link.to}
              className={cn(
                "text-sm uppercase tracking-wider transition-colors",
                transparent
                  ? "text-white/80 hover:text-white"
                  : "text-muted-foreground hover:text-foreground",
                pathname === link.to && (transparent ? "text-white font-medium" : "text-foreground font-medium")
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-5">
          <ThemeToggle transparent={transparent} />
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <Instagram className={cn("w-[18px] h-[18px] transition-colors", transparent ? "text-white/80 hover:text-white" : "text-muted-foreground hover:text-foreground")} />
          </a>
        </div>

        {/* Mobile */}
        <div className="flex md:hidden items-center gap-4">
          <ThemeToggle transparent={transparent} />
          <button onClick={() => setMobileOpen(!mobileOpen)} aria-label="Toggle menu">
            {mobileOpen
              ? <X className={cn("w-6 h-6", transparent ? "text-white" : "text-foreground")} />
              : <Menu className={cn("w-6 h-6", transparent ? "text-white" : "text-foreground")} />
            }
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <nav className="md:hidden border-t border-border bg-background px-6 py-6 space-y-4">
          {navLinks.map(link => (
            <Link
              key={link.to}
              to={link.to}
              onClick={() => setMobileOpen(false)}
              className={cn(
                "block text-sm uppercase tracking-wider text-muted-foreground",
                pathname === link.to && "text-foreground font-medium"
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
