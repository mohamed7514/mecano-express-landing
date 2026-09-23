import type { Locale } from "./i18n";
import type { FAQItem } from "./faq";

export type MechanicIntentContent = {
  metaTitle: string;
  metaDescription: string;
  eyebrow: string;
  heroTitle: string;
  heroHighlight: string;
  subtitle: string;
  trustBar: string[];
  reasonsTitle: string;
  reasons: { title: string; text: string }[];
  areas?: string[];
  ctaCardTitle: string;
  ctaCardText: string;
  serviceName: string;
  faqTitle: string;
  faq: FAQItem[];
};

export type MechanicIntent = {
  slug: string;
  heroImage: { kind: "photo"; name: string } | { kind: "static"; src: string };
  /** Groups the page for discovery UI (nav shortlist, hub page grid) — zone
   * (where), specialty (which repair symptom/part) or situation (price,
   * urgency) rather than one flat undifferentiated list. */
  group: "zone" | "specialty" | "situation";
  /**
   * Ads-only landing pages: their search intent is already owned by a
   * stronger page (/garage-gatineau, /remorquage-gatineau, /services/freins),
   * so indexing them would split the signal between near-duplicates. They
   * stay live and linked for paid traffic, but ship robots "noindex, follow"
   * and are kept out of the sitemap. Defaults to true.
   */
  indexable?: boolean;
  fr: MechanicIntentContent;
  en: MechanicIntentContent;
};

/**
 * One dedicated landing page per Google Ads "Search-Mechanic" campaign ad
 * group that isn't already well served by an existing /services/[slug] page
 * (oil change, brakes, tires, etc. keep using those). Served at
 * /garage/<slug>. Mirrors lib/towingIntents.ts's approach for the towing
 * campaign — each keyword theme gets copy matching its exact search intent.
 */
