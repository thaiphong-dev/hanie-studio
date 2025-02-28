import React from "react";
import HeadingTitle from "../Common/HeadingTitle/HeadingTitle";
import Image from "next/image";
const ExploreSections = () => {
  const posts = [
    {
      img: "/images/mocks/service.webp",
      link: "/#",
    },
    {
      img: "/images/mocks/service1.webp",
      link: "/#",
    },
    {
      img: "/images/mocks/service2.webp",
      link: "/#",
    },
  ];
  return (
    <div className="w-full lg:max-w-[1240px] space-y-[50px] px-[20px] lg:px-0 ">
      <div className="flex justify-between items-center flex-col lg:flex-row ">
        <HeadingTitle
          title={
            <span className="text-base_color font-[600] text-[19px]">
              Connect and book your look
            </span>
          }
        />
        <HeadingTitle
          title={
            <div className="text-[32px] lg:text-[55px] text-center lg:text-right ">
              Explore our latest
              <p> styles</p>
            </div>
          }
        />
      </div>
      <div className="w-full lg:max-w-[1240px] space-y-[50px] px-[20px] lg:px-0 lg:flex flex-col justify-center items-center">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full lg:max-w-[1100px] place-items-center">
          {posts?.map((post, index) => (
            <div
              key={index}
              className="relative w-full aspect-square overflow-hidden cursor-pointer"
            >
              <Image
                src={post.img}
                alt="post"
                fill
                sizes="auto"
                objectFit="cover"
                className="transition-transform duration-300 ease-in-out hover:scale-110"
              />
            </div>
          ))}
        </div>

        <button className="bg-active_main text-[14px] text-white py-3 px-8 rounded-md hover:bg-active_hover transition duration-300 flex justify-center">
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
  );
};

export default ExploreSections;
