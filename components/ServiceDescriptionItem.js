import Image from "next/image";

const ServiceDescriptionItem = ({
  imageFilename,
  imageAlt,
  title,
  description,
}) => {
  return (
    <article className="flex flex-col items-center w-full max-w-sm sm:max-w-[14.5rem] px-3 sm:px-0">
      <div className="relative h-64 w-64">
        <Image fill src={`/images/${imageFilename}`} alt={imageAlt} />
      </div>
      <div className="text-center">
        <h3 className="text-2xl self-start mb-2 font-bold">{title}</h3>
        <p className="leading-snug">{description}</p>
      </div>
    </article>
  );
};

export default ServiceDescriptionItem;
