// Estudos de caso. Ordem do array = ordem na home.
//
// Regras (ver .claude/skills/portfolio-design/reference/paginas.md):
// - clientes só pelo setor, nunca pelo nome de pessoa ou empresa;
// - só números reais, com período e fonte em `sources`;
// - todo texto visível em { pt, en };
// - `kind: 'data'` fica reservado para estudos de ciência de dados (notebooks, modelos).

// Imagens: prints dos sites públicos (ou do site de marketing, no caso de produto em pré-lançamento),
// em WebP com duas larguras. Uma imagem só entra com legenda dizendo o que ela prova.
import benchOverviewLg from '../assets/cases/benchcommerce-overview-lg.webp';
import benchOverviewSm from '../assets/cases/benchcommerce-overview-sm.webp';
import benchConnectionsLg from '../assets/cases/benchcommerce-connections-lg.webp';
import benchConnectionsSm from '../assets/cases/benchcommerce-connections-sm.webp';
import guaratibaCondoLg from '../assets/cases/guaratiba-condo-lg.webp';
import guaratibaCondoSm from '../assets/cases/guaratiba-condo-sm.webp';

const figures = {
  benchOverview: {
    lg: benchOverviewLg,
    sm: benchOverviewSm,
    width: 1272,
    height: 948,
    alt: {
      pt: 'Tela de visão geral com faturamento, margem de contribuição, ROAS, CAC e um gráfico de faturamento por semana.',
      en: 'Overview screen with revenue, contribution margin, ROAS, CAC and a weekly revenue chart.',
    },
    caption: {
      pt: 'Visão geral: faturamento, margem, ROAS e CAC calculados a partir das vendas do ERP, com a fonte indicada no gráfico. Ilustração do site do produto, com dados de exemplo.',
      en: 'Overview: revenue, margin, ROAS and CAC computed from ERP sales, with the source named on the chart. Illustration from the product site, with sample data.',
    },
  },
  benchConnections: {
    lg: benchConnectionsLg,
    sm: benchConnectionsSm,
    width: 1272,
    height: 939,
    alt: {
      pt: 'Tela de conexões listando Bling, Shopify, Mercado Livre, Meta Ads e Google Ads como conectados.',
      en: 'Connections screen listing Bling, Shopify, Mercado Livre, Meta Ads and Google Ads as connected.',
    },
    caption: {
      pt: 'Conexões: cada fonte da loja entra por um conector próprio, com o mesmo fluxo de autorização para todos. Ilustração com dados de exemplo.',
      en: 'Connections: each store source comes in through its own connector, with the same authorisation flow for all of them. Illustration with sample data.',
    },
  },
  guaratibaCondo: {
    lg: guaratibaCondoLg,
    sm: guaratibaCondoSm,
    width: 1600,
    height: 862,
    alt: {
      pt: 'Página de um condomínio com abas de compra e aluguel e três cards de casas à venda, cada um com foto, localização, quartos, área e preço.',
      en: 'Gated-community page with buy and rent tabs and three house listings, each with photo, location, bedrooms, area and price.',
    },
    caption: {
      pt: 'Página de condomínio: os imóveis entram sozinhos quando o cadastro casa com o condomínio ou o bairro, com contagem separada para venda e aluguel.',
      en: 'Gated-community page: listings appear automatically when their record matches the community or neighbourhood, with separate counts for sale and rent.',
    },
  },
};

