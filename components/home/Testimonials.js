import Image from "next/image";
import HashLinkAnchor from "../HashLinkAnchor";
import RECOMMENDATIONS from "../../data/recommendations";

const Testimonials = () => (
  <section className="mt-28 lg:mt-36">
    <HashLinkAnchor id="recommendations" />
    <h2 className="font-display font-extrabold text-4xl sm:text-5xl mb-10 lg:mb-12">
      לקוחות מספרים
    </h2>
    <div className="grid md:grid-cols-2 gap-6 items-start">
      {RECOMMENDATIONS.map(({ description, profile }) => (
        <figure
          key={profile.name}
          className="rounded-[2rem] bg-white border border-line p-7 sm:p-9"
        >
          <span aria-hidden="true" className="block font-display font-extrabold text-6xl leading-[0.6] text-peri h-8">
            ״
          </span>
          <blockquote className="text-lg leading-relaxed whitespace-pre-line">
            {description}
          </blockquote>
          <figcaption className="mt-7 flex items-center gap-4">
            <span className="relative w-12 h-12 shrink-0 rounded-full overflow-hidden bg-mist">
              <Image
                src={`/images/profiles/${profile.imageFilename}`}
                alt=""
                fill
                sizes="48px"
                className="object-cover"
              />
            </span>
            <span>
              <span className="block font-semibold">{profile.name}</span>
              <span className="block text-sm text-ink-soft">{profile.role}</span>
            </span>
          </figcaption>
        </figure>
      ))}
    </div>
  </section>
);

export default Testimonials;
