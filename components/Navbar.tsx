"use client";

import Image from "next/image";

import {
  useEffect,
  useState,
} from "react";

import {
  usePathname,
  useRouter,
} from "next/navigation";

import { useTranslations } from "next-intl";

const sections = [
  "home",
  "about",
  "solutions",
  "technology",
  "contact",
];

export default function Navbar() {
  const t = useTranslations("nav");

  const pathname = usePathname();
  const router = useRouter();

  const currentLocale =
    pathname.split("/")[1] || "th";

  const [activeSection, setActiveSection] =
    useState("home");

  const [scrolled, setScrolled] =
    useState(false);

  /* =========================
     LANGUAGE
  ========================= */

  const changeLanguage = (
    locale: "th" | "en" | "zh"
  ) => {
    const segments = pathname.split("/");

    if (
      ["th", "en", "zh"].includes(
        segments[1]
      )
    ) {
      segments[1] = locale;
    } else {
      segments.splice(1, 0, locale);
    }

    const newPath =
      segments.join("/") ||
      `/${locale}`;

    router.push(newPath);
  };

  /* =========================
     SCROLL STATE
  ========================= */

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener(
      "scroll",
      handleScroll,
      { passive: true }
    );

    handleScroll();

    return () => {
      window.removeEventListener(
        "scroll",
        handleScroll
      );
    };
  }, []);

  /* =========================
     ACTIVE SECTION
  ========================= */

  useEffect(() => {
    const observer =
      new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (
              entry.isIntersecting
            ) {
              setActiveSection(
                entry.target.id
              );
            }
          });
        },
        {
          rootMargin:
            "-30% 0px -60% 0px",
          threshold: 0,
        }
      );

    sections.forEach((section) => {
      const element =
        document.getElementById(
          section
        );

      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  const menuClass = (
    section: string
  ) => {
    return `
      relative
      py-2
      transition
      duration-300
      ${
        activeSection === section
          ? "text-white"
          : "text-white/55 hover:text-white"
      }
    `;
  };

  return (
    <header
      className={`
        fixed
        left-0
        top-0
        z-50
        w-full
        border-b
        transition-all
        duration-500
        ${
          scrolled
            ? "border-white/10 bg-black/80 shadow-lg shadow-black/20 backdrop-blur-xl"
            : "border-transparent bg-gradient-to-b from-black/50 to-transparent"
        }
      `}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        {/* LOGO */}

        <button
          type="button"
          onClick={() =>
            router.push(
              `/${currentLocale}`
            )
          }
          aria-label="Super X AI Home"
          className="relative flex h-14 w-[190px] shrink-0 items-center bg-transparent"
        >
          <Image
            src="/images/logo-superx.png"
            alt="Super X AI"
            fill
            priority
            sizes="190px"
            className="object-contain object-left"
          />
        </button>

        {/* DESKTOP MENU */}

        <nav className="hidden items-center gap-8 text-sm lg:flex">
          <a
            href={`/${currentLocale}#home`}
            className={menuClass("home")}
          >
            {t("home")}

            {activeSection ===
              "home" && (
              <span className="absolute bottom-0 left-0 h-px w-full bg-white" />
            )}
          </a>

          <a
            href={`/${currentLocale}#about`}
            className={menuClass(
              "about"
            )}
          >
            {t("about")}

            {activeSection ===
              "about" && (
              <span className="absolute bottom-0 left-0 h-px w-full bg-white" />
            )}
          </a>

          <a
            href={`/${currentLocale}#solutions`}
            className={menuClass(
              "solutions"
            )}
          >
            {t("solutions")}

            {activeSection ===
              "solutions" && (
              <span className="absolute bottom-0 left-0 h-px w-full bg-white" />
            )}
          </a>

          <a
            href={`/${currentLocale}#technology`}
            className={menuClass(
              "technology"
            )}
          >
            {t("technology")}

            {activeSection ===
              "technology" && (
              <span className="absolute bottom-0 left-0 h-px w-full bg-white" />
            )}
          </a>

          <a
            href={`/${currentLocale}#contact`}
            className={menuClass(
              "contact"
            )}
          >
            {t("contact")}

            {activeSection ===
              "contact" && (
              <span className="absolute bottom-0 left-0 h-px w-full bg-white" />
            )}
          </a>
        </nav>

        {/* LANGUAGE */}

        <div className="flex items-center gap-3 text-sm">
          <button
            type="button"
            onClick={() =>
              changeLanguage("th")
            }
            className={`transition duration-300 ${
              currentLocale === "th"
                ? "font-semibold text-white"
                : "text-white/40 hover:text-white"
            }`}
          >
            TH
          </button>

          <span className="text-white/20">
            |
          </span>

          <button
            type="button"
            onClick={() =>
              changeLanguage("en")
            }
            className={`transition duration-300 ${
              currentLocale === "en"
                ? "font-semibold text-white"
                : "text-white/40 hover:text-white"
            }`}
          >
            EN
          </button>

          <span className="text-white/20">
            |
          </span>

          <button
            type="button"
            onClick={() =>
              changeLanguage("zh")
            }
            className={`transition duration-300 ${
              currentLocale === "zh"
                ? "font-semibold text-white"
                : "text-white/40 hover:text-white"
            }`}
          >
            中文
          </button>
        </div>
      </div>
    </header>
  );
}