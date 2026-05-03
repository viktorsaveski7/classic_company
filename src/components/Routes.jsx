import { useState, useMemo } from 'react';
import { busRoutes, cities } from '../data/mockData';
import { useLanguage } from '../context/LanguageContext';
import RouteCard from './RouteCard';

const Routes = () => {
  const [departureCity, setDepartureCity] = useState('');
  const [arrivalCity, setArrivalCity] = useState('');
  const { t, translateCity } = useLanguage();

  // Filter routes based on selected cities
  const filteredRoutes = useMemo(() => {
    return busRoutes.filter(route => {
      const matchesDeparture = !departureCity || route.departure === departureCity;
      const matchesArrival = !arrivalCity || route.arrival === arrivalCity;
      return matchesDeparture && matchesArrival;
    });
  }, [departureCity, arrivalCity]);

  // Clear filters
  const clearFilters = () => {
    setDepartureCity('');
    setArrivalCity('');
  };

  // Swap cities
  const swapCities = () => {
    const temp = departureCity;
    setDepartureCity(arrivalCity);
    setArrivalCity(temp);
  };

  return (
    <section id="routes" className="py-20 bg-secondary-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-primary-600 font-semibold text-sm uppercase tracking-wider">
            {t('routes', 'sectionTitle')}
          </span>
          <h2 className="mt-2 text-3xl md:text-4xl font-bold text-secondary-900">
            {t('routes', 'headline')}
          </h2>
          <p className="mt-4 text-lg text-secondary-600">
            {t('routes', 'description')}
          </p>
        </div>

        {/* Search Filter */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-10">
          <div className="grid md:grid-cols-7 gap-4 items-end">
            {/* Departure City */}
            <div className="md:col-span-3">
              <label className="block text-sm font-medium text-secondary-700 mb-2">
                {t('routes', 'from')}
              </label>
              <select
                value={departureCity}
                onChange={(e) => setDepartureCity(e.target.value)}
                className="w-full px-4 py-3 border border-secondary-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all bg-white text-secondary-900"
              >
                <option value="">{t('routes', 'allDepartureCities')}</option>
                {cities.map(city => (
                  <option key={city} value={city}>{translateCity(city)}</option>
                ))}
              </select>
            </div>

            {/* Swap Button */}
            <div className="md:col-span-1 flex justify-center">
              <button
                onClick={swapCities}
                className="p-3 bg-secondary-100 rounded-xl hover:bg-primary-100 transition-colors group"
                title="Swap cities"
              >
                <svg 
                  className="w-6 h-6 text-secondary-600 group-hover:text-primary-600 transition-colors" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                </svg>
              </button>
            </div>

            {/* Arrival City */}
            <div className="md:col-span-3">
              <label className="block text-sm font-medium text-secondary-700 mb-2">
                {t('routes', 'to')}
              </label>
              <select
                value={arrivalCity}
                onChange={(e) => setArrivalCity(e.target.value)}
                className="w-full px-4 py-3 border border-secondary-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all bg-white text-secondary-900"
              >
                <option value="">{t('routes', 'allArrivalCities')}</option>
                {cities.map(city => (
                  <option key={city} value={city}>{translateCity(city)}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Filter Actions */}
          {(departureCity || arrivalCity) && (
            <div className="mt-4 flex items-center justify-between border-t border-secondary-100 pt-4">
              <span className="text-secondary-600">
                {t('routes', 'showing')} <strong className="text-primary-600">{filteredRoutes.length}</strong> {filteredRoutes.length !== 1 ? t('routes', 'routePlural') : t('routes', 'route')}
              </span>
              <button
                onClick={clearFilters}
                className="text-primary-600 hover:text-primary-700 font-medium flex items-center gap-1 transition-colors"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
                {t('routes', 'clearFilters')}
              </button>
            </div>
          )}
        </div>

        {/* Routes Grid */}
        {filteredRoutes.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredRoutes.map(route => (
              <RouteCard key={route.id} route={route} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-white rounded-2xl">
            <svg 
              className="w-16 h-16 text-secondary-300 mx-auto mb-4" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <h3 className="text-xl font-semibold text-secondary-700 mb-2">{t('routes', 'noRoutesFound')}</h3>
            <p className="text-secondary-500">
              {t('routes', 'noRoutesMessage')}{' '}
              <button 
                onClick={clearFilters}
                className="text-primary-600 hover:underline font-medium"
              >
                {t('routes', 'clearFilters').toLowerCase()}
              </button>
            </p>
          </div>
        )}

        {/* Info Note */}
        <div className="mt-10 bg-primary-50 border border-primary-100 rounded-xl p-4 text-center">
          <p className="text-primary-700">
            <svg className="w-5 h-5 inline-block mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            {t('routes', 'scheduleNote')}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Routes;
