// /server/server.js
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { GoogleGenerativeAI } from "@google/generative-ai";

dotenv.config();

const app = express();
app.set("trust proxy", true);
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

/* ======================
   CONFIG / UTIL
====================== */
const REFUSAL =
  "Posso falar apenas sobre o Davi (perfil, serviços, projetos e contatos). Reformule sua pergunta.";

// === FILTRO ULTRA SIMPLES (1ª mensagem precisa estar “sobre você”) ===
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

// Sessões simples por IP+UA para manter contexto por 30 min
const sessions = new Map();
const SESSION_TTL_MS = 30 * 60 * 1000;

function sessionKeyFromReq(req) {
  const ua = req.headers["user-agent"] || "ua";
  const ip = req.ip || req.connection?.remoteAddress || "ip";
  return `${ip}::${ua}`;
}
function getSession(key) {
  const now = Date.now();
  const s = sessions.get(key);
  if (!s) return null;
  if (now - s.last > SESSION_TTL_MS) {
    sessions.delete(key);
    return null;
  }
  s.last = now;
  return s;
}
function createSession() {
  return { verified: false, history: [], last: Date.now() };
}
function saveSession(key, s) {
  s.last = Date.now();
  sessions.set(key, s);
}

/* ======================
   PROMPT (SEM RECUSA; SEMPRE ENCAMINHA)
====================== */
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

EXEMPLOS
Usuário: "Estou com um problema na empresa e acho que o Davi pode resolver."
Assistente: "Consigo ajudar, sim. Você pode me dizer qual área impacta mais (ex.: estoque, financeiro, vendas) e se já usa algum sistema/planilha? Se fizer sentido, marcamos uma conversa rápida — meus contatos estão na seção 'Contact with me'."
`;

/* ======================
   ROTA
====================== */
app.post("/api/chat", async (req, res) => {
  try {
    const { message } = req.body || {};
    if (typeof message !== "string" || message.trim().length === 0) {
      return res.status(400).json({ error: "Mensagem inválida." });
    }

    const key = sessionKeyFromReq(req);
    let sess = getSession(key) || createSession();

    // Pré-filtro apenas na PRIMEIRA mensagem
    if (!sess.verified) {
      const allowed = inScopeStrict(message);
      console.log(`[FIRST] allowed=${allowed} | msg="${message}"`);
      if (!allowed) {
        saveSession(key, sess);
        return res.status(200).json({ reply: REFUSAL });
      }
      sess.verified = true;
    }

    const model = genAI.getGenerativeModel({
      model: "gemini-1.5-flash",
      systemInstruction: PROFILE_BASE,
      generationConfig: {
        temperature: 0.2,
        topK: 40,
        topP: 0.9,
        maxOutputTokens: 320,
        responseMimeType: "text/plain",
      },
    });

    // histórico (até 10 turnos)
    const history = sess.history.slice(-20);
    const chat = model.startChat({ history });

    console.log(`[ASK ] msg="${message}"`);
    const result = await chat.sendMessage([{ text: message }]);
    const response = await result.response;
    let text = (response.text() || "").trim();

    if (!text) {
      text =
        "Consigo te ajudar com isso. Pode me dizer qual área impacta mais (ex.: estoque, financeiro, vendas) e se você já usa algum sistema/planilha? Se fizer sentido, marcamos uma conversa rápida — meus contatos estão na seção “Contact with me”.";
    }

    // (DEBUG) ver a saída do modelo:
    console.log(`[MODEL OUT] ${text}`);

    // Atualiza histórico/sessão
    history.push({ role: "user", parts: [{ text: message }] });
    history.push({ role: "model", parts: [{ text }] });
    sess.history = history;
    saveSession(key, sess);

    console.log(`[RESP] ok`);
    return res.status(200).json({ reply: text });
  } catch (error) {
    console.error("Erro na chamada da API Gemini:", error);
    return res.status(500).json({ error: "Falha ao obter resposta da IA." });
  }
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
