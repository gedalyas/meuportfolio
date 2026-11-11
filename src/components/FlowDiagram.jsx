import styles from './FlowDiagram.module.css';

/** Fluxo da arquitetura em etapas. Horizontal no desktop, vertical no celular. steps já traduzidos. */
export default function FlowDiagram({ steps, label }) {
  return (
    <figure className={styles.figure}>
      <figcaption className="eyebrow">{label}</figcaption>
      <ol className={styles.flow} style={{ '--steps': steps.length }}>
        {steps.map((step) => (
          <li key={`${step.layer}-${step.label}`} className={styles.step}>
            <span className={styles.layer}>{step.layer}</span>
            <span className={styles.label}>{step.label}</span>
          </li>
        ))}
      </ol>
    </figure>
  );
}
