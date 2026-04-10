"use client";

import { motion } from "motion/react";
import { Code2, Server, Layers, Lightbulb, Award } from "lucide-react";
import { useTranslations } from "next-intl";

type Capability = {
  title: string;
  description: string;
  skills: string[];
  certifications: Array<{ name: string; issuer: string }>;
};

const icons = [Code2, Server, Layers, Lightbulb];

export function Capabilities() {
  const t = useTranslations("capabilities");
  const capabilities = t.raw("items") as Capability[];

  return (
    <section className="min-h-[100dvh] snap-start flex items-center justify-center bg-background">
      <div className="container mx-auto px-6 py-20">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-5xl md:text-6xl mb-4 bg-gradient-to-r from-foreground to-chart-1 bg-clip-text text-transparent">
            {t("title")}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t("subtitle")}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {capabilities.map((capability, index) => {
            const Icon = icons[index] ?? Code2;
            return (
              <motion.div
                key={`${capability.title}-${index}`}
                className="group relative p-8 rounded-2xl border border-border bg-card hover:bg-accent/50 transition-all duration-300 hover:shadow-xl hover:shadow-chart-1/10 hover:-translate-y-1"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-3 rounded-xl bg-gradient-to-br from-chart-1/20 to-chart-2/20 group-hover:from-chart-1/30 group-hover:to-chart-2/30 transition-all">
                    <Icon className="w-6 h-6 text-chart-1" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl mb-2">{capability.title}</h3>
                    <p className="text-muted-foreground">{capability.description}</p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {capability.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                <div className="pt-4 border-t border-border">
                  <div className="flex items-center gap-2 mb-2">
                    <Award className="w-4 h-4 text-chart-1" />
                    <span className="text-sm text-muted-foreground">{t("certificationsLabel")}</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {capability.certifications.map((cert) => (
                      <div
                        key={cert.name}
                        className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-chart-1/10 border border-chart-1/30 text-xs"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-chart-1" />
                        <span className="text-chart-1">{cert.name}</span>
                        <span className="text-muted-foreground">• {cert.issuer}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
