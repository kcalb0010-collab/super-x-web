import { getTranslations } from "next-intl/server";

import {
  FaTruck,
  FaProjectDiagram,
  FaHeadset,
} from "react-icons/fa";

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
      className="relative overflow-hidden border-b border-white/10 bg-black py-28"
    >
      {/* BACKGROUND */}

      <div className="absolute -right-40 top-20 h-[500px] w-[500px] rounded-full bg-cyan-500/5 blur-[150px]" />

      <div className="relative mx-auto max-w-7xl px-6">

        {/* =========================
            HEADER
        ========================= */}

        <Reveal>
          <div className="max-w-4xl">
            <div className="mb-4 flex items-center gap-4">
              <div className="brand-gradient-line h-[2px] w-10 rounded-full" />

              <p className="text-sm uppercase tracking-[0.3em] text-neutral-500">
                {t("solutions.label")}
              </p>
            </div>

            <h2 className="text-4xl font-semibold leading-tight md:text-5xl">
              {t("solutions.title")}
            </h2>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-neutral-400">
              {t("solutions.description")}
            </p>
          </div>
        </Reveal>

        {/* =========================
            CARDS
        ========================= */}

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">

          {/* CARD 1 */}

          <Reveal
            delay={0}
            className="h-full"
          >
            <div className="sx-card group h-full rounded-3xl p-8">

              <div className="flex items-center justify-between">

                <div className="
                  flex
                  h-12
                  w-12
                  items-center
                  justify-center
                  rounded-2xl
                  border
                  border-cyan-400/20
                  bg-cyan-400/5
                  text-cyan-300
                  transition
                  duration-300
                  group-hover:border-cyan-300/40
                  group-hover:bg-cyan-400/10
                ">
                  <FaTruck size={20} />
                </div>

                <span className="text-sm text-neutral-600">
                  01
                </span>

              </div>

              <h3 className="mt-10 text-2xl font-semibold">
                {t("solutions.card1Title")}
              </h3>

              <p className="mt-4 leading-7 text-neutral-400">
                {t("solutions.card1Description")}
              </p>

              <div className="brand-gradient-line mt-8 h-px w-12 opacity-40 transition-all duration-500 group-hover:w-24 group-hover:opacity-100" />

            </div>
          </Reveal>

          {/* CARD 2 */}

          <Reveal
            delay={150}
            className="h-full"
          >
            <div className="sx-card group h-full rounded-3xl p-8">

              <div className="flex items-center justify-between">

                <div className="
                  flex
                  h-12
                  w-12
                  items-center
                  justify-center
                  rounded-2xl
                  border
                  border-blue-400/20
                  bg-blue-400/5
                  text-blue-300
                  transition
                  duration-300
                  group-hover:border-blue-300/40
                  group-hover:bg-blue-400/10
                ">
                  <FaProjectDiagram size={20} />
                </div>

                <span className="text-sm text-neutral-600">
                  02
                </span>

              </div>

              <h3 className="mt-10 text-2xl font-semibold">
                {t("solutions.card2Title")}
              </h3>

              <p className="mt-4 leading-7 text-neutral-400">
                {t("solutions.card2Description")}
              </p>

              <div className="brand-gradient-line mt-8 h-px w-12 opacity-40 transition-all duration-500 group-hover:w-24 group-hover:opacity-100" />

            </div>
          </Reveal>

          {/* CARD 3 */}

          <Reveal
            delay={300}
            className="h-full"
          >
            <div className="sx-card group h-full rounded-3xl p-8">

              <div className="flex items-center justify-between">

                <div className="
                  flex
                  h-12
                  w-12
                  items-center
                  justify-center
                  rounded-2xl
                  border
                  border-green-400/20
                  bg-green-400/5
                  text-green-300
                  transition
                  duration-300
                  group-hover:border-green-300/40
                  group-hover:bg-green-400/10
                ">
                  <FaHeadset size={20} />
                </div>

                <span className="text-sm text-neutral-600">
                  03
                </span>

              </div>

              <h3 className="mt-10 text-2xl font-semibold">
                {t("solutions.card3Title")}
              </h3>

              <p className="mt-4 leading-7 text-neutral-400">
                {t("solutions.card3Description")}
              </p>

              <div className="brand-gradient-line mt-8 h-px w-12 opacity-40 transition-all duration-500 group-hover:w-24 group-hover:opacity-100" />

            </div>
          </Reveal>

        </div>
      </div>
    </section>
  );
}