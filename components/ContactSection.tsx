import { getTranslations } from "next-intl/server";

import Reveal from "@/components/Reveal";

type Props = {
  locale: string;
};

export default async function ContactSection({
  locale,
}: Props) {
  const t = await getTranslations({
    locale,
  });

  return (
    <section
      id="contact"
      className="bg-neutral-950 py-28"
    >
      <div className="mx-auto max-w-7xl px-6">

        <Reveal>
          <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-black p-10 md:p-16">

            {/* DECORATION */}

            <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-blue-600/10 blur-3xl" />

            <div className="absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-cyan-600/5 blur-3xl" />

            <div className="relative">

              <p className="mb-4 text-sm uppercase tracking-[0.3em] text-neutral-500">
                {t("contact.label")}
              </p>

              <h2 className="max-w-4xl text-4xl font-semibold leading-tight md:text-6xl">
                {t("contact.title")}
              </h2>

              <p className="mt-8 max-w-2xl text-lg leading-8 text-neutral-400">
                {t(
                  "contact.description"
                )}
              </p>

              {/* EMAIL */}

              <div className="mt-8">
                <p className="text-sm uppercase tracking-[0.2em] text-neutral-600">
                  Email
                </p>

                <a
                  href="mailto:info@super-x.tech"
                  className="mt-2 inline-block text-xl font-medium text-white transition hover:text-neutral-300 md:text-2xl"
                >
                  info@super-x.tech
                </a>
              </div>

              {/* BUTTONS */}

              <div className="mt-10 flex flex-wrap items-center gap-4">

                <a
                  href="mailto:info@super-x.tech"
                  className="rounded-full bg-white px-8 py-4 font-medium text-black transition duration-300 hover:scale-[1.03] hover:bg-neutral-200"
                >
                  {t(
                    "contact.button"
                  )}
                </a>

                <a
                  href="#home"
                  className="rounded-full border border-neutral-700 px-8 py-4 font-medium transition duration-300 hover:border-white hover:bg-white/5"
                >
                  {t(
                    "contact.backTop"
                  )}
                </a>

              </div>
            </div>
          </div>
        </Reveal>

      </div>
    </section>
  );
}