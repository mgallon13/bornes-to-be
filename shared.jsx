// shared.jsx — Header, Footer, tokens application, common hooks.

// ── Token presets ──────────────────────────────────────────────────────────
const ACCENT_PRESETS = {
  navy: "#1e3a5f",
  vert: "#2d6a4f",
  orange: "#c2410c",
  mono: "#1a1a1a",
  or: "#ca8a04",
  bleu: "#2563eb"
};

const BG_PRESETS = {
  warm: { bg: "#f5f4f0", bg2: "#ebeae5", fg: "#0a0a0a" },
  cool: { bg: "#f1f3f5", bg2: "#e7eaec", fg: "#0a0a0a" },
  pure: { bg: "#ffffff", bg2: "#f5f5f5", fg: "#0a0a0a" },
  dark: { bg: "#0c0c0c", bg2: "#1a1a1a", fg: "#f5f4f0" }
};

const FONT_PRESETS = {
  inter: '"Inter", system-ui, -apple-system, sans-serif',
  helvetica: '"Helvetica Neue", Helvetica, Arial, sans-serif',
  condensed: '"Barlow Condensed", "Roboto Condensed", system-ui, sans-serif',
  editorial: '"Fraunces", Georgia, serif',
  grotesk: '"Space Grotesk", "Inter", system-ui, sans-serif'
};

function hexToRgb(hex) {
  const h = hex.replace('#', '');
  const x = h.length === 3 ? h.replace(/./g, (c) => c + c) : h;
  const n = parseInt(x, 16);
  return [n >> 16 & 255, n >> 8 & 255, n & 255];
}
function accentInk(hex) {
  const [r, g, b] = hexToRgb(hex);
  return r * 299 + g * 587 + b * 114 > 148000 ? '#0a0a0a' : '#ffffff';
}

function applyTokens(t) {
  const root = document.documentElement.style;
  const bg = BG_PRESETS[t.bgTone] || BG_PRESETS.warm;
  const accent = ACCENT_PRESETS[t.accent] || t.accent || ACCENT_PRESETS.navy;
  root.setProperty('--bg', bg.bg);
  root.setProperty('--bg-2', bg.bg2);
  root.setProperty('--fg', bg.fg);
  // muted/soft/line derived from fg
  const isDark = t.bgTone === 'dark';
  if (isDark) {
    root.setProperty('--fg-muted', 'rgba(245, 244, 240, 0.55)');
    root.setProperty('--fg-soft', 'rgba(245, 244, 240, 0.78)');
    root.setProperty('--line', 'rgba(245, 244, 240, 0.10)');
    root.setProperty('--line-strong', 'rgba(245, 244, 240, 0.18)');
  } else {
    root.setProperty('--fg-muted', 'rgba(10, 10, 10, 0.58)');
    root.setProperty('--fg-soft', 'rgba(10, 10, 10, 0.78)');
    root.setProperty('--line', 'rgba(10, 10, 10, 0.10)');
    root.setProperty('--line-strong', 'rgba(10, 10, 10, 0.18)');
  }
  root.setProperty('--accent', accent);
  root.setProperty('--accent-ink', accentInk(accent));

  const fontDisp = FONT_PRESETS[t.fontDisplay] || FONT_PRESETS.inter;
  const fontBody = FONT_PRESETS[t.fontBody] || FONT_PRESETS.inter;
  root.setProperty('--font-display', fontDisp);
  root.setProperty('--font-body', fontBody);

  root.setProperty('--title-scale', String(t.titleScale ?? 1));
  root.setProperty('--density', String(t.density ?? 1));
  root.setProperty('--radius', `${t.radius ?? 4}px`);
}

// ── Hooks ─────────────────────────────────────────────────────────────────
function useScrolled(threshold = 60) {
  const [scrolled, set] = React.useState(false);
  React.useEffect(() => {
    const onScroll = () => set(window.scrollY > threshold);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [threshold]);
  return scrolled;
}

function useReveal() {
  React.useEffect(() => {
    const els = document.querySelectorAll('.reveal');
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add('in');
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.12 });
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  });
}

