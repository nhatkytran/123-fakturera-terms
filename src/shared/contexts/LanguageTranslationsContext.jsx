import { createContext, useEffect, useState } from 'react';

import { getTranslations } from '@/api/services';
import { SVENSKA, SVENSKA_LANGUAGE_CODE, ENGLISH, ENGLISH_LANGUAGE_CODE, LANGUAGES } from '@/features/layout/data';

const LanguageTranslationsContext = createContext(undefined);

const MAP_LANGUAGE_TO_LANGUAGE_CODE = {
  [ENGLISH]: ENGLISH_LANGUAGE_CODE,
  [SVENSKA]: SVENSKA_LANGUAGE_CODE,
};

/**
 * Language translations provider.
 * @param {Object} props The props object.
 * @param {React.ReactNode} props.children The children elements.
 */
const LanguageTranslationsProvider = ({ children }) => {
  const [language, setLanguage] = useState(LANGUAGES.find(lang => lang.language === ENGLISH));
  const [translations, setTranslations] = useState({});

  /**
   * Handle language change.
   * @param {Object} lang The language object.
   */
  const handleLanguageChange = lang => {
    setLanguage(lang);
  };

  useEffect(() => {
    (async () => {
      try {
        const languageCode = MAP_LANGUAGE_TO_LANGUAGE_CODE[language.language];
        const translations = await getTranslations(languageCode);
        setTranslations(translations);
      } catch (error) {
        console.error(error);
        console.error('Something went wrong fetching language translations!');
      }
    })();
  }, [language]);

  return (
    <LanguageTranslationsContext.Provider value={{ language, translations, handleLanguageChange }}>
      {children}
    </LanguageTranslationsContext.Provider>
  );
};

export { LanguageTranslationsContext, LanguageTranslationsProvider };
