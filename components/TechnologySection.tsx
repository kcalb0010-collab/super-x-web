import { getTranslations } from "next-intl/server";

type Props = {
  locale: string;
};

export default async function TechnologySection({ locale }: Props) {
  const t = await getTranslations({ locale });

  return (
    <section
      id="technology"
      className="border-b border-white/10 bg-neutral-950 py-28"
    >
      <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-2">
        <div>
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-neutral-500">
            {t("technology.label")}
          </p>

          <h2 className="text-4xl font-semibold leading-tight md:text-5xl">
            {t("technology.title")}
          </h2>

          <p className="mt-8 max-w-xl text-lg leading-8 text-neutral-400">
            {t("technology.description")}
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {[1, 2, 3, 4].map((item) => (
            <div
              key={item}
              className="rounded-2xl border border-white/10 bg-black/30 p-6"
            >
              <p className="text-sm text-neutral-500">
                0{item}
              </p>

              <h3 className="mt-6 text-lg font-semibold">
                {t(`technology.item${item}Title`)}
              </h3>

              <p className="mt-3 text-sm leading-6 text-neutral-500">
                {t(`technology.item${item}Description`)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}