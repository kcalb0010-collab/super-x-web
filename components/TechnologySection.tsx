import { getTranslations } from "next-intl/server";

import {
  FaRoute,
  FaBrain,
  FaNetworkWired,
  FaChartLine,
} from "react-icons/fa";

import Reveal from "@/components/Reveal";

type Props = {
  locale: string;
};

export default async function TechnologySection({
  locale,
}: Props) {
  const t = await getTranslations({
    locale,
  });

  const technologies = [
    {
      number: "01",
      title: "technology.item1Title",
      description: "technology.item1Description",
      icon: FaRoute,
    },
    {
      number: "02",
      title: "technology.item2Title",
      description: "technology.item2Description",
      icon: FaBrain,
    },
    {
      number: "03",
      title: "technology.item3Title",
      description: "technology.item3Description",
      icon: FaNetworkWired,
    },
    {
      number: "04",
      title: "technology.item4Title",
      description: "technology.item4Description",
      icon: FaChartLine,
    },
  ];

  return (
    <section
      id="technology"
      className="relative overflow-hidden border-b border-white/10 bg-neutral-950 py-28"
    >
      {/* BACKGROUND */}

      <div className="absolute -left-48 top-1/3 h-[500px] w-[500px] rounded-full bg-blue-500/5 blur-[160px]" />

      <div className="relative mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-[0.85fr_1.15fr]">

        {/* =========================
            LEFT CONTENT
        ========================= */}

        <Reveal>
          <div className="lg:sticky lg:top-32 lg:self-start">

            <div className="mb-4 flex items-center gap-4">
              <div className="brand-gradient-line h-[2px] w-10 rounded-full" />

              <p className="text-sm uppercase tracking-[0.3em] text-neutral-500">
                {t("technology.label")}
              </p>
            </div>

            <h2 className="max-w-xl text-4xl font-semibold leading-tight md:text-5xl">
              {t("technology.title")}
            </h2>

            <p className="mt-8 max-w-xl text-lg leading-8 text-neutral-400">
              {t("technology.description")}
            </p>

            {/* TECHNOLOGY BADGE */}

            <div className="mt-10 inline-flex items-center gap-3 rounded-full border border-white/10 bg-black/40 px-5 py-3">

              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-60" />

                <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan-400" />
              </span>

              <span className="text-sm text-neutral-300">
                Level 4 Autonomous System
              </span>

            </div>
          </div>
        </Reveal>

        {/* =========================
            TECHNOLOGY FLOW
        ========================= */}

        <div className="relative">

          {/* CONNECT LINE */}

          <div className="
            absolute
            left-6
            top-8
            hidden
            h-[calc(100%-64px)]
            w-px
            bg-gradient-to-b
            from-blue-500/50
            via-cyan-400/50
            to-green-400/50
            sm:block
          " />

          <div className="space-y-6">

            {technologies.map(
              (
                technology,
                index
              ) => {
                const Icon =
                  technology.icon;

                return (
                  <Reveal
                    key={
                      technology.number
                    }
                    delay={index * 120}
                  >
                    <div className="group relative flex gap-5 sm:gap-6">

                      {/* NUMBER / ICON */}

                      <div className="
                        relative
                        z-10
                        flex
                        h-12
                        w-12
                        shrink-0
                        items-center
                        justify-center
                        rounded-full
                        border
                        border-white/10
                        bg-black
                        text-cyan-300
                        shadow-lg
                        shadow-black/30
                        transition
                        duration-300
                        group-hover:border-cyan-400/40
                      ">
                        <Icon size={17} />
                      </div>

                      {/* CARD */}

                      <div className="sx-card flex-1 rounded-2xl p-6 md:p-7">

                        <div className="flex flex-wrap items-center justify-between gap-4">

                          <h3 className="text-lg font-semibold md:text-xl">
                            {t(
                              technology.title
                            )}
                          </h3>

                          <span className="text-xs uppercase tracking-[0.25em] text-neutral-600">
                            {
                              technology.number
                            }
                          </span>

                        </div>

                        <p className="mt-4 max-w-xl text-sm leading-7 text-neutral-500 md:text-base">
                          {t(
                            technology.description
                          )}
                        </p>

                        <div className="brand-gradient-line mt-6 h-px w-10 opacity-40 transition-all duration-500 group-hover:w-20 group-hover:opacity-100" />

                      </div>
                    </div>
                  </Reveal>
                );
              }
            )}

          </div>
        </div>
      </div>
    </section>
  );
}