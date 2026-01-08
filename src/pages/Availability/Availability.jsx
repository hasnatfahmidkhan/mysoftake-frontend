import React, { useState } from "react";
import {
  RefreshCcw,
  Clock,
  Calendar,
  ChevronLeft,
  ChevronRight,
  Pencil,
  Loader2,
} from "lucide-react";
import EventBlock from "./EventBlock";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { formatDateForAPI } from "../../utils";

// --- Configuration ---
const START_HOUR = 9;
const PIXELS_PER_HOUR = 60;

// --- Helper Functions ---
const getMinutesFromTime = (timeStr) => {
  if (!timeStr) return 0;
  let [hours, minutes] = timeStr.split(":").map(Number);
  if (hours < START_HOUR) hours += 12;
  if (hours === 12 && START_HOUR > 12) hours = 12;
  return hours * 60 + minutes;
};

const calculateTopOffset = (startTime) => {
  const startMinutes = getMinutesFromTime(startTime);
  const gridStartMinutes = START_HOUR * 60;
  return ((startMinutes - gridStartMinutes) / 60) * PIXELS_PER_HOUR;
};

const calculateHeight = (startTime, endTime) => {
  let start = getMinutesFromTime(startTime);
  let end = getMinutesFromTime(endTime);
  if (end < start) end += 12 * 60;
  const durationMinutes = end - start;
  return (durationMinutes / 60) * PIXELS_PER_HOUR - 4;
};

