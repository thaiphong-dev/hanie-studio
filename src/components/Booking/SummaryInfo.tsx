import React, { useMemo } from "react";
import { ServiceDetail } from "@/types/ServiceType";
import { useTranslation } from "react-i18next";
import { formatPrice } from "../../../utils/format";
import { MinusCircle } from "lucide-react";
import { format } from "date-fns";

interface SummaryInfoProps {
  data: ServiceDetail[];
  handleClickService: (service: ServiceDetail) => void;
  selectedDateTime: {
    date: Date;
    time: string | null;
  };
}

const SummaryInfo: React.FC<SummaryInfoProps> = ({
  data,
  handleClickService,
  selectedDateTime,
}) => {
  const { t } = useTranslation();
  const estimatePrice = useMemo(() => {
    return data?.reduce((sum, service) => sum + Number(service?.minPrice), 0);
  }, [data]);
  return (
    <div className="h-full  animate-fadeIn shadow-xl rounded-2xl lg:border p-5 space-y-[10px] ">
      <h1 className="capitalize font-bold text-bg_dark">{t("summary")}</h1>
      {selectedDateTime.time && (
        <div className=" text-[16px] ">
          <h3 className=" font-semibold">{selectedDateTime.time}</h3>
          <div className="flex items-center mt-1 text-xs text-base_color ">
            {format(selectedDateTime.date, "EEEE d MMMM yyyy")}
          </div>
        </div>
      )}
      <div className=" text-[16px] border-b">
        {data?.map((service) => (
          <div key={service.id} className="w-full my-[10px] ">
            <div
              className=" flex justify-between items-center"
              // onClick={() => toggleService(service.id)}
            >
              <div>
                <h3 className=" font-medium text-base_color">{service.name}</h3>
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
                onClick={() => handleClickService(service)}
                className="flex items-center cursor-pointer"
              >
                <MinusCircle size={16} className="hover:text-active_main" />
              </div>
            </div>

            {/* {expandedServices.includes(service.id) && service.details && (
              <div className="service-detail pl-6  text-gray-600 animate-slideUp">
                {service.details}
              </div>
            )} */}
          </div>
        ))}
      </div>
      <div className="text-[16px] text-bg_dark mt-[20px] flex justify-between items-center">
        <p className="capitalize font-bold">{t("estimated total")}:</p>
        <p className="font-semibold text-active_main text-[18px]">
          {formatPrice(estimatePrice)} VNĐ
        </p>
      </div>
    </div>
  );
};

export default SummaryInfo;
