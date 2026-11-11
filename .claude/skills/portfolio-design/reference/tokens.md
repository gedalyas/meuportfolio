# Tokens

Fonte única: `src/styles/tokens.css`. Mudou um valor lá, mude aqui. Componentes usam só `var(--…)` — nada de hex solto em `.module.css`.

## Como o tema é aplicado

- O script inline do `index.html` define `data-theme` (`dark`/`light`) e `lang` no `<html>` antes da primeira pintura: escolha salva em `localStorage` → senão o sistema.
- `ThemeProvider` (`src/theme/`) alterna e persiste; sem escolha salva, acompanha `prefers-color-scheme`.
- O CSS define o escuro em `:root`, o claro em `:root[data-theme='light']` e em `@media (prefers-color-scheme: light) :root:not([data-theme='dark'])` (fallback sem JS).

## Superfícies e texto

| Token | Escuro | Claro | Uso |
|---|---|---|---|
| `--bg` | `#232222` | `#faf9f7` | fundo da página |
| `--bg-recessed` | `#1c1b1b` | `#f3f1f0` | blocos de dado: diagrama, gráfico, "Limitações e fontes" |
| `--bg-raised` | `#2d2d2d` | `#ffffff` | reservado para controles elevados |
| `--bg-hover` | `#2b2a2a` | `#f2f0ee` | hover de linha clicável |
| `--bg-active` | `#323131` | `#ebe8e5` | hover de botão |
| `--text` | `#f7f6f5` | `#1c1b1b` | texto principal (nunca branco puro) |
| `--text-muted` | `#9f9e9d` | `#6b6a69` | parágrafos de apoio, resumo |
| `--text-subtle` | `#807f7e` | `#8a8988` | numeração, meta, eixos |
| `--border` | off-white 8% | preto quente 8% | hairlines |
| `--border-strong` | off-white 16% | preto quente 16% | botões contornados, tags |
| `--accent` | `#95a5ca` | `#4a5879` | chevron ativo, % destacada, selo de foco |
| `--focus` | `#f7f6f5` | `#1c1b1b` | anel de foco |

Regra: elevação = luminosidade. Bloco de dado afunda (`recessed`), linha clicável acende no hover. Cartão com borda **e** sombra **e** fundo é sinal de erro.

## Dados

| Token | Escuro | Claro | Significado |
|---|---|---|---|
| `--data-1` | `#6887cf` | `#596fa3` | azul — a série que importa |
| `--data-2` | `#a9bd98` | `#8c9a80` | sálvia |
| `--data-3` | `#d7c484` | `#afa173` | dourado |
| `--data-4` | `#b18778` | `#844c37` | argila |
| `--data-5` | `#9082ce` | `#776ca3` | violeta |
| `--data-other` | cinza 50% | cinza 38% | "outros", ruído, parcial |
| `--data-track` | off-white 5% | preto 5% | trilho de barra |
| `--positive` / `--negative` | `#7fb894` / `#d98b86` | `#3f7d57` / `#a3504a` | variação, sempre abafada |

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
