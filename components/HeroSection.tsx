import { getTranslations } from "next-intl/server";

type Props = {
  locale: string;
};

export default async function HeroSection({ locale }: Props) {
  const t = await getTranslations({ locale });

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden border-b border-white/10 pt-20"
    >
      {/* BACKGROUND VIDEO */}
        <video
        autoPlay
        muted
        loop
        playsInline
        poster="/images/car-superx.png"
        className="absolute inset-0 h-full w-full object-cover"
        >
        <source
            src="/videos/superx-autonomous.mp4"
            type="video/mp4"
        />
        </video>

      
    
        {/* LIGHT OVERLAY */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/45 via-black/10 to-transparent" />

      {/* CONTENT */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 py-24">
        <div className="max-w-4xl">
          <p className="mb-5 text-sm uppercase tracking-[0.35em] text-white/60">
            SUPER X AI
          </p>

          <h1 className="text-4xl font-semibold leading-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
            {t("hero.title")}
          </h1>

          <p className="mt-8 max-w-2xl text-base leading-8 text-white/70 md:text-lg">
            {t("hero.subtitle")}
          </p>

          {/* BUTTONS */}
          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#solutions"
              className="rounded-full bg-white px-7 py-3 font-medium text-black transition duration-300 hover:bg-neutral-200"
            >
              {t("hero.primaryButton")}
            </a>

            <a
              href="#contact"
              className="rounded-full border border-white/30 bg-black/20 px-7 py-3 font-medium text-white backdrop-blur-sm transition duration-300 hover:border-white hover:bg-white/10"
            >
              {t("hero.secondaryButton")}
            </a>
          </div>

          {/* STATS */}
          <div className="mt-14 flex flex-wrap gap-x-10 gap-y-6 border-t border-white/20 pt-7">
            <div>
              <p className="text-xl font-semibold text-white">
                Level 4
              </p>

              <p className="mt-1 text-xs uppercase tracking-wider text-white/50">
                {t("hero.autonomousDriving")}
              </p>
            </div>

            <div>
              <p className="text-xl font-semibold text-white">
                24/7
              </p>

              <p className="mt-1 text-xs uppercase tracking-wider text-white/50">
                {t("hero.operation")}
              </p>
            </div>

            <div>
              <p className="text-xl font-semibold text-white">
                Thailand
              </p>

              <p className="mt-1 text-xs uppercase tracking-wider text-white/50">
                {t("hero.localSupport")}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* SCROLL INDICATOR */}
      <div className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2">
        <a
          href="#about"
          aria-label="Scroll to About"
          className="flex flex-col items-center gap-2 text-xs uppercase tracking-[0.25em] text-white/40 transition hover:text-white"
        >
          <span>Scroll</span>

          <span className="text-xl">↓</span>
        </a>
      </div>
    </section>
  );
}