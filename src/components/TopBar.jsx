import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLang } from '../i18n/context';
import { FlagBR, FlagUS } from './Flags';
import styles from './TopBar.module.css';

const NAV = [
  { hash: '#work', key: 'navWork' },
  { hash: '#experience', key: 'navExperience' },
  { hash: '#about', key: 'navAbout' },
  { hash: '#contact', key: 'navContact' },
];

const LANG_OPTIONS = [
  { code: 'pt', label: 'Português', htmlLang: 'pt-BR', Flag: FlagBR },
  { code: 'en', label: 'English', htmlLang: 'en', Flag: FlagUS },
];

export default function TopBar() {
  const { lang, setLang, t } = useLang();
  const [scrolled, setScrolled] = useState(false);

  const { pathname } = useLocation();
  const [heroVisible, setHeroVisible] = useState(() => window.location.pathname === '/');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Na home o nome já está no título grande: a barra só mostra o nome depois que ele sai da tela.
  useEffect(() => {
    const hero = document.getElementById('hero-title');
    if (!hero || !('IntersectionObserver' in window)) {
      setHeroVisible(false);
      return undefined;
    }
    const io = new IntersectionObserver(([entry]) => setHeroVisible(entry.isIntersecting), {
      rootMargin: '-56px 0px 0px 0px',
    });
    io.observe(hero);
    return () => io.disconnect();
  }, [pathname]);

  return (
    <header className={styles.bar} data-scrolled={scrolled || undefined}>
      <div className={`container ${styles.inner}`}>
        <Link
          to="/"
          className={styles.brand}
          aria-label={t('homeLabel')}
          data-hidden={heroVisible || undefined}
          aria-hidden={heroVisible || undefined}
          tabIndex={heroVisible ? -1 : undefined}
        >
          Davi Almeida
        </Link>

        <nav className={styles.nav} aria-label={t('navLabel')}>
          {NAV.map((item) => (
            <Link key={item.hash} to={{ pathname: '/', hash: item.hash }} className={styles.navLink}>
              {t(item.key)}
            </Link>
          ))}
        </nav>

        <div className={styles.langs} role="group" aria-label={t('langGroup')}>
          {LANG_OPTIONS.map((opt) => (
            <button
              key={opt.code}
              type="button"
              className={styles.flag}
              onClick={() => setLang(opt.code)}
              aria-pressed={lang === opt.code}
              aria-label={opt.label}
              title={opt.label}
              lang={opt.htmlLang}
            >
              <opt.Flag className={styles.flagImg} />
            </button>
          ))}
        </div>
      </div>
    </header>
  );
}
