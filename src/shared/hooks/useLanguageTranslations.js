import { useContext } from 'react';
import { LanguageTranslationsContext } from '../contexts';

/** Use language translations. */
export const useLanguageTranslations = () => {
  const context = useContext(LanguageTranslationsContext);
  if (!context) {
    throw new Error('useLanguageTranslations must be used within a LanguageTranslationsProvider!');
  }
  return context;
};
