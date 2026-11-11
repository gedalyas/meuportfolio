import { useEffect, useRef, useState } from 'react';
import { useLang } from '../i18n/context';
import { ArrowUpRightIcon, CheckIcon, CopyIcon } from './Icons';
import styles from './ContactBlock.module.css';

export default function ContactBlock({ email, links }) {
  const { t } = useLang();
  const [copied, setCopied] = useState(false);
  const timer = useRef(null);

  useEffect(() => () => clearTimeout(timer.current), []);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      clearTimeout(timer.current);
      timer.current = setTimeout(() => setCopied(false), 1800);
    } catch {
      window.location.href = `mailto:${email}`;
    }
  };

  return (
    <ul className={styles.list}>
      <li className={styles.row}>
        <span className="eyebrow">E-mail</span>
        <span className={styles.valueGroup}>
          <a href={`mailto:${email}`} className={styles.value}>
            {email}
          </a>
          <button
            type="button"
            className={styles.copy}
            onClick={copy}
            aria-label={copied ? t('copied') : t('copyEmail')}
          >
            {copied ? <CheckIcon width={14} height={14} /> : <CopyIcon width={14} height={14} />}
            <span aria-hidden="true">{copied ? t('copied') : t('copy')}</span>
          </button>
          <span className="visually-hidden" role="status">
            {copied ? t('copied') : ''}
          </span>
        </span>
      </li>
      {links.map((link) => (
        <li key={link.href} className={styles.row}>
          <span className="eyebrow">{link.label}</span>
          <a href={link.href} target="_blank" rel="noopener noreferrer" className={styles.value}>
            {link.handle}
            <ArrowUpRightIcon width={14} height={14} className={styles.arrow} />
            <span className="visually-hidden">{t('opensNewTab')}</span>
          </a>
        </li>
      ))}
    </ul>
  );
}
