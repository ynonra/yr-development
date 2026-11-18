import Link from "next/link";
import HashLinkAnchor from "../HashLinkAnchor";
import { SERVICES } from "../../data/services";
import { PROJECTS_DATA } from "../../data/projects";

const titleOf = (slug) => PROJECTS_DATA.find((p) => p.slug === slug)?.title;

const Services = () => (
  <section className="mt-28 lg:mt-36">
    <HashLinkAnchor id="services" />
    <div className="grid lg:grid-cols-2 gap-x-16 gap-y-5 items-end mb-10 lg:mb-14">
      <h2 className="font-display font-extrabold text-4xl sm:text-5xl">
        מה אני בונה
      </h2>
      <p className="text-lg text-ink-soft max-w-xl">
        המומחיות שלי היא פיתוח, ובשנים האחרונות גם פיתוח מבוסס AI. ולמה שדורש
        עוד ידיים, כמו עיצוב, מיתוג וקופירייטינג, אני עובד עם אנשי מקצוע שאני
        סומך עליהם.
      </p>
    </div>

    <ul className="border-t border-line">
      {SERVICES.map(({ title, description, examples }) => (
        <li
          key={title}
          className="grid md:grid-cols-[14rem_minmax(0,1fr)_minmax(0,19rem)] gap-x-10 gap-y-3 py-7 sm:py-8 border-b border-line"
        >
          <h3 className="font-display font-bold text-2xl sm:text-[1.7rem] leading-tight">
            {title}
          </h3>
          <p className="text-ink-soft leading-relaxed max-w-prose">{description}</p>
          {examples.length > 0 && (
            <div className="flex flex-wrap items-center gap-2 md:justify-end md:self-start">
              <span className="text-sm text-ink-soft">למשל:</span>
              {examples.map((slug) => (
                <Link
                  key={slug}
                  href={`/project/${slug}`}
                  className="text-sm rounded-full border border-line bg-white px-3 py-1 transition-colors hover:border-coral hover:text-coral-ink"
                >
                  {titleOf(slug)}
                </Link>
              ))}
            </div>
          )}
        </li>
      ))}
    </ul>
  </section>
);

export default Services;
