import { getTranslations } from "next-intl/server";
import {
  FaFacebookF,
  FaYoutube,
  FaInstagram,
  FaTiktok,
} from "react-icons/fa";
import { SiLine } from "react-icons/si";

type Props = {
  locale: string;
};

export default async function AboutSection({ locale }: Props) {
  const t = await getTranslations({ locale });

  return (
    <section
      id="about"
      className="border-b border-white/10 bg-neutral-950 py-28"
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-14 lg:grid-cols-2">
          <div>
            <p className="mb-4 text-sm uppercase tracking-[0.3em] text-neutral-500">
              {t("intro.label")}
            </p>

            <h2 className="text-4xl font-semibold leading-tight md:text-5xl">
              {t("intro.title")}
            </h2>

            <h3 className="mt-5 text-xl leading-8 text-neutral-400">
              {t("intro.subtitle")}
            </h3>
          </div>

          <div className="space-y-6 text-base leading-8 text-neutral-400 md:text-lg">
            <p>{t("intro.description")}</p>

            <p>{t("intro.description2")}</p>

            <p className="pt-4 text-xl font-semibold leading-8 text-white">
              {t("intro.highlight")}
            </p>

            <div className="pt-6">
              <p className="mb-4 text-sm uppercase tracking-[0.2em] text-neutral-500">
                Follow Super X AI
              </p>

              <div className="flex items-center gap-3">
                <a
                  href="https://www.facebook.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-neutral-400 transition hover:bg-white hover:text-black"
                >
                  <FaFacebookF size={16} />
                </a>

                <a
                  href="https://www.youtube.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="YouTube"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-neutral-400 transition hover:bg-white hover:text-black"
                >
                  <FaYoutube size={18} />
                </a>

                <a
                  href="https://www.instagram.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-neutral-400 transition hover:bg-white hover:text-black"
                >
                  <FaInstagram size={18} />
                </a>

                <a
                  href="https://line.me/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LINE"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-neutral-400 transition hover:bg-white hover:text-black"
                >
                  <SiLine size={19} />
                </a>
                <a
                    href="https://www.tiktok.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="TikTok"
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-neutral-500 transition hover:bg-white hover:text-black"
                    >
                    <FaTiktok size={16} />
                    </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}