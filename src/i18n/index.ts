import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import enJson from './locales/en.json';
import vnJson from './locales/vn.json';

const resources = {
  en: { translation: enJson },
  vn: { translation: vnJson }
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'en',

  interpolation: {
    escapeValue: false
  }
});
0;

export default i18n;
