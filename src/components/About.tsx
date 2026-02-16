import { useTranslations } from "next-intl";
import { memo, useMemo } from "react";

const githubUrl = process.env.NEXT_PUBLIC_GITHUB_URL || "https://github.com";
const email = process.env.NEXT_PUBLIC_EMAIL || "contact@example.com";

// Hoist static stats data outside component
const STATS_DATA = [
  { number: "7+", labelKey: "yearsExperience" },
  // { number: "10+", labelKey: "projectsCompleted" },
] as const;

const About = memo(function About() {
  const t = useTranslations("About");

  // Memoize stats array to prevent recreation
  const stats = useMemo(
    () => STATS_DATA.map((stat) => ({ number: stat.number, label: t(stat.labelKey) })),
    [t],
  );

  return (
    <section id="about" className="section-padding bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-accent/10 text-accent text-sm font-medium rounded-full mb-4">
            {t("badge")}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            {t("title")}
          </h2>
          <p className="text-muted max-w-2xl mx-auto">{t("subtitle")}</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="relative w-full max-w-md mx-auto">
              <div className="absolute -inset-4 bg-linear-to-r from-accent/20 to-primary/20 rounded-2xl blur-xl" />

              <div className="relative glass-card rounded-2xl p-8 text-center">
                <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-linear-to-br from-accent to-primary flex items-center justify-center text-white text-4xl font-bold">
                  KP
                </div>

                <h3 className="text-xl font-bold text-foreground mb-2">
                  {t("name")}
                </h3>
                <p className="text-accent font-medium mb-4">{t("role")}</p>

                <div className="flex justify-center gap-4">
                  <a
                    href={githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-foreground/5 hover:bg-accent hover:text-white flex items-center justify-center transition-all"
                  >
                    <span className="sr-only">GitHub</span>
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                  </a>
                  <a
                    href={`mailto:${email}`}
                    className="w-10 h-10 rounded-full bg-foreground/5 hover:bg-accent hover:text-white flex items-center justify-center transition-all"
                  >
                    <span className="sr-only">Email</span>
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-foreground mb-6">
              {t("heading")}{" "}
              <span className="text-gradient">{t("headingHighlight")}</span>
            </h3>

            <div className="space-y-4 text-muted leading-relaxed mb-8">
              <p>{t("bio1")}</p>
              <p>{t("bio2")}</p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="glass-card rounded-xl p-4 text-center hover:scale-105 transition-transform"
                >
                  <div className="text-2xl md:text-3xl font-bold text-accent mb-1">
                    {stat.number}
                  </div>
                  <div className="text-xs md:text-sm text-muted">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

export default About;
