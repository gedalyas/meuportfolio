---
name: portfolio-design
description: Sistema de design e de conteúdo do portfólio do Davi Almeida (este repositório) — tokens de cor e superfície nos temas escuro e claro, tipografia (Inter, Instrument Serif, JetBrains Mono), componentes existentes, anatomia da home e do estudo de caso, gráficos, movimento, acessibilidade e tom de texto em PT/EN — e um roteiro de revisão. Use sempre que for mexer na interface do site, adicionar ou editar um projeto/estudo de caso, criar um gráfico ou uma página nova, mudar textos, revisar visual/hierarquia/densidade/cor/tipografia, ou quando o pedido citar "design", "deixar mais profissional", "adicionar projeto" ou "revisar o site".
---

# Design do portfólio — referência e revisão

Site editorial, calmo e orientado a dados de um desenvolvedor pleno migrando para ciência de dados. Os princípios vêm de produtos financeiros editoriais (tema escuro quente, baixa saturação, peso único, texto antes do gráfico), traduzidos para um portfólio. Nada de marca de terceiros: as fontes são abertas e os valores são nossos.

## Como usar

| Pergunta | Arquivo |
|---|---|
| Que cor, superfície, raio, sombra ou duração usar | `reference/tokens.md` (espelha `src/styles/tokens.css`) |
| Fontes, tamanhos, pesos, números | `reference/tipografia.md` |
| Qual componente já existe e quando usar | `reference/componentes.md` |
| Como é a home, como é um estudo de caso, **como adicionar um projeto** | `reference/paginas.md` |
| Hover, transições, acessibilidade, tom de texto PT/EN | `reference/comportamento.md` |
| Revisar uma tela ou um PR | `reference/revisao.md` |

## Os 8 princípios

1. **Calma por baixa saturação.** Neutros quentes e cinco bases empoeiradas (azul, sálvia, dourado, argila, violeta). Nada de cor saturada fora de foco/estado.
2. **Um matiz por significado.** Num gráfico, azul = o que importa, cinza = o resto. Multicor só com ≤ 5 séries + "outros" cinza.
3. **Peso único.** Tudo em 400. A hierarquia vem de tamanho, da troca para serifa nos títulos e de cor (texto × apagado). Não use `font-weight` 500+.
4. **Três famílias, papéis fixos.** Inter para texto e números (`tabular-nums`); Instrument Serif só em H1/H2 e no nome; JetBrains Mono só em rótulos CAPS e na numeração 01/02.
5. **Elevação por luminosidade, não por sombra.** Blocos de dado são *recessed* (`--bg-recessed`), hover sobe a luminosidade (`--bg-hover`). Bordas a 8%. Sombra só em popover.
6. **Texto antes do gráfico.** Toda página e todo bloco de dado abre com um parágrafo que diz o que foi feito e o que o número significa. O gráfico é a prova.
7. **Prova antes de adjetivo.** Toda afirmação tem número, link ou decisão técnica concreta. "Aumentou a conversão" sem número e fonte não entra.
8. **Densidade baixa, coluna de leitura.** Coluna de ~736px (`--col`), muito respiro vertical, listas separadas por hairline, sem cartões desnecessários e sem screenshots na home.

## Cuidados (regras de conteúdo)

- **Clientes só pelo setor** ("corretora de imóveis no sul da Bahia"). Empregadores (Arko Consultoria, Techzafe) podem ser citados. Nunca nomes de pessoas do cliente, telefones, IDs de conta ou credenciais — o repositório é público.
- **Só números reais**, sempre com período e fonte no bloco "Limitações e fontes". Dado sintético é dito como sintético.
- **Sempre bilíngue.** Todo texto visível é `{ pt, en }` (conteúdo em `src/content/`, interface em `src/i18n/ui.js`). Nunca tradução automática.
- **Sem IA no site.** O chat foi removido de propósito; não proponha de novo sem pedido.
- **Uma foto pessoal só**, na seção Sobre. A home não tem screenshots. No estudo de caso, **até duas imagens**, sempre com legenda dizendo o que provam (`CaseFigure`). Prints vêm do site público ou do site de marketing do produto; sem telefone, nome de pessoa ou marca do cliente visível — recorte. Ilustração/dado de exemplo é dito na legenda.
- Textos marcados `TODO(conteúdo)` são rascunhos aguardando confirmação do Davi: não os apresente como fato confirmado.
