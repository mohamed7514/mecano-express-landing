import type { Locale } from "./i18n";
import type { FAQItem } from "./faq";

/**
 * The "where we work" axis of the site: one page per town under
 * /zones-desservies (fr) and /areas-served (en), paired with the "what we do"
 * axis under /services.
 *
 * These pages are LINK HUBS, not content duplicates. Each one summarises the
 * two offers for its town and then sends the visitor to the service pages —
 * it must never restate what a service page already says, or the two axes
 * compete for the same query.
 *
 * The business is two propositions, and the copy has to keep them apart:
 *
 *   - Towing COMES TO THE CUSTOMER. 24/7, every town in this list, same rate
 *     at night and on holidays, from 79,99 $. `towingIntro` can be written
 *     with full confidence everywhere.
 *   - The GARAGE DOES NOT TRAVEL. There is one shop, at 879 chemin Vanier in
 *     Aylmer, and the customer drives to it. For Chelsea, Buckingham, Cantley
 *     and Val-des-Monts `garageIntro` therefore frames the shop as worth the
 *     drive (walk-in, price confirmed before work, one-year warranty) — never
 *     as if a mechanic shows up at their door.
 *
 * Facts are restricted to what the client has actually documented: the NAP in
 * lib/business.ts, the posted hours, the 79,99 $ towing floor, the ~15 minute
 * average arrival in the Aylmer/Hull/Gatineau area, the 2-minute free phone
 * quote, the one-year parts-and-labour warranty and the vehicle list. There is
 * NO mechanical price list — do not add a figure, a range or an "environ" for
 * any repair, body work, boost or lockout. The only documented travel time is
 * Buckingham's ~40 minutes; every other distance stays qualitative on purpose.
 */

export type AreaContent = {
  name: string;
  /** Localized slug, kebab-case — the URL segment under the zones hub. */
  slug: string;
  metaTitle: string;
  metaDescription: string;
  eyebrow: string;
  heroTitle: string;
  heroHighlight: string;
  subtitle: string;
  trustBar: string[];
  towingTitle: string;
  /** The half that travels: 24/7, anywhere in the list. */
  towingIntro: string;
  garageTitle: string;
  /** The half that does not travel: the customer drives to Aylmer. */
  garageIntro: string;
  /** Heading above the outbound links to /services. */
  servicesTitle: string;
  faqTitle: string;
  faq: FAQItem[];
};

export type Area = {
  id: string;
  /** Ads conversions per 30 days, where measured. Drives build order. */
  conversions: number | null;
  /** True for the sector the shop sits in — the template treats it differently. */
  home?: boolean;
  fr: AreaContent;
  en: AreaContent;
};

