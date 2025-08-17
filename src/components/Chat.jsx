// src/components/Chat.jsx

import React, { useState } from 'react';
import "../design/Chat.css";

function Chat() {
  const [isOpen, setIsOpen] = useState(false); // NOVO: Controla se o chat está aberto ou fechado
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  // NOVO: Função para abrir/fechar o chat
  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage = { sender: 'user', text: input };
    setMessages((prevMessages) => [...prevMessages, userMessage]);
    setIsLoading(true);
    setInput(''); // Limpa o input logo após o envio

    try {
      const response = await fetch('http://localhost:5000/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: input }),
      });

      if (!response.ok) {
        throw new Error('A resposta da rede não foi ok');
      }

      const data = await response.json();
      const aiMessage = { sender: 'ai', text: data.reply };
      setMessages((prevMessages) => [...prevMessages, aiMessage]);
    } catch (error) {
      console.error("Erro ao buscar resposta da IA:", error);
      const errorMessage = { sender: 'ai', text: 'Desculpe, não consegui pensar em uma resposta. Tente novamente.' };
      setMessages((prevMessages) => [...prevMessages, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    // Este é o container geral do nosso widget
    <div className="chat-widget-container">
      {/* A janela do chat só aparece se isOpen for true */}
      {isOpen && (
        <div className="chat-container">
          <div className="chat-header">
            <h2>Chat com IA</h2>
            <button className="close-btn" onClick={toggleChat}>X</button>
          </div>
          <div className="message-list">
            {messages.map((msg, index) => (
              <div key={index} className={`message ${msg.sender}`}>
                <p>{msg.text}</p>
              </div>
            ))}
            {isLoading && (
              <div className="message ai">
                <p>Pensando...</p>
              </div>
            )}
          </div>
          <form className="message-form" onSubmit={handleSubmit}>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Digite sua mensagem..."
              disabled={isLoading}
            />
            <button type="submit" disabled={isLoading}>
              Enviar
            </button>
          </form>
        </div>
      )}
      
      {/* Esta é a bolha que fica sempre visível */}
      <button className="chat-bubble" onClick={toggleChat}>
        {/* Usando um emoji de balão de chat como ícone */}
        💬
      </button>
    </div>
  );
}

export default Chat;