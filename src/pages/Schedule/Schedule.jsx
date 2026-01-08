import { CalendarPlus, PlayCircle } from "lucide-react";
import BookingWidget from "./BookingWidget";

const Schedule = () => {
  return (
    <div className="py-8">
      <div className="max-w-5xl mx-auto">
        {/* Top Pill / Badge */}
        <div className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-4 py-1.5 text-sm font-medium text-slate-600 shadow-sm mb-8">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
          </span>
          Live scheduling workspace
        </div>

        {/* Main Heading */}
        <h1 className="max-w-4xl text-5xl md:text-[4rem] leading-[1.1] font-bold text-base-content mb-8">
          Schedule meetings without the back-and-forth.
        </h1>

        {/* Subheading / Base Content */}
        <p className="max-w-2xl text-xl md:text-2xl text-base-content leading-relaxed mb-10">
          Collect meeting polls, and keep every{" "}
          <br className="hidden md:block" />
          business conversation exactly where it belongs on your calendar.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 mb-20">
          <button className="inline-flex items-center gap-2 bg-[#1CA6F0] hover:bg-[#1691D3] text-white text-lg font-medium px-8 py-4 rounded-lg transition-colors shadow-sm">
            <CalendarPlus size={22} strokeWidth={2} />
            Create scheduling link
          </button>

          <button className="inline-flex items-center gap-2 text-base-content hover:text-base-content/70 cursor-pointer text-lg font-medium transition-colors">
            <PlayCircle size={24} strokeWidth={1.5} />
            Watch 90s demo
          </button>
        </div>

        {/* Feature Grid */}
        <div className="grid md:grid-cols-3 gap-12">
          {/* Feature 1 */}
          <div className="space-y-3">
            <h3 className="text-lg font-bold text-base-content">
              Smart routing
            </h3>
            <p className="text-base leading-7 text-base-content">
              Round-robin and collective scheduling for teams, with time zones
              handled automatically.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="space-y-3">
            <h3 className="text-lg font-bold text-base-content">
              Meeting polls
            </h3>
            <p className="text-base leading-7 text-base-content">
              Let guests vote on times and confirm the winner with one click.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="space-y-3">
            <h3 className="text-lg font-bold text-base-content">
              Availability rules
            </h3>
            <p className="text-base leading-7 text-base-content">
              Define working hours, buffers, and caps per day to protect your
              focus time.
            </p>
          </div>
        </div>
      </div>

      {/* booking widget  */}
      <BookingWidget />
    </div>
  );
};

export default Schedule;
