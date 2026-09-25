import { getTranslations } from "next-intl/server";

import {
  FaFacebookF,
  FaInstagram,
  FaTiktok,
  FaYoutube,
} from "react-icons/fa";

import { FaXTwitter } from "react-icons/fa6";
import { SiLine } from "react-icons/si";

import Reveal from "@/components/Reveal";

type Props = {
  locale: string;
};

export default async function AboutSection({
  locale,
}: Props) {
  const t = await getTranslations({
    locale,
  });

  return (
    <section
      id="about"
      className="relative overflow-hidden border-b border-white/10 bg-black py-28"
    >
      <div className="absolute -left-40 top-20 h-[450px] w-[450px] rounded-full bg-cyan-500/5 blur-[150px]" />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid items-start gap-14 lg:grid-cols-[1.1fr_0.9fr]">
          {/* LEFT */}
          <Reveal>
            <div>
              <div className="mb-4 flex items-center gap-4">
                <div className="brand-gradient-line h-[2px] w-10 rounded-full" />

                <p className="text-sm uppercase tracking-[0.3em] text-neutral-500">
                  {t("intro.label")}
                </p>
              </div>

              <h2 className="max-w-3xl text-4xl font-semibold leading-tight md:text-5xl">
                {t("intro.title")}
              </h2>

              <p className="mt-6 max-w-2xl text-xl leading-8 text-neutral-300">
                {t("intro.subtitle")}
              </p>

              <p className="mt-6 max-w-3xl leading-8 text-neutral-400">
                {t("intro.description")}
              </p>

              <p className="mt-5 max-w-3xl leading-8 text-neutral-400">
                {t("intro.description2")}
              </p>

              <div className="mt-8 border-l-2 border-cyan-400/50 pl-5">
                <p className="text-lg font-medium leading-8 text-white">
                  {t("intro.highlight")}
                </p>
              </div>
            </div>
          </Reveal>

          {/* RIGHT */}
          <Reveal delay={150}>
            <div className="sx-card rounded-3xl p-8 md:p-10">
              <p className="text-sm uppercase tracking-[0.25em] text-neutral-500">
                SUPER X AI
              </p>

              <h3 className="mt-5 text-2xl font-semibold">
                Autonomous Industrial Logistics
              </h3>

              <p className="mt-4 leading-7 text-neutral-400">
                Level 4 autonomous driving technology for industrial,
                factory and logistics operations.
              </p>

              <div className="mt-8 h-px bg-white/10" />

              <div className="mt-8">
                <p className="text-sm uppercase tracking-[0.2em] text-neutral-500">
                  Follow Us
                </p>

                <div className="mt-5 flex flex-wrap gap-3">
                  <a
                    href="https://facebook.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Facebook"
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-white/60 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/30 hover:bg-white/10 hover:text-white"
                  >
                    <FaFacebookF size={16} />
                  </a>

                  <a
                    href="https://x.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="X"
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-white/60 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/30 hover:bg-white/10 hover:text-white"
                  >
                    <FaXTwitter size={17} />
                  </a>

                  <a
                    href="https://youtube.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="YouTube"
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-white/60 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/30 hover:bg-white/10 hover:text-white"
                  >
                    <FaYoutube size={17} />
                  </a>

                  <a
                    href="https://instagram.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-white/60 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/30 hover:bg-white/10 hover:text-white"
                  >
                    <FaInstagram size={17} />
                  </a>

                  <a
                    href="https://tiktok.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="TikTok"
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-white/60 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/30 hover:bg-white/10 hover:text-white"
                  >
                    <FaTiktok size={16} />
                  </a>

                  <a
                    href="https://line.me/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LINE"
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-white/60 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/30 hover:bg-white/10 hover:text-white"
                  >
                    <SiLine size={19} />
                  </a>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}