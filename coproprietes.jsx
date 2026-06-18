// coproprietes.jsx — Page dédiée "Copropriétés"
// Contenu réglementaire aligné sur le guide interne (droit à la prise, voies
// individuelle/collective, aides ADVENIR/TVA, processus en AG).

// ── Page header ───────────────────────────────────────────────────────────
function CoproHeader() {
  return (
    <header className="page-header">
      <div className="wrap">
        <div className="crumb">
          <a href="index.html">Accueil</a>
          <span>→</span>
          <span>Copropriétés</span>
        </div>
        <h1 className="h-display" style={{ maxWidth: '24ch' }}>
          Des bornes pour votre résidence, sans souci.
        </h1>
        <p className="lede" style={{ marginTop: 24, maxWidth: '60ch' }}>
          On équipe votre copropriété de A à Z : audit, montage des aides, passage en
          assemblée générale, installation par nos électriciens certifiés IRVE, puis
          exploitation. Le syndic n'a rien à piloter, les non-utilisateurs ne paient rien.
        </p>
        <div style={{ display: 'flex', gap: 14, marginTop: 36, flexWrap: 'wrap' }}>
          <a href="#contact" className="btn btn-accent">Demander un audit gratuit →</a>
          <a href="#process" className="btn btn-ghost">Voir notre process</a>
        </div>
        <div className="stats">
          <div>
            <div className="n">0 €</div>
            <div className="l">Reste à charge possible pour le syndicat en modèle opérateur tiers-investisseur.</div>
          </div>
          <div>
            <div className="n">50 %</div>
            <div className="l">du coût HT financé par la prime ADVENIR, dossier monté pour vous.</div>
          </div>
          <div>
            <div className="n">Art. 24</div>
            <div className="l">Vote en assemblée à la majorité simple pour un projet sans reste à charge.</div>
          </div>
        </div>
      </div>
    </header>
  );
}

