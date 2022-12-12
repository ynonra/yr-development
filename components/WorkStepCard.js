import Image from "next/image";

const WorkStepCard = ({
  title,
  description,
  imageFilename,
  number,
  imageScale = 1,
}) => {
  return (
    <article
      className={`max-w-sm sm:w-64 lg:w-72 flex flex-col justify-center items-center px-7 pb-4 text-white relative ${
        number % 2 === 0 ? "bg-white/10" : "bg-white/5"
      } rounded-3xl`}
    >
      <div className="rounded-full bg-appRed-500 flex justify-center items-center absolute top-0 right-0 m-3 w-12 h-12 font-semibold text-2xl">
        <span className="z-10">{number}</span>
        <div className="absolute -inset-1 bg-appRed-500/30 rounded-full" />
      </div>
      <Image
        src={"/images/" + imageFilename}
        width={150}
        height={150}
        alt={title}
        style={{ transform: `scale(${imageScale})` }}
      />
      <h3 className="text-2xl font-semibold mb-1">{title}</h3>
      <p className="leading-normal">{description}</p>
    </article>
  );
};

export default WorkStepCard;
