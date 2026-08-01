# assurance-immeuble.fr — site Astro/Netlify

Site vitrine + blog éditorial pour un cabinet de courtage spécialisé en assurance d'immeuble. Stack identique au projet ASSURANCE ENTREPRISE : Astro 5, sitemap intégré, déploiement Netlify.

## Développement local

```bash
npm install
npm run dev
```

Le site est servi sur `http://localhost:4321`.

## Build production

```bash
npm run build
npm run preview
```

Le dossier `dist/` est prêt à être déployé.

## Déploiement Netlify

- Repo Git → nouveau site Netlify
- Build command : `npm run build`
- Publish directory : `dist`
- Node version : 20 (déjà dans `netlify.toml`)
- Le formulaire de devis (`/demande-devis`) utilise Netlify Forms — activation automatique via l'attribut `data-netlify`

## Arborescence

```
src/
  layouts/BaseLayout.astro       # layout unique avec SEO / JSON-LD
  components/Header.astro        # header sticky + burger mobile
  components/Footer.astro        # footer 4 colonnes
  consts.ts                      # SITE, NAV, SOLUTIONS, WHY_US, GUARANTEES, STATS
  content.config.ts              # collection blog (frontmatter validé Zod)
  content/blog/                  # articles Markdown
  pages/
    index.astro                  # accueil
    multirisque-immeuble.astro   # page produit MRI (copropriété, mono, SCI)
    pno.astro                    # page produit PNO
    garanties.astro              # détail garanties + plafonds
    sinistres.astro              # process déclaration sinistre
    a-propos.astro               # présentation courtier
    demande-devis.astro          # formulaire 5 étapes Netlify Forms
    merci.astro                  # confirmation post-envoi
    mentions-legales.astro
    politique-confidentialite.astro
    404.astro
    blog/index.astro             # listing filtré par catégorie
    blog/[...id].astro           # gabarit article
  styles/global.css              # design system complet
public/
  favicon.svg
  robots.txt
```

## Éditorial

30 guides prévus, index dans `../redaction-guide/INDEX-30-titres.md`.
Rotation des registres : Récit (R), Information (I), Juridique (J), conformément aux consignes du dossier `outils/`.

## Personnalisation

- Couleurs : variables CSS dans `src/styles/global.css` (`--navy`, `--orange`, `--gold`)
- Contenu global : `src/consts.ts`
- Nom légal / email : mettre à jour `SITE.legalName` et `SITE.email` dans `consts.ts` dès que le cabinet est nommé
- ORIAS : mentions à compléter dans `mentions-legales.astro` et `a-propos.astro`
