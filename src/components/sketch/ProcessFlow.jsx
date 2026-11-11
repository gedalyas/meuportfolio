import { useLang } from '../../i18n/context';
import { SketchArrow, SketchShape } from './Sketch';
import styles from './ProcessFlow.module.css';

const pad = (n) => String(n).padStart(2, '0');

/**
 * Fluxograma com traço de esboço, montado em HTML (o texto quebra e escala) com os contornos em SVG.
 * A linha principal é vertical. O desvio de uma decisão fica à direita: no desktop ao lado do losango,
 * no celular logo abaixo, à direita da linha principal, que segue contínua.
 *
 * steps: [{ type: 'start'|'process'|'decision'|'end', label, note?, tone?: 'accent',
 *           branch?: { label, note?, on?: 'yes'|'no' (padrão 'no') } }]  (textos { pt, en })
 */
export default function ProcessFlow({ title, steps }) {
  const { lang, p } = useLang();
  const yes = lang === 'pt' ? 'sim' : 'yes';
  const no = lang === 'pt' ? 'não' : 'no';
  let n = 0;

  return (
    <figure className={styles.figure} data-reveal>
      {title ? <figcaption className="eyebrow">{p(title)}</figcaption> : null}
      <ol className={styles.steps}>
        {steps.map((step, i) => {
          const numbered = step.type === 'process' || step.type === 'decision';
          if (numbered) n += 1;
          const branchOn = step.branch?.on === 'yes' ? 'yes' : 'no';
          const shape = step.type === 'decision' ? 'diamond' : step.type === 'process' ? 'rect' : 'pill';
          const last = i === steps.length - 1;
          return (
            <li key={i} className={styles.step} data-branch={step.branch ? '' : undefined}>
              <div className={styles.main}>
                <div className={styles.node} data-shape={shape} data-tone={step.tone}>
                  <SketchShape shape={shape} tone={step.tone} seed={i * 13 + 5} />
                  <span className={styles.nodeText}>
                    {numbered ? <span className={styles.index}>{pad(n)}</span> : null}
                    <span className={styles.label}>{p(step.label)}</span>
                    {step.note ? <span className={styles.note}>{p(step.note)}</span> : null}
                  </span>
                </div>
              </div>

              {step.branch ? (
                <div className={styles.branch}>
                  <span className={styles.branchArrow}>
                    <span className={styles.arrowRight}>
                      <SketchArrow direction="right" seed={i * 7 + 2} />
                    </span>
                    <span className={styles.arrowDown}>
                      <SketchArrow direction="down" seed={i * 7 + 3} />
                    </span>
                    <span className={styles.branchLabel}>{branchOn === 'yes' ? yes : no}</span>
                  </span>
                  <div className={styles.node} data-shape="rect" data-side>
                    <SketchShape shape="rect" tone="muted" seed={i * 11 + 9} />
                    <span className={styles.nodeText}>
                      <span className={styles.label}>{p(step.branch.label)}</span>
                      {step.branch.note ? <span className={styles.note}>{p(step.branch.note)}</span> : null}
                    </span>
                  </div>
                </div>
              ) : null}

              {!last ? (
                <div className={styles.connector}>
                  <SketchArrow direction="down" seed={i * 5 + 1} />
                  {step.type === 'decision' ? (
                    <span className={styles.connectorLabel}>{branchOn === 'yes' ? no : yes}</span>
                  ) : null}
                </div>
              ) : null}
            </li>
          );
        })}
      </ol>
    </figure>
  );
}
