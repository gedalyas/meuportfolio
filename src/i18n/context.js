import { createContext, useContext } from 'react';
import { ui } from './ui';

export const LANGS = ['pt', 'en'];

export const LanguageContext = createContext({ lang: 'pt', setLang: () => {} });

/** Texto bilíngue `{ pt, en }` → string no idioma ativo. Strings simples passam direto. */
export function pick(value, lang) {
  if (value && typeof value === 'object' && !Array.isArray(value) && 'pt' in value) {
    return value[lang] ?? value.pt;
  }
  return value;
}

/** Idioma ativo, troca de idioma e `t(chave)` para as strings de interface. */
export function useLang() {
  const { lang, setLang } = useContext(LanguageContext);
  const t = (key) => pick(ui[key], lang) ?? key;
  const p = (value) => pick(value, lang);
  return { lang, setLang, t, p };
}
