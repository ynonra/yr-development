import AppButton from "./AppButton";
import { BiLinkExternal } from "react-icons/bi";
import Image from "next/image";

const WorkLinks = ({
  websiteUrl,
  googlePlayUrl,
  appStoreUrl,
  className = "",
}) => {
  return (
    <div
      className={`flex flex-row sm:flex-row-reverse flex-wrap gap-3 sm:gap-8 justify-center items-center ${className}`}
    >
      {websiteUrl ? (
        <AppButton
          withoutTransition
          inverted
          href={websiteUrl + "?utm_source=yr-development"}
          target="_blank"
          rel="noreferrer"
          className="h-10 py-0 rounded-md"
        >
          <div className="flex justify-between items-center gap-3 h-full">
            <span>כניסה לאתר</span>
            <BiLinkExternal
              className="text-xl"
              style={{ transform: "rotateY(180deg)" }}
            />
          </div>
        </AppButton>
      ) : null}
      {googlePlayUrl ? (
        <a href={googlePlayUrl} target="_blank" rel="noreferrer">
          <Image
            width={1.117 * 120}
            height={25}
            src="/images/google-play-badge.png"
            alt="google-play-link"
            className="object-contain"
          />
        </a>
      ) : null}
      {appStoreUrl ? (
        <a href={appStoreUrl} target="_blank" rel="noreferrer">
          <Image
            width={120}
            height={25}
            src="/images/app-store-badge.png"
            alt="google-play-link"
            className="object-contain"
          />
        </a>
      ) : null}
    </div>
  );
};

export default WorkLinks;
