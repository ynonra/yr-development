import Head from "next/head";
import Image from "next/image";
import AppButton from "../components/AppButton";

import Lottie from "lottie-react";
import highFiveAnimation from "../assets/json-animations/high-five.json";

const weWillSpeakSoonPage = () => {
  return (
    <>
      <Head>
        <title>ינון רחמים | נדבר בקרוב!</title>
      </Head>
      {/* 1 - INTRO */}
      <section className="flex flex-col sm:flex-row justify-center sm:justify-between items-center mt-0">
        <div className="flex flex-col items-center sm:items-start sm:mt-20">
          <h1 className="text-3xl sm:text-6xl font-semibold sm:font-extrabold leading-tight mb-14 sm:mb-4 text-center sm:text-start">
            <span className="relative">
              <div className="hidden sm:block absolute -z-10 bg-appRed-500 bottom-[.3em] right-1 h-3.5 w-56"></div>
              <span>נדבר בקרוב</span>
            </span>
          </h1>
          <div className="text-gray-500 text-2xl mb-14 max-w-lg font-light leading-normal text-center sm:text-right">
            ההודעה שלכם כבר הגיעה אליי, אחזור אליכם בהקדם. בינתיים אתם מוזמנים
            להעיף מבט נוסף על הפרוייקטים שלי ולתכנן את החלום האישי שלכם.
          </div>
          <AppButton href="/#projects">תיק עבודות</AppButton>
        </div>
        <div className="w-64 sm:w-[35rem] h-64 sm:h-[35rem] relative">
          {/* <Image
            src="/images/medal.svg"
            fill
            alt="light"
            className="object-contain"
          /> */}
          <Lottie animationData={highFiveAnimation} />
        </div>
      </section>
    </>
  );
};

export default weWillSpeakSoonPage;
