import { useRef } from "react";
import ResponsiveImage from "../components/ResponsiveImage";
import PhoneIcon from "../components/icons/PhoneIcon";
import MailIcon from "../components/icons/MailIcon";
import { useScrollReveal } from "../hooks/useScrollReveal";
import { closing as data } from "../data/closingSections";
import "./Closing.css";

const icons = { phone: PhoneIcon, mail: MailIcon };

export default function Closing() {
  const rootRef = useRef(null);
  useScrollReveal(rootRef, { selector: "[data-reveal]", from: { autoAlpha: 0, y: 20 }, stagger: 0.1 });
  useScrollReveal(rootRef, {
    selector: "[data-reveal-media]",
    from: { autoAlpha: 0, scale: 1.05 },
    duration: 1.3,
    start: "top 90%",
  });

  return (
    <section id="contact" ref={rootRef} className="closing" aria-label="Let's Work Together">
      <div className="closing-media" data-reveal-media>
        <ResponsiveImage {...data.image} sizes="(max-width: 900px) 100vw, 43.7vw" />
      </div>

      <div className="closing-copy">
        <h2 className="closing-heading">
          {data.heading.map((line) => (
            <span key={line} data-reveal>
              {line}
            </span>
          ))}
        </h2>

        <ul className="closing-contacts">
          {data.contacts.map((contact) => {
            const Icon = icons[contact.type];
            return (
              <li key={contact.type} className="closing-contact" data-reveal>
                <Icon className="closing-contact-icon" />
                <div>
                  <p className="closing-contact-label">{contact.label}</p>
                  <a className="closing-contact-value" href={contact.href}>
                    {contact.value}
                  </a>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
