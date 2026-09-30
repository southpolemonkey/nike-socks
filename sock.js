/* ---------------- SOCK SVG ---------------- */
const SOCK_PATH =
  "M78,12 H158 V158 C158,184 155,204 147,216 C140,227 127,232 110,232 H58 C32,232 16,220 16,203 C16,186 31,178 51,175 C69,172 78,162 78,146 Z";

const SWOOSH =
  "M23.7.3 6.2 7.8C4.7 8.4 3.5 8.7 2.5 8.7 1.3 8.7.5 8.2.2 7.3 0 6.7 0 6 .3 5.2.6 4.4 1 3.7 1.7 2.9c-.3.6-.6 1.5-.2 2.2.3.5.9.8 1.8.8.7 0 1.5-.2 2.4-.5L23.7.3Z";

let uid = 0;
export function sockSVG(c, opts = {}) {
  const id = "s" + uid++;
  const { flip = false, stripes = true } = opts;
  return `
<svg class="sock" viewBox="0 0 240 248" role="img" aria-label="Sock in ${c.name}"
     style="${flip ? "transform:scaleX(-1)" : ""}">
  <defs>
    <clipPath id="clip-${id}"><path d="${SOCK_PATH}"/></clipPath>
    <linearGradient id="sh-${id}" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0" stop-color="#000" stop-opacity=".34"/>
      <stop offset=".35" stop-color="#fff" stop-opacity=".16"/>
      <stop offset=".72" stop-color="#000" stop-opacity="0"/>
      <stop offset="1" stop-color="#000" stop-opacity=".3"/>
    </linearGradient>
    <pattern id="rib-${id}" width="8" height="8" patternUnits="userSpaceOnUse">
      <rect width="3.2" height="8" fill="#000" opacity=".14"/>
    </pattern>
    <pattern id="knit-${id}" width="6" height="6" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
      <rect width="6" height="2.2" fill="#fff" opacity=".07"/>
    </pattern>
  </defs>

  <g clip-path="url(#clip-${id})">
    <rect width="240" height="248" fill="${c.body}"/>
    <rect width="240" height="248" fill="url(#knit-${id})"/>

    <!-- heel cap -->
    <circle cx="172" cy="194" r="52" fill="${c.cuff}"/>
    <!-- toe cap -->
    <rect x="0" y="150" width="48" height="98" fill="${c.cuff}"/>
    <rect x="48" y="150" width="5" height="98" fill="${c.accent}"/>
    <!-- footbed cushion -->
    <rect x="0" y="214" width="240" height="34" fill="#000" opacity=".16"/>

    <!-- cuff -->
    <rect x="70" y="0" width="100" height="52" fill="${c.cuff}"/>
    <rect x="70" y="0" width="100" height="52" fill="url(#rib-${id})"/>
    ${
      stripes
        ? `<rect x="70" y="52" width="100" height="10" fill="${c.stripe}"/>
           <rect x="70" y="68" width="100" height="5" fill="${c.accent}"/>
           <rect x="70" y="79" width="100" height="10" fill="${c.stripe}"/>`
        : ""
    }

    <!-- ribbed leg texture -->
    <rect x="70" y="89" width="100" height="70" fill="url(#rib-${id})" opacity=".35"/>

    <rect width="240" height="248" fill="url(#sh-${id})"/>
  </g>

  <path d="${SOCK_PATH}" fill="none" stroke="rgba(0,0,0,.5)" stroke-width="2.5"/>

  <!-- swoosh -->
  <g transform="translate(94 112) scale(2)" fill="${c.mark}">
    <path d="${SWOOSH}"/>
  </g>
</svg>`;
}

/* ---------------- COLORWAYS ---------------- */
export const COLORWAYS = [
  { name: "Volt Strike", body: "#d8ff00", cuff: "#08080a", stripe: "#08080a", accent: "#ff1f8f", mark: "#08080a", hex: "#d8ff00" },
  { name: "Hyper Pink",  body: "#ff1f8f", cuff: "#fff",    stripe: "#08080a", accent: "#d8ff00", mark: "#fff",    hex: "#ff1f8f" },
  { name: "Laser Cyan",  body: "#00e9ff", cuff: "#08080a", stripe: "#fff",    stripeAlt: "#000", accent: "#ff5c00", mark: "#08080a", hex: "#00e9ff" },
  { name: "Solar Flare", body: "#ff5c00", cuff: "#08080a", stripe: "#d8ff00", accent: "#00e9ff", mark: "#fff",    hex: "#ff5c00" },
  { name: "Ultraviolet", body: "#8b5cff", cuff: "#d8ff00", stripe: "#08080a", accent: "#00e9ff", mark: "#d8ff00", hex: "#8b5cff" },
  { name: "Blackout",    body: "#141418", cuff: "#08080a", stripe: "#d8ff00", accent: "#ff1f8f", mark: "#d8ff00", hex: "#1d1d22" },
];
