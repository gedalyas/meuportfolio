import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useLang } from '../i18n/context';
import { useTheme } from '../theme/context';
import { MoonIcon, SunIcon } from './Icons';
import styles from './TopBar.module.css';

const NAV = [
  { hash: '#work', key: 'navWork' },
  { hash: '#experience', key: 'navExperience' },
  { hash: '#about', key: 'navAbout' },
  { hash: '#contact', key: 'navContact' },
];

export default function TopBar() {
  const { lang, setLang, t } = useLang();
  const { theme, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const nextLang = lang === 'pt' ? 'en' : 'pt';

  return (
    <header className={styles.bar} data-scrolled={scrolled || undefined}>
      <div className={`container ${styles.inner}`}>
        <Link to="/" className={styles.brand} aria-label={t('homeLabel')}>
          Davi Almeida
        </Link>

        <nav className={styles.nav} aria-label={t('navLabel')}>
          {NAV.map((item) => (
            <Link key={item.hash} to={{ pathname: '/', hash: item.hash }} className={styles.navLink}>
              {t(item.key)}
            </Link>
          ))}
        </nav>

        <div className={styles.controls}>
          <button
            type="button"
            className={styles.lang}
            onClick={() => setLang(nextLang)}
            aria-label={t('langSwitch')}
            lang={nextLang === 'pt' ? 'pt-BR' : 'en'}
          >
            {nextLang.toUpperCase()}
          </button>
          <button
            type="button"
            className={styles.iconButton}
            onClick={toggleTheme}
            aria-label={theme === 'dark' ? t('themeToLight') : t('themeToDark')}
          >
            {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
          </button>
        </div>
      </div>
    </header>
  );
}
