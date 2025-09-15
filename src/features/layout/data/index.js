/** Root URL */
export const LOGIN_URL = 'https://online.123fakturera.se/login/';

/** Navigation links */
const NAVIGATION_LINKS = [
  { key: 'home', label: 'Home', href: 'https://www.123fakturera.se/index.html' },
  { key: 'order', label: 'Order', href: 'https://www.123fakturera.se/bestall.html' },
  { key: 'ourCustomer', label: 'Our Customers', href: 'https://www.123fakturera.se/kunder.html' },
  { key: 'aboutUs', label: 'About us', href: 'https://www.123fakturera.se/omoss.html' },
  { key: 'contactUs', label: 'Contact Us', href: 'https://www.123fakturera.se/kontaktaoss.html' },
];

/**
 * Get navigation links.
 * @param {Object} navigationTranslations The navigation translations.
 */
export const getNavigationLinks = navigationTranslations => {
  return NAVIGATION_LINKS.map(link => ({
    ...link,
    label: navigationTranslations[link.key],
  }));
};

/** Swedish language. */
export const SVENSKA = 'Svenska';

/** Swedish language code. */
export const SVENSKA_LANGUAGE_CODE = 'sv';

/** English language. */
export const ENGLISH = 'English';

/** English language code. */
export const ENGLISH_LANGUAGE_CODE = 'en';

/** Language options. */
export const LANGUAGES = [
  { language: SVENSKA, abbreviation: 'SE', flagSrc: 'https://storage.123fakturere.no/public/flags/SE.png' },
  { language: ENGLISH, abbreviation: 'GB', flagSrc: 'https://storage.123fakturere.no/public/flags/GB.png' },
];
