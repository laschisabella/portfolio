import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import enAbout from "./en/about.json";
import enServices from "./en/services.json";
import enContact from "./en/contact.json";
import enProjects from "./en/projects.json";
import enCommon from "./en/common.json";
import ptAbout from "./pt/about.json";
import ptCommon from "./pt/common.json";
import ptServices from "./pt/services.json";
import ptContact from "./pt/contact.json";
import ptProjects from "./pt/projects.json";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      about: enAbout,
      services: enServices,
      projects: enProjects,
      contact: enContact,
      common: enCommon,
    },
    pt: {
      about: ptAbout,
      services: ptServices,
      projects: ptProjects,
      contact: ptContact,
      common: ptCommon,
    },
  },
  lng: "pt",
  fallbackLng: "en",
  ns: ["about", "services", "projects", "contact"],
  defaultNS: "common",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
