import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarkerAlt,
  faPhone,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import {
  faLine,
  faWhatsapp,
  faInstagram,
  faFacebook,
  faTiktok,
  faGoogle,
} from "@fortawesome/free-brands-svg-icons";
import { useRouter } from "next/router";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();
  const router = useRouter();
  const services = [
    {
      label: "lash extension",
      link: "/#",
    },
    {
      label: "Lash/Brow Lift & Tint",
      link: "/#",
    },
    {
      label: "Nail Design & Extension",
      link: "/#",
    },
    {
      label: "Manicure & Pedicure",
      link: "/#",
    },
    {
      label: "Paraffin Treatment",
      link: "/#",
    },
    {
      label: "Semi-Permanent Makeup",
      link: "/#",
    },
  ];
  const MENU_ITEMS = [
    { label: "home", key: "/", href: "/" },
    { label: "about", key: "/about", href: "/about" },

    {
      label: "service",
      key: "/service",
    },
    { label: "booking", key: "/booking", href: "/booking" },
    { label: "contact", key: "/contact", href: "/contact" },
  ];
  return (
    <footer className=" bg-black text-white py-8 px-4 flex flex-col justify-center items-center">
      <div className="w-full mx-auto grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 gap-8  place-items-center">
        {/* Contact Section */}
        <div className=" w-full space-y-[10px] flex flex-col justify-center items-center min-w-fit">
          <h3 className="text-xl font-semibold mb-4">Contact</h3>
          <p className="flex items-center justify-center md:justify-start gap-2">
            <FontAwesomeIcon icon={faMapMarkerAlt} /> Quy Nhon, Viet Nam
          </p>
          <p className="flex items-center justify-center md:justify-start gap-2">
            <FontAwesomeIcon icon={faPhone} /> +84 967 273 066
          </p>
          <p className="flex items-center justify-center md:justify-start gap-2">
            <FontAwesomeIcon icon={faEnvelope} /> HanieInQuyNhon@gmail.com
          </p>
          <p className="flex items-center justify-center md:justify-start gap-2">
            <FontAwesomeIcon icon={faLine} /> @Hanie.In.QuyNhon
          </p>
          <p className="flex items-center justify-center md:justify-start gap-2">
            <FontAwesomeIcon icon={faWhatsapp} /> +84 967 273 066
          </p>
          <div className="flex justify-center md:justify-start gap-4 mt-2">
            <FontAwesomeIcon icon={faInstagram} className="text-xl" />
            <FontAwesomeIcon icon={faFacebook} className="text-xl" />
            <FontAwesomeIcon icon={faTiktok} className="text-xl" />
            <FontAwesomeIcon icon={faGoogle} className="text-xl" />
          </div>
        </div>

        {/* Google Map */}
        <div className="flex justify-center w-auto aspect-square">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3875.235893955029!2d109.21657847493134!3d13.764643196996339!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x316f6dc4164d4271%3A0x2b0520a3900f15f8!2sHanie%20Nails%20Quy%20Nhon!5e0!3m2!1svi!2s!4v1740909990116!5m2!1svi!2s"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>

        {/* Services */}
        <div className="text-center space-y-[10px]">
          <h3 className="text-xl font-semibold mb-4">Services</h3>
          <ul className="space-y-2 ">
            {services?.map((x, index) => (
              <li
                className="hover:text-active_main cursor-pointer hover:underline"
                key={index}
                onClick={() => router.push(x?.link)}
              >
                {t(x?.label ?? "")}
              </li>
            ))}
          </ul>
        </div>

        {/* Menu */}
        <div className="text-center space-y-[10px] hidden xl:block">
          <h3 className="text-xl font-semibold mb-4">Menu</h3>
          <ul className="space-y-2">
            {MENU_ITEMS?.map((x, index) => (
              <li
                className="hover:text-active_main cursor-pointer hover:underline"
                key={index}
                onClick={() => router.push(x?.href ?? "")}
              >
                {t(x?.label ?? "")}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <p className="text-center mt-6 lg:mt-10">
        © 2025 Hanie Studio In Quy Nhon
      </p>
    </footer>
  );
};

export default Footer;
