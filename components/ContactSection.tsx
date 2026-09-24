import { getTranslations } from "next-intl/server";

type Props = {
  locale: string;
};

export default async function ContactSection({ locale }: Props) {
  const t = await getTranslations({ locale });

  return (
    <section
      id="contact"
      className="bg-neutral-950 py-28"
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-black p-10 md:p-16">
          <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-blue-600/10 blur-3xl" />

          <div className="relative">
            <p className="mb-4 text-sm uppercase tracking-[0.3em] text-neutral-500">
              {t("contact.label")}
            </p>

            <h2 className="max-w-4xl text-4xl font-semibold leading-tight md:text-6xl">
              {t("contact.title")}
            </h2>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-neutral-400">
              {t("contact.description")}
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href="mailto:info@super-x.tech"
                className="rounded-full bg-white px-8 py-4 font-medium text-black transition hover:bg-neutral-200"
              >
                {t("contact.button")}
              </a>

              <a
                href="mailto:info@super-x.tech"
                className="rounded-full border border-white/10 bg-white/5 px-6 py-4 text-sm text-neutral-300 transition hover:border-white/30 hover:text-white"
              >
                info@super-x.tech
              </a>

              <a
                href="#home"
                className="rounded-full border border-neutral-700 px-8 py-4 font-medium transition hover:border-white"
              >
                {t("contact.backTop")}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}