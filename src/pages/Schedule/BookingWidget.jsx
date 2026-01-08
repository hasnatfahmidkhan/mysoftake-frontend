import React, { useState, useEffect } from "react";
import {
  Share2,
  Clock,
  Sparkles,
  Users,
  Globe,
  ArrowRight,
  CheckCircle2,
  Sun,
  Loader2,
  X,
} from "lucide-react";
import CalendarWidget from "./CalendarWidget";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { formatDateForAPI } from "../../utils";
// 1. IMPORT PACKAGES
import { useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";

const BookingWidget = () => {
  const axiosSecure = useAxiosSecure();
  const queryClient = useQueryClient();

  // --- STATE ---
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());

  // 2. SETUP REACT HOOK FORM
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  // --- EFFECT: Reset Slot when Date Changes ---
  useEffect(() => {
    setSelectedSlot(null);
  }, [selectedDate]);

  const formatDateLabel = (date) => {
    const today = new Date();
    const isToday =
      date.getDate() === today.getDate() &&
      date.getMonth() === today.getMonth() &&
      date.getFullYear() === today.getFullYear();

    const weekday = date.toLocaleString("default", { weekday: "short" });
    const dayNum = date.getDate();
    return `${isToday ? "Today · " : ""}${weekday} ${dayNum}`;
  };

  const apiDate = formatDateForAPI(selectedDate);

  // --- API CALLS ---

  // Fetch Available Slots
  const { data: availableSlots = [], isLoading: isAvailableLoading } = useQuery(
    {
      queryKey: ["availableSlots", apiDate],
      queryFn: async () => {
        const res = await axiosSecure.get(`/available-slot/${apiDate}`);
        return res.data?.available_slots || [];
      },
    }
  );

  // Fetch All Slots
  const { data: allSlots = [], isLoading: isAllSlotsLoading } = useQuery({
    queryKey: ["all-slots"],
    queryFn: async () => {
      const { data } = await axiosSecure.get(`/all-slots`);
      return data || [];
    },
  });

  // Fetch Departments
  const { data: departments = [], isLoading: isDeptLoading } = useQuery({
    queryKey: ["departments"],
    queryFn: async () => {
      const res = await axiosSecure.get("/departments");
      return res.data;
    },
    enabled: isModalOpen,
  });

  // 3. BOOKING MUTATION (Updated with Toast)
  const bookingMutation = useMutation({
    mutationFn: async (bookingData) => {
      const res = await axiosSecure.post("/book-schedule/", bookingData);
      return res.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["availableSlots"]);
      setIsModalOpen(false);
      setSelectedSlot(null);
      reset(); // Reset form fields
      toast.success("Schedule booked successfully!"); // Success Toast
    },
    onError: (error) => {
      console.error("Booking Error:", error);
      const errorMsg =
        error.response?.data?.message || "Booking failed. Try again.";
      toast.error(errorMsg); // Error Toast
    },
  });

  // --- HANDLERS ---
  const handleSlotClick = (slot) => {
    setSelectedSlot(slot);
  };

  const handleConfirmClick = () => {
    if (selectedSlot) {
      setIsModalOpen(true);
    }
  };

  // 4. ON SUBMIT HANDLER (From React Hook Form)
  const onSubmit = (data) => {
    if (!selectedSlot) {
      toast.error("Please select a time slot.");
      return;
    }

    const payload = {
      date: apiDate,
      slot: selectedSlot.pk,
      user_info: {
        department: data.department,
        name: data.name,
        phone_number: data.phone,
        email: data.email,
        address: data.address,
        purpose: data.purpose,
      },
    };

    bookingMutation.mutate(payload);
  };

  const eventInfo = {
    host: { initials: "SL", name: "Maya", avatarColor: "bg-blue-600" },
    title: "30 min intro with Maya",
    integrations: "Calendars • Google & Outlook",
    duration: "30 minutes",
    platform: "Google Meet",
    timezone: "GMT+02:00 Europe/Berlin",
    activeDays: "Mon–Fri, 9:00–17:00",
    rules: [
      { icon: Sparkles, text: "Buffers and max 5 meetings / day" },
      { icon: Users, text: "Invitee time proposals supported" },
    ],
  };

  const isLoading = isAvailableLoading || isAllSlotsLoading;

  return (
    <div className="py-16 flex items-center justify-center p-4 font-sans text-[#476788] relative">
      {/* 5. ADD TOASTER */}
      <Toaster position="top-center" reverseOrder={false} />

      <div className="w-full max-w-4xl bg-white dark:bg-black rounded-3xl dark:shadow-white/50 shadow-xl overflow-hidden border border-slate-100">
        {/* Header */}
        <div className="px-8 py-6 border-b border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div
              className={`h-12 w-12 rounded-full ${eventInfo.host.avatarColor} flex items-center justify-center text-white font-medium text-lg`}
            >
              {eventInfo.host.initials}
            </div>
            <div>
              <h2 className="text-xl font-bold text-base-content">
                {eventInfo.title}
              </h2>
              <p className="text-sm text-base-content mt-0.5">
                {eventInfo.integrations}
              </p>
            </div>
          </div>
          <button className="flex items-center gap-2 px-4 py-2 rounded-full border border-slate-200 hover:bg-slate-50 dark:hover:bg-slate-500 transition-colors text-sm font-medium text-base-content">
            <Share2 size={16} /> Share
          </button>
        </div>

        {/* Body */}
        <div className="flex flex-col lg:flex-row">
          {/* Calendar Section */}
          <div className="p-8 lg:w-1/2 flex flex-col gap-8">
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-base-content mb-1">
                  Choose a time
                </h3>
                <p className="text-sm text-base-content">
                  {eventInfo.duration} · {eventInfo.platform} <br />
                  Time zone:{" "}
                  <span className="text-base-content font-medium">
                    {eventInfo.timezone}
                  </span>
                </p>
              </div>
              <div className="space-y-3 pt-2">
                <div className="flex items-center gap-3">
                  <Clock className="text-[#1CA6F0]" size={20} />
                  <span className="text-sm text-base-content">
                    {eventInfo.activeDays}
                  </span>
                </div>
                {eventInfo.rules.map((rule, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <rule.icon
                      className={
                        index === 0 ? "text-green-500" : "text-indigo-500"
                      }
                      size={20}
                    />
                    <span className="text-sm text-base-content">
                      {rule.text}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <CalendarWidget
              selectedDate={selectedDate}
              onDateSelect={setSelectedDate}
            />
          </div>

          {/* Slots Section */}
          <div className="p-8 lg:w-1/2 lg:border-l border-slate-100 bg-white dark:bg-black">
            <div className="flex items-start justify-between mb-6">
              <div className="flex items-center gap-2 text-base-content font-medium">
                <Sun size={18} className="text-[#1CA6F0]" />
                {formatDateLabel(selectedDate)}
              </div>
              <div className="flex items-center gap-2 text-sm text-base-content cursor-pointer hover:text-[#0B3558]">
                <Globe size={16} /> Change time zone
              </div>
            </div>

            <div className="min-h-50">
              {isLoading ? (
                <div className="flex flex-col items-center justify-center h-40 gap-3 text-slate-400">
                  <Loader2 className="animate-spin text-[#1CA6F0]" size={32} />
                  <p className="text-sm">Loading slots...</p>
                </div>
              ) : allSlots.length === 0 ? (
                <div className="text-center text-slate-500 py-10 border-2 border-dashed border-slate-100 dark:border-slate-500 rounded-xl bg-slate-50 dark:bg-black/30">
                  No slots configured.
                </div>
              ) : (
                <div className="grid grid-cols-2 gap-4 mb-8">
                  {allSlots.map((slot) => {
                    const timeString = slot.start_time
                      .split(":")
                      .slice(0, 2)
                      .join(":");
                    const isAvailable = availableSlots.some(
                      (availSlot) => availSlot.pk === slot.pk
                    );
                    const isSelected = selectedSlot?.pk === slot.pk;

                    return (
                      <button
                        key={slot.pk}
                        disabled={!isAvailable}
                        onClick={() => handleSlotClick(slot)}
                        className={`
                          py-3 rounded-lg border text-sm font-medium transition-all
                          ${
                            !isAvailable
                              ? "bg-slate-50 text-slate-400 border-slate-200 line-through decoration-slate-400 cursor-not-allowed opacity-70"
                              : isSelected
                              ? "bg-[#1CA6F0] border-[#1CA6F0] text-white shadow-md ring-2 ring-[#1CA6F0] ring-offset-2"
                              : "bg-white border-slate-200 text-[#0B3558] hover:border-[#1CA6F0] hover:text-[#1CA6F0] hover:bg-[#F0F9FF]"
                          }
                        `}
                      >
                        {timeString}
                      </button>
                    );
                  })}
                </div>
              )}
            </div>

            <button
              onClick={handleConfirmClick}
              disabled={!selectedSlot}
              className={`
                w-full font-semibold py-4 rounded-xl flex items-center justify-center gap-2 transition-all shadow-md mb-6
                ${
                  !selectedSlot
                    ? "bg-slate-200 text-slate-400 cursor-not-allowed shadow-none"
                    : "bg-[#1CA6F0] hover:bg-[#0E95DD] text-white shadow-blue-100"
                }
              `}
            >
              Confirm time <ArrowRight size={20} />
            </button>

            <div className="flex gap-3 text-sm text-[#476788] leading-relaxed">
              <CheckCircle2
                size={18}
                className="text-green-500 shrink-0 mt-0.5"
              />
              <p>
                We’ll add conferencing details and send calendar invites
                automatically.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* --- MODAL WITH REACT HOOK FORM --- */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#0B3558]/40 backdrop-blur-sm p-4 animate-in fade-in duration-200">
          <div className="bg-white w-full max-w-lg rounded-2xl shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200">
            <div className="px-6 py-4 border-b border-slate-100 flex justify-between items-center bg-slate-50/50">
              <h3 className="text-lg font-bold text-[#0B3558]">
                Confirm Booking
              </h3>
              <button
                onClick={() => setIsModalOpen(false)}
                className="p-2 hover:bg-slate-200 rounded-full text-slate-500 transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="p-6 space-y-4">
              <div className="bg-[#F0F9FF] p-4 rounded-lg border border-blue-100 mb-4 flex items-start gap-3">
                <CheckCircle2 size={20} className="text-[#1CA6F0] mt-0.5" />
                <div>
                  <p className="text-sm text-[#0B3558] font-bold">
                    {formatDateLabel(selectedDate)}
                  </p>
                  <p className="text-xs text-[#476788]">
                    Time:{" "}
                    {selectedSlot?.start_time?.split(":").slice(0, 2).join(":")}
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  {/* Name Input */}
                  <div>
                    <label className="block text-sm font-medium text-[#0B3558] mb-1">
                      Name
                    </label>
                    <input
                      {...register("name", { required: "Name is required" })}
                      placeholder="John Doe"
                      className={`w-full px-4 py-2 rounded-lg border focus:ring-2 outline-none ${
                        errors.name
                          ? "border-red-500 focus:ring-red-100"
                          : "border-slate-300 focus:border-[#1CA6F0] focus:ring-blue-100"
                      }`}
                    />
                    {errors.name && (
                      <p className="text-red-500 text-xs mt-1">
                        {errors.name.message}
                      </p>
                    )}
                  </div>

                  {/* Phone Input */}
                  <div>
                    <label className="block text-sm font-medium text-[#0B3558] mb-1">
                      Phone
                    </label>
                    <input
                      {...register("phone", {
                        required: "Phone is required",
                        pattern: {
                          value: /^\+?[0-9]{10,15}$/,
                          message: "Enter a valid phone number",
                        },
                      })}
                      type="tel"
                      placeholder="+880..."
                      className={`w-full px-4 py-2 rounded-lg border focus:ring-2 outline-none ${
                        errors.phone
                          ? "border-red-500 focus:ring-red-100"
                          : "border-slate-300 focus:border-[#1CA6F0] focus:ring-blue-100"
                      }`}
                    />

                    {errors.phone && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.phone.message}
                      </p>
                    )}

                    {errors.phone && (
                      <p className="text-red-500 text-xs mt-1">
                        {errors.phone.message}
                      </p>
                    )}
                  </div>
                </div>

                {/* Email Input */}
                <div>
                  <label className="block text-sm font-medium text-[#0B3558] mb-1">
                    Email
                  </label>
                  <input
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value: /^\S+@\S+$/i,
                        message: "Invalid email address",
                      },
                    })}
                    type="email"
                    placeholder="john@example.com"
                    className={`w-full px-4 py-2 rounded-lg border focus:ring-2 outline-none ${
                      errors.email
                        ? "border-red-500 focus:ring-red-100"
                        : "border-slate-300 focus:border-[#1CA6F0] focus:ring-blue-100"
                    }`}
                  />
                  {errors.email && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.email.message}
                    </p>
                  )}
                </div>

                {/* Address Input */}
                <div>
                  <label className="block text-sm font-medium text-[#0B3558] mb-1">
                    Address
                  </label>
                  <input
                    {...register("address", {
                      required: "Address is required",
                    })}
                    type="text"
                    placeholder="Street, City"
                    className={`w-full px-4 py-2 rounded-lg border focus:ring-2 outline-none ${
                      errors.address
                        ? "border-red-500 focus:ring-red-100"
                        : "border-slate-300 focus:border-[#1CA6F0] focus:ring-blue-100"
                    }`}
                  />
                  {errors.address && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.address.message}
                    </p>
                  )}
                </div>

                {/* Department Select */}
                <div>
                  <label className="block text-sm font-medium text-[#0B3558] mb-1">
                    Department
                  </label>
                  <select
                    {...register("department", {
                      required: "Please select a department",
                    })}
                    defaultValue=""
                    disabled={isDeptLoading}
                    className={`w-full px-4 py-2 rounded-lg border focus:ring-2 outline-none bg-white ${
                      errors.department
                        ? "border-red-500 focus:ring-red-100"
                        : "border-slate-300 focus:border-[#1CA6F0] focus:ring-blue-100"
                    }`}
                  >
                    <option value="" disabled>
                      Select Department
                    </option>
                    {isDeptLoading ? (
                      <option>Loading...</option>
                    ) : (
                      departments.map((dept) => (
                        <option
                          key={dept.id || dept.pk}
                          value={dept.id || dept.pk}
                        >
                          {dept.name}
                        </option>
                      ))
                    )}
                  </select>
                  {errors.department && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.department.message}
                    </p>
                  )}
                </div>

                {/* Purpose Textarea */}
                <div>
                  <label className="block text-sm font-medium text-[#0B3558] mb-1">
                    Purpose
                  </label>
                  <textarea
                    {...register("purpose", {
                      required: "Purpose is required",
                    })}
                    rows="3"
                    placeholder="Briefly describe..."
                    className={`w-full px-4 py-2 rounded-lg border focus:ring-2 outline-none resize-none ${
                      errors.purpose
                        ? "border-red-500 focus:ring-red-100"
                        : "border-slate-300 focus:border-[#1CA6F0] focus:ring-blue-100"
                    }`}
                  ></textarea>
                  {errors.purpose && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.purpose.message}
                    </p>
                  )}
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={bookingMutation.isPending}
                className="w-full bg-[#1CA6F0] hover:bg-[#0E95DD] text-white font-semibold py-3 rounded-xl shadow-md mt-2 flex items-center justify-center gap-2"
              >
                {bookingMutation.isPending ? (
                  <>
                    <Loader2 size={20} className="animate-spin" />
                    Scheduling...
                  </>
                ) : (
                  "Schedule Meeting"
                )}
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default BookingWidget;
