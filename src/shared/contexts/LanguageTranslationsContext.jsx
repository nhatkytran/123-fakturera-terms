import { createContext, useState } from 'react';

const LanguageTranslationsContext = createContext(undefined);

/**
 * Language translations provider.
 * @param {Object} props The props object.
 * @param {React.ReactNode} props.children The children elements.
 */
const LanguageTranslationsProvider = ({ children }) => {
  const [translations, setTranslations] = useState({});

  return (
    <LanguageTranslationsContext.Provider value={{ translations, setTranslations }}>
      {children}
    </LanguageTranslationsContext.Provider>
  );
};

export { LanguageTranslationsContext, LanguageTranslationsProvider };
