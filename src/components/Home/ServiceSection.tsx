import React, { Fragment } from "react";
import HeadingTitle from "../Common/HeadingTitle/HeadingTitle";
import { useTranslation } from "react-i18next";
import StyledButton from "../Common/StyledButton/StyledButton";
import HeadingSeparatorCenter from "../Common/HeadingSeparator/HeadingSeparatorCenter";
import ServiceCard from "../Common/Cards/ServiceCard";

const ServiceSection = () => {
  const { t } = useTranslation();
  const servicesData = [
    {
      title: "lash extension",
      subTitle: "elevate your look instantly",
      img: "/images/mocks/service.webp",
      link: "/#",
    },
    {
      title: "Lash/Brow Lift & Tint",
      subTitle: "Effortless Elegance Every Day",
      img: "/images/mocks/service1.webp",
      link: "/#",
    },
    {
      title: "Nail Design & Extension",
      subTitle: "Crafted to Perfection",
      img: "/images/mocks/service2.webp",
      link: "/#",
    },
    {
      title: "Manicure & Pedicure",
      subTitle: "Nourished and Neat",
      img: "/images/mocks/service3.webp",
      link: "/#",
    },
    {
      title: "Paraffin Treatment",
      subTitle: "Soothe and Smooth",
      img: "/images/mocks/service4.webp",
      link: "/#",
    },
    {
      title: "Semi-Permanent Makeup",
      subTitle: "wake Up Flawless",
      img: "/images/mocks/service5.webp",
      link: "/#",
    },
  ];
  return (
    <div className="w-full lg:max-w-[1240px] space-y-[50px] px-[20px] lg:px-0">
      <div className="w-full flex flex-col justify-center items-center space-y-[30px] px-[20px] lg:px-0">
        <HeadingSeparatorCenter title="what we do" />
        <HeadingTitle
          title={
            <span className="text-[32px] lg:text-[55px] ">
              {t("Our Services")}
            </span>
          }
        />
        <p className="text-center max-w-[700px]">
          {t(
            "At Hanie Studio we offer a wide range of beauty treatments designed to enhance your natural beauty and help you feel your best. From luxurious facials to precise brow shaping and lash extensions, our expert team is dedicated to providing exceptional service tailored to your needs. Explore our diverse selection of treatments by clicking on the images below to learn more about how we can help you achieve your beauty"
          )}
        </p>

        <StyledButton title="book today" handleClick={() => {}} />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[20px] gap-y-[50px] w-full place-items-center">
        {servicesData.map((service, index) => (
          <Fragment key={index}>
            <ServiceCard {...service} />
          </Fragment>
        ))}
      </div>
    </div>
  );
};

export default ServiceSection;
