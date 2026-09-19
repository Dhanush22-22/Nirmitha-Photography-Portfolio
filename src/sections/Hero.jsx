import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { hero } from "../data/hero";
import { usePrefersReducedMotion } from "../hooks/usePrefersReducedMotion";
import "./Hero.css";

const WIDTHS = [640, 960, 1280, 1920, 2250];
const srcset = (ext) => WIDTHS.map((w) => `/images/hero-${w}.${ext} ${w}w`).join(", ");

export default function Hero() {
  const rootRef = useRef(null);
  const reducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    const ctx = gsap.context((self) => {
      const tl = gsap.timeline({
        defaults: { ease: "power2.out" },
        delay: 0.2,
      });

      tl.from(self.selector(".hero-eyebrow"), { autoAlpha: 0, y: 16, duration: 0.8 })
        .from(self.selector(".hero-name"), { autoAlpha: 0, y: 28, duration: 1 }, "-=0.5")
        .from(self.selector(".hero-role span"), { autoAlpha: 0, y: 20, duration: 0.9, stagger: 0.12 }, "-=0.6")
        .from(self.selector(".hero-divider"), { scaleX: 0, duration: 0.8, transformOrigin: "left" }, "-=0.5")
        .from(self.selector(".hero-quote"), { autoAlpha: 0, y: 16, duration: 0.8 }, "-=0.4")
        .from(self.selector(".hero-body"), { autoAlpha: 0, y: 16, duration: 0.8 }, "-=0.5")
        .from(self.selector(".hero-hud"), { autoAlpha: 0, duration: 1 }, "-=0.6");

      if (!reducedMotion) {
        gsap.to(self.selector(".hero-media img"), {
          yPercent: 8,
          ease: "none",
          scrollTrigger: {
            trigger: rootRef.current,
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        });
      }
    }, rootRef);

    return () => ctx.revert();
  }, [reducedMotion]);

  return (
    <section id="hero" ref={rootRef} className="hero" aria-label="Introduction">
      <div className="hero-media">
        <picture>
          <source type="image/avif" srcSet={srcset("avif")} sizes="100vw" />
          <source type="image/webp" srcSet={srcset("webp")} sizes="100vw" />
          <img
            src="/images/hero-1920.jpg"
            srcSet={srcset("jpg")}
            sizes="100vw"
            alt="Nirmitha N holding a camera to her eye, photographing a sunlit window in a dim, atmospheric room"
            width={2250}
            height={1096}
            fetchPriority="high"
            loading="eager"
            decoding="async"
          />
        </picture>
        <div className="hero-scrim" aria-hidden="true" />
        <div className="hero-vignette-bottom" aria-hidden="true" />
      </div>

      <div className="hero-hud" aria-hidden="true">
        <span className="hero-hud-corner" />
        <div className="hero-hud-rule" />
        <div className="hero-hud-top">
          <span className="hero-hud-rec">
            <span className="hero-hud-dot" />
            {hero.hud.rec}
          </span>
          <span>{hero.hud.frame}</span>
          <span className="hero-hud-focus">{hero.hud.focus}</span>
        </div>
        <div className="hero-hud-bottom">
          {hero.hud.settings.map((s) => (
            <span key={s} className="hero-hud-chip">
              {s}
            </span>
          ))}
        </div>
        <span className="hero-hud-corner-bl" />
      </div>

      <div className="hero-content container">
        <p className="hero-eyebrow">{hero.eyebrow}</p>
        <h1 className="hero-name">{hero.name}</h1>
        <p className="hero-role">
          {hero.role.map((line) => (
            <span key={line}>{line}</span>
          ))}
        </p>
        <span className="hero-divider" aria-hidden="true" />
        <blockquote className="hero-quote">&ldquo;{hero.quote}&rdquo;</blockquote>
        <p className="hero-body">{hero.body}</p>
      </div>
    </section>
  );
}
