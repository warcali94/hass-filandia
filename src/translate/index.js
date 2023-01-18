import i18next from "i18next";
import languajeDetector from "i18next-browser-languagedetector";
import en from "./en.json";
import { initReactI18next } from "react-i18next";
import es from "./es.json";

await i18next
  .use(languajeDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      es: { translation: es },
    },
  });
