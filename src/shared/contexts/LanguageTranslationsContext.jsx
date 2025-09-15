import { createContext, useEffect, useState } from 'react';
import { getTranslations } from '@/api/services';

const LanguageTranslationsContext = createContext(undefined);

/**
 * Language translations provider.
 * @param {Object} props The props object.
 * @param {React.ReactNode} props.children The children elements.
 */
const LanguageTranslationsProvider = ({ children }) => {
  const [translations, setTranslations] = useState({});

  useEffect(() => {
    (async () => {
      try {
        const translations = await getTranslations();
        setTranslations(translations);
      } catch (error) {
        console.error(error);
        console.error('Something went wrong fetching language translations!');
      }
    })();
  }, []);

  return (
    <LanguageTranslationsContext.Provider value={{ translations, setTranslations }}>
      {children}
    </LanguageTranslationsContext.Provider>
  );
};

export { LanguageTranslationsContext, LanguageTranslationsProvider };
