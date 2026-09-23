import type { Locale } from "./i18n";
import type { FAQItem } from "./faq";

export type ServiceContent = {
  name: string;
  slug: string;
  tagline: string;
  /** Hero <h1>, split so the geo half renders in the accent colour — same
   * shape as MechanicIntentContent. `name` alone is a one-word label
   * ("Freins", "Pneus"): fine for nav and breadcrumbs, useless as the
   * heading Google reads right after the title. */
  heroTitle: string;
  heroHighlight: string;
  intro: string;
  points: string[];
  metaTitle: string;
  metaDescription: string;
  faqTitle: string;
  faq: FAQItem[];
};

export type Service = {
  id: string;
  icon: string;
  category: "towing" | "repair";
  fr: ServiceContent;
  en: ServiceContent;
};

export const services: Service[] = [
  {
    id: "remorquage",
    icon: "tow",
    category: "towing",
    fr: {
      name: "Remorquage",
      slug: "remorquage",
      tagline: "Remorquage et dépannage rapide",
      // No city in this h1 on purpose: /remorquage is the pillar for
      // "remorquage gatineau" and a third page on that term would split it.
      heroTitle: "Remorquage et",
      heroHighlight: "dépannage routier",
      intro:
        "En panne sur la route à Aylmer, Gatineau, Hull ou Buckingham ? On envoie une remorqueuse rapidement, on vous localise et on vous ramène en sécurité — vous ou votre véhicule.",
      points: [
        "Remorquage tous véhicules, voitures et camionnettes",
        "Service dans Aylmer, Hull, Gatineau et Buckingham",
        "Prix confirmé avant le départ, aucune surprise",
        "Appel direct — pas de formulaire, pas d'attente",
      ],
      metaTitle: "Remorquage à Gatineau, Aylmer et Hull | Mécano Express",
      metaDescription:
        "Service de remorquage et dépanneuse à Gatineau, Aylmer, Hull et Buckingham. Intervention rapide, prix confirmé avant le départ. Appelez le (819) 921-7869.",
      faqTitle: "Questions fréquentes sur le remorquage",
      faq: [
        {
          question: "Que faire immédiatement après une panne sur la route ?",
          answer:
            "Mettez vos feux de détresse, sortez du véhicule si possible en sécurité (côté opposé à la circulation), et appelez-nous — on vous guide pendant qu'on envoie le camion.",
        },
        {
          question: "Puis-je rester dans le véhicule pendant le remorquage ?",
          answer:
            "Non, pour votre sécurité, le remorquage se fait sans passager à bord. On peut vous ramener séparément selon l'entente.",
        },
        {
          question: "Le remorquage est-il couvert par mon assurance ?",
          answer:
            "Plusieurs polices d'assurance automobile incluent une clause d'assistance routière. Vérifiez avec votre assureur — on peut vous fournir une facture détaillée pour votre réclamation.",
        },
      ],
    },
    en: {
      name: "Towing",
      slug: "towing",
      tagline: "Fast towing and roadside assistance",
      heroTitle: "Towing and",
      heroHighlight: "roadside assistance",
      intro:
        "Broken down on the road in Aylmer, Gatineau, Hull or Buckingham? We send a tow truck fast, locate you, and get you and your vehicle back to safety.",
      points: [
        "Towing for all vehicles, cars and light trucks",
        "Serving Aylmer, Hull, Gatineau and Buckingham",
        "Price confirmed before dispatch, no surprises",
        "Call directly — no form, no waiting",
      ],
      metaTitle: "Towing in Gatineau, Aylmer & Hull | Mécano Express",
      metaDescription:
        "Towing and tow truck service in Gatineau, Aylmer, Hull and Buckingham. Fast dispatch, price confirmed upfront. Call (819) 921-7869.",
      faqTitle: "Frequently Asked Questions About Towing",
      faq: [
        {
          question: "What should I do right after breaking down on the road?",
          answer:
            "Turn on your hazard lights, get out of the vehicle safely if you can (the side away from traffic), and call us — we'll guide you while the truck is on its way.",
        },
        {
          question: "Can I stay in the vehicle during the tow?",
          answer:
            "No, for your safety towing is done without a passenger on board. We can arrange to bring you separately if needed.",
        },
        {
          question: "Is towing covered by my insurance?",
          answer:
            "Many auto insurance policies include roadside assistance coverage. Check with your insurer — we can provide a detailed invoice for your claim.",
        },
      ],
    },
  },
  {
    id: "changement-huile",
    icon: "oil",
    category: "repair",
    fr: {
      name: "Changement d'huile",
      slug: "changement-huile",
      tagline: "Vidange rapide, sans rendez-vous",
      heroTitle: "Changement d'huile",
      heroHighlight: "à Aylmer",
      intro:
        "Un changement d'huile régulier est le geste le plus simple pour prolonger la vie de votre moteur. Chez Mécano Express à Aylmer, on le fait rapidement, sans rendez-vous, avec l'huile adaptée à votre véhicule.",
      points: [
        "Huile conventionnelle, synthétique ou haute performance",
        "Remplacement du filtre à huile inclus",
        "Inspection visuelle multipoint offerte",
        "Sans rendez-vous — passez quand ça vous convient",
      ],
      metaTitle: "Changement d'huile sans rendez-vous à Aylmer",
      metaDescription:
        "Changement d'huile rapide et sans rendez-vous à Aylmer (Gatineau). Huile synthétique ou conventionnelle, filtre inclus. Ouvert le samedi. (819) 921-7869.",
      faqTitle: "Questions fréquentes sur le changement d'huile",
      faq: [
        {
          question: "À quelle fréquence faut-il changer l'huile ?",
          answer:
            "En général tous les 5 000 à 8 000 km pour une huile synthétique, ou selon les recommandations du fabricant. On peut vérifier votre carnet d'entretien pour vous confirmer.",
        },
        {
          question: "Quelle est la différence entre huile synthétique et conventionnelle ?",
          answer:
            "La synthétique protège mieux le moteur sous température extrême et dure plus longtemps, mais coûte un peu plus cher. On vous conseille selon votre véhicule et votre conduite.",
        },
        {
          question: "Que se passe-t-il si j'attends trop longtemps entre deux vidanges ?",
          answer:
            "L'huile perd ses propriétés lubrifiantes, ce qui use le moteur prématurément et peut causer des réparations coûteuses à long terme.",
        },
      ],
    },
    en: {
      name: "Oil Change",
      slug: "oil-change",
      tagline: "Fast oil change, no appointment",
      heroTitle: "Oil Change",
      heroHighlight: "in Aylmer",
      intro:
        "A regular oil change is the simplest way to extend the life of your engine. At Mécano Express in Aylmer, we do it fast, with no appointment, using the right oil for your vehicle.",
      points: [
        "Conventional, synthetic or high-performance oil",
        "Oil filter replacement included",
        "Complimentary multi-point visual inspection",
        "No appointment — drop in whenever it suits you",
      ],
      metaTitle: "Oil Change in Aylmer, No Appointment | Mécano Express",
      metaDescription:
        "Fast, walk-in oil change in Aylmer (Gatineau). Synthetic or conventional oil, filter included. Open Saturdays. Call (819) 921-7869.",
      faqTitle: "Frequently Asked Questions About Oil Changes",
      faq: [
        {
          question: "How often should I change my oil?",
          answer:
            "Generally every 5,000 to 8,000 km for synthetic oil, or as recommended by the manufacturer. We can check your maintenance log to confirm.",
        },
        {
          question: "What's the difference between synthetic and conventional oil?",
          answer:
            "Synthetic protects the engine better under extreme temperatures and lasts longer, but costs a bit more. We advise you based on your vehicle and driving habits.",
        },
        {
          question: "What happens if I wait too long between oil changes?",
          answer:
            "The oil loses its lubricating properties, which wears the engine prematurely and can lead to costly repairs down the line.",
        },
      ],
    },
  },
  {
    id: "freins",
    icon: "brake",
    category: "repair",
    fr: {
      name: "Freins",
      slug: "freins",
      tagline: "Réparation et remplacement de freins",
      heroTitle: "Réparation de freins",
      heroHighlight: "à Aylmer",
      intro:
        "Un bruit, une vibration ou une pédale molle ? Vos freins sont votre système de sécurité numéro un. On les inspecte, on les répare et on les remplace au bon prix, sans vous vendre l'inutile.",
      points: [
        "Plaquettes, disques et étriers",
        "Diagnostic complet du système de freinage",
        "Purge et remplacement du liquide de frein",
        "Estimation honnête avant tout travail",
      ],
      metaTitle: "Réparation de freins à Aylmer (Gatineau) | Mécano Express",
      metaDescription:
        "Réparation et remplacement de freins à Aylmer. Plaquettes, disques, étriers. Diagnostic complet et estimation honnête. Sans rendez-vous. (819) 921-7869.",
      faqTitle: "Questions fréquentes sur les freins",
      faq: [
        {
          question: "Quels signes indiquent que mes freins ont besoin d'attention ?",
          answer:
            "Un grincement, une vibration dans la pédale, un temps de freinage plus long ou une pédale molle sont tous des signes à ne pas ignorer.",
        },
        {
          question: "Combien de temps durent des plaquettes de frein ?",
          answer:
            "En moyenne 40 000 à 70 000 km, selon votre style de conduite et le type de conduite (ville ou autoroute).",
        },
        {
          question: "Est-ce dangereux de conduire avec des freins qui grincent ?",
          answer:
            "Le grincement seul n'est pas toujours dangereux, mais c'est souvent un signal d'usure des plaquettes — on recommande une inspection rapide avant que ça affecte les disques.",
        },
      ],
    },
    en: {
      name: "Brakes",
      slug: "brakes",
      tagline: "Brake repair and replacement",
      heroTitle: "Brake Repair",
      heroHighlight: "in Aylmer",
      intro:
        "A noise, a vibration or a soft pedal? Your brakes are your number one safety system. We inspect, repair and replace them at a fair price — without selling you what you don't need.",
      points: [
        "Pads, rotors and calipers",
        "Complete brake system diagnostic",
        "Brake fluid flush and replacement",
        "Honest estimate before any work",
      ],
      metaTitle: "Brake Repair in Aylmer (Gatineau) | Mécano Express",
      metaDescription:
        "Brake repair and replacement in Aylmer. Pads, rotors, calipers. Complete diagnostic and honest estimate. Walk-in welcome. (819) 921-7869.",
      faqTitle: "Frequently Asked Questions About Brakes",
      faq: [
        {
          question: "What signs mean my brakes need attention?",
          answer:
            "Squeaking, a vibration in the pedal, longer stopping distance or a soft pedal are all signs not to ignore.",
        },
        {
          question: "How long do brake pads last?",
          answer:
            "On average 40,000 to 70,000 km, depending on your driving style and type of driving (city vs. highway).",
        },
        {
          question: "Is it dangerous to drive with squeaking brakes?",
          answer:
            "Squeaking alone isn't always dangerous, but it's often a sign of pad wear — we recommend a quick inspection before it affects the rotors.",
        },
      ],
    },
  },
  {
    id: "pneus",
    icon: "tire",
    category: "repair",
    fr: {
      name: "Pneus",
      slug: "pneus",
      tagline: "Installation, changement et balancement",
      heroTitle: "Pneus et balancement",
      heroHighlight: "à Aylmer",
      intro:
        "Installation, changement, balancement et entreposage. Pneus quatre saisons, d'été ou d'hiver — on vous conseille selon votre conduite et on vous remet sur la route rapidement.",
      points: [
        "Montage et balancement de précision",
        "Pneus d'hiver, d'été et quatre saisons",
        "Réparation de crevaison",
        "Service rapide, sans longue attente",
      ],
      metaTitle: "Pneus à Aylmer et Gatineau — pose et balancement",
      metaDescription:
        "Installation, changement et balancement de pneus à Aylmer et Gatineau. Pneus toutes saisons, réparation de crevaison. Sans rendez-vous. (819) 921-7869.",
      faqTitle: "Questions fréquentes sur les pneus",
      faq: [
        {
          question: "Quand dois-je installer mes pneus d'hiver ?",
          answer:
            "Au Québec, la loi exige des pneus d'hiver entre le 1er décembre et le 15 mars. On recommande de les installer dès que la température descend sous 7°C de façon régulière.",
        },
        {
          question: "Comment savoir si mes pneus sont encore sécuritaires ?",
          answer:
            "Vérifiez la profondeur de la bande de roulement (minimum 2/32 de pouce) et l'usure inégale — on fait une inspection gratuite en quelques minutes.",
        },
        {
          question: "Puis-je réparer une crevaison ou dois-je remplacer le pneu ?",
          answer:
            "Ça dépend de la taille et de l'emplacement du trou. Une crevaison dans la bande de roulement se répare souvent; sur le flanc, un remplacement est nécessaire.",
        },
      ],
    },
    en: {
      name: "Tires",
      slug: "tires",
      tagline: "Installation, changeover and balancing",
      heroTitle: "Tires and Balancing",
      heroHighlight: "in Aylmer",
      intro:
        "A walk-in tire shop in Aylmer, minutes from Gatineau: installation, changeover, balancing and storage. All-season, summer or winter tires — we advise you based on how you drive and get you back on the road fast.",
      points: [
        "Precision mounting and balancing",
        "Winter, summer and all-season tires",
        "Flat tire repair and puncture plugs",
        "Fast service, no long wait",
      ],
      metaTitle: "Tire Shop and Repair in Gatineau & Aylmer | Mécano Express",
      metaDescription:
        "Tire installation, changeover and balancing in Aylmer and Gatineau. All-season tires, flat repair. Walk-in welcome. (819) 921-7869.",
      faqTitle: "Frequently Asked Questions About Tires",
      faq: [
        {
          question: "When should I switch to winter tires?",
          answer:
            "In Quebec, the law requires winter tires between December 1 and March 15. We recommend installing them once the temperature regularly drops below 7°C.",
        },
        {
          question: "How do I know if my tires are still safe?",
          answer:
            "Check the tread depth (minimum 2/32 of an inch) and for uneven wear — we do a free inspection in a few minutes.",
        },
        {
          question: "Can a flat be repaired or does the tire need replacing?",
          answer:
            "It depends on the size and location of the puncture. A flat in the tread can often be repaired; on the sidewall, replacement is usually necessary.",
        },
      ],
    },
  },
  {
    id: "diagnostic",
    icon: "diagnostic",
    category: "repair",
    fr: {
      name: "Diagnostic",
      slug: "diagnostic",
      tagline: "Diagnostic électronique complet",
      heroTitle: "Diagnostic électronique",
      heroHighlight: "à Aylmer",
      intro:
        "Un voyant s'allume au tableau de bord ? On branche notre équipement de diagnostic pour trouver la vraie cause — pas juste effacer le code. Vous savez exactement ce qui se passe avant de payer.",
      points: [
        "Lecture des codes moteur et systèmes",
        "Diagnostic électronique et électrique",
        "Explication claire du problème",
        "Aucune réparation sans votre accord",
      ],
      metaTitle: "Diagnostic automobile à Aylmer (Gatineau) | Mécano Express",
      metaDescription:
        "Diagnostic électronique complet à Aylmer. Voyant moteur ou problème électrique : on trouve la vraie cause, estimation honnête. (819) 921-7869.",
      faqTitle: "Questions fréquentes sur le diagnostic",
      faq: [
        {
          question: "Le voyant moteur est allumé, dois-je m'inquiéter ?",
          answer:
            "Ça dépend s'il est fixe ou clignotant. Clignotant, arrêtez de conduire et faites remorquer. Fixe, vous pouvez généralement rouler prudemment jusqu'à nous.",
        },
        {
          question: "Le diagnostic est-il vraiment nécessaire si le code d'erreur est connu ?",
          answer:
            "Le code indique un symptôme, pas toujours la cause exacte. Un bon diagnostic évite de remplacer une pièce qui n'était pas le vrai problème.",
        },
        {
          question: "Combien coûte un diagnostic ?",
          answer:
            "Le prix varie selon la complexité du problème. On vous donne toujours un prix avant de commencer, et on explique clairement ce qu'on a trouvé.",
        },
      ],
    },
    en: {
      name: "Diagnostics",
      slug: "diagnostics",
      tagline: "Complete electronic diagnostics",
      heroTitle: "Electronic Diagnostics",
      heroHighlight: "in Aylmer",
      intro:
        "A warning light on your dashboard? We plug in our diagnostic equipment to find the real cause — not just clear the code. You know exactly what's going on before you pay.",
      points: [
        "Engine and system code reading",
        "Electronic and electrical diagnostics",
        "Clear explanation of the problem",
        "No repair without your approval",
      ],
      metaTitle: "Car Diagnostics in Aylmer (Gatineau) | Mécano Express",
      metaDescription:
        "Complete electronic diagnostics in Aylmer. Check engine light, electrical issue: we find the real cause. Clear explanation, honest estimate. (819) 921-7869.",
      faqTitle: "Frequently Asked Questions About Diagnostics",
      faq: [
        {
          question: "My check engine light is on, should I worry?",
          answer:
            "It depends whether it's steady or flashing. Flashing, stop driving and get towed. Steady, you can usually drive carefully to us.",
        },
        {
          question: "Is a diagnostic really needed if the error code is already known?",
          answer:
            "The code points to a symptom, not always the exact cause. A proper diagnostic avoids replacing a part that wasn't the real problem.",
        },
        {
          question: "How much does a diagnostic cost?",
          answer:
            "The price varies with the complexity of the issue. We always give you a price before starting, and clearly explain what we found.",
        },
      ],
    },
  },
  {
    id: "suspension-alignement",
    icon: "suspension",
    category: "repair",
    fr: {
      name: "Suspension et alignement",
      slug: "suspension-alignement",
      tagline: "Amortisseurs, direction et alignement",
      heroTitle: "Suspension et alignement",
      heroHighlight: "à Aylmer",
      intro:
        "Votre voiture tire d'un côté, rebondit ou vos pneus s'usent inégalement ? On corrige la suspension, la direction et l'alignement pour une conduite stable et des pneus qui durent.",
      points: [
        "Amortisseurs et ressorts",
        "Alignement des roues",
        "Direction et rotules",
        "Conduite plus stable, pneus qui durent",
      ],
      metaTitle: "Alignement auto et suspension à Gatineau | Mécano Express",
      metaDescription:
        "Réparation de suspension, direction et alignement des roues à Aylmer. Amortisseurs, ressorts, rotules. Conduite stable, pneus qui durent. (819) 921-7869.",
      faqTitle: "Questions fréquentes sur la suspension et l'alignement",
      faq: [
        {
          question: "Comment savoir si j'ai besoin d'un alignement ?",
          answer:
            "Si le véhicule tire d'un côté, si le volant n'est pas centré en ligne droite, ou si vos pneus s'usent inégalement, c'est le signe d'un désalignement.",
        },
        {
          question: "À quelle fréquence faut-il vérifier l'alignement ?",
          answer:
            "Une fois par année ou après avoir frappé un nid-de-poule important — les routes d'hiver au Québec sont dures sur la suspension.",
        },
        {
          question: "Un mauvais alignement use-t-il vraiment les pneus plus vite ?",
          answer:
            "Oui, significativement. Un désalignement peut réduire la durée de vie de vos pneus de plusieurs milliers de kilomètres.",
        },
      ],
    },
    en: {
      name: "Suspension & Alignment",
      slug: "suspension-alignment",
      tagline: "Shocks, steering and alignment",
      heroTitle: "Suspension and Alignment",
      heroHighlight: "in Aylmer",
      intro:
        "Your car pulls to one side, bounces or your tires wear unevenly? We fix suspension, steering and alignment for a stable ride and tires that last.",
      points: [
        "Shocks and springs",
        "Wheel alignment",
        "Steering and ball joints",
        "Steadier ride, longer-lasting tires",
      ],
      metaTitle: "Suspension & Alignment in Aylmer, Gatineau",
      metaDescription:
        "Suspension, steering and wheel alignment repair in Aylmer. Shocks, springs, ball joints. Stable ride, tires that last. (819) 921-7869.",
      faqTitle: "Frequently Asked Questions About Suspension & Alignment",
      faq: [
        {
          question: "How do I know if I need an alignment?",
          answer:
            "If the vehicle pulls to one side, the steering wheel isn't centered when driving straight, or your tires wear unevenly, that's a sign of misalignment.",
        },
        {
          question: "How often should alignment be checked?",
          answer:
            "Once a year, or after hitting a significant pothole — Quebec winter roads are hard on suspension.",
        },
        {
          question: "Does bad alignment really wear tires faster?",
          answer:
            "Yes, significantly. Misalignment can shorten your tires' lifespan by several thousand kilometers.",
        },
      ],
    },
  },
  {
    id: "climatisation",
    icon: "ac",
    category: "repair",
    fr: {
      name: "Climatisation",
      slug: "climatisation",
      tagline: "Recharge et réparation A/C",
      heroTitle: "Climatisation automobile",
      heroHighlight: "à Aylmer",
      intro:
        "L'air climatisé ne refroidit plus ? On diagnostique la fuite, on recharge le système et on répare le tout pour retrouver un habitacle confortable, été comme hiver.",
      points: [
        "Recharge du réfrigérant",
        "Détection et réparation de fuites",
        "Compresseur et composants A/C",
        "Habitacle confortable en toute saison",
      ],
      metaTitle: "Climatisation automobile à Aylmer | Mécano Express",
      metaDescription:
        "Recharge et réparation de climatisation automobile à Aylmer. Détection de fuite, compresseur, réfrigérant. Sans rendez-vous. (819) 921-7869.",
      faqTitle: "Questions fréquentes sur la climatisation",
      faq: [
        {
          question: "Pourquoi mon air climatisé souffle-t-il de l'air tiède ?",
          answer:
            "C'est souvent un manque de réfrigérant causé par une fuite. On détecte la fuite avant de recharger, sinon le problème revient rapidement.",
        },
        {
          question: "À quelle fréquence faut-il recharger la climatisation ?",
          answer:
            "Un système sans fuite ne devrait pas avoir besoin de recharge régulière. Si vous rechargez chaque année, il y a probablement une fuite à réparer.",
        },
        {
          question: "Est-ce normal que ça sente mauvais quand j'ouvre l'air climatisé ?",
          answer:
            "Non, c'est souvent un signe de moisissure dans le système — on peut nettoyer et désinfecter le circuit d'air.",
        },
      ],
    },
    en: {
      name: "Air Conditioning",
      slug: "air-conditioning",
      tagline: "A/C recharge and repair",
      heroTitle: "Car Air Conditioning",
      heroHighlight: "in Aylmer",
      intro:
        "Your A/C isn't cooling anymore? We diagnose the leak, recharge the system and repair everything to bring back a comfortable cabin, summer and winter.",
      points: [
        "Refrigerant recharge",
        "Leak detection and repair",
        "Compressor and A/C components",
        "Comfortable cabin in every season",
      ],
      metaTitle: "Car Air Conditioning in Aylmer (Gatineau) | Mécano Express",
      metaDescription:
        "Car A/C recharge and repair in Aylmer. Leak detection, compressor, refrigerant. Walk-in welcome. (819) 921-7869.",
      faqTitle: "Frequently Asked Questions About Air Conditioning",
      faq: [
        {
          question: "Why is my A/C blowing warm air?",
          answer:
            "It's often low refrigerant caused by a leak. We detect the leak before recharging, otherwise the problem comes back quickly.",
        },
        {
          question: "How often does A/C need to be recharged?",
          answer:
            "A system with no leak shouldn't need regular recharging. If you're recharging every year, there's likely a leak to fix.",
        },
        {
          question: "Is it normal for a bad smell when I turn on the A/C?",
          answer:
            "No, that's often a sign of mold in the system — we can clean and disinfect the air circuit.",
        },
      ],
    },
  },
  {
    id: "echappement",
    icon: "exhaust",
    category: "repair",
    fr: {
      name: "Échappement",
      slug: "echappement",
      tagline: "Silencieux, soudure et systèmes d'échappement",
      heroTitle: "Réparation d'échappement",
      heroHighlight: "à Aylmer",
      intro:
        "Un échappement bruyant ou percé ? Notre atelier fait la soudure générale et la réparation complète des systèmes d'échappement — silencieux, tuyaux et convertisseurs.",
      points: [
        "Silencieux et tuyaux",
        "Soudure générale",
        "Réparation de convertisseur",
        "Réduction du bruit et des émissions",
      ],
      metaTitle: "Réparation d'échappement et soudure à Aylmer",
      metaDescription:
        "Réparation de systèmes d'échappement et soudure générale à Aylmer. Silencieux, tuyaux, convertisseurs. Service expert. (819) 921-7869.",
      faqTitle: "Questions fréquentes sur l'échappement",
      faq: [
        {
          question: "Pourquoi mon échappement est-il plus bruyant qu'avant ?",
          answer:
            "C'est souvent un trou ou une fissure causée par la rouille. Plus on attend, plus la réparation peut s'étendre à d'autres composants.",
        },
        {
          question: "Un échappement percé est-il dangereux ?",
          answer:
            "Oui, il peut laisser entrer des gaz d'échappement dans l'habitacle, surtout si le trou est proche du plancher. À faire réparer rapidement.",
        },
        {
          question: "Faut-il remplacer tout le système ou juste une pièce ?",
          answer:
            "Souvent une seule section (silencieux, tuyau ou convertisseur) suffit. On répare ce qui est nécessaire, pas plus.",
        },
      ],
    },
    en: {
      name: "Exhaust",
      slug: "exhaust",
      tagline: "Mufflers, welding and exhaust systems",
      heroTitle: "Exhaust Repair",
      heroHighlight: "in Aylmer",
      intro:
        "A loud or leaking exhaust? Our shop handles general welding and complete exhaust system repair — mufflers, pipes and converters.",
      points: [
        "Mufflers and pipes",
        "General welding",
        "Converter repair",
        "Less noise and fewer emissions",
      ],
      metaTitle: "Exhaust Repair & Welding in Aylmer | Mécano Express",
      metaDescription:
        "Exhaust system repair and general welding in Aylmer. Mufflers, pipes, converters. Expert service. (819) 921-7869.",
      faqTitle: "Frequently Asked Questions About Exhaust",
      faq: [
        {
          question: "Why is my exhaust louder than before?",
          answer:
            "It's often a hole or crack caused by rust. The longer you wait, the more the repair can spread to other components.",
        },
        {
          question: "Is a leaking exhaust dangerous?",
          answer:
            "Yes, it can let exhaust fumes into the cabin, especially if the hole is near the floor. Have it repaired quickly.",
        },
        {
          question: "Do I need to replace the whole system or just one part?",
          answer:
            "Often just one section (muffler, pipe or converter) is enough. We repair what's needed, not more.",
        },
      ],
    },
  },
  {
    id: "transmission",
    icon: "transmission",
    category: "repair",
    fr: {
      name: "Transmission",
      slug: "transmission",
      tagline: "Entretien et réparation de transmission",
      heroTitle: "Réparation de transmission",
      heroHighlight: "à Aylmer",
      intro:
        "La transmission est au cœur de votre véhicule. Changement de fluide, diagnostic et réparation : on prend soin de la vôtre pour éviter les réparations coûteuses.",
      points: [
        "Changement de fluide de transmission",
        "Diagnostic des problèmes de passage",
        "Réparation et entretien préventif",
        "On évite la grosse facture plus tard",
      ],
      metaTitle: "Réparation de transmission à Aylmer, Gatineau",
      metaDescription:
        "Entretien et réparation de transmission à Aylmer. Changement de fluide, diagnostic, entretien préventif. Estimation honnête. (819) 921-7869.",
      faqTitle: "Questions fréquentes sur la transmission",
      faq: [
        {
          question: "Quels sont les signes d'un problème de transmission ?",
          answer:
            "Des à-coups en changeant de vitesse, un délai avant que le véhicule avance, ou un bruit inhabituel sont des signes à vérifier rapidement.",
        },
        {
          question: "À quelle fréquence faut-il changer le fluide de transmission ?",
          answer:
            "Généralement entre 60 000 et 100 000 km selon le véhicule et le type de transmission — on peut vérifier la recommandation exacte pour le vôtre.",
        },
        {
          question: "Une réparation de transmission coûte-t-elle toujours cher ?",
          answer:
            "Pas nécessairement. Beaucoup de problèmes sont liés au fluide ou à des composants mineurs. On diagnostique avant de parler de gros travaux.",
        },
      ],
    },
    en: {
      name: "Transmission",
      slug: "transmission",
      tagline: "Transmission service and repair",
      heroTitle: "Transmission Repair",
      heroHighlight: "in Aylmer",
      intro:
        "The transmission is at the heart of your vehicle. Fluid change, diagnostics and repair: we take care of yours to avoid costly breakdowns.",
      points: [
        "Transmission fluid change",
        "Shifting problem diagnosis",
        "Repair and preventive maintenance",
        "Avoid the big bill later",
      ],
      metaTitle: "Transmission Repair in Aylmer (Gatineau) | Mécano Express",
      metaDescription:
        "Transmission service and repair in Aylmer. Fluid change, diagnostics, preventive maintenance. Honest estimate. (819) 921-7869.",
      faqTitle: "Frequently Asked Questions About Transmission",
      faq: [
        {
          question: "What are the signs of a transmission problem?",
          answer:
            "Jerking when shifting gears, a delay before the vehicle moves, or an unusual noise are signs to check quickly.",
        },
        {
          question: "How often should transmission fluid be changed?",
          answer:
            "Generally every 60,000 to 100,000 km depending on the vehicle and transmission type — we can check the exact recommendation for yours.",
        },
        {
          question: "Is transmission repair always expensive?",
          answer:
            "Not necessarily. Many issues are related to fluid or minor components. We diagnose before talking about major work.",
        },
      ],
    },
  },
  {
    id: "carrosserie",
    icon: "body",
    category: "repair",
    fr: {
      name: "Carrosserie",
      slug: "carrosserie",
      tagline: "Réparation de carrosserie voiture",
      // "carrosserie gatineau" and "carrossier gatineau" are two distinct
      // 260/month terms — Google does not treat them as synonyms, so both
      // words have to appear, and Gatineau has to stay in the title.
      heroTitle: "Carrosserie et débosselage",
      heroHighlight: "à Gatineau",
      intro:
        "Réparation de carrosserie voiture : pare-chocs abîmé, bosse ou rouille qui perce la tôle. Notre carrossier à Aylmer, à quelques minutes de Gatineau, répare la carrosserie pour redonner à votre véhicule une apparence propre et éviter que les dommages ne s'aggravent.",
      points: [
        "Réparation de pare-chocs et de bosses",
        "Traitement et réparation de rouille",
        "Débosselage et redressement de carrosserie",
        "Estimation honnête avant tout travail",
      ],
      metaTitle: "Carrossier et carrosserie à Gatineau | Mécano Express",
      metaDescription:
        "Carrossier à Gatineau et Aylmer : réparation de carrosserie, bosses, rouille et pare-chocs. Débosselage et estimation honnête. (819) 921-7869.",
      faqTitle: "Questions fréquentes sur la carrosserie",
      faq: [
        {
          question: "Vaut-il la peine de réparer la rouille ou dois-je changer le panneau ?",
          answer:
            "Ça dépend de l'ampleur des dégâts. Une rouille superficielle se traite souvent sans remplacer le panneau; si elle a percé la tôle, le remplacement est parfois plus durable. On vous conseille après inspection.",
        },
        {
          question: "Combien de temps prend une réparation de pare-chocs ?",
          answer:
            "Une réparation mineure (bosse, éraflure) prend souvent une journée. Un remplacement complet peut demander quelques jours selon la disponibilité de la pièce.",
        },
        {
          question: "Est-ce que je peux continuer à conduire avec de la rouille sur la carrosserie ?",
          answer:
            "Dans la plupart des cas oui, mais la rouille progresse avec le temps et l'humidité — plus on attend, plus la réparation peut devenir importante.",
        },
      ],
    },
    en: {
      name: "Body Shop",
      slug: "auto-body",
      tagline: "Body shop — dent and rust repair",
      heroTitle: "Auto Body Shop",
      heroHighlight: "in Gatineau",
      intro:
        "Looking for a car body shop? A damaged bumper, a dent or rust eating through the metal — our auto body shop in Aylmer, minutes from Gatineau, handles collision repair and bodywork to give your vehicle a clean look again and stop the damage from spreading.",
      points: [
        "Bumper and dent repair",
        "Rust treatment and repair",
        "Collision repair and panel straightening",
        "Honest estimate before any work",
      ],
      metaTitle: "Car & Auto Body Shop in Gatineau | Mécano Express",
      metaDescription:
        "Auto body shop in Gatineau and Aylmer: collision repair, dents, rust and bumpers. Panel straightening and an honest estimate. (819) 921-7869.",
      faqTitle: "Frequently Asked Questions About Our Body Shop",
      faq: [
        {
          question: "Is it worth repairing rust or should I replace the panel?",
          answer:
            "It depends on how far it's spread. Surface rust can often be treated without replacing the panel; if it's eaten through the metal, replacement is sometimes more durable. We advise after inspection.",
        },
        {
          question: "How long does a bumper repair take?",
          answer:
            "A minor repair (dent, scratch) often takes a day. A full replacement can take a few days depending on parts availability.",
        },
        {
          question: "Can I keep driving with rust on the body?",
          answer:
            "In most cases yes, but rust spreads over time with moisture — the longer you wait, the bigger the repair can become.",
        },
      ],
    },
  },
];

export function getService(id: string): Service | undefined {
  return services.find((s) => s.id === id);
}

export function getServiceBySlug(
  slug: string,
  locale: Locale
): Service | undefined {
  return services.find((s) => s[locale].slug === slug);
}
