import React, { useState } from "react";
import { ChevronDown, ChevronUp, ChevronRight } from "lucide-react";
import { formatPrice } from "../../../utils/format";
import { ServiceCategory, ServiceDetail } from "@/types/ServiceType";

interface ServiceAccordionProps {
  categories: ServiceCategory[];
  handleClickService: (service: ServiceDetail) => void;
  servicesSelected: ServiceDetail[];
}
const ServicesCollapse: React.FC<ServiceAccordionProps> = ({
  categories,
  handleClickService,
  servicesSelected,
}) => {
  const [expandedCategories, setExpandedCategories] = useState<string[]>([
    categories?.[0]?.id,
  ]);
  //   const [expandedServices, setExpandedServices] = useState<string[]>([]);

  const toggleCategory = (categoryId: string) => {
    setExpandedCategories((prev) =>
      prev.includes(categoryId)
        ? prev.filter((id) => id !== categoryId)
        : [...prev, categoryId]
    );
  };

  //   const toggleService = (serviceId: string) => {
  //     setExpandedServices((prev) =>
  //       prev.includes(serviceId)
  //         ? prev.filter((id) => id !== serviceId)
  //         : [...prev, serviceId]
  //     );
  //   };

  return (
    <div className="w-full animate-fadeIn text-gray-500 space-y-[30px] text-[16px] lg:text-[18px] ">
      {categories.map((category) => (
        <div key={category.id} className="mb-2 cursor-pointer  ">
          <div
            className="service-item font-medium flex justify-between items-center"
            onClick={() => toggleCategory(category.id)}
          >
            <span className=" uppercase tracking-wider">{category.name}</span>
            {expandedCategories.includes(category.id) ? (
              <ChevronUp size={22} />
            ) : (
              <ChevronDown size={22} />
            )}
          </div>

          {expandedCategories.includes(category.id) && (
            <div className="animate-slideUp text-[14px] lg:text-[16px] w-full text-bg_dark">
              {category.services.map((service) => (
                <div
                  key={service.id}
                  onClick={() => handleClickService(service)}
                  className="w-full my-[10px] pl-[20px] cursor-pointer "
                >
                  <div
                    style={{
                      borderColor: servicesSelected
                        ?.map((x) => x?.id)
                        ?.includes(service?.id)
                        ? "#e48f99"
                        : "",
                    }}
                    className="p-4 border-[1px] text hover:border-black rounded-lg w-full flex justify-between items-center hover:bg-[#fafafa]"
                    // onClick={() => toggleService(service.id)}
                  >
                    <div>
                      <h3 className=" font-medium">{service.name}</h3>
                      <div className="flex items-center mt-1 text-xs ">
                        <span>{service.duration}</span>

                        <>
                          {/* <span className="text-salon-pink underline cursor-pointer ">
                            Details
                          </span> */}
                          <span className="mx-2">•</span>

                          <span className=" font-medium text-active_main">
                            {service.maxPrice
                              ? `${formatPrice(
                                  Number(service?.minPrice) ?? 0
                                )} - ${formatPrice(Number(service?.maxPrice))}`
                              : formatPrice(
                                  Number(service?.minPrice) ?? 0
                                )}{" "}
                            {service.unit}
                          </span>
                        </>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <ChevronRight size={20} />
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
          )}
        </div>
      ))}
    </div>
  );
};

export default ServicesCollapse;
