import React from "react";
import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faPhone } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faInstagramSquare,
} from "@fortawesome/free-brands-svg-icons";
const FindUsSection = () => {
  const { t } = useTranslation();
  return (
    <div>
      <div className="lg:flex justify-between items-start lg:space-x-[50px] space-y-[30px] max-w-[1240px]">
        {/* Google Map */}
        <div className="w-full aspect-square">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3875.235893955029!2d109.21657847493134!3d13.764643196996339!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x316f6dc4164d4271%3A0x2b0520a3900f15f8!2sHanie%20Nails%20Quy%20Nhon!5e0!3m2!1svi!2s!4v1740909990116!5m2!1svi!2s"
            style={{ border: 0 }}
            allowFullScreen
            width={"100%"}
            height={"100%"}
            loading="lazy"
          ></iframe>
        </div>
        <div className="w-full space-y-[20px]">
          <p className="capitalize text-[34px] lg:text-[48px] text-card_header font-bold">
            {t("How to find us")}
          </p>

          <p className="capitalize text-[19px]">
            {t(
              "We are conveniently located in the heart of Quy Nhon city on the Nguyen Nhac street"
            )}
          </p>
          <p className="capitalize text-[19px]">
            {t("Free parking is available before the shop")}
          </p>

          <div className="grid grid-cols-2 gap-4 lg:pt-[20px]">
            <div>
              <p className="capitalize text-active_hover font-semibold">
                <FontAwesomeIcon icon={faClock} className="text-active_hover" />{" "}
                {t("hours")}
              </p>
              <p>{t("Mon to Sun: 8am - 8pm")}</p>
            </div>
            <div>
              <p className="capitalize text-active_hover font-semibold">
                <FontAwesomeIcon icon={faPhone} className="text-active_hover" />{" "}
                {t("Call us")}
              </p>
              <p>+84 967 273 066</p>
            </div>
            <div>
              <p className="capitalize text-active_hover font-semibold">
                <FontAwesomeIcon
                  icon={faFacebook}
                  className="text-active_hover"
                />{" "}
                {t("Facebook")}
              </p>
              <p>🎀Hanie In Quy Nhon🎀</p>
            </div>
            <div>
              <p className="capitalize text-active_hover font-semibold">
                <FontAwesomeIcon
                  icon={faInstagramSquare}
                  className="text-active_hover"
                />{" "}
                {t("Instagram")}
              </p>
              <p>🎀Hanie In Quy Nhon🎀</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FindUsSection;
