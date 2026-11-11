import { useCallback, useEffect, useMemo, useState } from 'react';
import { LANGS, LanguageContext } from './context';

function initialLang() {
  const fromHtml = document.documentElement.getAttribute('lang');
  if (fromHtml) return fromHtml.toLowerCase().startsWith('pt') ? 'pt' : 'en';
  return 'pt';
}

export default function LanguageProvider({ children }) {
  const [lang, setLangState] = useState(initialLang);

  useEffect(() => {
    document.documentElement.setAttribute('lang', lang === 'pt' ? 'pt-BR' : 'en');
  }, [lang]);

  const setLang = useCallback((next) => {
    if (!LANGS.includes(next)) return;
    setLangState(next);
    try {
      localStorage.setItem('lang', next);
    } catch {
      /* armazenamento indisponível: a escolha vale só nesta visita */
    }
  }, []);

  const value = useMemo(() => ({ lang, setLang }), [lang, setLang]);
  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}
