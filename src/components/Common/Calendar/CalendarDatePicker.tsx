import React, { useState } from "react";
import {
  format,
  startOfMonth,
  endOfMonth,
  startOfWeek,
  endOfWeek,
  eachDayOfInterval,
  isSameMonth,
  isSameDay,
  isToday,
  addMonths,
} from "date-fns";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "../../../../utils/format";

interface CalendarDatePickerProps {
  selectedDate: Date;
  onDateChange: (date: Date) => void;
}

const WEEKDAYS = ["S", "M", "T", "W", "T", "F", "S"];

const CalendarDatePicker: React.FC<CalendarDatePickerProps> = ({
  selectedDate,
  onDateChange,
}) => {
  const [currentMonth, setCurrentMonth] = useState(startOfMonth(selectedDate));

  const prevMonth = () => {
    setCurrentMonth(addMonths(currentMonth, -1));
  };

  const nextMonth = () => {
    setCurrentMonth(addMonths(currentMonth, 1));
  };

  // Calculate days to display
  const monthStart = startOfMonth(currentMonth);
  const monthEnd = endOfMonth(monthStart);
  const calendarStart = startOfWeek(monthStart);
  const calendarEnd = endOfWeek(monthEnd);

  // Get all days in the calendar view
  const calendarDays = eachDayOfInterval({
    start: calendarStart,
    end: calendarEnd,
  });

  return (
    <div className="calendar-container">
      <div className="flex items-center justify-between p-3 border-b">
        <h2 className="text-lg font-medium">
          {format(currentMonth, "MMMM")}{" "}
          <span className="text-muted-foreground">
            {format(currentMonth, "yyyy")}
          </span>
        </h2>
        <div className="flex space-x-1">
          <button
            onClick={prevMonth}
            className="p-1.5 rounded-full hover:bg-muted transition-colors"
            aria-label="Previous month"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
          <button
            onClick={nextMonth}
            className="p-1.5 rounded-full hover:bg-muted transition-colors"
            aria-label="Next month"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>

      <div className="p-3">
        <div className="grid grid-cols-7 mb-2">
          {WEEKDAYS.map((day, idx) => (
            <div key={idx} className="calendar-cell">
              <div className="calendar-cell-content font-medium text-xs text-muted-foreground">
                {day}
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-7 gap-y-1">
          {calendarDays.map((day, idx) => {
            const dayInCurrentMonth = isSameMonth(day, currentMonth);
            const isSelectedDay = isSameDay(day, selectedDate);
            const isTodayDate = isToday(day);

            return (
              <div
                key={idx}
                className={cn(
                  "calendar-cell",
                  isSelectedDay && "selected",
                  isTodayDate && "today",
                  !dayInCurrentMonth && "disabled"
                )}
                onClick={() => dayInCurrentMonth && onDateChange(day)}
              >
                <div className="calendar-cell-content">{format(day, "d")}</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CalendarDatePicker;
