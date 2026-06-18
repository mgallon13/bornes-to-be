// accueil.jsx — Accueil page sections.

const PHONE = "06 52 91 65 78";

// ── Hero ──────────────────────────────────────────────────────────────────
function Hero({ variant }) {
  return (
    <section className="hero" data-variant={variant}>
      <div className="hero-media">
        <video
          className="hero-video"
          src="uploads/9790137-hd_1920_1080_30fps.mp4"
          autoPlay
          muted
          loop
          playsInline
          preload="auto" />
      </div>
      <div className="hero-overlay"></div>
      <div className="hero-meta">
        <span>Marseille · IRVE</span>
        <span>—</span>
        <span>Sans reste à charge possible</span>
      </div>
      <div className="hero-content">
        <div className="eyebrow">Mobilité électrique en copropriété · Marseille</div>
        <h1 className="h-display" style={{ textAlign: "center", fontWeight: "300", color: "rgb(244, 244, 244)", letterSpacing: "-0.045em", lineHeight: "1.08" }}>
          Des bornes pour votre résidence, sans souci.
        </h1>
        <p className="lede" style={{ marginTop: 24, color: variant === 'fullbleed' ? 'rgba(255,255,255,.85)' : undefined, maxWidth: '46ch' }}>
          On équipe votre copropriété en bornes de recharge, de l'assemblée générale à
          la mise en service. Montage des aides, passage en AG, installation par nos
          électriciens certifiés IRVE. Le syndic n'a rien à piloter.
        </p>
        <div className="hero-cta">
          <a href="coproprietes.html#contact" className="btn btn-light" style={{ color: "rgb(0, 0, 0)" }}>Demander un audit gratuit →</a>
          <a href="coproprietes.html" className="btn btn-clear">Notre accompagnement copro</a>
        </div>
      </div>
      {variant === 'fullbleed' &&
      <div className="hero-scroll"><span>Scroll</span><span>↓</span></div>
      }
    </section>);

}

// ── Trust strip ───────────────────────────────────────────────────────────
function Trust() {
  return (
    <section className="trust" id="confiance">
      <div className="wrap">
        <div className="trust-grid">
          <div className="irve reveal">
            <span className="eyebrow">Notre réseau</span>
            <div className="irve-badge">
              <span className="seal">✓</span>
              <span className="label">
                <b>Électriciens certifiés IRVE</b>
                <span>Partenaires qualifiés Qualifelec · Attestation Consuel</span>
              </span>
            </div>
          </div>
          <div className="stat reveal">
            <div className="num">0<span className="sup">€</span></div>
            <div className="lbl">Reste à charge possible pour le syndic (modèle opérateur)</div>
          </div>
          <div className="stat reveal">
            <div className="num">50<span className="sup">%</span></div>
            <div className="lbl">du coût HT financé par la prime ADVENIR</div>
          </div>
          <div className="stat reveal">
            <div className="num">100<span className="sup">%</span></div>
            <div className="lbl">des démarches gérées : audit, aides, AG, installation</div>
          </div>
        </div>
      </div>
    </section>);

}

