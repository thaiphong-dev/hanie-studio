import Image from "next/image";
import React from "react";
import HeadingSeparator from "../Common/HeadingSeparator/HeadingSeparator";
import HeadingTitle from "../Common/HeadingTitle/HeadingTitle";
import { useTranslation } from "react-i18next";

const WelcomeSection = () => {
  const { t } = useTranslation();
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 w-full lg:max-w-[1240px] mx-auto place-items-center ">
      <div className="text-bg_dark text-[19px] space-y-[10px] lg:space-y-[20px]">
        <HeadingSeparator title="welcome" />
        <HeadingTitle
          title={
            <span>
              {t("Your Premier Beauty")} <br /> {t("Destination in Quy Nhon")}
            </span>
          }
        />
        <p>
          {t(
            "At Hanie Studio, we believe that beauty is an art. Located in the heart of Quy Nhon, our studio offers a serene and luxurious environment where you can indulge in a wide array of beauty treatments."
          )}
        </p>
        <p>
          {t(
            " Our experienced and highly skilled team is dedicated to providing personalized services to enhance your natural beauty and boost your confidence."
          )}
        </p>
      </div>
      <div className="w-full aspect-video min-h-full relative">
        <Image
          src="/images/mocks/image.webp"
          alt="img"
          fill
          sizes="auto"
          className="rounded-lg"
          objectFit="cover"
        />
      </div>
    </div>
  );
};

export default WelcomeSection;
