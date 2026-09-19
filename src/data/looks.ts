import morningCommute from "@/assets/looks/morning-commute.jpg";
import weekendWarmth from "@/assets/looks/weekend-warmth.jpg";
import rainyDayEdit from "@/assets/looks/rainy-day-edit.jpg";
import eveningLayer from "@/assets/looks/evening-layer.jpg";
import heritageLayer from "@/assets/looks/heritage-layer.jpg";
import officeCozy from "@/assets/looks/office-cozy.jpg";
import slowMorning from "@/assets/looks/slow-morning.jpg";
import cityDusk from "@/assets/looks/city-dusk.jpg";
import highlandEscape from "@/assets/looks/highland-escape.jpg";
import cafeHours from "@/assets/looks/cafe-hours.jpg";

import cardiganImg from "@/assets/products/spring-blade.jpg";
import cableSweaterImg from "@/assets/products/classic-set.jpg";
import scarfSetImg from "@/assets/products/country-feast-set.jpg";
import beanieImg from "@/assets/products/earth-sky-planter.jpg";
import vestImg from "@/assets/products/golden-blush-cup.jpg";
import pulloverImg from "@/assets/products/harvest-moon-cup.jpg";
import wrapImg from "@/assets/products/milk-dip-cup.jpg";
import mittensImg from "@/assets/products/salt-spout.jpg";
import socksImg from "@/assets/products/golden-mist-pair.jpg";

export interface Piece {
  name: string;
  image: string;
}

export interface Look {
  slug: string;
  name: string;
  image: string;
  occasion: string;
  warmth: "Mild" | "Warm" | "Cozy" | "Heavy";
  weather: string;
  description: string;
  styling: string;
  pieces: Piece[];
  badge?: "editor" | "new";
}

const p = {
  cardigan: { name: "Moss Stitch Cardigan", image: cardiganImg },
  cableSweater: { name: "Cable Knit Sweater", image: cableSweaterImg },
  scarfSet: { name: "Merino Wool Scarf", image: scarfSetImg },
  beanie: { name: "Alpaca Blend Beanie", image: beanieImg },
  vest: { name: "Ribbed Wool Vest", image: vestImg },
  pullover: { name: "Chunky Knit Pullover", image: pulloverImg },
  wrap: { name: "Cashmere Wrap", image: wrapImg },
  mittens: { name: "Heritage Mittens", image: mittensImg },
  socks: { name: "Lambswool Socks", image: socksImg },
};

export const looks: Look[] = [
  {
    slug: "morning-commute",
    name: "The Morning Commute",
    image: morningCommute,
    occasion: "Daily commute",
    warmth: "Warm",
    weather: "Cold & misty mornings",
    description:
      "Layered for the damp chill of an early Nairobi morning. A chunky cable knit anchors the look, with a merino scarf wound close against the mist and an alpaca beanie to hold the warmth in.",
    styling:
      "Build from the inside out: a soft base layer, then the knit, then the scarf. Let the beanie sit slightly slouched for an effortless line.",
    pieces: [p.cableSweater, p.scarfSet, p.beanie],
    badge: "editor",
  },
  {
    slug: "weekend-warmth",
    name: "Weekend Warmth",
    image: weekendWarmth,
    occasion: "Slow weekends",
    warmth: "Cozy",
    weather: "Overcast & cool",
    description:
      "An unhurried look for grey days. The chunky herringbone pullover carries the weight of the cold, balanced by a rust lambswool scarf that lifts the whole palette.",
    styling:
      "Keep the silhouette relaxed — generous trousers, soft knit, a scarf you can pull up over the chin when the wind picks up.",
    pieces: [p.pullover, p.scarfSet],
  },
  {
    slug: "rainy-day-edit",
    name: "Rainy Day Edit",
    image: rainyDayEdit,
    occasion: "Wet weather",
    warmth: "Warm",
    weather: "Cold & rainy",
    description:
      "Built for the El Niño downpours. A waterproof shell does the heavy lifting, while a ribbed beanie and lambswool socks keep the warmth where it matters once the rain settles in.",
    styling:
      "The rule for rain: one hard shell, three soft layers beneath. Tuck trousers into boots and let the knit accessories carry the colour.",
    pieces: [p.beanie, p.scarfSet, p.socks],
    badge: "new",
  },
  {
    slug: "evening-layer",
    name: "Evening Layer",
    image: eveningLayer,
    occasion: "Evenings out",
    warmth: "Mild",
    weather: "Cool evenings",
    description:
      "A versatile layering piece for when the temperature drops after dark. A ribbed wool vest over a crisp shirt, with a cashmere wrap draped for extra warmth on the walk home.",
    styling:
      "The vest defines the shoulders; the wrap softens them. Wear the wrap long over one arm until the evening turns cold.",
    pieces: [p.vest, p.wrap],
  },
  {
    slug: "heritage-layer",
    name: "The Heritage Layer",
    image: heritageLayer,
    occasion: "Statement days",
    warmth: "Warm",
    weather: "Cool & sunny",
    description:
      "Where African print meets cozy knit. An indigo heritage jacket over a cream cardigan, grounded by a mustard scarf and Shetland mittens — a look that tells a story while it keeps you warm.",
    styling:
      "Let one piece carry the pattern and keep the rest in quiet naturals. The scarf ties the palette together.",
    pieces: [p.cardigan, p.scarfSet, p.mittens],
    badge: "editor",
  },
  {
    slug: "office-cozy",
    name: "Office Cozy",
    image: officeCozy,
    occasion: "Workweek",
    warmth: "Mild",
    weather: "Air-conditioned interiors",
    description:
      "Polished enough for the desk, warm enough for the cold commute. A slim ribbed vest under a fine merino scarf, with tailored trousers and Chelsea boots that handle the puddles.",
    styling:
      "Structured below, soft above. The scarf is the one place to let texture in.",
    pieces: [p.scarfSet, p.vest, p.socks],
  },
  {
    slug: "slow-morning",
    name: "Slow Morning",
    image: slowMorning,
    occasion: "At home",
    warmth: "Cozy",
    weather: "Cold indoor mornings",
    description:
      "For the mornings you don't leave the house. A moss-stitch cardigan over soft layers, brushed lambswool socks, and a cashmere wrap close at hand for the sofa.",
    styling:
      "Comfort is the only rule. Layer the cardigan open and let the wrap gather at the elbows.",
    pieces: [p.cardigan, p.socks, p.wrap],
  },
];

export const featuredLooks = [
  looks.find(l => l.slug === "morning-commute")!,
  looks.find(l => l.slug === "heritage-layer")!,
  looks.find(l => l.slug === "rainy-day-edit")!,
];

export const coldLayeringLooks = looks.filter(l =>
  ["morning-commute", "evening-layer", "office-cozy", "slow-morning"].includes(l.slug)
);

export const rainReadyLooks = looks.filter(l =>
  ["rainy-day-edit", "weekend-warmth", "heritage-layer"].includes(l.slug)
);

export function getLookBySlug(slug: string): Look | undefined {
  return looks.find(l => l.slug === slug);
}

export function getRelatedLooks(slug: string, count = 3): Look[] {
  return looks.filter(l => l.slug !== slug).slice(0, count);
}
