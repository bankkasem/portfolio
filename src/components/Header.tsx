"use client";

import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";
import LanguageSwitcher from "./LanguageSwitcher";

const isAvailableForHire =
  process.env.NEXT_PUBLIC_AVAILABLE_FOR_HIRE === "true";

export default function Header() {
  const t = useTranslations("Header");
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Need to define navLinks inside component to use translation hook
  const navLinks = [
    { name: t("home"), href: "#home" },
    { name: t("about"), href: "#about" },
    { name: t("skills"), href: "#skills" },
    { name: t("projects"), href: "#projects" },
    { name: t("contact"), href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/90 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="#home"
            className={`text-xl font-bold transition-colors ${
              isScrolled ? "text-primary" : "text-white"
            }`}
          >
            KP<span className="text-accent">.</span>
          </a>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className={`link-underline font-medium transition-colors ${
                    isScrolled
                      ? "text-foreground hover:text-accent"
                      : "text-white/90 hover:text-white"
                  }`}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>

          <div className="hidden md:flex items-center gap-4">
            <LanguageSwitcher />

            {/* CTA Button */}
            {isAvailableForHire && (
              <a
                href="#contact"
                className="hidden md:inline-flex items-center px-5 py-2.5 bg-accent text-white font-medium rounded-full hover:bg-accent-dark transition-all hover:scale-105 hover:shadow-lg"
              >
                {t("hireMe")}
              </a>
            )}
          </div>

          <div className="md:hidden flex items-center gap-4">
            <LanguageSwitcher />

            {/* Mobile Menu Button */}
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`p-2 ${isScrolled ? "text-foreground" : "text-white"}`}
              aria-label="Toggle menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                {isMobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-white/10">
            <ul className="flex flex-col gap-4 pt-4">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`block font-medium ${
                      isScrolled
                        ? "text-foreground hover:text-accent"
                        : "text-white/90 hover:text-white"
                    }`}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
              {isAvailableForHire && (
                <li>
                  {/* biome-ignore lint/a11y/useValidAnchor: interaction required for mobile menu */}
                  <a
                    href="#contact"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="inline-flex items-center px-5 py-2.5 bg-accent text-white font-medium rounded-full"
                  >
                    {t("hireMe")}
                  </a>
                </li>
              )}
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
}
