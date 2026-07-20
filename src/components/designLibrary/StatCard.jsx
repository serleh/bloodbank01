const StatCard = ({ icon, alt, title, description }) => {
  return (
    <div className="bg-white p-6 rounded-2xl border border-[#E8E1DB] hover:shadow-md hover:-translate-y-0.5 transition-all duration-150 text-center">
      {icon && (
        <img src={icon} alt={alt} className="w-10 h-10 mx-auto mb-3 object-contain" />
      )}
      <p className="text-2xl font-display font-semibold text-[#1B1F23]">
        {title}
      </p>
      <p className="text-[#5B6168] text-sm mt-1">{description}</p>
    </div>
  );
};

export default StatCard;
