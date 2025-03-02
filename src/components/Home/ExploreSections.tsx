import React from "react";
import HeadingTitle from "../Common/HeadingTitle/HeadingTitle";
import Image from "next/image";
import InstagramFeed from "../InstagramFeed/InstagramFeed";
import { useInstagramProfile } from "@/hooks/Instagram/useInstagramProfile";

const ExploreSections = () => {
  const { data: profileData } = useInstagramProfile();

  return (
    <div className="w-full lg:max-w-[1240px] space-y-[50px] px-[20px] lg:px-0  ">
      <div className="flex justify-between items-center flex-col lg:flex-row  ">
        <HeadingTitle
          title={
            <span className=" font-[600] text-[19px] text-white">
              Connect and book your look
            </span>
          }
        />
        <HeadingTitle
          title={
            <div className="text-[32px] lg:text-[55px] text-center lg:text-right text-white">
              Explore our latest
              <p> styles</p>
            </div>
          }
        />
      </div>
      <div className="w-full lg:max-w-[1240px] space-y-[50px] lg:flex flex-col justify-center items-center">
        <InstagramFeed />
        <div className="w-full flex justify-center items-center">
          <button
            onClick={() => {
              window.open(profileData?.profileUrl, "_blank", "noopener");
            }}
            className="bg-active_main text-[14px] text-white py-3 px-8 rounded-md hover:bg-active_hover transition duration-300 flex justify-center"
          >
            <div className="w-[20px] h-[20px] mr-2 relative">
              <Image
                src="/images/icons/ig1.svg"
                fill
                sizes="auto"
                alt="ig"
                color="white"
              />
            </div>
            <p>Follow us: 🎀Hanie In Quy Nhon🎀</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ExploreSections;
