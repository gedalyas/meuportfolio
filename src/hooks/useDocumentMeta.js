import { useEffect } from 'react';

const SITE = 'Davi Almeida';

/** Título da aba e meta description por página. */
export default function useDocumentMeta(title, description) {
  useEffect(() => {
    document.title = title ? `${title} · ${SITE}` : `${SITE} · Software & Data`;
    if (description) {
      let tag = document.querySelector('meta[name="description"]');
      if (!tag) {
        tag = document.createElement('meta');
        tag.setAttribute('name', 'description');
        document.head.appendChild(tag);
      }
      tag.setAttribute('content', description);
    }
  }, [title, description]);
}
