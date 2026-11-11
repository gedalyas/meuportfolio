// Perfil, princípios, ferramentas e contato. Todo texto visível em { pt, en }.
// Itens marcados com TODO(conteúdo) são rascunhos a confirmar pelo Davi.

export const profile = {
  name: 'Davi Almeida',
  eyebrow: { pt: 'Engenharia de software · Dados', en: 'Software engineering · Data' },
  location: { pt: 'Belo Horizonte, MG — Brasil', en: 'Belo Horizonte, Brazil' },
  lead: {
    pt: 'Desenvolvedor de software na Arko Consultoria, onde construo e lidero o CRM que atende mais de mil clientes e a operação inteira da empresa. Meu trabalho é transformar dado espalhado em sistema confiável — integrações, modelagem, indicadores e IA aplicada — e é por esse caminho que avanço para a ciência de dados.',
    en: 'Software developer at Arko Consultoria, where I build and lead the CRM serving over a thousand clients and the company’s entire operations team. My work is turning scattered data into reliable systems — integrations, data modelling, metrics and applied AI — and that is the path I am taking into data science.',
  },
};

// Faixa de fatos da home: escopo e escala, só números reais (nov/2026).
// TODO(conteúdo): confirmar o ano de início com dados (2023).
export const facts = [
  {
    label: { pt: 'Clientes', en: 'Clients' },
    value: { pt: '1.000+', en: '1,000+' },
    caption: { pt: 'dados tratados 24/7 no CRM que lidero', en: 'data processed 24/7 in the CRM I lead' },
  },
  {
    label: { pt: 'Uso simultâneo', en: 'Concurrent users' },
    value: '~60',
    caption: { pt: 'pessoas da operação no CRM', en: 'operations staff in the CRM' },
  },
  {
    label: { pt: 'Demandas', en: 'Requests' },
    value: { pt: '~1.700', en: '~1,700' },
    caption: { pt: 'por mês, do pedido à conclusão', en: 'a month, from request to completion' },
  },
  {
    label: { pt: 'Dados desde', en: 'Data since' },
    value: '2023',
    caption: { pt: 'SQL e análise de demanda', en: 'SQL and demand analysis' },
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
    pt: 'Hoje passo o dia entre integrações, modelagem de dados e regras de negócio que precisam estar certas 24 horas por dia, para uma operação de dezenas de pessoas. O próximo passo é a ciência de dados: aplicar o mesmo rigor para analisar e prever, não só para registrar.',
    en: 'Today I spend my days on integrations, data modelling and business rules that must be right 24 hours a day, for an operations team of dozens of people. The next step is data science: applying the same rigour to analyse and predict, not just to record.',
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
