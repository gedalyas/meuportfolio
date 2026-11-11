// Perfil, princípios, ferramentas e contato. Todo texto visível em { pt, en }.
// Itens marcados com TODO(conteúdo) são rascunhos a confirmar pelo Davi.

export const profile = {
  name: 'Davi Almeida',
  eyebrow: { pt: 'Engenharia de software · Dados', en: 'Software engineering · Data' },
  location: { pt: 'Belo Horizonte, MG — Brasil', en: 'Belo Horizonte, Brazil' },
  lead: {
    pt: 'Desenvolvedor de software na Arko Consultoria. Construo sistemas em que o dado é o produto: painéis de indicadores para e-commerce, funis de atendimento e plataformas que a própria equipe do cliente opera. Agora estou levando essa base para a ciência de dados.',
    en: 'Software developer at Arko Consultoria. I build systems where data is the product: KPI dashboards for e-commerce, sales-chat funnels and platforms the client’s own team runs. I am now taking that foundation into data science.',
  },
};

// Faixa de fatos da home. Só fatos verificáveis: nada de métrica inventada.
// TODO(conteúdo): confirmar ano de início com dados (2023) e conclusão do curso (2027).
export const facts = [
  {
    label: { pt: 'Hoje', en: 'Now' },
    value: 'Arko Consultoria',
    caption: { pt: 'desenvolvedor de software', en: 'software developer' },
  },
  {
    label: { pt: 'Estúdio', en: 'Studio' },
    value: 'Techzafe',
    caption: { pt: 'sites, sistemas e apps Shopify', en: 'websites, systems, Shopify apps' },
  },
  {
    label: { pt: 'Dados desde', en: 'Data since' },
    value: '2023',
    caption: { pt: 'SQL e análise de demanda', en: 'SQL and demand analysis' },
  },
  {
    label: { pt: 'Formação', en: 'Education' },
    value: { pt: 'Ciência da Computação', en: 'Computer Science' },
    caption: { pt: 'conclusão em 2027', en: 'graduating 2027' },
  },
];

export const principles = [
  {
    title: { pt: 'Especificação antes do código', en: 'Spec before code' },
    body: {
      pt: 'Escrevo a especificação com critérios de aceite antes de abrir o editor. Decisões de arquitetura ficam registradas no repositório, com o motivo, para quem vier depois.',
      en: 'I write the spec with acceptance criteria before opening the editor. Architecture decisions live in the repository, with the reasoning, for whoever comes next.',
    },
  },
  {
    title: { pt: 'Número com procedência', en: 'Numbers with provenance' },
    body: {
      pt: 'Todo indicador tem definição, origem e limitação escritas. Se o dado é frágil, a tela diz — inclusive quando quem responde é um assistente de IA.',
      en: 'Every metric has a written definition, source and limitation. If the data is fragile, the screen says so — including when an AI assistant is answering.',
    },
  },
  {
    title: { pt: 'Produção faz parte do escopo', en: 'Production is part of the scope' },
    body: {
      pt: 'Deploy, backup, LGPD e custo de operação entram no projeto desde o primeiro dia, não na semana da entrega.',
      en: 'Deployment, backups, privacy law (LGPD) and running costs are in the project from day one, not in delivery week.',
    },
  },
];

export const stack = [
  {
    group: { pt: 'Dados', en: 'Data' },
    focus: true,
    items: ['Python', 'pandas', 'SQL / PostgreSQL', 'Jupyter', 'R', 'Power BI', 'Excel / VBA'],
  },
  {
    group: { pt: 'Backend', en: 'Backend' },
    items: ['Node.js', 'TypeScript', 'Express', 'Zod', 'Prisma', 'SQLite', 'pg-boss'],
  },
  {
    group: { pt: 'Frontend', en: 'Frontend' },
    items: ['React', 'TanStack Start', 'Next.js', 'Tailwind CSS', 'Vite'],
  },
  {
    group: { pt: 'IA e infraestrutura', en: 'AI and infrastructure' },
    items: ['Claude API', 'Docker', 'Vercel', 'Railway', 'Hetzner', 'Cloudflare R2'],
  },
];

export const about = [
  {
    pt: 'Sou de Ipatinga e moro em Belo Horizonte, Minas Gerais. Comecei a programar para resolver problemas de um setor de compras: consultas SQL e planilhas que mostravam sazonalidade e giro de estoque antes de cada pedido. Dali fui para o desenvolvimento full-stack, atendendo empresas pelo meu estúdio, e hoje trabalho na Arko Consultoria.',
    en: 'I am from Ipatinga and live in Belo Horizonte, Minas Gerais, Brazil. I started programming to solve problems in a purchasing department: SQL queries and spreadsheets that surfaced seasonality and stock turnover before each order. From there I moved into full-stack development, serving companies through my own studio, and today I work at Arko Consultoria.',
  },
  {
    pt: 'O próximo passo é a ciência de dados. Estou aprofundando estatística, modelagem e Python para analisar com rigor os dados que hoje já sei coletar, modelar e servir em produção.',
    en: 'The next step is data science. I am deepening statistics, modelling and Python so I can rigorously analyse the data I already know how to collect, model and serve in production.',
  },
];

export const contact = {
  intro: {
    pt: 'Aberto a conversas sobre vagas e projetos de engenharia de dados, análise e produtos orientados a dados.',
    en: 'Open to conversations about roles and projects in data engineering, analytics and data-driven products.',
  },
  email: 'davialsouto@gmail.com',
  links: [
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/davi-alsouto', handle: 'in/davi-alsouto' },
    { label: 'GitHub', href: 'https://github.com/gedalyas', handle: 'gedalyas' },
  ],
};

export const SITE_SOURCE = 'https://github.com/gedalyas/meuportfolio';
