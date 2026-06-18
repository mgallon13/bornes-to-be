// app.jsx — Entry points for both pages, Tweaks wiring, body class effects.
// TWEAK_DEFAULTS is provided by the host HTML via window.__TWEAK_DEFAULTS
// (with EDITMODE markers in the inline script so the host can persist edits).

const ACCENT_SWATCHES = [
  ACCENT_PRESETS.navy,
  ACCENT_PRESETS.vert,
  ACCENT_PRESETS.orange,
  ACCENT_PRESETS.mono,
  ACCENT_PRESETS.or,
  ACCENT_PRESETS.bleu,
];

function accentKeyFromHex(hex) {
  const e = Object.entries(ACCENT_PRESETS).find(([_, v]) => v.toLowerCase() === String(hex).toLowerCase());
  return e ? e[0] : 'navy';
}

function useApplyTweaks(t) {
  React.useEffect(() => {
    applyTokens(t);
  }, [t]);
}

function TweaksUI({ t, setTweak, page }) {
  // Accent swatches: store the hex but map back to a preset key for token application.
  const onAccent = (hex) => {
    setTweak('accent', accentKeyFromHex(hex));
  };
  return (
    <TweaksPanel title="Ajustements">
      <TweakSection label="Thème">
        <TweakColor label="Accent" value={ACCENT_PRESETS[t.accent] || t.accent}
                    options={ACCENT_SWATCHES} onChange={onAccent} />
        <TweakRadio label="Fond" value={t.bgTone}
                    options={[
                      { value: 'warm', label: 'Chaud' },
                      { value: 'cool', label: 'Froid' },
                      { value: 'pure', label: 'Pur' },
                      { value: 'dark', label: 'Sombre' },
                    ]}
                    onChange={(v) => setTweak('bgTone', v)} />
      </TweakSection>

      <TweakSection label="Typographie">
        <TweakSelect label="Police titres" value={t.fontDisplay}
                     options={[
                       { value: 'inter', label: 'Inter (Söhne-like)' },
                       { value: 'grotesk', label: 'Space Grotesk' },
                       { value: 'helvetica', label: 'Helvetica Neue' },
                       { value: 'condensed', label: 'Condensé' },
                       { value: 'editorial', label: 'Fraunces (serif)' },
                     ]}
                     onChange={(v) => setTweak('fontDisplay', v)} />
        <TweakSelect label="Police corps" value={t.fontBody}
                     options={[
                       { value: 'inter', label: 'Inter' },
                       { value: 'helvetica', label: 'Helvetica Neue' },
                       { value: 'grotesk', label: 'Space Grotesk' },
                     ]}
                     onChange={(v) => setTweak('fontBody', v)} />
        <TweakSlider label="Échelle titres" value={t.titleScale}
                     min={0.8} max={1.25} step={0.05}
                     onChange={(v) => setTweak('titleScale', v)} />
      </TweakSection>

      <TweakSection label="Espacement & forme">
        <TweakRadio label="Densité" value={t.density}
                    options={[
                      { value: 0.8, label: 'Compact' },
                      { value: 1, label: 'Standard' },
                      { value: 1.2, label: 'Aéré' },
                    ]}
                    onChange={(v) => setTweak('density', v)} />
        <TweakRadio label="Boutons" value={t.radius}
                    options={[
                      { value: 0, label: 'Carré' },
                      { value: 4, label: 'Doux' },
                      { value: 999, label: 'Pill' },
                    ]}
                    onChange={(v) => setTweak('radius', v)} />
      </TweakSection>

      {page === 'accueil' && (
        <>
          <TweakSection label="Hero">
            <TweakSelect label="Style" value={t.heroVariant}
                         options={[
                           { value: 'fullbleed', label: 'Photo plein écran' },
                           { value: 'split', label: 'Split 50 / 50' },
                           { value: 'centered', label: 'Centré minimal' },
                         ]}
                         onChange={(v) => setTweak('heroVariant', v)} />
          </TweakSection>

          <TweakSection label="Cartes bornes">
            <TweakRadio label="Style" value={t.cardStyle}
                        options={[
                          { value: 'minimal', label: 'Minimal' },
                          { value: 'editorial', label: 'Édito' },
                          { value: 'technical', label: 'Tech' },
                        ]}
                        onChange={(v) => setTweak('cardStyle', v)} />
          </TweakSection>
        </>
      )}
    </TweaksPanel>
  );
}

// ── Accueil app ────────────────────────────────────────────────────────────
function useHashScroll() {
  React.useEffect(() => {
    const hash = window.location.hash;
    if (!hash) return;
    const el = document.querySelector(hash);
    if (el) {
      setTimeout(() => el.scrollIntoView({ behavior: 'smooth' }), 100);
    }
  }, []);
}

function AccueilApp() {
  const [t, setTweak] = useTweaks(window.__TWEAK_DEFAULTS);
  useApplyTweaks(t);
  useReveal();
  useHashScroll();
  return (
    <>
      <Header phone={PHONE} currentPage="accueil"
              heroDark={t.heroVariant === 'fullbleed'} />
      <main>
        <Hero variant={t.heroVariant} />
        <Trust />
        <AuditBanner />
        <CoproHomeSection />
        <BornesSection cardStyle={t.cardStyle} />
        <ContactSection defaultType="copro" />
      </main>
      <Footer phone={PHONE} />
      <TweaksUI t={t} setTweak={setTweak} page="accueil" />
    </>
  );
}

// ── Copropriétés app ──────────────────────────────────────────────────────
function CoproApp() {
  const [t, setTweak] = useTweaks(window.__TWEAK_DEFAULTS);
  useApplyTweaks(t);
  useReveal();
  useHashScroll();
  return (
    <>
      <Header phone={PHONE} currentPage="coproprietes" heroDark={false} />
      <main>
        <CoproHeader />
        <CoproVoies />
        <CoproWhat />
        <CoproProcess />
        <CoproFAQ />
        <ContactSection defaultType="copro" />
      </main>
      <Footer phone={PHONE} />
      <TweaksUI t={t} setTweak={setTweak} page="coproprietes" />
    </>
  );
}

// ── Bornes app ────────────────────────────────────────────────────────────
function BornesPageApp() {
  const [t, setTweak] = useTweaks(window.__TWEAK_DEFAULTS);
  useApplyTweaks(t);
  useReveal();
  return (
    <>
      <Header phone={PHONE} currentPage="bornes" heroDark={false} />
      <main>
        <BornesPageHeader />
        <Questionnaire />
        <CatalogueSection />
        <BornesFAQ />
        <ContactSection />
      </main>
      <Footer phone={PHONE} />
      <TweaksUI t={t} setTweak={setTweak} page="bornes" />
    </>
  );
}

// ── Particuliers app ──────────────────────────────────────────────────────
function ParticuliersApp() {
  const [t, setTweak] = useTweaks(window.__TWEAK_DEFAULTS);
  useApplyTweaks(t);
  useReveal();
  return (
    <>
      <Header phone={PHONE} currentPage="particuliers" heroDark={false} />
      <main>
        <PageHeader />
        <Process />
        <Offers />
        <FAQ />
        <ContactSection />
      </main>
      <Footer phone={PHONE} />
      <TweaksUI t={t} setTweak={setTweak} page="particuliers" />
    </>
  );
}

Object.assign(window, { AccueilApp, CoproApp, BornesPageApp, ParticuliersApp, TweakSection });
