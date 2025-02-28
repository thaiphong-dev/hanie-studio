/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react";
import { Layout, Menu, Select } from "antd/lib";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import i18n from "../../../../i18n";
import styles from "./MainMenu.module.scss";
import StyledButton from "../StyledButton/StyledButton";
import { useRouter } from "next/router";
const MainMenu = () => {
  const { t } = useTranslation();

  const router = useRouter();
  const { pathname } = router;

  const MENU_ITEMS = [
    { label: t("home"), key: "/", href: "/" },
    { label: t("about"), key: "/about", href: "/about" },

    {
      label: t("service"),
      key: "/service",
      children: [
        { label: t("nail design"), key: "/nail-design", href: "/nail-design" },
        { label: t("eyelash"), key: "/eyelash", href: "/eyelash" },
        { label: t("eyebrow"), key: "/eyebrow", href: "/eyebrow" },
      ],
    },
    { label: t("booking"), key: "/booking", href: "/booking" },
    { label: t("blog"), key: "/blog", href: "/blog" },
    { label: t("contact"), key: "/contact", href: "/contact" },
  ];

  const { Header } = Layout;

  const [drawerVisible, setDrawerVisible] = useState(false);

  const showDrawer = () => {
    setDrawerVisible(true);
  };

  const onClose = () => {
    setDrawerVisible(false);
  };

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  useEffect(() => {
    if (drawerVisible) {
      document.body.style.overflow = "hidden"; // Chặn cuộn khi mở menu
    } else {
      document.body.style.overflow = "auto"; // Cho phép cuộn khi đóng menu
    }

    return () => {
      document.body.style.overflow = "auto"; // Đảm bảo cuộn được bật lại khi component bị unmount
    };
  }, [drawerVisible]);

  return (
    <Layout className="w-full h-fit fixed top-0 z-[100] ">
      <Header className=" bg-white w-full h-full py-[5px] !px-[20px] flex justify-center items-center ">
        <div className="flex justify-between items-center lg:max-w-[1240px]  w-full">
          <div
            onClick={() => router.push("/")}
            className="relative w-[150px] aspect-video cursor-pointer"
          >
            <Image
              src="/images/logo.jpg"
              alt="Logo"
              className="mr-4"
              fill
              sizes="auto"
              objectFit="cover"
            />
          </div>
          <div className="flex items-center justify-end w-full">
            <Menu
              mode="horizontal"
              defaultSelectedKeys={["1"]}
              className="lg:flex flex-1 w-fit border-none justify-end customMenuItem hidden "
            >
              {MENU_ITEMS.map((item) =>
                item.children ? (
                  <Menu.SubMenu
                    title={
                      <div className="uppercase text-[15px] font-[500] !text-base_color hover:!text-active_hover flex justify-center items-center space-x-1">
                        <p
                          style={{
                            color:
                              pathname === item.key ? "#e48f99" : "#684a4e",
                          }}
                        >
                          {item.label}
                        </p>
                      </div>
                    }
                    key={item.key}
                  >
                    {item.children.map((child) => (
                      <Menu.Item className="" key={child.key}>
                        <a
                          className="uppercase text-[15px] font-[500] !text-base_color hover:!text-active_hover"
                          href={child.href}
                        >
                          {child.label}
                        </a>
                      </Menu.Item>
                    ))}
                  </Menu.SubMenu>
                ) : (
                  <Menu.Item key={item.label}>
                    <a
                      className="uppercase text-[15px] font-[500]  hover:!text-active_hover"
                      style={{
                        color: pathname === item.key ? "#e48f99" : "#684a4e",
                      }}
                      href={item.href}
                    >
                      {item.label}
                    </a>
                  </Menu.Item>
                )
              )}
            </Menu>
            <Select
              className={`${styles.customSelect} hidden lg:block`}
              onChange={(e) => changeLanguage(e)}
              defaultValue={i18n.language}
              options={[
                {
                  label: (
                    <div className="flex justify-center items-center space-x-2">
                      <Image
                        src={"/images/icons/VN.svg"}
                        width={18}
                        height={12}
                        alt="vn"
                      />
                      <div>
                        <p>VN</p>
                      </div>
                    </div>
                  ),
                  value: "vn",
                },
                {
                  label: (
                    <div className="flex justify-center items-center space-x-2">
                      <Image
                        src={"/images/icons/US.svg"}
                        width={18}
                        height={12}
                        alt="EN"
                      />
                      <div>
                        <p>EN</p>
                      </div>
                    </div>
                  ),
                  value: "en",
                },
              ]}
            ></Select>
            <StyledButton
              handleClick={() => console.log("Book now")}
              title={t("book now")}
            />
            <div className="lg:hidden pl-[20px]">
              {!drawerVisible ? (
                <div className="relative w-[40px] aspect-square cursor-pointer">
                  <Image
                    fill
                    sizes="auto"
                    src="/images/icons/menu.svg"
                    alt="menu"
                    onClick={showDrawer}
                  />
                </div>
              ) : (
                <div className="relative ml-[15px] w-[25px] aspect-square cursor-pointer z-[100]">
                  <Image
                    fill
                    sizes="auto"
                    src="/images/icons/cancel.svg"
                    alt="cancel"
                    onClick={onClose}
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </Header>

      <div
        className="max-w-full h-full fixed  top-0 bottom-0 left-0 z-[100] bg-[#23282d] py-[30px] px-[20px] w-[80%] lg:hidden"
        style={{
          transform: drawerVisible ? "translateX(0)" : "translateX(-100%)",

          transition: "transform 0.3s ease",
        }}
      >
        <Menu
          mode="inline"
          className={`${styles.customMenuMO} !bg-[#23282d] space-y-[20px] `}
        >
          {MENU_ITEMS.map((item) =>
            item.children ? (
              <Menu.SubMenu
                title={
                  <div className="text-white text-[19px] font-[500] tracking-wider">
                    <p
                      style={{
                        color: pathname === item.key ? "#e48f99" : "#fff",
                      }}
                    >
                      {item.label}
                    </p>
                  </div>
                }
                key={item.key}
              >
                {item.children.map((child) => (
                  <Menu.Item key={child.key}>
                    <a
                      className=" text-[19px] font-[500] tracking-wider"
                      style={{
                        color: pathname === item.key ? "#e48f99" : "#fff",
                      }}
                      href={child.href}
                    >
                      {child.label}
                    </a>
                  </Menu.Item>
                ))}
              </Menu.SubMenu>
            ) : (
              <Menu.Item key={item.label}>
                <a
                  style={{ color: pathname === item.key ? "#e48f99" : "#fff" }}
                  className=" text-[19px] font-[500] tracking-wider"
                  href={item.href}
                >
                  {item.label}
                </a>
              </Menu.Item>
            )
          )}
        </Menu>
      </div>

      {/* Lớp overlay */}
      <div
        style={{
          opacity: drawerVisible ? 1 : 0,
          visibility: drawerVisible ? "visible" : "hidden",
          transition: "all 0.3s ease",
        }}
        onClick={onClose}
        className="fixed top-0 right-0 bottom-0 left-0  bg-black/50 z-[99]"
      ></div>
    </Layout>
  );
};

export default MainMenu;
