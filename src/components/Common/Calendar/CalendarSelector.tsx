/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import CalendarDatePicker from "./CalendarDatePicker";
import TimeSlotSelector from "./TimeSlotSelector";

interface Props {
  handeChangeTimeBooking: (date: Date, time: string | null) => void;
}
const CalendarSelector: React.FC<Props> = ({ handeChangeTimeBooking }) => {
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const [selectedTime, setSelectedTime] = useState<string | null>(null);

  useEffect(() => {
    handeChangeTimeBooking(selectedDate, selectedTime);
  }, [selectedDate, selectedTime]);

  // Store selected date-time combinations
  // const [selectedDateTimes, setSelectedDateTimes] = useState<
  //   Record<string, string | null>
  // >({});

  const handleDateChange = (date: Date) => {
    setSelectedDate(date);
    setSelectedTime(null);
    // Check if we have a saved time for this date
    // const dateKey = format(date, "yyyy-MM-dd");
    // const savedTime = selectedDateTimes[dateKey] || null;
    // setSelectedTime(savedTime);
  };

  const handleTimeSelect = (time: string) => {
    setSelectedTime(time);

    // Save the selected time for this date
    // const dateKey = format(selectedDate, "yyyy-MM-dd");
    // setSelectedDateTimes((prev) => ({
    //   ...prev,
    //   [dateKey]: time,
    // }));
  };

  return (
    <div className="flex flex-col lg:flex-row gap-8 py-6 max-w-4xl mx-auto">
      <div className="flex-none">
        <CalendarDatePicker
          selectedDate={selectedDate}
          onDateChange={handleDateChange}
        />
      </div>

      <div className="flex-1">
        <TimeSlotSelector
          selectedDate={selectedDate}
          selectedTime={selectedTime}
          onTimeSelect={handleTimeSelect}
        />
      </div>
    </div>
  );
};

export default CalendarSelector;
