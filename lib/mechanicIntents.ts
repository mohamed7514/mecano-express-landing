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
          answer: "Oui, on accepte les visites sans rendez-vous pendant nos heures d'ouverture, du lundi au samedi.",
        },
        {
          question: "Faites-vous les réparations le jour même ?",
          answer:
            "Pour la plupart des réparations courantes (freins, huile, diagnostic), oui. Pour les pièces à commander, on vous donne un délai clair.",
        },
        {
          question: "Où êtes-vous situés exactement ?",
          answer: "Au 879 chemin Vanier à Aylmer, secteur Vanier — facile d'accès depuis tout le secteur ouest de Gatineau.",
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
          answer: "Yes, we accept walk-ins during our opening hours, Monday to Saturday.",
        },
        {
          question: "Do you do repairs the same day?",
          answer:
            "For most common repairs (brakes, oil, diagnostics), yes. For parts that need ordering, we give you a clear timeline.",
        },
        {
          question: "Where exactly are you located?",
          answer: "At 879 chemin Vanier in Aylmer, Vanier area — easy access from all of western Gatineau.",
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
          question: "Est-ce loin de Hull pour venir vous voir ?",
          answer: "Non, notre atelier à Aylmer est à quelques minutes de la majorité des secteurs de Hull.",
        },
        {
          question: "Offrez-vous tous les services mécaniques ?",
          answer: "Oui — huile, freins, pneus, diagnostic, climatisation, suspension et plus.",
        },
        {
          question: "Puis-je avoir un prix avant de me déplacer ?",
          answer: "Oui, décrivez-nous le problème au téléphone et on vous donne une idée de prix avant votre visite.",
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
          question: "Is it far from Hull to come see you?",
          answer: "No, our Aylmer shop is a few minutes from most areas of Hull.",
        },
        {
          question: "Do you offer all mechanical services?",
          answer: "Yes — oil, brakes, tires, diagnostics, A/C, suspension and more.",
        },
        {
          question: "Can I get a price before driving over?",
          answer: "Yes, describe the issue by phone and we'll give you a price idea before your visit.",
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
            "Au 879 chemin Vanier, secteur Vanier à Aylmer, avec stationnement sur place. On est à quelques minutes du centre de Gatineau, de Hull et de tout le secteur ouest.",
        },
        {
          question: "Quels secteurs desservez-vous ?",
          answer:
            "Aylmer, le secteur Vanier, Gatineau, Hull et Buckingham. Si vous n'êtes pas sûr, appelez-nous — on vous le confirme en trente secondes.",
        },
        {
          question: "Qu'est-ce qui vous différencie d'un concessionnaire ?",
          answer: "Un prix plus honnête, un service sans rendez-vous, et une explication claire de chaque réparation.",
        },
        {
          question: "Faites-vous l'inspection avant de réparer ?",
          answer: "Oui, on inspecte et on vous donne un prix avant de commencer quoi que ce soit.",
        },
        {
          question: "Puis-je venir pour un simple avis, sans réparation ?",
          answer: "Oui, une inspection ou un deuxième avis, ça ne coûte rien de nous appeler.",
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
          question: "Where exactly are you located?",
          answer:
            "At 879 chemin Vanier, Vanier area in Aylmer, with on-site parking. We're minutes from downtown Gatineau, Hull and the whole west end.",
        },
        {
          question: "Which areas do you serve?",
          answer:
            "Aylmer, the Vanier area, Gatineau, Hull and Buckingham. Not sure if you're in range? Call us — we'll confirm in thirty seconds.",
        },
        {
          question: "What sets you apart from a dealership?",
          answer: "A more honest price, walk-in service, and a clear explanation of every repair.",
        },
        {
          question: "Do you inspect before repairing?",
          answer: "Yes, we inspect and give you a price before starting anything.",
        },
        {
          question: "Can I come in for just an opinion, no repair?",
          answer: "Yes, an inspection or second opinion — it costs nothing to call us.",
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
          question: "Le prix au téléphone est-il final ?",
          answer: "On vous donne une estimation par téléphone, confirmée après inspection — jamais de surprise à la fin.",
        },
        {
          question: "Faites-vous un devis gratuit ?",
          answer: "Oui, l'inspection et l'estimation sont gratuites avant tout travail.",
        },
        {
          question: "Pourquoi êtes-vous moins chers qu'un concessionnaire ?",
          answer: "Mêmes pièces et mêmes standards, mais sans les frais généraux d'une grande chaîne.",
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
          question: "Is the price on the phone final?",
          answer: "We give you an estimate by phone, confirmed after inspection — never a surprise at the end.",
        },
        {
          question: "Do you offer a free quote?",
          answer: "Yes, inspection and estimate are free before any work.",
        },
        {
          question: "Why are you cheaper than a dealership?",
          answer: "Same parts and standards, but without a big chain's overhead.",
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
          answer: "L'inspection est gratuite. On vous donne un prix seulement si une réparation est nécessaire.",
        },
        {
          question: "Puis-je passer le jour même ?",
          answer: "Dans la majorité des cas, oui — les freins sont une priorité de sécurité qu'on traite rapidement.",
        },
        {
          question: "Remplacez-vous seulement les plaquettes ou aussi les disques ?",
          answer: "Ça dépend de l'usure. On vous explique ce qui est nécessaire avant de remplacer quoi que ce soit.",
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
          answer: "The inspection is free. We only give you a price if a repair is needed.",
        },
        {
          question: "Can I come in the same day?",
          answer: "In most cases, yes — brakes are a safety priority we handle quickly.",
        },
        {
          question: "Do you replace only pads or rotors too?",
          answer: "It depends on wear. We explain what's needed before replacing anything.",
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
          answer: "Pas toujours, mais c'est souvent un signal d'usure à vérifier avant que ça s'aggrave.",
        },
        {
          question: "Est-ce que ça peut être autre chose que les plaquettes ?",
          answer: "Oui — poussière, corrosion sur le disque ou pièce détachée peuvent aussi causer un bruit. On vérifie tout.",
        },
        {
          question: "Combien coûte l'inspection ?",
          answer: "L'inspection est gratuite. On vous donne un prix seulement si une réparation est nécessaire.",
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
          answer: "Not always, but it's often a wear signal worth checking before it gets worse.",
        },
        {
          question: "Could it be something other than the pads?",
          answer: "Yes — dust, rotor corrosion or a loose part can also cause noise. We check everything.",
        },
        {
          question: "How much does the inspection cost?",
          answer: "The inspection is free. We only give you a price if a repair is needed.",
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
          question: "Combien coûte un changement de plaquettes ?",
          answer: "Le prix varie selon le véhicule. On vous donne un devis gratuit avant de commencer.",
        },
        {
          question: "Dois-je aussi changer les disques ?",
          answer: "Pas toujours. On inspecte l'usure des disques et on vous le dit honnêtement si un remplacement est nécessaire.",
        },
        {
          question: "Combien de temps dure l'installation ?",
          answer: "En général une heure ou moins pour un changement de plaquettes standard.",
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
          question: "How much does a pad replacement cost?",
          answer: "The price varies by vehicle. We give you a free quote before starting.",
        },
        {
          question: "Do I also need to replace the rotors?",
          answer: "Not always. We inspect rotor wear and tell you honestly if replacement is needed.",
        },
        {
          question: "How long does installation take?",
          answer: "Generally an hour or less for a standard pad replacement.",
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
