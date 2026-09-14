# Mots-clés cibles — garagemecanoexpress.ca

Remorquage et garage · Gatineau / Aylmer · relevé de septembre 2026

## Base de ce document

Les volumes viennent du Planificateur de mots-clés Google. Les conversions
viennent des données réelles Google Ads sur 30 jours — ce sont donc des termes
**prouvés commercialement**.

**Limite à connaître :** ce ne sont pas des données SEO. La difficulté de
positionnement organique n'est pas mesurée ici. Un mot-clé rentable en
publicité peut rester très compétitif en référencement naturel.

---

## Priorité 1 — fort volume, 260 recherches/mois chacun

| Mot-clé | Volume/mois | Page |
|---|---|---|
| `garage gatineau` | 260 | `/fr/garage-gatineau` |
| `garage aylmer` | 260 | `/fr/garage/aylmer` |
| `carrosserie gatineau` | 260 | `/fr/services/carrosserie` |
| `carrossier gatineau` | 260 | `/fr/services/carrosserie` |

**`carrosserie` et `carrossier` ne sont pas des synonymes aux yeux de Google.**
Les deux mots doivent apparaître dans le contenu, et « Gatineau » doit rester
dans le `<title>` — ne pas le retirer pour raccourcir un titre.

## Priorité 2 — volume moyen

| Mot-clé | Volume/mois | Page |
|---|---|---|
| `body shop gatineau` | 110 | `/en/services/auto-body` |
| `car auto body shop` | 70 | `/en/services/auto-body` |
| `garage therien aylmer` | 170 | **ne pas cibler** — nom d'un concurrent |

`garage therien aylmer` est ciblable en publicité mais pas en SEO : on ne se
positionne pas sur le nom d'une autre entreprise.

## Priorité 3 — convertisseurs prouvés (volume SEO non mesuré)

Conversions sur 30 jours, campagnes Search.

### Remorquage FR
| Mot-clé | Conv. | Page |
|---|---|---|
| `remorquage gatineau` | 28,6 | `/fr/remorquage-gatineau` |
| `remorquer une voiture prix` | 20,0 | `/fr/remorquage/prix` |
| `service de remorquage gatineau` | 9,0 | `/fr/remorquage-gatineau` |
| `remorquage aylmer` | 6,3 | `/fr/remorquage/aylmer` |
| `remorquage chelsea` | 5,0 | `/fr/remorquage/secteurs` |
| `remorquage outaouais` | 2,8 | `/fr/remorquage/secteurs` |
| `remorquage gatineau prix` | 1,3 | `/fr/remorquage/prix` |
| `remorquage gatineau hull` | 0,7 | `/fr/remorquage-gatineau` |

### Remorquage EN
| Mot-clé | Conv. | Page |
|---|---|---|
| `towing gatineau` | 20,0 | `/en/remorquage-gatineau` |
| `towing aylmer` | 5,0 | `/en/remorquage/aylmer` |
| `towing gatineau hull` | 3,5 | `/en/remorquage-gatineau` |
| `towing buckingham` | 3,0 | `/en/remorquage/secteurs` |
| `tow truck gatineau` | 2,0 | `/en/remorquage-gatineau` |

### Garage FR
| Mot-clé | Conv. | Page |
|---|---|---|
| `garage mecanique hull` | 9,0 | `/fr/garage/hull` |
| `garage auto gatineau` | 6,0 | `/fr/garage-gatineau` |
| `garage automobile` | 5,0 | `/fr/garage-gatineau` |
| `garagiste gatineau` | 3,0 | `/fr/garage-gatineau` |
| `mecanicien gatineau` | 1,0 | `/fr/garage-gatineau` |

### Garage EN
| Mot-clé | Conv. | Page |
|---|---|---|
| `garage near me` | 6,0 | `/en/garage/near-me` — **noindex** |
| `car mechanic near me` | 5,0 | `/en/garage/near-me` — **noindex** |
| `mechanic aylmer` | 2,3 | `/en/garage/aylmer` |

### Services
| Mot-clé | Conv. | Page |
|---|---|---|
| `tire shop near me` | 3,0 | `/en/services/tires` |
| `survoltage auto` | 3,0 | `/fr/remorquage/demarrage-batterie` |
| `tire repair near me` | 2,0 | `/en/services/tires` |
| `changement huile` | 1,0 | `/fr/services/changement-huile` |
| `alignement auto gatineau` | 1,0 | `/fr/services/suspension-alignement` |
| `booster voiture` | 1,0 | `/fr/remorquage/demarrage-batterie` |

---

## Trous connus

- **`garage near me` + `car mechanic near me` = 11 conversions/30 j** pointent
  sur `/en/garage/near-me`, qui est en `noindex`. Aucune couverture organique
  pour cette demande. Voir le commentaire sur `indexable` dans
  `lib/mechanicIntents.ts`.
- **Aucune page Buckingham** alors que `towing buckingham` convertit (3,0) et
  que `business.areasServed` revendique la zone.
- **Aucune page Chelsea** alors que `remorquage chelsea` convertit (5,0) —
  la ville n'apparaît que dans la liste de puces de `/remorquage/secteurs`.
- Les requêtes en `near me` / `près de moi` se gagnent par la pertinence
  locale (fiche Google Business, NAP, proximité), pas en écrivant « near me »
  dans le texte. Ne pas forcer la formule dans la copie.

## Aucune donnée disponible

Le remorquage n'a pas d'export de mots-clés distinct : les conversions
ci-dessus sont tout ce qui a été fourni. Les fichiers `ads-*.md` à la racine
ne couvrent que la campagne mécanique.