// ── Les deux voies ────────────────────────────────────────────────────────
function CoproVoies() {
  return (
    <section className="section" id="voies">
      <div className="wrap">
        <SecHeader
          eyebrow="Deux approches"
          title="Équiper une place, ou tout le parking."
          lede="Selon votre copropriété, deux chemins existent. On vous oriente vers le plus rapide et le moins coûteux pour votre situation." />

        <div className="cards" data-style="editorial">
          <article className="card reveal">
            <div className="body">
              <div className="meta">
                <span className="tag">Voie individuelle</span>
                <span className="idx">Droit à la prise</span>
              </div>
              <h3 className="ttl"><span className="mark">Une borne sur votre place, sans vote</span></h3>
              <p className="desc">
                Tout copropriétaire ou locataire peut équiper sa place à ses frais. Le
                syndic est informé en AG mais ne vote pas : il ne peut s'opposer que par
                voie judiciaire, sous 3 mois et pour motif sérieux et légitime.
              </p>
              <ul className="features">
                <li>Aucun vote en assemblée générale</li>
                <li>Comptage individuel : vous payez votre seule consommation</li>
                <li>Délai moyen : 2,5 à 5,5 mois</li>
              </ul>
              <div className="footer">
                <a href="#contact" className="btn-link">Lancer ma demande <span className="arr">↗</span></a>
              </div>
            </div>
          </article>

          <article className="card reveal">
            <div className="body">
              <div className="meta">
                <span className="tag">Voie collective</span>
                <span className="idx">Infrastructure partagée</span>
              </div>
              <h3 className="ttl"><span className="mark">Tout le parking prêt pour l'électrique</span></h3>
              <p className="desc">
                La copropriété installe une infrastructure collective à laquelle chaque
                résident raccorde ensuite sa borne. En modèle opérateur, l'infrastructure
                est financée : 0 € pour le syndicat, vote à la majorité simple.
              </p>
              <ul className="features">
                <li>Modèle opérateur : aucun débours pour la copropriété</li>
                <li>Économies d'échelle, infrastructure évolutive</li>
                <li>Délai moyen : environ 12 mois</li>
              </ul>
              <div className="footer">
                <a href="#contact" className="btn-link">Étudier ma copropriété <span className="arr">↗</span></a>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

// ── Ce qu'on prend en charge ──────────────────────────────────────────────
const COPRO_PRISE_EN_CHARGE = [
  {
    tag: 'Audit', idx: '01',
    title: 'Audit technique et réglementaire',
    desc: "Visite sur site : tableau général, puissance disponible, cheminement des câbles, état de la colonne montante. On vérifie aussi le cadre juridique propre à votre copropriété.",
  },
  {
    tag: 'Montage', idx: '02',
    title: 'Choix du meilleur montage',
    desc: "Opérateur sans reste à charge, financement par la copropriété ou colonne Enedis préfinancée : on compare les scénarios et on recommande le plus adapté à votre parking.",
  },
  {
    tag: 'Aides', idx: '03',
    title: 'Dossier de subventions',
    desc: "Prime ADVENIR (50 % du coût HT), TVA réduite à 5,5 %, aides locales. On monte et on dépose le dossier avant le début des travaux : c'est une condition obligatoire pour en bénéficier.",
  },
  {
    tag: 'Assemblée', idx: '04',
    title: 'Passage en assemblée générale',
    desc: "Projet de résolution rédigé, devis détaillés joints à la convocation 21 jours avant : on prépare un dossier clé en main qui réduit la friction et accélère le vote.",
  },
  {
    tag: 'Installation', idx: '05',
    title: 'Installation certifiée IRVE',
    desc: "Travaux réalisés par nos électriciens partenaires qualifiés IRVE (obligatoire au-delà de 3,7 kW), avec attestation de conformité Consuel et comptage individuel par borne.",
  },
  {
    tag: 'Exploitation', idx: '06',
    title: 'Exploitation et suivi',
    desc: "Pilotage dynamique de la charge pour ne jamais dépasser la puissance de l'immeuble, refacturation par résident, supervision à distance et infrastructure prête à monter en charge.",
  },
];

function CoproWhat() {
  return (
    <section className="section" id="accompagnement" style={{ background: 'var(--bg-2)' }}>
      <div className="wrap">
        <SecHeader
          eyebrow="Notre accompagnement"
          title="Ce qu'on prend en charge pour vous."
          lede="De la première visite à la mise en service, chaque étape est gérée. Le conseil syndical garde la main sur les décisions, pas sur la logistique." />

        <div className="cards three" data-style="editorial">
          {COPRO_PRISE_EN_CHARGE.map((c, i) => (
            <article key={i} className="card reveal" style={{ background: 'var(--bg)' }}>
              <div className="body">
                <div className="meta">
                  <span className="tag">{c.tag}</span>
                  <span className="idx">{c.idx}</span>
                </div>
                <h3 className="ttl"><span className="mark">{c.title}</span></h3>
                <p className="desc">{c.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── Process ───────────────────────────────────────────────────────────────
const COPRO_PROCESS = [
  {
    tag: 'Étape 1', idx: '01',
    title: 'Audit et faisabilité',
    desc: "On visite le parking, on mesure la puissance disponible et on chiffre. Vous recevez un dossier clair : scénario recommandé, coût net après aides, modèle de répartition.",
  },
  {
    tag: 'Étape 2', idx: '02',
    title: 'Assemblée générale',
    desc: "On fournit le projet de résolution et les devis à joindre à la convocation. Pour un projet sans reste à charge, le vote se fait à la majorité simple et les travaux peuvent démarrer dès la notification du procès-verbal.",
  },
  {
    tag: 'Étape 3', idx: '03',
    title: 'Installation et mise en service',
    desc: "Nos électriciens IRVE posent l'infrastructure et les bornes, attestation Consuel à l'appui. Comptage individuel activé, chaque résident gère et paie sa propre recharge.",
  },
];

function CoproProcess() {
  return (
    <section className="section" id="process">
      <div className="wrap">
        <SecHeader
          eyebrow="Comment ça se passe"
          title="Trois étapes, un seul interlocuteur."
          lede="On orchestre l'ensemble du projet. Vous validez, on exécute." />

        <div className="cards three" data-style="editorial">
          {COPRO_PROCESS.map((c, i) => (
            <article key={i} className="card reveal">
              <div className="body">
                <div className="meta">
                  <span className="tag">{c.tag}</span>
                  <span className="idx">{c.idx}</span>
                </div>
                <h3 className="ttl"><span className="mark">{c.title}</span></h3>
                <p className="desc">{c.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── FAQ ───────────────────────────────────────────────────────────────────
const COPRO_QUESTIONS = [
  {
    q: "Faut-il un vote en assemblée générale pour installer une borne ?",
    a: "Pas pour une borne individuelle : c'est le droit à la prise. Le copropriétaire informe le syndic, la question est inscrite à l'AG pour information seulement, sans vote. Le syndic ne peut s'opposer que par voie judiciaire, sous 3 mois et pour un motif sérieux et légitime. Pour une infrastructure collective, un vote est nécessaire, mais un projet sans reste à charge passe à la majorité simple (article 24).",
  },
  {
    q: "Combien ça coûte à la copropriété ?",
    a: "En modèle opérateur tiers-investisseur, 0 € : l'opérateur finance l'infrastructure et se rémunère uniquement sur les abonnements des résidents qui rechargent. Si la copropriété finance elle-même, l'infrastructure (8 000 à 25 000 € HT selon le parking) est subventionnée par ADVENIR, soit de l'ordre de 200 à 300 € par place après aide.",
  },
  {
    q: "Quelles aides sont disponibles en 2026 ?",
    a: "La prime ADVENIR couvre 50 % du coût HT (plafonds relevés au 1er avril 2026), la TVA est réduite à 5,5 % sur la fourniture et la pose, et des aides locales peuvent s'ajouter (Région Sud, Métropole Aix-Marseille-Provence). Attention : le crédit d'impôt national pour borne a pris fin le 31 décembre 2025 et n'a pas été reconduit. On monte le dossier ADVENIR avant les travaux, condition obligatoire pour y avoir droit.",
  },
  {
    q: "Un seul copropriétaire peut-il s'équiper sans les autres ?",
    a: "Oui, c'est tout l'intérêt du droit à la prise. Il équipe sa place à ses frais, avec un comptage individuel, sans avoir besoin de l'accord de l'assemblée. C'est aussi le plan B imparable si un projet collectif est refusé en AG : chaque résident intéressé peut avancer seul.",
  },
  {
    q: "Les copropriétaires sans voiture électrique vont-ils payer ?",
    a: "Non, en droit à la prise comme en modèle opérateur. Chaque borne dispose de son propre comptage : seul l'utilisateur paie sa consommation. Une quote-part partagée n'existe que si la copropriété choisit de financer elle-même l'infrastructure, et elle est alors largement subventionnée par ADVENIR.",
  },
  {
    q: "Combien de temps entre la décision et la première recharge ?",
    a: "Pour une borne individuelle, comptez environ 2,5 à 5,5 mois (délai d'opposition, convention, raccordement). Pour une infrastructure collective, environ 12 mois entre la préparation, le délai de recours et les travaux. Une fois l'infrastructure posée, raccorder une nouvelle borne ne prend plus que 4 à 8 semaines.",
  },
  {
    q: "Qui réalise concrètement les travaux ?",
    a: "Des électriciens certifiés IRVE, qualification obligatoire au-delà de 3,7 kW (référentiel Qualifelec / AFNOR). L'installation est conforme à la norme NF C 15-100 avec attestation Consuel. C'est aussi la condition pour bénéficier de la TVA à 5,5 %, de la prime ADVENIR et pour être couvert par votre assurance en cas de sinistre.",
  },
  {
    q: "Mon immeuble est ancien, à Marseille. Est-ce possible ?",
    a: "Oui, après diagnostic. On vérifie le tableau, la capacité de la colonne montante, la présence éventuelle d'amiante (fréquente dans le bâti ancien) et la mise en conformité nécessaire. Un devis sérieux passe toujours par une visite technique : méfiez-vous d'un chiffrage donné sans déplacement.",
  },
];

function CoproFAQ() {
  const [open, setOpen] = React.useState(0);
  return (
    <section className="section" style={{ background: 'var(--bg-2)' }}>
      <div className="wrap">
        <SecHeader
          eyebrow="Questions fréquentes"
          title="Ce que les syndics et conseils syndicaux nous demandent."
          lede="Le cadre légal est plus favorable qu'on ne le croit. Voici les réponses qui débloquent un projet." />
        <div className="faq">
          {COPRO_QUESTIONS.map((q, i) => (
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

Object.assign(window, { CoproHeader, CoproVoies, CoproWhat, CoproProcess, CoproFAQ });
