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

    // On phones/tablets a reveal's scale(1.05-1.06) start pose makes the media box wider than the
    // screen until it plays (the page scrolls/pans sideways), so there the reveal fades and slides
    // only. matchMedia re-evaluates on resize/rotation and reverts cleanly; desktop is unchanged.
    const mm = gsap.matchMedia();
    mm.add(
      { compact: "(max-width: 900px)", wide: "(min-width: 901px)" },
      (context) => {
        const targets = ref.current.querySelectorAll(selector);
        if (!targets.length) return;

        const withoutScale = { ...from };
        delete withoutScale.scale;
        gsap.from(targets, {
          ...(context.conditions.compact ? withoutScale : from),
          duration,
          stagger,
          ease,
          scrollTrigger: {
            trigger: ref.current,
            start,
            once,
          },
        });
      }
    );

    return () => mm.revert();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [reducedMotion]);
}
