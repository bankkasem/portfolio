import { useTranslations } from "next-intl";
import { memo, useMemo } from "react";

const githubUrl = process.env.NEXT_PUBLIC_GITHUB_URL || "https://github.com";

interface Project {
  title: string;
  description: string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured?: boolean;
}

// Hoist static project data outside component to prevent recreation on every render
const PROJECTS_DATA = [
  {
    key: "authHub",
    tags: [
      "Next.js",
      "TypeScript",
      "NextAuth",
      "Authentication",
      "Vibe Coding",
    ],
    liveUrl: "https://auth.bankkasem.com",
    featured: true,
  },
  {
    key: "healthLog",
    tags: ["Next.js", "Tailwind CSS", "TypeScript", "Vibe Coding"],
    liveUrl: "https://health.bankkasem.com",
    featured: true,
  },
  {
    key: "webBlog",
    tags: ["Next.js", "Strapi CMS", "TypeScript", "Tailwind CSS"],
    liveUrl: "https://weplus.life",
    featured: false,
  },
  {
    key: "ecommerce",
    tags: ["Next.js", "Saleor", "TypeScript", "E-Commerce"],
    liveUrl: "https://shop.weplus.life/",
    featured: false,
  },
] as const;

const Projects = memo(function Projects() {
  const t = useTranslations("Projects");

  // Memoize projects array to prevent recreation when translations don't change
  const projects: Project[] = useMemo(
    () =>
      PROJECTS_DATA.map((project) => ({
        title: t(`items.${project.key}.title`),
        description: t(`items.${project.key}.description`),
        tags: [...project.tags],
        liveUrl: project.liveUrl,
        featured: project.featured,
      })),
    [t],
  );

  return (
    <section id="projects" className="section-padding bg-background">
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

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="group glass-card rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-500"
            >
              <div className="relative h-48 md:h-56 bg-linear-to-br from-primary to-accent overflow-hidden">
                <div className="absolute inset-0 opacity-20">
                  <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.1)_25%,rgba(255,255,255,0.1)_50%,transparent_50%,transparent_75%,rgba(255,255,255,0.1)_75%)] bg-[length:20px_20px]" />
                </div>

                <div className="absolute top-4 left-4 w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white font-bold">
                  {String(index + 1).padStart(2, "0")}
                </div>

                {project.featured && (
                  <div className="absolute top-4 right-4 px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-white text-xs font-medium">
                    {t("featured")}
                  </div>
                )}

                <div className="absolute inset-0 bg-primary/80 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-full bg-white text-primary flex items-center justify-center hover:scale-110 transition-transform"
                    >
                      <span className="sr-only">{t("viewLive")}</span>
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
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg>
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-full bg-white text-primary flex items-center justify-center hover:scale-110 transition-transform"
                    >
                      <span className="sr-only">{t("viewSource")}</span>
                      <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                      </svg>
                    </a>
                  )}
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-accent transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted text-sm mb-4 line-clamp-2">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-accent/10 text-accent text-xs font-medium rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-foreground text-background font-semibold rounded-full hover:bg-accent transition-colors"
          >
            {t("viewAll")}
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
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
});

export default Projects;
