import { useLanguage } from '../context/LanguageContext';

const RouteCard = ({ route }) => {
  const { t, translateCity } = useLanguage();

  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-secondary-100 hover:border-primary-200">
      {/* Route Header */}
      <div className="bg-gradient-to-r from-primary-600 to-primary-700 px-6 py-4">
        <div className="flex items-center justify-between text-white">
          <div className="flex items-center gap-3">
            <span className="font-semibold text-lg">{translateCity(route.departure)}</span>
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
            <span className="font-semibold text-lg">{translateCity(route.arrival)}</span>
          </div>
        </div>
      </div>

      {/* Route Details */}
      <div className="p-6">
        {/* Duration and Price */}
        <div className="flex justify-between items-center mb-4 pb-4 border-b border-secondary-100">
          <div className="flex items-center gap-2 text-secondary-600">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="font-medium">{route.duration}</span>
          </div>
          <div className="bg-primary-50 text-primary-700 px-3 py-1 rounded-full font-semibold">
            {route.price}
          </div>
        </div>

        {/* Departure Times */}
        <div>
          <h4 className="text-sm font-medium text-secondary-500 uppercase tracking-wider mb-3">
            {t('routes', 'departureTimes')}
          </h4>
          <div className="flex flex-wrap gap-2">
            {route.times.map((time, index) => (
              <span 
                key={index}
                className="bg-secondary-100 text-secondary-700 px-4 py-2 rounded-lg font-medium hover:bg-primary-100 hover:text-primary-700 transition-colors cursor-default"
              >
                {time}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RouteCard;
