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

  return (
    <div className="max-w-5xl mx-auto px-6 py-10">
      <h1 className="text-4xl font-bold mb-8">Blood Information</h1>

      {/* About Blood */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-3">About Blood</h2>

        <p>
          Blood is a vital fluid that transports oxygen, nutrients, hormones,
          and waste products throughout the body. It is made up of red blood
          cells, white blood cells, platelets, and plasma.
        </p>
      </section>

      {/* Importance */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-3">
          Importance of Blood Donation
        </h2>

        <ul className="list-disc ml-6">
          <li>Helps accident victims</li>
          <li>Supports patients undergoing surgery</li>
          <li>Helps mothers during childbirth emergencies</li>
          <li>Supports patients with blood disorders</li>
        </ul>
      </section>

      {/* Eligibility */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-3">
          Blood Donation Eligibility
        </h2>

        <ul className="list-disc ml-6">
          <li>Must be generally healthy</li>
          <li>Must meet age requirements</li>
          <li>Must meet minimum weight requirements</li>
          <li>Should not have conditions that prevent donation</li>
          <li>Must pass health screening</li>
        </ul>
      </section>

      {/* Blood Groups */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-3">Blood Groups</h2>

        <div className="grid grid-cols-4 gap-4">
          {["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"].map((group) => (
            <div key={group} className="border rounded-lg p-4 text-center">
              {group}
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section>
        <h2 className="text-2xl font-semibold mb-3">
          Frequently Asked Questions
        </h2>

        {faqs.map((faq, index) => (
          <div key={index} className="mb-5">
            <h3 className="font-semibold">{faq.question}</h3>

            <p>{faq.answer}</p>
          </div>
        ))}
      </section>
    </div>
  );
};

export default BloodInformation;
