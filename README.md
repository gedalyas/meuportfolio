# Portfólio — Davi Almeida

Site pessoal: engenharia de software com foco em dados. Página única editorial com estudos de caso, em português e inglês, temas escuro e claro.

## Stack

Vite 6 + React 19 + React Router 7. CSS Modules sobre tokens em `src/styles/tokens.css`. Fontes auto-hospedadas (`@fontsource`). Sem backend.

## Rodar

```sh
npm install
npm run dev       # http://localhost:5173
npm run lint
npm run build     # gera dist/
npm run preview   # serve o build
```

## Onde fica o quê

| Caminho | Conteúdo |
|---|---|
| `src/content/` | todo o conteúdo (perfil, experiência, projetos), em `{ pt, en }` |
| `src/i18n/` | provider de idioma e strings de interface |
| `src/theme/` | provider de tema |
| `src/components/` | componentes (cada um com seu `.module.css`) |
| `src/pages/` | Home, estudo de caso, 404 |
| `.claude/skills/portfolio-design/` | sistema de design, regras de conteúdo e roteiro de revisão |

Para adicionar um projeto, siga o checklist em `.claude/skills/portfolio-design/reference/paginas.md`.

## Deploy

Vercel, com rewrite de SPA em `vercel.json`.
