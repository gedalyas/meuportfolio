import styles from './FactsStrip.module.css';

/**
 * Faixa de fatos separada por hairlines (sem cartões).
 * items: [{ label, value, caption?, href? }] — já traduzidos.
 * compact: valores longos (estudo de caso) em tamanho de texto.
 */
export default function FactsStrip({ items, compact = false, label }) {
  return (
    <dl className={styles.strip} data-compact={compact || undefined} aria-label={label}>
      {items.map((item) => (
        <div key={item.label} className={styles.item}>
          <dt className="eyebrow">{item.label}</dt>
          <dd className={styles.value}>
            {item.href ? (
              <a href={item.href} target="_blank" rel="noopener noreferrer" className="link">
                {item.value}
              </a>
            ) : (
              item.value
            )}
          </dd>
          {item.caption ? <dd className={styles.caption}>{item.caption}</dd> : null}
        </div>
      ))}
    </dl>
  );
}
