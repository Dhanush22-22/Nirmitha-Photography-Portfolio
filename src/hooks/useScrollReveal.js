import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { usePrefersReducedMotion } from "./usePrefersReducedMotion";

gsap.registerPlugin(ScrollTrigger);

/**
 * Fades/slides elements matching `selector` (inside `ref`) into view as they enter
 * the viewport. Shared by every below-the-fold section so reveal logic isn't
 * duplicated per section. No-ops entirely under prefers-reduced-motion — content
 * stays at its natural CSS state (visible) rather than being animated in.
 */
export function useScrollReveal(
  ref,
  {
    selector = "[data-reveal]",
    from = { autoAlpha: 0, y: 32 },
    duration = 1,
    stagger = 0.12,
    ease = "power2.out",
    start = "top 82%",
    once = true,
  } = {}
) {
  const reducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (!ref.current || reducedMotion) return;

    const ctx = gsap.context(() => {
      const targets = ref.current.querySelectorAll(selector);
      if (!targets.length) return;

      gsap.from(targets, {
        ...from,
        duration,
        stagger,
        ease,
        scrollTrigger: {
          trigger: ref.current,
          start,
          once,
        },
      });
    }, ref);

    return () => ctx.revert();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [reducedMotion]);
}
