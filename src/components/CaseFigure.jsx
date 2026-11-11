import { useLang } from '../i18n/context';
import styles from './CaseFigure.module.css';

/**
 * Print de produto com legenda. A legenda diz o que a imagem prova — sem legenda, sem imagem.
 * figure: { lg, sm, width, height, alt: {pt,en}, caption: {pt,en} }
 */
export default function CaseFigure({ figure, priority = false }) {
  const { t, p } = useLang();
  return (
    <figure className={styles.figure} data-reveal={priority ? undefined : ''}>
      <a href={figure.lg} target="_blank" rel="noopener noreferrer" className={styles.frame}>
        <img
          src={figure.lg}
          srcSet={`${figure.sm} 960w, ${figure.lg} ${figure.width}w`}
          sizes="(min-width: 48rem) 46rem, calc(100vw - 2rem)"
          width={figure.width}
          height={figure.height}
          alt={p(figure.alt)}
          loading={priority ? 'eager' : 'lazy'}
          decoding="async"
          className={styles.img}
        />
        <span className="visually-hidden">{t('opensNewTab')}</span>
      </a>
      <figcaption className={styles.caption}>{p(figure.caption)}</figcaption>
    </figure>
  );
}
