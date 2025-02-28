import React, { ReactNode } from "react";
import StyledButton from "../StyledButton/StyledButton";
import { Raleway } from "next/font/google";

const raleway = Raleway({
  weight: "700",
  subsets: ["latin"],
});
interface Props {
  content: string;
  subContent: ReactNode;
  isShowButton: boolean;
  handleClickButton?: () => void;
  bgImage: string;
  buttontitle?: string;
}

const SubBanner: React.FC<Props> = ({
  content,
  subContent,
  isShowButton,
  handleClickButton,
  bgImage,
  buttontitle,
}) => {
  return (
    <div
      className="relative flex items-center justify-center h-[50vh]"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundColor: "#f7eff0",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
      }}
    >
      <div
        className="absolute top-0 right-0 bottom-0 left-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(69, 44, 47, 0.68), rgba(69, 44, 47, 0.58))",
          content: '""',
        }}
      ></div>
      <div className="text-center relative flex flex-col justify-center items-center space-y-[20px] ">
        <p
          className={`${raleway.className} text-white leading-[1.2] text-[30px] lg:text-[34px] font-[700] w-full px-[20px] lg:px-0 lg:w-[70%]`}
        >
          {content}
        </p>
        <p className="text-base_color text-[19px]">{subContent}</p>
        {isShowButton && (
          <StyledButton
            handleClick={handleClickButton ?? (() => {})}
            title={buttontitle ?? ""}
          />
        )}
      </div>
    </div>
  );
};

export default SubBanner;
