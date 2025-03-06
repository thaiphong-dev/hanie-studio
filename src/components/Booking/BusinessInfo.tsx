import React from "react";
import { MapPin } from "lucide-react";
import Image from "next/image";

interface BusinessInfoProps {
  logoSrc: string;
  businessName: string;
  address: {
    building: string;
    area: string;
    city: string;
    zipCode: string;
  };
}

const BusinessInfo: React.FC<BusinessInfoProps> = ({
  businessName,
  address,
}) => {
  return (
    <div className="h-full flex flex-col items-center justify-center animate-fadeIn shadow-xl rounded-2xl border p-5 text-[16px]">
      <div className="relative w-[150px] aspect-video cursor-pointer">
        <Image
          src="/images/logo.jpg"
          alt="Logo"
          className="mr-4"
          fill
          sizes="auto"
          objectFit="cover"
        />
      </div>

      <h1 className=" font-semibold text-[22px] lg:text-[32px]">
        {businessName}
      </h1>

      <div className="text-center ">
        <div className="flex justify-center items-center ">
          <MapPin size={16} className="" />
          <p className="">
            {address.building}, {address.city}
          </p>
        </div>
      </div>
    </div>
  );
};

export default BusinessInfo;
