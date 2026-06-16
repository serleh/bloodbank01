import React from "react";

const DonorCard = ({ donor }) => {
  return (
    <div className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm hover:shadow-md transition">
      <div className="flex items-center justify-between">
        {/* Avatar placeholder */}
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center font-bold text-red-600">
            {donor.bloodGroup}
          </div>

          <div>
            <p className="font-semibold text-gray-800">{donor.name}</p>
            <p className="text-sm text-gray-500">{donor.city}</p>
          </div>
        </div>

        {/* Status badge (optional future use) */}
        <span className="text-xs px-2 py-1 bg-green-100 text-green-700 rounded-full">
          Available
        </span>
      </div>

      <div className="mt-4 text-sm text-gray-600 space-y-1">
        <p>📞 {donor.phone || "Not provided"}</p>
        <p>📧 {donor.email || "Not provided"}</p>
      </div>

      <button className="mt-4 w-full bg-red-600 text-white py-2 rounded-xl hover:bg-red-700 transition">
        Contact Donor
      </button>
    </div>
  );
};

export default DonorCard;