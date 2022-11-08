import Image from "next/image";

const RecommendationCard = ({
  description,
  profileImageFilename,
  profileName,
  profileRole,
}) => {
  return (
    <div className="flex flex-col items-start px-10 mb-10">
      <p className="text-2xl font-light leading-normal mb-10 text-right">
        {description}
      </p>
      <div className="self-end flex gap-5 items-center">
        <div className="w-12 h-12 relative outline outline-1 outline-appRed-500/10 rounded-full overflow-hidden">
          <Image
            src={`/images/profiles/${profileImageFilename}`}
            alt={`המלצה-מאת-${profileName}`}
            fill
            className="object-cover"
          />
        </div>
        <div className="flex flex-col text-right">
          <span className="text-sm text-gray-500">{profileRole}</span>
          <span className="">{profileName}</span>
        </div>
      </div>
    </div>
  );
};

export default RecommendationCard;
