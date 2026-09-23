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
   * stronger page (/garage, /remorquage, /garage/freins),
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
 * group that isn't already well served by an existing /garage/[slug] page
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
      metaTitle: "Garage mécanique à Aylmer | Mécano Express",
      metaDescription:
        "Garage mécanique à Aylmer. Diagnostic honnête, prix confirmé avant travaux. Sans rendez-vous. Appelez le (819) 921-7869.",
      eyebrow: "Garage · Aylmer",
      heroTitle: "Garage",
      heroHighlight: "à Aylmer",
      subtitle:
        "Votre garage de quartier au 879 chemin Vanier, à Aylmer. Diagnostic honnête, prix confirmé avant tout travail.",
      trustBar: ["Garage de quartier à Aylmer", "Prix confirmé avant travaux", "Sans rendez-vous"],
      reasonsTitle: "Pourquoi choisir un garage à Aylmer",
      reasons: [
        {
          title: "Un vrai garage de quartier",
          text: "On est établis à Aylmer — pas un atelier de passage. Vous nous reverrez l'année prochaine.",
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
      areas: ["Aylmer", "Gatineau", "Hull"],
      ctaCardTitle: "Besoin d'un garage à Aylmer ?",
      ctaCardText: "Passez nous voir au 879 chemin Vanier ou appelez pour un diagnostic honnête.",
      serviceName: "Garage à Aylmer",
      faqTitle: "Questions fréquentes — Garage à Aylmer",
      faq: [
        {
          question: "Puis-je passer sans rendez-vous ?",
          answer:
            "Oui, les visites sans rendez-vous sont acceptées au 879 chemin Vanier, à Aylmer, du lundi au samedi de 9h à 18h. Il y a du stationnement sur place, donc pas besoin de chercher une place dans la rue. On inspecte le véhicule, on vous explique ce qu'on a trouvé, et le prix est confirmé avant qu'on touche à quoi que ce soit.",
        },
        {
          question: "Combien de temps ça prend pour une réparation courante ?",
          answer:
            "La plupart des réparations courantes se règlent dans la même journée : un changement d'huile prend typiquement moins d'une heure et un jeu de plaquettes environ une heure par essieu. Les pièces à commander sont l'exception, et on vous donne le délai avant de passer la commande. L'atelier d'Aylmer est ouvert six jours sur sept, du lundi au samedi, de 9h à 18h.",
        },
        {
          question: "Où êtes-vous situés exactement ?",
          answer:
            "Au 879 chemin Vanier, à Aylmer, avec stationnement sur place. On est ouvert du lundi au samedi, de 9h à 18h, et le même atelier dessert Hull, Gatineau et Buckingham. Le remorquage, lui, roule 24 h sur 24 au (819) 921-7869 si le véhicule ne peut pas se rendre jusqu'à nous.",
        },
        {
          question: "Que faire si mon véhicule ne peut plus rouler jusqu'au garage ?",
          answer:
            "Appelez le (819) 921-7869 et on va le chercher : l'assistance routière fonctionne 24 h sur 24, nuits, fins de semaine et jours fériés inclus, et le remorquage débute à 79,99 $. On récupère le véhicule à Aylmer, Hull, Gatineau ou Buckingham et on le ramène au 879 chemin Vanier. Le diagnostic suit, et rien ne se répare avant votre approbation.",
        },
      ],
    },
    en: {
      metaTitle: "Auto Garage in Aylmer | Mécano Express",
      metaDescription:
        "Auto garage in Aylmer. Honest diagnostic, price confirmed before work. Walk-in welcome. Call (819) 921-7869.",
      eyebrow: "Garage · Aylmer",
      heroTitle: "Garage",
      heroHighlight: "in Aylmer",
      subtitle:
        "Your neighborhood garage at 879 chemin Vanier, Aylmer. Honest diagnostic, price confirmed before any work.",
      trustBar: ["Neighborhood garage in Aylmer", "Price confirmed before work", "Walk-in welcome"],
      reasonsTitle: "Why choose a garage in Aylmer",
      reasons: [
        {
          title: "A real neighborhood garage",
          text: "We're established in Aylmer — not a drive-through shop. You'll see us again next year.",
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
      areas: ["Aylmer", "Gatineau", "Hull"],
      ctaCardTitle: "Need a garage in Aylmer?",
      ctaCardText: "Drop by at 879 chemin Vanier or call for an honest diagnostic.",
      serviceName: "Garage in Aylmer",
      faqTitle: "Frequently Asked Questions — Garage in Aylmer",
      faq: [
        {
          question: "Can I drop in without an appointment?",
          answer:
            "Walk-ins are welcome — no appointment is needed at 879 chemin Vanier in Aylmer, Monday to Saturday from 9 AM to 6 PM. On-site parking means you can leave the car with us instead of hunting for a spot on the street. We inspect first, explain what we found, and confirm the price before any work begins.",
        },
        {
          question: "How long does a common repair take?",
          answer:
            "Same-day is the norm for routine work: an oil change usually runs under an hour, and a set of brake pads is often about an hour per axle. Parts that have to be ordered are the exception, and we give you the timeline before ordering. The Aylmer shop is open six days a week, Monday to Saturday, 9 AM to 6 PM.",
        },
        {
          question: "Where exactly are you located?",
          answer:
            "879 chemin Vanier, in Aylmer, with parking on site. Hours are Monday to Saturday, 9 AM to 6 PM, and that one shop also serves Hull, Gatineau and Buckingham. Towing runs separately, 24/7 at (819) 921-7869, for the times a vehicle simply cannot be driven to us.",
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
            "Oui — décrivez le symptôme au (819) 921-7869 et on vous explique ce qu'il faudra vérifier avant que vous fassiez le trajet depuis Hull. L'estimation est confirmée après l'inspection, parce qu'un même grincement de frein peut venir d'une plaquette usée ou d'un étrier bloqué. Le montant est arrêté avec vous avant les travaux, et les réparations sont garanties un an, pièces et main-d'œuvre.",
        },
        {
          question: "Comment savoir si mes pneus d'hiver sont encore légaux ?",
          answer:
            "Au Québec, les pneus d'hiver sont obligatoires du 1er décembre au 15 mars, et la limite légale d'usure est de 2/32 de pouce de profondeur de sculpture. En pratique, on suggère de remplacer autour de 4/32, parce que l'adhérence sur la neige tassée se perd bien avant la limite légale. Depuis Hull, passez à l'atelier d'Aylmer du lundi au samedi : on mesure la profondeur et on vous montre la lecture.",
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
            "Yes — describe the symptom at (819) 921-7869 and we will tell you what has to be checked before you make the trip from Hull. The estimate is confirmed after the inspection, since the same brake noise can be a worn pad or a seized caliper. The figure is agreed with you before work starts, and repairs carry a one-year warranty on parts and labour.",
        },
        {
          question: "How do I know if my winter tires are still legal?",
          answer:
            "Quebec requires winter tires from December 1 to March 15, and the legal wear limit is 2/32 of an inch of tread. In practice we suggest replacing closer to 4/32, because grip on packed snow fades long before the legal minimum. Drop by the Aylmer shop, ten minutes from Hull, any day Monday to Saturday and we will measure the tread and show you the reading.",
        },
      ],
    },
  },
  {
    slug: "luskville",
    group: "zone",
    heroImage: { kind: "photo", name: "mecanique.webp" },
    fr: {
      metaTitle: "Garage près de Luskville (route 148) | Mécano Express",
      metaDescription:
        "Garage mécanique desservant Luskville et le Pontiac, à 20 minutes par la route 148. Suspension, alignement, pneus. (819) 921-7869.",
      eyebrow: "Garage · Luskville",
      heroTitle: "Garage",
      heroHighlight: "près de Luskville",
      subtitle:
        "Luskville et Aylmer sont sur la même route. Vingt minutes de 148 vers l'est et vous êtes au 879 chemin Vanier — sans rendez-vous, prix confirmé avant travaux.",
      trustBar: ["20 minutes par la 148", "Sans rendez-vous", "Garantie 1 an pièces et main-d'œuvre"],
      reasonsTitle: "Ce qu'on voit arriver du Pontiac",
      reasons: [
        {
          title: "Des suspensions fatiguées",
          text: "Les chemins de gravier et les accotements creusés du secteur usent les amortisseurs et déréglent la géométrie. C'est le motif de visite numéro un qui nous vient de l'ouest.",
        },
        {
          title: "Un trajet sans détour",
          text: "La 148 est une ligne droite entre Luskville et Aylmer : pas de pont, pas d'échangeur, pas d'heure de pointe à traverser. Vingt minutes, et c'est prévisible.",
        },
        {
          title: "Le garage complet le plus proche à l'est",
          text: "Freins, pneus, climatisation, diagnostic électronique : tout se fait sur place, au lieu de répartir la voiture entre trois commerces.",
        },
      ],
      areas: ["Luskville", "Pontiac", "Aylmer"],
      ctaCardTitle: "Vous venez du Pontiac ?",
      ctaCardText: "Appelez avant de prendre la 148 — on vous dit quoi faire vérifier.",
      serviceName: "Garage près de Luskville",
      faqTitle: "Questions fréquentes — Garage près de Luskville",
      faq: [
        {
          question: "Combien de temps de route depuis Luskville jusqu'à votre atelier ?",
          answer:
            "Une vingtaine de minutes par la route 148 vers l'est, soit une vingtaine de kilomètres jusqu'au 879 chemin Vanier à Aylmer. C'est tout droit, sans pont ni échangeur : Luskville et Aylmer sont sur la même route. L'atelier ouvre du lundi au samedi de 9 h à 18 h, sans rendez-vous, et il y a du stationnement sur place.",
        },
        {
          question: "Mes chemins sont en gravier — qu'est-ce que je devrais faire vérifier ?",
          answer:
            "La suspension et la géométrie, en priorité — c'est l'usure typique des chemins de Luskville. Rouler régulièrement sur du gravier use les amortisseurs, déséquilibre le parallélisme et mange l'intérieur des pneus avant tout le reste. Si le volant tire d'un côté ou si l'usure des pneus est inégale d'un bord à l'autre, c'est le signe. L'inspection se fait à l'atelier et l'estimation est confirmée avant les travaux.",
        },
        {
          question: "Est-ce que vous venez chercher le véhicule à Luskville s'il ne roule plus ?",
          answer:
            "Oui. Le service de remorquage répond 24 heures sur 24 au (819) 921-7869 et couvre Luskville et toute la municipalité de Pontiac, code postal J0X 2G0, le long de la 148 jusque vers Quyon. Le remorquage commence à 79,99 $ et le véhicule est ramené directement à l'atelier d'Aylmer pour le diagnostic.",
        },
        {
          question: "Faut-il prendre rendez-vous pour un changement d'huile ?",
          answer:
            "Non, l'atelier prend les visites sans rendez-vous du lundi au samedi, de 9 h à 18 h. Cela dit, si vous faites vingt minutes de route depuis Luskville, un appel au (819) 921-7869 avant de partir vous évite d'arriver au pire moment de la journée — et permet de sortir la pièce d'avance si on sait déjà ce qu'il faut.",
        },
      ],
    },
    en: {
      metaTitle: "Garage near Luskville (Route 148) | Mécano Express",
      metaDescription:
        "Auto garage serving Luskville and the Pontiac, 20 minutes away on Route 148. Suspension, alignment, tires. Call (819) 921-7869.",
      eyebrow: "Garage · Luskville",
      heroTitle: "Garage",
      heroHighlight: "near Luskville",
      subtitle:
        "Luskville and Aylmer sit on the same road. Twenty minutes east on the 148 and you are at 879 chemin Vanier — walk in, price confirmed before work.",
      trustBar: ["20 minutes on the 148", "Walk-in welcome", "1-year parts and labour warranty"],
      reasonsTitle: "What we see coming in from the Pontiac",
      reasons: [
        {
          title: "Tired suspensions",
          text: "Gravel roads and scoured shoulders wear out shocks and pull the alignment off. It is the number one reason vehicles come to us from the west.",
        },
        {
          title: "A drive with no detour",
          text: "The 148 runs straight from Luskville to Aylmer: no bridge, no interchange, no rush hour to cross. Twenty minutes, and it is predictable.",
        },
        {
          title: "The nearest full garage heading east",
          text: "Brakes, tires, air conditioning, electronic diagnostics — all under one roof, instead of splitting the car between three businesses.",
        },
      ],
      areas: ["Luskville", "Pontiac", "Aylmer"],
      ctaCardTitle: "Driving in from the Pontiac?",
      ctaCardText: "Call before you take the 148 — we'll tell you what to have checked.",
      serviceName: "Garage near Luskville",
      faqTitle: "Frequently Asked Questions — Garage near Luskville",
      faq: [
        {
          question: "How long is the drive from Luskville to your shop?",
          answer:
            "About twenty minutes east on Route 148, roughly twenty kilometres to 879 chemin Vanier in Aylmer. It is a straight run with no bridge and no interchange — Luskville and Aylmer sit on the same road. The shop is open Monday to Saturday, 9 AM to 6 PM, no appointment needed, and there is parking on site.",
        },
        {
          question: "My roads are gravel — what should I have checked?",
          answer:
            "Suspension and alignment first — that is the wear Luskville roads produce. Regular gravel driving wears shocks, pulls the toe out of spec and eats the inner edge of the front tires before anything else shows. A steering wheel that pulls to one side, or tread worn unevenly across the tire, is the tell. The inspection happens at the shop and the estimate is confirmed before any work.",
        },
        {
          question: "Will you come and get the vehicle in Luskville if it will not move?",
          answer:
            "Yes. Towing answers 24 hours a day at (819) 921-7869 and covers Luskville and the whole Municipality of Pontiac, postal code J0X 2G0, along the 148 out toward Quyon. Towing starts at $79.99 and the vehicle comes straight back to the Aylmer shop for diagnosis.",
        },
        {
          question: "Do I need an appointment for an oil change?",
          answer:
            "No, the shop takes walk-ins Monday to Saturday, 9 AM to 6 PM. That said, if you are driving twenty minutes from Luskville, a call to (819) 921-7869 before you leave saves you arriving at the busiest hour — and lets us pull the part in advance when we already know what is needed.",
        },
      ],
    },
  },
  {
    slug: "chelsea",
    group: "zone",
    heroImage: { kind: "photo", name: "mecanique.webp" },
    fr: {
      metaTitle: "Garage près de Chelsea (A-5, route 105) | Mécano Express",
      metaDescription:
        "Garage mécanique desservant Chelsea. Freins, pneus, suspension — l'usure typique des côtes du secteur. Prix confirmé. (819) 921-7869.",
      eyebrow: "Garage · Chelsea",
      heroTitle: "Garage",
      heroHighlight: "près de Chelsea",
      subtitle:
        "Chelsea, c'est des côtes, du sel et des chemins de parc. Ça se voit sur les freins et les pneus. On répare tout ça au 879 chemin Vanier, à Aylmer.",
      trustBar: ["Par l'A-5 et le boulevard Taché", "Prix confirmé avant travaux", "Ouvert le samedi"],
      reasonsTitle: "Ce que les routes de Chelsea font à une voiture",
      reasons: [
        {
          title: "Des freins qui travaillent plus",
          text: "Descendre le chemin d'Old Chelsea ou les accès du parc en frein moteur, tous les jours, use les plaquettes plus vite qu'un trajet de banlieue à plat.",
        },
        {
          title: "Du sel six mois par année",
          text: "Les côtes sont sablées et salées tôt en saison. Les conduites de frein et les étriers en prennent pour leur grade : c'est ce qu'on inspecte en premier sur un véhicule de Chelsea.",
        },
        {
          title: "Un trajet de vingt minutes",
          text: "De Chelsea à l'atelier, comptez une vingtaine de minutes par l'A-5 puis le boulevard Alexandre-Taché. On ne prétend pas être au coin de la rue.",
        },
      ],
      areas: ["Chelsea", "Old Chelsea", "Aylmer"],
      ctaCardTitle: "Un bruit de frein en descendant de Chelsea ?",
      ctaCardText: "Décrivez-le au téléphone — on vous dit si ça peut attendre.",
      serviceName: "Garage près de Chelsea",
      faqTitle: "Questions fréquentes — Garage près de Chelsea",
      faq: [
        {
          question: "Combien de temps pour venir de Chelsea à votre garage ?",
          answer:
            "Une vingtaine de minutes depuis la plupart des secteurs de Chelsea, par l'autoroute 5 puis le boulevard Alexandre-Taché jusqu'au 879 chemin Vanier, à Aylmer. L'atelier est ouvert du lundi au samedi de 9 h à 18 h, sans rendez-vous. Hors des heures de pointe, le trajet est régulier et sans surprise.",
        },
        {
          question: "Pourquoi mes freins s'usent-ils vite à Chelsea ?",
          answer:
            "Parce que le relief les fait travailler davantage. Une descente répétée sur le chemin d'Old Chelsea ou vers la route 105 sollicite les plaquettes bien plus qu'un parcours plat, et le sel appliqué tôt en saison attaque les conduites et les étriers. Un jeu de plaquettes qui dure 60 000 km en ville peut en faire nettement moins ici.",
        },
        {
          question: "Faites-vous l'entretien complet ou seulement les freins ?",
          answer:
            "L'atelier couvre l'ensemble pour les clients de Chelsea : changement d'huile, freins, pneus et entreposage, diagnostic électronique, climatisation, suspension et alignement, échappement, transmission et carrosserie. Les travaux sont garantis un an, pièces et main-d'œuvre, et rien ne commence avant que le prix soit approuvé avec vous.",
        },
        {
          question: "Et si la voiture ne redescend pas de Chelsea ?",
          answer:
            "Le remorquage répond 24 heures sur 24 au (819) 921-7869 et couvre toute la municipalité — Old Chelsea, Farm Point, Tenaga, Kirk's Ferry — ainsi que l'autoroute 5 et la route 105. Le remorquage commence à 79,99 $ et le véhicule est ramené à l'atelier d'Aylmer, où le diagnostic suit directement.",
        },
      ],
    },
    en: {
      metaTitle: "Garage near Chelsea (A-5, Route 105) | Mécano Express",
      metaDescription:
        "Auto garage serving Chelsea. Brakes, tires, suspension — the wear those hills produce. Price confirmed. Call (819) 921-7869.",
      eyebrow: "Garage · Chelsea",
      heroTitle: "Garage",
      heroHighlight: "near Chelsea",
      subtitle:
        "Chelsea means hills, salt and park roads. It shows up on brakes and tires. We fix all of it at 879 chemin Vanier in Aylmer.",
      trustBar: ["Via the A-5 and boulevard Taché", "Price confirmed before work", "Open Saturday"],
      reasonsTitle: "What Chelsea's roads do to a car",
      reasons: [
        {
          title: "Brakes that work harder",
          text: "Coming down chemin d'Old Chelsea or the park accesses on the brakes every day wears pads faster than a flat suburban commute ever does.",
        },
        {
          title: "Six months of road salt",
          text: "The hills are sanded and salted early in the season. Brake lines and calipers take the punishment, so that is what we inspect first on a Chelsea vehicle.",
        },
        {
          title: "A twenty-minute drive",
          text: "Chelsea to the shop is about twenty minutes by the A-5 then boulevard Alexandre-Taché. We are not going to pretend we are around the corner.",
        },
      ],
      areas: ["Chelsea", "Old Chelsea", "Aylmer"],
      ctaCardTitle: "Brake noise on the way down from Chelsea?",
      ctaCardText: "Describe it on the phone — we'll tell you whether it can wait.",
      serviceName: "Garage near Chelsea",
      faqTitle: "Frequently Asked Questions — Garage near Chelsea",
      faq: [
        {
          question: "How long does it take to get from Chelsea to your garage?",
          answer:
            "About twenty minutes from most parts of Chelsea, by Autoroute 5 then boulevard Alexandre-Taché to 879 chemin Vanier in Aylmer. The shop is open Monday to Saturday, 9 AM to 6 PM, walk-ins welcome. Outside rush hour the drive is steady and predictable.",
        },
        {
          question: "Why do my brakes wear so fast in Chelsea?",
          answer:
            "Because the terrain makes them work. Repeatedly descending chemin d'Old Chelsea or dropping toward Route 105 loads the pads far more than flat driving, and salt laid early in the season attacks the lines and calipers. A set of pads that lasts 60,000 km in the city can fall well short of that here.",
        },
        {
          question: "Do you do full servicing or only brakes?",
          answer:
            "The shop covers all of it for Chelsea customers: oil changes, brakes, tires and storage, electronic diagnostics, air conditioning, suspension and alignment, exhaust, transmission and bodywork. Work carries a one-year warranty on parts and labour, and nothing starts before the price is agreed with you.",
        },
        {
          question: "What if the car will not make it down from Chelsea?",
          answer:
            "Towing answers 24 hours a day at (819) 921-7869 and covers the whole municipality — Old Chelsea, Farm Point, Tenaga, Kirk's Ferry — as well as Autoroute 5 and Route 105. Towing starts at $79.99 and the vehicle comes back to the Aylmer shop, where diagnosis follows straight away.",
        },
      ],
    },
  },
  {
    slug: "gatineau",
    group: "zone",
    heroImage: { kind: "photo", name: "mecanique.webp" },
    fr: {
      metaTitle: "Garage près du secteur Gatineau | Mécano Express",
      metaDescription:
        "Garage indépendant desservant le secteur Gatineau : Pointe-Gatineau, Templeton, Le Carrefour. Prix confirmé avant travaux. (819) 921-7869.",
      eyebrow: "Garage · Secteur Gatineau",
      heroTitle: "Garage",
      heroHighlight: "près du secteur Gatineau",
      subtitle:
        "Le secteur Gatineau ne manque pas de concessionnaires sur Gréber. Ce qu'on offre est autre chose : un atelier indépendant qui explique la facture avant de la faire.",
      trustBar: ["Atelier indépendant", "Prix confirmé avant travaux", "Garantie 1 an"],
      reasonsTitle: "Pourquoi traverser la ville plutôt que rester sur Gréber",
      reasons: [
        {
          title: "Un diagnostic qu'on vous explique",
          text: "On vous montre la pièce et la lecture de l'appareil avant de parler de réparation. Vous repartez en sachant ce qui a été fait et pourquoi.",
        },
        {
          title: "Pas de forfait imposé",
          text: "Un véhicule qui a besoin de freins repart avec des freins, pas avec un ensemble d'entretien en trois volets décidé d'avance.",
        },
        {
          title: "Une seule adresse pour tout",
          text: "Mécanique, carrosserie, pneus et remorquage partent du même endroit. Un véhicule immobilisé dans le secteur Gatineau arrive ici par notre propre dépanneuse.",
        },
      ],
      areas: ["Gatineau", "Pointe-Gatineau", "Templeton", "Aylmer"],
      ctaCardTitle: "Vous êtes dans le secteur Gatineau ?",
      ctaCardText: "Un appel, un diagnostic honnête, un prix avant les travaux.",
      serviceName: "Garage près du secteur Gatineau",
      faqTitle: "Questions fréquentes — Garage près du secteur Gatineau",
      faq: [
        {
          question: "Combien de temps de route depuis le secteur Gatineau ?",
          answer:
            "De 20 à 30 minutes selon l'endroit et l'heure : la Pointe-Gatineau est plus proche que le bout de Maloney Est, et l'approche de l'échangeur de l'autoroute 50 est le point le plus lent aux heures de pointe. L'atelier est au 879 chemin Vanier à Aylmer, ouvert du lundi au samedi de 9 h à 18 h.",
        },
        {
          question: "Quels quartiers du secteur Gatineau desservez-vous ?",
          answer:
            "Les codes postaux J8P, J8R et J8T : Pointe-Gatineau, Le Carrefour, Touraine, Templeton, Cheval-Blanc et Saint-Richard. Que vous veniez par le boulevard Maloney, La Vérendrye ou l'autoroute 50, l'atelier se rejoint par le boulevard Alexandre-Taché puis le chemin Vanier.",
        },
        {
          question: "Pourquoi choisir un indépendant plutôt qu'un concessionnaire de Gréber ?",
          answer:
            "Pour deux raisons concrètes, qui valent le trajet depuis le secteur Gatineau : le taux horaire d'un atelier indépendant est plus bas que celui d'un réseau de concession, et on ne travaille pas avec des forfaits d'entretien préétablis. On répare ce qui doit l'être, on vous montre pourquoi, et la garantie d'un an couvre les pièces comme la main-d'œuvre.",
        },
        {
          question: "Pouvez-vous récupérer un véhicule immobilisé dans le secteur ?",
          answer:
            "Oui, on a notre propre dépanneuse et elle répond 24 heures sur 24 au (819) 921-7869. Elle couvre le secteur Gatineau au complet : le corridor du boulevard Maloney, les stationnements commerciaux des Promenades et de Gréber, et les accès de l'autoroute 50. Le remorquage commence à 79,99 $ et le véhicule arrive directement à l'atelier.",
        },
      ],
    },
    en: {
      metaTitle: "Garage near the Gatineau sector | Mécano Express",
      metaDescription:
        "Independent garage serving the Gatineau sector: Pointe-Gatineau, Templeton, Le Carrefour. Price confirmed before work. Call (819) 921-7869.",
      eyebrow: "Garage · Gatineau sector",
      heroTitle: "Garage",
      heroHighlight: "near the Gatineau sector",
      subtitle:
        "The Gatineau sector is not short of dealerships on Gréber. What we offer is different: an independent shop that explains the bill before running it up.",
      trustBar: ["Independent shop", "Price confirmed before work", "1-year warranty"],
      reasonsTitle: "Why cross town instead of staying on Gréber",
      reasons: [
        {
          title: "A diagnosis we walk you through",
          text: "We show you the part and the reading off the scanner before anyone talks about repairs. You leave knowing what was done and why.",
        },
        {
          title: "No packaged service plan",
          text: "A vehicle that needs brakes leaves with brakes, not with a three-part maintenance bundle decided in advance.",
        },
        {
          title: "One address for all of it",
          text: "Mechanical work, bodywork, tires and towing all run from the same place. A vehicle stranded in the Gatineau sector arrives here on our own truck.",
        },
      ],
      areas: ["Gatineau", "Pointe-Gatineau", "Templeton", "Aylmer"],
      ctaCardTitle: "Based in the Gatineau sector?",
      ctaCardText: "One call, an honest diagnosis, a price before the work.",
      serviceName: "Garage near the Gatineau sector",
      faqTitle: "Frequently Asked Questions — Garage near the Gatineau sector",
      faq: [
        {
          question: "How long is the drive from the Gatineau sector?",
          answer:
            "Twenty to thirty minutes depending on where you start and when: Pointe-Gatineau is closer than the far end of Maloney Est, and the approach to the Autoroute 50 interchange is the slowest stretch at rush hour. The shop is at 879 chemin Vanier in Aylmer, open Monday to Saturday, 9 AM to 6 PM.",
        },
        {
          question: "Which Gatineau-sector neighbourhoods do you serve?",
          answer:
            "Postal codes J8P, J8R and J8T: Pointe-Gatineau, Le Carrefour, Touraine, Templeton, Cheval-Blanc and Saint-Richard. Whether you come by boulevard Maloney, La Vérendrye or Autoroute 50, the shop is reached via boulevard Alexandre-Taché and then chemin Vanier.",
        },
        {
          question: "Why choose an independent over a dealership on Gréber?",
          answer:
            "Two concrete reasons worth the drive from the Gatineau sector: an independent shop's hourly rate is lower than a dealer network's, and we do not work from pre-set maintenance packages. We repair what needs repairing, show you why, and the one-year warranty covers parts as well as labour.",
        },
        {
          question: "Can you recover a vehicle stranded in the sector?",
          answer:
            "Yes, we run our own tow truck and it answers 24 hours a day at (819) 921-7869. It covers the whole Gatineau sector: the boulevard Maloney corridor, the retail lots at Les Promenades and along Gréber, and the Autoroute 50 accesses. Towing starts at $79.99 and the vehicle comes straight to the shop.",
        },
      ],
    },
  },
  {
    slug: "masson-angers",
    group: "zone",
    heroImage: { kind: "photo", name: "mecanique.webp" },
    fr: {
      metaTitle: "Garage près de Masson-Angers | Mécano Express",
      metaDescription:
        "Garage mécanique desservant Masson-Angers par l'autoroute 50. Travaux planifiés, prix confirmé avant, garantie 1 an. (819) 921-7869.",
      eyebrow: "Garage · Masson-Angers",
      heroTitle: "Garage",
      heroHighlight: "près de Masson-Angers",
      subtitle:
        "Masson-Angers est à l'autre bout de la ville. On est honnêtes : ça vaut le déplacement pour un travail planifié, pas pour un changement d'huile de dernière minute.",
      trustBar: ["Par l'autoroute 50", "Prix confirmé avant travaux", "Garantie 1 an"],
      reasonsTitle: "Quand ça vaut le trajet, et quand ça ne le vaut pas",
      reasons: [
        {
          title: "Pour un travail qu'on planifie",
          text: "Freins, suspension, climatisation, carrosserie : un devis obtenu au téléphone, une date, une seule visite. C'est là que la distance se justifie.",
        },
        {
          title: "Pour un véhicule qui ne roule plus",
          text: "Dans ce cas, c'est notre dépanneuse qui fait le trajet, pas vous. Le véhicule arrive à l'atelier et le diagnostic suit sans deuxième déplacement.",
        },
        {
          title: "Pas pour une urgence de cinq minutes",
          text: "Une crevaison un mardi soir se règle plus vite près de chez vous. On préfère le dire que de vous faire traverser Gatineau pour rien.",
        },
      ],
      areas: ["Masson-Angers", "Buckingham", "Gatineau"],
      ctaCardTitle: "Un devis avant de faire la route ?",
      ctaCardText: "Décrivez le problème au téléphone — on vous dit si ça vaut le trajet.",
      serviceName: "Garage près de Masson-Angers",
      faqTitle: "Questions fréquentes — Garage près de Masson-Angers",
      faq: [
        {
          question: "Quelle distance entre Masson-Angers et votre atelier ?",
          answer:
            "Une trentaine de kilomètres, soit environ 35 minutes par l'autoroute 50 puis le boulevard Alexandre-Taché jusqu'au 879 chemin Vanier, à Aylmer. Masson-Angers est le secteur le plus éloigné qu'on dessert côté garage, et on le dit franchement : pour une petite intervention, un atelier de Buckingham sera plus commode.",
        },
        {
          question: "Alors pourquoi venir jusqu'à Aylmer ?",
          answer:
            "Pour les travaux qui se planifient et où le prix compte : freins complets, suspension, climatisation, carrosserie. Vous obtenez le devis au téléphone au (819) 921-7869, on fixe une date, et tout se fait en une visite. La garantie est d'un an sur les pièces et la main-d'œuvre, qu'on vienne de Masson-Angers ou d'à côté de l'atelier.",
        },
        {
          question: "Desservez-vous Masson-Angers en remorquage aussi ?",
          answer:
            "Oui, et c'est souvent la meilleure porte d'entrée. La dépanneuse répond 24 heures sur 24 au (819) 921-7869 et couvre tout Masson-Angers, code postal J8M, y compris la traverse de Cumberland et le chemin Montréal Ouest. Le remorquage part de 79,99 $ et amène le véhicule directement à l'atelier.",
        },
        {
          question: "Puis-je laisser le véhicule et revenir le lendemain ?",
          answer:
            "Oui, c'est ce qu'on recommande quand vous venez de Masson-Angers. Laissez le véhicule le matin, on vous appelle avec le diagnostic et le prix avant de commencer quoi que ce soit, et vous repassez quand c'est prêt. L'atelier est ouvert du lundi au samedi de 9 h à 18 h.",
        },
      ],
    },
    en: {
      metaTitle: "Garage near Masson-Angers | Mécano Express",
      metaDescription:
        "Auto garage serving Masson-Angers via Autoroute 50. Planned work, price confirmed up front, 1-year warranty. Call (819) 921-7869.",
      eyebrow: "Garage · Masson-Angers",
      heroTitle: "Garage",
      heroHighlight: "near Masson-Angers",
      subtitle:
        "Masson-Angers is at the far end of the city. We will be straight with you: it is worth the drive for planned work, not for a last-minute oil change.",
      trustBar: ["Via Autoroute 50", "Price confirmed before work", "1-year warranty"],
      reasonsTitle: "When the drive is worth it, and when it is not",
      reasons: [
        {
          title: "For work you can plan",
          text: "Brakes, suspension, air conditioning, bodywork: a quote by phone, a date, one visit. That is where the distance pays for itself.",
        },
        {
          title: "For a vehicle that will not move",
          text: "Then our tow truck makes the trip, not you. The vehicle reaches the shop and diagnosis follows without a second journey.",
        },
        {
          title: "Not for a five-minute emergency",
          text: "A flat on a Tuesday evening is sorted faster close to home. We would rather say so than have you cross Gatineau for nothing.",
        },
      ],
      areas: ["Masson-Angers", "Buckingham", "Gatineau"],
      ctaCardTitle: "Want a quote before making the drive?",
      ctaCardText: "Describe the problem by phone — we'll tell you if it's worth the trip.",
      serviceName: "Garage near Masson-Angers",
      faqTitle: "Frequently Asked Questions — Garage near Masson-Angers",
      faq: [
        {
          question: "How far is Masson-Angers from your shop?",
          answer:
            "About thirty kilometres, roughly 35 minutes by Autoroute 50 then boulevard Alexandre-Taché to 879 chemin Vanier in Aylmer. Masson-Angers is the furthest area we serve on the garage side, and we will say it plainly: for a small job, a Buckingham shop will be more convenient.",
        },
        {
          question: "So why drive all the way to Aylmer?",
          answer:
            "For work that can be planned and where the price matters: full brake jobs, suspension, air conditioning, bodywork. You get the quote by phone at (819) 921-7869, we set a date, and it is all done in one visit. The warranty is one year on parts and labour, whether you drove in from Masson-Angers or from next door.",
        },
        {
          question: "Do you cover Masson-Angers for towing as well?",
          answer:
            "Yes, and it is often the better way in. The tow truck answers 24 hours a day at (819) 921-7869 and covers all of Masson-Angers, postal code J8M, including the Cumberland ferry landing and chemin Montréal Ouest. Towing starts at $79.99 and brings the vehicle straight to the shop.",
        },
        {
          question: "Can I leave the vehicle and come back the next day?",
          answer:
            "Yes, and that is what we recommend when you are coming from Masson-Angers. Drop it off in the morning, we call you with the diagnosis and the price before anything is started, and you collect it when it is ready. The shop is open Monday to Saturday, 9 AM to 6 PM.",
        },
      ],
    },
  },
  {
    slug: "buckingham",
    group: "zone",
    heroImage: { kind: "photo", name: "mecanique.webp" },
    fr: {
      metaTitle: "Garage près de Buckingham | Mécano Express",
      metaDescription:
        "Garage mécanique desservant Buckingham. Devis au téléphone, une seule visite, garantie 1 an pièces et main-d'œuvre. (819) 921-7869.",
      eyebrow: "Garage · Buckingham",
      heroTitle: "Garage",
      heroHighlight: "près de Buckingham",
      subtitle:
        "Buckingham est à trente kilomètres à l'est. Pour un gros travail bien préparé, la route se fait une fois et le prix, lui, est connu d'avance.",
      trustBar: ["Devis obtenu au téléphone", "Une seule visite", "Garantie 1 an"],
      reasonsTitle: "Faire venir un véhicule de Buckingham, concrètement",
      reasons: [
        {
          title: "Le devis avant la route",
          text: "On établit l'estimation au téléphone à partir du symptôme, et elle est confirmée après l'inspection. Vous savez à quoi vous attendez avant de prendre le boulevard Maloney.",
        },
        {
          title: "Tout au même endroit",
          text: "Mécanique, carrosserie et pneus sont sous le même toit. Un aller-retour, pas trois commerces à visiter dans la même semaine.",
        },
        {
          title: "La dépanneuse fait le trajet",
          text: "Si le véhicule ne roule plus, c'est notre camion qui monte à Buckingham. Vous ne faites pas la route deux fois.",
        },
      ],
      areas: ["Buckingham", "Masson-Angers", "L'Ange-Gardien"],
      ctaCardTitle: "Un travail à faire sur votre véhicule ?",
      ctaCardText: "Appelez de Buckingham — on chiffre avant que vous partiez.",
      serviceName: "Garage près de Buckingham",
      faqTitle: "Questions fréquentes — Garage près de Buckingham",
      faq: [
        {
          question: "Ça vaut la peine de venir de Buckingham jusqu'à Aylmer ?",
          answer:
            "Pour un travail planifié, oui : un jeu de freins complet, une suspension, une climatisation ou de la carrosserie justifient les trente kilomètres depuis Buckingham, surtout avec un devis obtenu d'avance au (819) 921-7869. Pour un changement d'huile seul, non — on vous le dira plutôt que de vous faire traverser la ville.",
        },
        {
          question: "Quel est le trajet depuis Buckingham ?",
          answer:
            "Une trentaine de kilomètres vers l'ouest depuis Buckingham : le boulevard Maloney Est puis l'autoroute 50, et enfin le boulevard Alexandre-Taché jusqu'au 879 chemin Vanier, à Aylmer. Comptez de 35 à 45 minutes selon l'heure. L'atelier est ouvert du lundi au samedi, de 9 h à 18 h, sans rendez-vous.",
        },
        {
          question: "Est-ce que la garantie s'applique si j'habite Buckingham ?",
          answer:
            "Oui, la garantie d'un an sur les pièces et la main-d'œuvre ne dépend pas du secteur où vous habitez. Si un problème couvert revient, on le reprend à l'atelier. Et si le véhicule ne roule plus au moment où ça arrive, la dépanneuse va le chercher à Buckingham, code postal J8L, 24 heures sur 24.",
        },
        {
          question: "Pouvez-vous remorquer le véhicule depuis Buckingham jusqu'à l'atelier ?",
          answer:
            "Oui, c'est le trajet le plus courant qu'on fait à Buckingham. Le remorquage commence à 79,99 $, le prix est confirmé au téléphone avant le départ et il couvre le trajet complet jusqu'au 879 chemin Vanier. Le véhicule arrive à l'atelier et le diagnostic enchaîne le jour même ou le lendemain matin.",
        },
      ],
    },
    en: {
      metaTitle: "Garage near Buckingham | Mécano Express",
      metaDescription:
        "Auto garage serving Buckingham. Quote by phone, one visit, 1-year parts and labour warranty. Call (819) 921-7869.",
      eyebrow: "Garage · Buckingham",
      heroTitle: "Garage",
      heroHighlight: "near Buckingham",
      subtitle:
        "Buckingham is thirty kilometres east. For a big job properly prepared, you make the drive once — and the price is known before you set off.",
      trustBar: ["Quote agreed by phone", "A single visit", "1-year warranty"],
      reasonsTitle: "Bringing a vehicle in from Buckingham, practically",
      reasons: [
        {
          title: "The quote before the drive",
          text: "We build the estimate by phone from the symptom, then confirm it after the inspection. You know where you stand before you get on boulevard Maloney.",
        },
        {
          title: "Everything in one place",
          text: "Mechanical work, bodywork and tires sit under one roof. One round trip, not three businesses in the same week.",
        },
        {
          title: "The tow truck makes the trip",
          text: "If the vehicle will not move, our truck drives up to Buckingham. You do not make the journey twice.",
        },
      ],
      areas: ["Buckingham", "Masson-Angers", "L'Ange-Gardien"],
      ctaCardTitle: "Got work that needs doing?",
      ctaCardText: "Call from Buckingham — we price it before you leave.",
      serviceName: "Garage near Buckingham",
      faqTitle: "Frequently Asked Questions — Garage near Buckingham",
      faq: [
        {
          question: "Is it worth driving from Buckingham to Aylmer?",
          answer:
            "For planned work, yes: a full brake job, suspension, air conditioning or bodywork justify the thirty kilometres from Buckingham, especially with a quote agreed beforehand at (819) 921-7869. For an oil change on its own, no — and we will tell you that rather than have you cross the city.",
        },
        {
          question: "What is the drive from Buckingham?",
          answer:
            "About thirty kilometres west from Buckingham: boulevard Maloney Est, then Autoroute 50, then boulevard Alexandre-Taché to 879 chemin Vanier in Aylmer. Allow 35 to 45 minutes depending on the hour. The shop is open Monday to Saturday, 9 AM to 6 PM, no appointment needed.",
        },
        {
          question: "Does the warranty still apply if I live in Buckingham?",
          answer:
            "Yes, the one-year parts and labour warranty does not depend on where you live. If a covered problem comes back, we take the vehicle in again. And if it will not drive when that happens, the tow truck collects it in Buckingham, postal code J8L, around the clock.",
        },
        {
          question: "Can you tow the vehicle from Buckingham to the shop?",
          answer:
            "Yes, it is the most common run we make out of Buckingham. Towing starts at $79.99, the price is confirmed by phone before we leave and it covers the complete trip to 879 chemin Vanier. The vehicle reaches the shop and diagnosis follows the same day or the next morning.",
        },
      ],
    },
  },
  {
    slug: "ange-gardien",
    group: "zone",
    heroImage: { kind: "photo", name: "mecanique.webp" },
    fr: {
      metaTitle: "Garage près de L'Ange-Gardien (Outaouais) | Mécano Express",
      metaDescription:
        "Garage desservant L'Ange-Gardien en Outaouais. Suspension et alignement usés par les chemins de rang. Devis d'avance. (819) 921-7869.",
      eyebrow: "Garage · L'Ange-Gardien",
      heroTitle: "Garage",
      heroHighlight: "près de L'Ange-Gardien",
      subtitle:
        "Rouler tous les jours sur des chemins de rang, ça se paie en suspension et en alignement. On répare ce genre d'usure — et on chiffre avant que vous fassiez la route.",
      trustBar: ["Suspension et alignement", "Devis avant le déplacement", "Garantie 1 an"],
      reasonsTitle: "L'usure typique d'un véhicule de L'Ange-Gardien",
      reasons: [
        {
          title: "La géométrie qui part",
          text: "Les chemins de rang non asphaltés déréglent le parallélisme. Le symptôme, c'est un volant qui tire et des pneus avant usés d'un seul côté.",
        },
        {
          title: "Des amortisseurs sollicités",
          text: "Le gravier et les accotements creusés fatiguent la suspension bien plus vite qu'un trajet urbain. Ça s'entend avant que ça se voie.",
        },
        {
          title: "Attention au nom de la municipalité",
          text: "Il existe un autre L'Ange-Gardien près de Québec. On précise « Outaouais » quand on commande une pièce, pour qu'elle n'atterrisse pas à 400 km d'ici.",
        },
      ],
      areas: ["L'Ange-Gardien", "Buckingham", "Masson-Angers"],
      ctaCardTitle: "Le volant tire d'un côté ?",
      ctaCardText: "Décrivez-le au téléphone — on vous dit ce qu'il faut vérifier.",
      serviceName: "Garage près de L'Ange-Gardien",
      faqTitle: "Questions fréquentes — Garage près de L'Ange-Gardien",
      faq: [
        {
          question: "Quel trajet depuis L'Ange-Gardien jusqu'à votre atelier ?",
          answer:
            "Comptez de 40 à 50 minutes : la route 309 ou la 315 jusqu'à Buckingham, puis l'autoroute 50 vers l'ouest et le boulevard Alexandre-Taché jusqu'au 879 chemin Vanier, à Aylmer. L'Ange-Gardien est loin, on ne le cache pas — c'est pour ça qu'on donne le devis au téléphone avant que vous partiez.",
        },
        {
          question: "Pourquoi mes pneus avant s'usent-ils d'un seul côté ?",
          answer:
            "C'est presque toujours un problème de géométrie, et les chemins de rang de L'Ange-Gardien en sont la cause la plus fréquente. Quand le parallélisme est déréglé, le pneu frotte au lieu de rouler droit et l'usure se concentre sur un bord. Un alignement corrigé à temps sauve souvent deux pneus, ce qui coûte moins cher que l'opération elle-même.",
        },
        {
          question: "Desservez-vous bien le L'Ange-Gardien de l'Outaouais ?",
          answer:
            "Oui — celui de la MRC de Papineau, au nord de Buckingham, code postal J8L, avec les hameaux de Glen Almond, Neilon et Ribot. Il ne faut pas le confondre avec le L'Ange-Gardien situé près de la ville de Québec. Le nôtre se rejoint par la route 309 ou la route 315 depuis le boulevard Maloney Est.",
        },
        {
          question: "Et si le véhicule ne peut pas faire la route jusqu'à vous ?",
          answer:
            "La dépanneuse va le chercher. Elle répond 24 heures sur 24 au (819) 921-7869, elle circule sur les chemins de rang et de gravier de L'Ange-Gardien, et le remorquage commence à 79,99 $. Dites-nous la largeur et l'état du chemin au téléphone, on envoie le camion qui convient et le véhicule arrive directement à l'atelier.",
        },
      ],
    },
    en: {
      metaTitle: "Garage near L'Ange-Gardien (Outaouais) | Mécano Express",
      metaDescription:
        "Garage serving L'Ange-Gardien, Outaouais. Suspension and alignment worn by concession roads. Quote up front. Call (819) 921-7869.",
      eyebrow: "Garage · L'Ange-Gardien",
      heroTitle: "Garage",
      heroHighlight: "near L'Ange-Gardien",
      subtitle:
        "Driving concession roads every day gets paid for in suspension and alignment. That is the wear we fix — and we price it before you make the drive.",
      trustBar: ["Suspension and alignment", "Quote before you travel", "1-year warranty"],
      reasonsTitle: "The wear we typically see from L'Ange-Gardien",
      reasons: [
        {
          title: "Alignment that drifts",
          text: "Unpaved concession roads pull the toe out of spec. The symptom is a steering wheel that pulls and front tires worn on one edge only.",
        },
        {
          title: "Shocks under load",
          text: "Gravel and scoured shoulders tire a suspension far faster than city driving does. You hear it before you see it.",
        },
        {
          title: "Mind which L'Ange-Gardien",
          text: "There is another one near Quebec City. We specify \"Outaouais\" when ordering a part, so it does not land 400 km from here.",
        },
      ],
      areas: ["L'Ange-Gardien", "Buckingham", "Masson-Angers"],
      ctaCardTitle: "Steering pulling to one side?",
      ctaCardText: "Describe it by phone — we'll tell you what to have checked.",
      serviceName: "Garage near L'Ange-Gardien",
      faqTitle: "Frequently Asked Questions — Garage near L'Ange-Gardien",
      faq: [
        {
          question: "What is the drive from L'Ange-Gardien to your shop?",
          answer:
            "Allow 40 to 50 minutes: Route 309 or Route 315 down to Buckingham, then Autoroute 50 west and boulevard Alexandre-Taché to 879 chemin Vanier in Aylmer. L'Ange-Gardien is a long way out, and we will not pretend otherwise — which is why we give the quote by phone before you set off.",
        },
        {
          question: "Why are my front tires wearing on one edge?",
          answer:
            "That is almost always alignment, and the concession roads around L'Ange-Gardien are the most common cause. When the toe is out, the tire scrubs instead of rolling straight and the wear concentrates on one shoulder. Correcting the alignment in time often saves two tires, which costs more than the alignment itself.",
        },
        {
          question: "Do you serve the Outaouais L'Ange-Gardien?",
          answer:
            "Yes — the one in the MRC de Papineau, north of Buckingham, postal code J8L, taking in the hamlets of Glen Almond, Neilon and Ribot. It should not be confused with the L'Ange-Gardien near Quebec City. Ours is reached by Route 309 or Route 315 off boulevard Maloney Est.",
        },
        {
          question: "What if the vehicle cannot make the drive to you?",
          answer:
            "The tow truck comes and gets it. It answers 24 hours a day at (819) 921-7869, it drives L'Ange-Gardien's concession and gravel roads, and towing starts at $79.99. Tell us the width and condition of the road on the phone, we send the truck that suits, and the vehicle arrives straight at the shop.",
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
        "On est au 879 chemin Vanier, à Aylmer — à quelques minutes de Gatineau et de Hull. Un vrai garage de quartier, pas une chaîne : diagnostic honnête, prix confirmé avant tout travail, sans rendez-vous.",
      trustBar: ["879 chemin Vanier, Aylmer", "Sans rendez-vous", "Prix confirmé avant travaux"],
      reasonsTitle: "Pourquoi nous choisir plutôt qu'une chaîne",
      reasons: [
        {
          title: "À quelques minutes de chez vous",
          text: "Notre garage est au 879 chemin Vanier, à Aylmer, avec stationnement sur place — facile d'accès depuis Gatineau, Hull et tout le secteur ouest.",
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
            "Au 879 chemin Vanier, à Aylmer, avec stationnement sur place. De là, on est à quelques minutes de Hull, du centre de Gatineau et de tout le secteur ouest. L'atelier ouvre six jours sur sept, du lundi au samedi de 9h à 18h, sans rendez-vous, et le remorquage répond 24 h sur 24 au (819) 921-7869.",
        },
        {
          question: "Quels secteurs desservez-vous ?",
          answer:
            "Aylmer et le chemin Vanier, Hull, Gatineau, Buckingham et l'ensemble de l'Outaouais. Pour la mécanique, vous venez à l'atelier du 879 chemin Vanier, du lundi au samedi de 9h à 18h. Pour le remorquage et l'assistance routière, on se déplace dans ces mêmes secteurs 24 h sur 24 — nuits, fins de semaine et jours fériés — à partir de 79,99 $.",
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
        "We're at 879 chemin Vanier, Aylmer — minutes from Gatineau and Hull. A real neighborhood garage, not a chain: honest diagnostic, price confirmed before any work, walk-in welcome.",
      trustBar: ["879 chemin Vanier, Aylmer", "Walk-in welcome", "Price confirmed before work"],
      reasonsTitle: "Why choose us over a chain",
      reasons: [
        {
          title: "Minutes away from you",
          text: "Our garage is at 879 chemin Vanier, Aylmer, with on-site parking — easy to reach from Gatineau, Hull and the whole west end.",
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
            "879 chemin Vanier, in Aylmer, with on-site parking. From there we are minutes from Hull, downtown Gatineau and the whole west end. The garage runs six days a week, Monday to Saturday from 9 AM to 6 PM, walk-ins included, and towing answers 24/7 on (819) 921-7869.",
        },
        {
          question: "Which areas do you serve?",
          answer:
            "Aylmer and chemin Vanier, Hull, Gatineau, Buckingham and the wider Outaouais. Mechanical work happens at the shop, 879 chemin Vanier, Monday to Saturday from 9 AM to 6 PM. Towing and roadside assistance come to you across those same areas 24/7 — nights, weekends and holidays — starting at $79.99.",
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
];

export function getMechanicIntent(slug: string): MechanicIntent | undefined {
  return mechanicIntents.find((i) => i.slug === slug);
}

export function getMechanicIntentContent(slug: string, locale: Locale) {
  const intent = getMechanicIntent(slug);
  if (!intent) return undefined;
  return { intent, content: intent[locale] };
}
