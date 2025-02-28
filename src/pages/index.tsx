import FeatureCard from "@/components/Common/Cards/FeatureCard";
import Banner from "@/components/Common/Banner/Banner";
import { faSprayCanSparkles } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import WelcomeSection from "@/components/Home/WelcomeSection";
import ChoseUsSection from "@/components/Home/ChoseUsSection";
import LocationSection from "@/components/Home/LocationSection";
import ServiceSection from "@/components/Home/ServiceSection";
import ExploreSections from "@/components/Home/ExploreSections";
import SubBanner from "@/components/Common/Banner/SubBanner";

export default function Home() {
  return (
    <div>
      <Banner
        bgImage="/images/banners/banner.webp"
        content="Discover The Best Beauty
Studio In Quy Nhon"
        subContent="Embrace the Power of Self-Care Today"
        isShowButton={true}
        handleClickButton={() => {}}
      />
      <div className="space-y-[50px] pt-[100px] pb-[50px]">
        <div className="space-y-[100px] flex flex-col justify-center items-center px-[20px] lg:px-0 ">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full lg:max-w-[1240px] place-items-center">
            <FeatureCard
              title="Est. 2018"
              description="We have been in business for over 6 years with 1000’s of customers served."
            />
            <FeatureCard
              icon={
                <span className="text-[36px] text-active_hover font-bold">
                  ★ 4.7/5 ★
                </span>
              }
              title=""
              description="Our trained professionals are dedicated to meeting your needs and ensuring your satisfaction."
            />
            <FeatureCard
              icon={
                <span className="text-[30px] text-active_hover">
                  <FontAwesomeIcon icon={faSprayCanSparkles} />
                </span>
              }
              title=""
              description="We use quality products sourced from the USA, France, Australia, Korea, Taiwan & Japan."
            />
          </div>
          <WelcomeSection />
          <ChoseUsSection />
        </div>
      </div>
      <div className="py-[50px] bg-bg_dark flex justify-center items-center">
        <LocationSection />
      </div>

      <div className="py-[50px] flex justify-center items-center">
        <ServiceSection />
      </div>
      <div className="py-[50px] flex justify-center items-center">
        <ExploreSections />
      </div>
      <SubBanner
        bgImage="/images/banners/banner1.jpg"
        content="Unveil Your True Beauty"
        subContent={
          <div className="px-[20px] lg:px-0">
            <span className="text-white hidden lg:inline">
              Our expert team is ready to help you shine. Book your personalized{" "}
              <br />
              beauty experience now.
            </span>
            <span className="text-white lg:hidden">
              Our expert team is ready to help you shine. Book your personalized
              beauty experience now.
            </span>
          </div>
        }
        isShowButton={true}
        buttontitle="Book Appointment"
        handleClickButton={() => {}}
      />
    </div>
  );
}
