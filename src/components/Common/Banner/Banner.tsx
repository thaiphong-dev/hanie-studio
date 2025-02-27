import React from "react";
import StyledButton from "../StyledButton/StyledButton";
import { Raleway } from "next/font/google";

const raleway = Raleway({
  weight: "700",
  subsets: ["latin"],
});
interface Props {
  content: string;
  subContent: string;
  isShowButton: boolean;
  handleClickButton?: () => void;
  bgImage: string;
}

const Banner: React.FC<Props> = ({
  content,
  subContent,
  isShowButton,
  handleClickButton,
  bgImage,
}) => {
  return (
    <div
      className="relative flex items-center justify-center h-[75vh]"
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
            "linear-gradient(rgba(247, 239, 240, 0.72), rgba(247, 239, 240, 0.72))",
          content: '""',
        }}
      ></div>
      <div className="text-center relative flex flex-col justify-center items-center space-y-[20px] ">
        <p
          className={`${raleway.className} text-card_header leading-[1.2] text-[42px] lg:text-[68px] font-[700] w-full px-[20px] lg:px-0 lg:w-[70%]`}
        >
          {content}
        </p>
        <p className="text-base_color text-[19px]">{subContent}</p>
        {isShowButton && (
          <StyledButton
            handleClick={handleClickButton ?? (() => {})}
            title="Book Your Experience"
          />
        )}
      </div>
    </div>
  );
};

export default Banner;
