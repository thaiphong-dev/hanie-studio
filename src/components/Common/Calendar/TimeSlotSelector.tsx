import React from "react";
import { cn } from "../../../../utils/format";
import { format } from "date-fns";

interface TimeSlotSelectorProps {
  selectedDate: Date;
  selectedTime: string | null;
  onTimeSelect: (time: string) => void;
}

const TimeSlotSelector: React.FC<TimeSlotSelectorProps> = ({
  selectedDate,
  selectedTime,
  onTimeSelect,
}) => {
  // Define time slots
  const timeSlots = [
    "8:00 AM",
    "8:30 AM",
    "9:00 AM",
    "9:30 AM",
    "10:00 AM",
    "10:30 AM",
    "11:00 AM",
    "11:30 AM",
    "12:00 PM",
    "12:30 PM",
    "1:00 PM",
    "1:30 PM",
    "2:00 PM",
    "2:30 PM",
    "3:00 PM",
    "3:30 PM",
    "4:00 PM",
    "4:30 PM",
    "5:00 PM",
    "5:30 PM",
    "6:00 PM",
    "6:30 PM",
    "7:00 PM",
    "7:30 PM",
    "8:00 PM",
  ];

  return (
    <div className="animate-fade-in">
      <h2 className="text-[lg] font-medium mb-4">
        {format(selectedDate, "EEEE d MMMM")}
      </h2>

      <div className="grid grid-cols-4 text-[14px] gap-3">
        {timeSlots.map((time, index) => (
          <div
            key={index}
            className={cn(
              "time-slot animate-scale-in",
              selectedTime === time && "selected",
              { "col-span-4": index === timeSlots.length - 1 }
            )}
            style={{ animationDelay: `${index * 50}ms` }}
            onClick={() => onTimeSelect(time)}
          >
            {time}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TimeSlotSelector;
