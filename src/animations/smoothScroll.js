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
  // Reveal triggers are measured on mount, before web fonts and late images settle section
  // heights, and rotating a phone changes every height. Re-measure at those moments.
  let cancelled = false;
  const refresh = () => {
    if (!cancelled) ScrollTrigger.refresh();
  };
  document.fonts?.ready.then(refresh);
  window.addEventListener("load", refresh, { once: true });
  window.addEventListener("orientationchange", refresh);
  const stopRefreshing = () => {
    cancelled = true;
    window.removeEventListener("load", refresh);
    window.removeEventListener("orientationchange", refresh);
  };

  if (reducedMotion) {
    // Native scroll only — ScrollTrigger still works against the real scrollbar.
    ScrollTrigger.refresh();
    return stopRefreshing;
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
    stopRefreshing();
    gsap.ticker.remove(tickerCallback);
    lenis.destroy();
  };
}
