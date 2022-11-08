import Link from "next/link";

const NavLinks = ({ closeDrawer = () => {} }) => {
  return (
    <ul className="flex flex-col sm:flex-row justify-center items-center gap-x-2 gap-y-1.5 text-lg sm:text-base">
      <li>
        <Link
          href="/#home"
          className="px-2 py-1 block text-appRed-500"
          onClick={closeDrawer}
        >
          בית
        </Link>
      </li>
      <li>
        <Link
          href="/#about-me"
          className="px-2 py-1 block"
          onClick={closeDrawer}
        >
          אודות
        </Link>
      </li>
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
