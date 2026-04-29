# Siwar Coiffure — Site Premium Next.js

Site vitrine premium pour **Siwar Coiffure** — Visagiste & Coloriste à Aix-en-Provence.

## Stack Technique
- **Next.js 14** (App Router)
- **Tailwind CSS** (utilitaires responsive)
- **GSAP + ScrollTrigger** (animations cinématiques)
- **Lenis** (smooth scroll premium)
- **JSON-LD** (SEO LocalBusiness schema)

## Déploiement sur Vercel (recommandé)

### Option A — Via GitHub (le plus simple)
1. Crée un repo GitHub et push ce dossier
2. Va sur [vercel.com](https://vercel.com) → "Add New Project"
3. Connecte ton repo GitHub → Vercel détecte automatiquement Next.js
4. Clique **Deploy** — le site est en ligne en 2 minutes !

### Option B — Via CLI Vercel
```bash
npm install
npm install -g vercel
vercel deploy
```

### Option C — Local d'abord
```bash
npm install
npm run dev    # Ouvre http://localhost:3000
npm run build  # Vérifie le build
```

## Personnalisation importante

### Remplacer la photo de la devanture
Le hero utilise actuellement la photo trouvée sur le site Wix.
Pour mettre ta vraie photo de devanture :
1. Ajoute ta photo dans `/public/devanture.jpg`
2. Dans `app/page.jsx`, ligne `IMG.devanture`, remplace par `/devanture.jpg`

### Changer le domaine SEO
Dans `app/layout.jsx` et `app/sitemap.js`, remplace `https://siwarcoiffure.fr` par ton vrai domaine.

### Ajouter une photo OG (Open Graph)
Ajoute une photo `og-image.jpg` (1200×630px) dans `/public/` pour les aperçus sur les réseaux sociaux.

## Structure
```
siwar-coiffure/
├── app/
│   ├── layout.jsx    → SEO metadata + JSON-LD schema
│   ├── page.jsx      → Page principale complète
│   ├── globals.css   → Système de design complet
│   ├── sitemap.js    → Sitemap XML automatique
│   └── robots.js     → robots.txt automatique
├── package.json
├── next.config.mjs
├── tailwind.config.js
└── README.md
```

## SEO inclus
- ✅ Title + description optimisés
- ✅ Open Graph (Facebook, WhatsApp)
- ✅ Twitter Card
- ✅ JSON-LD LocalBusiness schema (Google)
- ✅ Sitemap XML automatique (/sitemap.xml)
- ✅ robots.txt automatique (/robots.txt)
- ✅ Balises geo (région, coordonnées)
- ✅ lang="fr" + canonical URL
- ✅ Avis clients structurés (AggregateRating)
