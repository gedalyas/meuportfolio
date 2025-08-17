import React, { useEffect, useState } from "react";
import "../design/UnifiedCard.css";

/**
 * Props:
 * - icon: ReactNode (ex.: <TbWorldCode />)
 * - frontLabel?: string
 * - backText: string
 * - bg?: string (cor/gradiente)
 */
export default function UnifiedCard({ icon, frontLabel, backText, bg }) {
  const [isTouch, setIsTouch] = useState(false);
  const [flipped, setFlipped] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(hover: none) and (pointer: coarse)");
    const update = () => setIsTouch(mq.matches);
    update();
    mq.addEventListener?.("change", update);
    return () => mq.removeEventListener?.("change", update);
  }, []);

  function toggleFlip() {
    if (isTouch) setFlipped((v) => !v);
  }

  return (
    <button
      type="button"
      className={`u-card ${flipped ? "is-flipped" : ""}`}
      style={bg ? { background: bg } : undefined}
      onClick={toggleFlip}
      aria-pressed={flipped}
      aria-label={flipped ? "Ocultar detalhes" : "Ver detalhes"}
    >
      <div className="u-card__inner">
        <div className="u-card__face u-card__front" aria-hidden={flipped}>
          <span className="u-card__icon">{icon}</span>
          {frontLabel ? <span className="u-card__frontLabel">{frontLabel}</span> : null}
        </div>
        <div className="u-card__face u-card__back" aria-hidden={!flipped}>
          <span className="u-card__backText">{backText}</span>
        </div>
      </div>
    </button>
  );
}
