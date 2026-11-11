# Componentes existentes

Todos em `src/components/`, cada um com seu `.module.css`. Recebem texto **já traduzido** (o pai chama `p()`/`t()` de `useLang`), exceto os que leem o idioma sozinhos (`WorkList`, `FunnelBars`, `ContactBlock`, `TopBar`). Antes de criar um novo, veja se um destes resolve.

| Componente | O que é | Regras |
|---|---|---|
| `TopBar` | barra fixa: nome em serifa, âncoras (≥ 768px), botão de idioma (mostra o idioma de destino), botão de tema | ganha hairline inferior ao rolar; botões só-ícone com `aria-label` |
| `Footer` | © + link do código | — |
| `SectionHeading` | H2 serif + parágrafo opcional | toda seção começa por ele; o `id` do H2 é a âncora |
| `FactsStrip` | faixa de 4 fatos separada por hairlines (2×2 no celular) | sem cartão; `compact` para valores longos (estudo de caso); fatos verificáveis, nunca métrica inventada |
| `WorkList` | lista numerada de estudos de caso: 01 mono, título, ano, frase, meta de stack, chevron | sem imagem; hover = `--bg-hover` + chevron em `--accent` |
| `NumberedList` | lista editorial 01/02/03 com título e parágrafo | princípios, passos |
| `Timeline` | período mono na margem, cargo · organização, descrição, tags pill | experiência e formação |
| `StackGroups` | ferramentas por papel, grid 2 colunas | `focus: true` mostra o selo "foco atual" |
| `ContactBlock` | linhas rótulo/valor: e-mail com "Copiar", links externos com ↗ | links externos com `target="_blank"` + texto oculto "(abre em nova aba)" |
| `FlowDiagram` | etapas da arquitetura num bloco recessed; horizontal ≥ 768px, vertical abaixo | 3–6 etapas; `layer` curto em CAPS + `label` |
| `charts/FunnelBars` | barras horizontais de composição com número principal | azul = intenção/sinal, cinza = ruído; hover/foco troca o número principal (sem tooltip); legenda com totais |
| `CaseFigure` | print de produto em moldura recessed + legenda; abre a versão grande em nova aba | legenda obrigatória dizendo o que a imagem prova; `priority` só na capa; no tema escuro o brilho cai 10% |
| `Icons` | ícones de traço 1.5px (sol, lua, setas, chevron, copiar, check) | sempre `aria-hidden`; o botão dá o nome |

## Padrões de CSS reutilizáveis (`src/styles/base.css`)

- `.container` — coluna de leitura com gutter.
- `.eyebrow` — rótulo mono CAPS apagado.
- `.link` — sublinhado discreto que acende no hover.
- `.num`, `.muted`, `.serif`, `.visually-hidden`, `.skip-link`.
- `[data-reveal]` + hook `useReveal(deps)` — entrada suave ao rolar.

## Botões

- **Claro (primário):** fundo `--text`, texto `--bg`. No máximo um por bloco (hoje só "Ver trabalhos" no hero).
- **Contornado:** borda `--border-strong`, raio 6px, hover `--bg-active`.
- **Só-ícone:** pill 32px, `--text-muted` → `--text` no hover.

## Gráfico novo — checklist

1. Escreva antes o parágrafo que diz o que o gráfico mostra.
2. Um matiz por significado; o resto em `--data-other`.
3. Grade e trilhos em hairline/`--data-track`; números `tabular-nums` formatados por `Intl`.
4. Hover/foco atualiza um número principal; linhas focáveis por teclado.
5. Legenda com totais; período em CAPS mono; fonte no bloco "Limitações e fontes".
6. SVG/HTML próprios — não adicione biblioteca de gráficos para um gráfico só.
