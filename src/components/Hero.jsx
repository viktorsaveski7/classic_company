import { heroImages } from '../data/mockData';
import { useLanguage } from '../context/LanguageContext';

const Hero = () => {
  const { t } = useLanguage();

  const scrollToRoutes = () => {
    const element = document.getElementById('routes');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="pt-16 bg-gradient-to-br from-primary-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-secondary-900 leading-tight">
              {t('hero', 'headline1')}
              <span className="text-primary-600 block">{t('hero', 'headline2')}</span>
            </h1>
            <p className="mt-6 text-xl text-secondary-600 max-w-2xl">
              {t('hero', 'subheadline')}
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button 
                onClick={scrollToRoutes}
                className="bg-primary-600 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-primary-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                {t('hero', 'viewSchedule')}
              </button>
              <a 
                href="tel:+38971611907"
                className="border-2 border-primary-600 text-primary-600 px-8 py-4 rounded-xl text-lg font-semibold hover:bg-primary-50 transition-all duration-300"
              >
                {t('hero', 'callUsNow')}
              </a>
            </div>

            {/* Stats */}
            <div className="mt-12 grid grid-cols-3 gap-6 max-w-md mx-auto lg:mx-0">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600">10+</div>
                <div className="text-sm text-secondary-500">{t('hero', 'routes')}</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600">9</div>
                <div className="text-sm text-secondary-500">{t('hero', 'cities')}</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600">301</div>
                <div className="text-sm text-secondary-500">{t('hero', 'reviews')}</div>
              </div>
            </div>
          </div>

          {/* Images Grid */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              {/* Main large image */}
              <div className="col-span-2">
                <img 
                  src={heroImages[0].url}
                  alt={heroImages[0].alt}
                  className="w-full h-64 object-cover rounded-2xl shadow-2xl"
                />
              </div>
              {/* Two smaller images */}
              <div>
                <img 
                  src={heroImages[1].url}
                  alt={heroImages[1].alt}
                  className="w-full h-40 object-cover rounded-xl shadow-lg"
                />
              </div>
              <div>
                <img 
                  src={heroImages[2].url}
                  alt={heroImages[2].alt}
                  className="w-full h-40 object-cover rounded-xl shadow-lg"
                />
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary-200 rounded-full opacity-50 -z-10"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary-100 rounded-full opacity-50 -z-10"></div>
          </div>
        </div>
      </div>

      {/* Wave divider */}
      <div className="relative">
        <svg className="w-full h-16 text-white" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill="currentColor"></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
