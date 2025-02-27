import MainMenu from "@/components/Common/MainMenu/MainMenu";
import React from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { GetServerSideProps } from "next";
import Banner from "@/components/Common/Banner/Banner";

const UiGuide = () => {
  return (
    <div>
      <MainMenu />
      <Banner
        bgImage="/images/banners/banner.webp"
        content="Discover The Best Beauty
Studio In Quy Nhon"
        subContent="Embrace the Power of Self-Care Today"
        isShowButton={true}
        handleClickButton={() => {}}
      />
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
