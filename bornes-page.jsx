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
          Répondez à 6 questions — on vous dit quelle solution correspond exactement
          à votre logement, votre installation et vos habitudes.
        </p>
        <div style={{ display: 'flex', gap: 14, marginTop: 36 }}>
          <a href="#choisir" className="btn btn-accent">Trouver ma borne →</a>
          <a href="#catalogue" className="btn btn-ghost">Voir toutes les solutions</a>
        </div>
        <div className="stats">
          <div>
            <div className="n">10 bornes</div>
            <div className="l">Sélectionnées et testées pour le marché français.</div>
          </div>
          <div>
            <div className="n">TVA 5,5 %</div>
            <div className="l">Sur fourniture et pose par installateur certifié IRVE.</div>
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

// ── Visuels blueprint colores (flux de charge anime) ───────────────────────
function BpFlow({ path, dur = '2.6s', color = '#22c55e' }) {
  return (
    <circle r="3.4" fill={color} className="bp-flow">
      <animateMotion dur={dur} repeatCount="indefinite" path={path} />
      <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.12;0.82;1"
               dur={dur} repeatCount="indefinite" />
    </circle>
  );
}

function BorneVisual({ type }) {
  if (type === 'pied') {
    const cable = "M67 66 C 71 80, 78 82, 80 94";
    return (
      <svg viewBox="0 0 120 120" className="borne-bp" role="img" aria-label="Borne sur pied">
        <defs><linearGradient id="p-body" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#ffffff" /><stop offset="1" stopColor="#dde9f4" /></linearGradient></defs>
        <ellipse cx="60" cy="106" rx="30" ry="6" fill="#e2e8f0" />
        <rect x="44" y="20" width="32" height="84" rx="11" fill="url(#p-body)" stroke="#0284c7" strokeWidth="2.4" />
        <rect x="50" y="28" width="20" height="24" rx="4" fill="#0c2740" />
        <rect x="53" y="44" width="14" height="3.4" rx="1.7" fill="#15324a" />
        <rect x="53" y="44" width="6" height="3.4" rx="1.7" fill="#22c55e">
          <animate attributeName="width" values="3;14;3" dur="3s" repeatCount="indefinite" /></rect>
        <path d="M61 31 l-4 6 h2.8 l-1.8 5 5.4 -7 h-3 z" fill="#fbbf24" />
        <circle cx="53" cy="62" r="4" fill="#dbeafe" stroke="#0284c7" strokeWidth="1.8" />
        <circle cx="67" cy="62" r="4" fill="#dbeafe" stroke="#0284c7" strokeWidth="1.8" />
        <circle cx="53" cy="62" r="1.6" fill="#22c55e" /><circle cx="67" cy="62" r="1.6" fill="#22c55e" />
        <path d="M53 66 C 49 80, 42 82, 40 94" fill="none" stroke="#38bdf8" strokeWidth="2.6" strokeLinecap="round" opacity="0.7" />
        <path d={cable} fill="none" stroke="#0ea5e9" strokeWidth="2.8" strokeLinecap="round" />
        <BpFlow path={cable} />
      </svg>
    );
  }
  if (type === 'portable') {
    const cable = "M22 34 C 46 16, 58 56, 60 70 C 62 84, 74 100, 98 86";
    return (
      <svg viewBox="0 0 120 120" className="borne-bp" role="img" aria-label="Cable portable">
        <path d={cable} fill="none" stroke="#0ea5e9" strokeWidth="3" strokeLinecap="round" />
        <rect x="14" y="27" width="14" height="14" rx="3" fill="#e2edf6" stroke="#0284c7" strokeWidth="2" />
        <circle cx="18.5" cy="34" r="1.4" fill="#0284c7" /><circle cx="23.5" cy="34" r="1.4" fill="#0284c7" />
        <rect x="50" y="60" width="20" height="20" rx="5" fill="#0c2740" />
        <circle cx="60" cy="67" r="2.4" fill="#22c55e"><animate attributeName="opacity" values="1;.3;1" dur="1.6s" repeatCount="indefinite" /></circle>
        <rect x="54" y="73" width="12" height="2.6" rx="1.3" fill="#15324a" />
        <rect x="90" y="80" width="16" height="13" rx="4" fill="#e2edf6" stroke="#0284c7" strokeWidth="2" />
        <circle cx="98" cy="86.5" r="2.2" fill="#22c55e" />
        <BpFlow path={cable} dur="3s" />
      </svg>
    );
  }
  if (type === 'solaire') {
    return (
      <svg viewBox="0 0 120 120" className="borne-bp" role="img" aria-label="Borne solaire">
        <defs>
          <radialGradient id="s-sun" cx="0.5" cy="0.5" r="0.5">
            <stop offset="0" stopColor="#fde68a" /><stop offset="1" stopColor="#f59e0b" /></radialGradient>
          <linearGradient id="s-panel" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#1d4ed8" /><stop offset="1" stopColor="#0c2740" /></linearGradient>
        </defs>
        <g>
          <circle cx="30" cy="30" r="11" fill="url(#s-sun)" />
          <g stroke="#f59e0b" strokeWidth="2.2" strokeLinecap="round">
            <path d="M30 13 V8" /><path d="M30 52 V47" /><path d="M13 30 H8" /><path d="M47 30 H52" />
            <path d="M18 18 L14 14" /><path d="M42 18 L46 14" /><path d="M18 42 L14 46" /></g>
          <animateTransform attributeName="transform" type="rotate" from="0 30 30" to="360 30 30" dur="20s" repeatCount="indefinite" />
        </g>
        <path d="M52 30 L96 30 L90 52 L46 52 Z" fill="url(#s-panel)" stroke="#0284c7" strokeWidth="1.6" />
        <path d="M62 30 L56 52 M72 30 L66 52 M82 30 L76 52" stroke="#60a5fa" strokeWidth="1.2" opacity="0.7" />
        <path d="M49 41 L91 41" stroke="#60a5fa" strokeWidth="1.2" opacity="0.7" />
        <rect x="72" y="64" width="28" height="40" rx="7" fill="#ffffff" stroke="#0284c7" strokeWidth="2.4" />
        <rect x="78" y="70" width="16" height="11" rx="2.5" fill="#0c2740" />
        <rect x="80" y="76" width="12" height="2.6" rx="1.3" fill="#22c55e">
          <animate attributeName="width" values="3;12;3" dur="3s" repeatCount="indefinite" /></rect>
        <circle cx="86" cy="90" r="2.6" fill="#22c55e" />
        <BpFlow path="M40 38 C 56 58, 64 60, 80 70" color="#f59e0b" />
      </svg>
    );
  }
  const cable = "M59 72 C 59 92, 84 86, 95 96";
  return (
    <svg viewBox="0 0 120 120" className="borne-bp" role="img" aria-label="Borne murale">
      <defs><linearGradient id="m-body" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stopColor="#ffffff" /><stop offset="1" stopColor="#e2edf6" /></linearGradient></defs>
      <rect x="14" y="14" width="13" height="92" rx="3" fill="#eef2f6" />
      <rect x="25" y="40" width="12" height="6" rx="2" fill="#cbd5e1" />
      <rect x="34" y="24" width="50" height="58" rx="11" fill="url(#m-body)" stroke="#0284c7" strokeWidth="2.4" />
      <rect x="42" y="32" width="34" height="22" rx="4" fill="#0c2740" />
      <rect x="46" y="36" width="12" height="7" rx="1.5" fill="none" stroke="#7dd3fc" strokeWidth="1.4" />
      <rect x="58.4" y="38" width="1.6" height="3" fill="#7dd3fc" />
      <path d="M67 33 l-5 7 h3.4 l-2.2 6 6.5 -8 h-3.6 z" fill="#fbbf24" />
      <rect x="46" y="47" width="26" height="4" rx="2" fill="#15324a" />
      <rect x="46" y="47" width="8" height="4" rx="2" fill="#22c55e">
        <animate attributeName="width" values="4;26;4" dur="3s" repeatCount="indefinite" /></rect>
      <circle cx="59" cy="64" r="3" fill="#22c55e">
        <animate attributeName="opacity" values="1;0.3;1" dur="1.8s" repeatCount="indefinite" /></circle>
      <path d={cable} fill="none" stroke="#0ea5e9" strokeWidth="3.2" strokeLinecap="round" />
      <rect x="88" y="92" width="16" height="12" rx="4" fill="#e2edf6" stroke="#0284c7" strokeWidth="2" />
      <circle cx="96" cy="98" r="2.2" fill="#22c55e" />
      <BpFlow path={cable} />
    </svg>
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
    id: 'stationnement',
    question: 'Votre espace de stationnement ?',
    hint: "Cela détermine quel type de solution est possible.",
    options: [
      { value: 'maison',      icon: '🏠', label: 'Maison individuelle',      desc: 'Garage, allée, cour' },
      { value: 'appartement', icon: '🏢', label: 'Appartement / box privatif', desc: 'Espace fermé qui vous appartient' },
      { value: 'copro',       icon: '🅿️', label: 'Copropriété',              desc: 'Parking collectif, résidence' },
      { value: 'variable',    icon: '🔄', label: 'Pas de place fixe',         desc: 'Stationnement variable selon les jours' },
    ],
  },
  {
    id: 'installation',
    question: 'Votre installation électrique ?',
    hint: 'Cela détermine la puissance maximale disponible.',
    options: [
      { value: 'mono',   icon: '⚡',    label: 'Monophasé',       desc: 'Standard, la majorité des logements' },
      { value: 'tri',    icon: '⚡⚡⚡', label: 'Triphasé',        desc: 'Maisons récentes, installations puissantes' },
      { value: 'saispa', icon: '❓',    label: 'Je ne sais pas',  desc: 'On vérifiera lors de la visite technique' },
    ],
  },
  {
    id: 'solaire',
    question: 'Avez-vous des panneaux solaires ?',
    hint: 'Votre borne peut recharger votre voiture avec votre propre énergie.',
    options: [
      { value: 'oui', icon: '☀️', label: "Oui, j'en ai", desc: 'Installation solaire existante' },
      { value: 'non', icon: '🔌', label: 'Non',           desc: 'Pas de projet solaire actuellement' },
    ],
  },
  {
    id: 'vehicule',
    question: 'Votre véhicule ?',
    hint: 'Influence la gamme recommandée.',
    options: [
      { value: 've',      icon: '⚡', label: '100 % électrique',     desc: 'Zoé, Tesla, ID.3, e-208…' },
      { value: 'phev',    icon: '🔋', label: 'Hybride rechargeable',  desc: 'PHEV : petite batterie, recharge rapide' },
      { value: 'bientot', icon: '🚗', label: 'Pas encore électrique', desc: "J'anticipe le passage au VE" },
    ],
  },
  {
    id: 'frequence',
    question: 'À quelle fréquence rechargez-vous ?',
    hint: "Plus la fréquence est élevée, plus la puissance de votre borne doit l'être aussi.",
    options: [
      { value: 'quotidienne',   icon: '📅', label: 'Tous les jours',             desc: 'Trajet domicile-travail quotidien' },
      { value: 'reguliere',     icon: '🔄', label: 'Plusieurs fois par semaine', desc: '3 à 5 fois par semaine en moyenne' },
      { value: 'occasionnelle', icon: '🌙', label: 'Occasionnelle',             desc: 'Week-ends ou grandes distances seulement' },
    ],
  },
  {
    id: 'km_jour',
    question: 'Combien de kilomètres roulez-vous par jour ?',
    hint: 'Votre consommation journalière détermine la puissance de recharge dont vous avez besoin.',
    options: [
      { value: 'moins30',     icon: '🏙️', label: 'Moins de 30 km',  desc: 'Trajets courts, usage urbain' },
      { value: 'entre30et80', icon: '🛣️', label: '30 à 80 km',      desc: 'Trajet domicile-travail classique' },
      { value: 'plus80',      icon: '🚗', label: 'Plus de 80 km',   desc: 'Longues distances régulières' },
    ],
  },
];

