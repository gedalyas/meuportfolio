import React from 'react';
import styled from 'styled-components';

const ProjectOne = ({ title, description, tags = [], cover, href }) => {
  const CardContent = (
    <article className="article-wrapper">
      <div className="rounded-lg container-project">
        {cover ? (
          <img src={cover} alt={`Capa do projeto ${title}`} className="cover-img" />
        ) : (
          <div className="cover-fallback">Sem imagem</div>
        )}
      </div>

      <div className="project-info">
        <div className="flex-pr">
          {/* NOME — NÃO traduzir */}
          <h3 className="project-title notranslate" translate="no">
            {title}
          </h3>

          <div className="project-hover" aria-hidden>
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22"
              strokeLinejoin="round" strokeLinecap="round" viewBox="0 0 24 24"
              strokeWidth={2} fill="none" stroke="currentColor">
              <line y2={12} x2={19} y1={12} x1={5} />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </div>
        </div>

        {/* DESCRIÇÃO — permitir tradução */}
        {description && (
          <p className="project-desc" translate="yes">
            {description}
          </p>
        )}

        {/* TAGS — NÃO traduzir */}
        {!!tags.length && (
          <div className="types notranslate" translate="no">
            {tags.map((t, i) => (
              <span key={i} className="project-type">{t}</span>
            ))}
          </div>
        )}
      </div>
    </article>
  );

  return (
    <StyledWrapper>
      {href ? (
        <a
          className="card-link"
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Abrir ${title}`}
        >
          {CardContent}
        </a>
      ) : (
        CardContent
      )}
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  /* ===== Config da animação “offset” ===== */
  --shift: 14px;
  
  /* 🔒 Garante que o wrapper não ultrapasse o container pai */
  width: 100%;
  max-width: 100%;
  box-sizing: border-box;

  .card-link { display:block; color:inherit; text-decoration:none; width: 100%; max-width: 100%; }

  .article-wrapper {
    position: relative;
    z-index: 0;
    width: 100%;
    max-width: 100%;          /* 🔒 não ultrapassa container */
    box-sizing: border-box;   /* 🔒 inclui border no cálculo de largura */
    border-radius: 14px;
    border: 1px solid rgba(255,255,255,.15);
    background: #fff;
    overflow: hidden;
    transition: transform .18s ease, box-shadow .18s ease, border-color .18s ease;
    will-change: transform, box-shadow;
    cursor: pointer;
  }
  .article-wrapper:hover {
    transform: translate(calc(-1 * var(--shift)), calc(-1 * var(--shift)));
    box-shadow:
      var(--shift) var(--shift) 0 #4e84ff,
      calc(var(--shift) * 2) calc(var(--shift) * 2) 0 #4444bd;
    border-color: #0578c5;
    z-index: 3;
  }

  .project-hover {
    flex: 0 0 auto;
    border-radius: 999px;
    width: 36px; height: 36px;
    display:grid; place-items:center;
    transition: transform .25s ease, background-color .25s ease;
  }
  .article-wrapper:hover .project-hover {
    transform: rotate(-45deg) translateX(2px);
    background-color: #e6eefc;
  }

  .container-project { width: 100%; aspect-ratio: 16 / 9; background: #e5e7eb; position: relative; }
  .cover-img { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; display:block; }
  .cover-fallback { width:100%; height:100%; display:grid; place-items:center; color:#6b7280; font-size:.95rem; }

  .project-info { padding: 14px 14px 16px; display:flex; flex-direction:column; gap:10px; }
  .flex-pr { display:flex; align-items:center; justify-content:space-between; gap:10px; }

  .project-title {
    margin: 0; font-weight: 700;
    font-size: clamp(1rem, 0.9rem + 0.4vw, 1.25rem);
    color: #0f172a;
    white-space: nowrap; overflow: hidden; text-overflow: ellipsis;
  }

  .project-desc {
    margin: 0; color:#334155; font-size: .95rem; line-height: 1.35;
    display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden;
  }

  .types { display:flex; flex-wrap:wrap; gap: 8px; }
  .project-type {
    background: #eef2ff; color: #1e3a8a; font-weight: 600;
    padding: .28em .6em; border-radius: 999px; font-size: 12px; letter-spacing: -.2px; white-space: nowrap;
  }

  /* Garante que o conteúdo com .notranslate fique isolado (evita interferência de libs de tradução) */
  .notranslate { unicode-bidi: isolate; }

  @media (max-width: 1100px) { :root & { --shift: 10px; } }
  @media (max-width: 768px)  { 
    :root & { --shift: 4px; }  /* 🔒 reduz deslocamento no mobile */
    
    /* 🔒 Reduz tamanho do card no mobile */
    .article-wrapper {
      width: calc(100vw - 56px);   /* 🔒 largura bem reduzida */
      max-width: 300px;            /* 🔒 máximo menor */
      margin: 0 auto;
    }
    
    .container-project {
      aspect-ratio: 16 / 8;        /* 🔒 imagem mais baixa */
    }
    
    .project-info {
      padding: 8px;                /* 🔒 padding mínimo */
    }
    
    .flex-pr {
      gap: 6px;                    /* 🔒 reduz gap */
    }
    
    .project-title {
      font-size: 0.875rem;         /* 🔒 título menor */
    }
    
    .project-desc {
      font-size: 0.75rem;          /* 🔒 descrição bem menor */
      line-height: 1.25;
      -webkit-line-clamp: 2;
    }
    
    .project-type {
      font-size: 9px;              /* 🔒 tags bem pequenas */
      padding: 0.18em 0.4em;
    }
    
    .types {
      gap: 4px;                    /* 🔒 gap mínimo entre tags */
    }
    
    .project-hover {
      width: 28px;                 /* 🔒 ícone menor */
      height: 28px;
    }
    
    .project-hover svg {
      width: 18px;
      height: 18px;
    }
    
    /* 🔒 Remove o efeito de deslocamento no mobile para evitar overflow */
    .article-wrapper:hover {
      transform: none;
      box-shadow: 0 4px 12px rgba(78, 132, 255, 0.3);
      border-color: #0578c5;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .article-wrapper { transition: none; }
    .article-wrapper:hover { transform: none; box-shadow: none; }
    .project-hover { transition: none; }
  }
`;

export default ProjectOne;
