import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import api from "../services/api";

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
      <p className="text-center mt-10 text-gray-500">Loading dashboard...</p>
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
    <section className="min-h-screen bg-gray-50 py-10 px-4">
      <div className="max-w-4xl mx-auto space-y-3">
        {/* Hero */}
        <div className="bg-white border border-gray-100 rounded-2xl px-7 py-6 flex items-center justify-between flex-wrap gap-4">
          <div className="flex items-center gap-4">
            <div className="relative">
              <div className="w-14 h-14 rounded-full bg-red-50 flex items-center justify-center text-red-700 font-medium text-lg">
                {initials}
              </div>

              <div className="absolute bottom-0.5 right-0.5 w-3 h-3 rounded-full bg-green-500 border-2 border-white" />
            </div>

            <div>
              <p className="text-lg font-medium text-gray-900">{donor?.name}</p>

              <p className="text-sm text-gray-400 mt-0.5">
                📍 {donor?.city}, Nigeria · @{user?.username}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 flex-wrap">
            <span className="inline-flex items-center gap-1.5 text-sm font-medium px-4 py-1.5 rounded-full bg-red-50 text-red-800 border border-red-200">
              🩸 {donor?.bloodGroup}
            </span>

            <span className="inline-flex items-center gap-2 text-xs font-medium px-4 py-1.5 rounded-full bg-green-50 text-green-800 border border-green-200">
              <span className="w-2 h-2 rounded-full bg-green-500 inline-block" />
              Available to donate
            </span>
          </div>
        </div>

        {/* KPIs */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {[
            {
              label: "Profile",
              value: "100%",
              sub: "Fully verified",
              bar: true,
            },
            {
              label: "Weight",
              value: `${donor?.weight || 0} kg`,
              sub: "Above minimum",
            },
            { label: "Donations", value: "0", sub: "Ready for first" },
            { label: "Requests", value: "—", sub: "None pending" },
          ].map(({ label, value, sub, bar }) => (
            <div key={label} className="bg-gray-100 rounded-xl p-4">
              <p className="text-xs uppercase tracking-widest text-gray-400 mb-1">
                {label}
              </p>

              <p className="text-2xl font-medium text-gray-900">{value}</p>

              <p className="text-xs text-gray-400 mt-1">{sub}</p>

              {bar && (
                <div className="mt-2 h-1 rounded-full bg-gray-200 overflow-hidden">
                  <div className="h-full w-full bg-red-500 rounded-full" />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Info card */}
        <div className="bg-white border border-gray-100 rounded-2xl p-5">
          <p className="text-sm font-medium mb-3">Donor information</p>

          {[
            { label: "Full name", value: donor?.name },
            { label: "Gender", value: donor?.gender },
            { label: "City", value: donor?.city },
            { label: "Blood group", value: donor?.bloodGroup, red: true },
          ].map(({ label, value, red }) => (
            <div
              key={label}
              className="flex justify-between py-2 border-b last:border-0 border-gray-50"
            >
              <span className="text-sm text-gray-400">{label}</span>
              <span
                className={`text-sm font-medium ${
                  red ? "text-red-700" : "text-gray-900"
                }`}
              >
                {value}
              </span>
            </div>
          ))}
        </div>

        {/* Actions */}
        <div className="bg-white border border-gray-100 rounded-2xl p-5">
          <p className="text-sm font-medium mb-3">Quick actions</p>

          {[
            { to: "/profile", label: "Edit profile", sub: "Update details" },
            { to: "/", label: "Search donors", sub: "Find matches" },
          ].map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="block p-3 rounded-lg hover:bg-gray-50"
            >
              <p className="text-sm font-medium">{item.label}</p>
              <p className="text-xs text-gray-400">{item.sub}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
