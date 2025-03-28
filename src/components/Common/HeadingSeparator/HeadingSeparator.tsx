import React, { ReactNode } from "react";
import { useTranslation } from "react-i18next";

interface Props {
  title?: string;
  titleCustom?: ReactNode;
}
const HeadingSeparator: React.FC<Props> = ({ title, titleCustom }) => {
  const { t } = useTranslation();
  return (
    <div className="flex items-center space-x-[10px] lg:space-x-[20px]">
      <p className="capitalize text-[19px] text-base_color font-[600]">
        {titleCustom ? titleCustom : title ? t(title) : ""}
      </p>
      <div className="w-[100px] lg:w-[200px] h-[1px] bg-active_main"></div>
    </div>
  );
};

export default HeadingSeparator;
