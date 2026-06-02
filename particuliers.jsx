// particuliers.jsx — Particuliers page.

function PageHeader() {
  return (
    <header className="page-header">
      <div className="wrap">
        <div className="crumb">
          <a href="index.html">Accueil</a>
          <span>→</span>
          <span>Particuliers</span>
        </div>
        <h1 className="h-display" style={{ maxWidth: '18ch' }}>
          Une borne chez vous, sans surprise.
        </h1>
        <p className="lede" style={{ marginTop: 24 }}>
          Pour les particuliers à Marseille et alentours. On vient voir, on étudie
          votre tableau électrique, votre véhicule, vos panneaux solaires éventuels,
          puis on installe — proprement, dans les quinze jours.
        </p>
        <div style={{ display: 'flex', gap: 14, marginTop: 36 }}>
          <a href="#devis" className="btn btn-accent">Demander un devis →</a>
          <a href="#process" className="btn btn-ghost">Voir le déroulé</a>
        </div>
        <div className="stats">
          <div>
            <div className="n">15 jours</div>
            <div className="l">Délai moyen entre premier appel et borne en service.</div>
          </div>
          <div>
            <div className="n">7.4 — 22 kW</div>
            <div className="l">Plage de puissance, ajustée à votre tableau et votre voiture.</div>
          </div>
          <div>
            <div className="n">2 ans</div>
            <div className="l">Garantie main d'œuvre, en plus de la garantie constructeur.</div>
          </div>
        </div>
      </div>
    </header>
  );
}

// ── Process steps ────────────────────────────────────────────────────────
function Process() {
  return (
    <section className="section" id="process">
      <div className="wrap">
        <SecHeader
          eyebrow="Le déroulé"
          title="Quatre étapes, claires, sans relance commerciale."
          lede="Un seul interlocuteur de l'appel à la mise en service. On vous dit ce qu'on fait, quand, et combien."
        />
      </div>
      <div className="step-grid">
        <div className="step reveal">
          <div className="n">01 · J+0</div>
          <h4>Premier appel</h4>
          <p>Vingt minutes au téléphone. On comprend votre logement, votre véhicule, votre routine. On évalue si un devis a du sens — et on vous le dit honnêtement si non.</p>
        </div>
        <div className="step reveal">
          <div className="n">02 · J+3</div>
          <h4>Visite technique</h4>
          <p>Sur place : on regarde le tableau, le passage de câble, la distance jusqu'à la place de parking. Si vous avez des panneaux, on étudie l'intégration. Devis ferme remis sous 48h.</p>
        </div>
        <div className="step reveal">
          <div className="n">03 · J+10</div>
          <h4>Installation</h4>
          <p>Une demi-journée pour une borne murale standard, un peu plus pour les configurations solaires ou collectives. Câblage propre, finitions soignées, mise en service avec vous.</p>
        </div>
        <div className="step reveal">
          <div className="n">04 · J+15</div>
          <h4>Suivi</h4>
          <p>Appel de contrôle à un mois. SAV par téléphone, intervention sur site sous 72h si besoin. Garantie deux ans sur la pose.</p>
        </div>
      </div>
    </section>
  );
}

