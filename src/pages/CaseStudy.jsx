import { Link, useParams } from 'react-router-dom';
import { useLang } from '../i18n/context';
import useDocumentMeta from '../hooks/useDocumentMeta';
import useReveal from '../hooks/useReveal';
import { getProject, projects } from '../content/projects';
import FactsStrip from '../components/FactsStrip';
import FlowDiagram from '../components/FlowDiagram';
import FunnelBars from '../components/charts/FunnelBars';
import CaseFigure from '../components/CaseFigure';
import { ArrowLeftIcon, ArrowRightIcon, ArrowUpRightIcon } from '../components/Icons';
import NotFound from './NotFound';
import styles from './CaseStudy.module.css';

const pad = (n) => String(n).padStart(2, '0');

export default function CaseStudy() {
  const { slug } = useParams();
  const project = getProject(slug);
  const { lang, t, p } = useLang();
  useReveal([lang, slug]);
  useDocumentMeta(project?.title, project ? p(project.tagline) : undefined);

  if (!project) return <NotFound />;

  const index = projects.indexOf(project);
  const next = projects[(index + 1) % projects.length];

  const facts = [
    { label: t('factRole'), value: p(project.facts.role) },
    { label: t('factPeriod'), value: p(project.facts.period) },
    { label: t('factStack'), value: p(project.facts.stack) },
    { label: t('factStatus'), value: p(project.facts.status) },
  ];

  return (
    <main id="main" className="container">
      <article className={styles.article}>
        <Link to={{ pathname: '/', hash: '#work' }} className={styles.back}>
          <ArrowLeftIcon width={14} height={14} />
          {t('backToWork')}
        </Link>

        <header className={styles.header}>
          <p className="eyebrow">
            {t('caseStudy')} · {pad(index + 1)} · {project.year}
          </p>
          <h1 className={styles.title}>{project.title}</h1>
          <p className={styles.lead}>{p(project.summary)}</p>
          {project.link ? (
            <a
              href={project.link.href}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.visit}
            >
              {t('visitSite')}
              <span className={styles.visitHost}>{project.link.label}</span>
              <ArrowUpRightIcon width={14} height={14} />
              <span className="visually-hidden">{t('opensNewTab')}</span>
            </a>
          ) : null}
        </header>

        <FactsStrip items={facts} compact />

        {project.cover && project.images?.[project.cover] ? (
          <CaseFigure figure={project.images[project.cover]} priority />
        ) : null}

        {project.sections.map((section) => (
          <section key={section.title.pt} className={styles.section} data-reveal>
            <h2 className={styles.h2}>{p(section.title)}</h2>
            {section.paragraphs?.map((para) => (
              <p key={para.pt} className={styles.paragraph}>
                {p(para)}
              </p>
            ))}
            {section.flow ? (
              <FlowDiagram
                label={t('architecture')}
                steps={project.flow.map((s) => ({ layer: p(s.layer), label: p(s.label) }))}
              />
            ) : null}
            {section.figure && project.images?.[section.figure] ? (
              <CaseFigure figure={project.images[section.figure]} />
            ) : null}
            {section.chart === 'funnel' && project.chart ? <FunnelBars chart={project.chart} /> : null}
            {section.bullets ? (
              <ul className={styles.bullets}>
                {section.bullets.map((b) => (
                  <li key={b.pt}>{p(b)}</li>
                ))}
              </ul>
            ) : null}
          </section>
        ))}

        {project.sources?.length ? (
          <aside className={styles.sources} aria-labelledby="sources-title" data-reveal>
            <h2 id="sources-title" className="eyebrow">
              {t('sourcesTitle')}
            </h2>
            <ul>
              {project.sources.map((s) => (
                <li key={s.pt}>{p(s)}</li>
              ))}
            </ul>
          </aside>
        ) : null}

        <nav className={styles.next} aria-label={t('nextProject')}>
          <Link to={`/projetos/${next.slug}`} className={styles.nextLink}>
            <span className="eyebrow">{t('nextProject')}</span>
            <span className={styles.nextTitle}>
              {next.title}
              <ArrowRightIcon width={18} height={18} className={styles.nextArrow} />
            </span>
          </Link>
        </nav>
      </article>
    </main>
  );
}
