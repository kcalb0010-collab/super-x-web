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
      className="relative flex min-h-screen items-end overflow-hidden border-b border-white/10"
    >
      {/* BACKGROUND VIDEO */}
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source
          src="/videos/superx-hero-web.mp4"
          type="video/mp4"
        />
      </video>

      {/* LIGHT OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/45 via-black/10 to-transparent" />

      <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />

      {/* CONTENT */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-20 pt-40 md:pb-24">
        <div className="max-w-3xl">
          <Reveal>
            <div className="mb-5 flex items-center gap-3">
              <div className="brand-gradient-line h-[2px] w-8 rounded-full" />

              <p className="text-xs uppercase tracking-[0.35em] text-white/60">
                SUPER X AI
              </p>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <h1 className="text-2xl font-semibold leading-tight text-white md:text-4xl lg:text-5xl">
              {t("hero.title")}
            </h1>
          </Reveal>

          <Reveal delay={200}>
            <p className="mt-6 max-w-xl text-base leading-7 text-white/70 md:text-lg">
              {t("hero.subtitle")}
            </p>
          </Reveal>

          <Reveal delay={300}>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#solutions"
                className="rounded-full bg-white px-7 py-3 font-medium text-black transition hover:bg-neutral-200"
              >
                {t("hero.primaryButton")}
              </a>

              <a
                href="#contact"
                className="rounded-full border border-white/30 bg-black/10 px-7 py-3 font-medium text-white backdrop-blur-sm transition hover:border-white hover:bg-white/10"
              >
                {t("hero.secondaryButton")}
              </a>
            </div>
          </Reveal>
        </div>
      </div>

      {/* SCROLL */}
      <a
        href="#about"
        aria-label="Scroll to About"
        className="absolute bottom-7 right-8 z-20 hidden text-xs uppercase tracking-[0.25em] text-white/40 transition hover:text-white md:block"
      >
        Scroll ↓
      </a>
    </section>
  );
}