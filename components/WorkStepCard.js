import Image from "next/image";

const WorkStepCard = ({
  title,
  description,
  imageFilename,
  imageScale = 1,
}) => {
  return (
    <article className="w-64 h-64 lg:w-72 lg:h-72 flex justify-center items-center px-5 border-2 border-appRed-500 relative bg-white">
      <div className="-z-10 absolute inset-0 translate-x-2.5 translate-y-2.5 border-2 border-appRed-500/30" />
      <div>
        <Image
          src={"/images/" + imageFilename}
          width={85}
          height={85}
          alt={title}
          className="-m-1"
          style={{ transform: `scale(${imageScale})` }}
        />
        <h3 className="text-2xl font-rubik mb-1">{title}</h3>
        <p>{description}</p>
      </div>
    </article>
  );
};

export default WorkStepCard;
