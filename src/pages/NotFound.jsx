import { Link } from 'react-router-dom';
import { useLang } from '../i18n/context';
import useDocumentMeta from '../hooks/useDocumentMeta';
import { ArrowLeftIcon } from '../components/Icons';
import styles from './NotFound.module.css';

export default function NotFound() {
  const { t } = useLang();
  useDocumentMeta(t('notFoundTitle'));

  return (
    <main id="main" className={`container ${styles.wrap}`}>
      <p className="eyebrow">404</p>
      <h1 className={styles.title}>{t('notFoundTitle')}</h1>
      <p className={styles.body}>{t('notFoundBody')}</p>
      <Link to="/" className={styles.link}>
        <ArrowLeftIcon width={14} height={14} />
        {t('notFoundCta')}
      </Link>
    </main>
  );
}
