'use client';

import { useEffect, useRef, useState } from 'react';

// ─── IMAGES ─────────────────────────────────────────────────────────────────
const WIX = 'https://static.wixstatic.com/media/';
const IMG = {
  // Devanture / Façade (about page hero — closest to storefront found)
  devanture:  WIX + 'c0319c_870bac3afc0d476e8f2e3c4ece253582~mv2_d_2800_2772_s_4_2.jpg',
  // Interior / Salon
  interieur:  WIX + 'c0319c_5f5354e747924972bf6f69f198c901e9~mv2_d_4000_3000_s_4_2.jpg',
  // Portfolio shots
  hair1:      WIX + 'c0319c_f54150e82cdd46869e3d4fd69686d19b~mv2_d_2160_3840_s_2.jpg',
  hair2:      WIX + 'c0319c_8598bd5d6b8348039eb86b765e6d1aac~mv2_d_2160_3840_s_2.jpg',
  hair3:      WIX + 'c0319c_49e32a72f98d423396227adfb2df7541~mv2_d_3840_2160_s_2.jpg',
  hair4:      WIX + 'c0319c_83704e29790247d9b3168320413fc6c1~mv2_d_2160_3840_s_2.jpg',
  hair5:      WIX + 'c0319c_685d67f166294f3fa38d61a07fe745c3~mv2_d_2160_3840_s_2.jpg',
  hair6:      WIX + 'c0319c_74bc1708a2f04d6a92fc1cf7b8c6f4b8~mv2_d_3840_2160_s_2.jpg',
  hair7:      WIX + 'c0319c_40dd2a0dfa70487b81039b09ba103956~mv2_d_2800_2074_s_2.jpg',
};

// ─── DATA ────────────────────────────────────────────────────────────────────
const SERVICES = [
  { n: '01', name: 'Coupe & Brushing',      desc: 'Coupe de transformation, sur cheveux fins ou très frisés. Chaque coupe est pensée en accord avec votre morphologie et votre style de vie.', sub: 'Visagiste ↗' },
  { n: '02', name: 'Couleur & Coloration',  desc: 'Colorations personnalisées, retouches de racines, techniques avancées adaptées à votre teinte naturelle. Résultat éclatant garanti.', sub: 'Coloriste ↗' },
  { n: '03', name: 'Mèches & Balayage',     desc: 'Spécialiste des mèches et balayages, pour un résultat naturel et lumineux qui sublime votre chevelure en toutes saisons.', sub: 'Spécialiste ↗' },
  { n: '04', name: 'Lissage Premium',       desc: 'Lissages brésilien, japonais, coréen et à la kératine. Techniques d excellence pour une chevelure lisse, brillante et disciplinée.', sub: 'Brésilien · Japonais · Coréen ↗' },
  { n: '05', name: 'Chignons & Mariages',   desc: 'À deux pas de l Hotel de Ville, ideal pour les futures mariées. Chignons élégants et coiffures événementielles sur mesure.', sub: 'Sur rendez-vous ↗' },
  { n: '06', name: 'Soins & Botox Capillaire', desc: 'Traitement botox réparateur, soins en profondeur pour redonner vie, brillance et force à votre chevelure. Résultats visibles dès la première séance.', sub: 'Soin réparateur ↗' },
];

