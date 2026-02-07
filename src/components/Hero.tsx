import { memo } from "react";
import { useTranslations } from "next-intl";

const isAvailableForHire =
  process.env.NEXT_PUBLIC_AVAILABLE_FOR_HIRE === "true";

const Hero = memo(function Hero() {
  const t = useTranslations("Hero");

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ background: "var(--gradient-hero)" }}
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-accent/20 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-accent-light/20 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-20 text-center">
        {isAvailableForHire && (
          <div className="animate-fade-in-up mb-6">
            <span className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm text-white/90 text-sm font-medium rounded-full border border-white/20">
              <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse" />
              {t("available")}
            </span>
          </div>
        )}

        <h1
          className="animate-fade-in-up text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight"
          style={{ animationDelay: "0.1s" }}
        >
          {t("greeting")}{" "}
          <span className="relative">
            <span className="text-accent-light">{t("name")}</span>
            <svg
              className="absolute -bottom-2 left-0 w-full"
              viewBox="0 0 200 10"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M0 8 Q 50 0, 100 8 T 200 8"
                stroke="currentColor"
                strokeWidth="3"
                className="text-accent-light/50"
              />
            </svg>
          </span>
        </h1>

        <p
          className="animate-fade-in-up text-xl md:text-2xl text-white/80 mb-8 max-w-2xl mx-auto"
          style={{ animationDelay: "0.2s" }}
        >
          {t("rolePrefix")}{" "}
          <span className="text-accent-light font-semibold">
            {t("beautiful")}
          </span>{" "}
          {t("and")}{" "}
          <span className="text-accent-light font-semibold">
            {t("scalable")}
          </span>{" "}
          {t("roleSuffix")}
        </p>

        <p
          className="animate-fade-in-up text-white/60 mb-12 max-w-xl mx-auto"
          style={{ animationDelay: "0.3s" }}
        >
          {t("description")}
        </p>

        <div
          className="animate-fade-in-up flex flex-col sm:flex-row items-center justify-center gap-4"
          style={{ animationDelay: "0.4s" }}
        >
          <a
            href="#projects"
            className="group inline-flex items-center gap-2 px-8 py-4 bg-white text-primary font-semibold rounded-full hover:bg-accent-light hover:text-white transition-all duration-300 hover:scale-105 hover:shadow-xl"
          >
            {t("viewWork")}
            <svg
              className="w-5 h-5 group-hover:translate-x-1 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
          {isAvailableForHire && (
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-full hover:bg-white/10 transition-all duration-300"
            >
              {t("getInTouch")}
            </a>
          )}
        </div>
      </div>

      {/* Scroll indicator - positioned outside content container */}
      <div
        className="animate-fade-in-up absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
        style={{ animationDelay: "0.5s" }}
      >
        <a
          href="#about"
          className="flex flex-col items-center text-white/60 hover:text-white transition-colors"
        >
          <span className="text-sm mb-2">{t("scrollDown")}</span>
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-2">
            <div className="w-1.5 h-3 bg-white/60 rounded-full animate-bounce" />
          </div>
        </a>
      </div>
    </section>
  );
});

export default Hero;
