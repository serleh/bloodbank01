const BloodInformation = () => {
  const faqs = [
    {
      question: "Why is blood donation important?",
      answer:
        "Blood donation helps save lives during emergencies, surgeries, childbirth complications, and treatment of blood-related diseases.",
    },
    {
      question: "How often can I donate blood?",
      answer:
        "Donation frequency depends on health guidelines and the type of donation. Donors should follow advice from health professionals.",
    },
    {
      question: "Does donating blood hurt?",
      answer:
        "Most donors feel only a small pinch when the needle is inserted. The process is generally safe and quick.",
    },
    {
      question: "How long does blood donation take?",
      answer:
        "The donation process is usually completed within a short period, although registration and screening take additional time.",
    },
  ];

  const eligibility = [
    "Must be generally healthy",
    "Must meet age requirements",
    "Must meet minimum weight requirements",
    "Should not have conditions that prevent donation",
    "Must pass health screening",
  ];

  const importance = [
    "Helps accident victims",
    "Supports patients undergoing surgery",
    "Helps mothers during childbirth emergencies",
    "Supports patients with blood disorders",
  ];

  const bloodGroups = ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"];

  return (
    <div className="bg-[#FBF8F6] min-h-screen font-sans">
      <div className="max-w-4xl mx-auto px-4 py-14">
        <span className="text-xs font-semibold tracking-widest text-[#C81E3A] uppercase">
          Learn
        </span>
        <h1 className="text-4xl font-display font-semibold text-[#1B1F23] mt-2">
          Blood Information
        </h1>
        <p className="text-[#5B6168] mt-3 max-w-2xl">
          What blood does, who it's made of, and how to know if you're
          eligible to give.
        </p>

        {/* About Blood */}
        <section className="mt-12 bg-white border border-[#E8E1DB] rounded-2xl p-6 md:p-8">
          <h2 className="text-xl font-display font-semibold text-[#1B1F23] mb-3">
            About Blood
          </h2>
          <p className="text-[#5B6168] leading-relaxed">
            Blood is a vital fluid that transports oxygen, nutrients,
            hormones, and waste products throughout the body. It is made up
            of red blood cells, white blood cells, platelets, and plasma.
          </p>
        </section>

        {/* Importance + Eligibility */}
        <div className="grid md:grid-cols-2 gap-5 mt-5">
          <section className="bg-white border border-[#E8E1DB] rounded-2xl p-6 md:p-8">
            <h2 className="text-xl font-display font-semibold text-[#1B1F23] mb-4">
              Why It Matters
            </h2>
            <ul className="space-y-3">
              {importance.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-[#5B6168]">
                  <svg className="w-4 h-4 mt-1 text-[#2F6F62] shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </section>

          <section className="bg-white border border-[#E8E1DB] rounded-2xl p-6 md:p-8">
            <h2 className="text-xl font-display font-semibold text-[#1B1F23] mb-4">
              Eligibility
            </h2>
            <ul className="space-y-3">
              {eligibility.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-[#5B6168]">
                  <svg className="w-4 h-4 mt-1 text-[#C81E3A] shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </section>
        </div>

        {/* Blood Groups */}
        <section className="mt-5 bg-white border border-[#E8E1DB] rounded-2xl p-6 md:p-8">
          <h2 className="text-xl font-display font-semibold text-[#1B1F23] mb-4">
            Blood Groups
          </h2>
          <div className="grid grid-cols-4 gap-3">
            {bloodGroups.map((group) => (
              <div
                key={group}
                className="border border-[#E8E1DB] bg-[#FBF8F6] rounded-xl py-4 text-center font-mono font-semibold text-[#C81E3A]"
              >
                {group}
              </div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section className="mt-5 bg-white border border-[#E8E1DB] rounded-2xl p-6 md:p-8">
          <h2 className="text-xl font-display font-semibold text-[#1B1F23] mb-4">
            Frequently Asked Questions
          </h2>

          <div className="divide-y divide-[#F1ECE8]">
            {faqs.map((faq) => (
              <div key={faq.question} className="py-4 first:pt-0 last:pb-0">
                <h3 className="font-semibold text-[#1B1F23]">{faq.question}</h3>
                <p className="text-[#5B6168] mt-1.5 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default BloodInformation;
