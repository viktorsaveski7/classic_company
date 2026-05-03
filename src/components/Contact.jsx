import { companyInfo } from '../data/mockData';
import { useLanguage } from '../context/LanguageContext';

const Contact = () => {
  const { t } = useLanguage();

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-primary-600 font-semibold text-sm uppercase tracking-wider">
            {t('contact', 'sectionTitle')}
          </span>
          <h2 className="mt-2 text-3xl md:text-4xl font-bold text-secondary-900">
            {t('contact', 'headline')}
          </h2>
          <p className="mt-4 text-lg text-secondary-600">
            {t('contact', 'description')}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Contact Info */}
          <div className="space-y-6">
            {/* Phone Card */}
            <div className="bg-gradient-to-r from-primary-50 to-primary-100 rounded-2xl p-6 hover:shadow-lg transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 bg-primary-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-secondary-900 mb-1">{t('contact', 'phone')}</h3>
                  <p className="text-secondary-600 mb-3">{t('contact', 'phoneDesc')}</p>
                  <a 
                    href={companyInfo.phoneLink}
                    className="inline-flex items-center gap-2 bg-primary-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-primary-700 transition-colors"
                  >
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    {companyInfo.phone}
                  </a>
                </div>
              </div>
            </div>

            {/* Address Card */}
            <div className="bg-secondary-50 rounded-2xl p-6 hover:shadow-lg transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 bg-secondary-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-secondary-900 mb-1">{t('contact', 'address')}</h3>
                  <p className="text-secondary-600 mb-2">{t('contact', 'addressDesc')}</p>
                  <p className="text-secondary-800 font-medium">{companyInfo.address}</p>
                </div>
              </div>
            </div>

            {/* Working Hours Card */}
            <div className="bg-secondary-50 rounded-2xl p-6 hover:shadow-lg transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 bg-secondary-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-secondary-900 mb-1">{t('contact', 'workingHours')}</h3>
                  <p className="text-secondary-600 mb-2">{t('contact', 'workingHoursDesc')}</p>
                  <div className="space-y-1">
                    <p className="text-secondary-800">
                      <span className="font-medium">{t('contact', 'monSat')}</span> 06:00 - 22:00
                    </p>
                    <p className="text-secondary-800">
                      <span className="font-medium">{t('contact', 'sunday')}</span> 08:00 - 20:00
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Google Maps Embed */}
          <div className="rounded-2xl overflow-hidden shadow-lg h-[400px] lg:h-full min-h-[400px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2964.0!2d20.7986094!3d41.1186962!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1350dd01e78655cd%3A0xbf69ea408810be39!2sClassic%20Company!5e0!3m2!1sen!2smk!4v1714000000000!5m2!1sen!2smk"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Classic Company Location"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
