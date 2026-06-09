// bornes-page.jsx — Page dédiée "Nos bornes"

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
          Borne murale, borne sur pied, borne pilotée par vos panneaux solaires —
          chaque configuration a ses contraintes. On les étudie avant de vous recommander quoi que ce soit.
        </p>
        <div style={{ display: 'flex', gap: 14, marginTop: 36 }}>
          <a href="#contact" className="btn btn-accent">Demander un devis →</a>
          <a href="#nos-bornes" className="btn btn-ghost">Voir les solutions</a>
        </div>
        <div className="stats">
          <div>
            <div className="n">3 types</div>
            <div className="l">Murale, sur pied, intégrée solaire — adaptées à trois contextes différents.</div>
          </div>
          <div>
            <div className="n">3.7 → 22 kW</div>
            <div className="l">Puissance ajustée à votre tableau, abonnement et véhicule.</div>
          </div>
          <div>
            <div className="n">IRVE niv. 2</div>
            <div className="l">Certification obligatoire pour une installation conforme et garantie.</div>
          </div>
        </div>
      </div>
    </header>
  );
}

function BornesGuide() {
  const items = [
    {
      n: '01',
      type: 'Borne murale',
      pour: 'Maison individuelle, garage, box privatif',
      puissance: '3.7 à 22 kW',
      recharge: '100 km en ~3h (7.4 kW)',
      ideal: 'Recharger la nuit, chaque jour',
      note: 'La solution la plus courante et la moins coûteuse.',
    },
    {
      n: '02',
      type: 'Borne sur pied',
      pour: 'Parking de copropriété, espace commun partagé',
      puissance: '7.4 à 22 kW',
      recharge: 'Double prise possible',
      ideal: 'Plusieurs résidents, gestion des accès',
      note: "Nécessite une étude du tableau général de l'immeuble.",
    },
    {
      n: '03',
      type: 'Borne + solaire',
      pour: 'Maison avec panneaux solaires existants ou en projet',
      puissance: '7.4 à 22 kW modulée',
      recharge: 'Priorité sur production propre',
      ideal: 'Recharger gratuit en journée',
      note: 'Notre spécialité. Rechargez avec votre propre énergie.',
    },
  ];
  return (
    <section className="section" style={{ background: 'var(--bg-2)' }}>
      <div className="wrap">
        <SecHeader
          eyebrow="Choisir"
          title="Quelle borne pour quelle situation ?"
          lede="Trois cas de figure couvrent 95 % des projets qu'on rencontre. Si le vôtre ne rentre pas dedans, on l'étudie au cas par cas."
        />
        <div className="guide-grid">
          {items.map((item) => (
            <div key={item.n} className="guide-card reveal">
              <div className="guide-n">{item.n}</div>
              <h3 className="guide-type">{item.type}</h3>
              <div className="guide-rows">
                <div className="guide-row"><span className="guide-lbl">Pour</span><span>{item.pour}</span></div>
                <div className="guide-row"><span className="guide-lbl">Puissance</span><span>{item.puissance}</span></div>
                <div className="guide-row"><span className="guide-lbl">Recharge</span><span>{item.recharge}</span></div>
                <div className="guide-row"><span className="guide-lbl">Idéal si</span><span>{item.ideal}</span></div>
              </div>
              <p className="guide-note">{item.note}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const BORNES_QUESTIONS = [
  {
    q: "Quelle puissance choisir pour mon véhicule ?",
    a: "Ça dépend de trois choses : votre véhicule (sa puissance de charge embarquée), votre tableau électrique (monophasé ou triphasé), et votre usage. Pour 90 % des particuliers, une borne 7,4 kW monophasée suffit — recharge complète en 6 à 8 heures, idéale pour la nuit. On ajuste lors de la visite technique."
  },
  {
    q: "Puis-je installer une borne si je suis locataire ?",
    a: "Oui, sous conditions. La loi Lagleize vous donne le droit d'installer une borne, même en copropriété, sauf opposition motivée de l'assemblée générale. La démarche est différente selon que vous avez un garage privatif ou une place en parking commun. On peut vous guider sur la procédure."
  },
  {
    q: "Quelle est la différence entre une borne IRVE et un simple câble ?",
    a: "Un câble branché sur une prise classique (Mode 1 ou 2) ne protège pas contre les défauts prolongés et peut endommager votre installation. Une borne IRVE (Mode 3) communique avec le véhicule, gère la puissance en temps réel et protège l'installation. C'est la seule solution homologuée pour un usage quotidien."
  },
  {
    q: "Combien de temps prend l'installation ?",
    a: "Une borne murale standard : une demi-journée. Une borne sur pied en parking collectif ou une configuration avec intégration solaire : une journée, parfois un peu plus selon les distances de câblage. On vous donne un planning précis avant de commencer."
  },
  {
    q: "La borne fonctionne-t-elle avec tous les véhicules électriques ?",
    a: "Oui. Toutes les bornes que nous installons sont compatibles avec le standard européen Type 2. Elles fonctionnent avec Renault Zoé, Tesla, Volkswagen ID.3/4, BMW iX, Peugeot e-208, et tous les VE vendus en Europe."
  },
  {
    q: "Y a-t-il des aides financières disponibles ?",
    a: "Oui. Pour les particuliers en résidence principale : crédit d'impôt à 75 % (plafonné). Pour les copropriétés : prime ADVENIR (AFIREV) qui peut couvrir une partie des coûts d'infrastructure. On vous indique ce à quoi vous avez droit directement dans le devis."
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
          lede="Chaque projet est différent — mais ces questions reviennent à chaque fois. Si la vôtre n'est pas là, posez-la directement."
        />
        <div className="faq">
          {BORNES_QUESTIONS.map((q, i) => (
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

Object.assign(window, { BornesPageHeader, BornesGuide, BornesFAQ });
