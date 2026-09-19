import MyOwnStyle from "./MyOwnStyle";
import QuietElegance from "./QuietElegance";
import ColorGrading from "./ColorGrading";
import ProductPhotography from "./ProductPhotography";
import SpacesInteriors from "./SpacesInteriors";
import FoodBeverage from "./FoodBeverage";

// Slides 9–16 collapse into one continuous "Portfolio" website section per the
// 24-slides -> 13-sections blueprint, each slide kept as its own sub-block.
export default function Portfolio() {
  return (
    <section id="portfolio" aria-label="Portfolio">
      <MyOwnStyle />
      <QuietElegance />
      <ColorGrading />
      <ProductPhotography />
      <SpacesInteriors />
      <FoodBeverage />
    </section>
  );
}
