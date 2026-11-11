# Tokens

Fonte única: `src/styles/tokens.css`. Mudou um valor lá, mude aqui. Componentes usam só `var(--…)` — nada de hex solto em `.module.css`.

## Tema

Um tema só: escuro e quente (`color-scheme: dark`). Não existe tema claro nem botão de troca — decisão do Davi. Não proponha tema claro sem pedido.

## Superfícies e texto

| Token | Valor | Uso |
|---|---|---|
| `--bg` | `#232222` | fundo da página |
| `--bg-recessed` | `#1c1b1b` | blocos de dado: diagrama, gráfico, "Limitações e fontes" |
| `--bg-raised` | `#2d2d2d` | reservado para controles elevados |
| `--bg-hover` | `#2b2a2a` | hover de linha clicável |
| `--bg-active` | `#323131` | hover de botão |
| `--text` | `#f7f6f5` | texto principal (nunca branco puro) |
| `--text-muted` | `#9f9e9d` | parágrafos de apoio, resumo |
| `--text-subtle` | `#807f7e` | numeração, meta, eixos |
| `--border` | off-white 8% | hairlines |
| `--border-strong` | off-white 16% | botões contornados, tags |
| `--accent` | `#95a5ca` | chevron ativo, % destacada, selo de foco |
| `--focus` | `#f7f6f5` | anel de foco |

Regra: elevação = luminosidade. Bloco de dado afunda (`recessed`), linha clicável acende no hover. Cartão com borda **e** sombra **e** fundo é sinal de erro.

## Dados

| Token | Valor | Significado |
|---|---|---|
| `--data-1` | `#6887cf` | azul — a série que importa |
| `--data-2` | `#a9bd98` | sálvia |
| `--data-3` | `#d7c484` | dourado |
| `--data-4` | `#b18778` | argila |
| `--data-5` | `#9082ce` | violeta |
| `--data-other` | cinza 50% | "outros", ruído, parcial |
| `--data-track` | off-white 5% | trilho de barra |
| `--positive` / `--negative` | `#7fb894` / `#d98b86` | variação, sempre abafada |

## Forma, layout e movimento

| Token | Valor |
|---|---|
| `--radius-sm / --radius / --radius-lg / --radius-xl / --radius-pill` | 4 / 6 / 10 / 14 / 9999 px — botão 6, bloco 10, pill em tags |
| `--shadow-popover` | só em overlay |
| `--col` | 46rem (coluna de leitura) |
| `--gutter` | 16px (≥ 40rem: 24px) |
| `--topbar-h` | 3.5rem |
| `--space-section` | clamp(4rem … 6.5rem) entre seções |
| `--dur-fast / --dur / --dur-slow` | 150 / 200 / 300 ms |
| `--ease-out` | `cubic-bezier(0,0,.2,1)` — cor/fundo/borda |
| `--ease-expo` | `cubic-bezier(.16,1,.3,1)` — barras, entradas |

Breakpoints usados: 40rem (640px) e 48rem (768px). Mobile primeiro.
