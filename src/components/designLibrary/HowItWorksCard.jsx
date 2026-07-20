const HowItWorksCard = ({ icon, title, description, index }) => {
  return (
    <div className="relative bg-white border border-[#E8E1DB] rounded-2xl p-6 text-left hover:shadow-md transition-shadow duration-150">
      {index && (
        <span className="font-mono text-xs font-semibold text-[#C81E3A]/60 tracking-widest">
          {String(index).padStart(2, "0")}
        </span>
      )}

      <div className="w-12 h-12 rounded-xl bg-[#E7F0EE] flex items-center justify-center text-2xl mt-3">
        {icon}
      </div>

      <h3 className="font-display font-semibold text-lg text-[#1B1F23] mt-4">
        {title}
      </h3>
      <p className="text-[#5B6168] text-sm mt-1.5 leading-relaxed">
        {description}
      </p>
    </div>
  );
};

export default HowItWorksCard;