function getNextStepId(currentId, newAnswers) {
  if (currentId === 'stationnement') {
    const v = newAnswers.stationnement;
    if (v === 'copro' || v === 'variable') return null;
    return 'installation';
  }
  if (currentId === 'installation') return 'solaire';
  if (currentId === 'solaire') {
    if (newAnswers.solaire === 'oui') return 'frequence'; // solaire → fréquence directement (pas de véhicule)
    return 'vehicule';
  }
  if (currentId === 'vehicule') return 'frequence';
  if (currentId === 'frequence') return 'km_jour';
  return null; // km_jour → result
}

function getRecommendation(answers) {
  const { stationnement, installation, solaire } = answers;
  if (stationnement === 'copro') return 'pied';
  if (stationnement === 'variable') return 'portable';
  if (solaire === 'oui') return 'solaire';
  if (installation === 'tri') return 'murale_tri';
  return 'murale_mono';
}

// ── Result tiers data ─────────────────────────────────────────────────────
const RESULT_TIERS = {
  murale_mono: {
    intro: "Votre installation monophasée permet jusqu'à 7,4 kW — une recharge complète en une nuit, idéal pour 90 % des usages.",
    options: [
      {
        label: 'Essentiel',
        brand: 'Tesla', model: 'Wall Connector Gen 3',
        visualType: 'murale', iconBg: '#e8f2f5', photo: 'img/bornes/tesla-wall-connector-gen3.jpg',
        power: '7,4 kW monophasé', charge: '100 km en ~3 h',
        price: '559 € TTC',
        pros: [
          "Prix imbattable — câble 7,3 m inclus",
          "Détection DC 6 mA intégrée de série",
          "Garantie 4 ans constructeur",
        ],
      },
      {
        label: 'Recommandé',
        brand: 'Hager', model: 'witty one 7,4 kW TIC',
        visualType: 'murale', iconBg: '#ecf2f8', photo: 'img/bornes/hager-witty-one.webp',
        power: '7,4 kW monophasé', charge: '100 km en ~3 h',
        price: 'À partir de 985 € TTC',
        pros: [
          "Délestage Linky natif — abonnement EDF inchangé",
          "Zéro retour SAV signalé chez les installateurs pros",
          "Disponible chez YESSS — livraison rapide",
        ],
      },
      {
        label: 'Premium',
        brand: 'Wallbox', model: 'Pulsar Max 7,4 kW',
        visualType: 'murale', iconBg: '#e8f5f2', photo: 'img/bornes/wallbox-pulsar-max.png',
        power: '7,4 kW monophasé', charge: '100 km en ~3 h',
        price: 'À partir de 829 € TTC',
        pros: [
          "Application myWallbox la mieux notée du marché",
          "Garantie 5 ans · IP55 / IK10",
          "Compatible recharge solaire (compteur en option)",
        ],
      },
    ],
  },
  murale_tri: {
    intro: "Avec le triphasé, vous accédez à 11 ou 22 kW — une recharge complète en 1 à 2 heures.",
    options: [
      {
        label: 'Essentiel',
        brand: 'Autel', model: 'MaxiCharger AC',
        visualType: 'murale', iconBg: '#f0f2f5', photo: 'img/bornes/autel-maxicharger-ac.jpg',
        power: '11 / 22 kW triphasé', charge: '100 km en ~1-2 h',
        price: 'Sur devis installateur',
        pros: [
          "Rapport équipement/prix parmi les meilleurs du marché",
          "RFID et application inclus dès l'entrée de gamme",
          "Garantie 3 ans — disponible chez YESSS",
        ],
      },
      {
        label: 'Recommandé',
        brand: 'Schneider', model: 'Charge 11/22 kW TIC',
        visualType: 'murale', iconBg: '#e8ecf5', photo: 'img/bornes/schneider-charge-tic.jpg',
        power: '7,4 / 11 / 22 kW (param.)', charge: '100 km en 1 à 3 h',
        price: 'Sur devis installateur',
        pros: [
          "TIC Linky natif — délestage sans module externe",
          "RDC-DD intégré — économie au tableau électrique",
          "SAV Schneider France, réseau le plus dense",
        ],
      },
      {
        label: 'Premium',
        brand: 'Legrand', model: "Green'Up Premium 22 kW",
        visualType: 'murale', iconBg: '#eeedf5', photo: 'img/bornes/legrand-greenup-premium.jpg',
        power: '22 kW triphasé', charge: '100 km en ~1 h',
        price: '1 200 – 1 500 € via réseau pro',
        pros: [
          "Fabriquée en France (Limoges)",
          "DDR type B embarqué — jusqu'à 200 € d'économie au tableau",
          "Réseau SAV Legrand, le plus dense d'Europe",
        ],
      },
    ],
  },
  pied: {
    intro: 'Solution pour parking collectif — résidence, copropriété ou parking partagé.',
    options: [
      {
        label: 'Basique',
        brand: null, model: 'Borne sur pied 7,4 kW',
        visualType: 'pied', iconBg: '#eef0f5', photo: null,
        power: '7,4 kW', charge: '100 km en ~3 h',
        price: 'Sur devis',
        pros: [
          "Installation rapide en parking commun",
          "Compatible tous véhicules, entretien minimal",
          "Devis offert pour votre copropriété",
        ],
      },
      {
        label: 'Standard',
        brand: null, model: 'Borne collective RFID',
        visualType: 'pied', iconBg: '#e8ecf5', photo: null,
        power: '7,4 à 22 kW', charge: '100 km en 1 à 3 h',
        price: 'Sur devis',
        pros: [
          "Accès par badge RFID, supervision à distance",
          "Gestion multi-résidents et facturation automatique",
          "Prise en charge des démarches en copropriété",
        ],
      },
      {
        label: 'Premium',
        brand: null, model: 'Double prise + supervision',
        visualType: 'pied', iconBg: '#e8ecf5', photo: null,
        power: '7,4 à 22 kW · 2 sorties', charge: '2 véhicules simultanés',
        price: 'Sur devis',
        pros: [
          "2 prises simultanées, refacturation automatique",
          "Rapport de consommation mensuel inclus",
          "Infrastructure évolutive — prête pour 10+ résidents",
        ],
      },
    ],
  },
  portable: {
    intro: 'Solution flexible — idéale pour stationnement variable ou véhicule hybride rechargeable.',
    options: [
      {
        label: 'Basique',
        brand: null, model: 'Câble standard 1,8 kW',
        visualType: 'portable', iconBg: '#f5f0e8', photo: null,
        power: '1,8 kW', charge: '100 km en ~20 h',
        price: 'À partir de 90 € TTC',
        pros: [
          "Prise domestique standard, aucune installation",
          "Prix minimal pour usage occasionnel",
          "À emporter partout",
        ],
      },
      {
        label: 'Standard',
        brand: null, model: 'Câble renforcé 3,7 kW',
        visualType: 'portable', iconBg: '#f5f0e8', photo: null,
        power: '3,7 kW', charge: '100 km en ~8 h',
        price: 'À partir de 290 € TTC',
        pros: [
          "2× plus rapide que câble standard",
          "Protection thermique intégrée, homologué Mode 2",
          "Idéal pour PHEV ou usage secondaire",
        ],
      },
      {
        label: 'Intelligent',
        brand: null, model: 'Câble avec application',
        visualType: 'portable', iconBg: '#f5f0e8', photo: null,
        power: '3,7 kW', charge: '100 km en ~8 h',
        price: 'À partir de 490 € TTC',
        pros: [
          "Suivi consommation et programmation horaire",
          "Protection courant résiduel avancée",
          "Recharge intelligente depuis votre smartphone",
        ],
      },
    ],
  },
  solaire: {
    intro: 'Recharge pilotée par votre production solaire — économies maximales sur la durée.',
    options: [
      {
        label: 'Standard',
        brand: 'V2C', model: 'Trydan 7,4/22 kW',
        visualType: 'solaire', iconBg: '#f0f8e8', photo: 'img/bornes/v2c-trydan.jpg',
        power: '7,4 / 22 kW modulé', charge: 'Priorité surplus solaire',
        price: 'Sur devis installateur',
        pros: [
          "Recharge sur surplus solaire native — aucun module externe",
          "Câble 5 m inclus, compatible tous les onduleurs",
          "Jusqu'à 22 kW selon votre installation",
        ],
      },
      {
        label: 'Recommandé',
        brand: 'myenergi', model: 'Zappi v2.1',
        visualType: 'solaire', iconBg: '#e8f5f0', photo: 'img/bornes/myenergi-zappi.jpg',
        power: '7,4 / 22 kW modulé', charge: 'Modes Eco / Eco+ / Full',
        price: '~1 000 € HT',
        pros: [
          "La référence mondiale de la recharge solaire",
          "Compatible avec tous les onduleurs et installations PV",
          "DC 6 mA intégré · garantie 3 ans",
        ],
      },
      {
        label: 'Professionnel',
        brand: 'Schneider', model: 'Charge Pro OCPP',
        visualType: 'solaire', iconBg: '#e8ecf5', photo: 'https://www.e-planetelec.fr/95265-large_default/borne-de-recharge-charge-pro-de-74-a-22-kw-1p-3p-schneider-electric-evb4s22n40mg.jpg',
        power: '7,4 / 11 / 22 kW', charge: 'Supervision complète',
        price: 'Sur devis installateur',
        pros: [
          "OCPP 1.6, compteur MID, connexion 4G intégrés",
          "TIC Linky natif + supervision professionnelle",
          "S'adapte à toute évolution de votre installation",
        ],
      },
    ],
  },
};