// --- MOBILE CARD COMPONENT ---
// মোবাইলে পিসির ডেটাই দেখাবে কিন্তু লিস্ট আকারে
const MobileDayCard = ({ dateDisplay, slots }) => {
  return (
    <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-sm mb-4">
      {/* Card Header: Date */}
      <div className="flex justify-between items-center mb-3 border-b border-slate-100 pb-2">
        <h3 className="font-semibold text-slate-800">{dateDisplay}</h3>
        <span className="text-xs text-slate-500 font-medium bg-slate-100 px-2 py-1 rounded">
          {slots.length} Slots
        </span>
      </div>

      {/* Slots List */}
      <div className="flex flex-col gap-2">
        {slots.length === 0 ? (
          <div className="text-center text-slate-400 text-sm py-4 bg-slate-50 rounded-lg border border-dashed border-slate-200">
            No slots available
          </div>
        ) : (
          slots.map((slot, idx) => {
            const isBooked = slot.status === "Booked";

            // সেইম কালার লজিক যা পিসিতে ব্যবহার করা হয়েছে
            const styleClass = isBooked
              ? "bg-red-50 border-red-400 text-red-800"
              : "bg-emerald-50 border-emerald-400 text-emerald-800";

            return (
              <div
                key={idx}
                className={`border-l-4 rounded px-3 py-2 flex justify-between items-center text-sm ${styleClass}`}
              >
                <span className="font-semibold">
                  {isBooked ? "Booked" : "Available"}
                </span>
                <span className="text-xs opacity-80 font-medium">
                  {slot.start_time} - {slot.end_time}
                </span>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

const Availability = () => {
  const axiosSecure = useAxiosSecure();
  const [currentDate, setCurrentDate] = useState(new Date());
  const apiDateString = formatDateForAPI(currentDate);

  const { data: weeklySchedule = [], isLoading } = useQuery({
    queryKey: ["weekly-schedule", apiDateString],
    queryFn: async () => {
      const { data } = await axiosSecure.get(
        `/weekly-schedule/?start_date=${apiDateString}`
      );
      return data || [];
    },
  });

  const weekDates = [];
  for (let i = 0; i < 7; i++) {
    const d = new Date(currentDate);
    d.setDate(d.getDate() + i);
    weekDates.push(d);
  }

  const handleWeekChange = (direction) => {
    const newDate = new Date(currentDate);
    newDate.setDate(newDate.getDate() + direction * 7);
    setCurrentDate(newDate);
  };

  const getDateRangeLabel = () => {
    const start = weekDates[0];
    const end = weekDates[6];
    const options = { month: "short", day: "numeric" };
    return `${start.toLocaleDateString(
      "en-US",
      options
    )} – ${end.toLocaleDateString("en-US", options)}`;
  };

  return (
    <div className="min-h-screen bg-[#F0F9FF] p-4 md:p-6 font-sans flex flex-col items-center gap-6">
      <div className="w-full max-w-7xl bg-white rounded-3xl shadow-sm border border-slate-100 p-5 md:p-8">
        {/* Header & Toolbar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-8">
          <div>
            <p className="text-slate-600 text-[15px]">
              See exactly when you're free...
            </p>
          </div>
          <button className="flex items-center gap-2 bg-[#0070BA] text-white px-5 py-3 rounded-lg text-sm font-medium shadow-sm">
            <RefreshCcw size={18} /> Sync calendars
          </button>
        </div>

        <div className="flex flex-col md:flex-row justify-between gap-4 mb-6">
          <div className="flex gap-3">
            <button className="flex items-center gap-2 bg-[#0070BA] text-white px-4 py-2.5 rounded-lg text-sm font-medium shadow-sm">
              <Clock size={18} className="text-emerald-300" /> Working hours
            </button>
            <button className="flex items-center gap-2 bg-[#0070BA] text-white px-4 py-2.5 rounded-lg text-sm font-medium shadow-sm">
              <Calendar size={18} /> Week view
            </button>
          </div>
          <div className="flex items-center justify-between gap-4 bg-slate-50 p-1.5 rounded-xl border border-slate-200">
            <button
              onClick={() => handleWeekChange(-1)}
              className="p-2 rounded-lg bg-white hover:text-[#0070BA]"
            >
              <ChevronLeft size={20} />
            </button>
            <span className="text-sm font-bold text-slate-800 min-w-[140px] text-center">
              {getDateRangeLabel()}
            </span>
            <button
              onClick={() => handleWeekChange(1)}
              className="p-2 rounded-lg bg-white hover:text-[#0070BA]"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* ========================== */}
        {/*      DESKTOP VIEW (Grid)   */}
        {/* ========================== */}
        <div className="hidden md:block overflow-x-auto pb-4">
          <div className="min-w-[1000px]">
            {/* Header Row */}
            <div className="grid grid-cols-[60px_repeat(7,1fr)] gap-4 mb-2">
              <div className="sticky left-0 bg-white z-20 py-4 text-center font-bold text-slate-500 text-sm">
                IST
              </div>
              {weekDates.map((dateObj) => (
                <div
                  key={dateObj.toString()}
                  className="py-4 pl-3 text-center bg-slate-50 rounded-lg border border-slate-100"
                >
                  <span className="font-semibold text-slate-800 block">
                    {dateObj.toLocaleDateString("en-US", { weekday: "short" })}
                  </span>
                  <span className="text-slate-500 text-xs text-center">
                    {dateObj.getDate()}
                  </span>
                </div>
              ))}
            </div>

            {/* Body Row */}
            <div className="grid grid-cols-[60px_repeat(7,1fr)] gap-4 relative h-[600px]">
              {/* Time Column */}
              <div className="relative border-r border-slate-100 pr-2">
                {[9, 10, 11, 12, 13, 14, 15, 16, 17, 18].map((h, i) => (
                  <div
                    key={i}
                    className="absolute right-0 text-xs text-slate-400 font-medium"
                    style={{ top: `${i * PIXELS_PER_HOUR - 8}px` }}
                  >
                    {h}:00
                  </div>
                ))}
              </div>

              {/* Day Columns */}
              {weekDates.map((dateObj) => {
                const dateKey = formatDateForAPI(dateObj);
                const dayData = weeklySchedule.find((d) => d.date === dateKey);
                const slots = dayData ? dayData.slots : [];

                return (
                  <div
                    key={dateKey}
                    className="relative bg-white border border-slate-200 rounded-xl h-full shadow-sm hover:shadow-md transition-shadow"
                  >
                    {Array.from({ length: 9 }).map((_, i) => (
                      <div
                        key={i}
                        className="absolute w-full border-b border-slate-50 top-0 left-0 pointer-events-none"
                        style={{ top: `${(i + 1) * PIXELS_PER_HOUR}px` }}
                      />
                    ))}

                    {isLoading ? (
                      <div className="flex justify-center mt-10">
                        <Loader2 className="animate-spin text-slate-300" />
                      </div>
                    ) : slots.length > 0 ? (
                      slots.map((slot, idx) => {
                        const top = calculateTopOffset(slot.start_time) + 3;
                        const height = calculateHeight(
                          slot.start_time,
                          slot.end_time
                        );
                        const isBooked = slot.status === "Booked";
                        const blockType = isBooked ? "blocked" : "free";
                        const title = isBooked ? "Booked" : "Available";

                        return (
                          <div
                            key={`${dateKey}-${idx}`}
                            className="absolute w-full px-1.5 z-10"
                            style={{ top: `${top}px`, height: `${height}px` }}
                          >
                            <EventBlock
                              type={blockType}
                              title={title}
                              height="100%"
                            />
                          </div>
                        );
                      })
                    ) : (
                      <div className="w-full h-full flex justify-center pt-10 opacity-40">
                        <span className="text-xs text-slate-400">No slots</span>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* ========================== */}
        {/*      MOBILE VIEW (Cards)   */}
        {/* ========================== */}
        <div className="md:hidden flex flex-col gap-4">
          {isLoading ? (
            <div className="text-center py-10 flex flex-col items-center">
              <Loader2 className="animate-spin text-[#0070BA]" />{" "}
              <span className="text-sm text-slate-500 mt-2">
                Loading schedule...
              </span>
            </div>
          ) : (
            weekDates.map((dateObj) => {
              const dateKey = formatDateForAPI(dateObj);
              const dayData = weeklySchedule.find((d) => d.date === dateKey);
              const slots = dayData ? dayData.slots : [];
              const dateDisplay = dateObj.toLocaleDateString("en-US", {
                weekday: "long",
                day: "numeric",
                month: "short",
              });

              return (
                <MobileDayCard
                  key={dateKey}
                  dateDisplay={dateDisplay}
                  slots={slots}
                />
              );
            })
          )}
        </div>

        {/* Footer */}
        <div className="mt-8 flex flex-col md:flex-row justify-between items-center gap-4 pt-4 border-t border-slate-100">
          <div className="flex gap-4 text-sm text-slate-600">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-emerald-400"></span>{" "}
              Available
            </div>
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-red-400"></span> Booked
            </div>
          </div>
          <button className="flex items-center gap-2 text-slate-500 text-sm font-medium">
            <Pencil size={16} /> Edit rules
          </button>
        </div>
      </div>
    </div>
  );
};

export default Availability;