const REVIEWS = [
  { text: 'Une coloriste exceptionnelle. Une femme chaleureuse et de très bons conseils. Depuis 6 ans je ne vais plus ailleurs.', name: 'Fatima M.', src: 'Google' },
  { text: 'Je suis ressortie toute émue. C'est la première fois qu une coiffeuse me fait des mèches d une telle qualité. Je le conseille à tout le monde.', name: 'Sophie L.', src: 'Google' },
  { text: 'Elle ma fait un lissage brésilien de qualité et une coupe à très bon prix. Une véritable magicienne des cheveux.', name: 'Nadia B.', src: 'Pages Jaunes' },
  { text: 'C est une femme qui a des mains en or. Mes cheveux sont très difficiles et elle réussit toujours à les rendre beaux et faciles à coiffer.', name: 'Isabelle P.', src: 'Google' },
  { text: 'Siwar sort du lot. Elle prend le temps de donner des conseils même après être sortie du salon. Le prix est correct, le résultat toujours au rendez-vous.', name: 'Karima D.', src: 'Pages Jaunes' },
  { text: 'J'ai enfin trouvé une coiffeuse talentueuse et à l'écoute. Je recommande vivement ce salon à toutes les femmes d'Aix-en-Provence.', name: 'Marie C.', src: 'Google' },
];

const HOURS = [
  { day: 'Lundi',    time: 'Fermé',           closed: true },
  { day: 'Mardi',    time: '10h00 – 19h00' },
  { day: 'Mercredi', time: '10h00 – 19h00' },
  { day: 'Jeudi',    time: '10h00 – 19h00' },
  { day: 'Vendredi', time: '10h00 – 19h00' },
  { day: 'Samedi',   time: '10h00 – 19h00' },
  { day: 'Dimanche', time: 'Fermé',           closed: true },
];

const DAYS = ['Dimanche','Lundi','Mardi','Mercredi','Jeudi','Vendredi','Samedi'];

// ─── COMPONENT ───────────────────────────────────────────────────────────────
export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const today = DAYS[new Date().getDay()];

  // Refs for GSAP targets
  const heroRef     = useRef(null);
  const heroBgRef   = useRef(null);
  const heroLabelRef= useRef(null);
  const heroSubRef  = useRef(null);
  const heroDivRef  = useRef(null);
  const heroBtnRef  = useRef(null);
  const heroScrollRef = useRef(null);

  useEffect(() => {
    let ctx;

    const init = async () => {
      const { default: gsap }          = await import('gsap');
      const { ScrollTrigger }          = await import('gsap/ScrollTrigger');
      const { default: Lenis }         = await import('@studio-freight/lenis');

      gsap.registerPlugin(ScrollTrigger);

      // ── LENIS SMOOTH SCROLL ────────────────────────────────────────────────
      const lenis = new Lenis({
        duration: 1.25,
        easing: t => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      });
      gsap.ticker.add(time => lenis.raf(time * 1000));
      gsap.ticker.lagSmoothing(0);
      lenis.on('scroll', ScrollTrigger.update);

      // ── CUSTOM CURSOR ──────────────────────────────────────────────────────
      const dot  = document.getElementById('cDot');
      const ring = document.getElementById('cRing');
      if (dot && ring && window.matchMedia('(pointer:fine)').matches) {
        let mx = 0, my = 0, rx = 0, ry = 0;
        document.addEventListener('mousemove', e => {
          mx = e.clientX; my = e.clientY;
          dot.style.left = mx + 'px'; dot.style.top = my + 'px';
        }, { passive: true });
        const lerp = () => {
          rx += (mx - rx) * 0.13; ry += (my - ry) * 0.13;
          ring.style.left = rx + 'px'; ring.style.top = ry + 'px';
          requestAnimationFrame(lerp);
        };
        lerp();
        document.querySelectorAll('a, .svc-card, .review-card, .gal-item').forEach(el => {
          el.addEventListener('mouseenter', () => dot.classList.add('large'));
          el.addEventListener('mouseleave', () => dot.classList.remove('large'));
        });
      }

      // ── STICKY NAV ────────────────────────────────────────────────────────
      const nav = document.getElementById('navWrap');
      window.addEventListener('scroll', () => {
        nav?.classList.toggle('scrolled', window.scrollY > 50);
      }, { passive: true });

      // ── HERO ENTRANCE TIMELINE ────────────────────────────────────────────
      ctx = gsap.context(() => {
        const tl = gsap.timeline({ delay: 0.15 });
        tl
          .to('#heroLabel',  { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' })
          .to('.hero-tl',    { y: '0%', duration: 1.1, ease: 'expo.out', stagger: 0.12 }, '-=0.45')
          .to('#heroSub',    { opacity: 1, duration: 0.8, ease: 'power2.out' }, '-=0.5')
          .to('#heroDiv',    { opacity: 1, scaleY: 1, duration: 0.6, ease: 'power2.out' }, '-=0.35')
          .to('#heroBtn',    { opacity: 1, y: 0, duration: 0.55, ease: 'power2.out' }, '-=0.3')
          .to('#heroScroll', { opacity: 1, duration: 0.6, ease: 'power2.out' }, '-=0.2');

        // ── HERO PARALLAX ──
        gsap.to('#heroBg', {
          yPercent: 32,
          ease: 'none',
          scrollTrigger: { trigger: '#hero', start: 'top top', end: 'bottom top', scrub: true },
        });

        // ── ABOUT ──────────────────────────────────────────────────────────
        gsap.to('#abLine', {
          scaleY: 1, duration: 1.3, ease: 'power3.out',
          scrollTrigger: { trigger: '#about', start: 'top 72%' },
        });
        gsap.to('.ab-tl', {
          y: '0%', duration: 1.05, ease: 'expo.out', stagger: 0.1,
          scrollTrigger: { trigger: '#about', start: 'top 72%' },
        });
        gsap.to('#abImg', {
          yPercent: -12, ease: 'none',
          scrollTrigger: { trigger: '#about', start: 'top bottom', end: 'bottom top', scrub: true },
        });
        gsap.from('.ab-txt', {
          opacity: 0, y: 20, duration: 0.7, ease: 'power2.out', stagger: 0.1,
          scrollTrigger: { trigger: '#about', start: 'top 65%' },
        });
        gsap.from('.ab-stat', {
          opacity: 0, y: 18, duration: 0.6, ease: 'power2.out', stagger: 0.12,
          scrollTrigger: { trigger: '#aboutStats', start: 'top 85%' },
        });

        // ── SERVICES ───────────────────────────────────────────────────────
        gsap.from('.sec-lbl-svc', {
          opacity: 0, y: 16, duration: 0.7, ease: 'power2.out',
          scrollTrigger: { trigger: '#svc', start: 'top 75%' },
        });
        gsap.to('.svc-tl', {
          y: '0%', duration: 1.05, ease: 'expo.out', stagger: 0.1,
          scrollTrigger: { trigger: '#svc', start: 'top 70%' },
        });
        gsap.from('.svc-card', {
          opacity: 0, y: 28, duration: 0.7, ease: 'power2.out', stagger: 0.08,
          scrollTrigger: { trigger: '#svcGrid', start: 'top 82%' },
        });

        // ── GALLERY ────────────────────────────────────────────────────────
        gsap.from('.sec-lbl-gal', {
          opacity: 0, y: 16, duration: 0.7,
          scrollTrigger: { trigger: '#gal', start: 'top 75%' },
        });
        gsap.to('.gal-tl', {
          y: '0%', duration: 1.05, ease: 'expo.out', stagger: 0.1,
          scrollTrigger: { trigger: '#gal', start: 'top 70%' },
        });
        gsap.from('.gal-item', {
          opacity: 0, y: 36, duration: 0.8, ease: 'power2.out', stagger: 0.1,
          scrollTrigger: { trigger: '#galGrid', start: 'top 82%' },
        });

        // ── TESTIMONIALS ───────────────────────────────────────────────────
        gsap.from('.sec-lbl-rev', {
          opacity: 0, y: 16, duration: 0.7,
          scrollTrigger: { trigger: '#rev', start: 'top 75%' },
        });
        gsap.to('.rev-tl', {
          y: '0%', duration: 1.05, ease: 'expo.out', stagger: 0.1,
          scrollTrigger: { trigger: '#rev', start: 'top 70%' },
        });
        gsap.from('.review-card', {
          opacity: 0, y: 28, duration: 0.7, ease: 'power2.out', stagger: 0.09,
          scrollTrigger: { trigger: '#revGrid', start: 'top 82%' },
        });

        // ── CONTACT ────────────────────────────────────────────────────────
        gsap.to('.cta-tl', {
          y: '0%', duration: 1.05, ease: 'expo.out', stagger: 0.1,
          scrollTrigger: { trigger: '#cta', start: 'top 70%' },
        });
        gsap.from('.cta-info', {
          opacity: 0, y: 18, duration: 0.7, ease: 'power2.out', stagger: 0.08,
          scrollTrigger: { trigger: '#cta', start: 'top 65%' },
        });

        // ── MAGNETIC BUTTONS ───────────────────────────────────────────────
        document.querySelectorAll('.magnetic').forEach(btn => {
          btn.addEventListener('mousemove', e => {
            const rect = btn.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;
            gsap.to(btn, { x: x * 0.28, y: y * 0.28, duration: 0.4, ease: 'power2.out' });
          });
          btn.addEventListener('mouseleave', () => {
            gsap.to(btn, { x: 0, y: 0, duration: 0.6, ease: 'elastic.out(1,0.4)' });
          });
        });

      });
    };

    init();

    return () => {
      ctx?.revert();
    };
  }, []);

  return (
    <>
      {/* CURSOR */}
      <div id="cDot"  className="cursor-dot"  aria-hidden="true" />
      <div id="cRing" className="cursor-ring" aria-hidden="true" />

      {/* MOBILE MENU */}
      <div className={`mobile-menu ${menuOpen ? 'open' : ''}`} aria-hidden={!menuOpen}>
        {['#about','#svc','#gal','#rev','#cta'].map((href, i) => (
          <a key={i} href={href} onClick={() => setMenuOpen(false)}>
            {['À Propos','Services','Galerie','Avis','Contact'][i]}
          </a>
        ))}
        <a href="tel:+33695553468" onClick={() => setMenuOpen(false)} style={{ color: 'var(--accent)' }}>
          06 95 55 34 68
        </a>
      </div>

      {/* NAV */}
      <nav id="navWrap" className="nav-wrap" role="navigation" aria-label="Navigation principale">
        <a href="#hero" className="nav-logo" aria-label="Accueil Siwar Coiffure">SIWAR COIFFURE</a>
        <ul className="nav-links">
          {[['#about','À Propos'],['#svc','Services'],['#gal','Galerie'],['#rev','Avis'],['#cta','Contact']].map(([h,l]) => (
            <li key={h}><a href={h}>{l}</a></li>
          ))}
        </ul>
        <a href="tel:+33695553468" className="btn-nav magnetic" aria-label="Appeler pour prendre rendez-vous">
          Prendre RDV
        </a>
        <button
          className={`hamburger ${menuOpen ? 'open' : ''}`}
          onClick={() => setMenuOpen(p => !p)}
          aria-label={menuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
          aria-expanded={menuOpen}
        >
          <span /><span /><span />
        </button>
      </nav>

      <main>
        {/* ── HERO ──────────────────────────────────────────────────────────── */}
        <section
          id="hero"
          ref={heroRef}
          className="relative flex items-center justify-center overflow-hidden"
          style={{ minHeight: '100svh' }}
          aria-label="Salon Siwar Coiffure — Aix-en-Provence depuis 2002"
        >
          {/* Devanture photo as hero background */}
          <div
            id="heroBg"
            className="hero-bg"
            style={{ backgroundImage: `url('${IMG.devanture}')` }}
            role="img"
            aria-label="Devanture du salon Siwar Coiffure, 8 rue du Puits Neuf, Aix-en-Provence"
          />
          <div className="hero-overlay" aria-hidden="true" />

          <div className="relative z-10 text-center px-6 md:px-12" style={{ maxWidth: '900px' }}>
            {/* Label */}
            <div
              id="heroLabel"
              className="sec-label"
              style={{ opacity: 0, transform: 'translateY(18px)', marginBottom: '1.75rem' }}
            >
              Aix-en-Provence &nbsp;·&nbsp; Depuis 2002
            </div>

            {/* Main title */}
            <h1 className="hero-title" style={{ marginBottom: '1.75rem' }}>
              <span className="title-line hero-tl">SIWAR</span>
              <span className="title-line hero-tl">COIFFURE</span>
            </h1>

            {/* Sub */}
            <p
              id="heroSub"
              className="hero-sub"
              style={{ opacity: 0, marginBottom: '3rem' }}
            >
              Visagiste &nbsp;·&nbsp; Coloriste &nbsp;·&nbsp; Spécialiste couleur
            </p>

            {/* Divider */}
            <div
              id="heroDiv"
              className="hero-divider"
              style={{ opacity: 0, transform: 'scaleY(0)', marginBottom: '2.5rem' }}
              aria-hidden="true"
            />

            {/* CTA */}
            <a
              id="heroBtn"
              href="tel:+33695553468"
              className="btn-primary magnetic"
              style={{ opacity: 0, transform: 'translateY(18px)' }}
              aria-label="Appeler le salon pour prendre rendez-vous"
            >
              Prendre Rendez-vous
            </a>
          </div>

          {/* Scroll indicator */}
          <div id="heroScroll" className="scroll-indicator" style={{ opacity: 0 }} aria-hidden="true">
            <span>Découvrir</span>
            <div className="scroll-line" />
          </div>
        </section>

        {/* ── MARQUEE ──────────────────────────────────────────────────────── */}
        <div
          role="presentation"
          className="overflow-hidden"
          style={{ padding: '1.4rem 0', borderTop: '1px solid var(--line)', borderBottom: '1px solid var(--line)' }}
        >
          <div className="marquee-track">
            {['Coupe','Couleur','Balayage','Mèches','Lissage','Chignons','Botox Capillaire','Extensions',
              'Coupe','Couleur','Balayage','Mèches','Lissage','Chignons','Botox Capillaire','Extensions'].map((t,i) => (
              <span key={i} className="marquee-item">
                {t}<span style={{ color: 'var(--accent)', margin: '0 .35rem' }}>·</span>
              </span>
            ))}
          </div>
        </div>

        {/* ── ABOUT ────────────────────────────────────────────────────────── */}
        <section
          id="about"
          className="grid gap-14 md:gap-24"
          style={{
            padding: 'clamp(4rem,8vw,9rem) clamp(1.5rem,4vw,3.5rem)',
            maxWidth: '1440px',
            margin: '0 auto',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%,480px), 1fr))',
          }}
          aria-labelledby="aboutHeading"
        >
          {/* Text */}
          <div>
            <span className="sec-label">À Propos du Salon</span>
            <h2 id="aboutHeading" className="about-title" style={{ marginBottom: '2.2rem' }}>
              <span className="title-line ab-tl">L excellence</span>
              <span className="title-line ab-tl">au service</span>
              <span className="title-line ab-tl">de votre beauté</span>
            </h2>
            <p className="ab-txt" style={{ fontSize: '15.5px', color: 'var(--text-d)', lineHeight: 1.85, marginBottom: '1.4rem' }}>
              Depuis 2002, Siwar vous accueille dans son salon au cœur d'Aix-en-Provence, à deux pas de l'Hôtel de Ville. Un espace entièrement dédié aux femmes et aux enfants, où chaque visite est une expérience sur mesure.
            </p>
            <p className="ab-txt" style={{ fontSize: '15.5px', color: 'var(--text-d)', lineHeight: 1.85, marginBottom: '1.4rem' }}>
              Visagiste et coloriste de talent, elle prend le temps d'écouter, de conseiller et d'accompagner chaque cliente vers la version la plus belle d'elle-même. Son approche personnalisée et son expertise font d'elle une référence incontournable à Aix-en-Provence.
            </p>
            <div
              id="aboutStats"
              className="ab-stats grid"
              style={{
                gridTemplateColumns: 'repeat(3,1fr)',
                gap: '2rem',
                marginTop: '3.5rem',
                paddingTop: '3rem',
                borderTop: '1px solid var(--line)',
              }}
            >
              {[['+ 20','Ans d'expertise'],['5 ★','Note clients'],['100%','Sur mesure']].map(([n,l]) => (
                <div key={l} className="ab-stat">
                  <div className="stat-num">{n}</div>
                  <div className="stat-label">{l}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="about-img-wrap">
            <div id="abLine" className="about-img-line" aria-hidden="true" />
            <img
              id="abImg"
              src={IMG.hair2}
              alt="Réalisation coiffure — Siwar Coiffure Aix-en-Provence"
              loading="lazy"
              width={620}
              height={620}
              style={{ objectPosition: 'top' }}
            />
          </div>
        </section>

        {/* ── SERVICES ─────────────────────────────────────────────────────── */}
        <section
          id="svc"
          style={{
            background: 'var(--bg2)',
            padding: 'clamp(4rem,8vw,9rem) clamp(1.5rem,4vw,3.5rem)',
            borderTop: '1px solid var(--line)',
          }}
          aria-labelledby="svcHeading"
        >
          <div style={{ maxWidth: '1440px', margin: '0 auto 5rem' }}>
            <span className="sec-label sec-lbl-svc">Nos Prestations</span>
            <h2 id="svcHeading" className="sec-title">
              <span className="title-line svc-tl">Ce que nous</span>
              <span className="title-line svc-tl">faisons pour vous</span>
            </h2>
          </div>
          <div
            id="svcGrid"
            className="svc-grid"
            style={{
              maxWidth: '1440px',
              margin: '0 auto',
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%,320px), 1fr))',
              gap: '1px',
              background: 'var(--line)',
              border: '1px solid var(--line)',
              borderRadius: '4px',
              overflow: 'hidden',
            }}
          >
            {SERVICES.map(s => (
              <article key={s.n} className="svc-card" aria-label={`Prestation : ${s.name}`}>
                <div className="svc-num">{s.n}</div>
                <div className="svc-name">{s.name}</div>
                <p style={{ fontSize: '14px', color: 'var(--text-d)', lineHeight: 1.75 }}>{s.desc}</p>
                <div className="svc-arrow">{s.sub}</div>
              </article>
            ))}
          </div>
        </section>

        {/* ── GALLERY ──────────────────────────────────────────────────────── */}
        <section
          id="gal"
          style={{
            padding: 'clamp(4rem,8vw,9rem) clamp(1.5rem,4vw,3.5rem)',
            maxWidth: '1440px',
            margin: '0 auto',
          }}
          aria-labelledby="galHeading"
        >
          <div style={{ marginBottom: '4.5rem' }}>
            <span className="sec-label sec-lbl-gal">Nos Réalisations</span>
            <h2 id="galHeading" className="sec-title">
              <span className="title-line gal-tl">La galerie</span>
              <span className="title-line gal-tl">du salon</span>
            </h2>
          </div>
          <div id="galGrid" className="gallery-grid">
            {[IMG.hair1, IMG.hair3, IMG.hair6, IMG.hair4, IMG.hair5, IMG.interieur].map((src, i) => (
              <div key={i} className="gal-item">
                <img
                  src={src}
                  alt={`Réalisation Siwar Coiffure n°${i+1} — salon de coiffure Aix-en-Provence`}
                  loading="lazy"
                  width={600}
                  height={400}
                />
              </div>
            ))}
          </div>
        </section>

        {/* ── TESTIMONIALS ─────────────────────────────────────────────────── */}
        <section
          id="rev"
          style={{
            background: 'var(--bg2)',
            padding: 'clamp(4rem,8vw,9rem) clamp(1.5rem,4vw,3.5rem)',
            borderTop: '1px solid var(--line)',
          }}
          aria-labelledby="revHeading"
        >
          <div style={{ maxWidth: '1440px', margin: '0 auto' }}>
            <div style={{ marginBottom: '5rem' }}>
              <span className="sec-label sec-lbl-rev">Témoignages Clients</span>
              <h2 id="revHeading" className="sec-title">
                <span className="title-line rev-tl">Elles nous font</span>
                <span className="title-line rev-tl">confiance</span>
              </h2>
            </div>
            <div
              id="revGrid"
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%,320px), 1fr))',
                gap: '1.5rem',
              }}
            >
              {REVIEWS.map((r, i) => (
                <article key={i} className="review-card" itemScope itemType="https://schema.org/Review">
                  <span style={{ fontSize: '13px', color: 'var(--accent)', letterSpacing: '0.1em', display: 'block', marginBottom: '1.5rem' }}>★★★★★</span>
                  <div className="review-text">
                    <span className="review-quote">"</span>
                    <span itemProp="reviewBody">{r.text}</span>
                  </div>
                  <div style={{ fontSize: '11px', letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--accent)', fontWeight: 400 }} itemProp="author">{r.name}</div>
                  <div style={{ fontSize: '12px', color: 'var(--text-m)', marginTop: '0.3rem' }}>Cliente fidèle · {r.src}</div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ── CONTACT ──────────────────────────────────────────────────────── */}
        <section
          id="cta"
          style={{
            padding: 'clamp(4rem,8vw,9rem) clamp(1.5rem,4vw,3.5rem)',
            maxWidth: '1440px',
            margin: '0 auto',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%,380px), 1fr))',
            gap: 'clamp(3rem,6vw,7rem)',
            alignItems: 'start',
          }}
          aria-labelledby="ctaHeading"
        >
          {/* Left — CTA + Info */}
          <div>
            <span className="sec-label" style={{ marginBottom: '1rem' }}>Nous Trouver</span>
            <h2 id="ctaHeading" className="cta-title" style={{ marginBottom: '3rem' }}>
              <span className="title-line cta-tl">Venez nous</span>
              <span className="title-line cta-tl">rendre visite</span>
            </h2>

            {[
              { label: 'Adresse', content: <a href="https://maps.google.com/?q=8+rue+du+Puits+Neuf+13100+Aix-en-Provence" target="_blank" rel="noopener noreferrer">8 rue du Puits Neuf<br />13100 Aix-en-Provence</a> },
              { label: 'Téléphone', content: <><a href="tel:+33695553468">06 95 55 34 68</a><br /><a href="tel:+33952822049" style={{ fontSize: '16px', color: 'var(--text-d)' }}>09 52 82 20 49</a></> },
              { label: 'Réservation', content: <a href="tel:+33695553468">Appelez pour réserver</a> },
              { label: 'Clientèle',  content: <span style={{ fontSize: '16px', color: 'var(--text-d)' }}>Femmes &nbsp;·&nbsp; Enfants &nbsp;·&nbsp; Étudiants</span> },
            ].map(({ label, content }) => (
              <div key={label} className="cta-info" style={{ marginBottom: '2.5rem' }}>
                <span className="inf-label">{label}</span>
                <div className="inf-value">{content}</div>
              </div>
            ))}

            <a
              href="tel:+33695553468"
              className="btn-primary magnetic"
              style={{ marginTop: '0.5rem' }}
              aria-label="Téléphoner pour réserver"
            >
              Réserver par téléphone
            </a>
          </div>

          {/* Right — Hours + Map */}
          <div>
            <span className="sec-label" style={{ marginBottom: '1.5rem' }}>Horaires d'Ouverture</span>
            <div className="hrs-grid" style={{ marginBottom: '3rem' }}>
              {HOURS.map(h => (
                <>
                  <span key={`d-${h.day}`} className={`hrs-day${h.day === today ? ' today' : ''}`}>{h.day}</span>
                  <span key={`t-${h.day}`} className={`hrs-time${h.day === today ? ' today' : ''}`}>{h.time}</span>
                </>
              ))}
            </div>

            <div className="map-box" style={{ marginBottom: '1.5rem' }}>
              <div style={{ fontSize: '11px', letterSpacing: '0.3em', textTransform: 'uppercase', color: 'var(--accent)', fontWeight: 400, marginBottom: '1rem' }}>Localisation</div>
              <p style={{ fontFamily: 'var(--serif)', fontSize: '16px', color: 'var(--text-d)', lineHeight: 1.7, marginBottom: '1.25rem' }}>
                Au cœur du centre-ville d'Aix-en-Provence, à deux pas de l'Hôtel de Ville. Idéal pour les futures mariées et toutes celles qui souhaitent se faire chouchouter.
              </p>
              <a
                href="https://maps.google.com/?q=8+rue+du+Puits+Neuf+13100+Aix-en-Provence"
                target="_blank"
                rel="noopener noreferrer"
                style={{ fontSize: '11px', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--accent)', textDecoration: 'none', fontWeight: 400 }}
                aria-label="Voir Siwar Coiffure sur Google Maps"
              >
                Voir sur Google Maps ↗
              </a>
            </div>

            <div className="map-box">
              <div style={{ fontSize: '11px', letterSpacing: '0.3em', textTransform: 'uppercase', color: 'var(--accent)', fontWeight: 400, marginBottom: '1rem' }}>Réseaux Sociaux</div>
              <div style={{ display: 'flex', gap: '2rem' }}>
                <a href="https://www.facebook.com/coiffeuraixenprovence/" target="_blank" rel="noopener noreferrer" style={{ fontSize: '11px', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--accent)', textDecoration: 'none', fontWeight: 400 }}>Facebook ↗</a>
                <a href="https://www.instagram.com/siwarcoiffure/" target="_blank" rel="noopener noreferrer" style={{ fontSize: '11px', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--accent)', textDecoration: 'none', fontWeight: 400 }}>Instagram ↗</a>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* ── FOOTER ─────────────────────────────────────────────────────────── */}
      <footer
        role="contentinfo"
        style={{
          borderTop: '1px solid var(--line)',
          padding: 'clamp(1.5rem,2.5vw,2.2rem) clamp(1.5rem,4vw,3.5rem)',
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '1rem',
        }}
      >
        <div style={{ fontFamily: 'var(--serif)', fontSize: '0.95rem', letterSpacing: '0.15em', color: 'var(--text-m)' }}>
          SIWAR COIFFURE — Aix-en-Provence
        </div>
        <div style={{ fontSize: '11px', color: 'var(--text-m)', letterSpacing: '0.1em', textAlign: 'center' }}>
          © {new Date().getFullYear()} Siwar Coiffure · 8 rue du Puits Neuf, 13100 Aix-en-Provence
        </div>
        <a
          href="https://www.facebook.com/coiffeuraixenprovence/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ fontSize: '11px', color: 'var(--text-m)', letterSpacing: '0.15em', textTransform: 'uppercase', textDecoration: 'none', fontWeight: 400, transition: 'color 0.25s' }}
          onMouseEnter={e => e.target.style.color = 'var(--accent)'}
          onMouseLeave={e => e.target.style.color = 'var(--text-m)'}
        >
          Facebook ↗
        </a>
      </footer>
    </>
  );
}
