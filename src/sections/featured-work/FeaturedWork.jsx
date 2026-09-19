import ElysianShowcase from "./ElysianShowcase";
import TechnovanzaFabulla from "./TechnovanzaFabulla";

// Slides 19–20 collapse into the single "Featured Work" website section.
export default function FeaturedWork() {
  return (
    <section id="featured-work" aria-label="Featured Work">
      <ElysianShowcase />
      <TechnovanzaFabulla />
    </section>
  );
}
