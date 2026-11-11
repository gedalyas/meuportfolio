import { useCallback, useEffect, useMemo, useState } from 'react';
import { ThemeContext } from './context';

const readTheme = () =>
  document.documentElement.getAttribute('data-theme') === 'light' ? 'light' : 'dark';

export default function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(readTheme);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  // Sem escolha salva, acompanha o sistema operacional.
  useEffect(() => {
    let saved = null;
    try {
      saved = localStorage.getItem('theme');
    } catch {
      /* sem armazenamento */
    }
    if (saved) return undefined;
    const mq = window.matchMedia('(prefers-color-scheme: light)');
    const onChange = (e) => setTheme(e.matches ? 'light' : 'dark');
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, []);

  const toggleTheme = useCallback(() => {
    setTheme((current) => {
      const next = current === 'dark' ? 'light' : 'dark';
      try {
        localStorage.setItem('theme', next);
      } catch {
        /* sem armazenamento */
      }
      return next;
    });
  }, []);

  const value = useMemo(() => ({ theme, toggleTheme }), [theme, toggleTheme]);
  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}
