import Link from "next/link";

const Logo = ({ stroke = "black" }) => {
  return (
    <Link href="/">
      <svg
        width="54"
        height="42"
        viewBox="0 0 54 42"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M29.25 41V2C29.25 2 49.7576 2.56156 48.6713 11.856C47.8194 19.144 35.4602 28.5574 35.4602 28.5574C35.4602 28.5574 48.6713 27.3883 52.25 41"
          stroke={stroke}
          strokeWidth="2"
        />
        <path
          d="M1.10823 1C1.03814 18.0876 -0.563354 14.5909 11.375 23.4167M11.375 23.4167C23.3134 14.5909 21.7119 18.0876 21.6418 1M11.375 23.4167C11.375 30.2834 11.375 41 11.375 41"
          stroke={stroke}
          strokeWidth="2"
        />
      </svg>
    </Link>
  );
};

export default Logo;
