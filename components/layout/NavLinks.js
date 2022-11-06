import Link from "next/link";

const NavLinks = () => {
  return (
    <ul className="flex flex-col sm:flex-row justify-center items-center gap-x-2 gap-y-1.5 text-lg sm:text-base">
      <li>
        <Link href="/#" className="px-2 py-1 block text-appRed-500">
          בית
        </Link>
      </li>
      <li>
        <Link href="/#" className="px-2 py-1 block">
          אודות
        </Link>
      </li>
      <li>
        <Link href="/#" className="px-2 py-1 block">
          שירותים
        </Link>
      </li>
      <li>
        <Link href="/#" className="px-2 py-1 block">
          המלצות
        </Link>
      </li>
      <li>
        <Link href="/#" className="px-2 py-1 block">
          תיק עבודות
        </Link>
      </li>
      <li>
        <Link href="/#" className="px-2 py-1 block">
          יצירת קשר
        </Link>
      </li>
    </ul>
  );
};

export default NavLinks;
