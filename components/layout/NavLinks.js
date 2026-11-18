import Link from "next/link";
import { useRouter } from "next/router";

const LINKS = [
  { href: "/", label: "בית" },
  { href: "/#services", label: "שירותים" },
  { href: "/#recommendations", label: "המלצות" },
  { href: "/#projects", label: "תיק עבודות" },
  { href: "/blog", label: "בלוג" },
  { href: "/#contact", label: "יצירת קשר" },
];

// Hover and the current page share one cue: coral text with a coral bar that
// grows in from the right (the reading direction).
const NavLinks = ({ closeDrawer = () => {} }) => {
  const { pathname } = useRouter();

  return (
    <ul className="flex flex-col sm:flex-row justify-center items-center gap-x-2 gap-y-1.5 text-lg sm:text-base">
      {LINKS.map(({ href, label }) => {
        const current =
          (href === "/" && pathname === "/") ||
          (href === "/blog" && pathname.startsWith("/blog"));
        return (
          <li key={href}>
            <Link
              href={href}
              onClick={closeDrawer}
              aria-current={current ? "page" : undefined}
              className="group relative block px-2 py-1 transition-colors hover:text-coral-ink aria-[current=page]:text-coral-ink"
            >
              {label}
              <span
                aria-hidden="true"
                className="absolute inset-x-2 bottom-0 h-0.5 rounded-full bg-coral origin-right scale-x-0 transition-transform duration-300 group-hover:scale-x-100 group-aria-[current=page]:scale-x-100"
              />
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default NavLinks;
