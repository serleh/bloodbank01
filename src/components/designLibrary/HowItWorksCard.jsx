import React from "react";

const HowItWorksCard = ({ icon, title, description }) => {
  return (
    <div>
      <div className="text-3xl">{icon}</div>
      <h3 className="font-semibold mt-3">{title}</h3>
      <p className="text-gray-500 text-sm mt-1">{description}</p>
    </div>
  );
};

export default HowItWorksCard;
