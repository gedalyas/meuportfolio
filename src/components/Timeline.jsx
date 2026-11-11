import styles from './Timeline.module.css';

/** Linha do tempo: período em mono na margem, cargo · organização, descrição, tags. items já traduzidos. */
export default function Timeline({ items }) {
  return (
    <ol className={styles.list}>
      {items.map((item) => (
        <li key={`${item.org}-${item.period}`} className={styles.item}>
          <p className={styles.period}>{item.period}</p>
          <div className={styles.content}>
            <h3 className={styles.role}>
              {item.role}
              <span className={styles.org}> · {item.org}</span>
            </h3>
            {item.body ? <p className={styles.body}>{item.body}</p> : null}
            {item.tags?.length ? (
              <ul className={styles.tags} aria-label="Stack">
                {item.tags.map((tag) => (
                  <li key={tag}>{tag}</li>
                ))}
              </ul>
            ) : null}
          </div>
        </li>
      ))}
    </ol>
  );
}