// ── Bornes / clients ──────────────────────────────────────────────────────
function BornesSection({ cardStyle }) {
  return (
    <section className="section" id="bornes" style={{ color: "rgb(46, 168, 184)" }}>
      <div className="wrap">
        <SecHeader
          eyebrow="Nos solutions"
          title="La borne dépend de votre installation, pas de notre stock."
          lede="Trois grandes situations, trois approches différentes. Nous diagnostiquons d'abord, nous recommandons ensuite." />
        
        <div className="cards" data-style={cardStyle}>
          <article className="card reveal">
            <div className="media">
              <img src="uploads/borne-murale.jpg" alt="Borne murale installée" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
            </div>
            <div className="body">
              <div className="meta">
                <span className="tag">Murale</span>
                <span className="idx">01 / 03</span>
              </div>
              <h3 className="ttl"><span className="mark">Borne murale</span></h3>
              <p className="desc">
                Maison individuelle, garage, box en copropriété. Discrète, rapide
                à installer, idéale pour un usage quotidien.
              </p>
              <ul className="features">
                <li>Puissance 3.7 à 22 kW selon votre tableau</li>
                <li>Pilotage via application dédiée</li>
                <li>Installation en demi-journée</li>
              </ul>
              <div className="footer">
                <a href="#contact" className="btn-link">Étudier mon cas <span className="arr">↗</span></a>
              </div>
            </div>
          </article>

          <article className="card reveal">
            <div className="media">
              <img src="uploads/borne-sur-pied.jpg" alt="Borne sur pied en parking de résidence" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: '70% 20%', display: 'block' }} />
            </div>
            <div className="body">
              <div className="meta">
                <span className="tag">Sur pied</span>
                <span className="idx">02 / 03</span>
              </div>
              <h3 className="ttl"><span className="mark">Borne sur pied</span></h3>
              <p className="desc">
                Parking de copropriété, espace commun, aire de recharge partagée.
                Robuste, multi-usage, conçue pour le collectif.
              </p>
              <ul className="features">
                <li>Double prise pour usage simultané</li>
                <li>Gestion des accès par badge ou QR code</li>
                <li>Refacturation automatique aux résidents</li>
              </ul>
              <div className="footer">
                <a href="#contact" className="btn-link">Étudier mon cas <span className="arr">↗</span></a>
              </div>
            </div>
          </article>
        </div>

        <article className="card reveal" style={{ marginTop: 32 }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', minHeight: 360 }} className="solar-feat">
            <div className="media" style={{ aspectRatio: 'auto' }}>
              <img src="uploads/borne-solaire.png" alt="Borne connectée à des panneaux solaires" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
            </div>
            <div className="body" style={{ padding: '48px 48px' }}>
              <div className="meta">
                <span className="tag" style={{ color: 'var(--accent)' }}>★ Notre expertise</span>
                <span className="idx">03 / 03</span>
              </div>
              <h3 className="ttl" style={{ fontSize: 'calc(clamp(26px, 2.2vw, 34px) * var(--title-scale))' }}>
                <span className="mark">Borne connectée à vos panneaux solaires</span>
              </h3>
              <p className="desc">
                Pour les particuliers avec installation solaire existante ou en
                projet. Rechargez votre véhicule avec l'énergie produite chez vous —
                gratuite, propre, locale.
              </p>
              <ul className="features">
                <li>Modulation automatique selon votre production solaire</li>
                <li>Priorité au surplus, complément réseau si besoin</li>
                <li>Supervision énergétique mensuelle</li>
              </ul>
              <div className="footer">
                <a href="#contact" className="btn-link">Étudier mon installation <span className="arr">↗</span></a>
              </div>
            </div>
          </div>
        </article>
      </div>
    </section>);

}

// ── Clients (particuliers / copropriétés) ─────────────────────────────────
function ClientsSection() {
  return (
    <section className="section" style={{ background: 'var(--bg-2)' }}>
      <div className="wrap">
        <SecHeader
          eyebrow="Pour qui"
          title="Particuliers ou copropriétés — l'approche change, l'exigence reste."
          lede="Deux contextes, deux interlocuteurs, deux process. Nous adaptons l'étude, le devis et l'installation à ce que vous êtes." />
        
        <div className="cards" data-style="editorial">
          <a href="particuliers.html" className="card reveal" style={{ background: 'var(--bg)' }}>
            <div className="media" style={{ aspectRatio: '4/3' }}>
              <Slot id="cli-part" placeholder="Maison individuelle, voiture branchée, fin de journée" />
            </div>
            <div className="body">
              <div className="meta">
                <span className="tag">Particuliers</span>
                <span className="idx">01</span>
              </div>
              <h3 className="ttl">Une borne chez vous, en quinze jours.</h3>
              <p className="desc">
                Maison, garage ou box en résidence. On gère la visite technique,
                les démarches, l'installation, et le SAV. Vous récupérez les clés
                de votre nouvelle routine de recharge.
              </p>
              <div className="footer" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span className="btn-link">Voir la page Particuliers <span className="arr">↗</span></span>
                <span className="mono small">Délai · 15 j</span>
              </div>
            </div>
          </a>

          <a href="#contact" className="card reveal" style={{ background: 'var(--bg)' }}>
            <div className="media" style={{ aspectRatio: '4/3' }}>
              <Slot id="cli-copro" placeholder="Parking de copropriété, plusieurs bornes alignées" />
            </div>
            <div className="body">
              <div className="meta">
                <span className="tag">Copropriétés</span>
                <span className="idx">02</span>
              </div>
              <h3 className="ttl">Une infrastructure collective, propre et évolutive.</h3>
              <p className="desc">
                Étude en assemblée, raccordement aux parties communes, gestion
                des accès et refacturation. Une installation qui anticipe les
                cinq prochains résidents qui passeront à l'électrique.
              </p>
              <div className="footer" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span className="btn-link">Demander un audit copro <span className="arr">↗</span></span>
                <span className="mono small">Sur devis</span>
              </div>
            </div>
          </a>
        </div>
      </div>
    </section>);

}

