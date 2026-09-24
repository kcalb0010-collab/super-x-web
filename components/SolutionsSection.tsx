import { getTranslations } from "next-intl/server";

import Reveal from "@/components/Reveal";

type Props = {
  locale: string;
};

export default async function SolutionsSection({
  locale,
}: Props) {
  const t = await getTranslations({
    locale,
  });

  return (
    <section
      id="solutions"
      className="border-b border-white/10 bg-black py-28"
    >
      <div className="mx-auto max-w-7xl px-6">

        <Reveal>
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-neutral-500">
            {t("solutions.label")}
          </p>

          <h2 className="max-w-4xl text-4xl font-semibold leading-tight md:text-5xl">
            {t("solutions.title")}
          </h2>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-neutral-400">
            {t(
              "solutions.description"
            )}
          </p>
        </Reveal>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">

          <Reveal
            delay={0}
            className="h-full"
          >
            <div className="h-full rounded-3xl border border-white/10 bg-neutral-950 p-8 transition duration-500 hover:-translate-y-2 hover:border-white/30 hover:bg-neutral-900">
              <span className="text-sm text-neutral-500">
                01
              </span>

              <h3 className="mt-10 text-2xl font-semibold">
                {t(
                  "solutions.card1Title"
                )}
              </h3>

              <p className="mt-4 leading-7 text-neutral-400">
                {t(
                  "solutions.card1Description"
                )}
              </p>
            </div>
          </Reveal>

          <Reveal
            delay={150}
            className="h-full"
          >
            <div className="h-full rounded-3xl border border-white/10 bg-neutral-950 p-8 transition duration-500 hover:-translate-y-2 hover:border-white/30 hover:bg-neutral-900">
              <span className="text-sm text-neutral-500">
                02
              </span>

              <h3 className="mt-10 text-2xl font-semibold">
                {t(
                  "solutions.card2Title"
                )}
              </h3>

              <p className="mt-4 leading-7 text-neutral-400">
                {t(
                  "solutions.card2Description"
                )}
              </p>
            </div>
          </Reveal>

          <Reveal
            delay={300}
            className="h-full"
          >
            <div className="h-full rounded-3xl border border-white/10 bg-neutral-950 p-8 transition duration-500 hover:-translate-y-2 hover:border-white/30 hover:bg-neutral-900">
              <span className="text-sm text-neutral-500">
                03
              </span>

              <h3 className="mt-10 text-2xl font-semibold">
                {t(
                  "solutions.card3Title"
                )}
              </h3>

              <p className="mt-4 leading-7 text-neutral-400">
                {t(
                  "solutions.card3Description"
                )}
              </p>
            </div>
          </Reveal>

        </div>
      </div>
    </section>
  );
}