export const mechanicIntents: MechanicIntent[] = [
  {
    slug: "aylmer",
    group: "zone",
    heroImage: { kind: "photo", name: "mecanique.webp" },
    fr: {
      metaTitle: "Garage à Aylmer et secteur Vanier | Mécano Express",
      metaDescription:
        "Garage mécanique à Aylmer, secteur Vanier. Diagnostic honnête, prix confirmé avant travaux. Sans rendez-vous. Appelez le (819) 921-7869.",
      eyebrow: "Garage · Aylmer",
      heroTitle: "Garage",
      heroHighlight: "à Aylmer",
      subtitle:
        "Votre garage de quartier au 879 chemin Vanier, secteur Vanier à Aylmer. Diagnostic honnête, prix confirmé avant tout travail.",
      trustBar: ["Garage de quartier à Aylmer", "Prix confirmé avant travaux", "Sans rendez-vous"],
      reasonsTitle: "Pourquoi choisir un garage à Aylmer",
      reasons: [
        {
          title: "Un vrai garage de quartier",
          text: "On est établis à Aylmer, secteur Vanier — pas un atelier de passage. Vous nous reverrez l'année prochaine.",
        },
        {
          title: "Prix confirmé avant les travaux",
          text: "On vous donne un prix clair avant de commencer, jamais de surprise sur la facture finale.",
        },
        {
          title: "Sans rendez-vous",
          text: "Passez quand ça vous convient, on s'occupe de votre véhicule rapidement.",
        },
      ],
      areas: ["Aylmer", "Secteur Vanier", "Gatineau", "Hull"],
      ctaCardTitle: "Besoin d'un garage à Aylmer ?",
      ctaCardText: "Passez nous voir au 879 chemin Vanier ou appelez pour un diagnostic honnête.",
      serviceName: "Garage à Aylmer",
      faqTitle: "Questions fréquentes — Garage à Aylmer",
      faq: [
        {
          question: "Puis-je passer sans rendez-vous ?",
          answer:
            "Oui, les visites sans rendez-vous sont acceptées au 879 chemin Vanier, du lundi au samedi de 9h à 18h. Il y a du stationnement sur place, donc pas besoin de chercher une place dans le secteur Vanier. On inspecte le véhicule, on vous explique ce qu'on a trouvé, et le prix est confirmé avant qu'on touche à quoi que ce soit.",
        },
        {
          question: "Combien de temps ça prend pour une réparation courante ?",
          answer:
            "La plupart des réparations courantes se règlent dans la même journée : un changement d'huile prend typiquement moins d'une heure et un jeu de plaquettes environ une heure par essieu. Les pièces à commander sont l'exception, et on vous donne le délai avant de passer la commande. L'atelier d'Aylmer est ouvert six jours sur sept, du lundi au samedi, de 9h à 18h.",
        },
        {
          question: "Où êtes-vous situés exactement ?",
          answer:
            "Au 879 chemin Vanier, dans le secteur Vanier à Aylmer, avec stationnement sur place. On est ouvert du lundi au samedi, de 9h à 18h, et le même atelier dessert Hull, Gatineau et Buckingham. Le remorquage, lui, roule 24 h sur 24 au (819) 921-7869 si le véhicule ne peut pas se rendre jusqu'à nous.",
        },
        {
          question: "Que faire si mon véhicule ne peut plus rouler jusqu'au garage ?",
          answer:
            "Appelez le (819) 921-7869 et on va le chercher : l'assistance routière fonctionne 24 h sur 24, nuits, fins de semaine et jours fériés inclus, et le remorquage débute à 79,99 $. On récupère le véhicule à Aylmer, Hull, Gatineau ou Buckingham et on le ramène au 879 chemin Vanier. Le diagnostic suit, et rien ne se répare avant votre approbation.",
        },
      ],
    },
    en: {
      metaTitle: "Garage in Aylmer & Vanier Area | Mécano Express",
      metaDescription:
        "Auto garage in Aylmer, Vanier area. Honest diagnostic, price confirmed before work. Walk-in welcome. Call (819) 921-7869.",
      eyebrow: "Garage · Aylmer",
      heroTitle: "Garage",
      heroHighlight: "in Aylmer",
      subtitle:
        "Your neighborhood garage at 879 chemin Vanier, Vanier area in Aylmer. Honest diagnostic, price confirmed before any work.",
      trustBar: ["Neighborhood garage in Aylmer", "Price confirmed before work", "Walk-in welcome"],
      reasonsTitle: "Why choose a garage in Aylmer",
      reasons: [
        {
          title: "A real neighborhood garage",
          text: "We're established in Aylmer, Vanier area — not a drive-through shop. You'll see us again next year.",
        },
        {
          title: "Price confirmed before work",
          text: "We give you a clear price before starting, never a surprise on the final bill.",
        },
        {
          title: "Walk-in welcome",
          text: "Drop in whenever it suits you, we take care of your vehicle quickly.",
        },
      ],
      areas: ["Aylmer", "Vanier area", "Gatineau", "Hull"],
      ctaCardTitle: "Need a garage in Aylmer?",
      ctaCardText: "Drop by at 879 chemin Vanier or call for an honest diagnostic.",
      serviceName: "Garage in Aylmer",
      faqTitle: "Frequently Asked Questions — Garage in Aylmer",
      faq: [
        {
          question: "Can I drop in without an appointment?",
          answer:
            "Walk-ins are welcome — no appointment is needed at 879 chemin Vanier, Monday to Saturday from 9 AM to 6 PM. On-site parking means you can leave the car with us instead of hunting for a spot in Aylmer's Vanier area. We inspect first, explain what we found, and confirm the price before any work begins.",
        },
        {
          question: "How long does a common repair take?",
          answer:
            "Same-day is the norm for routine work: an oil change usually runs under an hour, and a set of brake pads is often about an hour per axle. Parts that have to be ordered are the exception, and we give you the timeline before ordering. The Aylmer shop is open six days a week, Monday to Saturday, 9 AM to 6 PM.",
        },
        {
          question: "Where exactly are you located?",
          answer:
            "879 chemin Vanier, in the Vanier area of Aylmer, with parking on site. Hours are Monday to Saturday, 9 AM to 6 PM, and that one shop also serves Hull, Gatineau and Buckingham. Towing runs separately, 24/7 at (819) 921-7869, for the times a vehicle simply cannot be driven to us.",
        },
        {
          question: "What happens if my car can't make it to the garage?",
          answer:
            "Call (819) 921-7869 and we tow it in — roadside service runs 24/7, nights, weekends and holidays included, with towing starting at $79.99. We pick up anywhere in Aylmer, Hull, Gatineau or Buckingham and bring the vehicle back to the shop on chemin Vanier. Diagnosis follows, and no repair starts until you have approved the price.",
        },
      ],
    },
  },
  {
    slug: "hull",
    group: "zone",
    heroImage: { kind: "photo", name: "mecanique.webp" },
    fr: {
      metaTitle: "Garage mécanique à Hull (Gatineau) | Mécano Express",
      metaDescription:
        "Garage mécanique desservant Hull. Changement d'huile, freins, climatisation. Diagnostic honnête, prix confirmé. (819) 921-7869.",
      eyebrow: "Garage · Hull",
      heroTitle: "Garage",
      heroHighlight: "à Hull",
      subtitle:
        "Vous êtes à Hull ? On dessert tout le secteur depuis notre atelier à Aylmer — diagnostic honnête, prix confirmé avant travaux.",
      trustBar: ["Dessert tout Hull", "Prix confirmé avant travaux", "Sans rendez-vous"],
      reasonsTitle: "Pourquoi rouler jusqu'à Aylmer pour votre garage",
      reasons: [
        {
          title: "On dessert Hull au complet",
          text: "Peu importe où vous êtes à Hull, on est à quelques minutes en voiture depuis Aylmer.",
        },
        {
          title: "Moins cher qu'un concessionnaire",
          text: "Même qualité de travail, prix beaucoup plus honnête.",
        },
        {
          title: "Prix confirmé avant travaux",
          text: "Aucune surprise sur la facture — on vous informe avant de commencer.",
        },
      ],
      areas: ["Hull", "Gatineau", "Aylmer"],
      ctaCardTitle: "Besoin d'un garage près de Hull ?",
      ctaCardText: "Appelez-nous — on vous explique clairement le problème et le prix avant de commencer.",
      serviceName: "Garage à Hull",
      faqTitle: "Questions fréquentes — Garage à Hull",
      faq: [
        {
          question: "Combien de temps ça prend pour venir de Hull jusqu'à votre garage ?",
          answer:
            "Comptez une dizaine de minutes de route depuis la plupart des secteurs de Hull jusqu'au 879 chemin Vanier, à Aylmer. Il y a du stationnement sur place et aucun rendez-vous à prendre : l'atelier est ouvert du lundi au samedi, de 9h à 18h. Si le véhicule ne roule plus du tout, le remorquage répond 24 h sur 24 au (819) 921-7869.",
        },
        {
          question: "Offrez-vous tous les services mécaniques ?",
          answer:
            "Oui : changement d'huile, freins, pneus, diagnostic électronique, climatisation et suspension, tout se fait à l'atelier d'Aylmer qui dessert Hull. Les travaux sont couverts par une garantie d'un an sur les pièces et la main-d'œuvre. Chaque visite commence par une inspection, et rien ne débute avant que vous ayez approuvé le prix.",
        },
        {
          question: "Puis-je avoir une idée du prix avant de me déplacer depuis Hull ?",
          answer:
            "Oui — décrivez le symptôme au (819) 921-7869 et on vous explique ce qu'il faudra vérifier avant que vous fassiez le trajet. L'estimation est confirmée après l'inspection, parce qu'un même grincement de frein peut venir d'une plaquette usée ou d'un étrier bloqué. Le montant est arrêté avec vous avant les travaux, et les réparations sont garanties un an, pièces et main-d'œuvre.",
        },
        {
          question: "Comment savoir si mes pneus d'hiver sont encore légaux ?",
          answer:
            "Au Québec, les pneus d'hiver sont obligatoires du 1er décembre au 15 mars, et la limite légale d'usure est de 2/32 de pouce de profondeur de sculpture. En pratique, on suggère de remplacer autour de 4/32, parce que l'adhérence sur la neige tassée se perd bien avant la limite légale. Passez à l'atelier d'Aylmer du lundi au samedi : on mesure la profondeur et on vous montre la lecture.",
        },
      ],
    },
    en: {
      metaTitle: "Auto Mechanic Serving Hull (Gatineau) | Mécano Express",
      metaDescription:
        "Auto garage serving Hull. Oil change, brakes, A/C. Honest diagnostic, price confirmed before work. Call (819) 921-7869.",
      eyebrow: "Garage · Hull",
      heroTitle: "Garage",
      heroHighlight: "Serving Hull",
      subtitle:
        "Based in Hull? We serve the whole area from our Aylmer shop — honest diagnostic, price confirmed before any work.",
      trustBar: ["Serving all of Hull", "Price confirmed before work", "Walk-in welcome"],
      reasonsTitle: "Why drive to Aylmer for your garage",
      reasons: [
        {
          title: "We serve all of Hull",
          text: "Wherever you are in Hull, we're just a few minutes away by car from Aylmer.",
        },
        {
          title: "Cheaper than the dealer",
          text: "Same quality of work, a much more honest price.",
        },
        {
          title: "Price confirmed before work",
          text: "No surprise on the bill — we let you know before starting.",
        },
      ],
      areas: ["Hull", "Gatineau", "Aylmer"],
      ctaCardTitle: "Need a garage near Hull?",
      ctaCardText: "Call us — we'll clearly explain the problem and price before starting.",
      serviceName: "Garage serving Hull",
      faqTitle: "Frequently Asked Questions — Garage Serving Hull",
      faq: [
        {
          question: "How long is the drive from Hull to your shop?",
          answer:
            "About ten minutes from most parts of Hull to 879 chemin Vanier in Aylmer. There is parking on site and nothing to book — the garage is open Monday to Saturday, 9 AM to 6 PM. If the vehicle will not move at all, towing answers around the clock at (819) 921-7869 and comes to you in Hull.",
        },
        {
          question: "Do you handle every kind of mechanical service?",
          answer:
            "Yes — oil changes, brakes, tires, electronic diagnostics, air conditioning and suspension are all done at the Aylmer shop that serves Hull. Parts and labour carry a one-year warranty. Every visit opens with an inspection so you hear what is actually wrong, and nothing gets repaired until you have approved the price.",
        },
        {
          question: "Can I get a price idea before driving over from Hull?",
          answer:
            "Yes — describe the symptom at (819) 921-7869 and we will tell you what has to be checked before you make the trip. The estimate is confirmed after the inspection, since the same brake noise can be a worn pad or a seized caliper. The figure is agreed with you before work starts, and repairs carry a one-year warranty on parts and labour.",
        },
        {
          question: "How do I know if my winter tires are still legal?",
          answer:
            "Quebec requires winter tires from December 1 to March 15, and the legal wear limit is 2/32 of an inch of tread. In practice we suggest replacing closer to 4/32, because grip on packed snow fades long before the legal minimum. Drop by the Aylmer shop any day Monday to Saturday and we will measure the tread and show you the reading.",
        },
      ],
    },
  },
  {
    slug: "near-me",
    indexable: false,
    group: "situation",
    heroImage: { kind: "photo", name: "mecanique.webp" },
    fr: {
      metaTitle: "Mécanicien près de chez vous à Aylmer | Mécano Express",
      metaDescription:
        "Mécanicien au 879 chemin Vanier à Aylmer, à quelques minutes de Gatineau et Hull. Sans rendez-vous, prix confirmé avant travaux. (819) 921-7869.",
      eyebrow: "Mécanicien à proximité",
      heroTitle: "Mécanicien",
      heroHighlight: "Près de Vous",
      subtitle:
        "On est au 879 chemin Vanier, secteur Vanier à Aylmer — à quelques minutes de Gatineau et de Hull. Un vrai garage de quartier, pas une chaîne : diagnostic honnête, prix confirmé avant tout travail, sans rendez-vous.",
      trustBar: ["879 chemin Vanier, Aylmer", "Sans rendez-vous", "Prix confirmé avant travaux"],
      reasonsTitle: "Pourquoi nous choisir plutôt qu'une chaîne",
      reasons: [
        {
          title: "À quelques minutes de chez vous",
          text: "Notre garage est au 879 chemin Vanier, secteur Vanier à Aylmer, avec stationnement sur place — facile d'accès depuis Gatineau, Hull et tout le secteur ouest.",
        },
        {
          title: "Un mécanicien, pas un vendeur",
          text: "On vous explique le problème clairement, sans vous pousser à acheter ce qui n'est pas nécessaire.",
        },
        {
          title: "Prix confirmé avant travaux",
          text: "Vous savez ce que ça va coûter avant qu'on touche à votre véhicule.",
        },
      ],
      areas: ["Gatineau", "Aylmer", "Hull", "Buckingham"],
      ctaCardTitle: "Besoin d'un mécanicien de confiance ?",
      ctaCardText: "Appelez-nous ou passez au 879 chemin Vanier à Aylmer.",
      serviceName: "Mécanicien près de vous",
      faqTitle: "Questions fréquentes — Mécanicien près de vous",
      faq: [
        {
          question: "Où êtes-vous situés exactement ?",
          answer:
            "Au 879 chemin Vanier, dans le secteur Vanier à Aylmer, avec stationnement sur place. De là, on est à quelques minutes de Hull, du centre de Gatineau et de tout le secteur ouest. L'atelier ouvre six jours sur sept, du lundi au samedi de 9h à 18h, sans rendez-vous, et le remorquage répond 24 h sur 24 au (819) 921-7869.",
        },
        {
          question: "Quels secteurs desservez-vous ?",
          answer:
            "Aylmer et le secteur Vanier, Hull, Gatineau, Buckingham et l'ensemble de l'Outaouais. Pour la mécanique, vous venez à l'atelier du 879 chemin Vanier, du lundi au samedi de 9h à 18h. Pour le remorquage et l'assistance routière, on se déplace dans ces mêmes secteurs 24 h sur 24 — nuits, fins de semaine et jours fériés — à partir de 79,99 $.",
        },
        {
          question: "Qu'est-ce qui vous différencie d'un concessionnaire ?",
          answer:
            "Un garage de quartier indépendant porte beaucoup moins de frais généraux qu'un concessionnaire, et ça se voit sur la facture. On prend les visites sans rendez-vous, on vous montre la pièce usée, et le prix est confirmé avant de commencer. Les pièces et la main-d'œuvre sont garanties un an, et vous parlez au mécanicien qui travaille sur votre véhicule, pas à un conseiller.",
        },
        {
          question: "Faites-vous une inspection avant de réparer ?",
          answer:
            "Oui, chaque réparation commence par une inspection ou un diagnostic, et on vous explique les constats avant de proposer quoi que ce soit. Vous approuvez le montant, et seulement après on travaille. Les pièces et la main-d'œuvre sont couvertes un an. Présentez-vous au 879 chemin Vanier à Aylmer, du lundi au samedi de 9h à 18h — aucun rendez-vous requis.",
        },
        {
          question: "Puis-je venir juste pour un deuxième avis, sans réparation ?",
          answer:
            "Oui, et ça vaut la peine quand une soumission vous semble grosse. On inspecte, puis on sépare ce qui est urgent de ce qui peut attendre : des plaquettes tiennent en général de 40 000 à 80 000 km selon la conduite et le terrain, donc il en reste souvent. Vous repartez de notre atelier d'Aylmer avec les constats, sans obligation de faire les travaux ici.",
        },
      ],
    },
    en: {
      metaTitle: "Mechanic Near You in Aylmer | Mécano Express",
      metaDescription:
        "Mechanic at 879 chemin Vanier in Aylmer, minutes from Gatineau and Hull. Walk-in welcome, price confirmed before work. Call (819) 921-7869.",
      eyebrow: "Mechanic near me",
      heroTitle: "Mechanic",
      heroHighlight: "Near Me",
      subtitle:
        "We're at 879 chemin Vanier, Vanier area in Aylmer — minutes from Gatineau and Hull. A real neighborhood garage, not a chain: honest diagnostic, price confirmed before any work, walk-in welcome.",
      trustBar: ["879 chemin Vanier, Aylmer", "Walk-in welcome", "Price confirmed before work"],
      reasonsTitle: "Why choose us over a chain",
      reasons: [
        {
          title: "Minutes away from you",
          text: "Our garage is at 879 chemin Vanier, Vanier area in Aylmer, with on-site parking — easy to reach from Gatineau, Hull and the whole west end.",
        },
        {
          title: "A mechanic, not a salesperson",
          text: "We explain the problem clearly, without pushing you to buy what you don't need.",
        },
        {
          title: "Price confirmed before work",
          text: "You know what it'll cost before we touch your vehicle.",
        },
      ],
      areas: ["Gatineau", "Aylmer", "Hull", "Buckingham"],
      ctaCardTitle: "Need a mechanic you can trust?",
      ctaCardText: "Call us or drop by at 879 chemin Vanier in Aylmer.",
      serviceName: "Mechanic near me",
      faqTitle: "Frequently Asked Questions — Mechanic Near Me",
      faq: [
        {
          question: "Where exactly is your shop?",
          answer:
            "879 chemin Vanier, in the Vanier area of Aylmer, with on-site parking. From there we are minutes from Hull, downtown Gatineau and the whole west end. The garage runs six days a week, Monday to Saturday from 9 AM to 6 PM, walk-ins included, and towing answers 24/7 on (819) 921-7869.",
        },
        {
          question: "Which areas do you serve?",
          answer:
            "Aylmer and the Vanier area, Hull, Gatineau, Buckingham and the wider Outaouais. Mechanical work happens at the shop, 879 chemin Vanier, Monday to Saturday from 9 AM to 6 PM. Towing and roadside assistance come to you across those same areas 24/7 — nights, weekends and holidays — starting at $79.99.",
        },
        {
          question: "What sets you apart from a dealership?",
          answer:
            "An independent neighbourhood garage carries far less overhead than a dealership, and the invoice shows it. We take walk-ins, we show you the worn part, and the price is confirmed before work starts. Parts and labour are covered for one year, and you speak with the mechanic working on your vehicle rather than with a service advisor.",
        },
        {
          question: "Do you inspect the vehicle before repairing it?",
          answer:
            "Yes — every job opens with an inspection or a diagnostic scan, and we walk you through the findings before suggesting anything. You approve the price first; only then does work begin. Parts and labour carry a one-year warranty. Come to 879 chemin Vanier in Aylmer any day Monday through Saturday between 9 AM and 6 PM, no appointment.",
        },
        {
          question: "Can I come in just for a second opinion?",
          answer:
            "Yes, and it is worth doing whenever another quote looks heavy. We inspect, then separate what is urgent from what can safely wait — a set of pads typically lasts 40,000 to 80,000 km depending on driving style and terrain, so there is often life left. You leave our Aylmer shop with the findings and no obligation to book the work here.",
        },
      ],
    },
  },
  {
    slug: "prix",
    indexable: false,
    group: "situation",
    heroImage: { kind: "photo", name: "mecanique.webp" },
    fr: {
      metaTitle: "Garage honnête et prix clair à Aylmer | Mécano Express",
      metaDescription:
        "Garage local honnête, prix confirmé avant travaux, aucune surprise sur la facture. Meilleur prix qu'un concessionnaire. (819) 921-7869.",
      eyebrow: "Confiance & Prix",
      heroTitle: "Prix Honnête,",
      heroHighlight: "Garage Local",
      subtitle: "Pas de vente de pièces inutiles, pas de facture surprise. On vous dit le prix avant de commencer, point final.",
      trustBar: ["Prix confirmé avant travaux", "Aucune vente forcée", "Moins cher qu'un concessionnaire"],
      reasonsTitle: "Pourquoi notre approche est différente",
      reasons: [
        {
          title: "Le prix, avant les travaux",
          text: "On inspecte, on vous explique, et on vous donne un prix clair — vous décidez ensuite.",
        },
        {
          title: "On ne vend pas ce qui n'est pas nécessaire",
          text: "Si une réparation peut attendre, on vous le dit honnêtement plutôt que de vous la vendre.",
        },
        {
          title: "Moins cher qu'un concessionnaire",
          text: "Même qualité de travail et d'équipement certifié, à un prix beaucoup plus abordable.",
        },
      ],
      areas: ["Gatineau", "Aylmer", "Hull", "Buckingham"],
      ctaCardTitle: "Vous voulez un prix honnête ?",
      ctaCardText: "Appelez-nous, on vous donne une estimation claire avant de commencer.",
      serviceName: "Garage honnête et prix clair",
      faqTitle: "Questions fréquentes — Prix et confiance",
      faq: [
        {
          question: "Le prix donné au téléphone est-il final ?",
          answer:
            "Le prix au téléphone est une estimation; le montant final est confirmé après l'inspection, qui prend souvent moins d'une heure, et toujours avant que les travaux commencent. Un même symptôme a souvent deux causes de coût très différent : un grincement peut n'être que le témoin d'usure, ou un étrier bloqué. Une fois le montant approuvé, la facture ne le dépasse pas.",
        },
        {
          question: "Comment fonctionne votre estimation avant travaux ?",
          answer:
            "En trois étapes : on inspecte le véhicule, on vous explique les constats, puis on vous remet une estimation détaillée où les pièces et la main-d'œuvre sont séparées. L'inspection et l'estimation sont gratuites, rien ne commence sans votre accord, et vous pouvez repartir avec le papier. Les réparations faites à notre atelier d'Aylmer sont garanties un an, pièces et main-d'œuvre.",
        },
        {
          question: "Pourquoi un garage indépendant coûte-t-il moins cher qu'un concessionnaire ?",
          answer:
            "Les frais généraux ne sont pas les mêmes : une seule bâtisse au 879 chemin Vanier, à Aylmer, sans salle d'exposition ni conseillers aux ventes à financer. La garantie reste d'un an complet sur les pièces et la main-d'œuvre. On vous dit aussi quand une réparation peut attendre, ce qui évite de payer aujourd'hui pour une pièce qui a encore des mois devant elle.",
        },
        {
          question: "Que faire si le devis d'un autre garage me semble trop élevé ?",
          answer:
            "Apportez-nous le devis : on inspecte le véhicule de notre côté, puis on le reprend ligne par ligne — ce qui doit vraiment se faire maintenant et ce qui peut attendre. Des plaquettes durent en général de 40 000 à 80 000 km et un disque survit souvent à un ou deux jeux de plaquettes, donc tout ne se remplace pas en même temps. Rien ne débute sans votre accord.",
        },
      ],
    },
    en: {
      metaTitle: "Honest Garage, Clear Pricing in Aylmer | Mécano Express",
      metaDescription:
        "Honest local garage, price confirmed before work, no surprise on the bill. Cheaper than a dealership. Call (819) 921-7869.",
      eyebrow: "Trust & Pricing",
      heroTitle: "Honest Pricing,",
      heroHighlight: "Local Garage",
      subtitle: "No selling parts you don't need, no surprise bill. We tell you the price before starting, period.",
      trustBar: ["Price confirmed before work", "No upselling", "Cheaper than the dealer"],
      reasonsTitle: "Why our approach is different",
      reasons: [
        {
          title: "The price, before the work",
          text: "We inspect, explain, and give you a clear price — then you decide.",
        },
        {
          title: "We don't sell what you don't need",
          text: "If a repair can wait, we'll tell you honestly instead of selling it to you.",
        },
        {
          title: "Cheaper than the dealer",
          text: "Same quality of work and certified equipment, at a much more affordable price.",
        },
      ],
      areas: ["Gatineau", "Aylmer", "Hull", "Buckingham"],
      ctaCardTitle: "Want an honest price?",
      ctaCardText: "Call us, we'll give you a clear estimate before starting.",
      serviceName: "Honest garage, clear pricing",
      faqTitle: "Frequently Asked Questions — Pricing & Trust",
      faq: [
        {
          question: "Is the price you give over the phone final?",
          answer:
            "The figure given by phone is an estimate; the final one is confirmed after the inspection, which often takes under an hour, and always before anything is taken apart. One symptom can have two causes with very different costs — a brake squeal may be nothing but the wear indicator, or it may be a seized caliper. Once you approve the number, the invoice does not go past it.",
        },
        {
          question: "How does your estimate-before-work process go?",
          answer:
            "Three steps: we inspect the vehicle, explain the findings, then hand you an itemized estimate with parts and labour listed separately. The inspection and the estimate are free, nothing starts without your go-ahead, and the paperwork is yours to take away. Work done at our Aylmer shop is backed by a one-year warranty on parts and labour.",
        },
        {
          question: "Why does an independent garage cost less than a dealership?",
          answer:
            "Overhead is the main reason: a single building at 879 chemin Vanier in Aylmer, with no showroom and no sales floor to carry. The warranty is still a full year on parts and labour. We will also tell you when a repair can wait, so you are not paying today for a part that has months of service left in it.",
        },
        {
          question: "What should I do if another garage's quote looks too high?",
          answer:
            "Bring the quote in and we will inspect the vehicle ourselves, then go through it line by line: what genuinely needs doing now, and what can safely wait. Brake pads generally last 40,000 to 80,000 km, and a rotor often outlasts one or two sets of pads, so the whole corner rarely needs replacing at once. Nothing is started without your approval.",
        },
      ],
    },
  },
  {
    slug: "freins-near-me",
    indexable: false,
    group: "specialty",
    heroImage: { kind: "photo", name: "mecanique.webp" },
    fr: {
      metaTitle: "Garage de freins près de chez vous à Aylmer | Mécano Express",
      metaDescription:
        "Réparation de freins près de chez vous à Aylmer et Gatineau. Diagnostic complet, plaquettes, disques. Sans rendez-vous. (819) 921-7869.",
      eyebrow: "Freins · Près de vous",
      heroTitle: "Réparation de Freins",
      heroHighlight: "Près de Vous",
      subtitle: "Un bruit, une vibration au freinage ? On inspecte vos freins rapidement et on vous donne un prix clair avant toute réparation.",
      trustBar: ["Diagnostic rapide", "Prix confirmé avant travaux", "Sans rendez-vous"],
      reasonsTitle: "Pourquoi venir chez nous pour vos freins",
      reasons: [
        {
          title: "Vos freins, notre priorité de sécurité",
          text: "On inspecte plaquettes, disques et étriers avant de vous dire ce qui doit vraiment être réparé.",
        },
        {
          title: "Diagnostic rapide",
          text: "Un bruit de frein se vérifie en quelques minutes — pas besoin d'attendre des jours.",
        },
        {
          title: "Prix clair avant travaux",
          text: "Vous savez le coût exact avant qu'on touche à votre véhicule.",
        },
      ],
      areas: ["Gatineau", "Aylmer", "Hull", "Buckingham"],
      ctaCardTitle: "Vos freins font du bruit ?",
      ctaCardText: "Ne prenez pas de risque — appelez-nous pour une inspection rapide.",
      serviceName: "Réparation de freins près de vous",
      faqTitle: "Questions fréquentes — Freins près de vous",
      faq: [
        {
          question: "Combien coûte une inspection de freins ?",
          answer:
            "L'inspection des freins ne coûte rien : on retire la roue, on mesure l'épaisseur des plaquettes, on vérifie l'état du disque et on vous montre les mesures. Un prix n'apparaît que si une pièce doit vraiment être remplacée, et il est confirmé avant les travaux. L'atelier est au 879 chemin Vanier à Aylmer, sans rendez-vous, du lundi au samedi de 9h à 18h.",
        },
        {
          question: "Puis-je faire vérifier mes freins le jour même ?",
          answer:
            "Oui, les freins passent en priorité et se vérifient habituellement le jour même, sans rendez-vous, entre 9h et 18h du lundi au samedi. Un grincement métallique constant est différent : arrêtez de conduire et appelez le (819) 921-7869, parce que ce bruit signifie souvent que la plaquette est usée jusqu'à la plaque d'appui. Le remorquage roule 24 h sur 24 à partir de 79,99 $.",
        },
        {
          question: "Remplacez-vous seulement les plaquettes ou aussi les disques ?",
          answer:
            "Les plaquettes seules suffisent dans bien des cas, car un disque survit souvent à un ou deux jeux de plaquettes. On mesure l'épaisseur du disque et on vérifie le voile avant de décider, et vous voyez les chiffres. Les plaquettes durent en général de 40 000 à 80 000 km selon la conduite et le terrain. Ce qu'on remplace à Aylmer est garanti un an, pièces et main-d'œuvre.",
        },
        {
          question: "Comment savoir si mes freins ont besoin d'attention ?",
          answer:
            "Trois signaux comptent surtout. Un sifflement à basse vitesse est habituellement le témoin d'usure qui fait son travail. Un bruit métallique de meulage veut dire que la plaquette est rendue à la plaque d'appui : cessez de rouler. Une pédale molle ou spongieuse pointe vers de l'air ou de l'humidité dans le liquide, qui se change typiquement tous les 2 à 3 ans. N'importe lequel des trois mérite une vérification à Aylmer.",
        },
      ],
    },
    en: {
      metaTitle: "Brake Shop Near Me in Aylmer | Mécano Express",
      metaDescription:
        "Brake repair near me in Aylmer and Gatineau. Complete diagnostic, pads, rotors. Walk-in welcome. Call (819) 921-7869.",
      eyebrow: "Brakes · Near Me",
      heroTitle: "Brake Repair",
      heroHighlight: "Near Me",
      subtitle: "Noise or vibration when braking? We inspect your brakes quickly and give you a clear price before any repair.",
      trustBar: ["Fast diagnostic", "Price confirmed before work", "Walk-in welcome"],
      reasonsTitle: "Why come to us for your brakes",
      reasons: [
        {
          title: "Your brakes, our safety priority",
          text: "We inspect pads, rotors and calipers before telling you what actually needs repair.",
        },
        {
          title: "Fast diagnostic",
          text: "A brake noise is checked in minutes — no need to wait days.",
        },
        {
          title: "Clear price before work",
          text: "You know the exact cost before we touch your vehicle.",
        },
      ],
      areas: ["Gatineau", "Aylmer", "Hull", "Buckingham"],
      ctaCardTitle: "Brakes making noise?",
      ctaCardText: "Don't take chances — call us for a quick inspection.",
      serviceName: "Brake repair near me",
      faqTitle: "Frequently Asked Questions — Brakes Near Me",
      faq: [
        {
          question: "How much does a brake inspection cost?",
          answer:
            "Brake inspections are free — we pull the wheel, measure pad thickness, check the rotor surface and show you the readings. A price only comes up if something genuinely needs replacing, and it is confirmed before any work. The shop sits at 879 chemin Vanier in Aylmer and takes walk-ins Monday to Saturday, 9 AM to 6 PM.",
        },
        {
          question: "Can I get my brakes looked at the same day?",
          answer:
            "Brakes jump the queue, so a same-day check is usually possible any time between 9 AM and 6 PM, Monday to Saturday, with no appointment. Steady metallic grinding is the exception: stop driving and call (819) 921-7869, because that sound often means the pad has worn through to the backing plate. Towing runs 24/7 and starts at $79.99.",
        },
        {
          question: "Do you replace just the pads, or the rotors too?",
          answer:
            "Pads alone are often enough, since a rotor frequently outlasts one or two sets of pads. We measure rotor thickness and check for warping before deciding, and you see the numbers. Pads themselves typically last 40,000 to 80,000 km depending on driving style and terrain. Whatever gets replaced at our Aylmer shop is covered for one year, parts and labour.",
        },
        {
          question: "How do I know if my brakes need attention?",
          answer:
            "Three signs matter most. A squeal at low speed is usually the wear indicator doing its job. A metallic grinding noise means the pad is down to the backing plate, so stop driving. A soft or spongy pedal suggests air or moisture in the brake fluid, which is normally changed every 2 to 3 years. Any one of the three is worth a check in Aylmer right away.",
        },
      ],
    },
  },
  {
    slug: "freins-bruit",
    group: "specialty",
    heroImage: { kind: "photo", name: "mecanique.webp" },
    fr: {
      metaTitle: "Freins qui grincent ? Diagnostic à Aylmer | Mécano Express",
      metaDescription:
        "Vos freins grincent ou vibrent ? Diagnostic rapide et honnête à Aylmer (Gatineau). Estimation gratuite avant travaux. (819) 921-7869.",
      eyebrow: "Symptôme · Freins qui grincent",
      heroTitle: "Freins Qui",
      heroHighlight: "Grincent ?",
      subtitle: "Un grincement ne veut pas toujours dire une réparation majeure. On inspecte pour trouver la vraie cause avant de vous proposer quoi que ce soit.",
      trustBar: ["Inspection gratuite", "Diagnostic honnête", "Prix confirmé avant travaux"],
      reasonsTitle: "Pourquoi faire vérifier ce bruit rapidement",
      reasons: [
        {
          title: "On trouve la vraie cause",
          text: "Un grincement peut venir de la poussière, d'une plaquette usée ou d'un disque endommagé — on identifie avant d'agir.",
        },
        {
          title: "Pas de réparation inutile",
          text: "Si ce n'est pas urgent, on vous le dit honnêtement plutôt que de vous vendre une réparation.",
        },
        {
          title: "Sécurité avant tout",
          text: "Un bruit de frein qui persiste mérite une vérification rapide — mieux vaut prévenir.",
        },
      ],
      areas: ["Gatineau", "Aylmer", "Hull", "Buckingham"],
      ctaCardTitle: "Vos freins grincent depuis un moment ?",
      ctaCardText: "Ne l'ignorez pas — une inspection rapide peut vous éviter une facture plus grosse.",
      serviceName: "Diagnostic de freins qui grincent",
      faqTitle: "Questions fréquentes — Freins qui grincent",
      faq: [
        {
          question: "Un grincement de frein est-il toujours dangereux ?",
          answer:
            "Non : un sifflement bref à basse vitesse est souvent le témoin d'usure qui signale que les plaquettes approchent de leur fin. Un bruit métallique de meulage, lui, est sérieux — la plaquette est probablement usée jusqu'à la plaque d'appui et le disque s'abîme à chaque freinage. Dans ce cas, cessez de rouler et appelez le (819) 921-7869 : le remorquage roule 24 h sur 24.",
        },
        {
          question: "Est-ce que ça peut être autre chose que les plaquettes ?",
          answer:
            "Oui : poussière de frein, corrosion de surface sur un disque après une nuit humide, un caillou coincé ou un étrier qui commence à bloquer font tous du bruit. Un véhicule qui tire d'un côté au freinage pointe justement vers cet étrier bloqué ou vers une usure inégale des plaquettes. On inspecte les quatre roues à l'atelier d'Aylmer avant de conclure, et vous voyez ce qu'on trouve.",
        },
        {
          question: "Est-ce que je peux conduire avec des freins qui grincent ?",
          answer:
            "Un sifflement léger permet habituellement de se rendre au garage; un grincement métallique, non — arrêtez-vous. Comme un jeu de plaquettes tient en général de 40 000 à 80 000 km, un bruit qui apparaît bien à l'intérieur de cette fenêtre mérite une vérification rapide. Passez sans rendez-vous au 879 chemin Vanier à Aylmer, du lundi au samedi de 9h à 18h.",
        },
        {
          question: "Combien de temps ça prend pour trouver la cause du bruit ?",
          answer:
            "Un diagnostic de bruit de frein prend habituellement moins d'une heure : le véhicule monte sur le pont, les roues sortent, les plaquettes sont mesurées et les disques et étriers vérifiés. Vous repartez avec les mesures et une estimation à approuver avant tout travail. L'atelier d'Aylmer prend les visites sans rendez-vous du lundi au samedi, de 9h à 18h, et dessert aussi Hull et Gatineau.",
        },
      ],
    },
    en: {
      metaTitle: "Squeaking Brakes? Diagnostic in Aylmer | Mécano Express",
      metaDescription:
        "Brakes squeaking or vibrating? Fast, honest diagnostic in Aylmer (Gatineau). Free estimate before work. Call (819) 921-7869.",
      eyebrow: "Symptom · Squeaking Brakes",
      heroTitle: "Brakes",
      heroHighlight: "Squeaking?",
      subtitle: "A squeak doesn't always mean a major repair. We inspect to find the real cause before proposing anything.",
      trustBar: ["Free inspection", "Honest diagnostic", "Price confirmed before work"],
      reasonsTitle: "Why get that noise checked quickly",
      reasons: [
        {
          title: "We find the real cause",
          text: "A squeak can come from dust, a worn pad or a damaged rotor — we identify it before acting.",
        },
        {
          title: "No unnecessary repair",
          text: "If it's not urgent, we'll tell you honestly instead of selling you a repair.",
        },
        {
          title: "Safety first",
          text: "A persistent brake noise deserves a quick check — better safe than sorry.",
        },
      ],
      areas: ["Gatineau", "Aylmer", "Hull", "Buckingham"],
      ctaCardTitle: "Brakes been squeaking for a while?",
      ctaCardText: "Don't ignore it — a quick inspection can save you a bigger bill later.",
      serviceName: "Squeaking brake diagnostic",
      faqTitle: "Frequently Asked Questions — Squeaking Brakes",
      faq: [
        {
          question: "Is a brake squeak always dangerous?",
          answer:
            "No — a short squeal at low speed is usually the wear indicator telling you the pads are getting close to done. Metallic grinding is the serious one: the pad has likely worn through to the backing plate, and the rotor takes damage with every stop. If you hear that, stop driving and call (819) 921-7869; towing runs 24/7.",
        },
        {
          question: "Could the noise be something other than the pads?",
          answer:
            "Yes. Brake dust, surface rust on a rotor after a damp night, a trapped stone or a caliper starting to seize all make noise. A vehicle that pulls to one side while braking points to exactly that seizing caliper, or to uneven pad wear. We inspect all four corners at the Aylmer shop before drawing a conclusion, and you see what turns up.",
        },
        {
          question: "Can I keep driving with squeaking brakes?",
          answer:
            "A light squeal normally gets you as far as the shop; metallic grinding does not, so pull over. Since a set of pads typically lasts 40,000 to 80,000 km, a noise that shows up well inside that window is worth checking quickly. Walk in at 879 chemin Vanier in Aylmer, Monday to Saturday between 9 AM and 6 PM, and we will look at it.",
        },
        {
          question: "How long does it take to find the source of the noise?",
          answer:
            "Diagnosing a brake noise usually takes under an hour: the vehicle goes up on the lift, the wheels come off, the pads get measured and the rotors and calipers get checked. You leave with the measurements and an estimate to approve before any work happens. The Aylmer shop takes walk-ins Monday to Saturday, 9 AM to 6 PM, and serves Hull and Gatineau too.",
        },
      ],
    },
  },
  {
    slug: "plaquettes-frein",
    group: "specialty",
    heroImage: { kind: "photo", name: "mecanique.webp" },
    fr: {
      metaTitle: "Changement de plaquettes de frein à Aylmer | Mécano Express",
      metaDescription:
        "Remplacement de plaquettes de frein à Aylmer, prix honnête, garantie 1 an. Devis gratuit avant travaux. (819) 921-7869.",
      eyebrow: "Plaquettes de frein",
      heroTitle: "Changement de",
      heroHighlight: "Plaquettes",
      subtitle: "Plaquettes usées ? On les remplace rapidement, avec des pièces de qualité et une garantie d'un an sur la main-d'œuvre et les pièces.",
      trustBar: ["Garantie 1 an", "Devis gratuit", "Installation rapide"],
      reasonsTitle: "Pourquoi faire changer vos plaquettes chez nous",
      reasons: [
        {
          title: "Pièces de qualité, garanties",
          text: "Toutes nos plaquettes sont couvertes par une garantie d'un an sur pièces et main-d'œuvre.",
        },
        {
          title: "Prix clair avant l'installation",
          text: "On vous donne le prix exact des plaquettes et de la main-d'œuvre avant de commencer.",
        },
        {
          title: "Installation rapide",
          text: "La plupart des changements de plaquettes se font en une heure ou moins.",
        },
      ],
      areas: ["Gatineau", "Aylmer", "Hull", "Buckingham"],
      ctaCardTitle: "Plaquettes à changer ?",
      ctaCardText: "Appelez-nous pour un devis gratuit et rapide.",
      serviceName: "Changement de plaquettes de frein",
      faqTitle: "Questions fréquentes — Plaquettes de frein",
      faq: [
        {
          question: "Comment établissez-vous le prix d'un changement de plaquettes ?",
          answer:
            "On mesure d'abord l'épaisseur des plaquettes et l'état des disques, puis on vous remet une estimation détaillée qui sépare les pièces et la main-d'œuvre. Le montant est confirmé avant qu'on commence et la facture ne le dépasse pas. Le travail est garanti un an, pièces et main-d'œuvre. L'atelier est au 879 chemin Vanier à Aylmer, ouvert du lundi au samedi de 9h à 18h.",
        },
        {
          question: "Dois-je aussi changer les disques ?",
          answer:
            "Pas nécessairement : un disque survit souvent à un ou deux jeux de plaquettes. On mesure son épaisseur par rapport au minimum du fabricant et on vérifie le voile; s'il est encore dans les tolérances, il reste sur le véhicule. Vous voyez la mesure avant qu'on décide. Les plaquettes, elles, durent en général de 40 000 à 80 000 km selon la conduite et le terrain.",
        },
        {
          question: "Combien de temps dure l'installation ?",
          answer:
            "Comptez environ une heure par essieu sur la plupart des véhicules, un peu plus si un étrier est bloqué ou si la quincaillerie est corrodée par le sel de nos hivers. On travaille sans rendez-vous au 879 chemin Vanier à Aylmer, du lundi au samedi de 9h à 18h, avec stationnement sur place. Vous approuvez l'estimation avant qu'on commence.",
        },
        {
          question: "Comment savoir quand mes plaquettes sont à changer ?",
          answer:
            "Un sifflement à basse vitesse est le premier indice : c'est le témoin d'usure qui frotte volontairement sur le disque. Un bruit métallique de meulage veut dire que la plaquette est rendue à la plaque d'appui, alors cessez de rouler. Comme un jeu tient en général de 40 000 à 80 000 km, une mesure vers 40 000 km évite les surprises. On vérifie l'épaisseur restante à Aylmer, sans rendez-vous.",
        },
      ],
    },
    en: {
      metaTitle: "Brake Pad Replacement in Aylmer | Mécano Express",
      metaDescription:
        "Brake pad replacement in Aylmer, honest pricing, 1-year warranty. Free quote before work. Call (819) 921-7869.",
      eyebrow: "Brake Pads",
      heroTitle: "Brake Pad",
      heroHighlight: "Replacement",
      subtitle: "Worn pads? We replace them quickly, with quality parts and a one-year warranty on labor and parts.",
      trustBar: ["1-year warranty", "Free quote", "Fast installation"],
      reasonsTitle: "Why get your pads changed with us",
      reasons: [
        {
          title: "Quality parts, guaranteed",
          text: "All our pads are covered by a one-year warranty on parts and labor.",
        },
        {
          title: "Clear price before installation",
          text: "We give you the exact price for pads and labor before starting.",
        },
        {
          title: "Fast installation",
          text: "Most pad replacements are done in an hour or less.",
        },
      ],
      areas: ["Gatineau", "Aylmer", "Hull", "Buckingham"],
      ctaCardTitle: "Pads need changing?",
      ctaCardText: "Call us for a fast, free quote.",
      serviceName: "Brake pad replacement",
      faqTitle: "Frequently Asked Questions — Brake Pads",
      faq: [
        {
          question: "How do you set the price for a brake pad replacement?",
          answer:
            "We measure pad thickness and rotor condition first, then hand you an itemized estimate with parts and labour listed separately. The figure is confirmed before work starts, and the invoice does not go beyond it. The job carries a one-year warranty on parts and labour. Our shop is at 879 chemin Vanier in Aylmer, open Monday to Saturday from 9 AM to 6 PM.",
        },
        {
          question: "Do the rotors have to be replaced too?",
          answer:
            "Not necessarily — a rotor often outlasts one or two sets of pads. We measure it against the manufacturer's minimum thickness and check it for warping; if it is still in spec, it stays on the car. You see the measurement before the call gets made. Pads themselves typically last 40,000 to 80,000 km depending on driving style and terrain.",
        },
        {
          question: "How long does the installation take?",
          answer:
            "Budget roughly an hour per axle on most vehicles, a little longer when a caliper has seized or the hardware is corroded from road salt. We work on a walk-in basis at 879 chemin Vanier in Aylmer, Monday to Saturday, 9 AM to 6 PM, with parking on site. You approve the estimate before any of it begins.",
        },
        {
          question: "How do I know when my pads need changing?",
          answer:
            "A squeal at low speed is the first clue — that is the wear indicator deliberately touching the rotor. Metallic grinding means the pad has reached the backing plate, so stop driving. Because a set generally lasts 40,000 to 80,000 km, having them measured around the 40,000 km mark heads off surprises. We check the remaining thickness in Aylmer, no appointment needed.",
        },
      ],
    },
  },
];

export function getMechanicIntent(slug: string): MechanicIntent | undefined {
  return mechanicIntents.find((i) => i.slug === slug);
}

export function getMechanicIntentContent(slug: string, locale: Locale) {
  const intent = getMechanicIntent(slug);
  if (!intent) return undefined;
  return { intent, content: intent[locale] };
}
