import { coldLayeringLooks } from "@/data/looks";
import LookCard from "@/components/LookCard";
import coreCollectionImg from "@/assets/collections/core-collection.jpg";

export default function CoreCollection() {
  return (
    <>
      {/* Hero */}
      <section className="relative w-full h-[60vh]">
        <img src={coreCollectionImg} alt="Cold Layering" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
          <div className="text-center text-white">
            <p className="text-sm uppercase tracking-widest mb-3">Layer up</p>
            <h1 className="text-4xl md:text-5xl font-light">Cold Layering</h1>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="max-w-3xl mx-auto px-6 py-16 text-center">
        <h2 className="text-2xl md:text-3xl font-light text-foreground mb-6">
          Warmth, built in layers.
        </h2>
        <p className="text-base leading-relaxed text-muted-foreground mb-6">
          When the cold settles in but the skies stay dry, layering is everything. These looks pair soft knits with scarves and vests — pieces you can add, remove, and rearrange as the day warms and cools. The goal is warmth without bulk, and texture that earns its place.
        </p>
        <p className="text-base leading-relaxed text-muted-foreground">
          Start with a fine base, build the knit, and let a scarf or wrap finish the silhouette. Each look here is tuned for the cold, misty mornings of the season.
        </p>
      </section>

      {/* Looks */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {coldLayeringLooks.map(look => (
            <LookCard key={look.slug} look={look} />
          ))}
        </div>
      </section>
    </>
  );
}
