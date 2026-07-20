import React from "react";

const DonorCard = ({ donor }) => {
  return (
    <div className="bg-white border border-[#E8E1DB] rounded-2xl p-5 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-150">
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 shrink-0 rounded-xl bg-[#FBE9EC] flex items-center justify-center font-mono font-semibold text-[#C81E3A] text-sm">
            {donor.bloodGroup}
          </div>

          <div>
            <p className="font-semibold text-[#1B1F23] font-sans">
              {donor.name}
            </p>
            <p className="text-sm text-[#5B6168]">{donor.city}</p>
          </div>
        </div>

        <span className="inline-flex items-center gap-1.5 shrink-0 text-xs font-medium px-2.5 py-1 bg-[#E7F0EE] text-[#2F6F62] rounded-full whitespace-nowrap">
          <span className="w-1.5 h-1.5 rounded-full bg-[#2F6F62]" />
          Available
        </span>
      </div>

      <div className="mt-4 pt-4 border-t border-[#F1ECE8] text-sm text-[#5B6168] space-y-2">
        <p className="flex items-center gap-2">
          <svg
            className="w-4 h-4 text-[#9AA0A6] shrink-0"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 5a2 2 0 012-2h2.28a1 1 0 01.98.804l.7 3.5a1 1 0 01-.5 1.06l-1.63.815a11.05 11.05 0 005.516 5.517l.815-1.63a1 1 0 011.06-.5l3.5.7a1 1 0 01.804.98V19a2 2 0 01-2 2h-1C8.163 21 3 15.837 3 9V5z"
            />
          </svg>
          {donor.phone || "Not provided"}
        </p>

        <p className="flex items-center gap-2">
          <svg
            className="w-4 h-4 text-[#9AA0A6] shrink-0"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            />
          </svg>
          {donor.email || "Not provided"}
        </p>
      </div>

      <button className="mt-4 w-full bg-[#C81E3A] text-white py-2.5 rounded-xl font-semibold text-sm hover:bg-[#A81730] transition-colors">
        Contact Donor
      </button>
    </div>
  );
};

export default DonorCard;
