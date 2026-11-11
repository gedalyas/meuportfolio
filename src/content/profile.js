// Perfil, método, ferramentas e contato. Todo texto visível em { pt, en }.
// Tom: primeira pessoa, frases curtas, sem travessão e sem fórmulas de texto gerado.
// Itens marcados com TODO(conteúdo) são rascunhos a confirmar pelo Davi.

export const profile = {
  name: 'Davi Almeida',
  eyebrow: { pt: 'Engenharia de software · Dados', en: 'Software engineering · Data' },
  location: { pt: 'Belo Horizonte, MG, Brasil', en: 'Belo Horizonte, Brazil' },
  lead: {
    pt: 'Sou desenvolvedor de software na Arko Consultoria, onde construo e lidero o CRM usado pela empresa inteira, com mais de mil clientes e cerca de 60 pessoas na operação. Antes de escrever código, eu desenho como o trabalho acontece e combino qual resultado o sistema precisa entregar. É esse jeito de trabalhar que estou levando para a ciência de dados.',
    en: 'I’m a software developer at Arko Consultoria, where I build and lead the CRM the whole company runs on, with over a thousand clients and about 60 people in operations. Before writing code, I map how the work actually happens and agree on the result the system has to deliver. That’s the way of working I’m now taking into data science.',
  },
};

// Faixa de fatos da home: escopo e escala, só números reais (nov/2026).
// TODO(conteúdo): confirmar o ano de início com dados (2023).
export const facts = [
  {
    label: { pt: 'Clientes', en: 'Clients' },
    value: { pt: '1.000+', en: '1,000+' },
    caption: { pt: 'com dados tratados 24/7 no CRM que lidero', en: 'with data processed 24/7 in the CRM I lead' },
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

// Fluxograma "Como eu trabalho" da home.
export const method = {
  title: { pt: 'Como um projeto anda comigo', en: 'How a project goes with me' },
  steps: [
    { type: 'start', label: { pt: 'Um pedido ou uma dor da operação', en: 'A request or a pain point' } },
    {
      type: 'process',
      label: { pt: 'Acompanho quem faz o trabalho hoje', en: 'I sit with the people doing the work' },
      note: { pt: 'onde perde tempo, onde erra, o que vive em planilha', en: 'where time goes, where errors happen, what lives in spreadsheets' },
    },
    { type: 'process', label: { pt: 'Desenho o fluxo atual e o fluxo desejado', en: 'I map the current flow and the target flow' } },
    {
      type: 'decision',
      label: { pt: 'O problema é de sistema?', en: 'Is it a system problem?' },
      branch: { label: { pt: 'Ajusto o processo antes de escrever código', en: 'Fix the process before writing code' } },
    },
    {
      type: 'process',
      tone: 'accent',
      label: { pt: 'Combino o valor e como medir', en: 'Agree on the value and how to measure it' },
      note: { pt: 'horas poupadas, erros evitados, receita', en: 'hours saved, errors avoided, revenue' },
    },
    { type: 'process', label: { pt: 'Especifico e entrego em partes pequenas', en: 'Spec it and ship in small pieces' } },
    {
      type: 'decision',
      label: { pt: 'O número mexeu?', en: 'Did the number move?' },
      branch: { label: { pt: 'Volto para o fluxo (passo 02)', en: 'Back to the flow (step 02)' } },
    },
    { type: 'end', label: { pt: 'Documento e sigo para a próxima dor', en: 'Document it, move to the next pain point' } },
  ],
};

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
    pt: 'Sou de Ipatinga e moro em Belo Horizonte. Comecei a programar num setor de compras, escrevendo consultas SQL e planilhas para entender sazonalidade e giro de estoque antes de cada pedido. Depois passei a atender empresas pelo meu estúdio, a Techzafe, e hoje estou na Arko Consultoria.',
    en: 'I’m from Ipatinga and live in Belo Horizonte, Brazil. I started programming in a purchasing department, writing SQL queries and spreadsheets to understand seasonality and stock turnover before each order. Later I began serving companies through my own studio, Techzafe, and today I’m at Arko Consultoria.',
  },
  {
    pt: 'No dia a dia eu lido com integrações, modelagem de dados e regras de negócio que não podem falhar, porque tem gente trabalhando em cima delas o dia inteiro. O próximo passo é usar esses dados para analisar e prever o que vem pela frente.',
    en: 'Day to day I deal with integrations, data modelling and business rules that can’t break, because people work on top of them all day. The next step is using that data to analyse and predict what’s coming.',
  },
];

export const contact = {
  intro: {
    pt: 'Se você tem uma vaga ou um projeto envolvendo dados, produto ou sistemas internos, me chama.',
    en: 'If you have a role or a project involving data, product or internal systems, get in touch.',
  },
  email: 'davialsouto@gmail.com',
  links: [
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/davi-alsouto', handle: 'in/davi-alsouto' },
    { label: 'GitHub', href: 'https://github.com/gedalyas', handle: 'gedalyas' },
  ],
};

export const SITE_SOURCE = 'https://github.com/gedalyas/meuportfolio';
