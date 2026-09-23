import type { Locale } from "./i18n";
import type { FAQItem } from "./faq";

export type TowingIntentContent = {
  metaTitle: string;
  metaDescription: string;
  eyebrow: string;
  heroTitle: string;
  heroHighlight: string;
  subtitle: string;
  trustBar: string[];
  reasonsTitle: string;
  reasons: { title: string; text: string }[];
  /** Optional highlighted price/quote panel. Used by the "prix" intent to
   * answer "how much does it cost" head-on with the free-quote-by-phone
   * message (one clear final price, no surprise, compare us) — no numbers. */
  priceQuote?: {
    title: string;
    text: string;
    points: string[];
  };
  /**
   * "What determines your price" breakdown, shown under the quote panel on
   * the price intent. Google rates this page's landing page experience BELOW
   * AVERAGE on the generic price keywords ("prix remorquage voiture",
   * "cout remorquage voiture") because the page asks "how much does it cost"
   * and answers "call us" — no figure anywhere. This block answers with the
   * real cost drivers instead, so the visitor learns something concrete.
   *
   * Every claim here must already be stated elsewhere on the page — never
   * invent a pricing policy. The actual fix is still a real number: add a
   * starting price or a range to priceQuote once the client supplies their
   * tariff. Until then this is a partial answer, not a complete one.
   */
  priceFactors?: {
    title: string;
    intro: string;
    items: { title: string; text: string }[];
    footnote: string;
  };
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
  /**
   * Ads-only landing pages: their search intent is already owned by a
   * stronger page (/garage, /remorquage, /garage/freins),
   * so indexing them would split the signal between near-duplicates. They
   * stay live and linked for paid traffic, but ship robots "noindex, follow"
   * and are kept out of the sitemap. Defaults to true.
   */
  indexable?: boolean;
  fr: TowingIntentContent;
  en: TowingIntentContent;
};

/**
 * One dedicated landing page per Google Ads "Towing" campaign ad group, so
 * each keyword theme lands on copy that matches its exact search intent
 * (message match / Quality Score). "Remorquage Gatineau FR" and "Towing
 * Gatineau EN" intentionally reuse the existing /remorquage page
 * instead of a near-duplicate here. Served at /remorquage/<slug>.
 */
