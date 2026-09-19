import { Link } from "react-router-dom";
import { Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-background py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr] gap-12">
          <div>
            <h3 className="text-2xl font-light tracking-[0.2em] uppercase text-foreground mb-3">Baridi</h3>
            <p className="text-sm text-muted-foreground">Cozy, stylish looks for the cold & rainy season.</p>
            <div className="flex gap-4 mt-6">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <Instagram className="w-[18px] h-[18px] text-muted-foreground hover:text-foreground transition-colors" />
              </a>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <Link to="/lookbook" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Lookbook</Link>
            <Link to="/collections/cold-layering" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Cold Layering</Link>
            <Link to="/collections/rain-ready" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Rain Ready</Link>
          </div>
          <div className="flex flex-col gap-3">
            <Link to="/about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">About</Link>
            <Link to="/contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Contact</Link>
          </div>
        </div>
        <p className="text-xs text-muted-foreground mt-12">© {new Date().getFullYear()} Baridi. A styling lookbook — for inspiration.</p>
      </div>
    </footer>
  );
}
