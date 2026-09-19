import { Link } from "react-router-dom";
import heroBg from "@/assets/hero-bg.jpg";
import coreCollection from "@/assets/collections/core-collection.jpg";
import setsAndPairs from "@/assets/collections/sets-and-pairs.jpg";
import NewsletterSignup from "@/components/NewsletterSignup";
import { featuredLooks } from "@/data/looks";

export default function Index() {
  return (
    <>
      {/* Hero — full bleed, header overlays this */}
      <section className="w-full h-[75vh] relative -mt-[72px]">
        <img src={heroBg} alt="Cozy stylish outfit for the cold rainy season" className="w-full h-full object-cover" width={1920} height={1080} />
        <div className="absolute inset-0 bg-[hsl(30_30%_22%/0.35)]" />
        <div className="absolute bottom-0 left-0 right-0 px-6 pb-16 md:pb-20">
          <div className="max-w-7xl mx-auto">
            <p className="text-sm uppercase tracking-[0.3em] text-white/80 mb-4">The Cold Season Edit</p>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-light text-white tracking-wide leading-none">
              Stay warm.<br />Stay you.
            </h1>
            <p className="mt-6 max-w-md text-sm md:text-base text-white/80 leading-relaxed">
              Curated, cozy outfits for Kenya's cold and rainy El Niño season — layered for warmth, styled with intention.
            </p>
            <Link
              to="/lookbook"
              className="inline-block mt-8 px-8 py-3 bg-white text-foreground text-sm font-medium uppercase tracking-wider hover:bg-white/90 transition-colors"
            >
              Explore the Lookbook
            </Link>
          </div>
        </div>
      </section>

      {/* Intro line */}
      <section className="max-w-3xl mx-auto px-6 py-24 text-center">
        <h2 className="text-3xl md:text-4xl font-light text-foreground leading-snug">
          When the rains come and the air turns cold, dressing well shouldn't mean dressing dull.
        </h2>
        <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
          Baridi is a lookbook of layered outfits built for the El Niño season — knits, scarves, shells and boots, combined to keep you warm through the misty mornings and the afternoon downpours.
        </p>
      </section>

      {/* Featured Looks */}
      <section className="max-w-7xl mx-auto px-6 pb-24">
        <div className="flex items-end justify-between mb-10">
          <h2 className="text-2xl md:text-3xl font-light text-foreground">Editor's picks</h2>
          <Link to="/lookbook" className="text-sm uppercase tracking-wider text-muted-foreground hover:text-foreground transition-colors">
            View all
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {featuredLooks.map(look => (
            <Link key={look.slug} to={`/look/${look.slug}`} className="group block">
              <div className="bg-[hsl(var(--warm-bg))] aspect-[4/5] overflow-hidden mb-4">
                <img
                  src={look.image}
                  alt={look.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <h3 className="text-base font-light text-foreground mb-1">{look.name}</h3>
              <p className="text-sm text-muted-foreground">{look.warmth} · {look.weather}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Collections — tight gap, polished overlays */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
          <Link to="/collections/cold-layering" className="relative overflow-hidden group block">
            <img
              src={coreCollection}
              alt="Cold Layering"
              className="w-full aspect-[4/5] object-cover transition-transform duration-700 group-hover:scale-[1.03]"
            />
            <div className="absolute inset-0 bg-black/25 group-hover:bg-black/35 transition-colors duration-500 flex flex-col justify-between p-8">
              <span className="text-sm uppercase tracking-widest text-white/80">Layer up</span>
              <h3 className="text-2xl md:text-3xl font-light text-white">Cold Layering</h3>
            </div>
          </Link>
          <Link to="/collections/rain-ready" className="relative overflow-hidden group block">
            <img
              src={setsAndPairs}
              alt="Rain Ready"
              className="w-full aspect-[4/5] object-cover transition-transform duration-700 group-hover:scale-[1.03]"
            />
            <div className="absolute inset-0 bg-black/25 group-hover:bg-black/35 transition-colors duration-500 flex flex-col justify-between p-8">
              <span className="text-sm uppercase tracking-widest text-white/80">For the downpours</span>
              <h3 className="text-2xl md:text-3xl font-light text-white">Rain Ready</h3>
            </div>
          </Link>
        </div>
      </section>

      {/* Newsletter */}
      <div className="mt-12">
        <NewsletterSignup />
      </div>
    </>
  );
}
