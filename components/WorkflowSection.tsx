import { getTranslations } from "next-intl/server";

type Props = {
  locale: string;
};

export default async function WorkflowSection({ locale }: Props) {
  const t = await getTranslations({ locale });

  return (
    <section className="border-b border-white/10 bg-black py-28">
      <div className="mx-auto max-w-7xl px-6">
        <p className="mb-4 text-sm uppercase tracking-[0.3em] text-neutral-500">
          {t("workflow.label")}
        </p>

        <h2 className="max-w-4xl text-4xl font-semibold leading-tight md:text-5xl">
          {t("workflow.title")}
        </h2>

        <p className="mt-6 max-w-3xl text-lg leading-8 text-neutral-400">
          {t("workflow.description")}
        </p>

        <div className="mt-16 grid gap-8 border-t border-white/10 pt-12 md:grid-cols-2 lg:grid-cols-4">
          {[1, 2, 3, 4].map((item) => (
            <div key={item}>
              <p className="text-4xl font-semibold text-neutral-700">
                0{item}
              </p>

              <h3 className="mt-6 text-xl font-semibold">
                {t(`workflow.step${item}Title`)}
              </h3>

              <p className="mt-3 leading-7 text-neutral-500">
                {t(`workflow.step${item}Description`)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}