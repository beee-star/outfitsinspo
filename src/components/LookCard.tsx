import { Link } from "react-router-dom";
import type { Look } from "@/data/looks";

const warmthTone: Record<Look["warmth"], string> = {
  Mild: "text-muted-foreground",
  Warm: "text-foreground",
  Cozy: "text-accent",
  Heavy: "text-accent",
};

export default function LookCard({ look }: { look: Look }) {
  return (
    <Link to={`/look/${look.slug}`} className="group relative block">
      <div className="relative overflow-hidden bg-[hsl(var(--warm-bg))]">
        <img
          src={look.image}
          alt={look.name}
          className="w-full aspect-[4/5] object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute top-3 left-3 flex gap-2">
          {look.badge === "editor" && (
            <span className="bg-white/90 text-foreground text-[10px] uppercase tracking-wider px-2 py-1">Editor's pick</span>
          )}
          {look.badge === "new" && (
            <span className="bg-accent text-accent-foreground text-[10px] uppercase tracking-wider px-2 py-1">New</span>
          )}
        </div>
      </div>
      <div className="mt-4">
        <h3 className="text-base font-medium text-foreground">{look.name}</h3>
        <p className="text-sm text-muted-foreground mt-1">{look.occasion}</p>
        <p className={`text-xs mt-1 ${warmthTone[look.warmth]}`}>
          {look.warmth} · {look.weather}
        </p>
      </div>
    </Link>
  );
}
