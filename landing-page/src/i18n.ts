import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import FR from "./assets/fr.json";

export default i18n.use(initReactI18next).init({
  lng: "fr",
  fallbackLng: "fr",
  returnObjects: true,
  interpolation: {
    escapeValue: false,
  },
  resources: {
    fr: {
      translation: FR,
    },
  },
});
