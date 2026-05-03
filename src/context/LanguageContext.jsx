import { createContext, useContext, useState, useEffect } from 'react';
import { translations, cityTranslations } from '../data/translations';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  // Try to get saved language from localStorage, default to 'en'
  const [language, setLanguage] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('preferredLanguage');
      return saved && ['en', 'mk', 'tr'].includes(saved) ? saved : 'en';
    }
    return 'en';
  });

  // Save language preference to localStorage
  useEffect(() => {
    localStorage.setItem('preferredLanguage', language);
  }, [language]);

  // Helper function to get translated text
  const t = (section, key) => {
    if (translations[section] && translations[section][key]) {
      return translations[section][key][language] || translations[section][key]['en'];
    }
    return key;
  };

  // Helper function to translate city names
  const translateCity = (cityName) => {
    if (cityTranslations[cityName]) {
      return cityTranslations[cityName][language] || cityName;
    }
    return cityName;
  };

  // Get language name
  const getLanguageName = (langCode) => {
    return translations.languages[langCode] || langCode;
  };

  const value = {
    language,
    setLanguage,
    t,
    translateCity,
    getLanguageName,
    availableLanguages: ['en', 'mk', 'tr']
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

export default LanguageContext;
