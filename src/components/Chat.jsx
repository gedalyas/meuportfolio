// src/components/Chat.jsx
import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import fotoperfil from "../assets/images/fotoperfil.png"; // ⇦ ajuste a extensão se for .png

export default function Chat() {
  const [shadowRoot, setShadowRoot] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const host = document.createElement("div");
    host.id = "ai-chat-host";
    Object.assign(host.style, {
      position: "fixed",
      right: "16px",
      bottom: "16px",
      zIndex: "2147483647",
      width: "auto",
      height: "auto",
      pointerEvents: "none",
    });
    document.body.appendChild(host);

    const shadow = host.attachShadow({ mode: "open" });

    const style = document.createElement("style");
    style.textContent = `
      :host, .wrap, .c-panel, .c-bubble { box-sizing: border-box; }
      .wrap { position: relative; width: var(--b,56px); height: var(--b,56px); pointer-events: auto; }

      /* Bolha com avatar redondo */
      .c-bubble {
        width: var(--b,56px); height: var(--b,56px);
        border-radius: 50%; border: 2px solid #ffffff;
        padding: 0; background: transparent; cursor: pointer;
        display: grid; place-items: center;
        box-shadow: 0 10px 24px rgba(0,0,0,.35);
        overflow: hidden;
      }
      .c-bubble img {
        width: 100%; height: 100%;
        object-fit: cover; display: block;
      }
      .c-bubble:hover { filter: brightness(1.03); }
      .c-bubble:focus-visible { outline: 2px solid #9ec1ff; outline-offset: 2px; }

      /* Painel */
      .c-panel {
        position: absolute;
        right: 0;
        bottom: calc(var(--b,56px) + 12px);
        width: min(92vw, 380px);
        height: 520px;
        max-height: min(85vh, 640px);
        background: #0b1220; color: #e6e8ee;
        border-radius: 16px; border: 1px solid rgba(255,255,255,.08);
        box-shadow: 0 14px 32px rgba(0,0,0,.35);
        display: flex; flex-direction: column; overflow: hidden;
      }

      .c-header {
        display:flex; align-items:center; justify-content:space-between; gap:12px;
        padding:12px 14px; background: rgba(255,255,255,.04);
        border-bottom:1px solid rgba(255,255,255,.06);
        flex: none;
      }
      .h-left { display:flex; align-items:center; gap:10px; }
      .avatar {
        width: 28px; height: 28px; border-radius: 50%; overflow: hidden;
        border: 1px solid rgba(255,255,255,.25);
        flex: none;
      }
      .avatar img { width:100%; height:100%; object-fit: cover; display:block; }
      .c-header h2 { margin:0; font-size:16px; font-weight:600; }

      .close-btn {
        border:none; background:transparent; color:#e6e8ee; cursor:pointer;
        font-size:18px; line-height:1; padding:6px 8px; border-radius:8px;
      }
      .close-btn:hover { background: rgba(255,255,255,.08); }

      .c-list {
        flex: 1 1 auto; min-height: 0; overflow:auto;
        padding:12px; display:flex; flex-direction:column; gap:10px;
      }
      .msg { max-width:85%; padding:10px 12px; border-radius:14px; line-height:1.4; white-space:pre-wrap; overflow-wrap:anywhere; }
      .msg.user { align-self:flex-end; background:#2a62ff; color:#fff; border-bottom-right-radius:4px; }
      .msg.ai   { align-self:flex-start; background:#141b2e; color:#e6e8ee; border:1px solid rgba(255,255,255,.06); border-bottom-left-radius:4px; }

      .c-form {
        display:grid; grid-template-columns:1fr auto; gap:8px; align-items:center;
        padding:10px; border-top:1px solid rgba(255,255,255,.06); background:rgba(255,255,255,.03);
        flex:none;
      }
      .c-form input {
        width:100%; border:1px solid rgba(255,255,255,.08);
        background:#0e1527; color:#e6e8ee; padding:10px 12px; border-radius:10px; outline:none; line-height:1.3;
      }
      .c-form button {
        border:0; border-radius:10px; padding:10px 14px; cursor:pointer;
        background:#9ec1ff; color:#0b1220; font-weight:600;
      }
      .c-form button[disabled] { opacity:.6; cursor:not-allowed; }

      .typing .dot { animation: blink 1.2s infinite; display:inline-block; }
      .typing .dot:nth-child(2){ animation-delay:.15s; }
      .typing .dot:nth-child(3){ animation-delay:.3s; }
      @keyframes blink { 0%,20%{opacity:0} 50%{opacity:1} 100%{opacity:0} }

      @media (max-width: 600px) {
        .c-panel { width: calc(100vw - 32px); max-height: min(75vh, 600px); }
      }
    `;
    shadow.appendChild(style);

    setShadowRoot(shadow);
    return () => { host.remove(); };
  }, []);

  const toggleChat = () => setIsOpen(v => !v);

  async function handleSubmit(e) {
    e.preventDefault();
    if (!input.trim()) return;
    const text = input;
    setMessages(prev => [...prev, { sender: "user", text }]);
    setInput("");
    setIsLoading(true);
    try {
      const res = await fetch("http://localhost:5000/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: text }),
      });
      if (!res.ok) throw new Error("HTTP " + res.status);
      const data = await res.json();
      setMessages(prev => [...prev, { sender: "ai", text: data.reply }]);
    } catch (err) {
      console.error(err);
      setMessages(prev => [...prev, { sender: "ai", text: "Desculpe, não consegui pensar em uma resposta. Tente novamente." }]);
    } finally {
      setIsLoading(false);
    }
  }

  if (!shadowRoot) return null;

  const ui = (
    <div className="wrap" role="dialog" aria-label="Chat com IA">
      {isOpen && (
        <div className="c-panel">
          <div className="c-header">
            <div className="h-left">
              <div className="avatar" aria-hidden="true">
                <img src={fotoperfil} alt="" loading="lazy" />
              </div>
              <h2>Chat com IA</h2>
            </div>
            <button className="close-btn" onClick={toggleChat} aria-label="Fechar chat">×</button>
          </div>

          <div className="c-list" aria-live="polite">
            {messages.map((m, i) => (
              <div key={i} className={`msg ${m.sender}`}><p>{m.text}</p></div>
            ))}
            {isLoading && (
              <div className="msg ai typing">
                Pensando<span className="dot">.</span><span className="dot">.</span><span className="dot">.</span>
              </div>
            )}
          </div>

          <form className="c-form" onSubmit={handleSubmit}>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Digite sua mensagem..."
              disabled={isLoading}
            />
            <button type="submit" disabled={isLoading}>Enviar</button>
          </form>
        </div>
      )}

      {/* bolha com sua foto */}
      <button
        className="c-bubble"
        onClick={toggleChat}
        aria-expanded={isOpen}
        title={isOpen ? "Fechar chat" : "Abrir chat"}
        aria-label={isOpen ? "Fechar chat" : "Abrir chat"}
      >
        <img src={fotoperfil} alt="Abrir chat" />
      </button>
    </div>
  );

  return createPortal(ui, shadowRoot);
}
