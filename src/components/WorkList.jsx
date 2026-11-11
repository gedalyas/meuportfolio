import { Link } from 'react-router-dom';
import { useLang } from '../i18n/context';
import { ChevronRightIcon } from './Icons';
import styles from './WorkList.module.css';

const pad = (n) => String(n).padStart(2, '0');

/** Lista editorial numerada de estudos de caso. Sem imagens: título, frase, stack. */
export default function WorkList({ projects }) {
  const { p } = useLang();
  return (
    <ol className={styles.list}>
      {projects.map((project, i) => (
        <li key={project.slug}>
          <Link to={`/projetos/${project.slug}`} className={styles.row}>
            <span className={styles.index} aria-hidden="true">
              {pad(i + 1)}
            </span>
            <div className={styles.body}>
              <div className={styles.titleLine}>
                <h3 className={styles.title}>{project.title}</h3>
                <span className={styles.year}>{project.year}</span>
              </div>
              <span className={styles.tagline}>{p(project.tagline)}</span>
              <span className={styles.meta}>{project.meta}</span>
            </div>
            <ChevronRightIcon className={styles.chevron} />
          </Link>
        </li>
      ))}
    </ol>
  );
}
