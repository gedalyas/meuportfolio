import { Link } from 'react-router-dom';
import { useLang } from '../i18n/context';
import useDocumentMeta from '../hooks/useDocumentMeta';
import useReveal from '../hooks/useReveal';
import { about, contact, facts, principles, profile, stack } from '../content/profile';
import { education, experience } from '../content/experience';
import { projects } from '../content/projects';
import FactsStrip from '../components/FactsStrip';
import SectionHeading from '../components/SectionHeading';
import WorkList from '../components/WorkList';
import NumberedList from '../components/NumberedList';
import Timeline from '../components/Timeline';
import StackGroups from '../components/StackGroups';
import ContactBlock from '../components/ContactBlock';
import { ArrowDownIcon } from '../components/Icons';
import portrait from '../assets/portrait.webp';
import styles from './Home.module.css';

export default function Home() {
  const { lang, t, p } = useLang();
  useReveal([lang]);
  useDocumentMeta(null, p(profile.lead));

  return (
    <main id="main">
      {/* ---------- Abertura: texto antes de qualquer dado ---------- */}
      <section className={`container ${styles.hero}`} aria-labelledby="hero-title">
        <p className="eyebrow">{p(profile.eyebrow)}</p>
        <h1 id="hero-title" className={styles.name}>
          {profile.name}
        </h1>
        <p className={styles.lead}>{p(profile.lead)}</p>
        <div className={styles.actions}>
          <Link to={{ hash: '#work' }} className={styles.primary}>
            {t('ctaWork')}
            <ArrowDownIcon width={14} height={14} />
          </Link>
          <Link to={{ hash: '#contact' }} className={styles.secondary}>
            {t('ctaContact')}
          </Link>
        </div>
        <p className={styles.location}>{p(profile.location)}</p>
      </section>

      <div className="container" data-reveal>
        <FactsStrip
          items={facts.map((f) => ({ label: p(f.label), value: p(f.value), caption: p(f.caption) }))}
        />
      </div>

      {/* ---------- Trabalhos ---------- */}
      <section className={`container ${styles.section}`} aria-labelledby="work" data-reveal>
        <SectionHeading id="work" title={t('workTitle')} intro={t('workIntro')} />
        <WorkList projects={projects} />
      </section>

      {/* ---------- Como trabalho ---------- */}
      <section className={`container ${styles.section}`} aria-labelledby="principles" data-reveal>
        <SectionHeading id="principles" title={t('principlesTitle')} />
        <NumberedList items={principles.map((x) => ({ title: p(x.title), body: p(x.body) }))} />
      </section>

      {/* ---------- Experiência ---------- */}
      <section className={`container ${styles.section}`} aria-labelledby="experience" data-reveal>
        <SectionHeading id="experience" title={t('experienceTitle')} />
        <Timeline
          items={experience.map((e) => ({
            period: p(e.period),
            role: p(e.role),
            org: e.org,
            body: p(e.body),
            tags: e.tags,
          }))}
        />
        <h3 className={`eyebrow ${styles.subhead}`}>{t('educationLabel')}</h3>
        <Timeline
          items={education.map((e) => ({ period: p(e.period), role: p(e.title), org: e.org }))}
        />
      </section>

      {/* ---------- Ferramentas ---------- */}
      <section className={`container ${styles.section}`} aria-labelledby="stack" data-reveal>
        <SectionHeading id="stack" title={t('stackTitle')} intro={t('stackIntro')} />
        <StackGroups
          groups={stack.map((g) => ({ ...g, group: p(g.group) }))}
          focusLabel={lang === 'pt' ? 'foco atual' : 'current focus'}
        />
      </section>

      {/* ---------- Sobre ---------- */}
      <section className={`container ${styles.section}`} aria-labelledby="about" data-reveal>
        <SectionHeading id="about" title={t('aboutTitle')} />
        <div className={styles.about}>
          {/* TODO(conteúdo): trocar por uma foto profissional (fundo neutro, luz frontal). */}
          <img
            src={portrait}
            alt={t('portraitAlt')}
            className={styles.portrait}
            width="480"
            height="600"
            decoding="async"
          />
          <div className={styles.aboutText}>
            {about.map((para) => (
              <p key={para.pt}>{p(para)}</p>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Contato ---------- */}
      <section className={`container ${styles.section}`} aria-labelledby="contact" data-reveal>
        <SectionHeading id="contact" title={t('contactTitle')} intro={p(contact.intro)} />
        <ContactBlock email={contact.email} links={contact.links} />
      </section>
    </main>
  );
}
