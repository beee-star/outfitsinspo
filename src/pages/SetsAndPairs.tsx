import { rainReadyLooks } from "@/data/looks";
import LookCard from "@/components/LookCard";
import setsImg from "@/assets/collections/sets-and-pairs.jpg";

export default function SetsAndPairs() {
  return (
    <>
      {/* Hero */}
      <section className="relative w-full h-[60vh]">
        <img src={setsImg} alt="Rain Ready" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
          <div className="text-center text-white">
            <p className="text-sm uppercase tracking-widest mb-3">For the downpours</p>
            <h1 className="text-4xl md:text-5xl font-light">Rain Ready</h1>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="max-w-3xl mx-auto px-6 py-16 text-center">
        <h2 className="text-2xl md:text-3xl font-light text-foreground mb-6">
          Made for the rain.
        </h2>
        <p className="text-base leading-relaxed text-muted-foreground mb-6">
          El Niño brings the downpours, and these looks are built to meet them. A hard shell against the wet, soft knits beneath for the chill that follows, and boots that take the puddles in stride. Warmth and water, handled.
        </p>
        <p className="text-base leading-relaxed text-muted-foreground">
          The rule is simple: one waterproof layer on the outside, three cozy ones within. Let the knit accessories carry the colour on a grey day.
        </p>
      </section>

      {/* Looks */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {rainReadyLooks.map(look => (
            <LookCard key={look.slug} look={look} />
          ))}
        </div>
      </section>
    </>
  );
}
