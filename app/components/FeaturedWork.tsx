"use client";

import { motion } from "motion/react";
import { ExternalLink, Github, ArrowRight } from "lucide-react";
import { useTranslations } from "next-intl";

type Project = {
  title: string;
  problem: string;
  solution: string;
  outcome: string;
  tech: string[];
  link: string;
  github: string;
};

export function FeaturedWork() {
  const t = useTranslations("featuredWork");
  const projects = t.raw("projects") as Project[];

  return (
    <section className="min-h-[100dvh] snap-start flex items-center justify-center bg-gradient-to-b from-background to-accent/5">
      <div className="container mx-auto px-6 py-20">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-5xl md:text-6xl mb-4 bg-gradient-to-r from-foreground to-chart-2 bg-clip-text text-transparent">
            {t("title")}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t("subtitle")}
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto space-y-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              className="group relative p-8 rounded-2xl border border-border bg-card hover:bg-accent/30 transition-all duration-300 hover:shadow-xl hover:shadow-chart-2/10"
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="flex flex-col lg:flex-row gap-8">
                <div className="flex-1">
                  <h3 className="text-3xl mb-4 group-hover:text-chart-2 transition-colors">
                    {project.title}
                  </h3>

                  <div className="space-y-4 mb-6">
                    <div>
                      <div className="text-sm text-chart-2 mb-1">{t("labels.problem")}</div>
                      <p className="text-muted-foreground">{project.problem}</p>
                    </div>
                    <div>
                      <div className="text-sm text-chart-1 mb-1">{t("labels.solution")}</div>
                      <p className="text-muted-foreground">{project.solution}</p>
                    </div>
                    <div>
                      <div className="text-sm text-chart-3 mb-1">{t("labels.outcome")}</div>
                      <p className="text-foreground">{project.outcome}</p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 rounded-full bg-chart-2/10 border border-chart-2/30 text-sm text-chart-2"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4">
                    <a
                      href={project.link}
                      className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-chart-2 transition-colors"
                    >
                      {t("labels.viewProject")} <ExternalLink className="w-4 h-4" />
                    </a>
                    <a
                      href={project.github}
                      className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-chart-2 transition-colors"
                    >
                      {t("labels.sourceCode")} <Github className="w-4 h-4" />
                    </a>
                  </div>
                </div>

                <div className="lg:w-64 flex items-center">
                  <div className="w-full p-6 rounded-xl bg-gradient-to-br from-chart-2/20 to-chart-1/20 border border-chart-2/30 group-hover:scale-105 transition-transform duration-300">
                    <div className="text-center">
                      <ArrowRight className="w-12 h-12 text-chart-2 mx-auto mb-2" />
                      <div className="text-sm text-muted-foreground">{t("labels.impactDelivered")}</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
