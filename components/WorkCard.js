import Image from "next/image";
import Link from "next/link";

const WorkCard = ({ logoFilename, workUrl, imageScale = 1 }) => {
  return (
    <Link href={`/project/${workUrl}`}>
      <div className="w-56 h-52 lg:w-64 lg:h-56 flex items-center justify-center group relative hover:shadow-sm shadow-sm hover:bg-appPurple-500/5">
        {/* <div className="w-4/5 h-28 lg:h-28 relative md:opacity-80 group-hover:opacity-100 transition-all duration-300"> */}
        <div className="w-4/5 h-28 lg:h-28 relative md:opacity-80 group-hover:opacity-100 sm:grayscale-[100%] sm:group-hover:grayscale-0 transition-all duration-300">
          <Image
            src={`/images/works-logos/${logoFilename}`}
            fill
            alt={`logo-${workUrl}`}
            style={{
              objectFit: "contain",
              transform: `scale(${imageScale})`,
            }}
          />
        </div>
        <div
          className="bg-appRed-500/50 absolute inset-x-0 bottom-0 h-1.5 scale-y-0 group-hover:scale-y-100 opacity-0 group-hover:opacity-100 transition-all"
          style={{ transformOrigin: "bottom" }}
        />
      </div>
    </Link>
  );
};

export default WorkCard;
