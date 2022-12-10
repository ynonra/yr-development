import Link from "next/link";

const NavLinks = ({ closeDrawer = () => {} }) => {
  return (
    <ul className="tracking-wide flex flex-col sm:flex-row justify-center items-center gap-x-2 lg:gap-x-4 gap-y-1.5 text-lg sm:text-lg font-light">
      <li>
        <Link
          href="/"
          className="px-2 py-1 block relative"
          onClick={closeDrawer}
        >
          בית
          <div className="absolute -bottom-0.5 -inset-x-0 h-1 rounded bg-appRed-500" />
        </Link>
      </li>
      {/* <li>
        <Link
          href="/#about-me"
          className="px-2 py-1 block"
          onClick={closeDrawer}
        >
          אודות
        </Link>
      </li> */}
      <li>
        <Link
          href="/#services"
          className="px-2 py-1 block"
          onClick={closeDrawer}
        >
          שירותים
        </Link>
      </li>
      <li>
        <Link
          href="/#recommendations"
          className="px-2 py-1 block"
          onClick={closeDrawer}
        >
          המלצות
        </Link>
      </li>
      <li>
        <Link
          href="/#projects"
          className="px-2 py-1 block"
          onClick={closeDrawer}
        >
          תיק עבודות
        </Link>
      </li>
      <li>
        <Link
          href="/#contact"
          className="px-2 py-1 block"
          onClick={() => {
            closeDrawer();
            console.log("close");
          }}
        >
          יצירת קשר
        </Link>
      </li>
    </ul>
  );
};

export default NavLinks;
