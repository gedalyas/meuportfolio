# Páginas

Rotas em `src/App.jsx`: `/` (Home), `/projetos/:slug` (CaseStudy), `*` (NotFound). `/about`, `/projects` e `/contact` redirecionam para âncoras da home (links da versão antiga).

## Home (`src/pages/Home.jsx`)

1. **Hero** — eyebrow mono "Engenharia de software · Dados" → nome em serifa grande → resumo (muted, ~40rem) → botão claro "Ver trabalhos" + contornado "Falar comigo" → localização.
2. **FactsStrip** — 4 fatos verificáveis (`facts` em `src/content/profile.js`).
3. **Trabalhos selecionados** (`#work`) — `WorkList` com `projects`.
4. **Como eu trabalho** — `NumberedList` com `principles`.
5. **Experiência** (`#experience`) — `Timeline` de `experience` + rótulo "Formação" + `Timeline` de `education`.
6. **Ferramentas** — `StackGroups` com `stack` (grupo Dados com `focus`).
7. **Sobre** (`#about`) — a única foto (`src/assets/portrait.webp`, 4:5, ~480×600) + parágrafos de `about`.
8. **Vamos conversar** (`#contact`) — `ContactBlock`.

## Estudo de caso (`src/pages/CaseStudy.jsx`)

1. `←` "Todos os trabalhos" → `/#work`.
2. Eyebrow "Estudo de caso · 0N · ano" → H1 serif → resumo (o que foi feito e o resultado, em 3–5 linhas) → botão "Ver no ar" se houver `link`.
3. `FactsStrip compact` — Papel · Período · Stack · Status.
   - `cover` (opcional): a imagem principal logo abaixo dos fatos.
4. Seções na ordem do array `sections`, tipicamente: **Problema** → **Abordagem** (`flow: true` insere o `FlowDiagram`) → **Decisões e trade-offs** (bullets com o porquê de cada escolha) → **O que os dados mostraram** (`chart`) quando houver dado real.
5. **Limitações e fontes** — bloco recessed com `sources`.
6. **Próximo estudo de caso** — link circular para o seguinte.

## Adicionar um projeto — checklist

Edite só `src/content/projects.js` (a ordem do array é a ordem na home):

- [ ] `slug` em kebab-case (vira `/projetos/<slug>`), `title`, `year`, `kind` (`product` | `platform` | `data` — use `data` para notebooks/modelos de ciência de dados).
- [ ] `tagline` `{pt,en}`: uma frase, com o resultado se houver.
- [ ] `meta`: 3–4 tecnologias separadas por ` · `.
- [ ] `summary` `{pt,en}`: texto antes do gráfico — o que é, para quem, o que aconteceu.
- [ ] `facts`: `role`, `period`, `stack`, `status` (cada um string ou `{pt,en}`).
- [ ] `link` só se o projeto está no ar e pode ser divulgado; repositório privado → diga em `sources`.
- [ ] `flow`: 3–6 etapas `{ layer, label }`.
- [ ] `sections`: Problema, Abordagem (`flow: true`), Decisões e trade-offs; dados reais → `chart`.
- [ ] Imagens (opcional, até 2): WebP em `src/assets/cases/<slug>-<nome>-{lg,sm}.webp` (lg ≤ 1600px, sm 960px, qualidade ~80), importadas no topo de `projects.js` em `figures` com `width`, `height`, `alt` e `caption` `{pt,en}`; use `cover: '<chave>'` e/ou `figure: '<chave>'` numa seção. Capture com viewport 1440×900 e escala 2, recorte o que interessa e tire telefone, nomes e números não verificáveis.
- [ ] `sources`: período, método, limitações. Sem dado público → diga isso.
- [ ] Nenhum nome de cliente/pessoa, telefone, ID ou credencial. Números conferidos na fonte.
- [ ] PT e EN revisados por humano (não traduza com ferramenta automática sem revisar).
- [ ] `npm run lint && npm run build`; olhar a página em 375px e 1280px nos dois temas.

Projeto de ciência de dados: a seção de dados vira o centro — pergunta → dados (origem, tamanho, período) → método → resultado com gráfico → limitações. Link para o notebook/repositório público.