// ── Offers ───────────────────────────────────────────────────────────────
function Offers() {
  return (
    <section className="section" style={{ background: 'var(--bg-2)' }} id="devis">
      <div className="wrap">
        <SecHeader
          eyebrow="Ordres de grandeur"
          title="Pour situer — pas un catalogue."
          lede="Ces fourchettes incluent la borne, la pose et les protections. Le devis ferme se fait après visite technique."
        />
        <div className="offre-grid">
          <div className="offre reveal">
            <span className="tag">Essentiel</span>
            <h3>Borne murale standard</h3>
            <p className="desc">Maison ou box. Borne 7,4 kW pilotable. Installation en demi-journée.</p>
            <div>
              <div className="price-from">À partir de</div>
              <div className="price">1 290<small>€ TTC</small></div>
            </div>
            <ul>
              <li>Borne murale 7,4 kW</li>
              <li>Câblage jusqu'à 10 m</li>
              <li>Protections différentielles</li>
              <li>Mise en service + app</li>
            </ul>
            <div className="cta">
              <a href="#contact-form" className="btn-link">Demander un devis <span className="arr">↗</span></a>
            </div>
          </div>

          <div className="offre featured reveal">
            <span className="tag">Notre expertise</span>
            <h3>Borne + intégration solaire</h3>
            <p className="desc">Pour les particuliers avec panneaux solaires existants ou en projet. Recharge prioritaire sur votre production.</p>
            <div>
              <div className="price-from">À partir de</div>
              <div className="price">1 890<small>€ TTC</small></div>
            </div>
            <ul>
              <li>Borne pilotable surplus solaire</li>
              <li>Liaison onduleur / tableau</li>
              <li>Configuration et tests</li>
              <li>Suivi énergétique 6 mois</li>
            </ul>
            <div className="cta">
              <a href="#contact-form" className="btn-link" style={{ color: '#fff', borderColor: 'rgba(255,255,255,.4)' }}>
                Étudier mon installation <span className="arr">↗</span>
              </a>
            </div>
          </div>

          <div className="offre reveal">
            <span className="tag">Cas spécifique</span>
            <h3>Configuration sur mesure</h3>
            <p className="desc">Tableau éloigné, deux véhicules, triphasé, alimentation depuis une dépendance — on étudie.</p>
            <div>
              <div className="price-from">Sur devis</div>
              <div className="price">—</div>
            </div>
            <ul>
              <li>Étude technique approfondie</li>
              <li>Choix borne selon contraintes</li>
              <li>Tranchée et raccordement</li>
              <li>Possibilité aide ADVENIR</li>
            </ul>
            <div className="cta">
              <a href="#contact-form" className="btn-link">Décrire mon cas <span className="arr">↗</span></a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ── FAQ ──────────────────────────────────────────────────────────────────
const QUESTIONS = [
  {
    q: "Combien de temps prend l'installation chez un particulier ?",
    a: "Pour une borne murale standard chez vous, comptez une demi-journée d'intervention. Entre le premier appel et la mise en service, le délai moyen est de 15 jours — l'essentiel du temps est consacré à la visite technique et à la validation du devis."
  },
  {
    q: "Que se passe-t-il si j'ai déjà des panneaux solaires ?",
    a: "Tant mieux. Nous étudions votre installation (onduleur, production estimée, contrat d'autoconsommation) et nous choisissons une borne capable de piloter la recharge en fonction de votre surplus solaire. Vous rechargez gratuitement le jour, avec un complément réseau si nécessaire."
  },
  {
    q: "Quelle puissance choisir pour ma borne ?",
    a: "Ça dépend de votre tableau électrique, de votre abonnement, et de votre véhicule. La plupart des particuliers sont bien servis par une borne 7,4 kW monophasée — recharge complète en une nuit. Pour les véhicules acceptant le 11 ou 22 kW et les abonnements triphasés, on monte en puissance."
  },
  {
    q: "Est-ce que je peux bénéficier d'aides financières ?",
    a: "Oui, plusieurs dispositifs existent : crédit d'impôt pour la pose d'une borne en résidence principale, prime ADVENIR pour les copropriétés et professionnels. Nous vous indiquons à quoi vous avez droit dans le devis."
  },
  {
    q: "Travaillez-vous avec toutes les marques de bornes ?",
    a: "Nous sommes installateurs, pas revendeurs. Notre boulot c'est de choisir la bonne borne pour votre cas, pas de pousser une marque. Nous travaillons avec une dizaine de fabricants reconnus, et nous expliquons les compromis."
  },
  {
    q: "Et si ma borne tombe en panne ?",
    a: "Garantie constructeur (généralement 2 à 3 ans selon le fabricant), plus 2 ans de garantie sur la pose. SAV par téléphone, intervention sur site sous 72h ouvrées si nécessaire."
  },
];

function FAQ() {
  const [open, setOpen] = React.useState(0);
  return (
    <section className="section">
      <div className="wrap">
        <SecHeader
          eyebrow="Questions"
          title="Ce que les particuliers nous demandent le plus."
          lede="Si votre question n'est pas là, posez-la directement par téléphone ou en remplissant le formulaire ci-dessous."
        />
        <div className="faq">
          {QUESTIONS.map((q, i) => (
            <div key={i} className="q" data-open={open === i ? '1' : '0'} onClick={() => setOpen(open === i ? -1 : i)}>
              <div className="qt">{q.q}</div>
              <div className="qi">+</div>
              <div className="qa">{q.a}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { PageHeader, Process, Offers, FAQ });
