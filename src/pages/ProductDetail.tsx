import { useParams, Navigate, Link } from "react-router-dom";
import { getLookBySlug, getRelatedLooks } from "@/data/looks";
import { useToast } from "@/hooks/use-toast";
import LookCard from "@/components/LookCard";

export default function LookDetail() {
  const { slug } = useParams<{ slug: string }>();
  const look = getLookBySlug(slug || "");
  const { toast } = useToast();

  if (!look) return <Navigate to="/lookbook" replace />;

  const related = getRelatedLooks(look.slug, 3);

  const handleSave = () => {
    toast({
      title: "Saved to your wishlist",
      description: `${look.name} added to your saved looks.`,
    });
  };

  return (
    <>
      <section className="max-w-6xl mx-auto px-6 py-8">
        <nav className="text-sm text-muted-foreground mb-6">
          <Link to="/lookbook" className="hover:text-foreground transition-colors">Lookbook</Link>
          <span className="mx-2">›</span>
          <span className="text-foreground">{look.name}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Image */}
          <div className="w-full aspect-[4/5] bg-warm-bg">
            <img src={look.image} alt={look.name} className="w-full h-full object-cover" />
          </div>

          {/* Info */}
          <div className="flex flex-col">
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="text-[11px] uppercase tracking-wider px-3 py-1 bg-secondary text-secondary-foreground">{look.occasion}</span>
              <span className="text-[11px] uppercase tracking-wider px-3 py-1 bg-secondary text-secondary-foreground">{look.warmth}</span>
              <span className="text-[11px] uppercase tracking-wider px-3 py-1 bg-secondary text-secondary-foreground">{look.weather}</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-light text-foreground mb-6">{look.name}</h1>
            <p className="text-base leading-relaxed text-muted-foreground mb-6">{look.description}</p>

            <div className="mb-8">
              <h2 className="text-sm uppercase tracking-wider text-foreground mb-3">How to style it</h2>
              <p className="text-sm leading-relaxed text-muted-foreground">{look.styling}</p>
            </div>

            <button
              onClick={handleSave}
              className="self-start px-8 py-3 bg-primary text-primary-foreground text-sm font-medium uppercase tracking-wider hover:opacity-90 transition-opacity"
            >
              Save look
            </button>
          </div>
        </div>
      </section>

      {/* The Pieces */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <h2 className="text-sm uppercase tracking-wider text-foreground mb-6">The Pieces</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {look.pieces.map((piece, i) => (
            <div key={i}>
              <div className="bg-[hsl(var(--warm-bg))] aspect-square overflow-hidden mb-3">
                <img src={piece.image} alt={piece.name} className="w-full h-full object-cover" loading="lazy" />
              </div>
              <p className="text-sm text-foreground">{piece.name}</p>
            </div>
          ))}
        </div>
        <p className="text-xs text-muted-foreground mt-6 max-w-xl leading-relaxed">
          Baridi is a styling lookbook for inspiration. Piece names are descriptive — find similar items from your favourite makers and retailers.
        </p>
      </section>

      {related.length > 0 && (
        <section className="max-w-6xl mx-auto px-6 py-16">
          <h2 className="text-2xl font-light text-foreground mb-8">More looks to try</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {related.map(l => (
              <LookCard key={l.slug} look={l} />
            ))}
          </div>
        </section>
      )}
    </>
  );
}
