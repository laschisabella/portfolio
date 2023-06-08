import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { portuguese } from './portuguese';
import { english } from './english';

export default i18n
  // detect browser language
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  .init({
    debug: false,
    fallbackLng: 'en',
    resources: {
      en: { translation: english },
      pt: { translation: portuguese },
    },
  });