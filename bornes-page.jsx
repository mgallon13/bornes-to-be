// bornes-page.jsx — Page dédiée "Nos bornes"

// ── Page header ───────────────────────────────────────────────────────────
function BornesPageHeader() {
  return (
    <header className="page-header">
      <div className="wrap">
        <div className="crumb">
          <a href="index.html">Accueil</a>
          <span>→</span>
          <span>Nos bornes</span>
        </div>
        <h1 className="h-display" style={{ maxWidth: '22ch' }}>
          La borne dépend de votre situation, pas de notre stock.
        </h1>
        <p className="lede" style={{ marginTop: 24 }}>
          Répondez à 5 questions — on vous dit quelle solution correspond exactement à votre logement,
          votre véhicule et vos habitudes.
        </p>
        <div style={{ display: 'flex', gap: 14, marginTop: 36 }}>
          <a href="#choisir" className="btn btn-accent">Trouver ma borne →</a>
          <a href="#catalogue" className="btn btn-ghost">Voir toutes les solutions</a>
        </div>
        <div className="stats">
          <div>
            <div className="n">4 solutions</div>
            <div className="l">Murale, sur pied, portable, intégrée solaire.</div>
          </div>
          <div>
            <div className="n">1.8 → 22 kW</div>
            <div className="l">Puissance ajustée à votre tableau et votre véhicule.</div>
          </div>
          <div>
            <div className="n">IRVE niv. 2</div>
            <div className="l">Installation certifiée, garantie 2 ans main d'œuvre.</div>
          </div>
        </div>
      </div>
    </header>
  );
}

// ── Products data ─────────────────────────────────────────────────────────
const PRODUCTS = {
  murale: {
    id: 'murale',
    n: '01',
    name: 'Borne murale',
    tag: 'Le choix le plus répandu',
    power: '7.4 à 22 kW',
    charge: '100 km en ~3 h (7.4 kW)',
    ideal: 'Maison individuelle, garage ou box privatif',
    features: [
      'Fixée au mur, discrète',
      'Pilotage via application',
      'Compatible tous VE',
      'Installation en demi-journée',
    ],
    price: 'À partir de 1 290 € TTC',
    featured: false,
  },
  pied: {
    id: 'pied',
    n: '02',
    name: 'Borne sur pied',
    tag: 'Solution collective',
    power: '7.4 à 22 kW',
    charge: 'Double prise simultanée',
    ideal: 'Copropriété, parking commun, usage partagé',
    features: [
      'Accès par badge ou QR code',
      'Refacturation automatique',
      'Double prise possible',
      'Supervision à distance',
    ],
    price: 'Sur devis',
    featured: false,
  },
  portable: {
    id: 'portable',
    n: '03',
    name: 'Câble de recharge portable',
    tag: 'Flexibilité maximale',
    power: '1.8 à 3.7 kW',
    charge: '100 km en ~12 h',
    ideal: 'Usage occasionnel, voyage, complément d\'une borne fixe',
    features: [
      'Se branche sur prise domestique',
      'Aucune installation requise',
      'À emporter partout',
      'Idéal en dépannage ou en PHEV',
    ],
    price: 'À partir de 290 € TTC',
    featured: false,
  },
  solaire: {
    id: 'solaire',
    n: '04',
    name: 'Borne + intégration solaire',
    tag: '★ Notre expertise',
    power: '7.4 à 22 kW modulée',
    charge: 'Priorité sur votre surplus solaire',
    ideal: 'Maison avec panneaux solaires existants ou en projet',
    features: [
      'Recharge pilotée selon la production',
      'Complément réseau si besoin',
      'Supervision énergétique mensuelle',
      'Retour sur investissement accéléré',
    ],
    price: 'À partir de 1 890 € TTC',
    featured: true,
  },
};

