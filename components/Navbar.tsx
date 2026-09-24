"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { usePathname, useRouter } from "next/navigation";

export default function Navbar() {
  const t = useTranslations("nav");

  const pathname = usePathname();
  const router = useRouter();

  const currentLocale = pathname.split("/")[1] || "th";

  const changeLanguage = (locale: "th" | "en" | "zh") => {
    const segments = pathname.split("/");

    if (["th", "en", "zh"].includes(segments[1])) {
      segments[1] = locale;
    } else {
      segments.splice(1, 0, locale);
    }

    const newPath = segments.join("/") || `/${locale}`;

    router.push(newPath);
  };

  const goHome = () => {
    router.push(`/${currentLocale}`);
  };

  return (
    <header
      className="
        fixed
        left-0
        top-0
        z-50
        w-full
        border-b
        border-white/10
        bg-black/70
        backdrop-blur-xl
      "
    >
      <div
        className="
          mx-auto
          flex
          h-20
          max-w-7xl
          items-center
          justify-between
          px-6
        "
      >
        {/* LOGO */}
        <button
          type="button"
          onClick={goHome}
          aria-label="Super X AI Home"
          className="
            relative
            flex
            h-14
            w-[190px]
            shrink-0
            items-center
            bg-transparent
          "
        >
          <Image
            src="/images/logo-superx.png"
            alt="Super X AI"
            fill
            priority
            sizes="190px"
            className="
              object-contain
              object-left
            "
          />
        </button>

        {/* DESKTOP MENU */}
        <nav
          className="
            hidden
            items-center
            gap-8
            text-sm
            text-neutral-400
            lg:flex
          "
        >
          <a
            href={`/${currentLocale}#home`}
            className="transition duration-300 hover:text-white"
          >
            {t("home")}
          </a>

          <a
            href={`/${currentLocale}#about`}
            className="transition duration-300 hover:text-white"
          >
            {t("about")}
          </a>

          <a
            href={`/${currentLocale}#solutions`}
            className="transition duration-300 hover:text-white"
          >
            {t("solutions")}
          </a>

          <a
            href={`/${currentLocale}#technology`}
            className="transition duration-300 hover:text-white"
          >
            {t("technology")}
          </a>

          <a
            href={`/${currentLocale}#contact`}
            className="transition duration-300 hover:text-white"
          >
            {t("contact")}
          </a>
        </nav>

        {/* LANGUAGE SWITCHER */}
        <div className="flex items-center gap-3 text-sm">
          <button
            type="button"
            onClick={() => changeLanguage("th")}
            className={`transition duration-300 ${
              currentLocale === "th"
                ? "font-semibold text-white"
                : "text-neutral-500 hover:text-white"
            }`}
          >
            TH
          </button>

          <span className="text-neutral-700">|</span>

          <button
            type="button"
            onClick={() => changeLanguage("en")}
            className={`transition duration-300 ${
              currentLocale === "en"
                ? "font-semibold text-white"
                : "text-neutral-500 hover:text-white"
            }`}
          >
            EN
          </button>

          <span className="text-neutral-700">|</span>

          <button
            type="button"
            onClick={() => changeLanguage("zh")}
            className={`transition duration-300 ${
              currentLocale === "zh"
                ? "font-semibold text-white"
                : "text-neutral-500 hover:text-white"
            }`}
          >
            中文
          </button>
        </div>
      </div>
    </header>
  );
}