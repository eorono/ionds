
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/i18n';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { language, setLanguage, translations } = useLanguage();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'es' : 'en');
  };

  return (
    <nav className="bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <span className="text-ion-blue text-2xl font-bold font-heading">ION DATA</span>
            </div>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-ion-dark hover:text-ion-teal transition-colors font-medium">{translations.nav.home}</Link>
            <Link to="#services" className="text-ion-dark hover:text-ion-teal transition-colors font-medium">{translations.nav.services}</Link>
            <Link to="#about" className="text-ion-dark hover:text-ion-teal transition-colors font-medium">{translations.nav.about}</Link>
            <Button className="bg-ion-teal hover:bg-ion-blue text-white transition-colors">
              {translations.nav.scheduleCta}
            </Button>
            <button 
              onClick={toggleLanguage} 
              className="flex items-center text-ion-dark hover:text-ion-teal transition-colors"
              aria-label={language === 'en' ? 'Switch to Spanish' : 'Cambiar a Inglés'}
            >
              <Globe size={20} className="mr-1" />
              <span className="font-medium">{language.toUpperCase()}</span>
            </button>
          </div>
          
          <div className="md:hidden flex items-center space-x-4">
            <button 
              onClick={toggleLanguage} 
              className="flex items-center text-ion-dark hover:text-ion-teal transition-colors"
              aria-label={language === 'en' ? 'Switch to Spanish' : 'Cambiar a Inglés'}
            >
              <Globe size={20} />
            </button>
            <button onClick={toggleMenu} className="text-gray-600 hover:text-gray-900 focus:outline-none">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-b border-gray-200 animate-fade-in">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/" className="block px-3 py-2 rounded-md text-base font-medium text-ion-dark hover:bg-ion-light">{translations.nav.home}</Link>
            <Link to="#services" className="block px-3 py-2 rounded-md text-base font-medium text-ion-dark hover:bg-ion-light">{translations.nav.services}</Link>
            <Link to="#about" className="block px-3 py-2 rounded-md text-base font-medium text-ion-dark hover:bg-ion-light">{translations.nav.about}</Link>
            <div className="px-3 py-2">
              <Button className="w-full bg-ion-teal hover:bg-ion-blue text-white transition-colors">
                {translations.nav.scheduleCta}
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
