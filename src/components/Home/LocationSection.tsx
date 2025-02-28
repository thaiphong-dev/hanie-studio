import React from "react";
import HeadingSeparator from "../Common/HeadingSeparator/HeadingSeparator";
import HeadingTitle from "../Common/HeadingTitle/HeadingTitle";
import { useTranslation } from "react-i18next";
import Image from "next/image";
import StyledButton from "../Common/StyledButton/StyledButton";

const LocationSection = () => {
  const { t } = useTranslation();
  return (
    <div className="w-full xl:max-w-[1240px] px-[20px] lg:px-0 space-y-[10px]">
      <div className="!text-white">
        <HeadingSeparator
          titleCustom={<span className="text-white">{t("Location")}</span>}
        />
        <HeadingTitle
          title={
            <span className="text-[32px] lg:text-[55px] text-white">
              {t("Heart of Quy Nhon")}
            </span>
          }
        />
      </div>
      <div className="lg:flex justify-center items-center">
        <div className="w-full aspect-video min-h-full relative lg:min-w-[750px]">
          <Image
            src="/images/mocks/quynhon.jpg"
            alt="img"
            fill
            sizes="auto"
            className="rounded-lg"
            objectFit="cover"
          />
        </div>
        <div className="bg-white w-full p-[30px] space-y-[30px] lg:rounded-ss-xl lg:rounded-ee-xl">
          <HeadingTitle title={<span>{t("Quy Nhon city")}</span>} />
          <p>
            {t(
              "Located in the heart of Quy Nhon, Hanie Studio offers a luxurious and personalized beauty experience, ensuring you always look and feel your best."
            )}
          </p>
          <p>
            {t(
              "Quy Nhon is a stunning coastal city where natural beauty meets modern vibrancy. With pristine beaches, diverse cuisine, and rich culture, it is the perfect place for relaxation and self-care."
            )}
          </p>
          <p>
            {t(
              "At Hanie Studio, we provide expert beauty services, including makeup, lash extensions, and more, helping you shine in your own unique way. Let us be part of your beauty journey in this charming city!"
            )}
          </p>
          <StyledButton title="contact us" handleClick={() => {}} />
        </div>
      </div>
    </div>
  );
};

export default LocationSection;
