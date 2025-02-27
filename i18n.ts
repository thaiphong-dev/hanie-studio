import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import en from "./public/locales/en/common.json";
import vn from "./public/locales/vn/common.json";

const resources = {
  en: {
    translation: { ...en },
  },
  vn: {
    translation: { ...vn },
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    lng: "vn", // default language
    fallbackLng: "vn",
    interpolation: {
      escapeValue: false,
    },
  });

export const changeLanguage = (lng: "en" | "vn") => {
  i18n.changeLanguage(lng);
};

export default i18n;
