import Image from "next/image";

import { Raleway } from "next/font/google";

const raleway = Raleway({
  weight: "700",
  subsets: ["latin"],
});

interface InforCardProps {
  imageSrc: string;
  title: string;
  description: string;
  linkText: string;
  linkHref: string;
}

const InforCard: React.FC<InforCardProps> = ({
  imageSrc,
  title,
  description,
  linkText,
  linkHref,
}) => {
  return (
    <div className="relative w-full max-w-md">
      <div className="relative w-full aspect-video">
        <Image
          src={imageSrc}
          alt={title}
          layout="fill"
          objectFit="cover"
          className="rounded-lg"
        />
      </div>
      <div className="relative w-full h-fit mt-[-20%] z-10 flex justify-center items-center text-card_header">
        <div className=" bg-white p-6 shadow-lg rounded-lg w-[85%] space-y-[10px] lg:space-y-[20px]">
          <h3 className={`${raleway.className} text-[22px] text-card_header`}>
            {title}
          </h3>
          <p className=" text-[19px] text-left">{description}</p>
          <a
            href={linkHref}
            className=" inline-flex items-center text-[19px] font-[600]  hover:text-active_main"
          >
            {linkText}
            <span className="ml-2">&rarr;</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default InforCard;
