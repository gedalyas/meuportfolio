# Tipografia

## Famílias (auto-hospedadas via `@fontsource`, subconjunto latino, importadas em `src/main.jsx`)

| Família | Variável | Onde | Onde não |
|---|---|---|---|
| Inter 400 | `--font-sans` | todo texto, números, botões, rótulos de linha | — |
| Instrument Serif 400 | `--font-serif` | nome no hero, H1 de página, H2 de seção, nome na barra do topo, título do "próximo estudo de caso" | corpo, botões, números |
| JetBrains Mono 400 | `--font-mono` | rótulos CAPS (`.eyebrow`), numeração 01/02, períodos da linha do tempo, meta de stack, camadas do diagrama | valores numéricos (use Inter tabular) |

Não carregue um quarto peso ou família. Peso 400 em tudo; não há 500/600/700 importados.

## Escala (raiz 16px)

| Token | px | Uso |
|---|---|---|
| `--fs-micro` | 11 | `.eyebrow` (mono, CAPS, tracking `.14em`), meta |
| `--fs-sm` | 13 | legendas, botões pequenos, linhas de gráfico |
| `--fs-base` | 15 | texto de interface, listas, bullets |
| `--fs-body` | 17 | parágrafos de leitura |
| `--fs-lead` | 19 | resumo de abertura (muted) |
| `--fs-h3` | 18 | título de item (sans) |
| `--fs-value` | 22 | valor na faixa de fatos |
| `--fs-stat` | 36 | número principal de gráfico |
| `--fs-h2` | 28→36 | H2 serif (fluido) |
| `--fs-h1` | 40→68 | nome no hero (fluido); H1 de caso usa 38→56 |

Leading: serif 1.05–1.1 (quanto maior, mais apertado); corpo 1.6; resumo 1.55. Serif grande com tracking levemente negativo (−0.01em).

## Números

- `font-variant-numeric: tabular-nums` (classe `.num`) em todo valor, período e percentual.
- Formatação por idioma com `Intl.NumberFormat` (`pt-BR` → `75,1%`, `en-US` → `75.1%`).
- Datas curtas em CAPS mono na legenda do gráfico (`22/OUT A 06/NOV DE 2026`).
- Nunca número em monoespaçada.

## Hierarquia sem negrito

1. tamanho; 2. serifa vs. sans; 3. cor (`--text` × `--text-muted` × `--text-subtle`). Para destacar uma frase dentro de um parágrafo apagado, mude a cor para `--text`, não o peso.
