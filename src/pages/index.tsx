import FeatureCard from "@/components/Cards/FeatureCard";
import InforCard from "@/components/Cards/InfoCard";
import Banner from "@/components/Common/Banner/Banner";
import { faSprayCanSparkles } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
      <div className="space-y-[50px] pt-[50px]">
        <div className="flex justify-center items-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full lg:w-[1240px]">
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
        </div>
        <div className=" flex justify-center items-center w-full px-[20px] lg:px-0">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[20px] w-full lg:w-[1240px] place-items-center">
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
    </div>
  );
}
