import { getTranslations } from "next-intl/server";

type Props = {
  locale: string;
};

export default async function PartnersSection({ locale }: Props) {
  const t = await getTranslations({ locale });

  return (
    <section className="border-b border-white/10 bg-neutral-950 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <p className="text-center text-sm uppercase tracking-[0.3em] text-neutral-500">
          {t("partners.label")}
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl border border-white/10 bg-black p-10 text-center">
            <p className="text-sm uppercase tracking-[0.25em] text-neutral-500">
              {t("partners.zelosLabel")}
            </p>

            <h3 className="mt-4 text-3xl font-semibold">
              ZELOSTECH
            </h3>

            <p className="mt-4 text-sm leading-6 text-neutral-500">
              {t("partners.zelosDescription")}
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-black p-10 text-center">
            <p className="text-sm uppercase tracking-[0.25em] text-neutral-500">
              {t("partners.dimetLabel")}
            </p>

            <h3 className="mt-4 text-3xl font-semibold">
              DIMET (SIAM) PCL
            </h3>

            <p className="mt-4 text-sm leading-6 text-neutral-500">
              {t("partners.dimetDescription")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}