function getHighlightedTier(rec, answers) {
  const { vehicule, frequence, km_jour } = answers;

  // Pied / portable : usage déterminé, pas de graduation par puissance
  if (rec === 'pied' || rec === 'portable') return 1;

  // Score combiné fréquence + km/jour → puissance recommandée
  let score = 0;
  if (frequence === 'quotidienne')   score += 2;
  else if (frequence === 'reguliere') score += 1;

  if (km_jour === 'plus80')          score += 2;
  else if (km_jour === 'entre30et80') score += 1;

  // score 0-1 → Essentiel, 2-3 → Recommandé, 4 → Premium
  let tier;
  if (score >= 4) tier = 2;
  else if (score >= 2) tier = 1;
  else tier = 0;

  // PHEV : petite batterie, premium inutile
  if (vehicule === 'phev') tier = Math.min(tier, 1);
  // Pas encore électrique : planning, recommandé suffit
  if (vehicule === 'bientot') tier = Math.min(tier, 1);

  return tier;
}

// ── Questionnaire component ───────────────────────────────────────────────
function Questionnaire() {
  const [phase, setPhase]     = React.useState('entry');
  const [stepId, setStepId]   = React.useState('stationnement');
  const [history, setHistory] = React.useState([]);
  const [answers, setAnswers] = React.useState({});
  const [rec, setRec]         = React.useState(null);
  const [busy, setBusy]       = React.useState(false);

  const current  = STEPS.find(s => s.id === stepId);
  const stepNum  = history.length + 1;
  const MAX_STEPS = 6;

  const handleStart = () => setPhase('quiz');

  const handleSelect = (value) => {
    if (busy) return;
    setBusy(true);
    const newAnswers = { ...answers, [stepId]: value };
    setAnswers(newAnswers);
    const nextId = getNextStepId(stepId, newAnswers);
    if (nextId) {
      setTimeout(() => {
        setHistory(h => [...h, stepId]);
        setStepId(nextId);
        setBusy(false);
      }, 240);
    } else {
      const r = getRecommendation(newAnswers);
      setRec(r);
      setTimeout(() => { setPhase('result'); setBusy(false); }, 240);
    }
  };

  const handleBack = () => {
    if (history.length === 0) {
      setPhase('entry');
    } else {
      const prevId = history[history.length - 1];
      setHistory(h => h.slice(0, -1));
      setStepId(prevId);
    }
  };

  const handleReset = () => {
    setStepId('stationnement');
    setHistory([]);
    setAnswers({});
    setRec(null);
    setPhase('entry');
  };

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
                6 questions sur votre logement, votre installation, votre véhicule et vos habitudes.
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
                ← {history.length === 0 ? 'Annuler' : 'Retour'}
              </button>
              <span className="quiz-step-count">{stepNum} / {MAX_STEPS}</span>
            </div>

            <div className="quiz-prog">
              {Array.from({ length: MAX_STEPS }).map((_, i) => (
                <div key={i} className={`quiz-prog-seg${i < history.length ? ' past' : i === history.length ? ' active' : ''}`}></div>
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
                  className={`quiz-card${answers[stepId] === opt.value ? ' selected' : ''}`}
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
        {phase === 'result' && rec && (
          <div className="quiz-result">
            <div className="qr-header">
              <div className="eyebrow">Résultat personnalisé</div>
              <h2 className="h-1" style={{ marginTop: 12 }}>Trois gammes pour votre situation</h2>
              <p className="quiz-result-intro">{RESULT_TIERS[rec].intro}</p>
            </div>

            <div className="qr-tiers">
              {RESULT_TIERS[rec].options.map((opt, idx) => {
                const isRec = idx === getHighlightedTier(rec, answers);
                return (
                  <div key={idx} className={`qrt-card${isRec ? ' qrt-highlighted' : ''}`}>
                    <div className="qrt-header">
                      {isRec && <div className="qrt-rec-label">Recommandé</div>}
                      <div className="qrt-tier-badge">{opt.label}</div>
                    </div>
                    <div className="qrt-visual" style={{ background: opt.iconBg }}>
                      {opt.photo
                        ? <img src={opt.photo} alt={opt.model} className="qrt-photo" />
                        : <div style={{ width: 88, height: 88 }}>
                            <BorneVisual type={opt.visualType || 'murale'} />
                          </div>
                      }
                    </div>
                    <div className="qrt-body">
                      {(opt.brand || opt.model) && (
                        <div className="qrt-brand">{[opt.brand, opt.model].filter(Boolean).join(' ')}</div>
                      )}
                      <div className="qrt-price">{opt.price}</div>
                      <div className="qrt-power">{opt.power} — {opt.charge}</div>
                      <ul className="qrt-pros">
                        {opt.pros.slice(0, 3).map((p, j) => <li key={j}>{p}</li>)}
                      </ul>
                      <a href="#contact" className="btn btn-accent qrt-cta">Devis gratuit →</a>
                    </div>
                  </div>
                );
              })}
            </div>

            {answers.solaire === 'non' && (
              <div className="qr-solar-upsell">
                <span className="solar-upsell-icon">☀️</span>
                <div className="solar-upsell-body">
                  <strong>Vous pensez à l'énergie solaire ?</strong>
                  <p>On installe aussi les panneaux. Rechargez votre voiture avec votre propre production et divisez votre coût de recharge par 3.</p>
                </div>
                <a href="#contact" className="btn btn-ghost solar-upsell-cta">Découvrir l'offre solaire →</a>
              </div>
            )}

            <div className="qr-bottom-row">
              <a href="tel:0652916578" className="btn btn-ghost">📞 Prendre RDV</a>
              <button className="quiz-restart-btn" onClick={handleReset}>↺ Refaire le questionnaire</button>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}

// ── Catalogue ─────────────────────────────────────────────────────────────
function CatalogueSection() {
  return (
    <section className="section" id="catalogue" style={{ background: '#f0f9ff' }}>
      <div className="wrap">
        <SecHeader
          eyebrow="Catalogue"
          title="Les bornes que nous recommandons."
          lede="Fiabilité, SAV France et rapport qualité/prix — les critères qui ont guidé notre sélection. Utilisez le questionnaire pour trouver votre modèle."
        />
        <div className="prod-grid">
          {Object.values(PRODUCTS).map((p) => (
            <article key={p.id} className="prod-card reveal">
              <div className="prod-visual" style={p.photo ? {} : { background: '#eaf6fd' }}>
                {p.photo
                  ? <img src={p.photo} alt={`${p.brand || ''} ${p.model || p.name}`} className="prod-photo" />
                  : <BorneVisual type={p.id} />
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
    a: "Oui. La TVA est réduite à 5,5 % (au lieu de 20 %) sur la fourniture et la pose de votre borne, dès lors que l'installation est réalisée par un installateur certifié IRVE — c'est notre cas. Prime ADVENIR disponible pour les copropriétés. Le crédit d'impôt de 500 € a été supprimé fin 2025 et n'est plus disponible."
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
