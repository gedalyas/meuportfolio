# Comportamento, acessibilidade e texto

## Interação

- **Hover discreto:** só muda luminosidade do fundo (`--bg-hover`/`--bg-active`) ou acende chevron/seta em `--accent`. Nada de escala, sombra subindo ou deslocamento.
- **Durações:** cor/fundo/borda 200ms `--ease-out`; barras do gráfico 700ms `--ease-expo`; entrada ao rolar 500ms (fade + 8px).
- **Gráfico conversa com o número:** hover ou foco numa linha troca o número principal; as outras linhas esmaecem.
- **Âncoras:** `ScrollManager` (em `App.jsx`) rola até o `id` do hash a cada navegação; rota nova sem hash volta ao topo. `scroll-padding-top` compensa a barra fixa.
- **Idioma:** duas bandeiras lado a lado no topo (Brasil = PT, EUA = EN); a ativa fica colorida, a outra esmaecida. Troca na hora, persiste em `localStorage` (sempre em try/catch) e não pisca no carregamento (script inline). Tema é fixo (escuro).

## Acessibilidade (obrigatório)

- `prefers-reduced-motion: reduce` zera transições e mostra tudo sem animação. `forced-colors` também desliga o reveal.
- Foco visível (`:focus-visible`, 2px `--focus`). Link "Pular para o conteúdo" no topo.
- Botão só-ícone sempre com `aria-label`; ícones `aria-hidden`.
- Link externo: `target="_blank" rel="noopener noreferrer"` + `<span class="visually-hidden">(abre em nova aba)</span>`.
- Um H1 por página; seções com H2 e `aria-labelledby`.
- `<html lang>` acompanha o idioma (`pt-BR`/`en`).
- Contraste: `--text-muted` passa AA nos dois temas para texto ≥ 15px; não use `--text-subtle` em texto corrido.
- Sem rolagem horizontal em nenhuma largura (≥ 320px): resolva o layout, nunca com `overflow-x: hidden` no body.

## Tom de texto

**Quem fala:** um desenvolvedor pleno, direto e técnico, que mostra critério. Primeira pessoa ("projetei", "troquei por"), sem autoelogio.

- Problema → decisão → consequência. Cada decisão diz o **porquê** e, se houver, o **custo** ("O custo dessa troca: …").
- Números com contexto: período, base, fonte. "38 de 309 conversas (12%) entre 22/out e 06/nov".
- Admite limite: "serve para diagnóstico, não para estimar taxa de conversão".
- Títulos de seção curtos e substantivos: "Problema", "Abordagem", "Decisões e trade-offs", "O que os dados mostraram".
- Proibido: "apaixonado por tecnologia", "aspirante", "soluções inovadoras", emoji, citação motivacional, porcentagem sem fonte.

**Sem cara de texto gerado (regra do Davi):**

- Nunca use travessão (—). Troque por ponto, vírgula ou parênteses. Para períodos, escreva "Desde 2026" ou "2023 a 2025".
- Evite as fórmulas: "não é X, é Y", "não só X, mas também Y", "do X ao Y", trincas de adjetivos em toda frase, dois-pontos para anunciar lista em todo parágrafo, frases de efeito no fim.
- Prefira frases curtas, primeira pessoa e verbo concreto ("troquei", "desenhei", "deixei escrito"). Pode ter um toque coloquial ("me chama", "com calma").
- Leia em voz alta: se soar como apresentação de vendas, reescreva.

**EN:** mesmo conteúdo, escrito para leitor internacional (não tradução literal). Explique siglas locais na primeira vez ("privacy law (LGPD)"). Ortografia britânica ou americana — escolha uma por texto; o site hoje usa grafia britânica em alguns termos (`modelling`, `neighbourhood`), mantenha consistente ao editar.
