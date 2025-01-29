import Image from "next/image";

const ServiceDescriptionItem = ({
  number,
  imageFilename,
  imageAlt,
  title,
  description,
}) => {
  return (
    <article className="flex flex-col items-center w-full max-w-[16rem]">
      <div className="bg-white shadow w-14 h-14 rounded-full flex items-center justify-center relative">
        <div className="absolute z-50 border border-appRed-500/10 inset-1 rounded-full" />
        <div className="bg-appRed-500 w-8 h-8 rounded-full flex items-center justify-center text-white font-rubik">
          {number}
        </div>
      </div>
      <div className="relative h-64 w-64">
        <Image fill src={`/images/${imageFilename}`} alt={imageAlt} />
      </div>
      <div className="text-right">
        <h3 className="text-2xl font-rubik self-start mb-4">{title}</h3>
        <p className="leading-normal">{description}</p>
      </div>
    </article>
  );
};

export default ServiceDescriptionItem;