// ── Header ────────────────────────────────────────────────────────────────
function Header({ phone, currentPage = 'accueil', heroDark = true }) {
  const scrolled = useScrolled(80);
  const overDark = heroDark && !scrolled && currentPage === 'accueil';
  const cls = ['nav', scrolled ? 'scrolled' : '', overDark ? 'over-dark' : ''].join(' ');
  return (
    <nav className={cls}>
      <a href="index.html" className="brand">
        <span className="dot"></span>
        Bornes to Be
      </a>
      <div className="links">
        <a href="index.html" className={currentPage === 'accueil' ? 'active' : ''}>Accueil</a>
        <a href="bornes.html" className={currentPage === 'bornes' ? 'active' : ''}>Nos bornes</a>
        <a href="index.html#solaire">Solaire + borne</a>
        <a href="particuliers.html" className={currentPage === 'particuliers' ? 'active' : ''}>Particuliers</a>
        <a href="index.html#contact">Contact</a>
      </div>
      <div className="right">
        <span className="phone">{phone}</span>
        <a href="index.html#contact" className="cta-btn">Devis gratuit</a>
      </div>
    </nav>);

}

// ── Footer ────────────────────────────────────────────────────────────────
function Footer({ phone }) {
  return (
    <footer className="foot">
      <div className="wrap">
        <div className="foot-grid">
          <div>
            <div className="brand"><span className="dot"></span>Bornes to Be</div>
            <p style={{ color: 'var(--fg-soft)', fontSize: 14, marginTop: 16, maxWidth: '32ch' }}>
              Installateur certifié IRVE à Marseille. Bornes de recharge pour particuliers
              et copropriétés, intégration solaire.
            </p>
          </div>
          <div className="col">
            <h6>Solutions</h6>
            <ul>
              <li><a href="index.html#bornes">Borne murale</a></li>
              <li><a href="index.html#bornes">Borne sur pied</a></li>
              <li><a href="index.html#solaire">Solaire + borne</a></li>
              <li><a href="particuliers.html">Particuliers</a></li>
              <li><a href="index.html">Copropriétés</a></li>
            </ul>
          </div>
          <div className="col">
            <h6>Société</h6>
            <ul>
              <li><a href="index.html#confiance">Certification IRVE</a></li>
              <li><a href="index.html#confiance">Réalisations</a></li>
              <li><a href="index.html#contact">Contact</a></li>
            </ul>
          </div>
          <div className="col">
            <h6>Contact</h6>
            <ul>
              <li><a href={`tel:${(phone || '').replace(/\s/g, '')}`}>{phone}</a></li>
              <li><a href="mailto:contact@bornes-to-be.fr">contact@bornes-to-be.fr</a></li>
              <li><span>Marseille &amp; alentours</span></li>
              <li><span>Lun–Ven · 8h–19h</span></li>
            </ul>
          </div>
        </div>
        <div className="foot-bottom">
          <span>© 2026 Bornes to Be</span>
          <span>IRVE niveau 2 · SIRET 000 000 000 00000</span>
        </div>
      </div>
    </footer>);

}

// ── Section header ────────────────────────────────────────────────────────
function SecHeader({ eyebrow, title, lede, action }) {
  return (
    <div className="sec-header reveal">
      <div style={{ fontWeight: "500" }}>
        {eyebrow && <div className="eyebrow">{eyebrow}</div>}
        <h2 className="h-1" style={{ marginTop: 16, color: "rgb(0, 0, 0)" }}>{title}</h2>
      </div>
      <div>
        {lede && <p className="lede">{lede}</p>}
        {action}
      </div>
    </div>);

}

// ── Image placeholder helper ──────────────────────────────────────────────
function Slot({ id, placeholder, shape = 'rect', radius, mask }) {
  // <image-slot> is a custom element so React passes attributes through.
  const props = { id, placeholder, shape };
  if (radius != null) props.radius = String(radius);
  if (mask) props.mask = mask;
  return React.createElement('image-slot', props);
}

Object.assign(window, {
  ACCENT_PRESETS, BG_PRESETS, FONT_PRESETS,
  applyTokens, useScrolled, useReveal,
  Header, Footer, SecHeader, Slot
});