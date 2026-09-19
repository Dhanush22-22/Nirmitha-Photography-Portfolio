import { useRef } from "react";
import { useScrollReveal } from "../hooks/useScrollReveal";
import { collaborate as data } from "../data/closingSections";
import "./Collaborate.css";

export default function Collaborate() {
  const rootRef = useRef(null);
  useScrollReveal(rootRef, { selector: "[data-reveal]", from: { autoAlpha: 0, y: 24 }, stagger: 0.08 });

  return (
    <section id="collaborate" ref={rootRef} className="collaborate" aria-label="Collaborate">
      <div className="collaborate-heading">
        <p className="collaborate-heading-lead" data-reveal>
          {data.headingLead}
        </p>
        <h2 className="collaborate-heading-title" data-reveal>
          {data.headingTitle}
        </h2>
      </div>

      <div className="collaborate-services">
        {data.services.map((service) => (
          <div className="collaborate-service" key={service.number} data-reveal>
            <p className="collaborate-service-number">{service.number}</p>
            <h3 className="collaborate-service-title">{service.title}</h3>
            <p className="collaborate-service-body">{service.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
