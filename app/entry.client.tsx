import { hydrate } from "react-dom";
import { RemixBrowser } from "remix";
import i18next from "i18next";
import detector from "i18next-browser-languagedetector";
import { I18nextProvider, initReactI18next } from "react-i18next";

i18next
  .use(detector)
  .use(initReactI18next)
  .init({
    supportedLngs: ["en", "es"],
    defaultNS: "common",
    fallbackLng: "en",
    // I recommend you to always disable react.useSuspense for i18next
    react: { useSuspense: false },
  })
  .then(() => {
    return hydrate(
      <I18nextProvider i18n={i18next}>
        <RemixBrowser />
      </I18nextProvider>,
      document
    );
  });
