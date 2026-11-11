import { useEffect } from 'react';
import { BrowserRouter, Navigate, Route, Routes, useLocation } from 'react-router-dom';
import LanguageProvider from './i18n/LanguageProvider';
import ThemeProvider from './theme/ThemeProvider';
import { useLang } from './i18n/context';
import TopBar from './components/TopBar';
import Footer from './components/Footer';
import Home from './pages/Home';
import CaseStudy from './pages/CaseStudy';
import NotFound from './pages/NotFound';

/** Âncora → rola até a seção; rota nova sem âncora → topo. Roda a cada navegação (location.key). */
function ScrollManager() {
  const { pathname, hash, key } = useLocation();

  useEffect(() => {
    if (hash) {
      const id = decodeURIComponent(hash.slice(1));
      const frame = requestAnimationFrame(() => {
        document.getElementById(id)?.scrollIntoView({ block: 'start' });
      });
      return () => cancelAnimationFrame(frame);
    }
    window.scrollTo(0, 0);
    return undefined;
  }, [pathname, hash, key]);

  return null;
}

function Shell() {
  const { t } = useLang();
  return (
    <>
      <a href="#main" className="skip-link">
        {t('skipToContent')}
      </a>
      <ScrollManager />
      <TopBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projetos/:slug" element={<CaseStudy />} />
        {/* Rotas da versão antiga do site */}
        <Route path="/about" element={<Navigate to="/#about" replace />} />
        <Route path="/projects" element={<Navigate to="/#work" replace />} />
        <Route path="/contact" element={<Navigate to="/#contact" replace />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <LanguageProvider>
          <Shell />
        </LanguageProvider>
      </ThemeProvider>
    </BrowserRouter>
  );
}
