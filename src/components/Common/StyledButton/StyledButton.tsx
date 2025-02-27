import React from "react";
import { useTranslation } from "react-i18next";

interface Props {
  handleClick: () => void;
  title: string;
}
const StyledButton = ({ handleClick, title }: Props) => {
  const { t } = useTranslation();
  return (
    <div
      onClick={handleClick}
      className="cursor-pointer w-fit h-fit bg-active_main border-active_main text-white hover:bg-active_hover py-[3px] lg:py-[6px] px-[18px] text-[18px] font-[400] rounded-[5px]"
    >
      <p className="leading-loose capitalize lett tracking-wider">{t(title)}</p>
    </div>
  );
};

export default StyledButton;
