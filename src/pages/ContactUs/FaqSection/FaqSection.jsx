const FAQSection = () => {
  const faqData = [
    {
      id: 1,
      theme: "blue",
      question: "How do I add a new institution to compare?",
      answer:
        "You can add institutions through our comparison tool or contact us with details, We verify all submissions to ensure data accuracy.",
    },
    {
      id: 2,
      theme: "purple",
      question: "How often is the data updated?",
      answer:
        "We update our database quarterly and continuously monitor for changes. Institution representatives can request updates anytime.",
    },
    {
      id: 3,
      theme: "pink",
      question: "Is this service free?",
      answer:
        "Yes, our comparison tool is completely free for students. We offer premium features for institutions and educational counselors.",
    },
    {
      id: 4,
      theme: "blue",
      question: "Can institutions claim their profile?",
      answer:
        "Absolutely, Institution representatives can claim and manage their profiles to ensure information accuracy and add additional details.",
    },
  ];

  // Helper to map themes to Tailwind classes
  const getThemeClasses = (theme) => {
    switch (theme) {
      case "purple":
        return {
          wrapper: "bg-purple-50 dark:bg-black border-purple-100",
          iconBg: "bg-purple-500",
        };
      case "pink":
        return {
          wrapper: "bg-pink-50 dark:bg-black border-pink-100",
          iconBg: "bg-pink-500",
        };
      case "blue":
      default:
        return {
          wrapper: "bg-blue-50 dark:bg-black border-blue-100",
          iconBg: "bg-blue-500",
        };
    }
  };

  return (
    <section className="py-16 px-4">
      <div className="max-w-4xl mx-auto">
        {/* --- Header Section --- */}
        <div className="flex flex-col items-center text-center mb-12">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-1.5 rounded-full border border-blue-200 bg-blue-50 text-blue-600 mb-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
              />
            </svg>
            <span className="text-sm font-semibold text-#6585E2[]">FAQ</span>
          </div>

          {/* Title - Using text-base-content */}
          <h2 className="text-3xl md:text-4xl font-bold text-base-content mb-4">
            Frequently asked questions
          </h2>

          {/* Subtitle - Using text-base-content with opacity */}
          <p className="text-base-content text-lg">
            Can't find what you're looking for? We're here to help.
          </p>
        </div>

        {/* --- FAQ List --- */}
        <div className="space-y-6">
          {faqData.map((item) => {
            const style = getThemeClasses(item.theme);

            return (
              <div
                key={item.id}
                className={`flex gap-5 p-6 rounded-2xl border ${style.wrapper} transition-transform hover:scale-[1.01]`}
              >
                {/* Icon Box */}
                <div
                  className={`shrink-0 w-10 h-10 rounded-lg ${style.iconBg} flex items-center justify-center text-base-content shadow-sm`}
                >
                  <span className="font-bold text-lg">?</span>
                </div>

                {/* Content */}
                <div>
                  <h3 className="text-lg font-bold text-base-content mb-2">
                    {item.question}
                  </h3>
                  <p className="text-base-content/70 leading-relaxed text-sm md:text-base">
                    {item.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
