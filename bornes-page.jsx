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
          Répondez à 5 questions — on vous dit quelle solution correspond exactement
          à votre logement, votre véhicule et vos habitudes.
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
    brand: 'Wallbox',
    model: 'Pulsar Max',
    icon: '🔌',
    iconBg: '#e8f2ec',
    photo: null,
    name: 'Borne murale',
    tag: 'Le choix le plus répandu',
    power: '7.4 / 11 / 22 kW',
    charge: '100 km en ~3 h',
    ideal: 'Maison individuelle, garage ou box privatif',
    features: [
      'Wi-Fi & Bluetooth, application Wallbox',
      'Câble 5m Type 2 inclus (ou socket avec obturateur)',
      'IP55 / IK10 — intérieur et extérieur',
      'Gestion de charge statique incluse',
      'Compatible recharge solaire en option',
      'Compact : 198 × 201 mm, blanc ou noir',
    ],
    price: 'À partir de 1 290 € TTC',
  },
  pied: {
    id: 'pied',
    icon: '🏗️',
    iconBg: '#e8ecf5',
    name: 'Borne sur pied',
    tag: 'Solution collective',
    power: '7.4 à 22 kW',
    charge: 'Double prise simultanée',
    ideal: 'Copropriété, parking commun, résidence',
    features: ['Accès par badge ou QR code', 'Refacturation automatique', 'Double prise simultanée', 'Supervision à distance'],
    price: 'Sur devis',
  },
  portable: {
    id: 'portable',
    icon: '🔋',
    iconBg: '#f5f0e8',
    name: 'Câble de recharge portable',
    tag: 'Flexibilité maximale',
    power: '1.8 à 3.7 kW',
    charge: '100 km en ~12 h',
    ideal: 'Usage occasionnel, dépannage, PHEV',
    features: ['Branché sur prise domestique', 'Aucune installation requise', 'À emporter partout', 'Idéal en complément'],
    price: 'À partir de 290 € TTC',
  },
  solaire: {
    id: 'solaire',
    icon: '☀️',
    iconBg: '#f5f2e0',
    name: 'Borne + intégration solaire',
    tag: '★ Notre expertise',
    power: '7.4 à 22 kW modulée',
    charge: 'Priorité sur surplus solaire',
    ideal: 'Maison avec panneaux solaires existants ou en projet',
    features: ['Recharge pilotée selon production', 'Complément réseau si besoin', 'Supervision énergétique 6 mois', 'Retour sur investissement accéléré'],
    price: 'À partir de 1 890 € TTC',
  },
};

