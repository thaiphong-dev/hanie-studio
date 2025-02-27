import React from "react";
// import { useTranslation } from "react-i18next";
import i18n from "../../../i18n";

const LanguageSwitcher = () => {
  //   const { i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div>
      <button onClick={() => changeLanguage("en")}>EN</button>
      <button onClick={() => changeLanguage("vn")}>VN</button>
    </div>
  );
};

export default LanguageSwitcher;
