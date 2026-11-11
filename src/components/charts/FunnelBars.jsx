import { useState } from 'react';
import { useLang } from '../../i18n/context';
import styles from './FunnelBars.module.css';

/**
 * Barras horizontais de composição (ex.: classificação de conversas).
 * Um matiz por significado: azul = intenção, cinza = ruído.
 * O hover/foco numa linha troca o número principal — não há tooltip.
 */
export default function FunnelBars({ chart }) {
  const { lang, p } = useLang();
  const [activeKey, setActiveKey] = useState(null);

  const locale = lang === 'pt' ? 'pt-BR' : 'en-US';
  const pct = new Intl.NumberFormat(locale, { style: 'percent', maximumFractionDigits: 1 });
  const num = new Intl.NumberFormat(locale);

  const max = Math.max(...chart.items.map((i) => i.value));
  const intentTotal = chart.items.filter((i) => i.intent).reduce((s, i) => s + i.value, 0);
  const active = chart.items.find((i) => i.key === activeKey);

  return (
    <figure className={styles.figure} data-reveal>
      <div className={styles.head}>
        <p className={styles.stat}>
          <span className={styles.statValue}>{num.format(active ? active.value : chart.total)}</span>
          {active ? (
            <span className={styles.statPct}>{pct.format(active.value / chart.total)}</span>
          ) : null}
        </p>
        <p className={styles.statLabel}>{active ? p(active.label) : p(chart.unit)}</p>
        <p className={styles.caption}>{p(chart.caption)}</p>
      </div>

      <ul className={styles.rows} onMouseLeave={() => setActiveKey(null)}>
        {chart.items.map((item) => (
          <li
            key={item.key}
            className={styles.row}
            data-intent={item.intent || undefined}
            data-dim={(activeKey && activeKey !== item.key) || undefined}
            tabIndex={0}
            onMouseEnter={() => setActiveKey(item.key)}
            onFocus={() => setActiveKey(item.key)}
            onBlur={() => setActiveKey(null)}
          >
            <span className={styles.label}>{p(item.label)}</span>
            <span className={styles.track} aria-hidden="true">
              <span className={styles.bar} style={{ '--w': item.value / max }} />
            </span>
            <span className={styles.value}>
              {num.format(item.value)}
              <span className={styles.valuePct}>{pct.format(item.value / chart.total)}</span>
            </span>
          </li>
        ))}
      </ul>

      <figcaption className={styles.legend}>
        <span className={styles.legendItem}>
          <span className={styles.swatch} data-intent="true" aria-hidden="true" />
          {p(chart.legend.intent)} · {num.format(intentTotal)} ({pct.format(intentTotal / chart.total)})
        </span>
        <span className={styles.legendItem}>
          <span className={styles.swatch} aria-hidden="true" />
          {p(chart.legend.noise)} · {num.format(chart.total - intentTotal)}
        </span>
      </figcaption>
    </figure>
  );
}
