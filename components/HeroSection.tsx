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
      {/* VIDEO */}

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

      {/* VIDEO OVERLAY */}

      <div className="absolute inset-0 bg-gradient-to-r from-black/55 via-black/20 to-black/5" />

      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20" />

      {/* CONTENT */}

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-20 pt-36">
        <div className="max-w-4xl">

          <Reveal>
            <p className="mb-5 text-sm uppercase tracking-[0.35em] text-white/60">
              SUPER X AI
            </p>
          </Reveal>

          <Reveal delay={100}>
            <h1 className="text-4xl font-semibold leading-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
              {t("hero.title")}
            </h1>
          </Reveal>

          <Reveal delay={200}>
            <p className="mt-8 max-w-2xl text-base leading-8 text-white/75 md:text-lg">
              {t("hero.subtitle")}
            </p>
          </Reveal>

          <Reveal delay={300}>
            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#solutions"
                className="rounded-full bg-white px-7 py-3 font-medium text-black transition duration-300 hover:scale-[1.03] hover:bg-neutral-200"
              >
                {t(
                  "hero.primaryButton"
                )}
              </a>

              <a
                href="#contact"
                className="rounded-full border border-white/30 bg-black/10 px-7 py-3 font-medium text-white backdrop-blur-sm transition duration-300 hover:border-white hover:bg-white/10"
              >
                {t(
                  "hero.secondaryButton"
                )}
              </a>
            </div>
          </Reveal>

          <Reveal delay={400}>
            <div className="mt-14 flex flex-wrap gap-x-10 gap-y-6 border-t border-white/20 pt-7">

              <div>
                <p className="text-xl font-semibold">
                  Level 4
                </p>

                <p className="mt-1 text-xs uppercase tracking-wider text-white/50">
                  {t(
                    "hero.autonomousDriving"
                  )}
                </p>
              </div>

              <div>
                <p className="text-xl font-semibold">
                  24/7
                </p>

                <p className="mt-1 text-xs uppercase tracking-wider text-white/50">
                  {t(
                    "hero.operation"
                  )}
                </p>
              </div>

              <div>
                <p className="text-xl font-semibold">
                  Thailand
                </p>

                <p className="mt-1 text-xs uppercase tracking-wider text-white/50">
                  {t(
                    "hero.localSupport"
                  )}
                </p>
              </div>

            </div>
          </Reveal>
        </div>
      </div>

      {/* SCROLL */}

      <a
        href="#about"
        aria-label="Scroll to About"
        className="absolute bottom-7 left-1/2 z-20 -translate-x-1/2 text-center text-xs uppercase tracking-[0.3em] text-white/40 transition hover:text-white"
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