export const areas: Area[] = [
  {
    id: "aylmer",
    conversions: 6.3,
    home: true,
    fr: {
      name: "Aylmer",
      slug: "aylmer",
      metaTitle: "Remorquage et garage à Aylmer | Mécano Express",
      metaDescription:
        "Remorquage 24h/24 et garage sans rendez-vous au 879 chemin Vanier, secteur Vanier à Aylmer. Remorquage à partir de 79,99 $. (819) 921-7869.",
      eyebrow: "Zone desservie · Aylmer",
      heroTitle: "Remorquage et garage",
      heroHighlight: "à Aylmer",
      subtitle:
        "Le camion et l'atelier sont au même endroit, au 879 chemin Vanier, dans le secteur Vanier. La dépanneuse vient à vous 24h/24; pour la mécanique, c'est à deux pas.",
      trustBar: [
        "Basés au 879 chemin Vanier",
        "Dépanneuse 24h/24, à partir de 79,99 $",
        "Atelier sans rendez-vous, lun au sam",
      ],
      towingTitle: "Le remorquage vient à vous, partout à Aylmer",
      towingIntro:
        "La dépanneuse part du 879 chemin Vanier, dans le secteur Vanier — le même stationnement où vous nous trouvez le jour. Elle roule 24h/24, nuits, fins de semaine et jours fériés, au même tarif, et le délai moyen dans le secteur d'Aylmer tourne autour de 15 minutes. Le remorquage débute à 79,99 $, et le montant exact se confirme au téléphone en environ deux minutes : gratuit, final, rien d'ajouté à l'arrivée du camion.",
      garageTitle: "L'atelier, à la même adresse",
      garageIntro:
        "Pour la mécanique, vous venez nous voir — et à Aylmer, c'est une adresse de quartier plutôt qu'un déplacement. L'atelier ouvre du lundi au samedi, de 9h à 18h, sans rendez-vous, avec stationnement sur place. On inspecte, on vous explique ce qu'on a trouvé, et le prix est confirmé avant qu'on touche à quoi que ce soit. Les pièces et la main-d'œuvre sont garanties un an.",
      servicesTitle: "Nos services à Aylmer",
      faqTitle: "Questions fréquentes — Aylmer",
      faq: [
        {
          question: "Où est le garage à Aylmer et faut-il un rendez-vous ?",
          answer:
            "Le garage est au 879 chemin Vanier, dans le secteur Vanier à Aylmer, et aucun rendez-vous n'est nécessaire. On ouvre du lundi au samedi, de 9h à 18h, avec stationnement sur place. Passez quand ça vous arrange : on inspecte le véhicule, on vous explique les constats, et le prix est confirmé avant le début des travaux. Les pièces et la main-d'œuvre sont garanties un an.",
        },
        {
          question: "Combien de temps avant que la dépanneuse arrive à Aylmer ?",
          answer:
            "Le délai moyen à Aylmer tourne autour de 15 minutes, parce que le camion part du 879 chemin Vanier plutôt que de l'autre bout de Gatineau. C'est une moyenne et non une garantie : la météo, l'heure et votre position exacte la font varier. Le service roule 24h/24, nuits, fins de semaine et jours fériés compris, au même tarif. Appelez le (819) 921-7869 pour le délai réel du moment.",
        },
        {
          question: "Combien coûte un remorquage à partir d'Aylmer ?",
          answer:
            "Le remorquage débute à 79,99 $, et le montant exact vous est confirmé au téléphone en environ deux minutes. Ce devis est gratuit et final : rien ne s'ajoute quand le camion arrive à Aylmer. Le chauffeur accepte le débit et le crédit sur place, et on remet une facture détaillée si vous ouvrez une réclamation d'assurance. Le tarif reste le même la nuit et la fin de semaine.",
        },
        {
          question: "Mon véhicule est remorqué : est-il réparé au même endroit ?",
          answer:
            "Oui, le camion et l'atelier partagent la même adresse à Aylmer, le 879 chemin Vanier, donc votre véhicule n'est déplacé qu'une seule fois. Il rentre dans le garage et le diagnostic se fait pendant les heures d'ouverture, du lundi au samedi de 9h à 18h. Le prix est confirmé avant la moindre réparation, et les travaux sont garantis un an, pièces et main-d'œuvre.",
        },
      ],
    },
    en: {
      name: "Aylmer",
      slug: "aylmer",
      metaTitle: "Towing & Auto Garage in Aylmer | Mécano Express",
      metaDescription:
        "Round-the-clock towing and a walk-in garage at 879 chemin Vanier, Vanier area in Aylmer. Towing from $79.99, price set by phone. Call (819) 921-7869.",
      eyebrow: "Areas served · Aylmer",
      heroTitle: "Towing and garage",
      heroHighlight: "in Aylmer",
      subtitle:
        "One address for both halves of the business: 879 chemin Vanier, in the Vanier area. The tow truck comes to you around the clock, and the workshop is right there when you need it.",
      trustBar: [
        "Based at 879 chemin Vanier",
        "Tow truck 24/7, from $79.99",
        "Walk-in shop, Mon to Sat",
      ],
      towingTitle: "Towing comes to you, anywhere in Aylmer",
      towingIntro:
        "The tow truck leaves from 879 chemin Vanier in the Vanier area — the same yard you park in during the day. It answers 24/7, nights, weekends and holidays at the same rate, and across Aylmer the average arrival runs around 15 minutes. Towing starts at $79.99, and your exact amount is settled on the phone in about two minutes: free, final, with nothing added once the driver pulls up.",
      garageTitle: "The workshop, at that same address",
      garageIntro:
        "Mechanical work happens at the shop, which in Aylmer means a neighbourhood errand rather than a trip. Doors are open Monday to Saturday, 9 AM to 6 PM, walk-ins included, and there is parking on site. We inspect the vehicle first, tell you plainly what we found, and confirm the price before anything is taken apart. Parts and labour carry a one-year warranty on whatever we replace.",
      servicesTitle: "Our services in Aylmer",
      faqTitle: "Frequently asked questions — Aylmer",
      faq: [
        {
          question: "Do I need an appointment at your Aylmer shop?",
          answer:
            "No. The garage at 879 chemin Vanier, in Aylmer's Vanier area, takes walk-ins Monday to Saturday from 9 AM to 6 PM, and there is parking on site. Drive in whenever it suits you: we inspect the vehicle, walk you through what we found, and confirm the price before any work starts. Parts and labour are covered for a full year.",
        },
        {
          question: "How fast does a tow truck reach me in Aylmer?",
          answer:
            "About 15 minutes on average, because the truck is based at 879 chemin Vanier rather than across Gatineau. Treat that as an average and not a promise — weather, time of day and your exact spot in Aylmer all move it. Dispatch answers 24/7, nights, weekends and holidays included, at the same rate. Call (819) 921-7869 for a live estimate.",
        },
        {
          question: "What does a tow from Aylmer cost?",
          answer:
            "Towing starts at $79.99, and your exact amount is confirmed by phone in roughly two minutes. The quote is free and final; nothing is added once the truck reaches you in Aylmer. The driver takes debit and credit at the roadside, and we can issue a detailed invoice if you are filing an insurance claim. Nights and weekends carry that same rate.",
        },
        {
          question: "Can the same shop repair the car after towing it?",
          answer:
            "Yes — the truck and the workshop share one address in Aylmer, 879 chemin Vanier, so your vehicle only gets moved once. It goes straight into the bay and is diagnosed during opening hours, Monday to Saturday from 9 AM to 6 PM. The price is confirmed before a single repair begins, and the work carries a one-year warranty on parts and labour.",
        },
      ],
    },
  },
  {
    id: "hull",
    conversions: 9.0,
    fr: {
      name: "Hull",
      slug: "hull",
      metaTitle: "Remorquage et garage à Hull | Mécano Express",
      metaDescription:
        "Dépanneuse 24h/24 partout à Hull, à partir de 79,99 $, et garage sans rendez-vous au 879 chemin Vanier, à Aylmer. Appelez le (819) 921-7869.",
      eyebrow: "Zone desservie · Hull",
      heroTitle: "Remorquage et garage",
      heroHighlight: "à Hull",
      subtitle:
        "Hull est voisin de notre point de départ. La dépanneuse s'y rend jour et nuit, et l'atelier d'Aylmer est à courte distance quand le véhicule roule encore.",
      trustBar: [
        "Dépanneuse 24h/24 à Hull",
        "Délai moyen d'environ 15 minutes",
        "Atelier à courte distance, sans rendez-vous",
      ],
      towingTitle: "La dépanneuse se déplace à Hull",
      towingIntro:
        "Hull est voisin d'Aylmer : le camion part du 879 chemin Vanier et rejoint le secteur rapidement, avec un délai moyen d'environ 15 minutes dans la zone Aylmer–Hull–Gatineau. On répond 24h/24, y compris la nuit, la fin de semaine et les jours fériés, au même tarif. Une panne dans le trafic des ponts ou sur une rue du centre ? Donnez votre position au téléphone : le montant, à partir de 79,99 $, est arrêté avant le départ.",
      garageTitle: "Pour la mécanique, vous venez à l'atelier",
      garageIntro:
        "Le garage ne se déplace pas : il est au 879 chemin Vanier, à Aylmer, à courte distance de la plupart des secteurs de Hull. Il y a du stationnement sur place, donc pas de chasse au parcomètre, et aucune réservation à faire — on prend les visites du lundi au samedi, de 9h à 18h. On inspecte, on explique, le prix est confirmé avant les travaux, et tout ce qu'on remplace est garanti un an, pièces et main-d'œuvre.",
      servicesTitle: "Nos services pour Hull",
      faqTitle: "Questions fréquentes — Hull",
      faq: [
        {
          question: "Remorquez-vous à Hull la nuit et les jours fériés ?",
          answer:
            "Oui, le service roule 24h/24 à Hull, nuits, fins de semaine et jours fériés compris, et le tarif ne change pas après minuit. Le camion part du 879 chemin Vanier, à Aylmer, et le délai moyen dans la zone Aylmer–Hull–Gatineau tourne autour de 15 minutes. Composez le (819) 921-7869 : on confirme le montant, à partir de 79,99 $, avant d'envoyer le camion.",
        },
        {
          question: "Pourquoi faire la route depuis Hull jusqu'à votre garage ?",
          answer:
            "Parce que l'atelier d'Aylmer prend les visites sans rendez-vous six jours sur sept, du lundi au samedi de 9h à 18h, avec stationnement sur place. Vous arrivez de Hull, on inspecte, on vous montre ce qu'on a trouvé, et le prix est confirmé avant que les travaux commencent. Les pièces et la main-d'œuvre sont garanties un an, et rien ne se fait sans votre accord.",
        },
        {
          question: "Je suis en panne sur un pont ou une voie rapide à Hull. Quoi faire ?",
          answer:
            "Allumez vos feux de détresse, sortez du véhicule du côté opposé à la circulation et attendez derrière la glissière — jamais assis dans l'auto ni sur l'accotement. Appelez ensuite le (819) 921-7869 : la dépanneuse répond 24h/24 à Hull et le délai moyen dans le secteur tourne autour de 15 minutes. Le montant, à partir de 79,99 $, est confirmé avant que le camion parte.",
        },
        {
          question: "Ma compagnie d'assurance demande une facture. Pouvez-vous la fournir ?",
          answer:
            "Oui, on remet une facture détaillée pour votre réclamation, autant pour un remorquage à Hull que pour des travaux faits à l'atelier. Comme le montant du remorquage — à partir de 79,99 $ — vous a été confirmé au téléphone avant le départ, la facture correspond exactement à ce qui était annoncé. Le chauffeur accepte le débit et le crédit sur place, et les réparations restent garanties un an.",
        },
      ],
    },
    en: {
      name: "Hull",
      slug: "hull",
      metaTitle: "Towing & Garage Serving Hull | Mécano Express",
      metaDescription:
        "Tow truck answering 24/7 across Hull from $79.99, plus a walk-in garage at 879 chemin Vanier in Aylmer. Call (819) 921-7869 for a price in two minutes.",
      eyebrow: "Areas served · Hull",
      heroTitle: "Towing and garage",
      heroHighlight: "serving Hull",
      subtitle:
        "Hull sits right next door to where our truck starts. Towing reaches you at any hour, and the Aylmer workshop is a short drive away while the vehicle still moves.",
      trustBar: [
        "Tow truck answering 24/7 in Hull",
        "About 15 minutes on average",
        "Short drive to a walk-in shop",
      ],
      towingTitle: "The tow truck drives out to Hull",
      towingIntro:
        "Hull borders Aylmer, so the truck rolls out of 879 chemin Vanier and reaches the sector quickly — the average across the Aylmer–Hull–Gatineau area is roughly 15 minutes. Dispatch answers 24/7: nights, weekends and statutory holidays all carry the same rate. Stuck in bridge traffic or stopped on a downtown street, give us your location and the amount is fixed before the truck moves, starting at $79.99.",
      garageTitle: "For repairs, the drive is yours",
      garageIntro:
        "There is one workshop and it stays put, at 879 chemin Vanier in Aylmer — a short drive from most of Hull. Nothing needs booking: walk-ins are taken Monday to Saturday, 9 AM to 6 PM, and parking on site means you are not feeding a meter while we look. We inspect, explain, and set the price before work begins. Everything we replace is warranted one year, parts and labour.",
      servicesTitle: "Our services for Hull",
      faqTitle: "Frequently asked questions — Hull",
      faq: [
        {
          question: "Do you tow in Hull overnight and on holidays?",
          answer:
            "Yes. Towing in Hull runs 24/7, holidays and weekends included, and the rate does not climb after midnight. The truck starts from 879 chemin Vanier in Aylmer, and the average arrival across the Aylmer–Hull–Gatineau area is around 15 minutes. Call (819) 921-7869 and we confirm your amount, starting at $79.99, before anyone is dispatched.",
        },
        {
          question: "Why drive from Hull to your garage for mechanical work?",
          answer:
            "Because the Aylmer shop takes you without an appointment six days a week, Monday to Saturday from 9 AM to 6 PM, with parking on site. You arrive from Hull, we inspect, we show you what turned up, and the price is confirmed before any work starts. Parts and labour are covered for a year, and nothing proceeds without your go-ahead.",
        },
        {
          question: "My car died on a bridge in Hull — what do I do first?",
          answer:
            "Put your hazards on, leave the vehicle by the door away from traffic, and wait behind the guardrail rather than inside the car or on the shoulder. Then call (819) 921-7869: towing answers 24/7 in Hull and the area average is about 15 minutes. Your amount, from $79.99, is agreed on the phone before the truck leaves.",
        },
        {
          question: "Will I get an invoice my insurer will accept?",
          answer:
            "Yes — we issue a detailed invoice for a claim, whether it covers a tow in Hull or work done at the shop. Since the towing amount is confirmed by phone before dispatch, starting at $79.99, the invoice matches the figure you were quoted with nothing added on arrival. The driver takes debit and credit, and repairs keep their one-year warranty.",
        },
      ],
    },
  },
  {
    id: "chelsea",
    conversions: 5.0,
    fr: {
      name: "Chelsea",
      slug: "chelsea",
      metaTitle: "Remorquage et garage — Chelsea | Mécano Express",
      metaDescription:
        "Remorquage à Chelsea 24h/24, à partir de 79,99 $, montant confirmé au téléphone en deux minutes. Garage sans rendez-vous à Aylmer. (819) 921-7869.",
      eyebrow: "Zone desservie · Chelsea",
      heroTitle: "Remorquage et garage",
      heroHighlight: "à Chelsea",
      subtitle:
        "Chelsea est au nord, du côté du parc de la Gatineau. La dépanneuse y monte 24h/24; pour la mécanique, c'est vous qui descendez jusqu'à Aylmer.",
      trustBar: [
        "Dépanneuse 24h/24 à Chelsea",
        "Montant confirmé au téléphone en 2 minutes",
        "Garage sans rendez-vous à Aylmer",
      ],
      towingTitle: "La dépanneuse monte jusqu'à Chelsea",
      towingIntro:
        "Chelsea se trouve au nord de Gatineau, du côté du parc de la Gatineau, là où les chemins montent, tournent et se couvrent vite de neige fondante l'hiver. La dépanneuse s'y rend 24h/24, nuits, fins de semaine et jours fériés compris, au même tarif. Le remorquage débute à 79,99 $ et le montant exact est confirmé au téléphone en environ deux minutes, sans frais ajouté à l'arrivée. Le survoltage et le déverrouillage font aussi partie du service.",
      garageTitle: "Le garage, lui, ne monte pas : il est à Aylmer",
      garageIntro:
        "Soyons clairs : l'atelier est au 879 chemin Vanier, à Aylmer, et c'est vous qui descendez vers le sud pour la mécanique. Le détour se défend quand la visite se fait sans rendez-vous, du lundi au samedi de 9h à 18h, avec stationnement sur place. On inspecte, on vous explique les constats, le prix est confirmé avant les travaux et tout ce qu'on remplace est garanti un an, pièces et main-d'œuvre.",
      servicesTitle: "Nos services pour Chelsea",
      faqTitle: "Questions fréquentes — Chelsea",
      faq: [
        {
          question: "Desservez-vous Chelsea pour le remorquage ?",
          answer:
            "Oui, Chelsea fait partie du territoire couvert 24h/24, et le tarif reste le même la nuit, la fin de semaine et les jours fériés. Le remorquage débute à 79,99 $, et le montant exact est confirmé au téléphone en environ deux minutes avant que le camion parte. On charge autos, camions légers, motos, remorques et véhicules récréatifs. Composez le (819) 921-7869.",
        },
        {
          question: "Les pneus d'hiver sont-ils obligatoires sur les chemins de Chelsea ?",
          answer:
            "Oui : au Québec, les pneus d'hiver sont obligatoires du 1er décembre au 15 mars sur les véhicules de promenade immatriculés ici, et les côtes de Chelsea, du côté du parc de la Gatineau, sont l'endroit où la différence se sent le plus. On vérifie l'usure et on monte les pneus à l'atelier d'Aylmer, du lundi au samedi de 9h à 18h, sans rendez-vous.",
        },
        {
          question: "Et si je suis sur un chemin de Chelsea sans numéro civique ?",
          answer:
            "Donnez un point de repère ou partagez la position GPS de votre téléphone : c'est suffisant pour vous localiser sur les chemins de Chelsea, même sans adresse précise. Le répartiteur confirme ensuite le montant, à partir de 79,99 $, en environ deux minutes, puis envoie le camion. La ligne répond 24h/24 au (819) 921-7869, et le chauffeur accepte le débit et le crédit sur place.",
        },
        {
          question: "Est-ce que ça vaut le déplacement depuis Chelsea pour une réparation ?",
          answer:
            "Une seule descente suffit dans la plupart des cas : la visite se fait sans rendez-vous au 879 chemin Vanier, à Aylmer, du lundi au samedi de 9h à 18h. Décrivez le symptôme au (819) 921-7869 avant de partir de Chelsea et on vous dira ce qu'il faut vérifier. Le prix est arrêté après l'inspection, avant les travaux, et la garantie est d'un an.",
        },
      ],
    },
    en: {
      name: "Chelsea",
      slug: "chelsea",
      metaTitle: "Towing & Garage Serving Chelsea | Mécano Express",
      metaDescription:
        "Towing in Chelsea 24/7 from $79.99, with the exact amount settled by phone in two minutes. Walk-in garage in Aylmer. Call (819) 921-7869.",
      eyebrow: "Areas served · Chelsea",
      heroTitle: "Towing and garage",
      heroHighlight: "in Chelsea",
      subtitle:
        "Chelsea lies north, on the Gatineau Park side. The tow truck climbs up at any hour; for mechanical work, the drive south to Aylmer is yours to make.",
      trustBar: [
        "Towing in Chelsea, 24/7",
        "Exact amount by phone in 2 minutes",
        "Walk-in garage down in Aylmer",
      ],
      towingTitle: "The tow truck comes up to Chelsea",
      towingIntro:
        "Chelsea sits north of Gatineau on the Gatineau Park side, where the roads climb, bend and turn to slush early in the season. Towing reaches it 24/7 — nights, weekends and holidays at the same rate — starting at $79.99, with the exact amount agreed by phone in about two minutes and nothing added when the driver arrives. A battery boost or a lockout is the same call and the same number.",
      garageTitle: "The workshop stays in Aylmer",
      garageIntro:
        "Straight answer: no mechanic comes to your driveway in Chelsea. The shop is at 879 chemin Vanier in Aylmer, and repairs mean a drive south. What makes that drive worth it is that nothing needs booking — walk-ins Monday to Saturday, 9 AM to 6 PM, with on-site parking. We inspect, explain the findings, confirm the price before work starts, and back parts and labour for one year.",
      servicesTitle: "Our services for Chelsea",
      faqTitle: "Frequently asked questions — Chelsea",
      faq: [
        {
          question: "Does your towing cover Chelsea?",
          answer:
            "Chelsea is inside the area we tow, 24/7, with the same rate on nights, weekends and holidays. Towing starts at $79.99 and the exact figure is confirmed by phone in about two minutes before the truck leaves. Cars, light trucks, motorcycles, trailers and RVs all get loaded. The line to call is (819) 921-7869, any hour.",
        },
        {
          question: "Are winter tires required on Chelsea roads?",
          answer:
            "Yes — Quebec requires winter tires from December 1 to March 15 on passenger vehicles registered in the province, and the hills around Chelsea on the Gatineau Park side are exactly where that shows. We check tread wear and mount tires at the Aylmer shop, Monday to Saturday from 9 AM to 6 PM, with no appointment to make first.",
        },
        {
          question: "What if I break down on a Chelsea road with no street number?",
          answer:
            "Share your phone's GPS location or name a landmark — that is enough to find you on Chelsea's back roads without a civic address. Dispatch then confirms your amount, from $79.99, in roughly two minutes and sends the truck. The number answers 24/7 at (819) 921-7869, and the driver takes debit and credit right there.",
        },
        {
          question: "Is the drive from Chelsea to your shop worth it?",
          answer:
            "One trip usually covers it, because the visit needs no appointment: 879 chemin Vanier in Aylmer, Monday to Saturday, 9 AM to 6 PM. Describe the symptom on (819) 921-7869 before leaving Chelsea and we will tell you what has to be checked. The price is set after the inspection and before the work, and repairs carry a one-year warranty.",
        },
      ],
    },
  },
  {
    id: "buckingham",
    conversions: 3.0,
    fr: {
      name: "Buckingham",
      slug: "buckingham",
      metaTitle: "Remorquage et garage — Buckingham | Mécano Express",
      metaDescription:
        "Remorquage à Buckingham 24h/24, à partir de 79,99 $, montant confirmé avant le départ. Garage à Aylmer, à environ 40 minutes. (819) 921-7869.",
      eyebrow: "Zone desservie · Buckingham",
      heroTitle: "Remorquage et garage",
      heroHighlight: "à Buckingham",
      subtitle:
        "Buckingham est le secteur le plus à l'est qu'on dessert, à environ 40 minutes de l'atelier. La dépanneuse fait la route 24h/24; pour la mécanique, la visite se planifie.",
      trustBar: [
        "Dépanneuse 24h/24 jusqu'à Buckingham",
        "Montant confirmé avant le départ",
        "Atelier à environ 40 minutes",
      ],
      towingTitle: "La dépanneuse fait la route vers l'est",
      towingIntro:
        "Buckingham est le point le plus à l'est de notre territoire, à environ 40 minutes du 879 chemin Vanier. Le camion fait quand même la route 24h/24, nuits, fins de semaine et jours fériés compris, au même tarif. Le remorquage débute à 79,99 $ et le montant exact est confirmé au téléphone en environ deux minutes — gratuit, final, rien d'ajouté sur place. On charge autant une auto qu'un camion lourd, un autobus ou de la machinerie.",
      garageTitle: "L'atelier est à Aylmer, à environ 40 minutes",
      garageIntro:
        "Soyons honnêtes sur la distance : depuis Buckingham, compter environ 40 minutes de route jusqu'au 879 chemin Vanier, à Aylmer. C'est un déplacement qui se planifie, pas un arrêt en passant. Appelez avant de partir, décrivez le problème, et on vous dira ce que la visite implique. Sur place, aucun rendez-vous n'est requis du lundi au samedi de 9h à 18h, le prix est confirmé avant les travaux et la garantie est d'un an.",
      servicesTitle: "Nos services pour Buckingham",
      faqTitle: "Questions fréquentes — Buckingham",
      faq: [
        {
          question: "À quelle distance de Buckingham êtes-vous situés ?",
          answer:
            "Environ 40 minutes de route séparent Buckingham du 879 chemin Vanier, à Aylmer : c'est le secteur le plus à l'est qu'on dessert. La dépanneuse fait ce trajet 24h/24, nuits et jours fériés inclus, à partir de 79,99 $. Pour la mécanique, c'est un déplacement à planifier — l'atelier ouvre du lundi au samedi, de 9h à 18h, sans rendez-vous.",
        },
        {
          question: "Remorquez-vous les camions lourds et la machinerie à Buckingham ?",
          answer:
            "Oui, le service couvre les camions lourds, les autobus, la machinerie et les conteneurs en plus des autos, motos, remorques et bateaux, partout jusqu'à Buckingham. Décrivez le véhicule au (819) 921-7869 : on confirme le montant en environ deux minutes, avant d'envoyer l'équipement, et la ligne répond 24h/24. Le chauffeur accepte le débit et le crédit sur place.",
        },
        {
          question: "Dois-je appeler avant de faire la route jusqu'au garage ?",
          answer:
            "Ce n'est pas obligatoire — les visites sans rendez-vous sont prises du lundi au samedi, de 9h à 18h — mais avec environ 40 minutes de route depuis Buckingham, un appel au (819) 921-7869 évite un aller-retour inutile. Décrivez le symptôme et on vous dira ce qu'il faut vérifier. Le prix est confirmé après l'inspection et avant les travaux, garantis un an.",
        },
        {
          question: "Comment se fait le paiement d'un remorquage à Buckingham ?",
          answer:
            "Avec le chauffeur, sur place : le débit et le crédit sont acceptés. Le montant a déjà été confirmé au téléphone avant le départ, à partir de 79,99 $, et il ne bouge pas parce que la distance jusqu'à Buckingham est plus longue que prévu. On remet une facture détaillée si vous en avez besoin pour une réclamation d'assurance.",
        },
      ],
    },
    en: {
      name: "Buckingham",
      slug: "buckingham",
      metaTitle: "Towing & Garage Serving Buckingham | Mécano Express",
      metaDescription:
        "Towing to Buckingham 24/7 from $79.99, amount confirmed before dispatch. The garage sits in Aylmer, roughly 40 minutes away. Call (819) 921-7869.",
      eyebrow: "Areas served · Buckingham",
      heroTitle: "Towing and garage",
      heroHighlight: "serving Buckingham",
      subtitle:
        "Buckingham is the far east edge of what we cover, roughly 40 minutes from the shop. The truck makes that run around the clock; a repair visit is worth planning.",
      trustBar: [
        "Towing out to Buckingham, 24/7",
        "Amount agreed before dispatch",
        "Shop is roughly 40 minutes away",
      ],
      towingTitle: "The truck makes the run east",
      towingIntro:
        "Buckingham marks the eastern edge of the territory, roughly 40 minutes from 879 chemin Vanier, and the truck still makes that run 24/7 — nights, weekends and holidays at one rate. Towing starts at $79.99 and the exact amount is settled on the phone in about two minutes: free, final, with no fee tacked on at the roadside. Cars, heavy trucks, buses, machinery and containers all get loaded.",
      garageTitle: "The shop is in Aylmer, about 40 minutes out",
      garageIntro:
        "No point pretending otherwise: Buckingham to 879 chemin Vanier in Aylmer is roughly a 40-minute drive, so a repair visit is something you plan rather than something you squeeze in. Phone ahead, describe the problem, and we will tell you what the visit involves. Once you are here no appointment is needed, Monday to Saturday 9 AM to 6 PM, the price is confirmed before work, and parts and labour are warranted a year.",
      servicesTitle: "Our services for Buckingham",
      faqTitle: "Frequently asked questions — Buckingham",
      faq: [
        {
          question: "How far is your shop from Buckingham?",
          answer:
            "Roughly 40 minutes of driving separates Buckingham from 879 chemin Vanier in Aylmer, which makes it the farthest sector we cover. The tow truck still runs it 24/7, nights and holidays included, starting at $79.99. A mechanical visit is worth planning around that drive — the workshop is open Monday to Saturday, 9 AM to 6 PM, walk-ins accepted.",
        },
        {
          question: "Do you tow heavy trucks and machinery in Buckingham?",
          answer:
            "Yes. Heavy trucks, buses, machinery and containers are towed as well as cars, motorcycles, trailers and boats, all the way out to Buckingham. Describe the vehicle on (819) 921-7869 and the amount is confirmed in about two minutes before the right equipment is sent. The line answers 24/7, and the driver takes debit and credit on the spot.",
        },
        {
          question: "Should I call before driving in from Buckingham?",
          answer:
            "Not strictly — walk-ins are taken Monday to Saturday from 9 AM to 6 PM — but with roughly 40 minutes of road behind you, a call to (819) 921-7869 saves a wasted round trip. Describe the symptom and we will tell you what needs checking. The price is confirmed after the inspection and before any work, which carries a one-year warranty.",
        },
        {
          question: "How do I pay for a tow out in Buckingham?",
          answer:
            "You pay the driver on the spot, by debit or credit. The amount was already agreed by phone before dispatch, starting at $79.99, and it does not change because Buckingham turned out to be a longer run than expected. Ask for a detailed invoice if your insurer needs one for a claim and the driver will provide it.",
        },
      ],
    },
  },
  {
    id: "cantley",
    conversions: null,
    fr: {
      name: "Cantley",
      slug: "cantley",
      metaTitle: "Remorquage et garage — Cantley | Mécano Express",
      metaDescription:
        "Remorquage, survoltage et déverrouillage à Cantley, 24h/24, à partir de 79,99 $. Garage sans rendez-vous à Aylmer. Appelez le (819) 921-7869.",
      eyebrow: "Zone desservie · Cantley",
      heroTitle: "Remorquage et garage",
      heroHighlight: "à Cantley",
      subtitle:
        "Cantley, ce sont de longs bouts de chemin de campagne où une panne se règle mal tout seul. La dépanneuse s'y rend 24h/24; l'atelier, lui, vous attend à Aylmer.",
      trustBar: [
        "Dépanneuse 24h/24 à Cantley",
        "Survoltage et déverrouillage sur place",
        "Atelier sans rendez-vous à Aylmer",
      ],
      towingTitle: "On se déplace sur les chemins de Cantley",
      towingIntro:
        "Cantley s'étire en longs bouts de chemin de campagne, et une batterie morte ou une clé restée à l'intérieur y est nettement moins pratique qu'en ville. La dépanneuse s'y rend 24h/24, nuits, fins de semaine et jours fériés compris, au même tarif, et le survoltage comme le déverrouillage font partie du service. Le remorquage débute à 79,99 $, montant exact confirmé au téléphone en environ deux minutes, sans frais ajouté à l'arrivée.",
      garageTitle: "Pour la mécanique, direction Aylmer",
      garageIntro:
        "Aucun mécanicien ne se présente dans votre entrée à Cantley : l'atelier est au 879 chemin Vanier, à Aylmer, et c'est là que les réparations se font. Ce qui rend le trajet raisonnable, c'est qu'il n'y a rien à réserver — visites du lundi au samedi, de 9h à 18h, stationnement sur place. On inspecte, on vous explique, le prix est confirmé avant les travaux et tout est garanti un an, pièces et main-d'œuvre.",
      servicesTitle: "Nos services pour Cantley",
      faqTitle: "Questions fréquentes — Cantley",
      faq: [
        {
          question: "Combien de temps avant qu'une dépanneuse arrive à Cantley ?",
          answer:
            "Le répartiteur vous donne le délai réel au téléphone, parce que la moyenne d'environ 15 minutes qu'on affiche vaut pour le secteur Aylmer–Hull–Gatineau, pas pour les chemins de Cantley, plus éloignés. Ce qui ne change pas : la ligne répond 24h/24 au (819) 921-7869, le tarif reste le même la nuit et les jours fériés, et le montant est confirmé avant le départ, à partir de 79,99 $.",
        },
        {
          question: "Un survoltage suffit-il ou faut-il changer la batterie ?",
          answer:
            "Un survoltage redémarre une batterie faible, mais il ne répare pas une batterie qui ne tient plus la charge : si l'auto recale une fois les câbles retirés, ou le lendemain matin dans une entrée de Cantley, le problème est la batterie elle-même. Le survoltage se fait sur place, 24h/24, et le test de charge se fait à l'atelier d'Aylmer, du lundi au samedi de 9h à 18h.",
        },
        {
          question: "Vous déplacez-vous à Cantley pour un déverrouillage ?",
          answer:
            "Oui, le déverrouillage fait partie du service routier offert à Cantley 24h/24, au même titre que le survoltage et le remorquage. Un seul appel au (819) 921-7869 suffit, et le répartiteur vous dit au téléphone ce qui s'applique avant d'envoyer quelqu'un. Si le véhicule doit finalement être remorqué, le montant débute à 79,99 $ et il est confirmé avant le départ.",
        },
        {
          question: "Qu'est-ce que je gagne à faire réparer mon auto à Aylmer ?",
          answer:
            "Un garage où vous entrez sans rendez-vous du lundi au samedi, de 9h à 18h, avec stationnement sur place — pratique quand vous arrivez de Cantley sans avoir pu réserver. Le prix est confirmé avant que les travaux commencent, jamais après, et les pièces comme la main-d'œuvre sont garanties un an. Si l'auto ne peut plus rouler, la dépanneuse la descend à partir de 79,99 $.",
        },
      ],
    },
    en: {
      name: "Cantley",
      slug: "cantley",
      metaTitle: "Towing & Garage Serving Cantley | Mécano Express",
      metaDescription:
        "Towing, battery boosts and lockouts in Cantley around the clock, from $79.99. Walk-in garage in Aylmer. Call (819) 921-7869 for a firm amount.",
      eyebrow: "Areas served · Cantley",
      heroTitle: "Towing and garage",
      heroHighlight: "serving Cantley",
      subtitle:
        "Cantley is long stretches of country road, where a flat battery is a bigger problem than it would be downtown. Towing comes to you; repairs happen down in Aylmer.",
      trustBar: [
        "Towing in Cantley, 24/7",
        "Boosts and lockouts on the spot",
        "Walk-in workshop in Aylmer",
      ],
      towingTitle: "We drive out on Cantley's roads",
      towingIntro:
        "Long rural stretches are what Cantley is made of, and a dead battery or keys locked in the car is a far bigger problem there than on a city street. The truck answers 24/7 — nights, weekends and holidays at the same rate — and boosts and lockouts are part of what the driver handles. Towing itself begins at $79.99, with the exact amount fixed by phone in about two minutes and nothing added on arrival.",
      garageTitle: "Repairs happen down in Aylmer",
      garageIntro:
        "Nobody pulls into your Cantley driveway with a toolbox — mechanical work is done at 879 chemin Vanier in Aylmer, and that is a drive. What makes it reasonable is that there is nothing to book: come Monday to Saturday between 9 AM and 6 PM and park on site. We inspect, talk you through it, confirm the price before starting, and warrant parts and labour for one year.",
      servicesTitle: "Our services for Cantley",
      faqTitle: "Frequently asked questions — Cantley",
      faq: [
        {
          question: "How quickly can a tow truck get to Cantley?",
          answer:
            "Dispatch gives you the live estimate on the call, because the roughly 15-minute average we publish applies to the Aylmer–Hull–Gatineau area rather than Cantley's more distant roads. What stays fixed: the line answers 24/7 on (819) 921-7869, the rate is the same at night and on holidays, and your amount is agreed before the truck moves, starting at $79.99.",
        },
        {
          question: "Will a boost fix my battery, or does it need replacing?",
          answer:
            "A boost will start a weak battery, but it cannot repair one that no longer holds a charge — if the engine dies once the cables come off, or refuses again the next morning in a Cantley driveway, the battery itself is finished. Boosts are done on the spot 24/7; load testing happens at the Aylmer shop, Monday to Saturday from 9 AM to 6 PM.",
        },
        {
          question: "Do you come out to Cantley for a lockout?",
          answer:
            "Yes, lockouts are part of the roadside service covering Cantley 24 hours a day, alongside boosts and towing. One call to (819) 921-7869 sorts it, and the dispatcher tells you on the phone what applies before anyone is sent. If the vehicle ends up needing a tow instead, that starts at $79.99 and the amount is confirmed before dispatch.",
        },
        {
          question: "What do I get by bringing the car to Aylmer?",
          answer:
            "A shop you can walk into Monday through Saturday, 9 AM to 6 PM, with parking on site — useful when you have driven in from Cantley without booking anything. The price is confirmed before work starts rather than after, and parts and labour are covered for a year. If the car will not drive at all, the tow starts at $79.99.",
        },
      ],
    },
  },
  {
    id: "val-des-monts",
    conversions: null,
    fr: {
      name: "Val-des-Monts",
      slug: "val-des-monts",
      metaTitle: "Remorquage et garage — Val-des-Monts | Mécano Express",
      metaDescription:
        "Remorquage à Val-des-Monts 24h/24, à partir de 79,99 $ : autos, remorques, VR et bateaux. Garage sans rendez-vous à Aylmer. (819) 921-7869.",
      eyebrow: "Zone desservie · Val-des-Monts",
      heroTitle: "Remorquage et garage",
      heroHighlight: "à Val-des-Monts",
      subtitle:
        "Val-des-Monts est au nord, loin des grands axes, avec des chemins qui deviennent exigeants dès les premières neiges. La dépanneuse s'y rend à toute heure.",
      trustBar: [
        "Dépanneuse 24h/24 à Val-des-Monts",
        "Autos, remorques, VR et bateaux",
        "Même tarif la nuit et les jours fériés",
      ],
      towingTitle: "Le remorquage se rend à Val-des-Monts",
      towingIntro:
        "Val-des-Monts est au nord, à l'écart des grands axes, et ses chemins deviennent exigeants dès les premières neiges. La dépanneuse s'y rend 24h/24, nuits, fins de semaine et jours fériés compris, au même tarif. Ce qu'on charge ne se limite pas aux autos : camions légers, motos, remorques, véhicules récréatifs et bateaux aussi. Le remorquage débute à 79,99 $ et le montant est confirmé avant le départ du camion.",
      garageTitle: "La mécanique se fait à Aylmer",
      garageIntro:
        "L'atelier ne se déplace pas jusqu'à Val-des-Monts : il est au 879 chemin Vanier, à Aylmer, et la route vers le sud vous revient. Elle vaut le coup quand rien n'est à réserver — on prend les visites du lundi au samedi, de 9h à 18h, avec stationnement sur place. Le véhicule est inspecté, les constats vous sont expliqués, le prix est confirmé avant les travaux, et les pièces comme la main-d'œuvre sont garanties un an.",
      servicesTitle: "Nos services pour Val-des-Monts",
      faqTitle: "Questions fréquentes — Val-des-Monts",
      faq: [
        {
          question: "Quels véhicules remorquez-vous à Val-des-Monts ?",
          answer:
            "Autos, camions légers, camions lourds, autobus, motos, remorques, véhicules récréatifs, bateaux, machinerie et conteneurs — la liste va bien au-delà de l'auto familiale. Dites au (819) 921-7869 ce qu'il y a à déplacer et à partir d'où dans Val-des-Monts : on confirme le montant, à partir de 79,99 $, en environ deux minutes, puis on envoie l'équipement qui convient. La ligne répond 24h/24.",
        },
        {
          question: "Le tarif monte-t-il la nuit ou pendant une tempête ?",
          answer:
            "Non, le tarif est le même à 3 h du matin qu'en plein après-midi, un 25 décembre comme un mardi. Le remorquage débute à 79,99 $ à Val-des-Monts, et le montant exact vous est confirmé au téléphone avant que le camion parte. Une nuit d'hiver peut allonger le délai de route, mais elle ne change pas le prix annoncé.",
        },
        {
          question: "Puis-je avoir un montant ferme avant d'accepter ?",
          answer:
            "Oui : donnez votre position dans Val-des-Monts et votre destination, et le montant exact vous est confirmé au téléphone en environ deux minutes. Le devis est gratuit et final — aucun frais ne s'ajoute quand le camion arrive. Vous décidez ensuite. Le remorquage débute à 79,99 $ et le chauffeur accepte le débit et le crédit sur place.",
        },
        {
          question: "Où se retrouve mon véhicule après le remorquage ?",
          answer:
            "Où vous voulez — la destination se fixe au téléphone avant le départ. Beaucoup de gens le font descendre de Val-des-Monts jusqu'à notre atelier, au 879 chemin Vanier à Aylmer, où le diagnostic se fait pendant les heures d'ouverture, du lundi au samedi de 9h à 18h. Aucune réparation ne commence avant que le prix soit approuvé, et les travaux sont garantis un an.",
        },
      ],
    },
    en: {
      name: "Val-des-Monts",
      slug: "val-des-monts",
      metaTitle: "Towing & Garage in Val-des-Monts | Mécano Express",
      metaDescription:
        "Towing across Val-des-Monts 24/7 from $79.99 — cars, trailers, RVs and boats. Walk-in garage in Aylmer, Monday to Saturday. Call (819) 921-7869.",
      eyebrow: "Areas served · Val-des-Monts",
      heroTitle: "Towing and garage",
      heroHighlight: "serving Val-des-Monts",
      subtitle:
        "Val-des-Monts sits north and off the main routes, on roads that turn demanding as soon as the snow starts. The tow truck gets there at any hour of the night.",
      trustBar: [
        "Towing in Val-des-Monts, 24/7",
        "Cars, trailers, RVs and boats",
        "Same rate at night and on holidays",
      ],
      towingTitle: "Towing reaches Val-des-Monts",
      towingIntro:
        "North and away from the main routes, Val-des-Monts has roads that get demanding the moment winter settles in. The truck answers there 24/7, nights, weekends and holidays included, at one unchanging rate. What gets loaded goes well past the family car: light trucks, motorcycles, trailers, RVs and boats all ride too. Towing opens at $79.99, and your amount is confirmed before the truck leaves the yard.",
      garageTitle: "Mechanical work happens in Aylmer",
      garageIntro:
        "The workshop does not travel up to Val-des-Monts; it sits at 879 chemin Vanier in Aylmer, and the drive south is yours. It earns its keep by needing no appointment — visits are taken Monday to Saturday, 9 AM to 6 PM, with parking on site. The vehicle gets inspected, the findings get explained, the price is confirmed before work begins, and parts and labour are warranted for one year.",
      servicesTitle: "Our services for Val-des-Monts",
      faqTitle: "Frequently asked questions — Val-des-Monts",
      faq: [
        {
          question: "What kinds of vehicles do you tow in Val-des-Monts?",
          answer:
            "Cars, light trucks, heavy trucks, buses, motorcycles, trailers, RVs, boats, machinery and containers — well beyond the family sedan. Tell (819) 921-7869 what needs moving and where in Val-des-Monts it is sitting; the amount comes back in about two minutes, starting at $79.99, and the right equipment is sent. The line is staffed 24 hours a day, every day.",
        },
        {
          question: "Does the rate go up at night or during a storm?",
          answer:
            "No — 3 AM costs the same as mid-afternoon, and December 25 costs the same as a Tuesday. Towing in Val-des-Monts opens at $79.99, and your exact amount is confirmed on the phone before the truck leaves. A winter night can stretch how long the drive takes, but it does not change the figure you were quoted.",
        },
        {
          question: "Can I get a firm number before I agree to anything?",
          answer:
            "Yes. Give us where you are in Val-des-Monts and where the vehicle is going, and the exact amount comes back by phone in roughly two minutes. That quote is free and final — no fee appears when the truck arrives. Towing starts at $79.99, and the driver accepts debit and credit at the roadside when the job is done.",
        },
        {
          question: "Where does my vehicle end up after the tow?",
          answer:
            "Wherever you choose; the destination is settled on the phone before dispatch. Plenty of people have it brought down from Val-des-Monts to our shop at 879 chemin Vanier in Aylmer, where the diagnosis happens during opening hours, Monday to Saturday from 9 AM to 6 PM. No repair starts until you approve the price, and the work carries a one-year warranty.",
        },
      ],
    },
  },
];

export function getArea(slug: string, locale: Locale): Area | undefined {
  return areas.find((a) => a[locale].slug === slug);
}

export function getAreaContent(slug: string, locale: Locale) {
  const area = getArea(slug, locale);
  if (!area) return undefined;
  return { area, content: area[locale] };
}
