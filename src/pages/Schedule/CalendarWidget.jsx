import React, { useState, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const CalendarWidget = ({ selectedDate, onDateSelect }) => {
  const [currentDate, setCurrentDate] = useState(new Date());

  const getStartOfWeek = (date) => {
    const d = new Date(date);
    const day = d.getDay();
    const diff = d.getDate() - day + (day === 0 ? -6 : 1);
    return new Date(d.setDate(diff));
  };

  const generateWeekDays = (baseDate) => {
    const weekStart = getStartOfWeek(baseDate);
    const days = [];
    for (let i = 0; i < 7; i++) {
      const day = new Date(weekStart);
      day.setDate(day.getDate() + i);
      days.push(day);
    }
    return days;
  };

  const weekDays = generateWeekDays(currentDate);

  const changeWeek = (direction) => {
    const newDate = new Date(currentDate);
    newDate.setDate(newDate.getDate() + direction * 7);
    setCurrentDate(newDate);

    let newSelected = getStartOfWeek(newDate);
    onDateSelect(newSelected);
  };

  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const handleTouchStart = (e) => {
    touchStartX.current = e.changedTouches
      ? e.changedTouches[0].screenX
      : e.screenX;
  };

  const handleTouchEnd = (e) => {
    touchEndX.current = e.changedTouches
      ? e.changedTouches[0].screenX
      : e.screenX;
    handleSwipe();
  };

  const handleSwipe = () => {
    if (touchStartX.current - touchEndX.current > 50) changeWeek(1);
    if (touchStartX.current - touchEndX.current < -50) changeWeek(-1);
  };

  const monthYearLabel = weekDays[0].toLocaleString("default", {
    month: "long",
    year: "numeric",
  });

  const handleDateClick = (date) => {
    // এখানে কোনো চেক নেই, সব দিন সিলেক্ট হবে
    onDateSelect(date);
  };

  return (
    <div
      className="bg-[#F8F9FB] dark:bg-black p-6 rounded-3xl border border-slate-200 w-full max-w-112.5 select-none"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      onMouseDown={handleTouchStart}
      onMouseUp={handleTouchEnd}
    >
      <div className="flex items-center justify-between mb-6 px-2">
        <button
          onClick={() => changeWeek(-1)}
          className="p-1 hover:bg-slate-200 rounded-full text-base-content transition-colors"
        >
          <ChevronLeft size={24} strokeWidth={2.5} />
        </button>

        <span className="font-bold text-base-content text-lg">
          {monthYearLabel}
        </span>

        <button
          onClick={() => changeWeek(1)}
          className="p-1 hover:bg-slate-200 rounded-full text-base-content transition-colors"
        >
          <ChevronRight size={24} strokeWidth={2.5} />
        </button>
      </div>

      <div className="grid grid-cols-7 gap-1 text-center">
        {weekDays.map((date, index) => (
          <div
            key={index}
            className="text-base-content font-medium text-sm mb-2"
          >
            {date.toLocaleString("default", { weekday: "short" }).slice(0, 2)}
          </div>
        ))}

        {weekDays.map((date, index) => {
          // Compare using the prop `selectedDate`
          const isSelected =
            date.toDateString() === selectedDate.toDateString();

          return (
            <div key={index} className="flex justify-center items-center">
              <button
                onClick={() => handleDateClick(date)}
                className={`
                  h-10 w-10 sm:h-12 sm:w-12 flex items-center justify-center rounded-2xl text-base transition-all duration-200
                  ${
                    isSelected
                      ? "bg-[#D1EFFF] text-blue-500 font-bold border-2 border-[#1CA6F0] shadow-sm"
                      : "text-base-content hover:bg-slate-200 border-2 border-transparent cursor-pointer"
                  }
                `}
              >
                {date.getDate()}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CalendarWidget;