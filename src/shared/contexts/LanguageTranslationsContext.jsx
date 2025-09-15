import { createContext, useEffect, useState } from 'react';

import { getTranslations } from '@/api/services';
import { SVENSKA, SVENSKA_LANGUAGE_CODE, ENGLISH, ENGLISH_LANGUAGE_CODE, LANGUAGES } from '@/features/layout/data';

const LanguageTranslationsContext = createContext();

const MAP_LANGUAGE_TO_LANGUAGE_CODE = {
  [ENGLISH]: ENGLISH_LANGUAGE_CODE,
  [SVENSKA]: SVENSKA_LANGUAGE_CODE,
};

const LANGUAGE_KEY = 'app-language';

/**
 * Language translations provider.
 * @param {Object} props The props object.
 * @param {React.ReactNode} props.children The children elements.
 */
const LanguageTranslationsProvider = ({ children }) => {
  const [language, setLanguage] = useState(LANGUAGES.find(lang => lang.language === SVENSKA));
  const [isLanguageChecked, setIsLanguageChecked] = useState(false);
  const [translations, setTranslations] = useState({});

  /**
   * Handle language change.
   * @param {Object} lang The language object.
   */
  const handleLanguageChange = lang => {
    setLanguage(lang);
  };

  useEffect(() => {
    setIsLanguageChecked(true);
    const storedLanguage = localStorage.getItem(LANGUAGE_KEY);
    if (storedLanguage) {
      setLanguage(JSON.parse(storedLanguage));
    }
  }, []);

  useEffect(() => {
    (async () => {
      try {
        if (isLanguageChecked) {
          const languageCode = MAP_LANGUAGE_TO_LANGUAGE_CODE[language.language];
          const translations = await getTranslations(languageCode);
          setTranslations(translations);
          localStorage.setItem(LANGUAGE_KEY, JSON.stringify(language));
        }
      } catch (error) {
        console.error(error);
        console.error('Something went wrong fetching language translations!');
      }
    })();
  }, [language, isLanguageChecked]);

  return (
    <LanguageTranslationsContext.Provider value={{ language, translations, handleLanguageChange }}>
      {children}
    </LanguageTranslationsContext.Provider>
  );
};

export { LanguageTranslationsContext, LanguageTranslationsProvider };
