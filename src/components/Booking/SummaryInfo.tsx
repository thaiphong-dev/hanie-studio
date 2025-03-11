import React, { useState } from "react";
import { ServiceCategory } from "@/types/ServiceType";
import { useTranslation } from "react-i18next";
import { CalendarCheck2, MinusCircle } from "lucide-react";
import { format } from "date-fns";
import { Checkbox, Select } from "antd/lib";
const { Option } = Select;
interface SummaryInfoProps {
  data: ServiceCategory[];
  isExpandSummary?: boolean;
  isMobile?: boolean;
  handleClickCategory: (service: ServiceCategory) => void;
  handleShowCalendar?: () => void;
  isShowCalendar?: boolean;
  selectedDateTime: {
    date: Date;
    time: string | null;
  };
  setIsExpandSummary?: React.Dispatch<React.SetStateAction<boolean>>;
}
interface FormState {
  tay: boolean;
  chan: boolean;
  loainmongTay?: string;
  loainmongChan?: string;
}

const SummaryInfo: React.FC<SummaryInfoProps> = ({
  data,
  handleClickCategory,
  selectedDateTime,
  isExpandSummary,
  handleShowCalendar,
  isMobile,
  isShowCalendar,
  setIsExpandSummary,
}) => {
  const { t } = useTranslation();

  const [formState, setFormState] = useState<FormState>({
    tay: false,
    chan: false,
  });

  const handleCheckboxChange = (field: "tay" | "chan") => {
    setFormState((prev) => ({
      ...prev,
      [field]: !prev[field],
      [`loannmong${field.charAt(0).toUpperCase() + field.slice(1)}`]: undefined,
    }));
  };

  const handleSelectChange = (
    field: "loannmongTay" | "loannmongChan",
    value: string
  ) => {
    setFormState((prev) => ({ ...prev, [field]: value }));
  };
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
            className="cursor-pointer  flex justify-center space-x-[10px] items-center w-fit text-center h-fit bg-active_main border-active_main text-white hover:bg-active_hover py-[3px] lg:py-[6px] px-[18px] text-[16px] font-[500] rounded-[5px]"
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
          <h3 className=" font-semibold text-active_main">
            {selectedDateTime.time}
          </h3>
          <div className="flex items-center mt-1 text-xs text-base_color ">
            {format(selectedDateTime.date, "EEEE d MMMM yyyy")}
          </div>
        </div>
      )}
      {(isExpandSummary || !isMobile) && (
        <div
          onClick={(e) => e.stopPropagation()}
          className=" text-[16px] overflow-y-auto lg:max-h-full max-h-[30vh] "
        >
          {data?.map((category) => (
            <div
              key={category.id}
              className="w-full my-[10px] py-[10px] border-b "
            >
              <div
                className=" flex justify-between items-center"
                // onClick={() => toggleService(service.id)}
              >
                <div>
                  <h3 className=" font-medium text-active_main">
                    {category.name}
                  </h3>
                </div>
                <div
                  onClick={(e) => {
                    e.stopPropagation();
                    handleClickCategory(category);
                  }}
                  className="flex items-center cursor-pointer"
                >
                  <MinusCircle size={16} className="hover:text-active_main" />
                </div>
              </div>

              {/* form cho nails service  */}
              {category?.id === "nails" && (
                <div className=" text-base_color w-full">
                  <div className="p-4 ">
                    <div className="mb-4 w-full">
                      <Checkbox
                        checked={formState.tay}
                        onChange={() => handleCheckboxChange("tay")}
                      >
                        Tay
                      </Checkbox>
                      <Select
                        className="w-full mt-2"
                        disabled={!formState.tay}
                        value={formState.loainmongTay}
                        onChange={(value) =>
                          handleSelectChange("loannmongTay", value)
                        }
                        placeholder="Chọn loại móng"
                      >
                        <Option value="mong_that">Móng thật</Option>
                        <Option value="mong_up">Móng úp</Option>
                      </Select>
                    </div>
                    <div>
                      <Checkbox
                        checked={formState.chan}
                        onChange={() => handleCheckboxChange("chan")}
                      >
                        Chân
                      </Checkbox>
                      <Select
                        className="w-full mt-2"
                        disabled={!formState.chan}
                        value={formState.loainmongChan}
                        onChange={(value) =>
                          handleSelectChange("loannmongChan", value)
                        }
                        placeholder="Chọn loại móng"
                      >
                        <Option value="mong_that">Móng thật</Option>
                        <Option value="mong_up">Móng úp</Option>
                      </Select>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SummaryInfo;
