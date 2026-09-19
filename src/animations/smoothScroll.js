import Lenis from "lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/**
 * Wires Lenis to GSAP's ticker so ScrollTrigger stays in sync with the smoothed
 * scroll position instead of running a second, competing rAF loop.
 * Returns a teardown function.
 */
export function initSmoothScroll({ reducedMotion = false } = {}) {
  if (reducedMotion) {
    // Native scroll only — ScrollTrigger still works against the real scrollbar.
    ScrollTrigger.refresh();
    return () => {};
  }

  const lenis = new Lenis({
    duration: 1.1,
    smoothWheel: true,
    syncTouch: false, // let touch scroll stay native for responsiveness
  });

  lenis.on("scroll", ScrollTrigger.update);

  const tickerCallback = (time) => {
    lenis.raf(time * 1000);
  };
  gsap.ticker.add(tickerCallback);
  gsap.ticker.lagSmoothing(0);

  return () => {
    gsap.ticker.remove(tickerCallback);
    lenis.destroy();
  };
}
