import { useState, useRef, useEffect } from 'react';
import { getAIResponse, AI_CONFIG } from '../data/aiConfig';
import { IoSend, IoClose } from 'react-icons/io5';
import { FaRobot } from 'react-icons/fa6';
import './styles/AIAssistant.css';

/**
 * AIAssistant Component
 * -------------------
 * This is a custom-built AI interface that simulates a conversation with a 
 * virtual assistant. It uses a predefined data set (aiConfig) to provide 
 * answers about my background, projects, and skills.
 */
const AIAssistant = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: 'assistant', content: `Hello! I am ${AI_CONFIG.name}. Ask me anything about Prayansh!` }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);

  const suggestions = [
    "Tell me about Resumize",
    "What are your top skills?",
    "Show me the career path",
    "How can I contact Prayansh?"
  ];

  const scrollToBottom = () => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const handleSend = async (customMessage?: string) => {
    const messageText = customMessage || input;
    if (!messageText.trim()) return;

    const userMessage = { role: 'user', content: messageText };
    setMessages(prev => [...prev, userMessage]);
    if (!customMessage) setInput('');
    setIsTyping(true);

    // Simulate AI thinking process with a slight delay for a more natural feel
    setTimeout(() => {
      // getAIResponse is a utility that parses the user query and returns relevant data
      const response = getAIResponse(messageText);
      setMessages(prev => [...prev, { role: 'assistant', content: response }]);
      setIsTyping(false);
    }, 1000);
  };

  return (
    <div className="ai-assistant-wrapper">
      {!isOpen && (
        <button className="ai-trigger" onClick={() => setIsOpen(true)}>
          <FaRobot />
          <span className="pulse"></span>
        </button>
      )}

      {isOpen && (
        <div className="ai-chat-window glass-card">
          <div className="ai-chat-header">
            <div className="ai-header-info">
              <FaRobot className="neon-text" />
              <div>
                <h3>{AI_CONFIG.name}</h3>
                <span className="status">Online</span>
              </div>
            </div>
            <button className="close-btn" onClick={() => setIsOpen(false)}>
              <IoClose />
            </button>
          </div>

          <div className="ai-messages">
            {messages.map((msg, i) => (
              <div key={i} className={`message ${msg.role}`}>
                <div className="message-content">
                  {msg.content}
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="message assistant">
                <div className="typing-indicator">
                  <span></span><span></span><span></span>
                </div>
              </div>
            )}
            <div ref={chatEndRef} />
          </div>

          <div className="ai-suggestions">
            {suggestions.map((s, i) => (
              <button key={i} className="suggestion-chip" onClick={() => handleSend(s)}>
                {s}
              </button>
            ))}
          </div>

          <div className="ai-input">
            <input 
              type="text" 
              placeholder="Ask about my projects..." 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  handleSend();
                }
              }}
            />
            <button onClick={() => handleSend()} className="send-btn">
              <IoSend />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AIAssistant;
