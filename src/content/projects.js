// Estudos de caso. Ordem do array = ordem na home.
//
// Regras (ver .claude/skills/portfolio-design/reference/paginas.md):
// - clientes só pelo setor, nunca pelo nome de pessoa ou empresa;
// - só números reais, com período e fonte em `sources`;
// - todo texto visível em { pt, en };
// - `kind: 'data'` fica reservado para estudos de ciência de dados (notebooks, modelos).

export const projects = [
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

  {
    slug: 'techzafe',
    kind: 'platform',
    year: '2025',
    title: 'Techzafe',
    tagline: {
      pt: 'Meu estúdio de software e uma linha de apps Shopify próprios para substituir apps genéricos de uma loja de moda.',
      en: 'My software studio, and a line of in-house Shopify apps replacing a fashion store’s generic third-party apps.',
    },
    meta: 'React · TypeScript · Shopify · PostgreSQL',
    summary: {
      pt: 'O Techzafe é o estúdio pelo qual atendo pequenas e médias empresas com sites, sistemas sob medida e apps Shopify. O projeto mais recente é uma linha de apps próprios, um por funcionalidade, para substituir os nove apps de terceiros que uma loja de moda pagava — e depois vender os mesmos apps a outras lojas.',
      en: 'Techzafe is the studio through which I serve small and mid-sized companies with websites, custom systems and Shopify apps. The latest project is a line of in-house apps, one per feature, to replace the nine third-party apps a fashion store was paying for — and then sell the same apps to other stores.',
    },
    facts: {
      role: { pt: 'Fundador e desenvolvedor', en: 'Founder and developer' },
      period: { pt: '2025 — hoje', en: '2025 — now' },
      stack: 'React Router · Prisma · PostgreSQL · Railway',
      status: { pt: 'No ar', en: 'Live' },
    },
    link: { href: 'https://techzafe.com', label: 'techzafe.com' },
    flow: [
      { layer: { pt: 'Loja', en: 'Store' }, label: { pt: 'Admin e vitrine Shopify', en: 'Shopify admin & storefront' } },
      { layer: 'App', label: { pt: 'Um app público por funcionalidade', en: 'One public app per feature' } },
      { layer: { pt: 'Base', en: 'Core' }, label: { pt: 'Pacote comum: escopos, webhooks LGPD', en: 'Shared package: scopes, privacy webhooks' } },
      { layer: { pt: 'Dados', en: 'Data' }, label: { pt: 'PostgreSQL por app', en: 'PostgreSQL per app' } },
      { layer: 'Deploy', label: { pt: 'Um serviço por app no Railway', en: 'One Railway service per app' } },
    ],
    sections: [
      {
        title: { pt: 'Problema', en: 'Problem' },
        paragraphs: [
          {
            pt: 'Pequenas lojas acumulam apps genéricos e planilhas para tarefas que deveriam ser simples, como frete ou faturamento. Pagam várias assinaturas, ficam presas à lógica de cada fornecedor e não conseguem cruzar os dados entre eles.',
            en: 'Small stores pile up generic apps and spreadsheets for tasks that should be simple, such as shipping or invoicing. They pay several subscriptions, get locked into each vendor’s logic and cannot join data across them.',
          },
        ],
      },
      {
        title: { pt: 'Abordagem', en: 'Approach' },
        flow: true,
        paragraphs: [
          {
            pt: 'Um repositório com um app Shopify público por funcionalidade, cada um publicado e cobrado à parte, e um pacote base com o que todos repetem: escopos mínimos, versão da API fixada, webhooks obrigatórios de privacidade e banco PostgreSQL próprio. Cada backend vira um serviço independente no Railway.',
            en: 'One repository with a public Shopify app per feature, each published and billed separately, plus a core package with what they all share: minimal scopes, a pinned API version, mandatory privacy webhooks and their own PostgreSQL database. Each backend runs as an independent Railway service.',
          },
          {
            pt: 'Pelo estúdio também faço os sistemas sob medida da mesma loja — como o de faturamento — e sites institucionais com foco em busca orgânica.',
            en: 'Through the studio I also build the same store’s custom systems — such as invoicing — and company websites focused on organic search.',
          },
        ],
      },
      {
        title: { pt: 'Decisões e trade-offs', en: 'Decisions and trade-offs' },
        bullets: [
          {
            pt: 'Um app por funcionalidade, não um superapp: cada um pode ser vendido sozinho a outras lojas, e um problema num app não derruba os outros.',
            en: 'One app per feature, not a super-app: each can be sold on its own to other stores, and an issue in one app does not take down the rest.',
          },
          {
            pt: 'PostgreSQL desde a primeira migração, no lugar do SQLite que vem no template oficial: trocar depois, com dados de lojas em produção, sairia muito mais caro.',
            en: 'PostgreSQL from the first migration, replacing the SQLite that ships with the official template: switching later, with production store data, would cost far more.',
          },
          {
            pt: 'Escopos mínimos e webhooks de LGPD no pacote base, para que nenhum app novo nasça pedindo mais acesso do que precisa.',
            en: 'Minimal scopes and privacy webhooks in the core package, so no new app is born asking for more access than it needs.',
          },
        ],
      },
    ],
    sources: [
      {
        pt: 'Apps em validação com a primeira loja cliente; ainda sem métricas de instalação públicas.',
        en: 'Apps are being validated with the first client store; no public install metrics yet.',
      },
    ],
  },
];

export const getProject = (slug) => projects.find((p) => p.slug === slug);
