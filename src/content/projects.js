// Estudos de caso. Ordem do array = ordem na home.
//
// Regras (ver .claude/skills/portfolio-design/reference/paginas.md):
// - clientes só pelo setor, nunca pelo nome de pessoa ou empresa;
// - só números reais, com período e fonte em `sources`;
// - todo texto visível em { pt, en }, sem travessão e sem cara de texto gerado;
// - `stake` diz o valor em jogo; `process` é o fluxo do negócio; `flow` é a arquitetura;
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
      pt: 'Visão geral com faturamento, margem, ROAS e CAC calculados a partir das vendas do ERP. O gráfico diz de onde veio o número. Ilustração do site do produto, com dados de exemplo.',
      en: 'Overview with revenue, margin, ROAS and CAC computed from ERP sales. The chart names where the number came from. Illustration from the product site, with sample data.',
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
      pt: 'Cada fonte da loja entra por um conector próprio, e todos seguem o mesmo fluxo de autorização. Ilustração com dados de exemplo.',
      en: 'Each store source comes in through its own connector, and they all follow the same authorisation flow. Illustration with sample data.',
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
      pt: 'Página de condomínio. Os imóveis aparecem sozinhos quando o cadastro bate com o condomínio ou o bairro, com contagem separada para venda e aluguel.',
      en: 'Gated-community page. Listings show up on their own when the record matches the community or neighbourhood, with separate counts for sale and rent.',
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
      pt: 'O CRM que construo e lidero numa consultoria financeira para médicos. Mais de mil clientes, cerca de 60 pessoas usando ao mesmo tempo e 1.700 demandas por mês.',
      en: 'The CRM I build and lead at a financial consultancy for physicians. Over a thousand clients, about 60 people using it at once and 1,700 requests a month.',
    },
    meta: 'TypeScript · integrações · dados 24/7',
    summary: {
      pt: 'A Arko é uma consultoria financeira para médicos. Eu construo e lidero o CRM que a operação usa o dia todo para cuidar das carteiras de clientes, das demandas, das reuniões e dos indicadores de relacionamento. Ele recebe dados de várias integrações, 24 horas por dia. Também trabalho na plataforma externa, que é a que o cliente usa.',
      en: 'Arko is a financial consultancy for physicians. I build and lead the CRM the operations team uses all day to manage client portfolios, requests, meetings and relationship metrics. It takes in data from several integrations, around the clock. I also work on the external platform, the one clients use.',
    },
    stake: {
      pt: 'Sessenta pessoas e mais de mil clientes dependem de cada demanda chegar na pessoa certa e no prazo. Quando uma demanda se perde entre agenda, conversa e planilha, quem sente é o cliente, numa relação que deveria durar anos.',
      en: 'Sixty people and over a thousand clients depend on every request reaching the right person on time. When a request gets lost between calendars, chats and spreadsheets, the client feels it, in a relationship meant to last for years.',
    },
    facts: {
      role: { pt: 'Construo e lidero o CRM', en: 'I build and lead the CRM' },
      period: { pt: 'Desde 2026', en: 'Since 2026' },
      stack: { pt: 'TypeScript nos dois sistemas', en: 'TypeScript in both systems' },
      status: { pt: 'Em produção', en: 'In production' },
    },
    process: {
      title: { pt: 'Caminho de uma demanda', en: 'How a request moves' },
      steps: [
        { type: 'start', label: { pt: 'Pedido do cliente, reunião ou mensagem', en: 'Client request, meeting or message' } },
        { type: 'process', label: { pt: 'O CRM abre a demanda com tipo, cliente e prazo', en: 'The CRM opens a request with type, client and due date' } },
        { type: 'process', label: { pt: 'Vai para quem cuida daquela carteira', en: 'It goes to whoever owns that portfolio' } },
        {
          type: 'decision',
          label: { pt: 'Falta algo do cliente?', en: 'Waiting on the client?' },
          branch: {
            on: 'yes',
            label: { pt: 'Fica pendente com prazo e lembrete', en: 'Marked pending, with due date and reminder' },
            note: { pt: 'volta para a fila quando ele responde', en: 'back in the queue once they reply' },
          },
        },
        { type: 'process', label: { pt: 'Anda pelas etapas, sempre com histórico', en: 'Moves through stages, always with history' } },
        {
          type: 'process',
          tone: 'accent',
          label: { pt: 'Concluída e medida', en: 'Done and measured' },
          note: { pt: 'tempo de ciclo, volume por tipo, NPS', en: 'cycle time, volume by type, NPS' },
        },
        { type: 'end', label: { pt: 'A gestão enxerga a operação inteira', en: 'Management sees the whole operation' } },
      ],
    },
    flow: [
      { layer: { pt: 'Fontes', en: 'Sources' }, label: { pt: 'Agenda, mensagens, reuniões, cobrança', en: 'Calendar, messaging, meetings, billing' } },
      { layer: { pt: 'Ingestão', en: 'Ingestion' }, label: { pt: 'Integrações rodando 24/7', en: 'Integrations running 24/7' } },
      { layer: { pt: 'Modelo', en: 'Model' }, label: { pt: 'Clientes, carteiras, demandas', en: 'Clients, portfolios, requests' } },
      { layer: 'API', label: { pt: 'TypeScript, escopo por papel', en: 'TypeScript, role-based scope' } },
      { layer: { pt: 'Uso', en: 'Use' }, label: { pt: 'CRM da operação e plataforma do cliente', en: 'Operations CRM and client platform' } },
    ],
    sections: [
      {
        title: { pt: 'Escala', en: 'Scale' },
        stats: [
          { label: { pt: 'Clientes', en: 'Clients' }, value: { pt: '1.000+', en: '1,000+' }, caption: { pt: 'com dados tratados 24/7', en: 'with data processed 24/7' } },
          { label: { pt: 'Uso simultâneo', en: 'Concurrent users' }, value: '~60', caption: { pt: 'pessoas da operação', en: 'operations staff' } },
          { label: { pt: 'Demandas', en: 'Requests' }, value: { pt: '~1.700', en: '~1,700' }, caption: { pt: 'por mês', en: 'a month' } },
          { label: { pt: 'Sistemas', en: 'Systems' }, value: '2', caption: { pt: 'interno e externo', en: 'internal and external' } },
        ],
        paragraphs: [
          {
            pt: 'Esses números decidem as prioridades. Com dezenas de pessoas abrindo e mexendo em demandas ao mesmo tempo, eu me preocupo mais com consistência, permissão e histórico do que com tela.',
            en: 'These numbers set the priorities. With dozens of people opening and changing requests at the same time, I care more about consistency, permissions and history than about screens.',
          },
        ],
      },
      {
        title: { pt: 'Problema', en: 'Problem' },
        paragraphs: [
          {
            pt: 'Cada cliente gera pedidos o tempo todo: abrir ou migrar conta, portabilidade, envio de ordens, cartão. Cada pedido passa por mais de uma pessoa até terminar. Sem um sistema único, a informação se espalha entre agenda, conversas e planilhas, e ninguém sabe direito o que está parado nem com quem.',
            en: 'Every client generates requests all the time: opening or migrating an account, portability, order submission, cards. Each request passes through more than one person before it’s done. Without a single system, information scatters across calendars, chats and spreadsheets, and nobody really knows what is stuck or with whom.',
          },
        ],
      },
      {
        title: { pt: 'O fluxo', en: 'The flow' },
        process: true,
        paragraphs: [
          {
            pt: 'Antes de mexer no sistema, eu desenho o caminho que a demanda faz na operação. Simplificado, é este:',
            en: 'Before touching the system, I map the path a request takes through the operation. Simplified, it looks like this:',
          },
        ],
      },
      {
        title: { pt: 'Arquitetura', en: 'Architecture' },
        flow: true,
        paragraphs: [
          {
            pt: 'O CRM guarda a ficha de cada cliente, a carteira de cada consultor, as demandas e as reuniões. As integrações trazem o que acontece fora dele, como agenda e videochamada, grupos de mensagem, reuniões gravadas e cobranças, e viram tarefas para a pessoa certa.',
            en: 'The CRM holds each client’s record, each consultant’s portfolio, requests and meetings. Integrations bring in what happens outside it, such as calendar and video calls, messaging groups, recorded meetings and billing, and turn those events into tasks for the right person.',
          },
          {
            pt: 'Eu lidero a evolução do sistema. Isso inclui arquitetura, modelo de dados, integrações e decidir com a operação o que entra primeiro.',
            en: 'I lead how the system evolves. That covers architecture, the data model, integrations and deciding with the operations team what comes first.',
          },
        ],
      },
      {
        title: { pt: 'Decisões e trade-offs', en: 'Decisions and trade-offs' },
        bullets: [
          {
            pt: 'A permissão é aplicada no servidor. O consultor vê a própria carteira, o líder vê a equipe, e a consulta já chega filtrada pelo papel de quem pediu.',
            en: 'Permissions are enforced on the server. A consultant sees their own portfolio, a lead sees the team, and every query arrives already filtered by the requester’s role.',
          },
          {
            pt: 'Demanda não se edita nem se apaga. Ela abre, muda de etapa e fecha, e tudo fica no histórico. Numa operação financeira, ter a trilha completa vale mais do que poder corrigir no lugar.',
            en: 'Requests are never edited or deleted. They open, change stage and close, and everything stays in the history. In a financial operation, a complete trail is worth more than being able to fix things in place.',
          },
          {
            pt: 'Tipos de reunião e eventos geram as próximas tarefas sozinhos. Quem configura os gatilhos é a própria operação, sem precisar de mim para cada ajuste.',
            en: 'Meeting types and events create the next tasks on their own. The operations team configures the triggers itself, without needing me for every tweak.',
          },
          {
            pt: 'CPF, contas de investimento e transcrições de reunião são dados sensíveis, e o modelo já nasce assim, com acesso mínimo, LGPD e revisão de segurança no processo.',
            en: 'Tax IDs, investment accounts and meeting transcripts are sensitive, and the data model treats them that way from the start, with least-privilege access, LGPD compliance and security review built into the process.',
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
        pt: 'É um sistema interno e toda tela mostra dado de cliente, então não publico prints. Posso explicar a arquitetura numa conversa.',
        en: 'It’s an internal system and every screen shows client data, so I don’t publish screenshots. I’m happy to walk through the architecture in a call.',
      },
    ],
  },

  {
    slug: 'benchcommerce',
    kind: 'product',
    year: '2026',
    title: 'Benchcommerce',
    tagline: {
      pt: 'SaaS que junta os números de uma loja online num painel só, com um assistente de IA que diz de onde veio cada resposta.',
      en: 'SaaS that brings an online store’s numbers into one dashboard, with an AI assistant that says where every answer came from.',
    },
    meta: 'TypeScript · PostgreSQL · Prisma · Claude',
    summary: {
      pt: 'Plataforma para consultorias de e-commerce acompanharem as lojas que atendem. Ela conecta loja, ERP e mídia paga, junta tudo num modelo único de pedidos, produtos e clientes e calcula os indicadores de dinheiro, marketing, logística e gestão. O assistente de IA responde perguntas sobre esses números, diz de onde veio cada um e avisa quando o dado é frágil.',
      en: 'A platform for e-commerce consultancies to follow the stores they serve. It connects storefront, ERP and paid media, merges everything into one model of orders, products and customers, and computes finance, marketing, logistics and management metrics. The AI assistant answers questions about those numbers, says where each one came from and warns when the data is fragile.',
    },
    stake: {
      pt: 'Consultorias gastam horas montando relatório antes de analisar qualquer coisa. Se o número chega pronto e confiável, essas horas viram recomendação para a loja.',
      en: 'Consultancies spend hours building reports before they can analyse anything. If the numbers arrive ready and reliable, those hours turn into recommendations for the store.',
    },
    facts: {
      role: { pt: 'Engenharia full-stack', en: 'Full-stack engineering' },
      period: { pt: 'Desde 2026', en: 'Since 2026' },
      stack: 'TanStack Start · Express · Prisma · Claude',
      status: { pt: 'Pré-lançamento, lista de espera', en: 'Pre-launch, waitlist' },
    },
    link: { href: 'https://benchcommerce.com.br', label: 'benchcommerce.com.br' },
    cover: 'overview',
    images: { overview: figures.benchOverview, connections: figures.benchConnections },
    process: {
      title: { pt: 'Do dado à decisão', en: 'From data to decision' },
      steps: [
        { type: 'start', label: { pt: 'A loja conecta ERP, vitrine e anúncios', en: 'The store connects ERP, storefront and ads' } },
        { type: 'process', label: { pt: 'Sincronização numa fila, sem planilha', en: 'Sync runs in a queue, no spreadsheets' } },
        { type: 'process', label: { pt: 'Status do ERP vira Pago, Pendente ou Cancelado', en: 'ERP status becomes Paid, Pending or Cancelled' } },
        {
          type: 'process',
          tone: 'accent',
          label: { pt: 'Indicadores com fonte', en: 'Metrics with a source' },
          note: { pt: 'faturamento, margem, ROAS, CAC', en: 'revenue, margin, ROAS, CAC' },
        },
        {
          type: 'decision',
          label: { pt: 'Algum indicador saiu da meta?', en: 'Is any metric off target?' },
          branch: { label: { pt: 'Segue no acompanhamento semanal', en: 'Stays in the weekly review' } },
        },
        { type: 'process', label: { pt: 'O assistente explica o desvio e cita de onde veio cada número', en: 'The assistant explains the gap and cites where each number came from' } },
        { type: 'end', label: { pt: 'Consultor e loja decidem o próximo passo', en: 'Consultant and store decide the next step' } },
      ],
    },
    flow: [
      { layer: { pt: 'Fontes', en: 'Sources' }, label: { pt: 'Loja, ERP, Meta e Google Ads', en: 'Store, ERP, Meta and Google Ads' } },
      { layer: { pt: 'Ingestão', en: 'Ingestion' }, label: { pt: 'Conectores e fila de sincronização', en: 'Connectors and sync queue' } },
      { layer: { pt: 'Modelo', en: 'Model' }, label: { pt: 'PostgreSQL com várias lojas', en: 'Multi-tenant PostgreSQL' } },
      { layer: 'API', label: { pt: 'Express e Zod, contratos tipados', en: 'Express and Zod, typed contracts' } },
      { layer: { pt: 'Uso', en: 'Use' }, label: { pt: 'Painel e assistente de IA', en: 'Dashboard and AI assistant' } },
    ],
    sections: [
      {
        title: { pt: 'Problema', en: 'Problem' },
        paragraphs: [
          {
            pt: 'Os dados de uma loja online ficam espalhados. Os pedidos estão na plataforma da loja, as notas e o estoque no ERP, o investimento no Meta Ads e no Google Ads, e as metas numa planilha. A consultoria passa horas juntando tudo antes de analisar, e cada analista calcula o mesmo indicador de um jeito.',
            en: 'An online store’s data is scattered. Orders sit in the storefront platform, invoices and stock in the ERP, spend in Meta Ads and Google Ads, and targets in a spreadsheet. The consultancy spends hours pulling it together before any analysis, and every analyst computes the same metric differently.',
          },
        ],
      },
      {
        title: { pt: 'O fluxo', en: 'The flow' },
        process: true,
        paragraphs: [
          {
            pt: 'O produto inteiro foi pensado a partir do caminho que o dado faz até virar uma decisão da loja:',
            en: 'The whole product was designed around the path data takes until it becomes a decision for the store:',
          },
        ],
      },
      {
        title: { pt: 'Arquitetura', en: 'Architecture' },
        flow: true,
        paragraphs: [
          {
            pt: 'É um monorepo com cinco partes: o web (React 19 com SSR), a API (Express, Zod e Prisma), um pacote de contratos que web, API e o futuro app mobile compartilham, o pacote do banco e um design system próprio. As sincronizações rodam num worker com a fila dentro do próprio PostgreSQL, sem infraestrutura extra.',
            en: 'It’s a monorepo with five parts: the web app (React 19 with SSR), the API (Express, Zod and Prisma), a contracts package shared by web, API and the future mobile app, the database package and an in-house design system. Syncs run in a worker with the queue inside PostgreSQL itself, with no extra infrastructure.',
          },
          {
            pt: 'O assistente usa o Claude e só lê os dados da loja por ferramentas de leitura da API. Ele não acessa o banco direto e não consegue alterar nada.',
            en: 'The assistant uses Claude and reads store data only through read-only API tools. It has no direct database access and can’t change anything.',
          },
        ],
      },
      {
        title: { pt: 'Decisões e trade-offs', en: 'Decisions and trade-offs' },
        figure: 'connections',
        bullets: [
          {
            pt: 'Escrevi um framework de conectores próprio em vez de pagar um agregador, porque Bling, Nuvemshop e Tray não têm suporte de terceiros. Três jeitos de autenticar (OAuth, domínio com OAuth e credencial manual) cobrem todos os conectores com um formulário só.',
            en: 'I wrote an in-house connector framework instead of paying for an aggregator, because Bling, Nuvemshop and Tray have no third-party support. Three ways to authenticate (OAuth, domain plus OAuth, and manual credentials) cover every connector with a single form.',
          },
          {
            pt: 'Os status do ERP são mapeados um a um para Pago, Pendente e Cancelado. Sem isso, a receita muda de valor dependendo de como cada loja configurou o ERP.',
            en: 'ERP statuses are mapped one by one to Paid, Pending and Cancelled. Without that, revenue changes depending on how each store set up its ERP.',
          },
          {
            pt: 'Várias lojas desde o começo, com três papéis (administrador, consultor e cliente) e acesso só por convite. Quem filtra cada consulta é a API, não a interface.',
            en: 'Multi-tenant from the start, with three roles (admin, consultant and client) and invitation-only access. The API filters every query, not the UI.',
          },
          {
            pt: 'O ambiente de desenvolvimento tem 18 meses de dados sintéticos, para testar indicadores e o assistente sem encostar em dado real.',
            en: 'The development environment has 18 months of synthetic data, so metrics and the assistant can be tested without touching real data.',
          },
        ],
      },
    ],
    sources: [
      {
        pt: 'Produto em pré-lançamento, ainda sem métricas de uso públicas. Os números da demonstração são sintéticos.',
        en: 'Pre-launch product, no public usage metrics yet. Demo numbers are synthetic.',
      },
      {
        pt: 'O código está num repositório privado. Posso mostrar trechos e a arquitetura numa conversa.',
        en: 'The code is in a private repository. I can walk through excerpts and the architecture in a call.',
      },
    ],
  },

  {
    slug: 'carnavip',
    kind: 'product',
    year: '2026',
    title: 'CarnaVIP',
    tagline: {
      pt: 'Pré-atendimento com IA no WhatsApp. Analisando 309 conversas, vimos que o gargalo estava no anúncio e não no atendimento.',
      en: 'AI-assisted WhatsApp pre-sales. Looking at 309 conversations, we saw the bottleneck was the ad and not the chat.',
    },
    meta: 'Claude Haiku · Chatwoot · Docker',
    summary: {
      pt: 'Atendimento inicial com IA no WhatsApp para vender um pacote de carnaval em Ouro Preto. A IA apresentava o pacote, qualificava o interessado e passava a conversa para um dos quatro vendedores. Depois de duas semanas recebendo gente dos anúncios, a análise das conversas mostrou que só 12% delas tinham intenção real de compra.',
      en: 'AI-assisted first response on WhatsApp for selling a carnival package in Ouro Preto, Brazil. The AI presented the package, qualified the lead and handed the chat to one of four salespeople. After two weeks of ad traffic, looking at the conversations showed that only 12% had real purchase intent.',
    },
    stake: {
      pt: 'Responder na hora quem chega pelo anúncio, a qualquer horário, e só ocupar um vendedor com quem tem chance real de comprar.',
      en: 'Reply right away to whoever comes in from the ad, at any hour, and only take up a salesperson’s time with people who might actually buy.',
    },
    facts: {
      role: { pt: 'Projeto e desenvolvimento ponta a ponta', en: 'End-to-end design and build' },
      period: '2026',
      stack: 'Claude Haiku 4.5 · Chatwoot · WhatsApp Cloud API',
      status: { pt: 'Encerrado em nov/2026', en: 'Wound down in Nov 2026' },
    },
    process: {
      title: { pt: 'Caminho de uma conversa', en: 'How a conversation goes' },
      steps: [
        { type: 'start', label: { pt: 'A pessoa toca no anúncio e manda mensagem', en: 'Someone taps the ad and sends a message' } },
        { type: 'process', label: { pt: 'A IA apresenta o pacote numa mensagem só', en: 'The AI presents the package in a single message' } },
        {
          type: 'decision',
          label: { pt: 'Pediu algo fora do roteiro?', en: 'Asked for something off script?' },
          branch: { on: 'yes', label: { pt: 'Vai direto para um vendedor', en: 'Goes straight to a salesperson' } },
        },
        { type: 'process', label: { pt: 'A IA pergunta quantas pessoas e quais dias', en: 'The AI asks how many people and which days' } },
        {
          type: 'decision',
          label: { pt: 'Está qualificado?', en: 'Qualified?' },
          branch: { label: { pt: 'Segue a conversa ou encerra sem ocupar ninguém', en: 'Keeps chatting or ends without tying anyone up' } },
        },
        {
          type: 'process',
          tone: 'accent',
          label: { pt: 'Passa para 1 dos 4 vendedores', en: 'Handed to 1 of 4 salespeople' },
          note: { pt: 'e a IA para de responder de vez', en: 'and the AI stops replying for good' },
        },
        { type: 'end', label: { pt: 'O vendedor fecha pelo app', en: 'The salesperson closes in the app' } },
      ],
    },
    flow: [
      { layer: { pt: 'Entrada', en: 'Entry' }, label: { pt: 'Anúncio com clique para WhatsApp', en: 'Click-to-WhatsApp ad' } },
      { layer: { pt: 'Canal', en: 'Channel' }, label: 'WhatsApp Cloud API' },
      { layer: { pt: 'Caixa', en: 'Inbox' }, label: { pt: 'Chatwoot, dono do número', en: 'Chatwoot owns the number' } },
      { layer: { pt: 'IA', en: 'AI' }, label: { pt: 'Conector e Claude Haiku', en: 'Connector and Claude Haiku' } },
      { layer: { pt: 'Saída', en: 'Exit' }, label: { pt: 'Um dos 4 vendedores', en: 'One of 4 salespeople' } },
    ],
    sections: [
      {
        title: { pt: 'Problema', en: 'Problem' },
        paragraphs: [
          {
            pt: 'Os anúncios levavam direto para o WhatsApp, e quatro vendedores dividiam o mesmo número. Muita mensagem chegava fora do horário, e boa parte não tinha intenção de compra nenhuma.',
            en: 'The ads led straight to WhatsApp, and four salespeople shared one number. Many messages arrived after hours, and a good share had no purchase intent at all.',
          },
        ],
      },
      {
        title: { pt: 'O fluxo', en: 'The flow' },
        process: true,
        paragraphs: [
          {
            pt: 'Desenhei a conversa antes de escrever o prompt. As regras saíram daqui: a IA só responde quem chama, manda uma mensagem por vez e passa para um humano cedo.',
            en: 'I mapped the conversation before writing the prompt. The rules came from here: the AI only replies to inbound messages, sends one message at a time and hands off to a human early.',
          },
        ],
      },
      {
        title: { pt: 'Arquitetura', en: 'Architecture' },
        flow: true,
      },
      {
        title: { pt: 'Decisões e trade-offs', en: 'Decisions and trade-offs' },
        bullets: [
          {
            pt: 'No primeiro desenho os vendedores ficavam no app WhatsApp Business e o sistema percebia pelo eco das mensagens quando um humano assumia. Troquei pelo Chatwoot como dono do número, porque o eco era a parte mais frágil e o app aceita no máximo cinco aparelhos.',
            en: 'In the first design salespeople stayed on the WhatsApp Business app and the system detected a human takeover from message echoes. I switched to Chatwoot owning the number, because the echo was the most fragile part and the app allows at most five devices.',
          },
          {
            pt: 'Essa troca tem custo. Pela API, até as mensagens que o vendedor digita passam a ser cobradas. Deixei isso escrito e o cliente aceitou antes de ir para produção.',
            en: 'That switch has a cost. Through the API, even the messages salespeople type become billable. I wrote it down and the client accepted it before going live.',
          },
          {
            pt: 'Usei o Claude Haiku e não um modelo maior. A conversa é curta e tem roteiro, então latência e custo pesam mais do que raciocínio longo.',
            en: 'I used Claude Haiku rather than a bigger model. The conversation is short and scripted, so latency and cost matter more than long reasoning.',
          },
        ],
      },
      {
        title: { pt: 'O que os dados mostraram', en: 'What the data showed' },
        chart: 'funnel',
        paragraphs: [
          {
            pt: 'De 309 conversas, três em cada quatro vieram de pessoas que tocaram no botão do anúncio e nunca mais responderam. Só 38 (12%) tinham intenção real, sendo 11 leads quentes e 27 interessados. A IA respondeu todo mundo. O problema estava antes dela, num anúncio que trazia clique e não interesse.',
            en: 'Of 309 conversations, three in four came from people who tapped the ad button and never replied again. Only 38 (12%) showed real intent, 11 hot leads and 27 interested. The AI answered everyone. The problem was upstream, in an ad that brought clicks rather than interest.',
          },
          {
            pt: 'Com esse retrato na mão, o cliente preferiu voltar ao app WhatsApp Business, com a equipe no WhatsApp Web. Desliguei o conector e devolvi o número com calma. No fim, o diagnóstico foi o que o projeto entregou de mais útil.',
            en: 'With that picture, the client chose to go back to the WhatsApp Business app, with the team on WhatsApp Web. I shut the connector down and handed the number back carefully. In the end, the diagnosis was the most useful thing the project delivered.',
          },
        ],
      },
    ],
    chart: {
      total: 309,
      unit: { pt: 'conversas', en: 'conversations' },
      caption: { pt: '22/out a 06/nov de 2026', en: 'Oct 22 to Nov 6, 2026' },
      items: [
        { key: 'ghost', value: 232, intent: false, label: { pt: 'Tocaram no anúncio e sumiram', en: 'Tapped the ad and vanished' } },
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
        pt: 'Classifiquei todas as conversas recebidas entre 22/out e 06/nov/2026 no levantamento de encerramento. Cada conversa entra em uma categoria só.',
        en: 'I classified every conversation received between Oct 22 and Nov 6, 2026 in the wind-down review. Each conversation falls into one category only.',
      },
      {
        pt: 'Foi uma campanha só, em cerca de duas semanas. Serve para diagnóstico, não para estimar taxa de conversão.',
        en: 'It was a single campaign over about two weeks. Good for diagnosis, not for estimating a conversion rate.',
      },
    ],
  },

  {
    slug: 'imoveis-guaratiba',
    kind: 'platform',
    year: '2026',
    title: 'Imóveis Guaratiba',
    tagline: {
      pt: 'Plataforma de uma corretora no sul da Bahia, com site encontrado no Google e um painel em que ela mesma publica os imóveis.',
      en: 'Platform for a real-estate broker in southern Bahia, with a site people find on Google and a panel where she publishes listings herself.',
    },
    meta: 'React · Express · SQLite · Cloudflare R2',
    summary: {
      pt: 'Site e painel administrativo de uma corretora de imóveis no litoral sul da Bahia. A corretora cadastra imóveis, fotos e vídeos sem depender de mim. O site monta páginas por condomínio e por região, usa endereços legíveis e mostra a prévia certa quando o link vai para o WhatsApp.',
      en: 'Website and admin panel for a real-estate broker on the southern coast of Bahia, Brazil. The broker adds listings, photos and videos without depending on me. The site builds pages per gated community and region, uses readable URLs and shows the right preview when a link is shared on WhatsApp.',
    },
    stake: {
      pt: 'Depender menos de portal e de grupo de WhatsApp para vender, com um canal próprio que aparece no Google e que a corretora atualiza sozinha.',
      en: 'Rely less on listing portals and WhatsApp groups to sell, with her own channel that shows up on Google and that she updates herself.',
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
    process: {
      title: { pt: 'Do cadastro ao contato', en: 'From listing to lead' },
      steps: [
        { type: 'start', label: { pt: 'A corretora cadastra o imóvel no painel', en: 'The broker adds a listing in the panel' } },
        { type: 'process', label: { pt: 'Fotos viram WebP e miniaturas no upload', en: 'Photos become WebP and thumbnails on upload' } },
        { type: 'process', label: { pt: 'O imóvel entra na página do condomínio e da cidade', en: 'The listing joins the community and town pages' } },
        {
          type: 'decision',
          label: { pt: 'O link foi compartilhado?', en: 'Was the link shared?' },
          branch: { on: 'yes', label: { pt: 'Chega no WhatsApp com foto, título e preço', en: 'Arrives on WhatsApp with photo, title and price' } },
        },
        { type: 'process', label: { pt: 'Quem busca no Google encontra a página do local', en: 'People searching Google find the location page' } },
        { type: 'end', label: { pt: 'O interessado chama a corretora', en: 'The prospect contacts the broker' } },
      ],
    },
    flow: [
      { layer: { pt: 'Painel', en: 'Panel' }, label: { pt: 'Admin com login (JWT)', en: 'Admin with login (JWT)' } },
      { layer: 'API', label: 'Express + TypeScript' },
      { layer: { pt: 'Dados', en: 'Data' }, label: { pt: 'SQLite com backup diário', en: 'SQLite with daily backup' } },
      { layer: { pt: 'Mídia', en: 'Media' }, label: { pt: 'WebP e miniaturas no R2', en: 'WebP and thumbnails on R2' } },
      { layer: 'Site', label: { pt: 'React na Vercel com Edge Middleware', en: 'React on Vercel with Edge Middleware' } },
    ],
    sections: [
      {
        title: { pt: 'Problema', en: 'Problem' },
        paragraphs: [
          {
            pt: 'A corretora dependia de portais e de mensagens no WhatsApp para mostrar os imóveis. Ela precisava de um site próprio que aparecesse no Google para quem procura por condomínio e cidade, e que ela mesma conseguisse manter.',
            en: 'The broker relied on listing portals and WhatsApp messages to show properties. She needed her own site that showed up on Google for people searching by gated community and town, and that she could keep up to date herself.',
          },
        ],
      },
      {
        title: { pt: 'O fluxo', en: 'The flow' },
        process: true,
      },
      {
        title: { pt: 'Arquitetura', en: 'Architecture' },
        flow: true,
        paragraphs: [
          {
            pt: 'Frontend em React com TypeScript na Vercel e API em Express no Railway. No upload, as imagens viram WebP com miniaturas e vão para o Cloudflare R2. O banco é SQLite com o módulo nativo do Node, e um job diário copia o arquivo para o R2.',
            en: 'React and TypeScript frontend on Vercel, Express API on Railway. On upload, images become WebP with thumbnails and go to Cloudflare R2. The database is SQLite through Node’s native module, and a daily job copies the file to R2.',
          },
        ],
      },
      {
        title: { pt: 'Decisões e trade-offs', en: 'Decisions and trade-offs' },
        bullets: [
          {
            pt: 'Escolhi SQLite e não PostgreSQL. Uma pessoa só escreve no banco e o volume é pequeno, então são menos peças para manter, e o backup diário cobre o risco.',
            en: 'I chose SQLite over PostgreSQL. A single person writes to the database and the volume is small, so there are fewer moving parts, and the daily backup covers the risk.',
          },
          {
            pt: 'No modelo, o condomínio vale mais que o bairro para rota, título e exibição, porque é assim que o comprador procura imóvel na região.',
            en: 'In the model, the gated community outranks the neighbourhood for routing, titles and display, because that’s how buyers look for property in the region.',
          },
          {
            pt: 'Os endereços dizem tipo, finalidade, cidade, condomínio e código. Os formatos antigos redirecionam para o novo, então link já compartilhado continua funcionando.',
            en: 'URLs spell out type, purpose, town, community and code. Old formats redirect to the new one, so links already shared keep working.',
          },
          {
            pt: 'Um SPA não entrega as meta tags de cada página para os robôs de prévia. Um Edge Middleware reconhece o robô e devolve um HTML com os dados do imóvel.',
            en: 'A SPA doesn’t serve per-page meta tags to link-preview bots. An Edge Middleware recognises the bot and returns HTML with the listing’s data.',
          },
          {
            pt: 'Reaproveitei a mesma base para uma segunda corretora, em Minas Gerais, trocando só marca e conteúdo.',
            en: 'I reused the same codebase for a second broker, in Minas Gerais, changing only branding and content.',
          },
        ],
      },
    ],
    sources: [
      {
        pt: 'Não publico aqui dados de tráfego ou de negócio do cliente.',
        en: 'I don’t publish the client’s traffic or business data here.',
      },
    ],
  },
];

export const getProject = (slug) => projects.find((p) => p.slug === slug);
