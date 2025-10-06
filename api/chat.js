// src/api/chat.js
// Serverless Function (Vercel) que substitui /server/server.js
// - Mantém o filtro de escopo inicial
// - Usa cookie simples para "sessão verificada" (30 min)
// - Envia o PROFILE_BASE junto à mensagem para o Gemini via REST
// - NÃO expõe a GEMINI_API_KEY no frontend

const REFUSAL =
  "Posso falar apenas sobre o Davi (perfil, serviços, projetos e contatos). Reformule sua pergunta.";

const PROFILE_BASE = `
Você é o assistente pessoal de Davi Almeida Souto. Considere que TODA conversa neste chat é sobre o Davi, seus serviços, projetos, experiência e contato.
Nunca recuse por "assunto fora do escopo". Se algo parecer genérico ou ambíguo, faça 1 pergunta objetiva para conectar o tema ao trabalho do Davi e, em seguida, conduza para próximos passos e contato.

SOBRE O DAVI (use somente estas informações)
- Nome: Davi Almeida Souto (prefere "Davi").
- Atuação: Desenvolvedor de software (JS/React/Node) e Cientista de Dados (Python/R), disponível para freelas e contratação.
- Stack: HTML, CSS, JavaScript, TypeScript, React, Node.js, TailwindCSS, MySQL, PostgreSQL, MongoDB, PHP, Laravel, Python, VBA, R.
- Ferramentas: Git, GitHub, Figma, Canva, VS Code, Excel, Jupyter Notebook, Apache NetBeans, MySQL Workbench, Power BI.
- Contato/agenda: oriente SEMPRE o usuário a usar a seção "Contact" do portfólio onde o chat está.
- Tom: claro, direto, cordial e consultivo. Responda em inglês se o usuário escrever em inglês.

COMO RESPONDER (OBRIGATÓRIO)
1) Reconheça a necessidade e confirme viabilidade quando couber (ex.: "Sim, consigo construir um sistema de gestão de estoque sob medida e integrar com seu ERP/planilhas.").
2) Faça 1–2 perguntas de diagnóstico (ex.: nº de SKUs/filiais, controle por lote/validade, integrações, relatórios).
3) Proponha próximos passos + CTA: convide para uma conversa curta e indique "Contact".
4) Seja conciso (3–6 frases). Não invente fatos. Se faltar dado, diga que precisa alinhar requisitos.

EXEMPLO
Usuário: "Estou com um problema na empresa e acho que o Davi pode resolver."
Assistente: "Consigo ajudar, sim. Você pode me dizer qual área impacta mais (ex.: estoque, financeiro, vendas) e se já usa algum sistema/planilha? Se fizer sentido, marcamos uma conversa rápida — meus contatos estão na seção 'Contact with me'."
`;

// ===== util =====
function norm(s = "") {
  return s.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}
function inScopeStrict(text = "") {
  const t = norm(text);
  if (t.includes("davi")) return true;
  const intent =
    t.includes("com voce") ||
    t.includes("sobre voce") ||
    t.includes("falar com voce") ||
    t.includes("reuniao") ||
    t.includes("contato") ||
    t.includes("contratar") ||
    t.includes("orcamento");
  return intent;
}
function parseCookies(req) {
  const raw = req.headers.cookie || "";
  return raw.split(";").reduce((acc, c) => {
    const [k, v] = c.trim().split("=");
    if (k) acc[k] = decodeURIComponent(v || "");
    return acc;
  }, {});
}

// ===== handler =====
export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const GEMINI_API_KEY = process.env.GEMINI_API_KEY;
    if (!GEMINI_API_KEY) {
      return res.status(500).json({ error: "GEMINI_API_KEY ausente" });
    }

    // body esperado: { message: string, history?: [{role:'user'|'model', content:string}], model?: string }
    const { message, history = [], model = "gemini-2.5-flash" } = req.body || {};
    if (typeof message !== "string" || message.trim().length === 0) {
      return res.status(400).json({ error: "Mensagem inválida." });
    }

    // sessão (cookie booleano "davi_v=1" por 30 min)
    const cookies = parseCookies(req);
    const verified = cookies["davi_v"] === "1";

    if (!verified) {
      const allowed = inScopeStrict(message);
      if (!allowed) {
        // seta cookie (não verificado) só pra manter consistência — opcional
        res.setHeader("Set-Cookie", `davi_v=0; Max-Age=1800; Path=/; HttpOnly; Secure; SameSite=Lax`);
        return res.status(200).json({ reply: REFUSAL });
      }
      // marca verificado
      res.setHeader("Set-Cookie", `davi_v=1; Max-Age=1800; Path=/; HttpOnly; Secure; SameSite=Lax`);
    } else {
      // renova validade se já verificado
      res.setHeader("Set-Cookie", `davi_v=1; Max-Age=1800; Path=/; HttpOnly; Secure; SameSite=Lax`);
    }

    // Monta conteúdo para o Gemini.
    // Simples e robusto: prefixar com PROFILE_BASE e incluir histórico enviado pelo cliente.
    const parts = [];
    // opcional: compacta histórico (até 20 turnos)
    const trimmed = Array.isArray(history) ? history.slice(-20) : [];
    for (const h of trimmed) {
      if (!h || !h.role || !h.content) continue;
      parts.push({ role: h.role === "user" ? "user" : "model", parts: [{ text: h.content }] });
    }
    // prompt atual com instrução base
    parts.push({ role: "user", parts: [{ text: `${PROFILE_BASE}\n\nUsuário: ${message}` }] });

    const url = `https://generativelanguage.googleapis.com/v1/models/${model}:generateContent?key=${GEMINI_API_KEY}`;
    const r = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ contents: parts })
    });

    if (!r.ok) {
      const err = await r.text();
      return res.status(500).json({ error: `Gemini HTTP ${r.status}: ${err}` });
    }

    const data = await r.json();
    const text = data?.candidates?.[0]?.content?.parts?.[0]?.text?.trim();

    const fallback =
      "Consigo te ajudar com isso. Pode me dizer qual área impacta mais (ex.: estoque, financeiro, vendas) e se você já usa algum sistema/planilha? Se fizer sentido, marcamos uma conversa rápida — meus contatos estão na seção “Contact with me”.";
    return res.status(200).json({ reply: text || fallback, raw: data });
  } catch (error) {
    console.error("Erro em /api/chat:", error?.message || error);
    return res.status(500).json({ error: "Falha ao obter resposta da IA." });
  }
}
