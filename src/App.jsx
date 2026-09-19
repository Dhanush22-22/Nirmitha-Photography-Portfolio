import Navigation from "./components/Navigation";
import Hero from "./sections/Hero";
import BehindTheCamera from "./sections/BehindTheCamera";
import WhatIDo from "./sections/WhatIDo";
import EnterTheWork from "./sections/EnterTheWork";
import Gallery from "./sections/gallery/Gallery";
import Portfolio from "./sections/portfolio/Portfolio";
import Videography from "./sections/Videography";
import Experience from "./sections/Experience";
import FeaturedWork from "./sections/featured-work/FeaturedWork";
import Planning from "./sections/Planning";
import ThroughOurLens from "./sections/ThroughOurLens";
import Collaborate from "./sections/Collaborate";
import Closing from "./sections/Closing";
import { useSmoothScroll } from "./hooks/useSmoothScroll";

export default function App() {
  useSmoothScroll();

  return (
    <>
      <a href="#hero" className="skip-link">
        Skip to content
      </a>
      <Navigation />
      <main>
        <Hero />
        <BehindTheCamera />
        <WhatIDo />
        <EnterTheWork />
        <Gallery />
        <Portfolio />
        <Videography />
        <Experience />
        <FeaturedWork />
        <Planning />
        <ThroughOurLens />
        <Collaborate />
        <Closing />
      </main>
    </>
  );
}
