import React from "react";
import HeadingSeparator from "../Common/HeadingSeparator/HeadingSeparator";
import HeadingTitle from "../Common/HeadingTitle/HeadingTitle";
import { useTranslation } from "react-i18next";
import ImageCollage from "../Common/ImageCollage/ImageCollage";

const ConceptSection = () => {
  const listImage = [
    "/images/about/img4.webp",
    "/images/about/img1.webp",
    "/images/about/img2.webp",
    "/images/about/img1.webp",
    "/images/about/img4.webp",
    "/images/about/img5.webp",
  ];
  const { t } = useTranslation();
  return (
    <div className="w-full h-full max-w-[1240px] space-y-[50px]">
      <div className="lg:flex justify-between items-center">
        <HeadingSeparator title="Inside Look" />
        <HeadingTitle
          title={
            <span className="text-[32px] lg:text-[55px] ">
              {t("Our Facilities")}
            </span>
          }
        />
      </div>
      <ImageCollage images={listImage} />
    </div>
  );
};

export default ConceptSection;
