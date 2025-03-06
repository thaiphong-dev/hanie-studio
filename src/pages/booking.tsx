import PageBanner from "@/components/Common/Banner/PageBanner";
import SubBanner from "@/components/Common/Banner/SubBanner";
import React, { useState } from "react";
import { Licorice } from "next/font/google";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";
import ServicesCollapse from "@/components/Booking/ServicesCollapse";
import BusinessInfo from "@/components/Booking/BusinessInfo";
import SummaryInfo from "@/components/Booking/SummaryInfo";
import { ServiceDetail } from "@/types/ServiceType";
import { useTranslation } from "react-i18next";
import { CalendarCheck2, ArrowLeft, ChevronUp } from "lucide-react";
import CalendarSelector from "@/components/Common/Calendar/CalendarSelector";
// import { Footer } from "antd/es/layout/layout";

const licorice = Licorice({
  weight: "400",
  subsets: ["latin"],
});

const Booking = () => {
  const serviceCategories = [
    {
      id: "nails",
      name: "NAILS",
      services: [
        {
          id: "n1",
          name: "làm sạch da tay/chân (lấy khóe)",
          duration: "30 phút",
          minPrice: "30000",
          maxPrice: "40000",
          unit: "VNĐ",
          details: "",
        },
        {
          id: "n2",
          name: "Sơn gel",
          duration: "1 tiếng",
          minPrice: "100000",
          maxPrice: undefined,
          unit: "VNĐ",
          details: "",
        },
        {
          id: "n3",
          name: "Cứng móng",
          duration: "15 phút",
          minPrice: "20000",
          maxPrice: undefined,
          unit: "VNĐ",
          details: "",
        },
        {
          id: "n4",
          name: "Mắt mèo/Tráng gương/Ombre",
          duration: "30 phút - 1 tiếng",
          minPrice: "15000",
          maxPrice: undefined,
          unit: "1 finger",
          details: "",
        },
        {
          id: "n5",
          name: "Vẽ",
          duration: "1 tiếng - 2 tiếng",
          minPrice: "10000",
          maxPrice: "50000",
          unit: "VNĐ",
          details: "",
        },
        {
          id: "n6",
          name: "Dán sticker",
          duration: "15 phút",
          minPrice: "5000",
          maxPrice: "20000",
          unit: "VNĐ",
          details: "",
        },
        {
          id: "n7",
          name: "Ẩn",
          duration: "30 phút",
          minPrice: "10000",
          maxPrice: "30000",
          unit: "VNĐ",
          details: "",
        },
        {
          id: "n8",
          name: "Úp móng(Keo)",
          duration: "1 tiếng - 1.5 tiếng",
          minPrice: "100000",
          maxPrice: undefined,
          unit: "VNĐ",
          details: "",
        },
        {
          id: "n9",
          name: "Úp móng(glue gel)",
          duration: "1 tiếng - 1.5 tiếng",
          minPrice: "120000",
          maxPrice: undefined,
          unit: "VNĐ",
          details: "",
        },
        {
          id: "n10",
          name: "Nối móng(Bột/Gel)",
          duration: "1.5 tiếng - 2 tiếng",
          minPrice: "250000",
          maxPrice: undefined,
          unit: "VNĐ",
          details: "",
        },
        {
          id: "n11",
          name: "Charm/Đính đá",
          duration: "30 phút - 1 tiếng",
          minPrice: "10000",
          maxPrice: "100000",
          unit: "VNĐ",
          details: "",
        },
        {
          id: "n12",
          name: "Phá Gel(sơn gel - móng nối)",
          duration: "30 phút - 1 tiếng",
          minPrice: "30000",
          maxPrice: "50000",
          unit: "VNĐ",
          details: "",
        },
      ],
    },
    {
      id: "eyelash",
      name: "EYELASH",
      services: [
        {
          id: "e1",
          name: "Nối mi Classic",
          duration: "1 tiếng - 1.5 tiếng",
          minPrice: "150000",
          maxPrice: "250000",
          unit: "VNĐ",
          details: "",
        },
        {
          id: "e2",
          name: "Nối mi Volume",
          duration: "1.5 tiếng - 2 tiếng",
          minPrice: "200000",
          maxPrice: "350000",
          unit: "VNĐ",
          details: "",
        },
        {
          id: "e3",
          name: "Nối mi Mega Volume",
          duration: "2 tiếng - 2.5 tiếng",
          minPrice: "200000",
          maxPrice: "350000",
          unit: "VNĐ",
          details: "",
        },
        {
          id: "e4",
          name: "Nối mi thiên thần",
          duration: "1.5 tiếng - 2 tiếng",
          minPrice: "200000",
          maxPrice: "350000",
          unit: "VNĐ",
          details: "",
        },
        {
          id: "e5",
          name: "Nối mi Katun",
          duration: "1 tiếng - 1.5 tiếng",
          minPrice: "200000",
          maxPrice: "350000",
          unit: "VNĐ",
          details: "",
        },
        {
          id: "e6",
          name: "Nối mi đen tuyền",
          duration: "1 tiếng - 1.5 tiếng",
          minPrice: "200000",
          maxPrice: "350000",
          unit: "VNĐ",
          details: "",
        },
        {
          id: "e7",
          name: "Nối mi màu",
          duration: "1.5 tiếng - 2 tiếng",
          minPrice: "200000",
          maxPrice: "350000",
          unit: "VNĐ",
          details: "",
        },
        {
          id: "e8",
          name: "Tháo mi",
          duration: "15 phút",
          minPrice: "200000",
          maxPrice: "350000",
          unit: "VNĐ",
          details: "",
        },
        {
          id: "e9",
          name: "Uốn mi collagen",
          duration: "1 tiếng",
          minPrice: "200000",
          maxPrice: "350000",
          unit: "VNĐ",
          details: "",
        },
        {
          id: "e10",
          name: "Dưỡng mi keratin",
          duration: "30 phút",
          minPrice: "200000",
          maxPrice: "350000",
          unit: "VNĐ",
          details: "",
        },
      ],
    },
    {
      id: "eyebrow",
      name: "EYEBROW",
      services: [
        {
          id: "b1",
          name: "Phun chân mày tán bột",
          duration: "2 tiếng - 3 tiếng",
          minPrice: "200000",
          maxPrice: "350000",
          unit: "VNĐ",
          details: "",
        },
        {
          id: "b2",
          name: "Điêu khắc chân mày",
          duration: "2 tiếng - 3 tiếng",
          minPrice: "200000",
          maxPrice: "350000",
          unit: "VNĐ",
          details: "",
        },
        {
          id: "b3",
          name: "Phun ombre shading",
          duration: "2 tiếng - 3 tiếng",
          minPrice: "200000",
          maxPrice: "350000",
          unit: "VNĐ",
          details: "",
        },
        {
          id: "b4",
          name: "Tạo dáng chân mày",
          duration: "30 phút",
          minPrice: "200000",
          maxPrice: "350000",
          unit: "VNĐ",
          details: "",
        },
        {
          id: "b5",
          name: "Nhuộm chân mày",
          duration: "30 phút",
          minPrice: "200000",
          maxPrice: "350000",
          unit: "VNĐ",
          details: "",
        },
      ],
    },
    {
      id: "treatment",
      name: "TREATMENT",
      services: [
        {
          id: "t1",
          name: "Tẩy tế bào chết",
          duration: "30 phút",
          minPrice: "90000",
          maxPrice: undefined,
          unit: "VNĐ",
          details: "",
        },
        {
          id: "t2",
          name: "Chà gót chân",
          duration: "1 tiếng",
          minPrice: "200000",
          maxPrice: "350000",
          unit: "VNĐ",
          details: "",
        },
        {
          id: "t3",
          name: "Dịch vụ cho nam (bao gồm cắt da tay/chân, tẩy tbc chân, thoa kem dưỡng",
          duration: "1 tiếng - 1.5 tiếng",
          minPrice: "90000",
          maxPrice: undefined,
          unit: "VNĐ",
          details: "",
        },
      ],
    },
  ];

  const businessInfo = {
    logoSrc: "/lovable-uploads/553764a7-dd58-404d-af08-8f3ca8200e68.png",
    businessName: "Hanie Studio",
    address: {
      building: "55 Nguyen Nhac street",
      area: "",
      city: "Quy Nhon City",
      zipCode: "140620",
    },
  };
  const { t } = useTranslation();
  const [servicesSelected, setServicesSelected] = useState<ServiceDetail[]>([]);
  const [selectedDateTime, setSelectedDateTime] = useState<{
    date: Date;
    time: string | null;
  }>({
    date: new Date(),
    time: null,
  });

  const handeChangeTimeBooking = (date: Date, time: string | null) => {
    setSelectedDateTime({
      date,
      time,
    });
  };
  const handleAddorRemoveService = (service: ServiceDetail) => {
    setServicesSelected((prev) =>
      prev?.map((x) => x?.id).includes(service?.id)
        ? prev.filter((p) => p.id !== service?.id)
        : [...prev, service]
    );
  };
  const [isShowCalendar, setIsShowCalendar] = useState(false);
  return (
    <div className="pb-[100px] lg:pb-0">
      <PageBanner
        bgImage="/images/banners/about.webp"
        isShowButton={false}
        content="booking"
        subContent="Book your personalized beauty experience now"
      />

      <div className="space-y-[50px] pt-[50px] pb-[50px]">
        <div className="space-y-[100px] w-full place-items-center ] ">
          <div className="flex flex-col lg:flex-row lg:space-x-[50px] justify-between items-start w-full max-w-[1240px] px-[20px] lg:px-0">
            {/* Left panel - Services */}
            <div className="w-full lg:w-2/3 overflow-y-auto ">
              {isShowCalendar ? (
                <CalendarSelector
                  handeChangeTimeBooking={handeChangeTimeBooking}
                />
              ) : (
                <ServicesCollapse
                  servicesSelected={servicesSelected}
                  categories={serviceCategories}
                  handleClickService={handleAddorRemoveService}
                />
              )}
            </div>

            {/* Right panel - Business Info  */}
            <div className="w-full lg:w-1/3 space-y-[30px] hidden lg:block ">
              <BusinessInfo {...businessInfo} />
              {servicesSelected?.length > 0 && (
                <>
                  <SummaryInfo
                    handleClickService={handleAddorRemoveService}
                    data={servicesSelected}
                    selectedDateTime={selectedDateTime}
                  />
                  {!isShowCalendar ? (
                    <div
                      onClick={() => {
                        setIsShowCalendar(true);
                      }}
                      className="cursor-pointer flex justify-center space-x-[10px] items-center w-full text-center h-fit bg-active_main border-active_main text-white hover:bg-active_hover py-[3px] lg:py-[6px] px-[18px] text-[17px] font-[500] rounded-[5px]"
                    >
                      <p className="leading-loose capitalize  tracking-wider">
                        {t("select time")}{" "}
                      </p>
                      <CalendarCheck2
                        size={18}
                        className="hover:text-active_main"
                      />
                    </div>
                  ) : (
                    <div className="flex justify-center items-center space-x-[10px]">
                      <div
                        onClick={() => {
                          setIsShowCalendar(false);
                        }}
                        className="cursor-pointer flex justify-center space-x-[10px] items-center w-full text-center h-fit  hover:border-active_hover hover:text-active_hover text-bg_dark border border-bg_dark py-[3px] lg:py-[6px] px-[18px] text-[17px] font-[500] rounded-[5px]"
                      >
                        <ArrowLeft size={18} className="" />
                        <p className="leading-loose capitalize  tracking-wider">
                          {t("back")}
                        </p>
                      </div>
                      <div
                        onClick={() => {
                          setIsShowCalendar(true);
                        }}
                        className="cursor-pointer flex justify-center space-x-[10px] items-center w-full text-center h-fit bg-active_main border-active_main text-white hover:bg-active_hover py-[3px] lg:py-[6px] px-[18px] text-[17px] font-[500] rounded-[5px]"
                      >
                        <p className="leading-loose capitalize  tracking-wider">
                          {t("book now")}{" "}
                        </p>
                      </div>
                    </div>
                  )}
                </>
              )}
            </div>
          </div>
        </div>
        <div className="fixed bottom-0 right-0 left-0 bg-white z-[100] lg:hidden shadow-transparent">
          <div className="w-full place-items-center">
            <ChevronUp className="text-[18px]" />
          </div>
          <SummaryInfo
            handleClickService={handleAddorRemoveService}
            data={servicesSelected}
            selectedDateTime={selectedDateTime}
          />
        </div>
      </div>

      <div className="hidden lg:block">
        <SubBanner
          bgImage="/images/about/subbanner.webp"
          subContent={
            <div className="px-[20px] lg:px-0">
              <div>
                <FontAwesomeIcon
                  icon={faQuoteLeft}
                  className="text-[50px] text-active_main"
                />
              </div>
              <p className={`text-white text-[34px] ${licorice.className}`}>
                Beauty is not caused. It is.
              </p>
            </div>
          }
          isShowButton={false}
        />
        {/* <Footer /> */}
      </div>
    </div>
  );
};

export default Booking;
