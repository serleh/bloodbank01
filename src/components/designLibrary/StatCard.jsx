const StatCard = ({ icon, alt, title, description }) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition text-center">
      <img src={icon} alt={alt} className="w-12 mx-auto mb-3" />
      <p className="text-xl font-semibold text-gray-800">{title}</p>
      <p className="text-gray-500 text-sm">{description}</p>
    </div>
  );
};

export default StatCard;
