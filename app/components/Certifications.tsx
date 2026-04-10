"use client";

import { motion } from "motion/react";
import { Award, Calendar, CheckCircle, Clock } from "lucide-react";
import { useTranslations } from "next-intl";

type Certification = {
  name: string;
  issuer: string;
  date: string;
  status: "completed" | "in-progress";
  category: string;
};

export function Certifications() {
  const t = useTranslations("certifications");
  const certifications = t.raw("entries") as Certification[];
  const completed = certifications.filter((c) => c.status === "completed");
  const inProgress = certifications.filter((c) => c.status === "in-progress");

  return (
    <section className="min-h-[100dvh] snap-start flex items-center justify-center bg-gradient-to-b from-accent/5 to-background">
      <div className="container mx-auto px-6 py-20">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-3 mb-4">
            <Award className="w-12 h-12 text-chart-1" />
          </div>
          <h2 className="text-5xl md:text-6xl mb-4 bg-gradient-to-r from-foreground via-chart-1 to-chart-4 bg-clip-text text-transparent">
            {t("title")}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t("subtitle")}
          </p>
          <div className="flex gap-8 justify-center mt-8">
            <div className="text-center">
              <div className="text-4xl mb-2">{completed.length}</div>
              <div className="text-sm text-muted-foreground">{t("completed")}</div>
            </div>
            <div className="w-px bg-border" />
            <div className="text-center">
              <div className="text-4xl mb-2">{inProgress.length}</div>
              <div className="text-sm text-muted-foreground">{t("inProgress")}</div>
            </div>
          </div>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {completed.map((cert, index) => (
              <motion.div
                key={cert.name}
                className="group relative p-6 rounded-2xl border-2 border-chart-1/30 bg-gradient-to-br from-card to-chart-1/5 hover:shadow-xl hover:shadow-chart-1/20 transition-all duration-300 hover:-translate-y-1"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
              >
                <div className="absolute top-4 right-4">
                  <CheckCircle className="w-6 h-6 text-chart-1" />
                </div>

                <div className="mb-4">
                  <div className="text-xs text-chart-1 mb-2 uppercase tracking-wider">
                    {cert.category}
                  </div>
                  <h4 className="text-lg leading-tight mb-2">{cert.name}</h4>
                  <div className="text-sm text-muted-foreground">{cert.issuer}</div>
                </div>

                <div className="pt-4 border-t border-border flex items-center gap-2 text-xs text-muted-foreground">
                  <Calendar className="w-3 h-3" />
                  {cert.date}
                </div>
              </motion.div>
            ))}
          </div>

          {inProgress.length > 0 && (
            <div>
              <motion.h3
                className="text-2xl mb-6 flex items-center gap-3"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <Clock className="w-6 h-6 text-chart-4" />
                {t("currentlyPursuing")}
              </motion.h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {inProgress.map((cert, index) => (
                  <motion.div
                    key={cert.name}
                    className="group relative p-6 rounded-2xl border-2 border-dashed border-chart-4/30 bg-gradient-to-br from-card to-chart-4/5 hover:border-chart-4/50 transition-all duration-300"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                  >
                    <div className="absolute top-4 right-4">
                      <Clock className="w-5 h-5 text-chart-4" />
                    </div>

                    <div className="mb-4">
                      <div className="text-xs text-chart-4 mb-2 uppercase tracking-wider">
                        {cert.category}
                      </div>
                      <h4 className="text-lg leading-tight mb-2">{cert.name}</h4>
                      <div className="text-sm text-muted-foreground">{cert.issuer}</div>
                    </div>

                    <div className="pt-4 border-t border-border flex items-center gap-2 text-xs text-muted-foreground">
                      <Calendar className="w-3 h-3" />
                      {cert.date}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
