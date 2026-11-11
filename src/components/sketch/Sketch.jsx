import { useLayoutEffect, useRef, useState } from 'react';
import rough from 'roughjs';

const generator = rough.generator();

/** Mede o elemento pai (o SVG ocupa 100% dele) e redesenha quando o tamanho muda. */
function useBox() {
  const ref = useRef(null);
  const [box, setBox] = useState({ w: 0, h: 0 });
  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return undefined;
    const update = () => setBox({ w: el.clientWidth, h: el.clientHeight });
    update();
    if (!('ResizeObserver' in window)) return undefined;
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);
  return [ref, box];
}

const roundedRect = (x, y, w, h, r) =>
  `M${x + r} ${y} H${x + w - r} A${r} ${r} 0 0 1 ${x + w} ${y + r} V${y + h - r} A${r} ${r} 0 0 1 ${x + w - r} ${y + h} H${x + r} A${r} ${r} 0 0 1 ${x} ${y + h - r} V${y + r} A${r} ${r} 0 0 1 ${x + r} ${y} Z`;

function drawables(shape, w, h, opts) {
  const i = 3;
  if (shape === 'diamond') {
    return [generator.polygon([[w / 2, i], [w - i, h / 2], [w / 2, h - i], [i, h / 2]], opts)];
  }
  if (shape === 'pill') {
    return [generator.path(roundedRect(i, i, w - i * 2, h - i * 2, Math.min(22, (h - i * 2) / 2)), opts)];
  }
  return [generator.rectangle(i, i, w - i * 2, h - i * 2, opts)];
}

/**
 * Contorno com traço de esboço atrás do conteúdo. Cores via variáveis CSS (aplicadas em style).
 * tone: 'default' | 'accent' (preenchimento hachurado) | 'muted'
 */
export function SketchShape({ shape = 'rect', tone = 'default', seed = 1 }) {
  const [ref, { w, h }] = useBox();
  const stroke = tone === 'muted' ? 'var(--sketch-muted)' : 'var(--sketch-stroke)';
  const opts = {
    seed,
    roughness: 1.15,
    bowing: 0.9,
    stroke,
    strokeWidth: 1.25,
    ...(tone === 'accent'
      ? { fill: 'var(--sketch-fill)', fillStyle: 'hachure', hachureGap: 6.5, hachureAngle: -41, fillWeight: 0.9 }
      : {}),
  };
  const paths = w > 8 && h > 8 ? drawables(shape, w, h, opts).flatMap((d) => generator.toPaths(d)) : [];
  return (
    <span ref={ref} className="sketch-layer" aria-hidden="true">
      <svg width={w} height={h} viewBox={`0 0 ${w} ${h}`}>
        {paths.map((p, idx) => (
          <path key={idx} d={p.d} style={{ stroke: p.stroke, strokeWidth: p.strokeWidth, fill: p.fill || 'none' }} />
        ))}
      </svg>
    </span>
  );
}

/**
 * Seta com traço de esboço. direction: 'down' | 'right' | 'elbow' (desce e vira à direita).
 * Ocupa 100% do elemento pai.
 */
export function SketchArrow({ direction = 'down', seed = 7 }) {
  const [ref, { w, h }] = useBox();
  const opts = { seed, roughness: 1, bowing: 1.2, stroke: 'var(--sketch-muted)', strokeWidth: 1.25 };
  let ds = [];
  if (w > 4 && h > 4) {
    if (direction === 'down') {
      const x = w / 2;
      ds = [
        generator.line(x, 2, x, h - 3, opts),
        generator.linearPath([[x - 5, h - 10], [x, h - 2], [x + 5, h - 10]], opts),
      ];
    } else if (direction === 'right') {
      const y = h / 2;
      ds = [
        generator.line(2, y, w - 3, y, opts),
        generator.linearPath([[w - 10, y - 5], [w - 2, y], [w - 10, y + 5]], opts),
      ];
    } else {
      const x = 6;
      const y = h - 8;
      ds = [
        generator.linearPath([[x, 2], [x, y], [w - 3, y]], opts),
        generator.linearPath([[w - 10, y - 5], [w - 2, y], [w - 10, y + 5]], opts),
      ];
    }
  }
  const paths = ds.flatMap((d) => generator.toPaths(d));
  return (
    <span ref={ref} className="sketch-layer" aria-hidden="true">
      <svg width={w} height={h} viewBox={`0 0 ${w} ${h}`}>
        {paths.map((p, idx) => (
          <path key={idx} d={p.d} style={{ stroke: p.stroke, strokeWidth: p.strokeWidth, fill: 'none' }} />
        ))}
      </svg>
    </span>
  );
}
