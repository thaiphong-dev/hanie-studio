import React from "react";
import InforCard from "../Common/Cards/InfoCard";
import HeadingSeparator from "../Common/HeadingSeparator/HeadingSeparator";
import { useTranslation } from "react-i18next";
import HeadingTitle from "../Common/HeadingTitle/HeadingTitle";

const ChoseUsSection = () => {
  const { t } = useTranslation();
  return (
    <div>
      <div className="flex flex-col justify-center items-center w-full space-y-[50px] ">
        <div className="text-bg_dark text-[19px] grid grid-cols-1 lg:grid-cols-2 w-full  ">
          <HeadingSeparator title="The Highest Standards" />
          <div className="lg:text-right">
            <HeadingTitle
              title={
                <span className="text-[32px] lg:text-[55px]">
                  {t("Why choose us")}
                </span>
              }
            />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[20px] w-full lg:max-w-[1240px] place-items-center">
          <InforCard
            imageSrc="/images/mocks/infor.jpg"
            title="Experienced Professionals"
            linkText="About Us"
            linkHref="/about"
            description="Our team consists of certified and highly skilled professionals dedicated to delivering exceptional results."
          />
          <InforCard
            imageSrc="/images/mocks/product.webp"
            title="Experienced Professionals"
            linkText="About Us"
            linkHref="/about"
            description="Our team consists of certified and highly skilled professionals dedicated to delivering exceptional results."
          />
          <InforCard
            imageSrc="/images/mocks/work.webp"
            title="Experienced Professionals"
            linkText="About Us"
            linkHref="/about"
            description="Our team consists of certified and highly skilled professionals dedicated to delivering exceptional results."
          />
        </div>
      </div>
    </div>
  );
};

export default ChoseUsSection;
