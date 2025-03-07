import Image from "next/image";
import React from "react";
import { ChevronLeft } from "lucide-react";

interface Props {
  handleBack: () => void;
  title?: string;
}
const LogoBack: React.FC<Props> = ({ handleBack, title }) => {
  return (
    <div className="w-full h-full flex items-center justify-start p-3 space-x-[10px] bg-[#f2f2f2]">
      <div onClick={handleBack}>
        <ChevronLeft className="text-[24px] font-thin" />
      </div>
      {title ? (
        <div className=" font-playfair italic font-medium">
          <span className="block text-[19px] font-[600] text-active_main ">
            {title}
          </span>
        </div>
      ) : (
        <>
          <div className="relative w-[50px] aspect-square cursor-pointer">
            <Image
              src="/images/logo.jpg"
              alt="Logo"
              className="rounded-full"
              fill
              sizes="auto"
              objectFit="cover"
            />
          </div>

          <div className=" font-playfair italic font-medium">
            <span className="block text-[19px] font-[600] text-active_main ">
              Hanie Studio
            </span>
          </div>
        </>
      )}
    </div>
  );
};

export default LogoBack;
