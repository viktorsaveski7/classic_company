import { useState } from 'react';
import { companyInfo } from '../data/mockData';
import { useLanguage } from '../context/LanguageContext';
import LanguageSwitcher from './LanguageSwitcher';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t } = useLanguage();

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className="bg-white shadow-md fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <div className="flex items-center gap-2">
              <svg 
                className="w-8 h-8 text-primary-600" 
                viewBox="0 0 24 24" 
                fill="currentColor"
              >
                <path d="M4 16c0 .88.39 1.67 1 2.22V20c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h8v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1.78c.61-.55 1-1.34 1-2.22V6c0-3.5-3.58-4-8-4s-8 .5-8 4v10zm3.5 1c-.83 0-1.5-.67-1.5-1.5S6.67 14 7.5 14s1.5.67 1.5 1.5S8.33 17 7.5 17zm9 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm1.5-6H6V6h12v5z"/>
              </svg>
              <span className="font-bold text-xl text-secondary-800">{companyInfo.name}</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <button 
              onClick={() => scrollToSection('hero')}
              className="text-secondary-600 hover:text-primary-600 transition-colors font-medium"
            >
              {t('nav', 'home')}
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="text-secondary-600 hover:text-primary-600 transition-colors font-medium"
            >
              {t('nav', 'about')}
            </button>
            <button 
              onClick={() => scrollToSection('routes')}
              className="text-secondary-600 hover:text-primary-600 transition-colors font-medium"
            >
              {t('nav', 'busRoutes')}
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-secondary-600 hover:text-primary-600 transition-colors font-medium"
            >
              {t('nav', 'contact')}
            </button>
            
            {/* Language Switcher */}
            <LanguageSwitcher />
            
            <a 
              href={companyInfo.phoneLink}
              className="bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700 transition-colors font-medium"
            >
              {t('nav', 'callNow')}
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center gap-2">
            <LanguageSwitcher />
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-secondary-600 hover:text-primary-600 focus:outline-none"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col space-y-3">
              <button 
                onClick={() => scrollToSection('hero')}
                className="text-secondary-600 hover:text-primary-600 transition-colors font-medium text-left px-2 py-2"
              >
                {t('nav', 'home')}
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="text-secondary-600 hover:text-primary-600 transition-colors font-medium text-left px-2 py-2"
              >
                {t('nav', 'about')}
              </button>
              <button 
                onClick={() => scrollToSection('routes')}
                className="text-secondary-600 hover:text-primary-600 transition-colors font-medium text-left px-2 py-2"
              >
                {t('nav', 'busRoutes')}
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-secondary-600 hover:text-primary-600 transition-colors font-medium text-left px-2 py-2"
              >
                {t('nav', 'contact')}
              </button>
              <a 
                href={companyInfo.phoneLink}
                className="bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700 transition-colors font-medium text-center"
              >
                {t('nav', 'callNow')}
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
