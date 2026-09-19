import LookCard from "@/components/LookCard";
import { looks } from "@/data/looks";

export default function Lookbook() {
  return (
    <div className="min-h-screen bg-[hsl(var(--warm-bg))]">
      <div className="py-16 text-center px-6">
        <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground mb-3">The Cold Season Edit</p>
        <h1 className="text-4xl md:text-5xl font-light text-foreground">Lookbook</h1>
        <p className="mt-4 max-w-xl mx-auto text-sm leading-relaxed text-muted-foreground">
          Curated outfit combinations for the cold and rainy El Niño season. Tap any look for the styling notes and the pieces that make it work.
        </p>
      </div>
      <div className="max-w-7xl mx-auto px-6 pb-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {looks.map(look => (
            <LookCard key={look.slug} look={look} />
          ))}
        </div>
      </div>
    </div>
  );
}
