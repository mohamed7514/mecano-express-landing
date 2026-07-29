import type { Metadata } from "next";
import { isLocale, defaultLocale, type Locale } from "@/lib/i18n";
import { business } from "@/lib/business";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const l: Locale = isLocale(locale) ? locale : defaultLocale;
  const title = l === "fr" ? "Politique de confidentialité | Mécano Express" : "Privacy Policy | Mécano Express";
  return {
    title,
    alternates: {
      canonical: `/${l}/confidentialite`,
      languages: { fr: "/fr/confidentialite", en: "/en/confidentialite", "x-default": "/fr/confidentialite" },
    },
    robots: { index: false, follow: true },
  };
}

const content: Record<Locale, { title: string; updated: string; sections: { h: string; p: string }[] }> = {
  fr: {
    title: "Politique de confidentialité",
    updated: "Dernière mise à jour : 2026",
    sections: [
      {
        h: "Ce que nous collectons",
        p: `Ce site utilise Google Analytics et, lorsqu'activé, le suivi de conversion Google Ads pour comprendre comment les visiteurs utilisent le site et mesurer l'efficacité de nos annonces. Ces outils utilisent des cookies et peuvent enregistrer des informations comme la page visitée, l'appareil utilisé, et si vous avez cliqué sur notre numéro de téléphone. Nous ne collectons aucune information de paiement sur ce site.`,
      },
      {
        h: "Comment ces informations sont utilisées",
        p: "Les données sont utilisées uniquement pour mesurer la performance du site et de nos campagnes publicitaires. Nous ne vendons ni ne louons vos informations à des tiers.",
      },
      {
        h: "Vos choix",
        p: "Vous pouvez désactiver les cookies dans les paramètres de votre navigateur. Cela n'affecte pas votre capacité à naviguer sur le site ou à nous appeler.",
      },
      {
        h: "Nous contacter",
        p: `Pour toute question concernant cette politique, écrivez-nous à ${business.email} ou appelez le ${business.phoneDisplay}.`,
      },
    ],
  },
  en: {
    title: "Privacy Policy",
    updated: "Last updated: 2026",
    sections: [
      {
        h: "What we collect",
        p: `This site uses Google Analytics and, when enabled, Google Ads conversion tracking to understand how visitors use the site and measure the effectiveness of our ads. These tools use cookies and may record information such as the page visited, the device used, and whether you clicked our phone number. We do not collect any payment information on this site.`,
      },
      {
        h: "How this information is used",
        p: "Data is used only to measure site and ad campaign performance. We do not sell or rent your information to third parties.",
      },
      {
        h: "Your choices",
        p: "You can disable cookies in your browser settings. This does not affect your ability to browse the site or call us.",
      },
      {
        h: "Contact us",
        p: `For any question about this policy, email us at ${business.email} or call ${business.phoneDisplay}.`,
      },
    ],
  },
};

export default async function PrivacyPolicyPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const l: Locale = isLocale(locale) ? locale : defaultLocale;
  const c = content[l];

  return (
    <section className="mx-auto max-w-3xl px-4 py-20 sm:px-6">
      <h1 className="font-display text-3xl font-extrabold tracking-tight">{c.title}</h1>
      <p className="mt-2 text-sm text-steel-500">{c.updated}</p>
      <div className="mt-10 space-y-8">
        {c.sections.map((s) => (
          <div key={s.h}>
            <h2 className="font-display text-lg font-bold">{s.h}</h2>
            <p className="mt-2 leading-relaxed text-steel-500">{s.p}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
