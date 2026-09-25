import {
  FaFacebookF,
  FaInstagram,
  FaTiktok,
  FaYoutube,
} from "react-icons/fa";

import { FaXTwitter } from "react-icons/fa6";
import { SiLine } from "react-icons/si";

import { getTranslations } from "next-intl/server";

type Props = {
  locale: string;
};

export default async function Footer({
  locale,
}: Props) {
  const t = await getTranslations({
    locale,
  });

  return (
    <footer className="border-t border-white/10 bg-black">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid gap-10 md:grid-cols-3">
          {/* COMPANY */}
          <div>
            <h3 className="text-xl font-semibold text-white">
              Super X AI
            </h3>

            <p className="mt-4 max-w-sm text-sm leading-7 text-neutral-500">
              {t("footer.subtitle")}
            </p>
          </div>

          {/* CONTACT */}
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-neutral-500">
              Contact
            </p>

            <a
              href="mailto:info@super-x.tech"
              className="mt-4 inline-block text-sm text-neutral-300 transition hover:text-white"
            >
              info@super-x.tech
            </a>
          </div>

          {/* SOCIAL */}
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-neutral-500">
              Follow Us
            </p>

            <div className="mt-5 flex flex-wrap gap-3">
              <a
                href="https://facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white/60 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/30 hover:bg-white/10 hover:text-white"
              >
                <FaFacebookF size={15} />
              </a>

              <a
                href="https://x.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white/60 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/30 hover:bg-white/10 hover:text-white"
              >
                <FaXTwitter size={16} />
              </a>

              <a
                href="https://youtube.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white/60 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/30 hover:bg-white/10 hover:text-white"
              >
                <FaYoutube size={16} />
              </a>

              <a
                href="https://instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white/60 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/30 hover:bg-white/10 hover:text-white"
              >
                <FaInstagram size={16} />
              </a>

              <a
                href="https://tiktok.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white/60 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/30 hover:bg-white/10 hover:text-white"
              >
                <FaTiktok size={15} />
              </a>

              <a
                href="https://line.me/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LINE"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white/60 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/30 hover:bg-white/10 hover:text-white"
              >
                <SiLine size={18} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-4 border-t border-white/10 pt-7 text-sm text-neutral-600 md:flex-row md:items-center md:justify-between">
          <p>
            {t("footer.copyright")}
          </p>

          <a
            href="#home"
            className="transition hover:text-white"
          >
            Back to top ↑
          </a>
        </div>
      </div>
    </footer>
  );
}