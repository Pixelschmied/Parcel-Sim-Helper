/* Kleine SVG-Flaggen für die Sprachauswahl.
   Bewusst vereinfacht — sie werden nur ~26 px breit angezeigt.
   Diese Flaggen gehören zur Oberfläche und sind keine Spiel-Assets. */

function starPath(cx, cy, r, rot) {
  let d = '';
  for (let i = 0; i < 10; i++) {
    const rad = (i % 2 ? r * 0.382 : r);
    const a = (rot + i * 36) * Math.PI / 180;
    d += (i ? 'L' : 'M') + (cx + rad * Math.sin(a)).toFixed(2) + ' ' +
         (cy - rad * Math.cos(a)).toFixed(2) + ' ';
  }
  return d + 'Z';
}

const FLAGS = {

  de: `<rect width="60" height="13.33" fill="#000"/>
       <rect y="13.33" width="60" height="13.33" fill="#D00"/>
       <rect y="26.66" width="60" height="13.34" fill="#FFCE00"/>`,

  gb: `<rect width="60" height="40" fill="#012169"/>
       <path d="M0 0 60 40M60 0 0 40" stroke="#fff" stroke-width="8"/>
       <path d="M0 0 60 40M60 0 0 40" stroke="#C8102E" stroke-width="4"/>
       <path d="M30 0v40M0 20h60" stroke="#fff" stroke-width="13"/>
       <path d="M30 0v40M0 20h60" stroke="#C8102E" stroke-width="8"/>`,

  fr: `<rect width="20" height="40" fill="#002395"/>
       <rect x="20" width="20" height="40" fill="#F5F5F5"/>
       <rect x="40" width="20" height="40" fill="#ED2939"/>`,

  es: `<rect width="60" height="40" fill="#AA151B"/>
       <rect y="10" width="60" height="20" fill="#F1BF00"/>`,

  mx: `<rect width="20" height="40" fill="#006847"/>
       <rect x="20" width="20" height="40" fill="#F5F5F5"/>
       <rect x="40" width="20" height="40" fill="#CE1126"/>
       <circle cx="30" cy="20" r="6" fill="none" stroke="#8B5A2B" stroke-width="2.2"/>
       <circle cx="30" cy="20" r="2.4" fill="#8B5A2B"/>`,

  br: `<rect width="60" height="40" fill="#009B3A"/>
       <path d="M30 4 56 20 30 36 4 20Z" fill="#FEDF00"/>
       <circle cx="30" cy="20" r="8.5" fill="#002776"/>
       <path d="M21.9 17.4a8.5 8.5 0 0 0 16.4 3.6" fill="none" stroke="#F5F5F5" stroke-width="2.4"/>`,

  it: `<rect width="20" height="40" fill="#008C45"/>
       <rect x="20" width="20" height="40" fill="#F4F5F0"/>
       <rect x="40" width="20" height="40" fill="#CD212A"/>`,

  pl: `<rect width="60" height="20" fill="#F5F5F5"/>
       <rect y="20" width="60" height="20" fill="#DC143C"/>`,

  ru: `<rect width="60" height="13.33" fill="#F5F5F5"/>
       <rect y="13.33" width="60" height="13.33" fill="#0039A6"/>
       <rect y="26.66" width="60" height="13.34" fill="#D52B1E"/>`,

  cn: `<rect width="60" height="40" fill="#DE2910"/>
       <path d="${starPath(11, 11, 7, 0)}" fill="#FFDE00"/>
       <path d="${starPath(22, 4.5, 2.4, 24)}" fill="#FFDE00"/>
       <path d="${starPath(26.5, 9.5, 2.4, 46)}" fill="#FFDE00"/>
       <path d="${starPath(26.5, 16.5, 2.4, 70)}" fill="#FFDE00"/>
       <path d="${starPath(22, 21.5, 2.4, 24)}" fill="#FFDE00"/>`,

  jp: `<rect width="60" height="40" fill="#F5F5F5"/>
       <circle cx="30" cy="20" r="11" fill="#BC002D"/>`,

  kr: `<rect width="60" height="40" fill="#F5F5F5"/>
       <g transform="rotate(-33 30 20)">
         <path d="M30 10a10 10 0 0 1 0 20 5 5 0 0 1 0-10 5 5 0 0 0 0-10Z" fill="#CD2E3A"/>
         <path d="M30 10a10 10 0 0 0 0 20 5 5 0 0 0 0-10 5 5 0 0 1 0-10Z" fill="#0047A0"/>
       </g>
       <g fill="#111">
         <rect x="7"  y="7"  width="9" height="1.5"/><rect x="7"  y="10" width="9" height="1.5"/><rect x="7"  y="13" width="9" height="1.5"/>
         <rect x="44" y="26" width="9" height="1.5"/><rect x="44" y="29" width="9" height="1.5"/><rect x="44" y="32" width="9" height="1.5"/>
         <rect x="44" y="7"  width="9" height="1.5"/><rect x="44" y="10" width="3.7" height="1.5"/><rect x="49.3" y="10" width="3.7" height="1.5"/><rect x="44" y="13" width="9" height="1.5"/>
         <rect x="7"  y="26" width="3.7" height="1.5"/><rect x="12.3" y="26" width="3.7" height="1.5"/><rect x="7" y="29" width="9" height="1.5"/><rect x="7" y="32" width="3.7" height="1.5"/><rect x="12.3" y="32" width="3.7" height="1.5"/>
       </g>`
};

function flagSvg(code, cls) {
  return `<svg class="${cls || 'flag'}" viewBox="0 0 60 40" preserveAspectRatio="xMidYMid meet"
            role="presentation" focusable="false">${FLAGS[code] || ''}</svg>`;
}