// ── Contact ───────────────────────────────────────────────────────────────
function ContactSection() {
  const [type, setType] = React.useState('particulier');
  const [sent, setSent] = React.useState(false);
  const onSubmit = (e) => {
    e.preventDefault();
    setSent(true);
  };
  return (
    <section className="contact" id="contact">
      <div className="wrap">
        <div className="grid">
          <div className="reveal">
            <div className="eyebrow">Contact</div>
            <h2 className="h-1" style={{ marginTop: 16 }}>
              Parlons de votre installation.
            </h2>
            <p className="lede">
              Décrivez-nous votre situation en quelques lignes. Nous vous rappelons
              sous 24h ouvrées avec une première estimation et les questions
              techniques utiles.
            </p>
            <div className="reach">
              <a href={`tel:${PHONE.replace(/\s/g, '')}`}>
                <span><span className="k">Téléphone</span><br />{PHONE}</span>
                <span>↗</span>
              </a>
              <a href="mailto:contact@bornes-to-be.fr">
                <span><span className="k">Email</span><br />contact@bornes-to-be.fr</span>
                <span>↗</span>
              </a>
              <a href="#">
                <span><span className="k">Zone d'intervention</span><br />Marseille &amp; alentours (50 km)</span>
                <span>↗</span>
              </a>
            </div>
          </div>

          <div className="form reveal">
            {sent ?
            <div className="success">
                <div className="check">✓</div>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: 24, letterSpacing: '-0.02em' }}>
                  Demande envoyée.
                </div>
                <p style={{ color: 'rgba(255,255,255,.7)', maxWidth: '34ch', margin: '12px auto 0' }}>
                  Nous vous rappelons sous 24h ouvrées. En attendant, vous pouvez
                  nous joindre directement au {PHONE}.
                </p>
              </div> :

            <form onSubmit={onSubmit}>
                <div className="field" style={{ marginBottom: 18 }}>
                  <label>Mon projet est…</label>
                  <div className="segmented">
                    <button type="button" className={`seg-opt ${type === 'particulier' ? 'active' : ''}`} onClick={() => setType('particulier')}>Particulier</button>
                    <button type="button" className={`seg-opt ${type === 'copro' ? 'active' : ''}`} onClick={() => setType('copro')}>Copropriété</button>
                    <button type="button" className={`seg-opt ${type === 'autre' ? 'active' : ''}`} onClick={() => setType('autre')}>Autre</button>
                  </div>
                </div>
                <div className="row">
                  <div className="field">
                    <label>Prénom</label>
                    <input type="text" placeholder="Marie" required />
                  </div>
                  <div className="field">
                    <label>Nom</label>
                    <input type="text" placeholder="Dupont" required />
                  </div>
                </div>
                <div className="row">
                  <div className="field">
                    <label>Email</label>
                    <input type="email" placeholder="marie@exemple.fr" required />
                  </div>
                  <div className="field">
                    <label>Téléphone</label>
                    <input type="tel" placeholder="06 …" required />
                  </div>
                </div>
                <div className="field" style={{ marginBottom: 18 }}>
                  <label>Votre projet en quelques lignes</label>
                  <textarea placeholder="Type de logement, véhicule, panneaux solaires existants ou en projet, contraintes…" required />
                </div>
                <div className="submit-row">
                  <span className="small">Réponse sous 24h ouvrées. Aucune donnée commerciale tierce.</span>
                  <button type="submit">Envoyer ma demande →</button>
                </div>
              </form>
            }
          </div>
        </div>
      </div>
    </section>);

}

// ── TVA banner ────────────────────────────────────────────────────────────
function TvaBanner() {
  return (
    <div className="tva-banner">
      <div className="wrap">
        <div className="tva-inner">
          <div className="tva-badge">TVA 5,5 %</div>
          <div className="tva-text">
            <strong>Avantage fiscal sur votre installation.</strong>
            Fourniture et pose de votre borne par un installateur certifié IRVE : TVA réduite à 5,5 % au lieu de 20 %.
          </div>
          <a href="#contact" className="btn btn-ghost tva-cta">Obtenir mon devis →</a>
        </div>
      </div>
    </div>
  );
}

Object.assign(window, {
  Hero, Trust, TvaBanner, SolarSection, BornesSection, ClientsSection, ContactSection,
  PHONE
});