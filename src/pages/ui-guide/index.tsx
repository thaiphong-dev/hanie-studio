import React from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { GetServerSideProps } from "next";
import Banner from "@/components/Common/Banner/Banner";
import HeadingSeperator from "@/components/Common/HeadingSeparator/HeadingSeparator";
import InfoCard from "@/components/Common/Cards/InfoCard";
// import ServiceCard from "@/components/Common/Cards/ServiceCard";
import ReviewCard from "@/components/Common/Cards/ReviewCard";

const UiGuide = () => {
  return (
    <div className="space-y-[50px]">
      {/* <MainMenu /> */}
      <Banner
        bgImage="/images/banners/banner.webp"
        content="Discover The Best Beauty
Studio In Quy Nhon"
        subContent="Embrace the Power of Self-Care Today"
        isShowButton={true}
        handleClickButton={() => {}}
      />
      <HeadingSeperator title="lalal" />
      <div className=" flex justify-center items-center w-full px-[20px] lg:px-0">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[20px] w-full lg:w-[1240px] place-items-center">
          <InfoCard
            imageSrc="/images/mocks/infor.jpg"
            title="Experienced Professionals"
            linkText="About Us"
            linkHref="/about"
            description="Our team consists of certified and highly skilled professionals dedicated to delivering exceptional results."
          />
          <InfoCard
            imageSrc="/images/mocks/product.webp"
            title="Experienced Professionals"
            linkText="About Us"
            linkHref="/about"
            description="Our team consists of certified and highly skilled professionals dedicated to delivering exceptional results."
          />
          <InfoCard
            imageSrc="/images/mocks/work.webp"
            title="Experienced Professionals"
            linkText="About Us"
            linkHref="/about"
            description="Our team consists of certified and highly skilled professionals dedicated to delivering exceptional results."
          />
        </div>
      </div>

      {/* <div>
        <ServiceCard
          img="/images/mocks/service.webp"
          title="Lash Extension"
          subTitle="Elevate Your Look Instantly"
        />
      </div> */}

      <div>
        <ReviewCard
          name="Ashton Chong"
          avatar="/avatar.jpg"
          timeAgo="2 months ago"
          rating={5}
          review="Ashley was a real gem, I appreciate her skills and the work she does for my brows. The service was commendable and the staff is professional. I would make it a point to come visit whenever I am in town."
        />
      </div>
    </div>
  );
};
export const getServerSideProps: GetServerSideProps = async ({ locale }) => {
  const currentLocale = locale || "vn"; // default to 'en' if locale is undefined
  return {
    props: {
      ...(await serverSideTranslations(currentLocale, ["vi"])),
    },
  };
};

export default UiGuide;
