import { useLang } from '../i18n/context';
import { SITE_SOURCE } from '../content/profile';
import { ArrowUpRightIcon } from './Icons';
import styles from './Footer.module.css';

export default function Footer() {
  const { t } = useLang();
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <p className="num">© {new Date().getFullYear()} Davi Almeida</p>
        <a href={SITE_SOURCE} target="_blank" rel="noopener noreferrer" className={styles.link}>
          {t('footerSource')}
          <ArrowUpRightIcon width={14} height={14} />
          <span className="visually-hidden">{t('opensNewTab')}</span>
        </a>
      </div>
    </footer>
  );
}
