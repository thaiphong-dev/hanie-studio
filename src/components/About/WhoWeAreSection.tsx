import React from "react";
import HeadingSeparator from "../Common/HeadingSeparator/HeadingSeparator";
import HeadingTitle from "../Common/HeadingTitle/HeadingTitle";
import { useTranslation } from "react-i18next";
import Image from "next/image";

const WhoWeAreSection = () => {
  const { t } = useTranslation();
  return (
    <div className="w-full h-full max-w-[1240px] space-y-[50px]">
      <div className="lg:flex justify-between items-center">
        <HeadingSeparator title="our mission" />
        <HeadingTitle
          title={
            <span className="text-[32px] lg:text-[55px] ">
              {t("Who We Are")}
            </span>
          }
        />
      </div>

      <div className="lg:flex justify-between items-center lg:space-x-[50px] ">
        <div className="lg:w-[130%]">
          <HeadingTitle
            title={
              <span>
                {t("Your Premier Beauty")} <br /> {t("Destination in Quy Nhon")}
              </span>
            }
          />
        </div>
        <div className="text-[19px] text-bg_dark">
          <p>
            At Hanie Studio, we believe that beauty is an art. Located in the
            heart of Quy Nhon, our studio offers a serene and luxurious
            environment where you can indulge in a wide array of beauty
            treatments. Our experienced and highly skilled team is dedicated to
            providing personalized services to enhance your natural beauty and
            boost your confidence.
          </p>
        </div>
      </div>

      <div className="w-full aspect-video relative">
        <Image
          src={"/images/about/content.jpg"}
          fill
          sizes="auto"
          alt="content"
        />
      </div>
    </div>
  );
};

export default WhoWeAreSection;
