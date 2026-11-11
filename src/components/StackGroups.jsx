import styles from './StackGroups.module.css';

/** Ferramentas agrupadas por papel. groups já traduzidos; `focus` destaca o grupo em que estou investindo. */
export default function StackGroups({ groups, focusLabel }) {
  return (
    <div className={styles.grid}>
      {groups.map((g) => (
        <div key={g.group} className={styles.group}>
          <h3 className={styles.label}>
            <span className="eyebrow">{g.group}</span>
            {g.focus ? <span className={styles.focus}>{focusLabel}</span> : null}
          </h3>
          <ul className={styles.items}>
            {g.items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