// ── Quiz steps ────────────────────────────────────────────────────────────
const STEPS = [
  {
    id: 'logement',
    question: 'Quel est votre logement ?',
    hint: "Cela détermine le type d'installation possible.",
    options: [
      { value: 'maison',      icon: '🏠', label: 'Maison individuelle', desc: 'Avec garage, allée ou jardin' },
      { value: 'appartement', icon: '🏢', label: 'Appartement',         desc: 'Avec parking privatif ou box' },
      { value: 'copro',       icon: '🅿️', label: 'Copropriété',         desc: 'Parking commun, résidence' },
      { value: 'autre',       icon: '❓', label: 'Autre situation',      desc: 'Stationnement variable' },
    ],
  },
  {
    id: 'stationnement',
    question: 'Où stationnez-vous principalement ?',
    hint: 'On adapte la solution à votre emplacement réel.',
    options: [
      { value: 'garage',          icon: '🔒', label: 'Garage / box privatif', desc: 'Espace fermé qui vous appartient' },
      { value: 'parking_couvert', icon: '🏗️', label: 'Parking couvert',       desc: 'Couvert, privatif ou commun' },
      { value: 'exterieur',       icon: '🌿', label: 'Extérieur',              desc: 'Allée, cour, devant chez moi' },
      { value: 'variable',        icon: '🔄', label: 'Variable',               desc: 'Ça change selon les jours' },
    ],
  },
  {
    id: 'vehicule',
    question: 'Quel est votre véhicule ?',
    hint: 'Le type influence la puissance de borne recommandée.',
    options: [
      { value: 've',      icon: '⚡', label: '100 % électrique',       desc: 'Zoé, Tesla, ID.3, e-208…' },
      { value: 'phev',    icon: '🔋', label: 'Hybride rechargeable',    desc: 'PHEV : petite batterie, recharge rapide' },
      { value: 'bientot', icon: '🚗', label: 'Pas encore électrique',   desc: "J'anticipe le passage au VE" },
    ],
  },
  {
    id: 'usage',
    question: 'Quel est votre usage quotidien ?',
    hint: 'Plus vous roulez, plus la puissance de recharge compte.',
    options: [
      { value: 'intensif', icon: '📅', label: 'Intensif',  desc: 'Plus de 50 km par jour' },
      { value: 'regulier', icon: '🚗', label: 'Régulier',  desc: '20 à 50 km par jour' },
      { value: 'leger',    icon: '🌙', label: 'Léger',     desc: 'Moins de 20 km ou week-ends' },
    ],
  },
  {
    id: 'solaire',
    question: 'Avez-vous des panneaux solaires ?',
    hint: 'Votre borne peut recharger votre voiture avec votre propre énergie.',
    options: [
      { value: 'oui',    icon: '☀️', label: "Oui, j'en ai", desc: 'Installation existante' },
      { value: 'projet', icon: '📐', label: 'En projet',     desc: "Je prévois d'en installer" },
      { value: 'non',    icon: '❌', label: 'Non',            desc: 'Pas de projet solaire' },
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

// ── Result tiers data ─────────────────────────────────────────────────────
const RESULT_TIERS = {
  murale: {
    intro: 'Une borne fixée chez vous — la solution idéale pour la recharge quotidienne.',
    options: [
      {
        label: 'Économique',
        brand: null,
        model: 'Borne basique 7.4 kW',
        icon: '🔌',
        iconBg: '#f0f2f5',
        photo: null,
        power: '7.4 kW',
        charge: '100 km en ~3 h',
        price: 'À partir de 490 € TTC',
        pros: ['Recharge journalière efficace', 'Installation simple et rapide', 'Prix contenu'],
        cons: ['Pas de connectivité (sans app)', 'Pas de gestion intelligente de la charge', 'Marque générique'],
      },
      {
        label: 'Standard',
        brand: 'Hager',
        model: null,
        icon: '🔌',
        iconBg: '#e8ecf5',
        photo: null,
        power: '7.4 kW',
        charge: '100 km en ~3 h',
        price: 'À partir de 890 € TTC',
        pros: ['Wi-Fi intégré', 'IP54 / IK10 — résistant pluie et chocs', 'Intérieur & extérieur'],
        cons: ['Monophasé uniquement (max 7.4 kW)', 'Disponible en noir uniquement'],
      },
      {
        label: 'Premium',
        brand: 'Wallbox',
        model: 'Pulsar Max',
        icon: '🔌',
        iconBg: '#e8f2ec',
        photo: null,
        power: '7.4 / 11 / 22 kW',
        charge: '100 km en ~1 h (22 kW)',
        price: 'À partir de 1 290 € TTC',
        pros: ['Wi-Fi + Bluetooth, application Wallbox', 'Triphasé jusqu\'à 22 kW', 'IP55, très compact (198×201 mm)', 'Compatible recharge solaire en option'],
        cons: ['Investissement plus élevé'],
      },
    ],
  },
  pied: {
    intro: 'Solution pour parking collectif — résidence, copropriété ou parking partagé.',
    options: [
      {
        label: 'Économique',
        brand: null,
        model: 'Borne sur pied simple',
        icon: '🏗️',
        iconBg: '#eef0f5',
        photo: null,
        power: '7.4 kW',
        charge: '100 km en ~3 h',
        price: 'Sur devis',
        pros: ['Installation simple et rapide', 'Compatible tous véhicules', 'Entretien minimal'],
        cons: ['Pas de gestion des accès', 'Pas de refacturation automatique'],
      },
      {
        label: 'Standard',
        brand: null,
        model: 'Borne collective RFID',
        icon: '🏗️',
        iconBg: '#e8ecf5',
        photo: null,
        power: '7.4 à 22 kW',
        charge: '100 km en 1 à 3 h',
        price: 'Sur devis',
        pros: ['Accès par badge RFID', 'Supervision à distance', 'Gestion multi-utilisateurs'],
        cons: ['Paramétrage initial nécessaire', 'Abonnement supervision en option'],
      },
      {
        label: 'Premium',
        brand: null,
        model: 'Double prise + supervision',
        icon: '🏗️',
        iconBg: '#e8ecf5',
        photo: null,
        power: '7.4 à 22 kW × 2 sorties',
        charge: '2 véhicules simultanés',
        price: 'Sur devis',
        pros: ['2 prises simultanées', 'Refacturation automatique', 'Rapport de consommation', 'Supervision complète'],
        cons: ['Installation plus complexe', 'Investissement plus important'],
      },
    ],
  },
  portable: {
    intro: 'Solution flexible — idéale pour stationnement variable ou véhicule hybride rechargeable.',
    options: [
      {
        label: 'Économique',
        brand: null,
        model: 'Câble standard 1.8 kW',
        icon: '🔋',
        iconBg: '#f5f0e8',
        photo: null,
        power: '1.8 kW',
        charge: '100 km en ~20 h',
        price: 'À partir de 90 € TTC',
        pros: ['Prix minimal', 'Prise domestique standard', 'Toujours disponible'],
        cons: ['Très lent pour VE 100%', 'Sécurité limitée sur longue durée'],
      },
      {
        label: 'Standard',
        brand: null,
        model: 'Câble renforcé 3.7 kW',
        icon: '🔋',
        iconBg: '#f5f0e8',
        photo: null,
        power: '3.7 kW',
        charge: '100 km en ~8 h',
        price: 'À partir de 290 € TTC',
        pros: ['2× plus rapide que câble standard', 'Protection thermique intégrée', 'Homologué Mode 2', 'Portable, à emporter partout'],
        cons: ['Plus lent qu\'une borne fixe', 'Prise renforcée recommandée'],
      },
      {
        label: 'Premium',
        brand: null,
        model: 'Câble intelligent avec app',
        icon: '🔋',
        iconBg: '#f5f0e8',
        photo: null,
        power: '3.7 kW',
        charge: '100 km en ~8 h',
        price: 'À partir de 490 € TTC',
        pros: ['Suivi consommation en temps réel', 'Programmation horaire', 'Protection courant résiduel avancée'],
        cons: ['Pas plus rapide que le Standard', 'Application requise pour les fonctions avancées'],
      },
    ],
  },
  solaire: {
    intro: 'Recharge pilotée par votre production solaire — économies maximales sur la durée.',
    options: [
      {
        label: 'Économique',
        brand: null,
        model: 'Borne murale + délestage simple',
        icon: '☀️',
        iconBg: '#faf5e0',
        photo: null,
        power: '7.4 kW',
        charge: '100 km en ~3 h',
        price: 'À partir de 1 290 € TTC',
        pros: ['Priorité sur surplus solaire', 'Installation simple', 'Compatible installation existante'],
        cons: ['Pas de supervision énergétique avancée', 'Optimisation limitée'],
      },
      {
        label: 'Standard',
        brand: 'Wallbox',
        model: 'Pulsar Max + EMS',
        icon: '☀️',
        iconBg: '#f5f2e0',
        photo: null,
        power: '7.4 / 11 / 22 kW',
        charge: 'Modulée selon production',
        price: 'À partir de 1 890 € TTC',
        pros: ['Recharge modulée en temps réel', 'Application Wallbox + supervision 6 mois', 'Complément réseau automatique', 'IP55, compact'],
        cons: ['Triphasé requis pour 22 kW', 'Compteur externe pour certaines fonctions'],
      },
      {
        label: 'Premium',
        brand: null,
        model: 'Solution intégrée complète',
        icon: '☀️',
        iconBg: '#f0edd8',
        photo: null,
        power: '7.4 à 22 kW modulés',
        charge: 'Optimisation solaire totale',
        price: 'Sur devis',
        pros: ['Audit énergétique inclus', 'Supervision annuelle', 'Tout-en-un : panneaux + borne + gestion'],
        cons: ['Investissement initial plus élevé', 'Délai d\'installation plus long'],
      },
    ],
  },
};

function getHighlightedTier(rec, answers) {
  const { usage, vehicule } = answers;
  if (rec === 'murale') {
    if (vehicule === 've' && (usage === 'intensif' || usage === 'regulier')) return 2;
    return 1;
  }
  return 1;
}

// ── Questionnaire component ───────────────────────────────────────────────
function Questionnaire() {
  const [phase, setPhase]     = React.useState('entry');
  const [step, setStep]       = React.useState(0);
  const [answers, setAnswers] = React.useState({});
  const [rec, setRec]         = React.useState(null);
  const [busy, setBusy]       = React.useState(false);

  const current = STEPS[step];

  const handleStart = () => setPhase('quiz');

  const handleSelect = (value) => {
    if (busy) return;
    setBusy(true);
    const newAnswers = { ...answers, [current.id]: value };
    setAnswers(newAnswers);
    if (step < STEPS.length - 1) {
      setTimeout(() => { setStep(s => s + 1); setBusy(false); }, 240);
    } else {
      const r = getRecommendation(newAnswers);
      setRec(r);
      setTimeout(() => { setPhase('result'); setBusy(false); }, 240);
    }
  };

  const handleBack = () => {
    if (step > 0) setStep(s => s - 1);
    else setPhase('entry');
  };

  const handleReset = () => {
    setStep(0);
    setAnswers({});
    setRec(null);
    setPhase('entry');
  };

  const product = rec ? PRODUCTS[rec] : null;
  const progress = phase === 'result' ? 100 : (step / STEPS.length) * 100;

  return (
    <section className="quiz-section" id="choisir">
      <div className="wrap">

        {/* ── Entry ── */}
        {phase === 'entry' && (
          <div className="quiz-entry">
            <div className="quiz-entry-left">
              <div className="eyebrow">Outil de sélection</div>
              <h2 className="h-1" style={{ marginTop: 16 }}>
                Trouvez votre borne en 2 minutes
              </h2>
              <p className="lede">
                5 questions sur votre logement, votre véhicule et vos habitudes.
                On vous recommande exactement la solution qu'il vous faut.
              </p>
              <button className="btn btn-accent quiz-cta" onClick={handleStart}>
                Commencer le test →
              </button>
            </div>
            <div className="quiz-entry-right">
              {STEPS.map((s, i) => (
                <div key={i} className="quiz-preview-step">
                  <span className="qps-n">{String(i + 1).padStart(2, '0')}</span>
                  <span className="qps-q">{s.question}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ── Quiz steps ── */}
        {phase === 'quiz' && (
          <div className="quiz-active">
            <div className="quiz-nav">
              <button className="quiz-back-btn" onClick={handleBack}>
                ← {step === 0 ? 'Annuler' : 'Retour'}
              </button>
              <span className="quiz-step-count">{step + 1} / {STEPS.length}</span>
            </div>

            <div className="quiz-prog">
              {STEPS.map((_, i) => (
                <div key={i} className={`quiz-prog-seg${i < step ? ' past' : i === step ? ' active' : ''}`}></div>
              ))}
            </div>

            <div className="quiz-question-area">
              <h3 className="quiz-q">{current.question}</h3>
              <p className="quiz-hint">{current.hint}</p>
            </div>

            <div className="quiz-cards" data-n={current.options.length}>
              {current.options.map((opt) => (
                <button
                  key={opt.value}
                  className={`quiz-card${answers[current.id] === opt.value ? ' selected' : ''}`}
                  onClick={() => handleSelect(opt.value)}
                >
                  <span className="qc-icon">{opt.icon}</span>
                  <span className="qc-label">{opt.label}</span>
                  <span className="qc-desc">{opt.desc}</span>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* ── Result ── */}
        {phase === 'result' && product && (
          <div className="quiz-result">
            <div className="qr-header">
              <div className="eyebrow">Résultat personnalisé</div>
              <h2 className="h-1" style={{ marginTop: 12 }}>Notre recommandation pour vous</h2>
            </div>

            <div className="qr-card">
              <div className="qr-visual" style={product.photo ? {} : { background: product.iconBg }}>
                {product.photo
                  ? <img src={product.photo} alt={product.name} className="qr-photo" />
                  : <span className="qr-visual-icon">{product.icon}</span>
                }
                <div className="qr-visual-label">Votre borne idéale</div>
              </div>

              <div className="qr-content">
                <div className="qr-top">
                  <span className="qr-tag">{product.tag}</span>
                  <h3 className="qr-name">{product.name}</h3>
                  {product.brand && <p className="qr-model-ref">{product.brand} {product.model}</p>}
                  <p className="qr-ideal">{product.ideal}</p>
                </div>

                <div className="qr-specs-row">
                  <div className="qr-spec">
                    <span className="spec-lbl">Puissance</span>
                    <span className="spec-val">{product.power}</span>
                  </div>
                  <div className="qr-spec">
                    <span className="spec-lbl">Recharge</span>
                    <span className="spec-val">{product.charge}</span>
                  </div>
                  <div className="qr-spec">
                    <span className="spec-lbl">Tarif indicatif</span>
                    <span className="spec-val">{product.price}</span>
                  </div>
                </div>

                <ul className="qr-features">
                  {product.features.map((f, i) => <li key={i}>{f}</li>)}
                </ul>
              </div>
            </div>

            <div className="qr-cta-block">
              <a href="#contact" className="btn btn-accent qr-cta-main">Demander un devis gratuit →</a>
              <div className="qr-cta-secondary">
                <a href="#catalogue" className="btn btn-ghost">Comparer toutes les solutions</a>
                <a href="tel:0652916578" className="btn btn-ghost">📞 Prendre RDV</a>
              </div>
            </div>

            <button className="quiz-restart-btn" onClick={handleReset}>
              ↺ Refaire le questionnaire
            </button>
          </div>
        )}

      </div>
    </section>
  );
}

// ── Catalogue ─────────────────────────────────────────────────────────────
function CatalogueSection() {
  return (
    <section className="section" id="catalogue" style={{ background: 'var(--bg-2)' }}>
      <div className="wrap">
        <SecHeader
          eyebrow="Catalogue"
          title="Quatre solutions, quatre situations."
          lede="Chaque produit répond à un contexte précis. Pas sûr ? Utilisez le questionnaire ci-dessus."
        />
        <div className="prod-grid">
          {Object.values(PRODUCTS).map((p) => (
            <article key={p.id} className="prod-card reveal">
              <div className="prod-visual" style={p.photo ? {} : { background: p.iconBg }}>
                {p.photo
                  ? <img src={p.photo} alt={`${p.brand || ''} ${p.model || p.name}`} className="prod-photo" />
                  : <span className="prod-visual-icon">{p.icon}</span>
                }
              </div>
              <div className="prod-body">
                <div className="prod-meta-row">
                  <span className="prod-tag">{p.tag}</span>
                </div>
                <h3 className="prod-name">{p.name}</h3>
                {p.brand && <p className="prod-model-ref">{p.brand} {p.model}</p>}
                <p className="prod-ideal">{p.ideal}</p>
                <div className="prod-specs-row">
                  <div><span className="spec-lbl">Puissance</span><span className="spec-val">{p.power}</span></div>
                  <div><span className="spec-lbl">Recharge</span><span className="spec-val">{p.charge}</span></div>
                </div>
                <ul className="prod-features">
                  {p.features.map((f, i) => <li key={i}>{f}</li>)}
                </ul>
                <div className="prod-foot">
                  <span className="prod-price">{p.price}</span>
                  <a href="#contact" className="btn-link">Demander un devis <span className="arr">↗</span></a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── FAQ ───────────────────────────────────────────────────────────────────
const BORNES_QUESTIONS = [
  {
    q: "Quelle puissance choisir pour mon véhicule ?",
    a: "Ça dépend de trois choses : la puissance de charge embarquée de votre véhicule, votre tableau électrique (monophasé ou triphasé), et votre usage quotidien. Pour 90 % des particuliers, une borne 7,4 kW monophasée suffit : recharge complète en 6 à 8 heures. On ajuste lors de la visite technique."
  },
  {
    q: "Puis-je installer une borne si je suis locataire ou en copropriété ?",
    a: "Oui. La loi Lagleize vous donne le droit d'installer une borne, même en copropriété, sauf opposition motivée de l'assemblée générale dans les 3 mois. La démarche varie selon que vous avez un box privatif ou une place en parking commun."
  },
  {
    q: "Quelle différence entre une borne IRVE et un câble de recharge portable ?",
    a: "Le câble portable se branche sur une prise domestique existante. Pratique et sans installation, il est plus lent (1.8 à 3.7 kW) et non homologué pour un usage quotidien intensif. La borne IRVE (Mode 3) est fixe, certifiée, protège l'installation et est adaptée à la recharge journalière."
  },
  {
    q: "Combien de temps dure une installation ?",
    a: "Une borne murale standard : une demi-journée. Une borne sur pied collective ou une configuration solaire : une journée, parfois plus selon les distances de câblage. Vous recevez un planning précis avant l'intervention."
  },
  {
    q: "Y a-t-il des aides financières disponibles ?",
    a: "Oui. Crédit d'impôt à 75 % pour les particuliers en résidence principale (plafonné à 300 € par véhicule). Prime ADVENIR pour les copropriétés. On vous indique ce à quoi vous avez droit directement dans le devis."
  },
  {
    q: "La borne fonctionne-t-elle avec tous les VE ?",
    a: "Oui. Toutes les bornes utilisent le standard européen Type 2, compatible avec tous les véhicules électriques vendus en Europe : Renault, Tesla, Volkswagen, BMW, Peugeot, Stellantis, etc."
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

Object.assign(window, { BornesPageHeader, Questionnaire, CatalogueSection, BornesFAQ });
