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
        <span>Installateur certifié</span>
      </div>
      <div className="hero-content">
        <div className="eyebrow">Bornes de recharge · Marseille</div>
        <h1 className="h-display" style={{ textAlign: "center", fontWeight: "300", color: "rgb(244, 244, 244)", letterSpacing: "-0.045em", lineHeight: "1.08" }}>
          La borne qui s'adapte à votre projet.
        </h1>
        <p className="lede" style={{ marginTop: 24, color: variant === 'fullbleed' ? 'rgba(255,255,255,.85)' : undefined, maxWidth: '46ch' }}>Votre véhicule, votre installation, vos habitudes de conduite, on analyse tout ça avant de vous proposer une solution. Parce qu'une mauvaise borne bien installée, c'est quand même une mauvaise borne



        </p>
        <div className="hero-cta">
          <a href="#contact" className="btn btn-light" style={{ color: "rgb(0, 0, 0)" }}>Demander un devis gratuit →</a>
          <a href="#bornes" className="btn btn-clear">Découvrir nos solutions</a>
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
            <span className="eyebrow">Certification</span>
            <div className="irve-badge">
              <span className="seal">✓</span>
              <span className="label">
                <b>IRVE niveau 2</b>
                <span>Habilitation Qualifelec · Renouvelée 2026</span>
              </span>
            </div>
          </div>
          <div className="stat reveal">
            <div className="num">240<span className="sup">+</span></div>
            <div className="lbl">Installations réalisées depuis 2022</div>
          </div>
          <div className="stat reveal">
            <div className="num">15<span className="sup">j</span></div>
            <div className="lbl">Délai moyen entre devis et installation</div>
          </div>
          <div className="stat reveal">
            <div className="num">100<span className="sup">%</span></div>
            <div className="lbl">Interventions sur Marseille et alentours</div>
          </div>
        </div>
      </div>
    </section>);

}

// ── Solar — animated schema ───────────────────────────────────────────────
const SolarIcons = {
  Sun:
  <svg viewBox="0 0 48 48">
      <circle cx="24" cy="24" r="9" />
      <path d="M24 6v4M24 38v4M6 24h4M38 24h4M11 11l3 3M34 34l3 3M11 37l3-3M34 14l3-3" />
    </svg>,

  Panel:
  <svg viewBox="0 0 48 48">
      <path d="M10 12h28l-4 22H14z" />
      <path d="M17 12l-1 22M24 12v22M31 12l1 22M12 23h24" />
      <path d="M24 34v8M18 42h12" />
    </svg>,

  Charger:
  <svg viewBox="0 0 48 48">
      <rect x="14" y="8" width="20" height="28" rx="2" />
      <path d="M20 16h8M20 22h8" />
      <path d="M24 36v6M19 42h10" />
      <circle cx="24" cy="29" r="2" />
    </svg>,

  Car:
  <svg viewBox="0 0 48 48">
      <path d="M8 30h32v-6l-4-10H12l-4 10z" />
      <circle cx="16" cy="34" r="3" />
      <circle cx="32" cy="34" r="3" />
      <path d="M14 20h20" />
    </svg>

};

function SolarSchema() {
  return (
    <div className="schema reveal" style={{ borderStyle: "solid", borderColor: "rgba(0, 0, 0, 0.1)" }}>
      <div className="schema-track">
        <div className="schema-flow"></div>
      </div>
      <div className="schema-node">
        <div className="glyph">{SolarIcons.Sun}<div className="pulse"></div></div>
        <div className="ttl">Soleil</div>
        <div className="sub">Énergie gratuite</div>
      </div>
      <div className="schema-node">
        <div className="glyph">{SolarIcons.Panel}<div className="pulse"></div></div>
        <div className="ttl">Panneaux</div>
        <div className="sub">Production locale</div>
      </div>
      <div className="schema-node">
        <div className="glyph">{SolarIcons.Charger}<div className="pulse"></div></div>
        <div className="ttl">Borne pilotée</div>
        <div className="sub">Recharge intelligente</div>
      </div>
      <div className="schema-node">
        <div className="glyph">{SolarIcons.Car}<div className="pulse"></div></div>
        <div className="ttl">Véhicule</div>
        <div className="sub">100% énergie maison</div>
      </div>
    </div>);

}

function SolarSection({ variant }) {
  return (
    <section className="solar" id="solaire" data-variant={variant}>
      <div className="wrap solar-inner">
        <div className="solar-claim reveal">
          <div>
            <div className="eyebrow">Différenciateur</div>
            <h2 className="h-1" style={{ marginTop: 16, color: "rgb(0, 0, 0)" }}>
              Vos panneaux. Votre voiture. Un seul système.
            </h2>
          </div>
          <div className="copy">
            <p className="lede">
              Vous avez déjà des panneaux solaires, ou un projet en cours ? Nous connectons
              votre borne directement à votre installation. Vous rechargez votre véhicule
              avec votre propre énergie — pas celle du réseau.
            </p>
            <p className="body">C'est une expertise que peu d'installateurs maîtrisent. Nous l'avons développée pour les particuliers qui veulent aller au bout de la cohérence énergétique : produire chez soi, consommer chez soi, rouler serein.



            </p>
            <div style={{ display: 'flex', gap: 16, marginTop: 8 }}>
              <a href="#contact" className="btn-link">
                Étudier mon installation <span className="arr">↗</span>
              </a>
            </div>
          </div>
        </div>

        {variant === 'schema' && <SolarSchema />}

        {variant === 'immersive' &&
        <div className="immersive-media reveal">
            <Slot id="solar-immersive"
          placeholder="Maison avec panneaux en toiture + borne dans le garage" />
            <div className="immersive-cap">
              <div>
                <div className="eyebrow" style={{ color: 'rgba(255,255,255,.75)' }}>

              </div>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: 22, marginTop: 6 }}>

              </div>
              </div>
              <div className="mono" style={{ fontSize: 12, opacity: .8 }}>
                6 kWc · borne 7.4 kW pilotée
              </div>
            </div>
          </div>
        }

        {variant === 'editorial' &&
        <div className="editorial reveal">
            <div className="ed-claim">
              <div className="eyebrow">En moyenne</div>
              <div className="ed-claim-n">70<span className="ed-claim-u">%</span></div>
              <div className="ed-claim-l">
                de votre recharge couverte par votre propre production solaire, sur une année.
              </div>
              <div className="ed-claim-foot">
                <span className="mono">Estimation · maison 6 kWc, 12 000 km / an</span>
              </div>
            </div>
            <div className="ed-steps">
              <div className="ed-step">
                <span className="n">01</span>
                <div>
                  <b>Diagnostic complet</b>
                  <p>On regarde votre tableau, votre toiture, votre véhicule et votre routine.</p>
                </div>
              </div>
              <div className="ed-step">
                <span className="n">02</span>
                <div>
                  <b>Borne pilotable</b>
                  <p>Sélection d'une borne capable de moduler sa puissance selon la production solaire.</p>
                </div>
              </div>
              <div className="ed-step">
                <span className="n">03</span>
                <div>
                  <b>Câblage propre</b>
                  <p>Liaison directe au tableau, gestion du surplus, supervision via votre téléphone.</p>
                </div>
              </div>
              <div className="ed-step">
                <span className="n">04</span>
                <div>
                  <b>Suivi six mois</b>
                  <p>On vérifie ensemble que la borne consomme bien votre énergie en priorité.</p>
                </div>
              </div>
            </div>
          </div>
        }
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