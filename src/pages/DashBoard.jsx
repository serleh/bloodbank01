import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import api from "../services/api";

const PinIcon = () => (
  <svg className="w-3.5 h-3.5 inline -mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 21c-4.5-4.2-7-7.8-7-11a7 7 0 1114 0c0 3.2-2.5 6.8-7 11z" />
    <circle cx="12" cy="10" r="2.5" />
  </svg>
);

const Dashboard = () => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await api.get("/me");
        setUserData(res.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchUser();
  }, []);

  if (!userData) {
    return (
      <div className="min-h-screen bg-[#FBF8F6] flex items-center justify-center">
        <p className="text-[#5B6168] font-sans">Loading dashboard...</p>
      </div>
    );
  }

  const { user, donor } = userData;

  const initials =
    donor?.name
      ?.split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase() || "U";

  return (
    <section className="min-h-screen bg-[#FBF8F6] py-10 px-4 font-sans">
      <div className="max-w-4xl mx-auto space-y-4">
        {/* Hero */}
        <div className="bg-white border border-[#E8E1DB] rounded-2xl px-7 py-6 flex items-center justify-between flex-wrap gap-4">
          <div className="flex items-center gap-4">
            <div className="relative">
              <div className="w-14 h-14 rounded-full bg-[#FBE9EC] flex items-center justify-center text-[#C81E3A] font-display font-semibold text-lg">
                {initials}
              </div>
              <div className="absolute bottom-0.5 right-0.5 w-3 h-3 rounded-full bg-[#2F6F62] border-2 border-white" />
            </div>

            <div>
              <p className="text-lg font-display font-semibold text-[#1B1F23]">
                {donor?.name}
              </p>
              <p className="text-sm text-[#9AA0A6] mt-0.5">
                <PinIcon /> {donor?.city}, Nigeria · @{user?.username}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 flex-wrap">
            <span className="inline-flex items-center gap-1.5 text-sm font-mono font-semibold px-4 py-1.5 rounded-full bg-[#FBE9EC] text-[#C81E3A] border border-[#C81E3A]/20">
              {donor?.bloodGroup}
            </span>

            <span className="inline-flex items-center gap-2 text-xs font-medium px-4 py-1.5 rounded-full bg-[#E7F0EE] text-[#2F6F62] border border-[#2F6F62]/20">
              <span className="w-2 h-2 rounded-full bg-[#2F6F62] inline-block" />
              Available to donate
            </span>
          </div>
        </div>

        {/* KPIs */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {[
            { label: "Profile", value: "100%", sub: "Fully verified", bar: true },
            { label: "Weight", value: `${donor?.weight || 0} kg`, sub: "Above minimum" },
            { label: "Donations", value: "0", sub: "Ready for first" },
            { label: "Requests", value: "—", sub: "None pending" },
          ].map(({ label, value, sub, bar }) => (
            <div key={label} className="bg-white border border-[#E8E1DB] rounded-xl p-4">
              <p className="text-xs uppercase tracking-widest text-[#9AA0A6] mb-1">
                {label}
              </p>
              <p className="text-2xl font-mono font-semibold text-[#1B1F23]">
                {value}
              </p>
              <p className="text-xs text-[#9AA0A6] mt-1">{sub}</p>

              {bar && (
                <div className="mt-2 h-1 rounded-full bg-[#F1ECE8] overflow-hidden">
                  <div className="h-full w-full bg-[#2F6F62] rounded-full" />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Info card */}
        <div className="bg-white border border-[#E8E1DB] rounded-2xl p-5">
          <p className="text-sm font-semibold text-[#1B1F23] mb-3">
            Donor information
          </p>

          {[
            { label: "Full name", value: donor?.name },
            { label: "Gender", value: donor?.gender },
            { label: "City", value: donor?.city },
            { label: "Blood group", value: donor?.bloodGroup, red: true },
          ].map(({ label, value, red }) => (
            <div
              key={label}
              className="flex justify-between py-2.5 border-b last:border-0 border-[#F1ECE8]"
            >
              <span className="text-sm text-[#9AA0A6]">{label}</span>
              <span
                className={`text-sm font-medium ${
                  red ? "text-[#C81E3A] font-mono" : "text-[#1B1F23]"
                }`}
              >
                {value}
              </span>
            </div>
          ))}
        </div>

        {/* Actions */}
        <div className="bg-white border border-[#E8E1DB] rounded-2xl p-5">
          <p className="text-sm font-semibold text-[#1B1F23] mb-3">
            Quick actions
          </p>

          {[
            { to: "/profile", label: "Edit profile", sub: "Update details" },
            { to: "/", label: "Search donors", sub: "Find matches" },
          ].map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="flex items-center justify-between p-3 rounded-xl hover:bg-[#FBF8F6] transition-colors group"
            >
              <div>
                <p className="text-sm font-medium text-[#1B1F23]">{item.label}</p>
                <p className="text-xs text-[#9AA0A6]">{item.sub}</p>
              </div>
              <svg
                className="w-4 h-4 text-[#9AA0A6] group-hover:text-[#C81E3A] group-hover:translate-x-0.5 transition"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 18l6-6-6-6" />
              </svg>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
