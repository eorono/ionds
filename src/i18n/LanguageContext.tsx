
import React, { createContext, useState, useContext, useEffect, ReactNode } from 'react';
import { en } from './en';
import { es } from './es';

// Definir tipos para los idiomas disponibles
type Languages = 'en' | 'es';
type TranslationsType = typeof en;

// Interfaz para el contexto
interface LanguageContextType {
  language: Languages;
  translations: TranslationsType;
  setLanguage: (language: Languages) => void;
}

// Crear el contexto
const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Mapa de traducciones
const translations = {
  en,
  es
};

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  // Intentar obtener el idioma del localStorage o usar 'en' por defecto
  const [language, setLanguage] = useState<Languages>(() => {
    const savedLanguage = localStorage.getItem('language') as Languages;
    return savedLanguage || (navigator.language.startsWith('es') ? 'es' : 'en');
  });

  // Guardar el idioma seleccionado en localStorage cuando cambie
  useEffect(() => {
    localStorage.setItem('language', language);
    document.documentElement.lang = language;
  }, [language]);

  const value = {
    language,
    translations: translations[language],
    setLanguage,
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

// Hook personalizado para usar el contexto
export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
