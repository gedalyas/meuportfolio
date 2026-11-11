import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

// Fontes auto-hospedadas (subconjunto latino cobre o português).
import '@fontsource/inter/latin-400.css';
import '@fontsource/instrument-serif/latin-400.css';
import '@fontsource/jetbrains-mono/latin-400.css';

import './styles/tokens.css';
import './styles/base.css';
import App from './App';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