export const towingIntents: TowingIntent[] = [
  {
    slug: "aylmer",
    group: "zone",
    heroImage: { kind: "static", src: "/remorquage.webp" },
    fr: {
      metaTitle: "Remorquage à Aylmer — Remorqueuse locale, prix confirmé",
      metaDescription:
        "Remorquage à Aylmer avec camion basé sur place. Intervention en minutes, prix confirmé au téléphone avant le départ. Appelez le (819) 921-7869.",
      eyebrow: "Remorquage · Aylmer",
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
      areas: ["Aylmer", "Gatineau", "Hull"],
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
            "Oui. Décrivez-nous votre position dans Aylmer et votre destination au téléphone, on vous confirme le prix avant d'envoyer qui que ce soit.",
        },
        {
          question: "Remorquez-vous aussi les véhicules accidentés ?",
          answer:
            "Oui, partout dans Aylmer, on remorque les véhicules en panne comme les véhicules accidentés, tant qu'ils peuvent être chargés en sécurité.",
        },
      ],
    },
    en: {
      metaTitle: "Towing in Aylmer — Local Tow Truck, Fixed Price",
      metaDescription:
        "Towing in Aylmer with a truck based on site. Dispatched in minutes, price confirmed by phone before we leave. Call (819) 921-7869.",
      eyebrow: "Towing · Aylmer",
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
      areas: ["Aylmer", "Gatineau", "Hull"],
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
            "Yes. Tell us where you are in Aylmer and where the vehicle is going, and we confirm the price before sending anyone.",
        },
        {
          question: "Do you tow accident-damaged vehicles too?",
          answer:
            "Yes, anywhere in Aylmer we tow both breakdowns and accident-damaged vehicles, as long as they can be loaded safely.",
        },
      ],
    },
  },
  {
    // Every fact here is sourced — see the research notes. Chelsea's hook is
    // that its road network has almost no redundancy: the municipality
    // publishes full closures of route 105 with a mandatory detour via the
    // A-5, chemin Scott and chemin de la Rivière. Nothing about gravel roads
    // or a distance from Aylmer: neither could be confirmed, so neither is
    // claimed.
    slug: "chelsea",
    group: "zone",
    heroImage: { kind: "static", src: "/remorquage.webp" },
    fr: {
      metaTitle: "Remorquage à Chelsea — A-5, route 105, Old Chelsea",
      metaDescription:
        "Remorquage à Chelsea 24h/24 : autoroute 5, route 105, Old Chelsea, Farm Point et Tenaga. À partir de 79,99 $, prix confirmé au téléphone. (819) 921-7869.",
      eyebrow: "Remorquage · Chelsea",
      heroTitle: "Remorquage",
      heroHighlight: "à Chelsea",
      subtitle:
        "De l'autoroute 5 au chemin de la Rivière, on couvre Chelsea 24 heures sur 24. Donnez-nous la sortie ou le chemin, on vous confirme le prix au téléphone avant de partir.",
      trustBar: ["Sorties 8, 12 et 13 de l'A-5", "À partir de 79,99 $", "24 h sur 24, hiver compris"],
      reasonsTitle: "Ce qui change quand on tombe en panne à Chelsea",
      reasons: [
        {
          title: "Trois sorties, trois secteurs",
          text: "La sortie 8 mène au chemin d'Old Chelsea et au chemin Scott, la 13 dessert Tenaga. Nous dire laquelle vous avez passée nous fait gagner de vraies minutes.",
        },
        {
          title: "Un réseau à faible redondance",
          text: "Quand un tronçon de la route 105 ferme, le détour officiel passe par l'A-5, le chemin Scott et le chemin de la Rivière. On connaît ces contournements.",
        },
        {
          title: "60 % du territoire est du parc",
          text: "Chelsea englobe une grande partie du parc de la Gatineau. Les accès y sont boisés et peu éclairés : un point de repère vaut mieux qu'une adresse approximative.",
        },
      ],
      areas: ["Old Chelsea", "Farm Point", "Tenaga", "Kirk's Ferry", "Hollow Glen", "Larrimac"],
      ctaCardTitle: "En panne quelque part à Chelsea ?",
      ctaCardText: "Donnez-nous la sortie d'autoroute ou le nom du chemin — on part de suite.",
      serviceName: "Remorquage à Chelsea",
      faqTitle: "Questions fréquentes — Remorquage à Chelsea",
      faq: [
        {
          question: "Combien coûte un remorquage à Chelsea ?",
          answer:
            "Un remorquage commence à 79,99 $, et le montant final dépend de l'endroit précis où vous êtes dans Chelsea et de la destination. Entre une panne à Old Chelsea, à deux pas de la sortie 12, et une autre au bout du chemin Kirk's Ferry, la distance n'est pas la même. On calcule le montant exact au téléphone en deux minutes, gratuitement, et le prix annoncé est final.",
        },
        {
          question: "Desservez-vous tout Chelsea, y compris Farm Point et Tenaga ?",
          answer:
            "Oui, on couvre l'ensemble de la municipalité de Chelsea : Old Chelsea, Farm Point, Tenaga, Kirk's Ferry, Hollow Glen, Larrimac et Kingsmere, plus les chemins du parc de la Gatineau. Le code postal de Chelsea commence par J9B. Appelez au (819) 921-7869 avec le nom du chemin ou la sortie d'autoroute la plus proche, on vous dit tout de suite le délai.",
        },
        {
          question: "Que faire si je tombe en panne sur l'autoroute 5 ou la route 105 ?",
          answer:
            "Allumez vos feux de détresse et sortez du véhicule par la portière opposée à la circulation si vous pouvez le faire en sécurité, puis attendez derrière la glissière — jamais dans l'habitacle sur l'autoroute. Repérez la dernière sortie passée : sur l'A-5 à Chelsea, la 8 mène au chemin Scott et la 13 à Tenaga. Ce seul détail nous fait gagner plusieurs minutes.",
        },
        {
          question: "Est-ce que vous venez à Chelsea la nuit et l'hiver ?",
          answer:
            "Oui, la dépanneuse roule 24 heures sur 24, 7 jours sur 7 à Chelsea, jours fériés compris, et le tarif ne change pas la nuit ni la fin de semaine. L'hiver est justement la saison où on y va le plus : les chemins boisés du secteur du parc et les accès à Camp Fortune se prennent mal quand la chaussée est glacée.",
        },
      ],
    },
    en: {
      metaTitle: "Towing in Chelsea — A-5, Route 105, Old Chelsea",
      metaDescription:
        "24/7 towing in Chelsea: Autoroute 5, Route 105, Old Chelsea, Farm Point and Tenaga. From $79.99, price confirmed by phone. Call (819) 921-7869.",
      eyebrow: "Towing · Chelsea",
      heroTitle: "Towing",
      heroHighlight: "in Chelsea",
      subtitle:
        "From Autoroute 5 to chemin de la Rivière, we cover Chelsea around the clock. Tell us the exit or the road name and we confirm your price by phone before the truck leaves.",
      trustBar: ["A-5 exits 8, 12 and 13", "From $79.99", "24/7, winter included"],
      reasonsTitle: "What breaking down in Chelsea actually involves",
      reasons: [
        {
          title: "Three exits, three areas",
          text: "Exit 8 feeds chemin d'Old Chelsea and chemin Scott; exit 13 serves Tenaga. Telling us which one you passed saves real minutes.",
        },
        {
          title: "A road network with no spare route",
          text: "When a stretch of Route 105 closes, the official detour runs through the A-5, chemin Scott and chemin de la Rivière. We know those workarounds.",
        },
        {
          title: "Sixty percent of it is parkland",
          text: "Chelsea takes in a large share of Gatineau Park. Those accesses are wooded and poorly lit, so a landmark beats an approximate address.",
        },
      ],
      areas: ["Old Chelsea", "Farm Point", "Tenaga", "Kirk's Ferry", "Hollow Glen", "Larrimac"],
      ctaCardTitle: "Stuck somewhere in Chelsea?",
      ctaCardText: "Give us the highway exit or the road name — we leave right away.",
      serviceName: "Towing in Chelsea",
      faqTitle: "Frequently Asked Questions — Towing in Chelsea",
      faq: [
        {
          question: "How much does a tow cost in Chelsea?",
          answer:
            "A tow starts at $79.99, and the final amount depends on where you are in Chelsea and where the vehicle is going. A breakdown in Old Chelsea, a minute from exit 12, is not the same distance as one at the far end of chemin Kirk's Ferry. We work the exact figure out by phone in two minutes, free, and the quoted price is the final one.",
        },
        {
          question: "Do you cover all of Chelsea, including Farm Point and Tenaga?",
          answer:
            "Yes, we cover the whole municipality of Chelsea: Old Chelsea, Farm Point, Tenaga, Kirk's Ferry, Hollow Glen, Larrimac and Kingsmere, plus the Gatineau Park roads. Chelsea postal codes start with J9B. Call (819) 921-7869 with the road name or the nearest highway exit and we'll tell you the wait right away.",
        },
        {
          question: "What should I do if I break down on Autoroute 5 or Route 105?",
          answer:
            "Put your hazard lights on and get out through the door away from traffic if you can do it safely, then wait behind the guardrail — never inside the vehicle on a highway. Note the last exit you passed: on the A-5 through Chelsea, 8 leads to chemin Scott and 13 to Tenaga. That one detail shortens the wait by several minutes.",
        },
        {
          question: "Do you come out to Chelsea at night and in winter?",
          answer:
            "Yes, the tow truck runs 24 hours a day, 7 days a week in Chelsea, holidays included, and the rate does not change at night or on weekends. Winter is when we go there most: the wooded roads on the park side and the approaches to Camp Fortune turn awkward once the surface ices over.",
        },
      ],
    },
  },
  {
    slug: "hull",
    group: "zone",
    heroImage: { kind: "static", src: "/remorquage.webp" },
    fr: {
      metaTitle: "Remorquage à Hull — ponts, centre-ville, Taché",
      metaDescription:
        "Remorquage 24h/24 dans le secteur Hull : pont du Portage, pont Alexandra, boulevard Alexandre-Taché, Vieux-Hull. À partir de 79,99 $. (819) 921-7869.",
      eyebrow: "Remorquage · Hull",
      heroTitle: "Remorquage",
      heroHighlight: "à Hull",
      subtitle:
        "Quatre ponts, un centre-ville dense et des stationnements étagés : le secteur Hull ne se remorque pas comme un rang de campagne. Donnez-nous la rue, on confirme le prix avant de partir.",
      trustBar: ["Les quatre ponts couverts", "À partir de 79,99 $", "24 h sur 24, 7 jours sur 7"],
      reasonsTitle: "Ce qui rend le secteur Hull particulier",
      reasons: [
        {
          title: "Quatre ponts, quatre files",
          text: "Portage, Chaudière, Alexandra et Macdonald-Cartier relient Hull à Ottawa. Le Macdonald-Cartier encaisse à lui seul près de 70 000 véhicules par jour : y tomber en panne, c'est bloquer une artère.",
        },
        {
          title: "Un boulevard Taché à une voie",
          text: "En fin de journée, la section vers l'ouest entre l'UQO et le boulevard Saint-Joseph se réduit et bouchonne. On contourne par Maisonneuve plutôt que d'attendre dedans.",
        },
        {
          title: "Des garages souterrains bas",
          text: "Le centre-ville empile les stationnements étagés. Un plateau standard n'y entre pas toujours : donnez le niveau et la hauteur affichée à l'entrée, on envoie le bon équipement.",
        },
      ],
      areas: ["Vieux-Hull", "Val-Tétreau", "Wrightville", "Mont-Bleu", "Le Plateau", "Parc-de-la-Montagne"],
      ctaCardTitle: "Immobilisé quelque part dans Hull ?",
      ctaCardText: "Donnez la rue et le pont le plus proche — la dépanneuse part.",
      serviceName: "Remorquage à Hull",
      faqTitle: "Questions fréquentes — Remorquage à Hull",
      faq: [
        {
          question: "Combien coûte un remorquage à Hull ?",
          answer:
            "Le remorquage commence à 79,99 $ et le total dépend de la rue où vous êtes et de l'endroit où va le véhicule. Depuis le Vieux-Hull, notre atelier du 879 chemin Vanier est à une dizaine de kilomètres par le boulevard Alexandre-Taché. On calcule le montant exact au téléphone, gratuitement, et le prix annoncé ne bouge plus à l'arrivée.",
        },
        {
          question: "Intervenez-vous sur les ponts entre Hull et Ottawa ?",
          answer:
            "Oui, les quatre traversées entre Hull et Ottawa sont dans notre zone : Portage, Chaudière, Alexandra et Macdonald-Cartier. Sur le Macdonald-Cartier, qui porte environ 70 000 véhicules par jour, restez ceinturé dans le véhicule si la circulation est dense plutôt que d'en sortir. Appelez le (819) 921-7869 en précisant le sens de circulation.",
        },
        {
          question: "Quels quartiers du secteur Hull desservez-vous ?",
          answer:
            "Tout le secteur, codes postaux J8X, J8Y et J8Z : Vieux-Hull, Val-Tétreau, Wrightville, Mont-Bleu, Le Plateau et le secteur du parc de la Montagne, jusqu'à la limite de Chelsea sur le boulevard Saint-Joseph. C'est le secteur le plus rapide à rejoindre depuis l'atelier d'Aylmer, environ quinze minutes hors pointe.",
        },
        {
          question: "Pouvez-vous sortir une voiture d'un stationnement souterrain ?",
          answer:
            "Oui dans la grande majorité des cas. La contrainte est la hauteur libre : beaucoup de garages du centre-ville de Hull sont limités à deux mètres, ce qui exclut le plateau classique. Dites-nous le niveau où se trouve la voiture et la hauteur inscrite à l'entrée, et on arrive avec l'équipement qui passe.",
        },
      ],
    },
    en: {
      metaTitle: "Towing in Hull — bridges, downtown, Taché",
      metaDescription:
        "24/7 towing in the Hull sector: Portage Bridge, Alexandra Bridge, boulevard Alexandre-Taché, Vieux-Hull. From $79.99. Call (819) 921-7869.",
      eyebrow: "Towing · Hull",
      heroTitle: "Towing",
      heroHighlight: "in Hull",
      subtitle:
        "Four bridges, a dense downtown and multi-level parkades: the Hull sector is not towed the way a country road is. Give us the street and we confirm your price before the truck leaves.",
      trustBar: ["All four bridges covered", "From $79.99", "24 hours a day, 7 days a week"],
      reasonsTitle: "What makes the Hull sector its own problem",
      reasons: [
        {
          title: "Four bridges, four queues",
          text: "Portage, Chaudière, Alexandra and Macdonald-Cartier link Hull to Ottawa. The Macdonald-Cartier alone carries close to 70,000 vehicles a day: breaking down on it blocks an artery.",
        },
        {
          title: "A one-lane stretch of Taché",
          text: "Late in the day the westbound section between UQO and boulevard Saint-Joseph narrows and backs up. We go around by Maisonneuve rather than sit in it.",
        },
        {
          title: "Low underground parkades",
          text: "Downtown stacks its parking. A standard flatbed does not always fit: give us the level and the clearance posted at the entrance and we send equipment that does.",
        },
      ],
      areas: ["Vieux-Hull", "Val-Tétreau", "Wrightville", "Mont-Bleu", "Le Plateau", "Parc-de-la-Montagne"],
      ctaCardTitle: "Stuck somewhere in Hull?",
      ctaCardText: "Give us the street and the nearest bridge — the truck leaves.",
      serviceName: "Towing in Hull",
      faqTitle: "Frequently Asked Questions — Towing in Hull",
      faq: [
        {
          question: "How much does a tow cost in Hull?",
          answer:
            "Towing starts at $79.99 and the total depends on the street you are on and where the vehicle is going. From Vieux-Hull, our shop at 879 chemin Vanier is about ten kilometres away by boulevard Alexandre-Taché. We work the exact figure out by phone, free, and the quoted price does not change when we arrive.",
        },
        {
          question: "Do you come out onto the bridges between Hull and Ottawa?",
          answer:
            "Yes, all four Hull crossings are in our area: Portage, Chaudière, Alexandra and Macdonald-Cartier. On the Macdonald-Cartier, which carries roughly 70,000 vehicles a day, stay belted inside the vehicle in heavy traffic rather than stepping out. Call (819) 921-7869 and tell us which direction you were heading.",
        },
        {
          question: "Which Hull neighbourhoods do you serve?",
          answer:
            "The whole sector, postal codes J8X, J8Y and J8Z: Vieux-Hull, Val-Tétreau, Wrightville, Mont-Bleu, Le Plateau and the Parc-de-la-Montagne area, out to the Chelsea boundary on boulevard Saint-Joseph. It is the fastest sector to reach from the Aylmer shop, around fifteen minutes outside rush hour.",
        },
        {
          question: "Can you pull a car out of an underground parkade?",
          answer:
            "Yes in the large majority of cases. The constraint is headroom: many downtown Hull garages are capped at two metres, which rules out the usual flatbed. Tell us which level the car is on and the clearance posted at the entrance, and we arrive with equipment that fits.",
        },
      ],
    },
  },
  {
    slug: "gatineau",
    group: "zone",
    heroImage: { kind: "static", src: "/remorquage.webp" },
    fr: {
      metaTitle: "Remorquage secteur Gatineau — Maloney et Gréber",
      metaDescription:
        "Remorquage 24h/24 dans le secteur Gatineau : boulevard Maloney, Gréber, La Vérendrye, Pointe-Gatineau, Templeton. À partir de 79,99 $. (819) 921-7869.",
      eyebrow: "Remorquage · Secteur Gatineau",
      heroTitle: "Remorquage",
      heroHighlight: "secteur Gatineau",
      subtitle:
        "De la Pointe-Gatineau à la limite de Masson-Angers, le secteur Gatineau est un long corridor commercial. On y roule toute la journée : donnez le boulevard et l'intersection.",
      trustBar: ["Corridor Maloney couvert", "À partir de 79,99 $", "Dépanneuse 24 h sur 24"],
      reasonsTitle: "Pourquoi le secteur Gatineau demande des repères précis",
      reasons: [
        {
          title: "Un boulevard de bout en bout",
          text: "Le boulevard Maloney, c'est la route 148 : il part d'un échangeur incomplet de l'autoroute 50 et file jusqu'à la limite de Masson-Angers. Dire « sur Maloney » ne suffit pas, l'intersection change tout.",
        },
        {
          title: "Le Rapibus au milieu",
          text: "La voie réservée longe le côté nord de Maloney puis s'en écarte juste à l'est de la montée Paiement. Elle ferme des accès et impose des détours que les GPS ne reflètent pas toujours.",
        },
        {
          title: "Des stationnements commerciaux saturés",
          text: "Les Promenades, au coin de Gréber et de Maloney, est le plus grand centre commercial de la ville. Une batterie à plat un samedi s'y règle souvent sur place, sans remorquage.",
        },
      ],
      areas: ["Pointe-Gatineau", "Templeton", "Le Carrefour", "Touraine", "Cheval-Blanc", "Saint-Richard"],
      ctaCardTitle: "En panne sur Maloney ou Gréber ?",
      ctaCardText: "Donnez le boulevard et l'intersection — on est dans le secteur.",
      serviceName: "Remorquage — secteur Gatineau",
      faqTitle: "Questions fréquentes — Remorquage dans le secteur Gatineau",
      faq: [
        {
          question: "Combien coûte un remorquage dans le secteur Gatineau ?",
          answer:
            "Le tarif part de 79,99 $ et le total se calcule sur la distance réelle. Le secteur s'étire sur une dizaine de kilomètres entre la Pointe-Gatineau et Masson-Angers : une panne près du boulevard Gréber et une autre au bout de Maloney Est ne donnent pas le même montant. Deux minutes au téléphone suffisent pour le chiffre final.",
        },
        {
          question: "Quels quartiers couvrez-vous dans le secteur Gatineau ?",
          answer:
            "Les codes postaux J8P, J8R et J8T : Pointe-Gatineau, Le Carrefour, Touraine, Templeton, Cheval-Blanc et Saint-Richard, du boulevard La Vérendrye jusqu'à la montée Paiement et au-delà vers l'est. Appelez au (819) 921-7869 avec l'intersection la plus proche, c'est ce qui nous situe le plus vite.",
        },
        {
          question: "Combien de temps avant l'arrivée de la dépanneuse ?",
          answer:
            "Comptez en général de 20 à 40 minutes depuis l'atelier d'Aylmer, selon l'heure et le pont emprunté. Le facteur qui pèse le plus dans le secteur Gatineau, c'est l'accès à l'autoroute 50 : aux heures de pointe, l'approche de l'échangeur Maloney est le point le plus lent de tout le trajet.",
        },
        {
          question: "Intervenez-vous dans les stationnements de centres commerciaux ?",
          answer:
            "Oui, et c'est une bonne part de nos appels dans ce secteur. Aux Promenades comme dans les commerces du boulevard Gréber, en plein secteur Gatineau, l'appel typique est un survoltage ou un déverrouillage, pas un remorquage. On règle ça sur place quand c'est possible : ça vous coûte moins cher qu'un transport vers un garage.",
        },
      ],
    },
    en: {
      metaTitle: "Towing in the Gatineau sector — Maloney, Gréber",
      metaDescription:
        "24/7 towing in the Gatineau sector: boulevard Maloney, Gréber, La Vérendrye, Pointe-Gatineau, Templeton. From $79.99. Call (819) 921-7869.",
      eyebrow: "Towing · Gatineau sector",
      heroTitle: "Towing",
      heroHighlight: "Gatineau sector",
      subtitle:
        "From Pointe-Gatineau to the Masson-Angers boundary, the Gatineau sector is one long commercial corridor. We drive it all day: give us the boulevard and the intersection.",
      trustBar: ["Maloney corridor covered", "From $79.99", "Tow truck 24 hours a day"],
      reasonsTitle: "Why the Gatineau sector needs a precise landmark",
      reasons: [
        {
          title: "One boulevard, end to end",
          text: "Boulevard Maloney is Route 148: it leaves an incomplete Autoroute 50 interchange and runs to the Masson-Angers boundary. \"On Maloney\" is not an address — the intersection changes everything.",
        },
        {
          title: "The Rapibus down the middle",
          text: "The busway runs along the north side of Maloney, then peels away just east of montée Paiement. It closes accesses and forces detours that GPS apps do not always show.",
        },
        {
          title: "Packed retail parking",
          text: "Les Promenades, at Gréber and Maloney, is the city's largest mall. A dead battery there on a Saturday is usually settled on the spot, with no tow at all.",
        },
      ],
      areas: ["Pointe-Gatineau", "Templeton", "Le Carrefour", "Touraine", "Cheval-Blanc", "Saint-Richard"],
      ctaCardTitle: "Broken down on Maloney or Gréber?",
      ctaCardText: "Give us the boulevard and the intersection — we're in the area.",
      serviceName: "Towing — Gatineau sector",
      faqTitle: "Frequently Asked Questions — Towing in the Gatineau sector",
      faq: [
        {
          question: "How much does a tow cost in the Gatineau sector?",
          answer:
            "The rate starts at $79.99 and the total is worked out on actual distance. The sector runs about ten kilometres from Pointe-Gatineau to Masson-Angers: a breakdown near boulevard Gréber and one at the far end of Maloney Est are not the same trip. Two minutes on the phone gives you the final figure.",
        },
        {
          question: "Which neighbourhoods do you cover in the Gatineau sector?",
          answer:
            "Postal codes J8P, J8R and J8T: Pointe-Gatineau, Le Carrefour, Touraine, Templeton, Cheval-Blanc and Saint-Richard, from boulevard La Vérendrye out past montée Paiement. Call (819) 921-7869 with the nearest intersection — that is what places you fastest.",
        },
        {
          question: "How long before the tow truck arrives?",
          answer:
            "Usually 20 to 40 minutes from the Aylmer shop, depending on the hour and the bridge we take. The biggest variable in the Gatineau sector is the Autoroute 50 access: at rush hour, the approach to the Maloney interchange is the slowest part of the whole run.",
        },
        {
          question: "Do you come into shopping centre parking lots?",
          answer:
            "Yes, and it is a good share of our calls in this sector. At Les Promenades and along boulevard Gréber, in the heart of the Gatineau sector, the typical call is a boost or a lockout, not a tow. We settle it on the spot where we can, which costs you less than moving the car to a garage.",
        },
      ],
    },
  },
  {
    slug: "buckingham",
    group: "zone",
    heroImage: { kind: "static", src: "/remorquage.webp" },
    fr: {
      metaTitle: "Remorquage à Buckingham — route 309, Lièvre",
      metaDescription:
        "Remorquage 24h/24 à Buckingham : route 309, avenue de Buckingham, boulevard Maloney Est, rivière du Lièvre. Prix confirmé au téléphone. (819) 921-7869.",
      eyebrow: "Remorquage · Buckingham",
      heroTitle: "Remorquage",
      heroHighlight: "à Buckingham",
      subtitle:
        "Buckingham est à l'extrémité est de Gatineau, de part et d'autre de la rivière du Lièvre. On y va à toute heure : dites-nous de quel côté de la rivière vous êtes.",
      trustBar: ["Routes 309 et 315 couvertes", "Prix confirmé avant le départ", "Nuit et jours fériés"],
      reasonsTitle: "Ce qu'il faut savoir avant d'appeler depuis Buckingham",
      reasons: [
        {
          title: "La rivière coupe le secteur en deux",
          text: "La rivière du Lièvre traverse Buckingham. Nous dire de quel côté vous êtes évite un détour par le pont, et ça vaut souvent dix minutes.",
        },
        {
          title: "La route 309 part d'ici",
          text: "Elle démarre à l'autoroute 50 dans le secteur Buckingham et remonte vers le nord le long de la Lièvre. Plus on monte, plus les services se raréfient : c'est le genre de trajet qu'on chiffre d'avance.",
        },
        {
          title: "Trente kilomètres à l'est de l'atelier",
          text: "On ne prétend pas être à cinq minutes. On annonce un délai réel au téléphone plutôt qu'un chiffre optimiste, et la distance est dans le prix dès le premier appel.",
        },
      ],
      areas: ["Vieux-Buckingham", "L'Ange-Gardien", "Masson-Angers", "Notre-Dame-de-la-Salette", "Mayo"],
      ctaCardTitle: "Besoin d'une dépanneuse à Buckingham ?",
      ctaCardText: "Un appel, le prix confirmé, et on part de l'atelier.",
      serviceName: "Remorquage à Buckingham",
      faqTitle: "Questions fréquentes — Remorquage à Buckingham",
      faq: [
        {
          question: "Combien coûte un remorquage à Buckingham ?",
          answer:
            "Le remorquage commence à 79,99 $, et Buckingham est à une trentaine de kilomètres à l'est de notre atelier d'Aylmer : la distance entre dans le calcul et on vous l'annonce d'avance. Le montant est confirmé au téléphone avant que le camion parte, et il ne change pas une fois sur place.",
        },
        {
          question: "Desservez-vous tout Buckingham et les environs ?",
          answer:
            "Oui — Buckingham, code postal J8L, et ce qui l'entoure : le Vieux-Buckingham, l'avenue de Buckingham qui est la route 315, le boulevard Maloney Est, la route 309 vers le nord, ainsi que L'Ange-Gardien, Mayo et Notre-Dame-de-la-Salette. Appelez avec le nom du chemin plutôt que celui du quartier.",
        },
        {
          question: "Remorquez-vous de Buckingham jusqu'à Gatineau ou Ottawa ?",
          answer:
            "Oui, c'est même le trajet le plus courant : un véhicule ramassé à Buckingham repart souvent vers un garage du secteur Gatineau, vers Ottawa ou vers notre propre atelier d'Aylmer. Le tarif se calcule sur le trajet complet, du point de ramassage à la destination, et il est confirmé avant le départ.",
        },
        {
          question: "Venez-vous à Buckingham la nuit et l'hiver ?",
          answer:
            "La dépanneuse roule 24 heures sur 24 à Buckingham, jours fériés compris, sans supplément de nuit ni de fin de semaine. L'hiver, la route 309 le long de la Lièvre et les chemins qui montent vers Mayo sont ceux où on intervient le plus : la chaussée y reste glacée bien plus longtemps qu'en ville.",
        },
      ],
    },
    en: {
      metaTitle: "Towing in Buckingham — Route 309, Lièvre River",
      metaDescription:
        "24/7 towing in Buckingham: Route 309, avenue de Buckingham, boulevard Maloney Est, Lièvre River. Price confirmed by phone. Call (819) 921-7869.",
      eyebrow: "Towing · Buckingham",
      heroTitle: "Towing",
      heroHighlight: "in Buckingham",
      subtitle:
        "Buckingham sits at Gatineau's eastern end, on both banks of the Lièvre River. We come out at any hour — tell us which side of the river you are on.",
      trustBar: ["Routes 309 and 315 covered", "Price confirmed before we leave", "Nights and holidays"],
      reasonsTitle: "What to know before calling from Buckingham",
      reasons: [
        {
          title: "The river splits the sector",
          text: "The Lièvre River runs straight through Buckingham. Telling us which bank you are on saves a detour to the bridge, and that is often ten minutes.",
        },
        {
          title: "Route 309 starts here",
          text: "It leaves Autoroute 50 in the Buckingham sector and climbs north along the Lièvre. The further up you go, the thinner the services get — the kind of run we price before leaving.",
        },
        {
          title: "Thirty kilometres east of the shop",
          text: "We will not pretend to be five minutes away. We give a real arrival window on the phone instead of an optimistic one, and the distance is in the price from the first call.",
        },
      ],
      areas: ["Vieux-Buckingham", "L'Ange-Gardien", "Masson-Angers", "Notre-Dame-de-la-Salette", "Mayo"],
      ctaCardTitle: "Need a tow truck in Buckingham?",
      ctaCardText: "One call, the price confirmed, and we leave the shop.",
      serviceName: "Towing in Buckingham",
      faqTitle: "Frequently Asked Questions — Towing in Buckingham",
      faq: [
        {
          question: "How much does a tow cost in Buckingham?",
          answer:
            "Towing starts at $79.99, and Buckingham is about thirty kilometres east of our Aylmer shop: that distance is part of the calculation and we tell you up front. The amount is confirmed by phone before the truck leaves, and it does not change once we are on site.",
        },
        {
          question: "Do you cover all of Buckingham and the area around it?",
          answer:
            "Yes — Buckingham, postal code J8L, and what surrounds it: Vieux-Buckingham, avenue de Buckingham which is Route 315, boulevard Maloney Est, Route 309 heading north, plus L'Ange-Gardien, Mayo and Notre-Dame-de-la-Salette. Call with the road name rather than the neighbourhood name.",
        },
        {
          question: "Will you tow from Buckingham to Gatineau or Ottawa?",
          answer:
            "Yes, and it is the most common run we do here: a vehicle picked up in Buckingham usually goes on to a garage in the Gatineau sector, to Ottawa, or to our own shop in Aylmer. The rate covers the complete trip, pickup to destination, and it is confirmed before we set off.",
        },
        {
          question: "Do you come to Buckingham at night and in winter?",
          answer:
            "The tow truck runs 24 hours a day in Buckingham, holidays included, with no night or weekend surcharge. In winter, Route 309 along the Lièvre and the roads climbing toward Mayo are where we go most: the surface there stays iced over far longer than it does in town.",
        },
      ],
    },
  },
  {
    slug: "masson-angers",
    group: "zone",
    heroImage: { kind: "static", src: "/remorquage.webp" },
    fr: {
      metaTitle: "Remorquage à Masson-Angers — traversier, 148, A-50",
      metaDescription:
        "Remorquage 24h/24 à Masson-Angers : traverse de Cumberland, chemin Montréal Ouest, route 315, autoroute 50. À partir de 79,99 $. (819) 921-7869.",
      eyebrow: "Remorquage · Masson-Angers",
      heroTitle: "Remorquage",
      heroHighlight: "à Masson-Angers",
      subtitle:
        "Entre la traverse de Cumberland et l'autoroute 50, Masson-Angers vit sur deux axes. On y va jour et nuit : dites-nous si vous êtes côté Masson ou côté Angers.",
      trustBar: ["Traverse de Cumberland desservie", "À partir de 79,99 $", "Jour et nuit"],
      reasonsTitle: "Masson-Angers, deux villages et un traversier",
      reasons: [
        {
          title: "Un traversier, mille automobilistes par jour",
          text: "La traverse Cumberland–Masson fait passer environ mille automobilistes chaque jour, quatorze véhicules par voyage. Une panne dans la file bloque l'embarquement : on traite ces appels en priorité.",
        },
        {
          title: "Le traversier ferme parfois",
          text: "À la crue du printemps, les traversées sont suspendues et tout le trafic se reporte sur l'autoroute 50 et les ponts de Gatineau. Le détour rallonge, et notre délai annoncé en tient compte.",
        },
        {
          title: "Masson et Angers ne se touchent pas",
          text: "Le secteur réunit deux anciens villages séparés par la rivière du Lièvre. Le nom du chemin nous amène au bon endroit bien mieux que le nom du secteur.",
        },
      ],
      areas: ["Masson", "Angers", "Traverse de Cumberland", "Chemin Montréal Ouest", "Route 315"],
      ctaCardTitle: "En panne à Masson-Angers ?",
      ctaCardText: "Côté Masson ou côté Angers — dites-le-nous et on part.",
      serviceName: "Remorquage à Masson-Angers",
      faqTitle: "Questions fréquentes — Remorquage à Masson-Angers",
      faq: [
        {
          question: "Combien coûte un remorquage à Masson-Angers ?",
          answer:
            "Le remorquage part de 79,99 $ et le total dépend du trajet complet. Masson-Angers est à l'extrémité est de Gatineau, une trentaine de kilomètres de notre atelier d'Aylmer par l'autoroute 50. On vous donne le montant exact au téléphone avant de partir, et c'est celui que vous payez.",
        },
        {
          question: "Quel territoire couvrez-vous à Masson-Angers ?",
          answer:
            "Tout Masson-Angers, code postal J8M : le village de Masson, celui d'Angers, le chemin Montréal Ouest qui est la route 148, la route 315 vers Buckingham, les sorties de l'autoroute 50 et la traverse de Cumberland. Appelez le (819) 921-7869 avec le nom du chemin et le numéro civique.",
        },
        {
          question: "Et si je tombe en panne dans la file du traversier ?",
          answer:
            "Appelez tout de suite en précisant que vous êtes à la traverse de Cumberland, à Masson-Angers. Le bateau ne prend que quatorze véhicules par voyage et environ mille automobilistes l'empruntent chaque jour : un véhicule immobilisé dans la file retarde tout le monde. On traite ces appels en priorité et on dégage d'abord le véhicule.",
        },
        {
          question: "Que se passe-t-il quand le traversier est fermé ?",
          answer:
            "Au printemps, la crue de la rivière des Outaouais force parfois la suspension des traversées entre Masson-Angers et Cumberland. Le trajet vers l'Ontario repasse alors par l'autoroute 50 et les ponts de Gatineau, ce qui ajoute une quarantaine de kilomètres. On en tient compte dans le délai qu'on vous annonce.",
        },
      ],
    },
    en: {
      metaTitle: "Towing in Masson-Angers — ferry, 148, A-50",
      metaDescription:
        "24/7 towing in Masson-Angers: Cumberland ferry, chemin Montréal Ouest, Route 315, Autoroute 50. From $79.99. Call (819) 921-7869.",
      eyebrow: "Towing · Masson-Angers",
      heroTitle: "Towing",
      heroHighlight: "in Masson-Angers",
      subtitle:
        "Between the Cumberland ferry and Autoroute 50, Masson-Angers lives on two axes. We come day or night — tell us whether you are on the Masson side or the Angers side.",
      trustBar: ["Cumberland ferry served", "From $79.99", "Day and night"],
      reasonsTitle: "Masson-Angers: two villages and a ferry",
      reasons: [
        {
          title: "A ferry, a thousand drivers a day",
          text: "The Cumberland–Masson crossing carries around a thousand motorists daily, fourteen vehicles per trip. A breakdown in the queue stops boarding, so those calls go to the front of ours.",
        },
        {
          title: "The ferry does shut down",
          text: "At spring freshet the crossings are suspended and all that traffic shifts onto Autoroute 50 and the Gatineau bridges. The detour is long, and the wait we quote you accounts for it.",
        },
        {
          title: "Masson and Angers are not adjacent",
          text: "The sector joins two former villages split by the Lièvre River. The road name gets us to the right place far better than the sector name does.",
        },
      ],
      areas: ["Masson", "Angers", "Cumberland ferry", "Chemin Montréal Ouest", "Route 315"],
      ctaCardTitle: "Broken down in Masson-Angers?",
      ctaCardText: "Masson side or Angers side — tell us and we leave.",
      serviceName: "Towing in Masson-Angers",
      faqTitle: "Frequently Asked Questions — Towing in Masson-Angers",
      faq: [
        {
          question: "How much does a tow cost in Masson-Angers?",
          answer:
            "Towing starts at $79.99 and the total depends on the complete trip. Masson-Angers sits at Gatineau's eastern edge, about thirty kilometres from our Aylmer shop by Autoroute 50. We give you the exact amount by phone before leaving, and that is what you pay.",
        },
        {
          question: "What area do you cover in Masson-Angers?",
          answer:
            "All of Masson-Angers, postal code J8M: the village of Masson, the village of Angers, chemin Montréal Ouest which is Route 148, Route 315 toward Buckingham, the Autoroute 50 exits and the Cumberland ferry landing. Call (819) 921-7869 with the road name and street number.",
        },
        {
          question: "What if I break down in the ferry queue?",
          answer:
            "Call right away and say you are at the Cumberland crossing in Masson-Angers. The boat takes only fourteen vehicles per trip and roughly a thousand motorists use it each day, so one stalled car holds up everyone behind it. We treat those calls as priority and clear the vehicle first.",
        },
        {
          question: "What happens when the ferry is closed?",
          answer:
            "In spring, high water on the Ottawa River sometimes suspends the Masson-Angers–Cumberland crossings. The trip to Ontario then goes back around by Autoroute 50 and the Gatineau bridges, adding roughly forty kilometres. We factor that into the arrival time we quote you.",
        },
      ],
    },
  },
  {
    slug: "cantley",
    group: "zone",
    heroImage: { kind: "static", src: "/remorquage.webp" },
    fr: {
      metaTitle: "Remorquage à Cantley — montée de la Source, 307",
      metaDescription:
        "Remorquage 24h/24 à Cantley : montée de la Source, chemin Sainte-Élisabeth, route 307, chemins ruraux et culs-de-sac. (819) 921-7869.",
      eyebrow: "Remorquage · Cantley",
      heroTitle: "Remorquage",
      heroHighlight: "à Cantley",
      subtitle:
        "Cantley tient sur une seule artère et une série de chemins qui n'en ressortent pas. Donnez le chemin et le numéro civique, pas seulement « à Cantley ».",
      trustBar: ["Route 307 et chemins ruraux", "À partir de 79,99 $", "24 h sur 24"],
      reasonsTitle: "Pourquoi une panne à Cantley n'est pas une panne en ville",
      reasons: [
        {
          title: "Une seule artère",
          text: "La route 307 traverse Cantley sous le nom de montée de la Source, dans le prolongement de la rue Saint-Louis à Gatineau. Tout passe par là : si elle bloque, il n'y a pas de second chemin.",
        },
        {
          title: "Beaucoup d'impasses",
          text: "Une grande partie du réseau local se termine en cul-de-sac. Un camion engagé au mauvais endroit perd le temps du demi-tour, alors on vérifie le chemin avec vous avant de partir.",
        },
        {
          title: "Des entrées longues",
          text: "En secteur boisé, la maison est souvent à cent mètres de la route. Le numéro civique plus un repère visible depuis le chemin valent mieux qu'une adresse toute seule.",
        },
      ],
      areas: ["Montée de la Source", "Chemin Sainte-Élisabeth", "Mont-Cascades", "Route 307"],
      ctaCardTitle: "Immobilisé sur un chemin de Cantley ?",
      ctaCardText: "Le nom du chemin, le numéro civique, et la dépanneuse part.",
      serviceName: "Remorquage à Cantley",
      faqTitle: "Questions fréquentes — Remorquage à Cantley",
      faq: [
        {
          question: "Combien coûte un remorquage à Cantley ?",
          answer:
            "Le tarif débute à 79,99 $ et le reste dépend d'où vous êtes sur le territoire. Cantley s'étire vers le nord le long de la route 307 : le bas de la montée de la Source et le haut du chemin Sainte-Élisabeth ne sont pas à la même distance de l'atelier. On chiffre le trajet exact au téléphone, gratuitement.",
        },
        {
          question: "Desservez-vous tout Cantley, y compris les chemins ruraux ?",
          answer:
            "Oui, tout Cantley, code postal J8V, dans la MRC des Collines-de-l'Outaouais : la montée de la Source, le chemin Sainte-Élisabeth, les chemins qui mènent au Mont-Cascades et les chemins de desserte qui en partent. Appelez au (819) 921-7869 avec le nom du chemin, c'est le repère qui compte ici.",
        },
        {
          question: "Que faire si je suis en panne sur la route 307 ?",
          answer:
            "Rangez-vous le plus loin possible de la voie, allumez vos feux de détresse et restez derrière la glissière ou hors du véhicule côté fossé. La 307 est la seule voie de traversée de Cantley, donc la circulation y est continue et rapide même en soirée. Donnez-nous le dernier chemin croisé, on vous situe tout de suite.",
        },
        {
          question: "Mon chemin est une impasse non déneigée — venez-vous quand même ?",
          answer:
            "Oui, tant que la dépanneuse peut entrer et ressortir. C'est exactement pour ça qu'on demande le nom du chemin avant de partir : une bonne partie du réseau de Cantley se termine en cul-de-sac et certains chemins privés ne sont pas entretenus l'hiver. Décrivez l'état du chemin, on envoie le véhicule adapté.",
        },
      ],
    },
    en: {
      metaTitle: "Towing in Cantley — montée de la Source, 307",
      metaDescription:
        "24/7 towing in Cantley: montée de la Source, chemin Sainte-Élisabeth, Route 307, rural roads and dead ends. Call (819) 921-7869.",
      eyebrow: "Towing · Cantley",
      heroTitle: "Towing",
      heroHighlight: "in Cantley",
      subtitle:
        "Cantley hangs off one artery and a string of roads that do not lead back out. Give us the road and the street number, not just \"in Cantley\".",
      trustBar: ["Route 307 and rural roads", "From $79.99", "24 hours a day"],
      reasonsTitle: "Why a breakdown in Cantley is not a breakdown in town",
      reasons: [
        {
          title: "A single artery",
          text: "Route 307 crosses Cantley as montée de la Source, carrying on from rue Saint-Louis in Gatineau. Everything runs through it: if it blocks, there is no second road.",
        },
        {
          title: "A lot of dead ends",
          text: "Much of the local network finishes in a cul-de-sac. A truck that turns down the wrong one loses the time it takes to turn around, so we check the road with you before leaving.",
        },
        {
          title: "Long driveways",
          text: "On wooded lots the house often sits a hundred metres back. A street number plus something visible from the road beats an address on its own.",
        },
      ],
      areas: ["Montée de la Source", "Chemin Sainte-Élisabeth", "Mont-Cascades", "Route 307"],
      ctaCardTitle: "Stuck on a Cantley back road?",
      ctaCardText: "The road name, the street number, and the truck leaves.",
      serviceName: "Towing in Cantley",
      faqTitle: "Frequently Asked Questions — Towing in Cantley",
      faq: [
        {
          question: "How much does a tow cost in Cantley?",
          answer:
            "The rate opens at $79.99 and the rest depends on where you are on the territory. Cantley stretches north along Route 307: the bottom of montée de la Source and the top of chemin Sainte-Élisabeth are not the same distance from the shop. We price the exact run by phone, free of charge.",
        },
        {
          question: "Do you serve all of Cantley, back roads included?",
          answer:
            "Yes, all of Cantley, postal code J8V, in the MRC des Collines-de-l'Outaouais: montée de la Source, chemin Sainte-Élisabeth, the roads up to Mont-Cascades and the side roads branching off them. Call (819) 921-7869 with the road name — that is the landmark that counts out here.",
        },
        {
          question: "What should I do if I break down on Route 307?",
          answer:
            "Pull as far off the travelled lane as you can, put the hazards on and wait behind the guardrail or on the ditch side, outside the vehicle. Route 307 is Cantley's only through road, so traffic on it stays steady and fast even in the evening. Tell us the last road you passed and we place you at once.",
        },
        {
          question: "My road is an unploughed dead end — will you still come?",
          answer:
            "Yes, as long as the truck can get in and back out. That is exactly why we ask for the road name before leaving: much of Cantley's network ends in a cul-de-sac and some private roads are not maintained in winter. Describe the condition and we send the right vehicle.",
        },
      ],
    },
  },
  {
    slug: "val-des-monts",
    group: "zone",
    heroImage: { kind: "static", src: "/remorquage.webp" },
    fr: {
      metaTitle: "Remorquage à Val-des-Monts — Perkins, Poltimore",
      metaDescription:
        "Remorquage 24h/24 à Val-des-Monts : Perkins, Saint-Pierre-de-Wakefield, Poltimore, lac McGregor. Chemins de chalet. (819) 921-7869.",
      eyebrow: "Remorquage · Val-des-Monts",
      heroTitle: "Remorquage",
      heroHighlight: "à Val-des-Monts",
      subtitle:
        "Trois anciens villages, des dizaines de lacs et des centaines de kilomètres de chemins. On y monte à toute heure — avec le nom du lac, on vous trouve.",
      trustBar: ["Perkins, Poltimore, Saint-Pierre", "Prix confirmé au téléphone", "Nuit et fin de semaine"],
      reasonsTitle: "Ce que Val-des-Monts a de particulier",
      reasons: [
        {
          title: "Trois villages en un",
          text: "Val-des-Monts est né en 1975 de la fusion de Perkins, Saint-Pierre-de-Wakefield et Poltimore. Les trois sont loin les uns des autres : nommer le bon secteur, c'est déjà la moitié du travail.",
        },
        {
          title: "Une population qui gonfle l'été",
          text: "Le territoire compte des milliers de chalets autour du lac McGregor, du lac Saint-Pierre et du lac Grand. L'été, il y a beaucoup plus de monde sur des chemins qui n'ont pas changé.",
        },
        {
          title: "Un réseau très long",
          text: "Les chemins locaux sont étroits, en pente et souvent bordés d'arbres. On demande le nom du lac ou du chemin plutôt que l'adresse : c'est ce qui se repère sur le terrain.",
        },
      ],
      areas: ["Perkins", "Saint-Pierre-de-Wakefield", "Poltimore", "Lac McGregor", "Lac Saint-Pierre", "Lac Grand"],
      ctaCardTitle: "En panne dans le bout de Val-des-Monts ?",
      ctaCardText: "Le nom du lac ou du chemin suffit — on part de suite.",
      serviceName: "Remorquage à Val-des-Monts",
      faqTitle: "Questions fréquentes — Remorquage à Val-des-Monts",
      faq: [
        {
          question: "Combien coûte un remorquage à Val-des-Monts ?",
          answer:
            "Le remorquage commence à 79,99 $ et Val-des-Monts est le territoire le plus étendu qu'on dessert : entre Perkins, tout au sud, et Poltimore, bien plus haut, il y a des dizaines de kilomètres d'écart. C'est pour ça qu'on calcule le prix au téléphone avant de partir plutôt que d'afficher un tarif unique.",
        },
        {
          question: "Desservez-vous les trois secteurs de Val-des-Monts ?",
          answer:
            "Oui : Perkins, Saint-Pierre-de-Wakefield et Poltimore, les trois anciennes municipalités réunies en 1975 pour former Val-des-Monts, plus le secteur du lac McGregor. Le code postal est J8N et le territoire se rejoint par la route 307 depuis Cantley. Appelez le (819) 921-7869 en nommant le secteur, puis le chemin.",
        },
        {
          question: "Montez-vous jusqu'aux chalets autour des lacs ?",
          answer:
            "Oui. Le lac McGregor est le plus grand de Val-des-Monts, suivi du lac Saint-Pierre et du lac Grand, et les chemins de chalet qui y mènent sont étroits, en pente et parfois en gravier. Donnez le nom du lac et celui du chemin : c'est plus utile qu'une adresse et ça nous dit tout de suite quel camion envoyer.",
        },
        {
          question: "Venez-vous l'hiver, quand les chemins sont glacés ?",
          answer:
            "Oui, la dépanneuse roule toute l'année à Val-des-Monts, nuit et jours fériés compris. L'hiver est notre haute saison ici : les descentes vers les lacs et les chemins de chalet gèlent tôt et dégèlent tard. Dites-nous si le chemin est en pente et s'il est sablé, ça détermine le véhicule qu'on envoie.",
        },
      ],
    },
    en: {
      metaTitle: "Towing in Val-des-Monts — Perkins, Poltimore",
      metaDescription:
        "24/7 towing in Val-des-Monts: Perkins, Saint-Pierre-de-Wakefield, Poltimore, Lac McGregor. Cottage roads. Call (819) 921-7869.",
      eyebrow: "Towing · Val-des-Monts",
      heroTitle: "Towing",
      heroHighlight: "in Val-des-Monts",
      subtitle:
        "Three former villages, dozens of lakes and hundreds of kilometres of road. We drive up at any hour — give us the lake and we find you.",
      trustBar: ["Perkins, Poltimore, Saint-Pierre", "Price confirmed by phone", "Nights and weekends"],
      reasonsTitle: "What sets Val-des-Monts apart",
      reasons: [
        {
          title: "Three villages in one",
          text: "Val-des-Monts was formed in 1975 by merging Perkins, Saint-Pierre-de-Wakefield and Poltimore. The three sit far apart: naming the right one is already half the job.",
        },
        {
          title: "A population that swells in summer",
          text: "The territory holds thousands of cottages around Lac McGregor, Lac Saint-Pierre and Lac Grand. In summer there are many more people on roads that have not changed.",
        },
        {
          title: "A very long road network",
          text: "The local roads are narrow, steep and mostly tree-lined. We ask for the lake or the road name rather than the address — that is what is actually findable on the ground.",
        },
      ],
      areas: ["Perkins", "Saint-Pierre-de-Wakefield", "Poltimore", "Lac McGregor", "Lac Saint-Pierre", "Lac Grand"],
      ctaCardTitle: "Broken down up in Val-des-Monts?",
      ctaCardText: "The lake or the road name is enough — we leave right away.",
      serviceName: "Towing in Val-des-Monts",
      faqTitle: "Frequently Asked Questions — Towing in Val-des-Monts",
      faq: [
        {
          question: "How much does a tow cost in Val-des-Monts?",
          answer:
            "Towing starts at $79.99, and Val-des-Monts is the largest territory we serve: between Perkins at the southern end and Poltimore well to the north there are dozens of kilometres. That is why we work the price out by phone before leaving instead of posting one flat rate.",
        },
        {
          question: "Do you serve all three parts of Val-des-Monts?",
          answer:
            "Yes: Perkins, Saint-Pierre-de-Wakefield and Poltimore, the three former municipalities merged into Val-des-Monts in 1975, plus the Lac McGregor area. The postal code is J8N and the territory is reached by Route 307 through Cantley. Call (819) 921-7869, name the sector first, then the road.",
        },
        {
          question: "Do you go up to the cottages around the lakes?",
          answer:
            "Yes. Lac McGregor is the largest in Val-des-Monts, followed by Lac Saint-Pierre and Lac Grand, and the cottage roads serving them are narrow, steep and sometimes gravel. Give us the lake name and the road name: it beats an address and tells us immediately which truck to send.",
        },
        {
          question: "Do you come in winter, when the roads are iced?",
          answer:
            "Yes, the tow truck runs year-round in Val-des-Monts, nights and holidays included. Winter is our busy season here: the descents toward the lakes and the cottage roads freeze early and thaw late. Tell us whether the road is steep and whether it has been sanded — that decides the vehicle we send.",
        },
      ],
    },
  },
  {
    slug: "luskville",
    group: "zone",
    heroImage: { kind: "static", src: "/remorquage.webp" },
    fr: {
      metaTitle: "Remorquage à Luskville — route 148, Pontiac",
      metaDescription:
        "Remorquage 24h/24 à Luskville et dans la municipalité de Pontiac : route 148, chemin de la Montagne, escarpement d'Eardley. (819) 921-7869.",
      eyebrow: "Remorquage · Luskville",
      heroTitle: "Remorquage",
      heroHighlight: "à Luskville",
      subtitle:
        "Luskville s'étire le long de la route 148, entre la rivière des Outaouais et l'escarpement d'Eardley. C'est droit, c'est long, et il n'y a pas grand-chose entre deux villages.",
      trustBar: ["Route 148 vers l'ouest", "À partir de 79,99 $", "24 h sur 24"],
      reasonsTitle: "Tomber en panne sur la 148 à l'ouest d'Aylmer",
      reasons: [
        {
          title: "Une seule route, très longue",
          text: "La 148 relie Aylmer au Pontiac presque en ligne droite. C'est rapide quand tout va bien et très isolé quand ça s'arrête : peu de commerces, peu d'éclairage, des accotements étroits.",
        },
        {
          title: "L'escarpement juste au nord",
          text: "Luskville est au pied de l'escarpement d'Eardley, dans le secteur ouest du parc de la Gatineau. Les chemins qui montent vers la chute de Luskville sont raides et finissent en sentier.",
        },
        {
          title: "Des adresses très espacées",
          text: "Luskville fait partie de la municipalité de Pontiac, code postal J0X 2G0. Les numéros civiques se suivent sur des kilomètres de 148 : un numéro seul ne dit pas grand-chose, un repère oui.",
        },
      ],
      areas: ["Luskville", "Municipalité de Pontiac", "Chemin de la Montagne", "Chute de Luskville", "Quyon"],
      ctaCardTitle: "En panne sur la 148 vers le Pontiac ?",
      ctaCardText: "Donnez le dernier chemin croisé — on remonte la 148.",
      serviceName: "Remorquage à Luskville",
      faqTitle: "Questions fréquentes — Remorquage à Luskville",
      faq: [
        {
          question: "Combien coûte un remorquage à Luskville ?",
          answer:
            "Le remorquage part de 79,99 $ et la distance compte : Luskville est à une vingtaine de kilomètres à l'ouest de notre atelier d'Aylmer par la route 148. C'est un des rares trajets qu'on fait presque tout droit, donc le temps est prévisible et le prix annoncé au téléphone est ferme.",
        },
        {
          question: "Desservez-vous toute la municipalité de Pontiac ?",
          answer:
            "Oui : Luskville, code postal J0X 2G0, et le reste de la municipalité de Pontiac le long de la 148, jusque vers Quyon. C'est le prolongement naturel de notre secteur d'Aylmer, puisque la 148 est la même route. Appelez le (819) 921-7869 avec le dernier chemin ou le dernier commerce croisé.",
        },
        {
          question: "Et si je n'ai pas de réseau cellulaire ?",
          answer:
            "La couverture est inégale au pied de l'escarpement d'Eardley et sur les chemins qui montent vers la chute de Luskville. Si vous captez un instant, appelez le (819) 921-7869 et donnez d'abord votre position : le dernier chemin croisé sur la 148. Même si l'appel coupe ensuite, on a l'essentiel pour partir.",
        },
        {
          question: "Intervenez-vous sur les chemins qui montent vers le parc ?",
          answer:
            "Oui, avec une réserve : les chemins qui grimpent l'escarpement d'Eardley sont raides et certains se terminent en sentier de randonnée, où aucune dépanneuse ne passe. Dites-nous jusqu'où vous êtes monté et si le véhicule est encore sur une surface carrossable, on vous dit franchement ce qui est faisable. Le bas de ces chemins, côté Luskville, reste accessible en tout temps.",
        },
      ],
    },
    en: {
      metaTitle: "Towing in Luskville — Route 148, Pontiac",
      metaDescription:
        "24/7 towing in Luskville and the Municipality of Pontiac: Route 148, chemin de la Montagne, Eardley Escarpment. Call (819) 921-7869.",
      eyebrow: "Towing · Luskville",
      heroTitle: "Towing",
      heroHighlight: "in Luskville",
      subtitle:
        "Luskville runs along Route 148, between the Ottawa River and the Eardley Escarpment. It is straight, it is long, and there is not much between villages.",
      trustBar: ["Route 148 westbound", "From $79.99", "24 hours a day"],
      reasonsTitle: "Breaking down on the 148 west of Aylmer",
      reasons: [
        {
          title: "One road, and a long one",
          text: "The 148 links Aylmer to the Pontiac almost in a straight line. Quick when all is well, and very isolated when it is not: few businesses, little lighting, narrow shoulders.",
        },
        {
          title: "The escarpment right to the north",
          text: "Luskville sits at the foot of the Eardley Escarpment, in Gatineau Park's western sector. The roads climbing toward Luskville Falls are steep and turn into footpath.",
        },
        {
          title: "Addresses spread thin",
          text: "Luskville is part of the Municipality of Pontiac, postal code J0X 2G0. Street numbers run for kilometres along the 148: a number alone says little, a landmark says a lot.",
        },
      ],
      areas: ["Luskville", "Municipality of Pontiac", "Chemin de la Montagne", "Luskville Falls", "Quyon"],
      ctaCardTitle: "Broken down on the 148 toward the Pontiac?",
      ctaCardText: "Give us the last road you passed — we head up the 148.",
      serviceName: "Towing in Luskville",
      faqTitle: "Frequently Asked Questions — Towing in Luskville",
      faq: [
        {
          question: "How much does a tow cost in Luskville?",
          answer:
            "Towing starts at $79.99 and distance counts: Luskville is about twenty kilometres west of our Aylmer shop on Route 148. It is one of the few runs we make almost in a straight line, so the timing is predictable and the price quoted on the phone is firm.",
        },
        {
          question: "Do you serve the whole Municipality of Pontiac?",
          answer:
            "Yes: Luskville, postal code J0X 2G0, and the rest of the Municipality of Pontiac along the 148, out toward Quyon. It is the natural extension of our Aylmer area, since the 148 is the same road. Call (819) 921-7869 with the last road or the last business you passed.",
        },
        {
          question: "What if I have no cell signal?",
          answer:
            "Coverage is patchy at the foot of the Eardley Escarpment and on the roads climbing toward Luskville Falls. If you get a bar for a moment, call (819) 921-7869 and give your position first: the last road you crossed on the 148. Even if the call drops after that, we have what we need to leave.",
        },
        {
          question: "Do you come out on the roads climbing toward the park?",
          answer:
            "Yes, with one caveat: the roads up the Eardley Escarpment are steep and some end as hiking trail, where no tow truck goes. Tell us how far up you got and whether the vehicle is still on a driveable surface, and we will tell you honestly what can be done. The lower roads around Luskville stay passable year-round.",
        },
      ],
    },
  },
  {
    slug: "ange-gardien",
    group: "zone",
    heroImage: { kind: "static", src: "/remorquage.webp" },
    fr: {
      metaTitle: "Remorquage à L'Ange-Gardien — routes 309 et 315",
      metaDescription:
        "Remorquage 24h/24 à L'Ange-Gardien en Outaouais : routes 309 et 315, Glen Almond, chemins de rang. Prix confirmé au téléphone. (819) 921-7869.",
      eyebrow: "Remorquage · L'Ange-Gardien",
      heroTitle: "Remorquage",
      heroHighlight: "à L'Ange-Gardien",
      subtitle:
        "L'Ange-Gardien vit entre deux routes et beaucoup de chemins de rang. On y va de nuit comme de jour — à condition de savoir par où entrer.",
      trustBar: ["Routes 309 et 315", "À partir de 79,99 $", "Nuit, fin de semaine, fériés"],
      reasonsTitle: "Trouver quelqu'un à L'Ange-Gardien",
      reasons: [
        {
          title: "Deux routes, pas trois",
          text: "La 309 et la 315 encadrent le territoire. Entre les deux, ce sont des chemins de rang : nous dire par quelle route vous êtes arrivé nous évite de faire tout le tour.",
        },
        {
          title: "Un nom porté par deux municipalités",
          text: "Il existe un autre L'Ange-Gardien au Québec, près de la ville de Québec. Précisez « Outaouais » quand vous appelez un service, et surtout quand vous commandez une pièce.",
        },
        {
          title: "Des hameaux, pas des quartiers",
          text: "Glen Almond, Neilon et Ribot ne sont pas des quartiers mais des lieux-dits. Ils parlent beaucoup plus au chauffeur que le nom de la municipalité.",
        },
      ],
      areas: ["Glen Almond", "Neilon", "Ribot", "Route 309", "Route 315"],
      ctaCardTitle: "Besoin d'une dépanneuse à L'Ange-Gardien ?",
      ctaCardText: "La route d'accès et le chemin — c'est tout ce qu'il nous faut.",
      serviceName: "Remorquage à L'Ange-Gardien",
      faqTitle: "Questions fréquentes — Remorquage à L'Ange-Gardien",
      faq: [
        {
          question: "Combien coûte un remorquage à L'Ange-Gardien ?",
          answer:
            "Le remorquage commence à 79,99 $ et L'Ange-Gardien est dans l'est de notre zone, au nord de Buckingham. Le montant dépend du chemin où vous êtes et de la destination du véhicule : deux points du même rang peuvent être à dix kilomètres l'un de l'autre. On confirme le prix au téléphone avant de partir.",
        },
        {
          question: "Quel territoire couvrez-vous à L'Ange-Gardien ?",
          answer:
            "Tout L'Ange-Gardien, code postal J8L, qu'on rejoint par la route 309 ou la route 315 depuis Buckingham : les hameaux de Glen Almond, Neilon et Ribot, et les chemins de rang entre les deux routes. Appelez le (819) 921-7869 en donnant la route d'accès puis le nom du chemin.",
        },
        {
          question: "Venez-vous sur les chemins de rang et de gravier ?",
          answer:
            "Oui. Une bonne part du territoire de L'Ange-Gardien est desservie par des chemins de rang, dont plusieurs ne sont pas asphaltés. Ce qu'on a besoin de savoir avant de partir, c'est la largeur et l'état du chemin et s'il y a de quoi faire demi-tour. Dites-le au téléphone, on envoie le camion qui convient.",
        },
        {
          question: "Remorquez-vous jusqu'à Gatineau ou jusqu'à votre atelier ?",
          answer:
            "Oui, les deux. Beaucoup de véhicules ramassés à L'Ange-Gardien descendent vers un garage de Buckingham ou du secteur Gatineau, et certains viennent directement à notre atelier du 879 chemin Vanier à Aylmer. Le tarif couvre le trajet complet et il est annoncé avant que la dépanneuse quitte la cour.",
        },
      ],
    },
    en: {
      metaTitle: "Towing in L'Ange-Gardien — Routes 309 and 315",
      metaDescription:
        "24/7 towing in L'Ange-Gardien, Outaouais: Routes 309 and 315, Glen Almond, concession roads. Price confirmed by phone. Call (819) 921-7869.",
      eyebrow: "Towing · L'Ange-Gardien",
      heroTitle: "Towing",
      heroHighlight: "in L'Ange-Gardien",
      subtitle:
        "L'Ange-Gardien lives between two highways and a lot of concession roads. We come out at night as readily as by day — as long as we know which way in.",
      trustBar: ["Routes 309 and 315", "From $79.99", "Nights, weekends, holidays"],
      reasonsTitle: "Finding someone in L'Ange-Gardien",
      reasons: [
        {
          title: "Two roads, not three",
          text: "Routes 309 and 315 frame the territory. Between them it is concession roads: telling us which highway you came in on saves us driving the long way around.",
        },
        {
          title: "A name two municipalities share",
          text: "There is another L'Ange-Gardien in Quebec, near Quebec City. Say \"Outaouais\" when you call any service, and especially when you order a part.",
        },
        {
          title: "Hamlets, not neighbourhoods",
          text: "Glen Almond, Neilon and Ribot are place names, not districts. They tell the driver far more than the name of the municipality does.",
        },
      ],
      areas: ["Glen Almond", "Neilon", "Ribot", "Route 309", "Route 315"],
      ctaCardTitle: "Need a tow truck in L'Ange-Gardien?",
      ctaCardText: "The highway in and the road name — that is all we need.",
      serviceName: "Towing in L'Ange-Gardien",
      faqTitle: "Frequently Asked Questions — Towing in L'Ange-Gardien",
      faq: [
        {
          question: "How much does a tow cost in L'Ange-Gardien?",
          answer:
            "Towing starts at $79.99, and L'Ange-Gardien sits at the eastern end of our area, north of Buckingham. The amount depends on which road you are on and where the vehicle is going: two points on the same concession road can be ten kilometres apart. We confirm the price by phone before leaving.",
        },
        {
          question: "What area do you cover in L'Ange-Gardien?",
          answer:
            "All of L'Ange-Gardien, postal code J8L, reached by Route 309 or Route 315 from Buckingham: the hamlets of Glen Almond, Neilon and Ribot, and the concession roads between the two highways. Call (819) 921-7869, give the highway you came in on, then the road name.",
        },
        {
          question: "Do you drive concession and gravel roads?",
          answer:
            "Yes. A good share of L'Ange-Gardien is served by concession roads, several of them unpaved. What we need to know before leaving is the width and condition of the road and whether there is room to turn around. Tell us on the phone and we send the truck that suits it.",
        },
        {
          question: "Will you tow to Gatineau or to your own shop?",
          answer:
            "Yes, either. Many vehicles picked up in L'Ange-Gardien go down to a garage in Buckingham or the Gatineau sector, and some come straight to our shop at 879 chemin Vanier in Aylmer. The rate covers the complete trip and is quoted before the truck leaves the yard.",
        },
      ],
    },
  },
  {
    slug: "prix",
    group: "situation",
    heroImage: { kind: "static", src: "/remorquage.webp" },
    fr: {
      metaTitle: "Remorquage à Gatineau à partir de 79,99 $",
      metaDescription:
        // "remorquer une voiture prix" converts 20x/30 days — the account's
        // second-best keyword — and the verb form appeared nowhere on the
        // page that owns it. The h1 stays as-is for Ads message match.
        "Remorquer une voiture à Gatineau à partir de 79,99 $. On bat le prix : devis confirmé au téléphone en 2 minutes, sans frais caché. (819) 921-7869.",
      eyebrow: "Meilleur prix · Remorquage",
      heroTitle: "Remorquage à Gatineau",
      heroHighlight: "à partir de 79,99 $",
      subtitle:
        "Remorquer une voiture commence à 79,99 $. Dites-nous où vous êtes et où vous allez : on vous confirme le montant exact au téléphone en 2 minutes — prix final, aucun frais caché. Et si vous trouvez moins cher ailleurs, on bat le prix.",
      trustBar: ["À partir de 79,99 $", "On bat le prix, garanti", "Aucun frais caché"],
      reasonsTitle: "Le tarif d'un remorquage à Gatineau — et on bat la concurrence",
      reasons: [
        {
          title: "On bat le prix",
          text: "Vous trouvez un tarif plus bas pour le même remorquage ? Appelez-nous : on s'aligne ou on fait mieux. Réponse honnête, comparer ne prend qu'un appel.",
        },
        {
          title: "Aucun frais caché",
          text: "Le montant confirmé au téléphone est le prix final. Pas de surprise sur la facture, rien d'ajouté à l'arrivée.",
        },
        {
          title: "Un devis en 2 minutes",
          text: "Donnez-nous votre position et votre destination : on calcule votre prix et on vous le donne tout de suite, gratuitement.",
        },
      ],
      priceQuote: {
        title: "Combien coûte un remorquage à Gatineau ?",
        text: "Nos remorquages commencent à 79,99 $. Le montant exact dépend de votre position et de la distance : donnez-nous les deux et on vous le confirme au téléphone en 2 minutes, avant d'envoyer le camion. Et si vous trouvez moins cher ailleurs, on bat le prix. Le montant annoncé est le prix final — aucun frais caché.",
        points: [
          "Remorquage à partir de 79,99 $",
          "On bat le prix : trouvez moins cher, on s'aligne",
          "Devis gratuit confirmé au téléphone en 2 minutes",
          "Prix final, aucun frais caché — promis",
          "Remorquage sécuritaire et fiable, 24h/24",
        ],
      },
      priceFactors: {
        title: "Ce qui fait varier le prix d'un remorquage",
        intro:
          "Nos remorquages commencent à 79,99 $. Voici exactement ce qui fait bouger le montant à partir de là, pour que vous sachiez à quoi vous attendre avant même de décrocher le téléphone.",
        items: [
          {
            title: "La distance",
            text: "C'est le facteur principal : d'où on vous récupère et où va votre véhicule. Un remorquage à l'intérieur d'Aylmer et un transport à l'autre bout de l'Outaouais ne se calculent pas de la même façon.",
          },
          {
            title: "Le type de véhicule",
            text: "Une voiture, un poids lourd, une moto, un VR, une roulotte ou un bateau ne demandent ni le même camion ni le même équipement.",
          },
          {
            title: "Ce qui ne s'ajoute jamais",
            text: "Rien à l'arrivée. Le montant confirmé au téléphone est celui que vous payez — le soir, la fin de semaine ou un jour férié, c'est le montant annoncé qui s'applique.",
          },
        ],
        footnote:
          "Le chiffre exact, on vous le donne au téléphone en 2 minutes — gratuitement et sans engagement.",
      },
      ctaCardTitle: "Vous voulez le meilleur prix ?",
      ctaCardText: "Un appel suffit — prix confirmé en 2 minutes, et on bat la concurrence.",
      serviceName: "Devis de remorquage",
      faqTitle: "Questions fréquentes — Prix d'un remorquage",
      faq: [
        {
          question: "Combien coûte le remorquage d'une voiture ?",
          answer:
            "Nos remorquages commencent à 79,99 $. À partir de là, le coût dépend surtout de votre position et de la distance jusqu'à la destination. On calcule votre montant exact et on vous le confirme au téléphone en 2 minutes — gratuitement et sans engagement.",
        },
        {
          question: "Battez-vous vraiment le prix des autres remorqueurs ?",
          answer:
            "Oui. Si vous avez un prix plus bas pour le même remorquage, appelez-nous : on s'aligne ou on fait mieux. Comparer ne prend qu'un simple appel.",
        },
        {
          question: "Y a-t-il des frais cachés ou des surprises sur la facture ?",
          answer:
            "Non. Le prix confirmé au téléphone est le prix final, même le soir ou la fin de semaine — aucun frais ajouté à l'arrivée.",
        },
        {
          question: "Puis-je payer par carte ?",
          answer: "Oui, la carte de débit et de crédit sont acceptées directement avec le chauffeur.",
        },
      ],
    },
    en: {
      metaTitle: "Towing in Gatineau from $79.99",
      metaDescription:
        "Towing in Gatineau from $79.99. We beat the price: free quote confirmed by phone in 2 minutes, final price with no hidden fees. Call (819) 921-7869.",
      eyebrow: "Best price · Towing",
      heroTitle: "Towing in Gatineau",
      heroHighlight: "from $79.99",
      subtitle:
        "Our tows start at $79.99. Tell us where you are and where you're headed: we confirm the exact amount by phone in 2 minutes — final price, no hidden fees. And if you find it cheaper elsewhere, we beat the price.",
      trustBar: ["From $79.99", "We beat the price", "No hidden fees"],
      reasonsTitle: "Towing rates in Gatineau — and we beat the competition",
      reasons: [
        {
          title: "We beat the price",
          text: "Found a lower rate for the same tow? Call us: we'll match it or do better. An honest answer, comparing is just one call.",
        },
        {
          title: "No hidden fees",
          text: "The amount confirmed on the phone is the final price. No surprise on the bill, nothing added on arrival.",
        },
        {
          title: "A quote in 2 minutes",
          text: "Give us your location and destination: we work out your price and give it to you right away, for free.",
        },
      ],
      priceQuote: {
        title: "How much does a tow cost in Gatineau?",
        text: "Our tows start at $79.99. The exact amount depends on where you are and how far your vehicle is going: give us both and we confirm it by phone in 2 minutes, before the truck leaves. And if you find it cheaper elsewhere, we beat the price. The amount quoted is the final price — no hidden fees.",
        points: [
          "Towing from $79.99",
          "We beat the price: find it cheaper, we match it",
          "Free quote confirmed by phone in 2 minutes",
          "Final price, no hidden fees — promised",
          "Safe, reliable towing, 24/7",
        ],
      },
      priceFactors: {
        title: "What makes the price of a tow go up or down",
        intro:
          "Our tows start at $79.99. Here is exactly what moves the amount from there, so you know what to expect before you even pick up the phone.",
        items: [
          {
            title: "The distance",
            text: "This is the main factor: where we pick you up and where your vehicle is going. A tow within Aylmer and a haul to the far side of the Outaouais aren't worked out the same way.",
          },
          {
            title: "The type of vehicle",
            text: "A car, a heavy truck, a motorcycle, an RV, a trailer or a boat need neither the same truck nor the same equipment.",
          },
          {
            title: "What never gets added",
            text: "Nothing on arrival. The amount confirmed on the phone is the amount you pay — evening, weekend or holiday, the quoted amount is what applies.",
          },
        ],
        footnote:
          "We give you the exact figure on the phone in 2 minutes — free, with no obligation.",
      },
      ctaCardTitle: "Want the best price?",
      ctaCardText: "One call is all it takes — price confirmed in 2 minutes, and we beat the competition.",
      serviceName: "Towing quote",
      faqTitle: "Frequently Asked Questions — Towing Cost",
      faq: [
        {
          question: "How much does it cost to tow a car?",
          answer:
            "Our tows start at $79.99. From there, the cost mainly depends on your location and the distance to the destination. We work out your exact amount and confirm it by phone in 2 minutes — free and with no obligation.",
        },
        {
          question: "Do you really beat other tow companies' prices?",
          answer:
            "Yes. If you have a lower price for the same tow, call us: we'll match it or do better. Comparing takes just one call.",
        },
        {
          question: "Are there hidden fees or surprises on the bill?",
          answer:
            "No. The price confirmed by phone is final, even at night or on weekends — nothing added on arrival.",
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
    indexable: false,
    group: "situation",
    heroImage: { kind: "static", src: "/remorquage.webp" },
    fr: {
      metaTitle: "Remorquage près de vous — Réponse immédiate | Mécano Express",
      metaDescription:
        "Remorqueuse près de chez vous, disponible jour et nuit. Une vraie personne répond, camion envoyé rapidement. Appelez le (819) 921-7869.",
      eyebrow: "Remorquage à proximité",
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
      eyebrow: "Towing near me",
      heroTitle: "Towing",
      heroHighlight: "Near Me",
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
      eyebrow: "Booster · Survoltage Batterie",
      heroTitle: "Booster",
      heroHighlight: "de Batterie",
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
