import type { Locale } from "./i18n";

export type Dictionary = {
  nav: {
    home: string;
    services: string;
    about: string;
    contact: string;
    towingCategory: string;
    mechanicCategory: string;
    viewAllServices: string;
  };
  cta: { call: string; callNow: string; directions: string; allServices: string };
  badges: { walkIn: string; openSat: string; local: string };
  hero: {
    eyebrow: string;
    title: string;
    subtitle: string;
    trust1: string;
    trust2: string;
    trust3: string;
  };
  heroSlides: {
    id: string;
    tag: string;
    title: string;
    highlight: string;
    description: string;
  }[];
  heroStats: { arrivalLabel: string; hoursLabel: string; areaLabel: string };
  heroSlideLabel: string;
  services: {
    eyebrow: string;
    title: string;
    heroTitle: string;
    heroHighlight: string;
    subtitle: string;
    learnMore: string;
  };
  why: {
    eyebrow: string;
    title: string;
    items: { title: string; text: string }[];
  };
  area: { eyebrow: string; title: string; subtitle: string };
  contact: {
    eyebrow: string;
    title: string;
    subtitle: string;
    hours: string;
    address: string;
    phone: string;
    hoursNote: string;
  };
  footer: { rights: string; tagline: string; nav: string; hours: string; contact: string; privacy: string };
  serviceDetail: { included: string; ctaTitle: string; ctaText: string; back: string };
  openStatus: { openNow: string; closedNow: string; closedNote: string; available247: string };
  campaignSplit: {
    eyebrow: string;
    towingTitle: string;
    towingText: string;
    towingCta: string;
    repairTitle: string;
    repairText: string;
    repairCta: string;
  };
};