export const projects = [
  {
    slug: 'arko-crm',
    kind: 'product',
    year: '2026',
    title: 'CRM da Arko',
    tagline: {
      pt: 'O CRM que construo e lidero numa consultoria financeira para médicos: mais de mil clientes, cerca de 60 pessoas usando ao mesmo tempo e 1.700 demandas por mês.',
      en: 'The CRM I build and lead at a financial consultancy for physicians: over a thousand clients, about 60 people using it at once and 1,700 requests a month.',
    },
    meta: 'TypeScript · integrações · dados 24/7',
    summary: {
      pt: 'A Arko é uma consultoria financeira para médicos. Construo e lidero o CRM que a operação inteira usa no dia a dia: carteiras de clientes, demandas, reuniões e indicadores de relacionamento, alimentados por integrações que tratam dados de mais de mil clientes 24 horas por dia. Também trabalho na plataforma externa, usada pelos próprios clientes.',
      en: 'Arko is a financial consultancy for physicians. I build and lead the CRM the whole operations team uses every day: client portfolios, requests, meetings and relationship metrics, fed by integrations that process data for over a thousand clients around the clock. I also work on the external platform the clients themselves use.',
    },
    facts: {
      role: { pt: 'Construo e lidero o CRM', en: 'I build and lead the CRM' },
      period: { pt: '2026 — hoje', en: '2026 — now' },
      stack: { pt: 'TypeScript · sistema interno e externo', en: 'TypeScript · internal and external systems' },
      status: { pt: 'Em produção', en: 'In production' },
    },
    flow: [
      { layer: { pt: 'Fontes', en: 'Sources' }, label: { pt: 'Agenda, mensagens, reuniões, cobrança', en: 'Calendar, messaging, meetings, billing' } },
      { layer: { pt: 'Ingestão', en: 'Ingestion' }, label: { pt: 'Integrações tratando dados 24/7', en: 'Integrations processing data 24/7' } },
      { layer: { pt: 'Modelo', en: 'Model' }, label: { pt: 'Clientes, carteiras, demandas', en: 'Clients, portfolios, requests' } },
      { layer: 'API', label: { pt: 'TypeScript, escopo por papel', en: 'TypeScript, role-based scope' } },
      { layer: { pt: 'Uso', en: 'Use' }, label: { pt: 'CRM da operação + plataforma do cliente', en: 'Operations CRM + client platform' } },
    ],
    sections: [
      {
        title: { pt: 'Escala', en: 'Scale' },
        stats: [
          { label: { pt: 'Clientes', en: 'Clients' }, value: { pt: '1.000+', en: '1,000+' }, caption: { pt: 'com dados tratados 24/7', en: 'with data processed 24/7' } },
          { label: { pt: 'Uso simultâneo', en: 'Concurrent users' }, value: '~60', caption: { pt: 'pessoas da operação', en: 'operations staff' } },
          { label: { pt: 'Demandas', en: 'Requests' }, value: { pt: '~1.700', en: '~1,700' }, caption: { pt: 'por mês', en: 'a month' } },
          { label: { pt: 'Sistemas', en: 'Systems' }, value: '2', caption: { pt: 'interno e externo, em TypeScript', en: 'internal and external, in TypeScript' } },
        ],
        paragraphs: [
          {
            pt: 'São esses números que definem as prioridades técnicas. Com dezenas de pessoas abrindo e movendo demandas ao mesmo tempo, consistência, permissão e histórico importam mais do que qualquer tela.',
            en: 'These numbers set the technical priorities. With dozens of people opening and moving requests at the same time, consistency, permissions and history matter more than any screen.',
          },
        ],
      },
      {
        title: { pt: 'Problema', en: 'Problem' },
        paragraphs: [
          {
            pt: 'Cada cliente gera um fluxo contínuo de pedidos operacionais — abertura e migração de conta, portabilidade, envio de ordens, cartão — que passa por várias pessoas até ser concluído. Sem um sistema único, a informação se espalha entre agenda, conversas e planilhas, e fica difícil saber o que está pendente e com quem.',
            en: 'Every client generates a continuous stream of operational requests — account opening and migration, portability, order submission, cards — that passes through several people before it is done. Without a single system, information scatters across calendars, chats and spreadsheets, and it gets hard to know what is pending and with whom.',
          },
        ],
      },
      {
        title: { pt: 'Abordagem', en: 'Approach' },
        flow: true,
        paragraphs: [
          {
            pt: 'O CRM concentra a ficha de cada cliente, a carteira de cada consultor, as demandas com seus fluxos e as reuniões. As integrações trazem para dentro dele o que acontece fora — agenda e videochamada, grupos de mensagem, reuniões gravadas, cobranças recorrentes — e transformam esses eventos em tarefas para a pessoa certa.',
            en: 'The CRM holds each client’s record, each consultant’s portfolio, requests with their workflows, and meetings. Integrations bring in what happens outside — calendar and video calls, messaging groups, recorded meetings, recurring billing — and turn those events into tasks for the right person.',
          },
          {
            pt: 'Lidero a evolução do sistema: arquitetura, modelo de dados, integrações e a priorização técnica junto com a operação.',
            en: 'I lead the system’s evolution: architecture, data model, integrations and technical prioritisation together with the operations team.',
          },
        ],
      },
      {
        title: { pt: 'Decisões e trade-offs', en: 'Decisions and trade-offs' },
        bullets: [
          {
            pt: 'Permissão aplicada no servidor, não na tela: cada consultor enxerga a própria carteira, líderes enxergam a equipe, e toda consulta já chega filtrada pelo papel de quem pede.',
            en: 'Permissions enforced on the server, not in the UI: each consultant sees their own portfolio, leads see their team, and every query arrives already filtered by the requester’s role.',
          },
          {
            pt: 'Demandas não se editam nem se apagam: abrem, mudam de etapa e fecham, sempre com histórico. Numa operação financeira, a trilha de auditoria vale mais que a conveniência de corrigir no lugar.',
            en: 'Requests are never edited or deleted: they open, change stage and close, always with history. In a financial operation, the audit trail is worth more than the convenience of fixing things in place.',
          },
          {
            pt: 'Tarefas geradas por regra: tipos de reunião e eventos disparam os próximos passos automaticamente, com gatilhos que a própria operação configura.',
            en: 'Rule-generated tasks: meeting types and events trigger the next steps automatically, with triggers the operations team configures itself.',
          },
          {
            pt: 'Dados sensíveis — CPF, contas de investimento, transcrições de reuniões — tratados como tal desde o modelo: acesso mínimo, LGPD e revisão de segurança como parte do processo.',
            en: 'Sensitive data — tax IDs, investment accounts, meeting transcripts — treated as such from the data model up: least-privilege access, LGPD compliance and security review as part of the process.',
          },
        ],
      },
    ],
    sources: [
      {
        pt: 'Números aproximados de novembro de 2026, tirados do próprio sistema.',
        en: 'Approximate figures from November 2026, taken from the system itself.',
      },
      {
        pt: 'Sistema interno: não publico prints nem dados, porque toda tela mostra informação de clientes. Posso detalhar a arquitetura numa conversa.',
        en: 'Internal system: I do not publish screenshots or data, since every screen shows client information. I can walk through the architecture in a call.',
      },
    ],
  },

  {
    slug: 'benchcommerce',
    kind: 'product',
    year: '2026',
    title: 'Benchcommerce',
    tagline: {
      pt: 'SaaS que junta os números de uma loja online num painel só, com um assistente de IA que cita a origem de cada resposta.',
      en: 'SaaS that brings an online store’s numbers into one dashboard, with an AI assistant that cites where every answer comes from.',
    },
    meta: 'TypeScript · PostgreSQL · Prisma · Claude',
    summary: {
      pt: 'Plataforma para consultorias de e-commerce acompanharem as lojas que atendem. Ela conecta loja, ERP e mídia paga, consolida tudo num modelo único de pedidos, produtos e clientes, e calcula indicadores de dinheiro, marketing, logística e gestão. Um assistente de IA responde perguntas sobre esses números dizendo de onde veio cada um e o que no dado é frágil.',
      en: 'A platform for e-commerce consultancies to follow the stores they serve. It connects storefront, ERP and paid media, consolidates everything into a single model of orders, products and customers, and computes finance, marketing, logistics and management KPIs. An AI assistant answers questions about those numbers, saying where each one comes from and what in the data is fragile.',
    },
    facts: {
      role: { pt: 'Engenharia full-stack', en: 'Full-stack engineering' },
      period: { pt: '2026 — hoje', en: '2026 — now' },
      stack: 'TanStack Start · Express · Prisma · Claude',
      status: { pt: 'Pré-lançamento, lista de espera', en: 'Pre-launch, waitlist' },
    },
    link: { href: 'https://benchcommerce.com.br', label: 'benchcommerce.com.br' },
    cover: 'overview',
    images: { overview: figures.benchOverview, connections: figures.benchConnections },
    flow: [
      { layer: { pt: 'Fontes', en: 'Sources' }, label: { pt: 'Loja, ERP, Meta e Google Ads', en: 'Store, ERP, Meta & Google Ads' } },
      { layer: { pt: 'Ingestão', en: 'Ingestion' }, label: { pt: 'Conectores + fila de sincronização', en: 'Connectors + sync queue' } },
      { layer: { pt: 'Modelo', en: 'Model' }, label: { pt: 'PostgreSQL multi-loja', en: 'Multi-tenant PostgreSQL' } },
      { layer: 'API', label: { pt: 'Express + Zod, contratos tipados', en: 'Express + Zod, typed contracts' } },
      { layer: { pt: 'Uso', en: 'Use' }, label: { pt: 'Painel + assistente de IA', en: 'Dashboard + AI assistant' } },
    ],
    sections: [
      {
        title: { pt: 'Problema', en: 'Problem' },
        paragraphs: [
          {
            pt: 'Os dados de uma loja online ficam espalhados: pedidos na plataforma da loja, notas e estoque no ERP, investimento no Meta Ads e no Google Ads, metas numa planilha. A consultoria que acompanha a loja gasta horas consolidando relatório antes de conseguir analisar qualquer coisa — e cada analista calcula o mesmo indicador de um jeito.',
            en: 'An online store’s data is scattered: orders in the storefront platform, invoices and stock in the ERP, spend in Meta Ads and Google Ads, targets in a spreadsheet. The consultancy following the store spends hours consolidating reports before it can analyse anything — and every analyst computes the same metric differently.',
          },
        ],
      },
      {
        title: { pt: 'Abordagem', en: 'Approach' },
        flow: true,
        paragraphs: [
          {
            pt: 'Monorepo com cinco workspaces: web (React 19 com SSR), API (Express, Zod e Prisma), um pacote de contratos compartilhado entre web, API e o futuro app mobile, o pacote do banco e um design system próprio. As sincronizações rodam num worker com fila no próprio PostgreSQL, sem infraestrutura extra.',
            en: 'A monorepo with five workspaces: web (React 19 with SSR), API (Express, Zod and Prisma), a contracts package shared by web, API and the future mobile app, the database package and an in-house design system. Syncs run in a worker with a queue inside PostgreSQL itself, with no extra infrastructure.',
          },
          {
            pt: 'O assistente usa Claude e lê os dados da loja só por ferramentas de leitura da API: ele não tem acesso direto ao banco nem pode alterar nada. As conversas ficam guardadas no servidor por pessoa e por loja.',
            en: 'The assistant uses Claude and reads store data only through read-only API tools: it has no direct database access and cannot change anything. Conversations are stored on the server per person and per store.',
          },
        ],
      },
      {
        title: { pt: 'Decisões e trade-offs', en: 'Decisions and trade-offs' },
        figure: 'connections',
        bullets: [
          {
            pt: 'Framework de conectores próprio em vez de um agregador pago: as plataformas brasileiras (Bling, Nuvemshop, Tray) não têm suporte de terceiros. Três padrões de autenticação — OAuth, domínio + OAuth e credenciais manuais — cobrem todos os conectores com um único formulário adaptável.',
            en: 'An in-house connector framework instead of a paid aggregator: Brazilian platforms (Bling, Nuvemshop, Tray) have no third-party support. Three auth patterns — OAuth, domain + OAuth and manual credentials — cover every connector with a single adaptive form.',
          },
          {
            pt: 'Status do ERP mapeados explicitamente para Pago, Pendente e Cancelado. Sem isso, “receita” muda de valor conforme a loja configura o ERP.',
            en: 'ERP order statuses explicitly mapped to Paid, Pending and Cancelled. Without that, “revenue” changes value depending on how each store configures its ERP.',
          },
          {
            pt: 'Multi-loja desde o início, com três papéis (administrador, consultor, cliente) e acesso só por convite. O escopo de cada consulta é aplicado na API, não na interface.',
            en: 'Multi-tenant from day one, with three roles (admin, consultant, client) and invitation-only access. Query scope is enforced in the API, not in the UI.',
          },
          {
            pt: 'Ambiente de desenvolvimento com 18 meses de dados sintéticos, para testar indicadores e o assistente sem tocar em dado real de cliente.',
            en: 'A development environment with 18 months of synthetic data, to test metrics and the assistant without touching real customer data.',
          },
        ],
      },
    ],
    sources: [
      {
        pt: 'Produto em pré-lançamento: ainda não há métricas de uso públicas. Os números do ambiente de demonstração são sintéticos.',
        en: 'Pre-launch product: there are no public usage metrics yet. Demo environment numbers are synthetic.',
      },
      {
        pt: 'Código em repositório privado; posso mostrar trechos e a arquitetura numa conversa.',
        en: 'Code lives in a private repository; I can walk through excerpts and the architecture in a call.',
      },
    ],
  },

  {
    slug: 'carnavip',
    kind: 'product',
    year: '2026',
    title: 'CarnaVIP',
    tagline: {
      pt: 'Pré-atendimento com IA no WhatsApp. Os dados de 309 conversas mostraram que o gargalo estava no anúncio, não no atendimento.',
      en: 'AI-assisted WhatsApp pre-sales. Data from 309 conversations showed the bottleneck was the ad, not the chat.',
    },
    meta: 'Claude Haiku · Chatwoot · Docker',
    summary: {
      pt: 'Atendimento inicial com IA no WhatsApp para a venda de um pacote de carnaval em Ouro Preto. A IA apresentava o pacote, qualificava o lead e passava a conversa para um dos quatro vendedores. Depois de duas semanas recebendo tráfego de anúncio, a análise das conversas mostrou que só 12% delas tinham intenção real de compra.',
      en: 'AI-assisted first response on WhatsApp for selling a carnival package in Ouro Preto, Brazil. The AI presented the package, qualified the lead and handed the conversation to one of four salespeople. After two weeks of ad traffic, analysing the conversations showed that only 12% of them had real purchase intent.',
    },
    facts: {
      role: { pt: 'Projeto e desenvolvimento ponta a ponta', en: 'End-to-end design and build' },
      period: '2026',
      stack: 'Claude Haiku 4.5 · Chatwoot · WhatsApp Cloud API',
      status: { pt: 'Encerrado em nov/2026', en: 'Wound down Nov 2026' },
    },
    flow: [
      { layer: { pt: 'Entrada', en: 'Entry' }, label: { pt: 'Anúncio com clique para WhatsApp', en: 'Click-to-WhatsApp ad' } },
      { layer: { pt: 'Canal', en: 'Channel' }, label: 'WhatsApp Cloud API' },
      { layer: { pt: 'Caixa', en: 'Inbox' }, label: { pt: 'Chatwoot, dono do número', en: 'Chatwoot owns the number' } },
      { layer: { pt: 'IA', en: 'AI' }, label: { pt: 'Conector + Claude Haiku', en: 'Connector + Claude Haiku' } },
      { layer: { pt: 'Saída', en: 'Exit' }, label: { pt: 'Handoff para 1 de 4 vendedores', en: 'Handoff to 1 of 4 salespeople' } },
    ],
    sections: [
      {
        title: { pt: 'Problema', en: 'Problem' },
        paragraphs: [
          {
            pt: 'Os anúncios levavam direto para o WhatsApp e quatro vendedores dividiam o mesmo número. Muita conversa chegava fora do horário e grande parte não tinha intenção de compra. O objetivo era responder na hora, a qualquer momento, e só ocupar um vendedor com quem já estivesse qualificado.',
            en: 'Ads led straight to WhatsApp and four salespeople shared one number. Many conversations arrived after hours and a large share had no purchase intent. The goal was to reply instantly, at any time, and only take up a salesperson’s time with already-qualified leads.',
          },
        ],
      },
      {
        title: { pt: 'Abordagem', en: 'Approach' },
        flow: true,
        bullets: [
          {
            pt: 'Só responde quem inicia a conversa: nada de disparo em massa, sempre dentro da janela de 24 horas do WhatsApp.',
            en: 'Inbound only: no broadcasts, always inside WhatsApp’s 24-hour service window.',
          },
          {
            pt: 'Uma resposta por vez, num balão só: cada mensagem passou a ser cobrada e várias mensagens picadas atrapalham a leitura.',
            en: 'One reply at a time, in a single bubble: every message became billable, and fragmented replies hurt readability.',
          },
          {
            pt: 'Handoff cedo e definitivo: assim que o lead está qualificado ou pede algo fora do escopo, a conversa é atribuída a um vendedor e a IA se cala de vez.',
            en: 'Early, final handoff: as soon as the lead is qualified or asks for something out of scope, the conversation is assigned to a salesperson and the AI goes silent for good.',
          },
        ],
      },
      {
        title: { pt: 'Decisões e trade-offs', en: 'Decisions and trade-offs' },
        bullets: [
          {
            pt: 'O primeiro desenho mantinha os vendedores no app WhatsApp Business e detectava pelo eco das mensagens quando um humano assumia. Troquei pelo Chatwoot como dono do número: o eco era o ponto mais frágil do sistema e o app tem teto de cinco aparelhos.',
            en: 'The first design kept salespeople on the WhatsApp Business app and detected human takeover from message echoes. I replaced it with Chatwoot owning the number: echoes were the most fragile part of the system and the app caps out at five devices.',
          },
          {
            pt: 'O custo dessa troca: pela API, até as mensagens digitadas pelos vendedores passam a ser cobradas. Ficou documentado e aceito antes de ir para produção.',
            en: 'The cost of that switch: through the API, even messages typed by salespeople become billable. It was documented and accepted before going to production.',
          },
          {
            pt: 'Claude Haiku em vez de um modelo maior: pré-atendimento é conversa curta e roteirizada, e latência e custo pesam mais que raciocínio longo.',
            en: 'Claude Haiku rather than a larger model: pre-sales is short, scripted conversation, where latency and cost matter more than long reasoning.',
          },
        ],
      },
      {
        title: { pt: 'O que os dados mostraram', en: 'What the data showed' },
        chart: 'funnel',
        paragraphs: [
          {
            pt: 'De 309 conversas, três em cada quatro eram de pessoas que tocaram no botão do anúncio e não responderam mais. Só 38 (12%) tinham intenção real — 11 leads quentes e 27 interessados. A IA respondeu todas; o gargalo estava antes dela, num criativo e numa segmentação que traziam clique, não interesse.',
            en: 'Of 309 conversations, three in four came from people who tapped the ad button and never replied. Only 38 (12%) showed real intent — 11 hot leads and 27 interested. The AI answered every one; the bottleneck was upstream, in creative and targeting that drove clicks, not interest.',
          },
          {
            pt: 'Com esse retrato, o cliente decidiu voltar ao app WhatsApp Business, com a equipe no WhatsApp Web. Desliguei o conector e devolvi o número de forma controlada. O resultado mais útil do projeto acabou sendo o diagnóstico.',
            en: 'With that picture, the client chose to go back to the WhatsApp Business app, with the team on WhatsApp Web. I shut the connector down and handed the number back in a controlled way. The project’s most useful outcome turned out to be the diagnosis.',
          },
        ],
      },
    ],
    chart: {
      total: 309,
      unit: { pt: 'conversas', en: 'conversations' },
      caption: { pt: '22/out a 06/nov de 2026', en: 'Oct 22 – Nov 6, 2026' },
      items: [
        { key: 'ghost', value: 232, intent: false, label: { pt: 'Clicaram no anúncio e sumiram', en: 'Tapped the ad and vanished' } },
        { key: 'interested', value: 27, intent: true, label: { pt: 'Interessados', en: 'Interested' } },
        { key: 'joke', value: 25, intent: false, label: { pt: 'Brincadeira', en: 'Not serious' } },
        { key: 'wrong', value: 14, intent: false, label: { pt: 'Engano (Marketplace)', en: 'Wrong number (Marketplace)' } },
        { key: 'hot', value: 11, intent: true, label: { pt: 'Leads quentes', en: 'Hot leads' } },
      ],
      legend: {
        intent: { pt: 'intenção de compra', en: 'purchase intent' },
        noise: { pt: 'sem intenção', en: 'no intent' },
      },
    },
    sources: [
      {
        pt: 'Classificação de todas as conversas recebidas de 22/out a 06/nov/2026, feita no levantamento de encerramento. Categorias mutuamente exclusivas.',
        en: 'Classification of every conversation received from Oct 22 to Nov 6, 2026, done in the wind-down review. Categories are mutually exclusive.',
      },
      {
        pt: 'Uma campanha e cerca de duas semanas: serve para diagnóstico, não para estimar taxa de conversão.',
        en: 'One campaign over about two weeks: good for diagnosis, not for estimating a conversion rate.',
      },
    ],
  },

  {
    slug: 'imoveis-guaratiba',
    kind: 'platform',
    year: '2026',
    title: 'Imóveis Guaratiba',
    tagline: {
      pt: 'Plataforma de uma corretora no sul da Bahia: site com busca e SEO local, e painel em que ela mesma publica os imóveis.',
      en: 'Platform for a real-estate broker in southern Bahia: a site with search and local SEO, plus a panel where she publishes listings herself.',
    },
    meta: 'React · Express · SQLite · Cloudflare R2',
    summary: {
      pt: 'Site e painel administrativo de uma corretora de imóveis no litoral sul da Bahia. A corretora cadastra imóveis, fotos e vídeos sem depender de mim; o site gera páginas por condomínio e por região, URLs legíveis e prévias corretas quando um link é compartilhado no WhatsApp.',
      en: 'Website and admin panel for a real-estate broker on the southern coast of Bahia, Brazil. The broker adds listings, photos and videos without depending on me; the site generates pages per gated community and region, readable URLs and correct previews when a link is shared on WhatsApp.',
    },
    facts: {
      role: { pt: 'Desenvolvimento full-stack', en: 'Full-stack development' },
      period: '2026',
      stack: 'React · TypeScript · Express · SQLite',
      status: { pt: 'No ar', en: 'Live' },
    },
    link: { href: 'https://imoveisguaratiba.com.br', label: 'imoveisguaratiba.com.br' },
    cover: 'condo',
    images: { condo: figures.guaratibaCondo },
    flow: [
      { layer: { pt: 'Painel', en: 'Panel' }, label: { pt: 'Admin com login (JWT)', en: 'Admin with login (JWT)' } },
      { layer: 'API', label: 'Express + TypeScript' },
      { layer: { pt: 'Dados', en: 'Data' }, label: { pt: 'SQLite, backup diário', en: 'SQLite, daily backup' } },
      { layer: { pt: 'Mídia', en: 'Media' }, label: { pt: 'WebP + miniaturas no R2', en: 'WebP + thumbnails on R2' } },
      { layer: 'Site', label: { pt: 'React na Vercel + Edge Middleware', en: 'React on Vercel + Edge Middleware' } },
    ],
    sections: [
      {
        title: { pt: 'Problema', en: 'Problem' },
        paragraphs: [
          {
            pt: 'A corretora dependia de portais e de mensagens no WhatsApp para mostrar os imóveis. Precisava de um site próprio que aparecesse no Google para buscas por condomínio e cidade, e que ela mesma conseguisse manter atualizado.',
            en: 'The broker relied on listing portals and WhatsApp messages to show properties. She needed her own site that ranked on Google for searches by gated community and town, and that she could keep up to date herself.',
          },
        ],
      },
      {
        title: { pt: 'Abordagem', en: 'Approach' },
        flow: true,
        paragraphs: [
          {
            pt: 'Frontend em React com TypeScript na Vercel; API em Express no Railway. No upload, as imagens são convertidas para WebP com miniaturas e vão para o Cloudflare R2. O banco é SQLite com o módulo nativo do Node, e um job diário copia o arquivo para o R2.',
            en: 'React and TypeScript frontend on Vercel; Express API on Railway. On upload, images are converted to WebP with thumbnails and stored on Cloudflare R2. The database is SQLite through Node’s native module, and a daily job copies the file to R2.',
          },
        ],
      },
      {
        title: { pt: 'Decisões e trade-offs', en: 'Decisions and trade-offs' },
        bullets: [
          {
            pt: 'SQLite em vez de PostgreSQL: há uma única pessoa escrevendo e o volume é pequeno. Menos peças para manter, com backup diário cobrindo o risco.',
            en: 'SQLite instead of PostgreSQL: a single person writes and the volume is small. Fewer moving parts, with daily backups covering the risk.',
          },
          {
            pt: 'Modelagem do domínio: o condomínio prevalece sobre o bairro no roteamento, no título e na exibição, porque é assim que o comprador procura na região.',
            en: 'Domain modelling: the gated community takes precedence over the neighbourhood in routing, titles and display, because that is how buyers search in the region.',
          },
          {
            pt: 'URLs semânticas (tipo, finalidade, cidade, condomínio, código). Os formatos antigos redirecionam para o endereço canônico, sem perder links já compartilhados.',
            en: 'Semantic URLs (type, purpose, town, community, code). Old formats redirect to the canonical address, so links already shared keep working.',
          },
          {
            pt: 'Um SPA não entrega meta tags por página aos robôs de prévia. Um Edge Middleware detecta o robô e devolve um HTML com os dados do imóvel, e o link chega no WhatsApp com foto, título e preço.',
            en: 'A SPA does not serve per-page meta tags to link-preview bots. An Edge Middleware detects the bot and returns HTML with the listing’s data, so links arrive on WhatsApp with photo, title and price.',
          },
          {
            pt: 'A mesma base de código foi reaproveitada para uma segunda corretora, em Minas Gerais, trocando só marca e conteúdo.',
            en: 'The same codebase was reused for a second broker, in Minas Gerais, changing only branding and content.',
          },
        ],
      },
    ],
    sources: [
      {
        pt: 'Não publico aqui dados de tráfego ou de negócio do cliente.',
        en: 'I do not publish the client’s traffic or business data here.',
      },
    ],
  },
];

export const getProject = (slug) => projects.find((p) => p.slug === slug);
