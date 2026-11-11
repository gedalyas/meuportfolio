import styles from './SectionHeading.module.css';

/** H2 em serifa + parágrafo opcional. É a única porta de entrada de seção. */
export default function SectionHeading({ id, title, intro }) {
  return (
    <div className={styles.heading}>
      <h2 id={id} className={styles.title}>
        {title}
      </h2>
      {intro ? <p className={styles.intro}>{intro}</p> : null}
    </div>
  );
}
