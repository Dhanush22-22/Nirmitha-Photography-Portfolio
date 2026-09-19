import { useEffect } from "react";
import { initSmoothScroll } from "../animations/smoothScroll";
import { usePrefersReducedMotion } from "./usePrefersReducedMotion";

export function useSmoothScroll() {
  const reducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    const teardown = initSmoothScroll({ reducedMotion });
    return teardown;
  }, [reducedMotion]);
}
