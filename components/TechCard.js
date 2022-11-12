import Image from "next/image";
import technologies from "../data/technologies";

const TechCard = ({ tech }) => {
  return (
    <div className="flex items-center justify-center bg-appPurple-500/5 shadow-sm w-32 h-32 sm:w-48 sm:h-48">
      <Image
        width={60}
        height={60}
        alt={`${tech}-logo`}
        src={technologies[tech].imageUrl}
        title={tech}
        // className='grayscale-[50%]'
      />
    </div>
  );
};

export default TechCard;
