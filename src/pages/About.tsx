import aboutBg from "@/assets/about-bg.jpg";

export default function About() {
  return (
    <article className="max-w-3xl mx-auto px-6 pt-8 pb-32">
      <h1 className="text-4xl md:text-5xl font-light text-foreground mb-16 leading-tight">
        A lookbook for the cold & rainy season.
      </h1>

      <div className="space-y-6 text-sm leading-relaxed text-muted-foreground mb-24">
        <p>
          Baridi — "cold" in Swahili — began with a simple idea: that the cold and rainy El Niño season is no reason to dress badly. When the mornings turn misty and the afternoons bring downpours, most of us reach for whatever is warm and closest. Baridi is an alternative — a curated lookbook of outfits that are both cozy and considered.
        </p>
        <p>
          This is not a shop. It's a styling guide. Each look combines layers — knits, scarves, shells, boots — chosen for how they work together in real Kenyan weather: the chill of a June morning, the wet of an October storm, the cool of an air-conditioned office in between. We name the pieces and explain the thinking, so you can recreate the look from your own wardrobe or your favourite makers.
        </p>
      </div>

      <div className="w-full mb-24">
        <img
          src={aboutBg}
          alt="Cozy layered knitwear for the cold season"
          className="w-full h-auto object-cover"
        />
      </div>

      <div className="space-y-6 text-sm leading-relaxed text-muted-foreground mb-16">
        <p>
          Our palette leans warm and earthy — oatmeal, camel, rust, charcoal, moss — tones that layer effortlessly and sit well against grey skies. We mix modern minimal silhouettes with the texture of natural fibres and, now and then, the colour and pattern of African heritage textiles. Cozy and contemporary, with roots.
        </p>
        <p>
          New looks are added through the season as the weather shifts. Save the ones you love, revisit them when the rain returns, and dress for the cold on your own terms.
        </p>
      </div>

      <p className="text-sm text-muted-foreground">
        A styling lookbook by Baridi
      </p>
    </article>
  );
}
