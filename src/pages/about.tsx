import ConceptSection from "@/components/About/ConceptSection";
import OurHistorySection from "@/components/About/OurHistorySection";
import WhoWeAreSection from "@/components/About/WhoWeAreSection";
import PageBanner from "@/components/Common/Banner/PageBanner";
import SubBanner from "@/components/Common/Banner/SubBanner";
import React from "react";
import { Licorice } from "next/font/google";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";

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
        content="about us"
        subContent="Enhancing Your Natural Beauty, One Detail at a Time"
      />

      <div className="space-y-[50px] pt-[50px] pb-[50px]">
        <div className="space-y-[100px] flex flex-col justify-center items-center px-[20px] lg:px-0 ">
          <WhoWeAreSection />
        </div>

        <div className="py-[50px] bg-bg_dark flex justify-center items-center">
          <OurHistorySection />
        </div>

        <div className="space-y-[100px] flex flex-col justify-center items-center px-[20px] lg:px-0 ">
          <ConceptSection />
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
              No beauty shines brighter than that of a good heart.
            </p>
          </div>
        }
        isShowButton={false}
      />
    </div>
  );
};

export default About;
