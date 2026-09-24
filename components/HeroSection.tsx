import { getTranslations } from "next-intl/server";

import Reveal from "@/components/Reveal";

type Props = {
  locale: string;
};

export default async function HeroSection({
  locale,
}: Props) {
  const t = await getTranslations({
    locale,
  });

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden border-b border-white/10"
    >
      {/* =========================
          BACKGROUND VIDEO
      ========================= */}

      <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source
          src="/videos/superx-autonomous.mp4"
          type="video/mp4"
        />
      </video>

      {/* =========================
          VIDEO OVERLAY
      ========================= */}

      <div className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/25 to-black/5" />

      <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-black/20" />

      {/* subtle brand glow */}

      <div className="absolute -right-40 top-1/4 h-[500px] w-[500px] rounded-full bg-cyan-500/5 blur-[140px]" />

      {/* =========================
          CONTENT
      ========================= */}

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-20 pt-36">
        <div className="max-w-5xl">

          {/* LABEL */}

          <Reveal>
            <div className="mb-6 flex items-center gap-4">
              <div className="brand-gradient-line h-[2px] w-10 rounded-full" />

              <p className="text-sm uppercase tracking-[0.35em] text-white/60">
                SUPER X AI
              </p>
            </div>
          </Reveal>

          {/* TITLE */}

          <Reveal delay={100}>
            <h1 className="max-w-5xl text-4xl font-semibold leading-[1.08] text-white sm:text-5xl md:text-6xl lg:text-7xl">
              {t("hero.title")}
            </h1>

            <div className="brand-gradient-line mt-7 h-[2px] w-28 rounded-full" />
          </Reveal>

          {/* DESCRIPTION */}

          <Reveal delay={200}>
            <p className="mt-8 max-w-2xl text-base leading-8 text-white/70 md:text-lg">
              {t("hero.subtitle")}
            </p>
          </Reveal>

          {/* BUTTONS */}

          <Reveal delay={300}>
            <div className="mt-10 flex flex-wrap gap-4">

              <a
                href="#solutions"
                className="
                  rounded-full
                  bg-gradient-to-r
                  from-blue-500
                  via-cyan-400
                  to-green-400
                  px-7
                  py-3
                  font-semibold
                  text-black
                  transition
                  duration-300
                  hover:scale-[1.04]
                  hover:shadow-[0_0_45px_rgba(6,182,212,0.25)]
                "
              >
                {t("hero.primaryButton")}
              </a>

              <a
                href="#contact"
                className="
                  rounded-full
                  border
                  border-white/25
                  bg-black/15
                  px-7
                  py-3
                  font-medium
                  text-white
                  backdrop-blur-sm
                  transition
                  duration-300
                  hover:border-white/60
                  hover:bg-white/10
                "
              >
                {t("hero.secondaryButton")}
              </a>

            </div>
          </Reveal>

          {/* =========================
              STATS
          ========================= */}

          <Reveal delay={400}>
            <div className="mt-14 flex flex-wrap gap-x-12 gap-y-6 border-t border-white/15 pt-7">

              <div>
                <p className="text-xl font-semibold text-white">
                  Level 4
                </p>

                <p className="mt-1 text-xs uppercase tracking-wider text-white/45">
                  {t("hero.autonomousDriving")}
                </p>
              </div>

              <div>
                <p className="text-xl font-semibold text-white">
                  24/7
                </p>

                <p className="mt-1 text-xs uppercase tracking-wider text-white/45">
                  {t("hero.operation")}
                </p>
              </div>

              <div>
                <p className="text-xl font-semibold text-white">
                  Thailand
                </p>

                <p className="mt-1 text-xs uppercase tracking-wider text-white/45">
                  {t("hero.localSupport")}
                </p>
              </div>

            </div>
          </Reveal>

        </div>
      </div>

      {/* =========================
          SCROLL INDICATOR
      ========================= */}

      <a
        href="#about"
        aria-label="Scroll to About"
        className="
          absolute
          bottom-7
          left-1/2
          z-20
          -translate-x-1/2
          text-center
          text-xs
          uppercase
          tracking-[0.3em]
          text-white/35
          transition
          hover:text-white
        "
      >
        <span className="block">
          Scroll
        </span>

        <span className="mt-2 block animate-bounce text-lg">
          ↓
        </span>
      </a>
    </section>
  );
}