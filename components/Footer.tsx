import { getTranslations } from "next-intl/server";

import {
  FaFacebookF,
  FaInstagram,
  FaTiktok,
  FaYoutube,
} from "react-icons/fa";

import { SiLine } from "react-icons/si";

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

        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">

          {/* COMPANY */}

          <div>
            <p className="font-semibold tracking-[0.25em]">
              SUPER X AI
            </p>

            <p className="mt-3 text-sm text-neutral-600">
              {t("footer.subtitle")}
            </p>

            <a
              href="mailto:info@super-x.tech"
              className="mt-3 inline-block text-sm text-neutral-400 transition hover:text-white"
            >
              info@super-x.tech
            </a>
          </div>

          {/* SOCIAL */}

          <div className="flex flex-wrap items-center gap-3">

            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-neutral-500 transition duration-300 hover:-translate-y-1 hover:bg-white hover:text-black"
            >
              <FaFacebookF size={15} />
            </a>

            <a
              href="https://www.youtube.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-neutral-500 transition duration-300 hover:-translate-y-1 hover:bg-white hover:text-black"
            >
              <FaYoutube size={17} />
            </a>

            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-neutral-500 transition duration-300 hover:-translate-y-1 hover:bg-white hover:text-black"
            >
              <FaInstagram size={17} />
            </a>

            <a
              href="https://www.tiktok.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="TikTok"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-neutral-500 transition duration-300 hover:-translate-y-1 hover:bg-white hover:text-black"
            >
              <FaTiktok size={16} />
            </a>

            <a
              href="https://line.me/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LINE"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-neutral-500 transition duration-300 hover:-translate-y-1 hover:bg-white hover:text-black"
            >
              <SiLine size={18} />
            </a>

          </div>
        </div>

        {/* COPYRIGHT */}

        <div className="mt-10 border-t border-white/10 pt-8">
          <p className="text-sm text-neutral-600">
            {t("footer.copyright")}
          </p>
        </div>

      </div>
    </footer>
  );
}