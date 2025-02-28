import React, { ReactNode } from "react";
import { Raleway } from "next/font/google";

const raleway = Raleway({
  weight: "700",
  subsets: ["latin"],
});

interface Props {
  title: ReactNode;
}
const HeadingTitle: React.FC<Props> = ({ title }) => {
  return (
    <div
      className={`${raleway.className} text-[30px] lg:text-[34px] capitalize text-bg_dark`}
    >
      {title}
    </div>
  );
};

export default HeadingTitle;
