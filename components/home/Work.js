import Image from "next/image";
import Link from "next/link";
import HashLinkAnchor from "../HashLinkAnchor";
import { PROJECTS_DATA } from "../../data/projects";

const FEATURED = ["mishkan-ariel", "melody-trails"];

const FeaturedCard = ({ slug, title, kind, inShort }) => (
  <Link
    href={`/project/${slug}`}
    className="group block rounded-3xl overflow-hidden bg-night-2 ring-1 ring-white/5"
  >
    <div className="relative aspect-[16/10] bg-mist">
      <Image
        src={`/images/works/${slug}/1.png`}
        alt={`${title}, צילומי מסך`}
        fill
        sizes="(min-width: 768px) 540px, 100vw"
        className="object-contain p-4 sm:p-6 transition-transform duration-500 group-hover:scale-[1.03]"
      />
    </div>
    <div className="p-6 sm:p-7">
      <p className="text-sm text-peri">{kind}</p>
      <h3 className="mt-1 font-display font-bold text-2xl text-white transition-colors group-hover:text-coral">
        {title}
      </h3>
      <p className="mt-2 text-white/65 leading-relaxed line-clamp-2">{inShort}</p>
    </div>
  </Link>
);

const Tile = ({ slug, title, kind }) => (
  <Link href={`/project/${slug}`} className="group block">
    <div className="relative aspect-[4/3] rounded-2xl bg-mist overflow-hidden">
      <Image
        src={`/images/works/${slug}/1.png`}
        alt={`${title}, צילומי מסך`}
        fill
        sizes="(min-width: 1024px) 200px, 50vw"
        className="object-contain p-3 transition-transform duration-500 group-hover:scale-105"
      />
    </div>
    <h3 className="mt-3 font-display font-bold text-white leading-snug transition-colors group-hover:text-coral">
      {title}
    </h3>
    <p className="text-xs text-peri">{kind}</p>
  </Link>
);

const Work = () => {
  const featured = FEATURED.map((s) => PROJECTS_DATA.find((p) => p.slug === s));
  const rest = PROJECTS_DATA.filter((p) => !FEATURED.includes(p.slug));

  return (
    <section className="mt-28 lg:mt-36 -mx-4 sm:mx-0 rounded-[2rem] sm:rounded-[2.5rem] bg-night px-5 py-14 sm:px-10 sm:py-16 lg:px-14">
      <HashLinkAnchor id="projects" />
      <div className="flex flex-wrap items-end justify-between gap-4 mb-10">
        <h2 className="font-display font-extrabold text-4xl sm:text-5xl text-white">
          עבודות נבחרות
        </h2>
        <p className="text-white/65">
          {PROJECTS_DATA.length} פרויקטים, מחנויות אונליין ועד אפליקציות. לחצו
          על פרויקט לסיפור המלא.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {featured.map((p) => (
          <FeaturedCard key={p.slug} {...p} />
        ))}
      </div>

      <div className="mt-12 grid grid-cols-2 lg:grid-cols-5 gap-x-5 gap-y-9">
        {rest.map((p) => (
          <Tile key={p.slug} {...p} />
        ))}
      </div>
    </section>
  );
};

export default Work;
