import React from "react";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import toast, { Toaster } from "react-hot-toast";
import PrimaryBtn from "../../../component/primaryBtn/primaryBtn";
import { Loader2 } from "lucide-react"; // Optional: for loading spinner
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const ContactForm = () => {
  const axiosSecure = useAxiosSecure();
  // 1. Setup React Hook Form
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  // 2. Setup React Query Mutation
  const { mutate, isPending } = useMutation({
    mutationFn: async (formData) => {
      // Replace with your actual API base URL or use your axios instance

      console.log("form data: ", formData);
      const { data } = await axiosSecure.post(
        "/create-contact-inquiry/",
        formData
      );
      console.log(data);
      return data;
    },
    onSuccess: () => {
      toast.success("Message sent successfully!");
      reset(); // Clear the form
    },
    onError: (error) => {
      console.error(error);
      toast.error("Something went wrong. Please try again.");
    },
  });

  // 3. Form Submit Handler
  const onSubmit = (data) => {
    // Construct the payload as expected by your backend
    const payload = {
      first_name: data.firstName,
      last_name: data.lastName,
      email: data.email,
      inquiry_type: data.inquiry,
      subject: data.subject,
      message: data.message,
    };

    mutate(payload);
  };

  // Helper class for inputs to avoid repetition and handle dark mode
  const inputClass = (hasError) => `
    w-full border rounded-md px-4 py-3 
    text-gray-700 dark:text-gray-200 
    placeholder-gray-300 dark:placeholder-gray-500
    bg-white dark:bg-gray-900 
    transition-colors focus:outline-none focus:ring-1 
    ${
      hasError
        ? "border-red-500 focus:border-red-500 focus:ring-red-500"
        : "border-gray-400 dark:border-gray-700 focus:border-blue-500 focus:ring-blue-500"
    }
  `;

  return (
    <div className="bg-white dark:bg-black shadow-xl px-8 py-16 rounded-xl">
      <Toaster position="top-center" />

      {/* Header */}
      <h1 className="text-4xl text-base-content dark:text-white text-center mb-12">
        We'll get back to you within <span className="font-bold">24 hours</span>
      </h1>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* Row 1: First Name & Last Name */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* First Name */}
          <div>
            <label
              className="block text-gray-600 dark:text-gray-300 font-bold mb-2"
              htmlFor="firstName"
            >
              First name
            </label>
            <input
              type="text"
              id="firstName"
              placeholder="John"
              className={inputClass(errors.firstName)}
              {...register("firstName", { required: "First name is required" })}
            />
            {errors.firstName && (
              <span className="text-red-500 text-xs mt-1">
                {errors.firstName.message}
              </span>
            )}
          </div>

          {/* Last Name */}
          <div>
            <label
              className="block text-gray-600 dark:text-gray-300 font-bold mb-2"
              htmlFor="lastName"
            >
              Last name
            </label>
            <input
              type="text"
              id="lastName"
              placeholder="Doe"
              className={inputClass(errors.lastName)}
              {...register("lastName", { required: "Last name is required" })}
            />
            {errors.lastName && (
              <span className="text-red-500 text-xs mt-1">
                {errors.lastName.message}
              </span>
            )}
          </div>
        </div>

        {/* Row 2: Email (With Icon) */}
        <div>
          <label
            className="block text-gray-600 dark:text-gray-300 font-bold mb-2"
            htmlFor="email"
          >
            Email
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg
                className="h-5 w-5 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </div>
            <input
              type="email"
              id="email"
              placeholder="john.doe@example.com"
              className={`${inputClass(errors.email)} pl-10`}
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: "Invalid email address",
                },
              })}
            />
          </div>
          {errors.email && (
            <span className="text-red-500 text-xs mt-1">
              {errors.email.message}
            </span>
          )}
        </div>

        {/* Row 3: Dropdown (With Icon) */}
        <div>
          <label
            className="block text-gray-600 dark:text-gray-300 font-bold mb-2"
            htmlFor="inquiry"
          >
            What can we help you with?
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg
                className="h-5 w-5 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <select
              id="inquiry"
              className={`${inputClass(
                errors.inquiry
              )} pl-10 pr-10 appearance-none cursor-pointer`}
              defaultValue=""
              {...register("inquiry", { required: "Please select an option" })}
            >
              <option value="general">General inquiry</option>
              <option value="support">Job Application</option>
              <option value="sales">Project Inquiry</option>
              <option value="other">Other</option>
            </select>
            {/* Custom Chevron Icon */}
            <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
              <svg
                className="h-4 w-4 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
          </div>
          {errors.inquiry && (
            <span className="text-red-500 text-xs mt-1">
              {errors.inquiry.message}
            </span>
          )}
        </div>

        {/* Row 4: Subject */}
        <div>
          <label
            className="block text-gray-600 dark:text-gray-300 font-bold mb-2"
            htmlFor="subject"
          >
            Subject
          </label>
          <input
            type="text"
            id="subject"
            placeholder="How can we help?"
            className={inputClass(errors.subject)}
            {...register("subject", { required: "Subject is required" })}
          />
          {errors.subject && (
            <span className="text-red-500 text-xs mt-1">
              {errors.subject.message}
            </span>
          )}
        </div>

        {/* Row 5: Message */}
        <div>
          <label
            className="block text-gray-600 dark:text-gray-300 font-bold mb-2"
            htmlFor="message"
          >
            Message
          </label>
          <textarea
            id="message"
            rows="6"
            placeholder="Tell us more about your question.."
            className={`${inputClass(errors.message)} resize-none`}
            {...register("message", {
              required: "Message is required",
              minLength: {
                value: 10,
                message: "Message must be at least 10 characters",
              },
            })}
          ></textarea>
          {errors.message && (
            <span className="text-red-500 text-xs mt-1">
              {errors.message.message}
            </span>
          )}
        </div>

        {/* Submit Button */}
        <div className="pt-2">
          {/* Ensure PrimaryBtn renders a button with type="submit" or accepts props */}
          <div
            type="submit"
            disabled={isPending}
            className="w-full flex justify-center"
          >
            {isPending ? (
              <span className="flex items-center gap-2 px-8 py-3 bg-gray-700 text-white font-bold rounded-md cursor-not-allowed">
                <Loader2 className="animate-spin" size={20} /> Sending...
              </span>
            ) : (
              // Reusing your component if it supports click events, otherwise wrapping it
              <PrimaryBtn buttonText="Send Message" />
            )}
          </div>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
