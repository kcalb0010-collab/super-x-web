import { getTranslations } from "next-intl/server";

import Reveal from "@/components/Reveal";

type Props = {
  locale: string;
};

export default async function PartnersSection({
  locale,
}: Props) {
  const t = await getTranslations({
    locale,
  });

  return (
    <section className="border-b border-white/10 bg-neutral-950 py-24">
      <div className="mx-auto max-w-7xl px-6">

        <Reveal>
          <p className="text-center text-sm uppercase tracking-[0.3em] text-neutral-500">
            {t("partners.label")}
          </p>
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-2">

          <Reveal delay={100}>
            <div className="group rounded-3xl border border-white/10 bg-black p-10 text-center transition duration-500 hover:-translate-y-2 hover:border-white/25">

              <p className="text-sm uppercase tracking-[0.25em] text-neutral-500">
                {t(
                  "partners.zelosLabel"
                )}
              </p>

              <h3 className="mt-4 text-3xl font-semibold transition group-hover:tracking-wide">
                ZELOSTECH
              </h3>

              <p className="mt-4 text-sm leading-6 text-neutral-500">
                {t(
                  "partners.zelosDescription"
                )}
              </p>
            </div>
          </Reveal>

          <Reveal delay={250}>
            <div className="group rounded-3xl border border-white/10 bg-black p-10 text-center transition duration-500 hover:-translate-y-2 hover:border-white/25">

              <p className="text-sm uppercase tracking-[0.25em] text-neutral-500">
                {t(
                  "partners.dimetLabel"
                )}
              </p>

              <h3 className="mt-4 text-3xl font-semibold transition group-hover:tracking-wide">
                DIMET (SIAM) PCL
              </h3>

              <p className="mt-4 text-sm leading-6 text-neutral-500">
                {t(
                  "partners.dimetDescription"
                )}
              </p>
            </div>
          </Reveal>

        </div>
      </div>
    </section>
  );
}