// ── Catalogue ─────────────────────────────────────────────────────────────
function CatalogueSection() {
  return (
    <section className="section" id="catalogue">
      <div className="wrap">
        <SecHeader
          eyebrow="Catalogue"
          title="Quatre solutions pour quatre situations."
          lede="Chaque borne répond à un contexte précis. Si vous n'êtes pas sûr, utilisez le questionnaire ci-dessus."
        />
        <div className="prod-grid">
          {Object.values(PRODUCTS).map((p) => (
            <article key={p.id} className={`prod-card reveal ${p.featured ? 'prod-featured' : ''}`}>
              <div className="prod-top">
                <div className="prod-meta">
                  <span className="prod-n">{p.n}</span>
                  <span className="prod-tag">{p.tag}</span>
                </div>
                <h3 className="prod-name">{p.name}</h3>
                <p className="prod-ideal">{p.ideal}</p>
              </div>
              <div className="prod-specs">
                <div><span className="spec-lbl">Puissance</span><span className="spec-val">{p.power}</span></div>
                <div><span className="spec-lbl">Recharge</span><span className="spec-val">{p.charge}</span></div>
              </div>
              <ul className="prod-features">
                {p.features.map((f, i) => <li key={i}>{f}</li>)}
              </ul>
              <div className="prod-foot">
                <div className="prod-price">{p.price}</div>
                <a href="#contact" className="btn-link">Demander un devis <span className="arr">↗</span></a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── Questionnaire ─────────────────────────────────────────────────────────
const STEPS = [
  {
    id: 'logement',
    question: 'Quel est votre logement ?',
    sub: "Cela détermine le type d'installation adapté.",
    options: [
      { value: 'maison', label: 'Maison individuelle', icon: '🏠', desc: 'Avec garage, allée ou jardin' },
      { value: 'appartement', label: 'Appartement', icon: '🏢', desc: 'Avec parking privatif ou box' },
      { value: 'copro', label: 'Copropriété', icon: '🅿️', desc: 'Parking commun, résidence' },
      { value: 'autre', label: 'Autre situation', icon: '❓', desc: 'Stationnement variable' },
    ],
  },
  {
    id: 'stationnement',
    question: 'Où stationnez-vous principalement ?',
    sub: 'On adapte la solution à votre emplacement réel.',
    options: [
      { value: 'garage', label: 'Garage / box privatif', icon: '🔒', desc: 'Espace fermé qui vous appartient' },
      { value: 'parking_couvert', label: 'Parking couvert', icon: '🏗️', desc: 'Couvert, privatif ou commun' },
      { value: 'exterieur', label: 'Extérieur', icon: '🌿', desc: 'Allée, cour, devant chez moi' },
      { value: 'variable', label: 'Variable', icon: '🔄', desc: 'Ça change selon les jours' },
    ],
  },
  {
    id: 'vehicule',
    question: 'Quel est votre véhicule ?',
    sub: 'Le type de véhicule influence la puissance de borne recommandée.',
    options: [
      { value: 've', label: '100 % électrique', icon: '⚡', desc: 'Zoé, Tesla, ID.3, e-208…' },
      { value: 'phev', label: 'Hybride rechargeable', icon: '🔋', desc: 'PHEV : petite batterie, recharge rapide' },
      { value: 'bientot', label: "Pas encore électrique", icon: '🚗', desc: "J'anticipe le passage au VE" },
    ],
  },
  {
    id: 'usage',
    question: 'Quel est votre usage quotidien ?',
    sub: 'Plus vous roulez, plus la puissance de recharge compte.',
    options: [
      { value: 'intensif', label: 'Intensif', icon: '📅', desc: 'Plus de 50 km par jour' },
      { value: 'regulier', label: 'Régulier', icon: '🚗', desc: '20 à 50 km par jour' },
      { value: 'leger', label: 'Léger', icon: '🌙', desc: 'Moins de 20 km / week-ends' },
    ],
  },
  {
    id: 'solaire',
    question: 'Avez-vous des panneaux solaires ?',
    sub: 'Votre borne peut recharger votre voiture avec votre propre production.',
    options: [
      { value: 'oui', label: "Oui, j'en ai", icon: '☀️', desc: 'Installation existante' },
      { value: 'projet', label: 'En projet', icon: '📐', desc: "Je prévois d'en installer" },
      { value: 'non', label: 'Non', icon: '❌', desc: 'Pas de projet solaire' },
    ],
  },
];

function getRecommendation(answers) {
  const { logement, stationnement, vehicule, usage, solaire } = answers;

  if (logement === 'copro') return 'pied';
  if (solaire === 'oui' || solaire === 'projet') return 'solaire';
  if (stationnement === 'variable' || logement === 'autre') return 'portable';
  if (vehicule === 'phev' && usage === 'leger') return 'portable';
  return 'murale';
}

function Questionnaire() {
  const [step, setStep] = React.useState(0);
  const [answers, setAnswers] = React.useState({});
  const [done, setDone] = React.useState(false);
  const [rec, setRec] = React.useState(null);
  const [selecting, setSelecting] = React.useState(false);

  const current = STEPS[step];

  const handleSelect = (value) => {
    if (selecting) return;
    setSelecting(true);
    const newAnswers = { ...answers, [current.id]: value };
    setAnswers(newAnswers);
    if (step < STEPS.length - 1) {
      setTimeout(() => { setStep(step + 1); setSelecting(false); }, 260);
    } else {
      const r = getRecommendation(newAnswers);
      setRec(r);
      setTimeout(() => { setDone(true); setSelecting(false); }, 260);
    }
  };

  const handleReset = () => {
    setStep(0);
    setAnswers({});
    setDone(false);
    setRec(null);
  };

  const product = rec ? PRODUCTS[rec] : null;
  const progress = done ? 100 : (step / STEPS.length) * 100;

  return (
    <section className="section" id="choisir" style={{ background: 'var(--bg-2)' }}>
      <div className="wrap">
        <SecHeader
          eyebrow="Outil de sélection"
          title="Quelle borne vous correspond ?"
          lede="5 questions, 30 secondes. On vous recommande la solution adaptée à votre situation."
        />
        <div className="quiz-shell">
          <div className="quiz-bar">
            <div className="quiz-bar-fill" style={{ width: `${progress}%` }}></div>
          </div>

          {!done ? (
            <div className="quiz-body">
              <div className="quiz-top">
                <span className="quiz-count">{step + 1} / {STEPS.length}</span>
                {step > 0 && (
                  <button className="quiz-back" onClick={() => setStep(step - 1)}>← Retour</button>
                )}
              </div>
              <h3 className="quiz-q">{current.question}</h3>
              <p className="quiz-sub">{current.sub}</p>
              <div className="quiz-opts" data-n={current.options.length}>
                {current.options.map((opt) => (
                  <button
                    key={opt.value}
                    className={`quiz-opt${answers[current.id] === opt.value ? ' active' : ''}`}
                    onClick={() => handleSelect(opt.value)}
                  >
                    <span className="qo-icon">{opt.icon}</span>
                    <span className="qo-label">{opt.label}</span>
                    <span className="qo-desc">{opt.desc}</span>
                  </button>
                ))}
              </div>
            </div>
          ) : (
            <div className="quiz-body quiz-result">
              <div className="qr-eyebrow">Notre recommandation pour vous</div>
              <div className="qr-card">
                <div className="qr-head">
                  <span className="qr-tag">{product.tag}</span>
                  <h2 className="qr-name">{product.name}</h2>
                  <p className="qr-ideal">{product.ideal}</p>
                </div>
                <div className="qr-specs">
                  <div><span className="spec-lbl">Puissance</span><span>{product.power}</span></div>
                  <div><span className="spec-lbl">Recharge</span><span>{product.charge}</span></div>
                  <div><span className="spec-lbl">Tarif indicatif</span><span>{product.price}</span></div>
                </div>
                <ul className="qr-features">
                  {product.features.map((f, i) => <li key={i}>{f}</li>)}
                </ul>
                <div className="qr-ctas">
                  <a href="#contact" className="btn btn-accent">Demander un devis gratuit →</a>
                  <a href="#catalogue" className="btn btn-ghost">Comparer toutes les solutions</a>
                  <a href="tel:0652916578" className="btn btn-ghost">Prendre RDV par téléphone</a>
                </div>
              </div>
              <button className="quiz-restart" onClick={handleReset}>↺ Refaire le questionnaire</button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

// ── FAQ ───────────────────────────────────────────────────────────────────
const BORNES_QUESTIONS = [
  {
    q: "Quelle puissance choisir pour mon véhicule ?",
    a: "Ça dépend de trois choses : la puissance de charge embarquée de votre véhicule, votre tableau électrique (monophasé ou triphasé), et votre usage quotidien. Pour 90 % des particuliers, une borne 7,4 kW monophasée suffit : recharge complète en 6 à 8 heures, idéale pour la nuit. On ajuste lors de la visite technique."
  },
  {
    q: "Puis-je installer une borne si je suis locataire ou en copropriété ?",
    a: "Oui. La loi Lagleize vous donne le droit d'installer une borne, même en copropriété, sauf opposition motivée de l'assemblée générale dans les 3 mois. La démarche varie selon que vous avez un box privatif ou une place en parking commun. On vous guide sur la procédure."
  },
  {
    q: "Quelle différence entre une borne IRVE et un simple câble de recharge ?",
    a: "Un câble branché sur prise classique (Mode 1 ou 2) ne protège pas contre les défauts prolongés et peut endommager votre installation. Une borne IRVE (Mode 3) communique avec le véhicule, adapte la puissance et protège l'installation. C'est la seule solution homologuée pour un usage quotidien."
  },
  {
    q: "Combien de temps dure une installation ?",
    a: "Une borne murale standard : une demi-journée. Une borne sur pied collective ou une configuration solaire : une journée, parfois plus selon les distances de câblage. Vous recevez un planning précis avant l'intervention."
  },
  {
    q: "La borne fonctionne-t-elle avec tous les véhicules électriques ?",
    a: "Oui. Toutes les bornes que nous installons utilisent le standard européen Type 2. Elles sont compatibles avec tous les VE vendus en Europe : Renault, Tesla, Volkswagen, BMW, Peugeot, Stellantis, etc."
  },
  {
    q: "Y a-t-il des aides financières disponibles ?",
    a: "Oui. Pour les particuliers en résidence principale : crédit d'impôt à 75 % (plafonné à 300 € par véhicule). Pour les copropriétés : prime ADVENIR (AFIREV) sur les infrastructures collectives. On vous indique ce à quoi vous avez droit directement dans le devis."
  },
];

function BornesFAQ() {
  const [open, setOpen] = React.useState(0);
  return (
    <section className="section">
      <div className="wrap">
        <SecHeader
          eyebrow="Questions fréquentes"
          title="Ce qu'on nous demande avant de décider."
          lede="Chaque projet est différent — mais ces questions reviennent à chaque fois."
        />
        <div className="faq">
          {BORNES_QUESTIONS.map((q, i) => (
            <div
              key={i}
              className="q"
              data-open={open === i ? '1' : '0'}
              onClick={() => setOpen(open === i ? -1 : i)}
            >
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

Object.assign(window, { BornesPageHeader, CatalogueSection, Questionnaire, BornesFAQ });