export const dictionaries: Record<Locale, Dictionary> = {
  fr: {
    nav: {
      home: "Accueil",
      services: "Services",
      about: "À propos",
      contact: "Contact",
      towingCategory: "Remorquage",
      mechanicCategory: "Mécanicien",
      viewAllServices: "Tous les services",
    },
    cta: {
      call: "Appeler",
      callNow: "Appelez maintenant",
      directions: "Itinéraire",
      allServices: "Tous nos services",
    },
    badges: { walkIn: "Sans rendez-vous", openSat: "Ouvert le samedi", local: "Garage local à Aylmer" },
    hero: {
      eyebrow: "Garage & mécanique · Aylmer, Gatineau",
      title: "Votre garage de confiance à Aylmer",
      subtitle:
        "Mécanique automobile honnête et rapide, sans rendez-vous. Au 879 chemin Vanier — passez nous voir ou appelez.",
      trust1: "Sans rendez-vous",
      trust2: "Ouvert le samedi",
      trust3: "Mécaniciens d'expérience",
    },
    heroSlides: [
      {
        id: "remorquage",
        tag: "Service rapide",
        title: "Remorquage Express",
        highlight: "24/7 à Gatineau",
        description:
          "Un service de remorquage rapide, fiable et disponible 24h/24, 7j/7 partout à Gatineau et ses environs. Notre équipe intervient en quelques minutes pour assurer votre sécurité et transporter votre véhicule en toute tranquillité.",
      },
      {
        id: "lourd",
        tag: "Spécialité",
        title: "Remorquage",
        highlight: "Camion Lourd",
        description:
          "Une flotte spécialisée pour le dépannage et le transport de vos véhicules lourds. Équipement de pointe et intervention sécuritaire partout en Outaouais pour poids lourds et machinerie.",
      },
      {
        id: "mecanique",
        tag: "Garage local",
        title: "Mécanique",
        highlight: "& Freins",
        description:
          "Diagnostic rapide, réparation de freins et mécanique générale sans rendez-vous. Moins cher qu'un concessionnaire avec une garantie d'un an sur toutes les pièces et la main-d'œuvre.",
      },
    ],
    heroStats: { arrivalLabel: "Arrivée moyenne", hoursLabel: "Jour et nuit", areaLabel: "Outaouais" },
    heroSlideLabel: "Aller à la diapositive",
    services: {
      eyebrow: "Nos services",
      title: "Un garage complet, un seul endroit",
      heroTitle: "Nos",
      heroHighlight: "Services",
      subtitle:
        "Du changement d'huile à la transmission, nos mécaniciens s'occupent de tout — au bon prix, sans vous vendre l'inutile.",
      learnMore: "En savoir plus",
    },
    why: {
      eyebrow: "Pourquoi nous choisir",
      title: "Le garage qui joue franc jeu",
      items: [
        { title: "Sans rendez-vous", text: "Passez quand ça vous convient. Diagnostic rapide sans longue attente." },
        { title: "Moins cher que le concessionnaire", text: "Même qualité de travail et d'équipement, mais à un prix beaucoup plus abordable." },
        { title: "Garantie 1 an sur pièces", text: "On offre une vraie garantie. Toutes nos pièces et réparations sont couvertes 1 an." },
        { title: "Devis clair avant travaux", text: "Inspection et estimation gratuites. Aucune surprise sur votre facture finale." },
      ],
    },
    area: {
      eyebrow: "Zones desservies",
      title: "Au service d'Aylmer, Hull et Gatineau",
      subtitle:
        "Situés au 879 chemin Vanier à Aylmer, nous accueillons les automobilistes de tout le secteur ouest de Gatineau et d'Ottawa.",
    },
    contact: {
      eyebrow: "Nous joindre",
      title: "Passez nous voir ou appelez",
      subtitle: "Une question, un bruit suspect, un voyant allumé ? Le plus simple, c'est d'appeler.",
      hours: "Heures d'ouverture",
      address: "Adresse",
      phone: "Téléphone",
      hoursNote: "Sans rendez-vous pendant les heures d'ouverture",
    },
    footer: {
      rights: "Tous droits réservés.",
      tagline: "Garage & mécanique automobile à Aylmer, Gatineau. Service honnête, sans rendez-vous.",
      nav: "Navigation",
      hours: "Heures",
      contact: "Contact",
      privacy: "Politique de confidentialité",
    },
    serviceDetail: {
      included: "Ce que ça comprend",
      ctaTitle: "Besoin de ce service ?",
      ctaText: "Passez nous voir sans rendez-vous ou appelez pour une estimation honnête.",
      back: "Tous les services",
    },
    openStatus: {
      openNow: "Ouvert maintenant — on répond tout de suite",
      closedNow: "Fermé pour l'instant",
      closedNote: "Laissez un message, on vous rappelle dès l'ouverture",
      available247: "Disponible 24h/24, 7 jours sur 7",
    },
    campaignSplit: {
      eyebrow: "Deux services, une équipe",
      towingTitle: "Besoin d'un remorquage ?",
      towingText:
        "En panne sur la route ? On vous localise et on arrive vite — Gatineau, Aylmer, Hull et Buckingham.",
      towingCta: "Remorquage rapide",
      repairTitle: "Besoin d'une réparation ?",
      repairText:
        "Freins, huile, diagnostic et plus. Diagnostic honnête, prix confirmé avant tout travail.",
      repairCta: "Voir le garage",
    },
  },
  en: {
    nav: {
      home: "Home",
      services: "Services",
      about: "About",
      contact: "Contact",
      towingCategory: "Towing",
      mechanicCategory: "Mechanic",
      viewAllServices: "All services",
    },
    cta: {
      call: "Call",
      callNow: "Call now",
      directions: "Directions",
      allServices: "All our services",
    },
    badges: { walkIn: "No appointment", openSat: "Open Saturdays", local: "Local garage in Aylmer" },
    hero: {
      eyebrow: "Garage & mechanic · Aylmer, Gatineau",
      title: "Your trusted garage in Aylmer",
      subtitle:
        "Honest, fast auto mechanic — no appointment needed. At 879 chemin Vanier — drop in or give us a call.",
      trust1: "No appointment",
      trust2: "Open Saturdays",
      trust3: "Experienced mechanics",
    },
    heroSlides: [
      {
        id: "remorquage",
        tag: "Fast service",
        title: "Express Towing",
        highlight: "24/7 in Gatineau",
        description:
          "A fast, reliable towing service available 24/7 across Gatineau and the surrounding area. Our team arrives within minutes to keep you safe and transport your vehicle with total peace of mind.",
      },
      {
        id: "lourd",
        tag: "Specialty",
        title: "Heavy Truck",
        highlight: "Towing",
        description:
          "A specialized fleet for the recovery and transport of your heavy vehicles. Advanced equipment and safe intervention across Outaouais for heavy trucks and machinery.",
      },
      {
        id: "mecanique",
        tag: "Local garage",
        title: "Mechanic",
        highlight: "& Brakes",
        description:
          "Fast diagnostics, brake repair and general mechanical work, no appointment needed. Cheaper than a dealership with a one-year warranty on all parts and labor.",
      },
    ],
    heroStats: { arrivalLabel: "Average arrival", hoursLabel: "Day and night", areaLabel: "Outaouais" },
    heroSlideLabel: "Go to slide",
    services: {
      eyebrow: "Our services",
      title: "A full-service garage, one place",
      heroTitle: "Our",
      heroHighlight: "Services",
      subtitle:
        "From an oil change to your transmission, our mechanics handle it all — at a fair price, without selling you what you don't need.",
      learnMore: "Learn more",
    },
    why: {
      eyebrow: "Why choose us",
      title: "The garage that plays it straight",
      items: [
        { title: "No appointment", text: "Drop in whenever it suits you. Fast diagnostics without the wait." },
        { title: "Cheaper than the dealer", text: "Same quality repair and equipment, but at a much more honest price." },
        { title: "1-Year Warranty on parts", text: "We offer a real guarantee. All our parts and repairs are backed for 1 year." },
        { title: "Clear quote before work", text: "Free inspection and estimate. Absolutely no surprises on your final bill." },
      ],
    },
    area: {
      eyebrow: "Areas served",
      title: "Serving Aylmer, Hull and Gatineau",
      subtitle:
        "Located at 879 chemin Vanier in Aylmer, we welcome drivers from all of western Gatineau and Ottawa.",
    },
    contact: {
      eyebrow: "Get in touch",
      title: "Drop in or give us a call",
      subtitle: "A question, a strange noise, a warning light? The easiest thing is to call.",
      hours: "Opening hours",
      address: "Address",
      phone: "Phone",
      hoursNote: "Walk-ins welcome during opening hours",
    },
    footer: {
      rights: "All rights reserved.",
      tagline: "Auto garage & mechanic in Aylmer, Gatineau. Honest service, no appointment.",
      nav: "Navigation",
      hours: "Hours",
      contact: "Contact",
      privacy: "Privacy Policy",
    },
    serviceDetail: {
      included: "What's included",
      ctaTitle: "Need this service?",
      ctaText: "Drop in without an appointment or call for an honest estimate.",
      back: "All services",
    },
    openStatus: {
      openNow: "Open now — we're answering calls",
      closedNow: "Closed for now",
      closedNote: "Leave a message, we'll call you back when we open",
      available247: "Available 24/7",
    },
    campaignSplit: {
      eyebrow: "Two services, one team",
      towingTitle: "Need a tow?",
      towingText:
        "Broken down on the road? We locate you and arrive fast — Gatineau, Aylmer, Hull and Buckingham.",
      towingCta: "Fast towing",
      repairTitle: "Need a repair?",
      repairText:
        "Brakes, oil, diagnostics and more. Honest diagnostic, price confirmed before any work.",
      repairCta: "See the garage",
    },
  },
};

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}
