import React, { useMemo } from "react";
import { ServiceDetail } from "@/types/ServiceType";
import { useTranslation } from "react-i18next";
import { formatPrice } from "../../../utils/format";
import { CalendarCheck2, MinusCircle } from "lucide-react";
import { format } from "date-fns";

interface SummaryInfoProps {
  data: ServiceDetail[];
  isExpandSummary?: boolean;
  isMobile?: boolean;
  handleClickService: (service: ServiceDetail) => void;
  handleShowCalendar?: () => void;
  isShowCalendar?: boolean;
  selectedDateTime: {
    date: Date;
    time: string | null;
  };
  setIsExpandSummary?: React.Dispatch<React.SetStateAction<boolean>>;
}

const SummaryInfo: React.FC<SummaryInfoProps> = ({
  data,
  handleClickService,
  selectedDateTime,
  isExpandSummary,
  handleShowCalendar,
  isMobile,
  isShowCalendar,
  setIsExpandSummary,
}) => {
  const { t } = useTranslation();
  const estimatePrice = useMemo(() => {
    return data?.reduce((sum, service) => sum + Number(service?.minPrice), 0);
  }, [data]);
  return (
    <div className="h-full  animate-fadeIn shadow-xl rounded-2xl lg:border  p-5 pt-0 lg:pt-5 space-y-[10px] ">
      <h1 className="capitalize font-bold text-bg_dark lg:block hidden">
        {t("summary")}
      </h1>

      <div className="lg:hidden flex justify-between items-center">
        <h1 className="capitalize font-bold text-bg_dark">{t("summary")}</h1>
        {data?.length > 0 && !isShowCalendar && (
          <div
            onClick={(e) => {
              e.stopPropagation();
              setIsExpandSummary?.(false);
              handleShowCalendar?.();
            }}
            className="cursor-pointer flex justify-center space-x-[10px] items-center w-fit text-center h-fit bg-active_main border-active_main text-white hover:bg-active_hover py-[3px] lg:py-[6px] px-[18px] text-[16px] font-[500] rounded-[5px]"
          >
            <p className="leading-loose capitalize  tracking-wider">
              {t("select time")}{" "}
            </p>
            <CalendarCheck2 size={16} className="hover:text-active_main" />
          </div>
        )}
      </div>
      {(isExpandSummary || !isMobile) && selectedDateTime.time && (
        <div className=" text-[16px] ">
          <h3 className=" font-semibold">{selectedDateTime.time}</h3>
          <div className="flex items-center mt-1 text-xs text-base_color ">
            {format(selectedDateTime.date, "EEEE d MMMM yyyy")}
          </div>
        </div>
      )}
      {(isExpandSummary || !isMobile) && (
        <div className=" text-[16px] overflow-y-auto lg:max-h-full max-h-[30vh]">
          {data?.map((service) => (
            <div key={service.id} className="w-full my-[10px] ">
              <div
                className=" flex justify-between items-center"
                // onClick={() => toggleService(service.id)}
              >
                <div>
                  <h3 className=" font-medium text-base_color">
                    {service.name}
                  </h3>
                  <div className="flex items-center mt-1 text-xs text-base_color ">
                    <span>{service.duration}</span>

                    <>
                      <span className="mx-2">•</span>

                      <span className=" font-medium">
                        {service.maxPrice
                          ? `${formatPrice(
                              Number(service?.minPrice) ?? 0
                            )} - ${formatPrice(Number(service?.maxPrice))}`
                          : formatPrice(Number(service?.minPrice) ?? 0)}{" "}
                        {service.unit}
                      </span>
                    </>
                  </div>
                </div>
                <div
                  onClick={(e) => {
                    e.stopPropagation();
                    handleClickService(service);
                  }}
                  className="flex items-center cursor-pointer"
                >
                  <MinusCircle size={16} className="hover:text-active_main" />
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      <div className="border-t text-[16px] text-bg_dark mt-[20px] flex justify-between items-center">
        <p className="capitalize font-bold">{t("estimated total")}:</p>
        <p className="font-semibold text-active_main text-[18px]">
          {formatPrice(estimatePrice)} VNĐ
        </p>
      </div>
    </div>
  );
};

export default SummaryInfo;
