// src/components/Translator.jsx
import { useEffect, useRef, useState } from "react";

export default function Translator({
  onLanguageChange,
  className = "",
  defaultLang = "en", 
}) {
  const [currentLanguage, setCurrentLanguage] = useState(defaultLang);
  const didInjectRef = useRef(false);

  useEffect(() => {
    if (typeof window === "undefined" || typeof document === "undefined") return;

    // Restaura idioma salvo (se existir) e garante <html lang="...">
    const saved = localStorage.getItem("site_lang");
    const initialLang = saved || currentLanguage;
    if (document.documentElement.lang !== initialLang) {
      document.documentElement.setAttribute("lang", initialLang);
    }
    if (saved && saved !== currentLanguage) {
      setCurrentLanguage(saved);
    }

    // Injeta o script do GTranslate apenas uma vez
    const alreadyLoaded = document.querySelector(
      'script[src="https://cdn.gtranslate.net/widgets/latest/float.js"]'
    );
    if (!didInjectRef.current && !alreadyLoaded) {
      didInjectRef.current = true;

      window.gtranslateSettings = {
        default_language: defaultLang,        // site base em inglês
        native_language_names: true,
        detect_browser_language: false,       // não muda sozinho
        languages: ["en","pt","es","fr","de","it","tr","ar","hi","pl","ru"], // ajuste como quiser
        wrapper_selector: ".gtranslate_wrapper",
        switcher_vertical_position: "bottom",
        alt_flags: { en: "usa", pt: "brazil" },
      };

      const script = document.createElement("script");
      script.src = "https://cdn.gtranslate.net/widgets/latest/float.js";
      script.defer = true;
      document.body.appendChild(script);
    }

    // Observa mudanças no atributo lang do <html>
    const observer = new MutationObserver(() => {
      const selectedLanguage = document.documentElement.lang || defaultLang;
      if (selectedLanguage !== currentLanguage) {
        setCurrentLanguage(selectedLanguage);
        localStorage.setItem("site_lang", selectedLanguage);
        if (typeof onLanguageChange === "function") onLanguageChange(selectedLanguage);
      }
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["lang"],
    });

    return () => observer.disconnect();
  }, [onLanguageChange, currentLanguage, defaultLang]);

  // Wrapper do widget (posicionamento fixo no canto inferior direito)
  return (
    <div className={`gtranslate_wrapper fixed right-3 bottom-3 z-10 ${className}`} />
  );
}
