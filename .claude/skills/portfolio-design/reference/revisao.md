# Revisar o site

Objetivo: apontar o que afasta uma tela da calma, da clareza e da credibilidade do sistema, e dizer com qual token/componente resolver.

## Antes de começar

1. Leia `SKILL.md` e o arquivo de referência do eixo em questão.
2. Veja a tela renderizada: `npm run build && npx vite preview`, em 375px e 1280px, temas escuro e claro, PT e EN. Sem isso, diga que revisou só o código.
3. Não edite nada sem pedido; entregue achados.

## Eixos

| Eixo | O sistema faz | Pergunte | Resolver com |
|---|---|---|---|
| Conteúdo | prova antes de adjetivo; clientes só por setor | Há afirmação sem número/link? Nome de cliente, telefone, ID? Número sem fonte? | reescrever; mover a fonte para `sources` |
| Narrativa | texto antes do gráfico | A página/bloco abre explicando o que o dado significa? | `summary`, parágrafo antes do `chart` |
| Cor de dado | 1 matiz por significado | Cor decorativa no gráfico? Mais de 5 séries? | `--data-1` + `--data-other` |
| Peso | 400 em tudo | Algum `font-weight` ≥ 500, `<strong>` para hierarquia? | tamanho, serifa ou `--text` |
| Família | 3 famílias com papel fixo | Serifa em corpo? Mono em número? | `--font-sans` + `.num` |
| Superfície | elevação por luminosidade; borda 8% | Cartão com borda + sombra + fundo? Cartão dentro de cartão? | `--bg-recessed`, hairline `--border` |
| Densidade | coluna ~736px, respiro, hairlines | Grade de cards? Screenshot na home? Seção sem H2? | `.container`, `SectionHeading`, listas com hairline |
| Hierarquia | texto × muted × subtle | Cinzas demais? Rótulo e valor iguais? | `--text` / `--text-muted` / `.eyebrow` |
| Números | tabular, `Intl` por idioma | Percentual com ponto em PT? Colunas desalinhadas? | `Intl.NumberFormat`, `.num` |
| i18n | todo texto `{pt,en}` | Texto fixo em PT dentro de componente? `aria-label` sem tradução? | `src/i18n/ui.js`, `src/content/*` |
| Movimento | 150–300ms, só luminosidade | Escala/sombra no hover? Animação sem `reduced-motion`? | `--dur`, `--ease-out` |
| Acessibilidade | foco visível, aria, lang | Botão só-ícone sem nome? Link externo sem aviso? Rolagem horizontal? | ver `comportamento.md` |

## Formato do relatório

Agrupe por eixo, do mais visível ao menos. Para cada achado: **o quê** e **onde** (`arquivo:linha` ou região da tela), **como o sistema faz**, **como resolver** (token/componente; se faltar token, diga "proposta de token" em vez de inventar valor no componente) e **esforço** (troca de classe / ajuste de componente / mudança de página). Feche com os 3 achados de maior impacto.
