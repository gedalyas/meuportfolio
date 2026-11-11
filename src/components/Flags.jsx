// Bandeiras em SVG (emoji de bandeira não aparece no Windows). Proporção 3:2, decorativas:
// quem usa dá o nome no botão.

export const FlagBR = (props) => (
  <svg viewBox="0 0 30 20" width="24" height="16" aria-hidden="true" focusable="false" {...props}>
    <rect width="30" height="20" fill="#229e45" />
    <path d="M15 2.6 27.2 10 15 17.4 2.8 10Z" fill="#f8e509" />
    <circle cx="15" cy="10" r="4.3" fill="#2b49a3" />
    <path d="M10.9 9.1c2.9-.5 5.9.1 8.3 1.6" fill="none" stroke="#fff" strokeWidth="0.9" />
  </svg>
);

export const FlagUS = (props) => (
  <svg viewBox="0 0 30 20" width="24" height="16" aria-hidden="true" focusable="false" {...props}>
    <rect width="30" height="20" fill="#fff" />
    {[0, 2, 4, 6, 8, 10, 12].map((i) => (
      <rect key={i} y={(i * 20) / 13} width="30" height={20 / 13} fill="#b22234" />
    ))}
    <rect width="13" height={(20 / 13) * 7} fill="#3c3b6e" />
    {[1.6, 4.8, 8].map((y) =>
      [1.8, 4.8, 7.8, 10.8].map((x) => <circle key={`${x}-${y}`} cx={x} cy={y} r="0.55" fill="#fff" />),
    )}
  </svg>
);
