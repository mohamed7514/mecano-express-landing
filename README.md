# Remorquage Mécano Express — site web

Site bilingue (FR/EN) pour Mécano Express, garage et service de remorquage à Aylmer (Gatineau), QC. Next.js 16 (App Router, Turbopack), React 19, Tailwind v4.

## Démarrer

```bash
npm install
npm run dev
```

Le site tourne en `/fr` (défaut) et `/en`. `proxy.ts` redirige `/` vers la bonne langue selon le navigateur.

## Variables d'environnement

Copier `.env.example` vers `.env.local` et remplir quand les comptes sont prêts :

- `NEXT_PUBLIC_GA_MEASUREMENT_ID` — Google Analytics 4
- `NEXT_PUBLIC_GOOGLE_ADS_ID` / `NEXT_PUBLIC_GOOGLE_ADS_CALL_CONVERSION_LABEL` — suivi de conversion Google Ads (appels)

Tant qu'ils sont vides, aucun script analytics n'est chargé — pas d'erreur, pas d'appel réseau.

## Où vivent les contenus

- `lib/business.ts` — nom, adresse, téléphone, heures, zones desservies (source unique, utilisée partout : footer, JSON-LD, sitemap).
- `lib/services.ts` — les 9 fiches services (remorquage + 8 services mécaniques), FR/EN.
- `lib/dictionary.ts` — tous les textes d'interface partagés (nav, boutons, sections).
- `Keywords/` — mots-clés et annonces Google Ads déjà préparés pour les campagnes "Remorquage Outaouais" et "Garage Mecanique Outaouais". Les pages `/garage-gatineau` et `/remorquage-gatineau` (`app/[locale]/`) sont les landing pages dédiées à ces deux campagnes — leur contenu doit rester aligné avec ces mots-clés/annonces.

## Photos

Le site fonctionne sans photos réelles (bandeaux de marque en attendant). Pour ajouter les vraies photos, déposer les fichiers avec ces noms exacts dans `public/photos/` — ils s'affichent automatiquement, sans toucher au code :

```
public/photos/hero-repair.jpg      (paysage, ~4:3 — hero de /garage-gatineau)
public/photos/shop-exterior.jpg    (4:3)
public/photos/shop-interior.jpg    (4:3)
public/photos/gallery-1..6.jpg     (1:1, optionnel)
public/photos/team-1.jpg           (4:5, optionnel)
```

## Avis clients

`lib/testimonials.ts` est vide par défaut et la section correspondante ne s'affiche pas tant qu'il n'y a pas de vrais avis (jamais inventés). Ajouter les avis Google réels (prénom, quartier, texte, note) dans ce fichier pour les faire apparaître.

## Build

```bash
npm run build
```
