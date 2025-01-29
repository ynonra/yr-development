import Image from "next/image";

const RecommendationCard = ({
  description,
  profileImageFilename,
  profileName,
  profileRole,
}) => {
  return (
    <div className="flex flex-col items-start justify-between h-full px-3 sm:px-10 mb-10 pb-10">
      <p className="text-base sm:text-2xl font-light leading-normal sm:text-right whitespace-pre-line">
        {description}
      </p>
      <div className="self-center sm:self-end flex flex-col sm:flex-row gap-x-5 gap-y-2 items-center">
        <div className="w-12 h-12 relative border border-appRed-500/10 rounded-full overflow-hidden">
          <Image
            src={`/images/profiles/${profileImageFilename}`}
            alt={`המלצה-מאת-${profileName}`}
            fill
            className="object-cover"
          />
        </div>
        <div className="flex flex-col sm:text-right">
          <span className="text-sm text-gray-500">{profileRole}</span>
          <span className="">{profileName}</span>
        </div>
      </div>
    </div>
  );
};

export default RecommendationCard;
