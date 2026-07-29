import type { Locale } from "./i18n";
import type { FAQItem } from "./faq";

export type TowingIntentContent = {
  metaTitle: string;
  metaDescription: string;
  eyebrow: string;
  h1: string;
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

export type TowingIntent = {
  slug: string;
  /** Photo shown in the hero. "photos/<name>" via the Photo component (falls
   * back to the branded placeholder if the file doesn't exist yet), or a
   * root-level static asset already in /public. */
  heroImage: { kind: "photo"; name: string } | { kind: "static"; src: string };
  /** Groups the page for discovery UI (nav shortlist, hub page grid) — zone
   * (where), specialty (what kind of vehicle/service) or situation (price,
   * urgency) rather than one flat undifferentiated list. */
  group: "zone" | "specialty" | "situation";
  fr: TowingIntentContent;
  en: TowingIntentContent;
};

/**
 * One dedicated landing page per Google Ads "Towing" campaign ad group, so
 * each keyword theme lands on copy that matches its exact search intent
 * (message match / Quality Score). "Remorquage Gatineau FR" and "Towing
 * Gatineau EN" intentionally reuse the existing /remorquage-gatineau page
 * instead of a near-duplicate here. Served at /remorquage/<slug>.
 */
export const towingIntents: TowingIntent[] = [
  {
    slug: "aylmer",
    group: "zone",
    heroImage: { kind: "static", src: "/remorquage.webp" },
    fr: {
      metaTitle: "Remorquage à Aylmer — Remorqueuse locale, prix confirmé | Mécano Express",
      metaDescription:
        "Remorquage à Aylmer avec camion basé sur place. Intervention en minutes, prix confirmé au téléphone avant le départ. Appelez le (819) 921-7869.",
      eyebrow: "Remorquage · Aylmer",
      h1: "Remorquage à Aylmer — la remorqueuse est déjà dans votre quartier",
      heroTitle: "Remorquage",
      heroHighlight: "à Aylmer",
      subtitle:
        "Notre camion et notre garage sont basés au 879 chemin Vanier, à Aylmer — pas à l'autre bout de la ville. Un appel, un prix confirmé, et on est là en quelques minutes.",
      trustBar: ["Basés à Aylmer", "Prix confirmé au téléphone", "Disponible jour et nuit"],
      reasonsTitle: "Pourquoi choisir un remorqueur basé à Aylmer",
      reasons: [
        {
          title: "On part déjà d'ici",
          text: "Notre camion est stationné à Aylmer, pas dans un autre secteur de Gatineau. Le temps d'attente s'en trouve réduit d'autant.",
        },
        {
          title: "Le prix, avant le camion",
          text: "Vous donnez votre position, on vous confirme le prix par téléphone. Aucune surprise à l'arrivée du camion.",
        },
        {
          title: "Un garage sur place, pas juste un camion",
          text: "Si votre véhicule a besoin d'une réparation après le remorquage, notre atelier mécanique est au même endroit.",
        },
      ],
      areas: ["Aylmer", "Deschênes", "Lucerne", "Secteur Vanier"],
      ctaCardTitle: "En panne à Aylmer ?",
      ctaCardText: "N'attendez pas sur le bord de la route — appelez, notre camion est déjà proche de vous.",
      serviceName: "Remorquage à Aylmer",
      faqTitle: "Questions fréquentes — Remorquage à Aylmer",
      faq: [
        {
          question: "Combien de temps ça prend pour arriver à Aylmer ?",
          answer:
            "Notre camion est basé au 879 chemin Vanier, en plein Aylmer — le délai moyen est de 10 à 15 minutes selon votre position exacte dans le secteur.",
        },
        {
          question: "Est-ce que je peux avoir un prix avant que le camion parte ?",
          answer:
            "Oui. Décrivez-nous votre position et votre destination au téléphone, on vous confirme le prix avant d'envoyer qui que ce soit.",
        },
        {
          question: "Remorquez-vous aussi les véhicules accidentés ?",
          answer:
            "Oui, on remorque les véhicules en panne comme les véhicules accidentés, tant qu'ils peuvent être chargés en sécurité.",
        },
      ],
    },
    en: {
      metaTitle: "Towing in Aylmer — Local Tow Truck, Price Confirmed | Mécano Express",
      metaDescription:
        "Towing in Aylmer with a truck based on site. Dispatched in minutes, price confirmed by phone before we leave. Call (819) 921-7869.",
      eyebrow: "Towing · Aylmer",
      h1: "Towing in Aylmer — the tow truck is already in your neighborhood",
      heroTitle: "Towing",
      heroHighlight: "in Aylmer",
      subtitle:
        "Our truck and garage are based at 879 chemin Vanier, in Aylmer — not across town. One call, a confirmed price, and we're there in minutes.",
      trustBar: ["Based in Aylmer", "Price confirmed by phone", "Available day and night"],
      reasonsTitle: "Why choose a tow truck based in Aylmer",
      reasons: [
        {
          title: "We're already starting from here",
          text: "Our truck is parked in Aylmer, not somewhere else in Gatineau. That cuts your wait time by that much.",
        },
        {
          title: "The price, before the truck",
          text: "Give us your location, we confirm the price by phone. No surprise when the truck arrives.",
        },
        {
          title: "A real garage on site, not just a truck",
          text: "If your vehicle needs a repair after the tow, our mechanic shop is right there.",
        },
      ],
      areas: ["Aylmer", "Deschênes", "Lucerne", "Vanier area"],
      ctaCardTitle: "Broken down in Aylmer?",
      ctaCardText: "Don't wait on the side of the road — call, our truck is already nearby.",
      serviceName: "Towing in Aylmer",
      faqTitle: "Frequently Asked Questions — Towing in Aylmer",
      faq: [
        {
          question: "How long does it take to get to Aylmer?",
          answer:
            "Our truck is based at 879 chemin Vanier, right in Aylmer — average response time is 10 to 15 minutes depending on your exact location.",
        },
        {
          question: "Can I get a price before the truck leaves?",
          answer:
            "Yes. Tell us your location and destination by phone, and we confirm the price before sending anyone.",
        },
        {
          question: "Do you tow accident-damaged vehicles too?",
          answer:
            "Yes, we tow both breakdowns and accident-damaged vehicles, as long as they can be loaded safely.",
        },
      ],
    },
  },
  {
    slug: "secteurs",
    group: "zone",
    heroImage: { kind: "static", src: "/remorquage.webp" },
    fr: {
      metaTitle: "Remorquage Outaouais — Chelsea, Cantley, Val-des-Monts, Buckingham | Mécano Express",
      metaDescription:
        "Service de remorquage partout en Outaouais : Chelsea, Cantley, Val-des-Monts, Buckingham, Hull. Prix confirmé avant le départ. Appelez le (819) 921-7869.",
      eyebrow: "Remorquage · Outaouais",
      h1: "Remorquage partout en Outaouais, pas juste à Gatineau",
      heroTitle: "Remorquage",
      heroHighlight: "en Outaouais",
      subtitle:
        "Chelsea, Cantley, Val-des-Monts, Buckingham ou Hull — peu importe le secteur, on vous localise et on envoie une remorqueuse. Prix confirmé avant le départ.",
      trustBar: ["Tout l'Outaouais couvert", "Prix confirmé au téléphone", "Camion en route en minutes"],
      reasonsTitle: "Pourquoi nous appeler, où que vous soyez",
      reasons: [
        {
          title: "On ne se limite pas à un seul secteur",
          text: "Contrairement à plusieurs remorqueurs locaux, on dessert l'ensemble de l'Outaouais, des secteurs ruraux aux zones urbaines.",
        },
        {
          title: "Un seul appel, une réponse claire",
          text: "Dites-nous où vous êtes — on vous confirme le prix et le délai avant d'envoyer le camion.",
        },
        {
          title: "Disponibles jour et nuit",
          text: "Une panne ne prévient pas. On répond et on intervient à toute heure, 7 jours sur 7.",
        },
      ],
      areas: ["Chelsea", "Cantley", "Val-des-Monts", "Buckingham", "Hull", "Gatineau"],
      ctaCardTitle: "En panne quelque part en Outaouais ?",
      ctaCardText: "Appelez-nous, on vous localise et on envoie une remorqueuse — peu importe le secteur.",
      serviceName: "Remorquage en Outaouais",
      faqTitle: "Questions fréquentes — Remorquage en Outaouais",
      faq: [
        {
          question: "Desservez-vous Chelsea et Cantley ?",
          answer:
            "Oui, on couvre Chelsea, Cantley, Val-des-Monts, Buckingham, Hull et Gatineau — pas seulement le centre-ville.",
        },
        {
          question: "Le prix change-t-il selon le secteur ?",
          answer:
            "Le prix dépend surtout de la distance à parcourir. On vous le confirme par téléphone avant le départ, peu importe le secteur.",
        },
        {
          question: "Que faire si je ne connais pas mon adresse exacte ?",
          answer:
            "Donnez-nous un point de repère ou activez le partage de position sur votre téléphone — on peut vous localiser à partir de ça.",
        },
      ],
    },
    en: {
      metaTitle: "Towing in Outaouais — Chelsea, Cantley, Val-des-Monts, Buckingham | Mécano Express",
      metaDescription:
        "Towing service across the Outaouais: Chelsea, Cantley, Val-des-Monts, Buckingham, Hull. Price confirmed before dispatch. Call (819) 921-7869.",
      eyebrow: "Towing · Outaouais",
      h1: "Towing across the Outaouais, not just Gatineau",
      heroTitle: "Towing",
      heroHighlight: "Across Outaouais",
      subtitle:
        "Chelsea, Cantley, Val-des-Monts, Buckingham or Hull — wherever you are, we locate you and dispatch a tow truck. Price confirmed before we leave.",
      trustBar: ["All of Outaouais covered", "Price confirmed by phone", "Truck dispatched in minutes"],
      reasonsTitle: "Why call us, wherever you are",
      reasons: [
        {
          title: "We don't stick to one area",
          text: "Unlike many local tow operators, we serve the whole Outaouais region, from rural sectors to urban areas.",
        },
        {
          title: "One call, a clear answer",
          text: "Tell us where you are — we confirm the price and the ETA before the truck leaves.",
        },
        {
          title: "Available day and night",
          text: "Breakdowns don't wait for business hours. We answer and respond any time, 7 days a week.",
        },
      ],
      areas: ["Chelsea", "Cantley", "Val-des-Monts", "Buckingham", "Hull", "Gatineau"],
      ctaCardTitle: "Broken down somewhere in the Outaouais?",
      ctaCardText: "Call us, we'll locate you and dispatch a tow truck — wherever you are.",
      serviceName: "Towing in the Outaouais",
      faqTitle: "Frequently Asked Questions — Towing in the Outaouais",
      faq: [
        {
          question: "Do you serve Chelsea and Cantley?",
          answer:
            "Yes, we cover Chelsea, Cantley, Val-des-Monts, Buckingham, Hull and Gatineau — not just downtown.",
        },
        {
          question: "Does the price change depending on the area?",
          answer:
            "The price mainly depends on the distance to travel. We confirm it by phone before departure, no matter the area.",
        },
        {
          question: "What if I don't know my exact address?",
          answer:
            "Give us a landmark or share your phone's location — that's enough for us to locate you.",
        },
      ],
    },
  },
  {
    slug: "prix",
    group: "situation",
    heroImage: { kind: "static", src: "/remorquage.webp" },
    fr: {
      metaTitle: "Prix d'un remorquage — Devis clair au téléphone | Mécano Express",
      metaDescription:
        "Combien coûte un remorquage ? On vous donne un prix clair par téléphone avant d'envoyer le camion. Aucune surprise sur la facture. (819) 921-7869.",
      eyebrow: "Prix · Remorquage",
      h1: "Combien coûte un remorquage ? On vous le dit avant d'envoyer le camion",
      heroTitle: "Prix du",
      heroHighlight: "Remorquage",
      subtitle:
        "Dites-nous où vous êtes et où vous allez : on vous donne un prix clair au téléphone, pas un « à partir de ». Le prix que vous entendez est le prix final.",
      trustBar: ["Prix donné au téléphone", "Aucun frais caché", "Le prix final, pas un estimé"],
      reasonsTitle: "Pourquoi notre prix est différent",
      reasons: [
        {
          title: "Un vrai prix, pas une fourchette",
          text: "On calcule le prix selon votre position et votre destination avant d'envoyer qui que ce soit — pas une estimation vague.",
        },
        {
          title: "Rien n'est ajouté à l'arrivée",
          text: "Le montant confirmé au téléphone est celui que vous payez. Pas de frais surprise, pas de négociation sur place.",
        },
        {
          title: "Comparez en un seul appel",
          text: "Prenez trente secondes pour comparer notre prix à celui d'un autre remorqueur — c'est aussi rapide qu'un texto.",
        },
      ],
      ctaCardTitle: "Vous voulez connaître le prix avant tout ?",
      ctaCardText: "Un appel suffit — on vous donne un prix clair, tout de suite.",
      serviceName: "Devis de remorquage",
      faqTitle: "Questions fréquentes — Prix d'un remorquage",
      faq: [
        {
          question: "Le prix inclut-il la distance parcourue ?",
          answer:
            "Oui, le prix est calculé selon votre position et votre destination, et on vous le confirme avant l'envoi du camion.",
        },
        {
          question: "Y a-t-il des frais supplémentaires le soir ou la fin de semaine ?",
          answer:
            "On vous donne le prix final au téléphone selon l'heure et la situation — pas de surprise à l'arrivée.",
        },
        {
          question: "Puis-je payer par carte ?",
          answer: "Oui, la carte de débit et de crédit sont acceptées directement avec le chauffeur.",
        },
      ],
    },
    en: {
      metaTitle: "Towing Cost — Clear Price by Phone | Mécano Express",
      metaDescription:
        "How much does a tow cost? We give you a clear price by phone before the truck leaves. No surprises on the bill. Call (819) 921-7869.",
      eyebrow: "Price · Towing",
      h1: "How much does a tow cost? We tell you before the truck leaves",
      heroTitle: "Towing",
      heroHighlight: "Pricing",
      subtitle:
        "Tell us where you are and where you're headed: we give you a clear price on the phone, not a \"starting at\". The price you hear is the final price.",
      trustBar: ["Price given by phone", "No hidden fees", "The final price, not an estimate"],
      reasonsTitle: "Why our pricing is different",
      reasons: [
        {
          title: "A real price, not a range",
          text: "We calculate the price based on your location and destination before sending anyone — not a vague estimate.",
        },
        {
          title: "Nothing gets added on arrival",
          text: "The amount confirmed on the phone is what you pay. No surprise fees, no haggling on site.",
        },
        {
          title: "Compare with one call",
          text: "Take thirty seconds to compare our price to another tow company's — it's as fast as a text.",
        },
      ],
      ctaCardTitle: "Want to know the price first?",
      ctaCardText: "One call is all it takes — we'll give you a clear price right away.",
      serviceName: "Towing quote",
      faqTitle: "Frequently Asked Questions — Towing Cost",
      faq: [
        {
          question: "Does the price include the distance traveled?",
          answer:
            "Yes, the price is calculated based on your location and destination, and we confirm it before the truck is sent.",
        },
        {
          question: "Are there extra fees at night or on weekends?",
          answer:
            "We give you the final price by phone based on the time and situation — no surprise on arrival.",
        },
        {
          question: "Can I pay by card?",
          answer: "Yes, debit and credit cards are accepted directly with the driver.",
        },
      ],
    },
  },
  {
    slug: "near-me",
    group: "situation",
    heroImage: { kind: "static", src: "/remorquage.webp" },
    fr: {
      metaTitle: "Remorquage près de vous — Réponse immédiate | Mécano Express",
      metaDescription:
        "Remorqueuse près de chez vous, disponible jour et nuit. Une vraie personne répond, camion envoyé rapidement. Appelez le (819) 921-7869.",
      eyebrow: "Remorquage à proximité",
      h1: "Une remorqueuse près de vous, disponible tout de suite",
      heroTitle: "Remorquage",
      heroHighlight: "Près de Vous",
      subtitle:
        "Peu importe où vous êtes coincé, on vous localise et on envoie le camion le plus proche. Une vraie personne répond — pas une boîte vocale.",
      trustBar: ["Camion le plus proche envoyé", "Une vraie personne répond", "Disponible jour et nuit"],
      reasonsTitle: "Pourquoi appeler Mécano Express en premier",
      reasons: [
        {
          title: "Une vraie personne répond",
          text: "Pas de robot ni de formulaire à remplir. Vous parlez à quelqu'un qui comprend votre situation tout de suite.",
        },
        {
          title: "Le camion le plus proche",
          text: "On envoie la remorqueuse disponible la plus près de votre position pour réduire le temps d'attente.",
        },
        {
          title: "Prix confirmé avant l'arrivée",
          text: "Vous savez ce que ça va coûter avant même que le camion parte — aucune surprise sur place.",
        },
      ],
      ctaCardTitle: "Coincé sur le bord de la route ?",
      ctaCardText: "Appelez maintenant — on vous localise et on envoie le camion le plus proche.",
      serviceName: "Remorquage à proximité",
      faqTitle: "Questions fréquentes — Remorquage à proximité",
      faq: [
        {
          question: "À quelle vitesse pouvez-vous arriver ?",
          answer:
            "On envoie le camion disponible le plus proche de votre position. La plupart des appels à Aylmer, Gatineau ou Hull sont traités en 10 à 20 minutes.",
        },
        {
          question: "Dois-je connaître mon adresse exacte ?",
          answer:
            "Non, un point de repère à proximité ou la position de votre téléphone suffit. Décrivez-nous simplement ce que vous voyez autour de vous.",
        },
        {
          question: "Le prix donné au téléphone est-il final ?",
          answer:
            "Oui. Le prix que vous entendez au téléphone est celui que vous payez — aucun ajout à l'arrivée.",
        },
      ],
    },
    en: {
      metaTitle: "Towing Near Me — Fast, Real Response | Mécano Express",
      metaDescription:
        "Tow truck near you, available day and night. A real person answers, truck dispatched fast. Call (819) 921-7869.",
      eyebrow: "Towing near you",
      h1: "A tow truck near you, available right now",
      heroTitle: "Towing",
      heroHighlight: "Near You",
      subtitle:
        "Wherever you're stuck, we locate you and send the closest available truck. A real person answers — not a voicemail box.",
      trustBar: ["Closest truck dispatched", "A real person answers", "Available day and night"],
      reasonsTitle: "Why call Mécano Express first",
      reasons: [
        {
          title: "A real person answers",
          text: "No bot, no form to fill out. You talk to someone who understands your situation right away.",
        },
        {
          title: "The closest truck",
          text: "We dispatch the nearest available tow truck to your position to cut down your wait.",
        },
        {
          title: "Price confirmed before arrival",
          text: "You know what it costs before the truck even leaves — no surprises on site.",
        },
      ],
      ctaCardTitle: "Stuck on the side of the road?",
      ctaCardText: "Call now — we'll locate you and send the nearest truck.",
      serviceName: "Towing near me",
      faqTitle: "Frequently Asked Questions — Towing Near Me",
      faq: [
        {
          question: "How fast can you get here?",
          answer:
            "We dispatch the closest available truck to your location — most calls in Aylmer, Gatineau or Hull are answered within 10-20 minutes.",
        },
        {
          question: "Do I need to know my exact address?",
          answer: "No, a nearby landmark or your phone's location works. Just tell us what you see around you.",
        },
        {
          question: "Is the quote given on the phone final?",
          answer: "Yes. The price you hear on the phone is what you pay — no add-ons on arrival.",
        },
      ],
    },
  },
  {
    slug: "poids-lourd",
    group: "specialty",
    heroImage: { kind: "static", src: "/camionlourd.webp" },
    fr: {
      metaTitle: "Remorquage poids lourd à Gatineau | Mécano Express",
      metaDescription:
        "Remorquage et dépannage de véhicules lourds et de camions à Gatineau et en Outaouais. Équipement adapté, intervention sécuritaire. (819) 921-7869.",
      eyebrow: "Remorquage · Poids lourd",
      h1: "Remorquage poids lourd — l'équipement pour vos camions",
      heroTitle: "Remorquage",
      heroHighlight: "Poids Lourd",
      subtitle:
        "Camion, machinerie ou véhicule lourd immobilisé ? Notre flotte spécialisée intervient en sécurité, partout en Outaouais.",
      trustBar: ["Flotte spécialisée poids lourd", "Prix confirmé au téléphone", "Intervention sécuritaire"],
      reasonsTitle: "Pourquoi nous confier votre véhicule lourd",
      reasons: [
        {
          title: "Équipement adapté au poids lourd",
          text: "Nos camions sont conçus pour le remorquage de véhicules lourds et de machinerie, pas juste des voitures.",
        },
        {
          title: "Une équipe qui connaît le poids lourd",
          text: "Le dépannage d'un camion demande une expertise différente. Notre équipe sait manœuvrer en sécurité.",
        },
        {
          title: "Un prix clair avant l'intervention",
          text: "On confirme le prix par téléphone selon votre situation avant d'envoyer l'équipement sur place.",
        },
      ],
      ctaCardTitle: "Camion ou véhicule lourd immobilisé ?",
      ctaCardText: "Appelez-nous — on envoie l'équipement adapté à votre situation.",
      serviceName: "Remorquage poids lourd",
      faqTitle: "Questions fréquentes — Remorquage poids lourd",
      faq: [
        {
          question: "Quel poids maximum pouvez-vous remorquer ?",
          answer:
            "Notre flotte est équipée pour les camions et véhicules lourds commerciaux. Décrivez-nous votre véhicule au téléphone pour qu'on envoie l'équipement adapté.",
        },
        {
          question: "Intervenez-vous sur l'autoroute ?",
          answer:
            "Oui, avec les mesures de sécurité appropriées pour protéger le conducteur et les autres usagers de la route.",
        },
        {
          question: "Faites-vous aussi la machinerie lourde ?",
          answer: "Oui, on remorque aussi la machinerie immobilisée, selon la disponibilité de l'équipement.",
        },
      ],
    },
    en: {
      metaTitle: "Heavy Truck Towing in Gatineau | Mécano Express",
      metaDescription:
        "Heavy vehicle and truck towing and recovery in Gatineau and the Outaouais. Proper equipment, safe intervention. Call (819) 921-7869.",
      eyebrow: "Towing · Heavy truck",
      h1: "Heavy truck towing — the right equipment for your rig",
      heroTitle: "Heavy Truck",
      heroHighlight: "Towing",
      subtitle:
        "Truck, machinery or heavy vehicle stuck? Our specialized fleet responds safely, anywhere in the Outaouais.",
      trustBar: ["Specialized heavy-duty fleet", "Price confirmed by phone", "Safe intervention"],
      reasonsTitle: "Why trust us with your heavy vehicle",
      reasons: [
        {
          title: "Equipment built for heavy duty",
          text: "Our trucks are built for towing heavy vehicles and machinery, not just cars.",
        },
        {
          title: "A team that knows heavy trucks",
          text: "Recovering a heavy truck takes different expertise. Our team knows how to maneuver safely.",
        },
        {
          title: "A clear price before we respond",
          text: "We confirm the price by phone based on your situation before sending equipment to you.",
        },
      ],
      ctaCardTitle: "Truck or heavy vehicle stuck?",
      ctaCardText: "Call us — we'll send the right equipment for your situation.",
      serviceName: "Heavy truck towing",
      faqTitle: "Frequently Asked Questions — Heavy Truck Towing",
      faq: [
        {
          question: "What's the maximum weight you can tow?",
          answer:
            "Our fleet is equipped for commercial trucks and heavy vehicles. Describe your vehicle by phone so we can send the right equipment.",
        },
        {
          question: "Do you respond on the highway?",
          answer: "Yes, with the proper safety measures to protect the driver and other road users.",
        },
        {
          question: "Do you also handle heavy machinery?",
          answer: "Yes, we also tow stuck machinery, depending on equipment availability.",
        },
      ],
    },
  },
  {
    slug: "serrurier-automobile",
    group: "specialty",
    heroImage: { kind: "static", src: "/remorquage.webp" },
    fr: {
      metaTitle: "Clés verrouillées dans l'auto à Gatineau | Mécano Express",
      metaDescription:
        "Clés verrouillées dans votre véhicule à Gatineau ou Aylmer ? Déverrouillage rapide et sécuritaire sur place, sans dommage. (819) 921-7869.",
      eyebrow: "Serrurier automobile",
      h1: "Clés verrouillées dans l'auto ? On vous ouvre sur place",
      heroTitle: "Déverrouillage",
      heroHighlight: "Automobile",
      subtitle:
        "Un moment d'inattention arrive à tout le monde. On se déplace pour déverrouiller votre véhicule rapidement, sans endommager la serrure ni la carrosserie.",
      trustBar: ["Intervention sur place", "Aucun dommage au véhicule", "Prix confirmé au téléphone"],
      reasonsTitle: "Pourquoi nous appeler pour un véhicule verrouillé",
      reasons: [
        {
          title: "Technique sécuritaire, pas improvisée",
          text: "On utilise les bons outils pour ouvrir votre véhicule sans abîmer le joint de porte ni la peinture.",
        },
        {
          title: "On se déplace où vous êtes",
          text: "Stationnement, entrée de garage ou bord de route — on vient directement à vous.",
        },
        {
          title: "Un prix confirmé avant de venir",
          text: "Vous savez le prix par téléphone avant qu'on se déplace, sans surprise à l'arrivée.",
        },
      ],
      ctaCardTitle: "Clés verrouillées dans le véhicule ?",
      ctaCardText: "Appelez-nous, on vous déverrouille rapidement et sans dommage.",
      serviceName: "Serrurier automobile",
      faqTitle: "Questions fréquentes — Serrurier automobile",
      faq: [
        {
          question: "Pouvez-vous ouvrir n'importe quel modèle de voiture ?",
          answer:
            "On peut ouvrir la grande majorité des véhicules sans endommager la serrure. Dites-nous la marque et le modèle au téléphone.",
        },
        {
          question: "Est-ce que ça abîme la peinture ou le joint de porte ?",
          answer:
            "Non, on utilise des outils conçus pour ce genre d'intervention, sans marquer ni endommager le véhicule.",
        },
        {
          question: "Et si les clés sont perdues, pas juste verrouillées à l'intérieur ?",
          answer:
            "Pour une clé perdue (pas juste verrouillée dans l'auto), il faut généralement un serrurier spécialisé en programmation — appelez-nous, on vous oriente.",
        },
      ],
    },
    en: {
      metaTitle: "Car Lockout Service in Gatineau | Mécano Express",
      metaDescription:
        "Locked your keys in your car in Gatineau or Aylmer? Fast, safe lockout service on site, no damage. Call (819) 921-7869.",
      eyebrow: "Car lockout",
      h1: "Keys locked in your car? We'll get you back in",
      heroTitle: "Car",
      heroHighlight: "Lockout",
      subtitle:
        "It happens to everyone. We come to you and unlock your vehicle quickly, without damaging the door seal or the paint.",
      trustBar: ["On-site service", "No damage to your vehicle", "Price confirmed by phone"],
      reasonsTitle: "Why call us for a lockout",
      reasons: [
        {
          title: "Safe technique, not guesswork",
          text: "We use the right tools to open your vehicle without damaging the door seal or the paint.",
        },
        {
          title: "We come to you",
          text: "Parking lot, driveway or roadside — we come directly to your location.",
        },
        {
          title: "Price confirmed before we come",
          text: "You know the price by phone before we head out, no surprise on arrival.",
        },
      ],
      ctaCardTitle: "Keys locked in your vehicle?",
      ctaCardText: "Call us, we'll unlock it fast and without damage.",
      serviceName: "Car lockout",
      faqTitle: "Frequently Asked Questions — Car Lockout",
      faq: [
        {
          question: "Can you open any car model?",
          answer:
            "We can open the vast majority of vehicles without damaging the lock. Tell us the make and model by phone.",
        },
        {
          question: "Does it damage the paint or door seal?",
          answer: "No, we use tools designed for this kind of job, without marking or damaging the vehicle.",
        },
        {
          question: "What if the keys are lost, not just locked inside?",
          answer:
            "For a lost key (not just locked inside), you generally need a locksmith specialized in key programming — call us and we'll point you in the right direction.",
        },
      ],
    },
  },
  {
    slug: "demarrage-batterie",
    group: "specialty",
    heroImage: { kind: "static", src: "/remorquage.webp" },
    fr: {
      metaTitle: "Survoltage de batterie à Gatineau | Mécano Express",
      metaDescription:
        "Batterie à plat ? Service de survoltage et aide au démarrage sur place à Gatineau et Aylmer. Rapide, sans tracas. (819) 921-7869.",
      eyebrow: "Survoltage · Batterie",
      h1: "Batterie à plat ? Survoltage sur place en quelques minutes",
      heroTitle: "Survoltage",
      heroHighlight: "Batterie",
      subtitle:
        "Voiture qui ne démarre pas, surtout par temps froid ? On vient booster votre batterie directement où vous êtes.",
      trustBar: ["Intervention rapide", "Aide au démarrage sur place", "Prix confirmé au téléphone"],
      reasonsTitle: "Pourquoi appeler pour un survoltage",
      reasons: [
        {
          title: "On vient à vous, peu importe où",
          text: "Stationnement, entrée résidentielle ou bord de route — on se déplace avec l'équipement nécessaire.",
        },
        {
          title: "On vérifie, pas juste on démarre",
          text: "On s'assure que le démarrage tient et on vous avise si la batterie doit être remplacée.",
        },
        {
          title: "Un prix clair avant l'intervention",
          text: "Vous connaissez le prix par téléphone avant qu'on se déplace.",
        },
      ],
      ctaCardTitle: "Batterie à plat, ça ne démarre pas ?",
      ctaCardText: "Appelez-nous, on vient vous booster rapidement où que vous soyez.",
      serviceName: "Survoltage de batterie",
      faqTitle: "Questions fréquentes — Survoltage de batterie",
      faq: [
        {
          question: "Combien de temps prend un survoltage ?",
          answer:
            "Habituellement 10 à 15 minutes une fois sur place, incluant la vérification que le moteur reste démarré.",
        },
        {
          question: "Ma batterie est-elle morte ou juste déchargée ?",
          answer:
            "On vérifie ça sur place. Si le survoltage ne tient pas, on vous informe que la batterie doit probablement être remplacée.",
        },
        {
          question: "Est-ce dangereux pour l'électronique de ma voiture ?",
          answer:
            "Non, quand c'est fait correctement avec le bon équipement, ça ne pose aucun risque pour l'électronique du véhicule.",
        },
      ],
    },
    en: {
      metaTitle: "Battery Boost Service in Gatineau | Mécano Express",
      metaDescription:
        "Dead battery? Boost and jump-start service on site in Gatineau and Aylmer. Fast, no hassle. Call (819) 921-7869.",
      eyebrow: "Boost · Battery",
      h1: "Dead battery? We'll boost you in minutes, on site",
      heroTitle: "Battery",
      heroHighlight: "Boost",
      subtitle:
        "Car won't start, especially in the cold? We come and jump-start your battery right where you are.",
      trustBar: ["Fast response", "On-site jump-start", "Price confirmed by phone"],
      reasonsTitle: "Why call for a boost",
      reasons: [
        {
          title: "We come to you, wherever you are",
          text: "Parking lot, driveway or roadside — we bring the equipment to you.",
        },
        {
          title: "We check, not just start",
          text: "We make sure the start holds and let you know if the battery needs replacing.",
        },
        {
          title: "A clear price before we come",
          text: "You know the price by phone before we head out.",
        },
      ],
      ctaCardTitle: "Dead battery, won't start?",
      ctaCardText: "Call us, we'll boost you fast wherever you are.",
      serviceName: "Battery boost",
      faqTitle: "Frequently Asked Questions — Battery Boost",
      faq: [
        {
          question: "How long does a boost take?",
          answer: "Usually 10 to 15 minutes once on site, including making sure the engine stays running.",
        },
        {
          question: "Is my battery dead or just discharged?",
          answer:
            "We check that on site. If the boost doesn't hold, we'll let you know the battery likely needs replacing.",
        },
        {
          question: "Is it risky for my car's electronics?",
          answer: "No, when done properly with the right equipment, it poses no risk to the vehicle's electronics.",
        },
      ],
    },
  },
  {
    slug: "specialise",
    group: "specialty",
    heroImage: { kind: "static", src: "/remorquage.webp" },
    fr: {
      metaTitle: "Remorquage moto, VR, roulotte et bateau | Mécano Express",
      metaDescription:
        "Remorquage spécialisé pour moto, VR, roulotte et bateau à Gatineau et en Outaouais. Équipement adapté, transport sécuritaire. (819) 921-7869.",
      eyebrow: "Remorquage spécialisé",
      h1: "Remorquage spécialisé — moto, VR, roulotte et bateau",
      heroTitle: "Remorquage",
      heroHighlight: "Spécialisé",
      subtitle:
        "Vos véhicules récréatifs demandent un équipement différent d'une voiture. On transporte moto, VR, roulotte et bateau en toute sécurité, sans dommage.",
      trustBar: ["Équipement adapté par véhicule", "Transport sans dommage", "Prix confirmé au téléphone"],
      reasonsTitle: "Pourquoi nous confier un véhicule récréatif",
      reasons: [
        {
          title: "Le bon équipement pour chaque véhicule",
          text: "Moto, VR, roulotte ou bateau : chacun a ses points d'attache et ses précautions. On adapte l'équipement en conséquence.",
        },
        {
          title: "Transport sécuritaire, sans improviser",
          text: "On sécurise correctement votre véhicule avant le départ pour éviter tout dommage en route.",
        },
        {
          title: "Un prix confirmé avant le déplacement",
          text: "Décrivez-nous votre véhicule et votre trajet, on vous confirme le prix par téléphone.",
        },
      ],
      ctaCardTitle: "Besoin de transporter un véhicule récréatif ?",
      ctaCardText: "Appelez-nous — moto, VR, roulotte ou bateau, on a l'équipement qu'il faut.",
      serviceName: "Remorquage spécialisé",
      faqTitle: "Questions fréquentes — Remorquage spécialisé",
      faq: [
        {
          question: "Pouvez-vous remorquer une remorque de bateau attelée ?",
          answer:
            "Oui, on transporte le bateau avec sa remorque ou seul, selon la situation. Décrivez-nous votre équipement au téléphone.",
        },
        {
          question: "Comment protégez-vous une moto pendant le transport ?",
          answer:
            "On utilise des sangles et un support adaptés aux motos pour éviter tout dommage à la carrosserie ou à la suspension.",
        },
        {
          question: "Puis-je faire remorquer un VR sur une longue distance ?",
          answer:
            "Oui. Appelez-nous avec les détails (dimensions, poids, distance) pour qu'on vous confirme un prix précis.",
        },
      ],
    },
    en: {
      metaTitle: "Motorcycle, RV, Trailer & Boat Towing | Mécano Express",
      metaDescription:
        "Specialized towing for motorcycles, RVs, trailers and boats in Gatineau and the Outaouais. Right equipment, safe transport. Call (819) 921-7869.",
      eyebrow: "Specialized towing",
      h1: "Specialized towing — motorcycle, RV, trailer and boat",
      heroTitle: "Specialized",
      heroHighlight: "Towing",
      subtitle:
        "Your recreational vehicles need different equipment than a car. We transport motorcycles, RVs, trailers and boats safely, without damage.",
      trustBar: ["Equipment matched to your vehicle", "Damage-free transport", "Price confirmed by phone"],
      reasonsTitle: "Why trust us with a recreational vehicle",
      reasons: [
        {
          title: "The right equipment for each vehicle",
          text: "Motorcycle, RV, trailer or boat: each has its own tie-down points and precautions. We adapt the equipment accordingly.",
        },
        {
          title: "Safe transport, never improvised",
          text: "We properly secure your vehicle before departure to prevent any damage on the road.",
        },
        {
          title: "A confirmed price before we move",
          text: "Describe your vehicle and route, and we'll confirm the price by phone.",
        },
      ],
      ctaCardTitle: "Need to transport a recreational vehicle?",
      ctaCardText: "Call us — motorcycle, RV, trailer or boat, we have the right equipment.",
      serviceName: "Specialized towing",
      faqTitle: "Frequently Asked Questions — Specialized Towing",
      faq: [
        {
          question: "Can you tow a boat on its trailer?",
          answer:
            "Yes, we transport the boat with its trailer or on its own, depending on the situation. Describe your equipment by phone.",
        },
        {
          question: "How do you protect a motorcycle during transport?",
          answer:
            "We use straps and a stand designed for motorcycles to prevent any damage to the bodywork or suspension.",
        },
        {
          question: "Can you tow an RV over a long distance?",
          answer:
            "Yes. Call us with the details (dimensions, weight, distance) so we can confirm an accurate price.",
        },
      ],
    },
  },
];

export function getTowingIntent(slug: string): TowingIntent | undefined {
  return towingIntents.find((i) => i.slug === slug);
}

export function getTowingIntentContent(slug: string, locale: Locale) {
  const intent = getTowingIntent(slug);
  if (!intent) return undefined;
  return { intent, content: intent[locale] };
}
