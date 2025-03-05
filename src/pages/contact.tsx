import PageBanner from "@/components/Common/Banner/PageBanner";
import SubBanner from "@/components/Common/Banner/SubBanner";
import React from "react";
import { Licorice } from "next/font/google";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";
import FindUsSection from "@/components/Contact/FindUsSection";
import QuestionSection from "@/components/Contact/QuestionSection";

const licorice = Licorice({
  weight: "400",
  subsets: ["latin"],
});

const About = () => {
  return (
    <div>
      <PageBanner
        bgImage="/images/banners/about.webp"
        isShowButton={false}
        content="Contact"
        subContent="Connect with Us for Your Beauty Needs"
      />

      <div className="space-y-[50px] pt-[50px] pb-[50px]">
        <div className="space-y-[50px] flex flex-col justify-center items-center  px-[20px] lg:px-0 ">
          <FindUsSection />
          <QuestionSection />
        </div>
      </div>
      <SubBanner
        bgImage="/images/about/subbanner.webp"
        subContent={
          <div className="px-[20px] lg:px-0">
            <div>
              <FontAwesomeIcon
                icon={faQuoteLeft}
                className="text-[50px] text-active_main"
              />
            </div>
            <p className={`text-white text-[34px] ${licorice.className}`}>
              Beauty is not caused. It is.
            </p>
          </div>
        }
        isShowButton={false}
      />
    </div>
  );
};

export default About;
