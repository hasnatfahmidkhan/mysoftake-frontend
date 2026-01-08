import React from "react";
import { Mail, Phone } from "lucide-react";
import SecondaryBtn from "../../../component/SecondaryBtn/SecondaryBtn";

const FaqContact = () => {
  return (
    <section className="py-20 px-4 font-sans min-h-screen flex flex-col justify-center">
      {/* Top Centered Title */}
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold text-primary dark:text-white">FAQ</h2>
      </div>

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">
        {/* --- LEFT COLUMN: Info & Contact --- */}
        <div className="flex flex-col justify-center h-full pt-8">
          <h1 className="text-4xl md:text-5xl font-bold text-primary dark:text-white leading-tight mb-8">
            Frequently Asked <br /> Questions.
          </h1>

          <div className="space-y-4 text-primary dark:text-white text-lg mb-12">
            <p>
              Provides Clear Answers To Common Queries{" "}
              <br className="hidden md:block" />
              About A Product, Service, Or Topic.
            </p>
            <p>
              It Helps Users Find Information Quickly While{" "}
              <br className="hidden md:block" />
              Improving Overall Experience And Trust.
            </p>
          </div>

          <div className="mt-4">
            <h3 className="text-xl font-medium text-primary dark:text-white mb-6">
              Contact
            </h3>

            <div className="space-y-4">
              {/* Email Item */}
              <div className="flex items-center gap-4 group cursor-pointer">
                <div className="p-1">
                  <Mail
                    className="w-8 h-8 text-[#337ab7] dark:text-white group-hover:scale-110 transition-transform"
                    strokeWidth={1.5}
                  />
                </div>
                <a
                  href="mailto:info@mysoftake.com"
                  className="text-xl text-[#337ab7] dark:text-white hover:underline"
                >
                  info@mysoftake.com
                </a>
              </div>

              {/* Phone Item */}
              <div className="flex items-center gap-4 group cursor-pointer">
                <div className="p-1">
                  <Phone
                    className="w-8 h-8 text-[#337ab7] dark:text-white group-hover:scale-110 transition-transform"
                    strokeWidth={1.5}
                  />
                </div>
                <a
                  href="tel:01757881477"
                  className="text-xl text-[#337ab7] dark:text-white hover:underline tracking-widest"
                >
                  01757881477
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* --- RIGHT COLUMN: Form --- */}
        <div className="w-full">
          <form className="space-y-5">
            {/* User Name */}
            <input
              type="text"
              placeholder="User Name*"
              className="w-full bg-white p-5 rounded-md outline-none text-slate-700 placeholder:text-slate-400 focus:ring-1 focus:ring-blue-300 transition-shadow shadow-sm"
            />

            {/* Email & Area Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <input
                type="email"
                placeholder="Email*"
                className="w-full bg-white p-5 rounded-md outline-none text-slate-700 placeholder:text-slate-400 focus:ring-1 focus:ring-blue-300 transition-shadow shadow-sm"
              />
              <input
                type="text"
                placeholder="Your Area*"
                className="w-full bg-white p-5 rounded-md outline-none text-slate-700 placeholder:text-slate-400 focus:ring-1 focus:ring-blue-300 transition-shadow shadow-sm"
              />
            </div>

            {/* Industry */}
            <input
              type="text"
              placeholder="Industry*"
              className="w-full bg-white p-5 rounded-md outline-none text-slate-700 placeholder:text-slate-400 focus:ring-1 focus:ring-blue-300 transition-shadow shadow-sm"
            />

            {/* Subject */}
            <input
              type="text"
              placeholder="Subject?"
              className="w-full bg-white p-5 rounded-md outline-none text-slate-700 placeholder:text-slate-400 focus:ring-1 focus:ring-blue-300 transition-shadow shadow-sm"
            />

            {/* Message Area */}
            <textarea
              rows="8"
              placeholder="Message..."
              className="w-full bg-white p-5 rounded-md outline-none text-slate-700 placeholder:text-slate-400 focus:ring-1 focus:ring-blue-300 transition-shadow shadow-sm resize-none"
            ></textarea>

            {/* Checkbox */}
            <div className="flex items-center gap-3 pt-2">
              <input
                id="terms"
                type="checkbox"
                className="w-5 h-5 rounded border-gray-300 text-blue-600 focus:ring-blue-500 cursor-pointer accent-black"
              />
              <label
                htmlFor="terms"
                className="text-primary dark:text-white text-sm cursor-pointer select-none"
              >
                Agree with all terms and conditions
              </label>
            </div>

            {/* Submit Button */}
            <div className="pt-6">
              <SecondaryBtn buttonText={"Send"} />
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default FaqContact;
