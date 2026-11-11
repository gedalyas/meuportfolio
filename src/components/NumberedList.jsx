import styles from './NumberedList.module.css';

const pad = (n) => String(n).padStart(2, '0');

/** Lista editorial: "01" em mono na margem, título e parágrafo. items já traduzidos. */
export default function NumberedList({ items }) {
  return (
    <ol className={styles.list}>
      {items.map((item, i) => (
        <li key={item.title} className={styles.item}>
          <span className={styles.index} aria-hidden="true">
            {pad(i + 1)}
          </span>
          <div>
            <h3 className={styles.title}>{item.title}</h3>
            <p className={styles.body}>{item.body}</p>
          </div>
        </li>
      ))}
    </ol>
  );
}
