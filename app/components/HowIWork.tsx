"use client";

import { motion } from "motion/react";
import { Search, Lightbulb, Code, Rocket, Target, Users } from "lucide-react";
import { useTranslations } from "next-intl";

const workflowIcons = [Search, Lightbulb, Code, Rocket, Target];
const workflowClasses = [
  "bg-chart-1/20 border-chart-1/30 text-chart-1",
  "bg-chart-2/20 border-chart-2/30 text-chart-2",
  "bg-chart-3/20 border-chart-3/30 text-chart-3",
  "bg-chart-4/20 border-chart-4/30 text-chart-4",
  "bg-chart-5/20 border-chart-5/30 text-chart-5",
];
const valueIcons = [Users, Target, Lightbulb];

type WorkStep = {
  title: string;
  description: string;
};

type CoreValue = {
  title: string;
  description: string;
};

export function HowIWork() {
  const t = useTranslations("howIWork");
  const workflow = (t.raw("workflow") as WorkStep[]).map((step, index) => ({
    ...step,
    icon: workflowIcons[index] ?? Search,
    classes: workflowClasses[index] ?? workflowClasses[0],
  }));
  const values = (t.raw("values") as CoreValue[]).map((value, index) => ({
    ...value,
    icon: valueIcons[index] ?? Users,
  }));

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
          <h2 className="text-5xl md:text-6xl mb-4 bg-gradient-to-r from-foreground to-chart-5 bg-clip-text text-transparent">
            {t("title")}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t("subtitle")}
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto mb-16">
          <div className="relative">
            {/* Connecting line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-chart-1 via-chart-3 to-chart-5 hidden lg:block" />

            <div className="space-y-12">
              {workflow.map((step, index) => {
                const Icon = step.icon;
                const isEven = index % 2 === 0;

                return (
                  <motion.div
                    key={step.title}
                    className={`flex items-center gap-8 ${isEven ? "lg:flex-row" : "lg:flex-row-reverse"}`}
                    initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <div className={`flex-1 ${isEven ? "lg:text-right" : "lg:text-left"}`}>
                      <div className="p-6 rounded-2xl border border-border bg-card hover:bg-accent/30 transition-all duration-300 hover:shadow-lg">
                        <h3 className="text-2xl mb-2">{step.title}</h3>
                        <p className="text-muted-foreground">{step.description}</p>
                      </div>
                    </div>

                    <div className={`relative z-10 p-4 rounded-2xl border-2 ${step.classes}`}>
                      <Icon className="w-8 h-8" />
                    </div>

                    <div className="flex-1 hidden lg:block" />
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>

        <motion.div
          className="max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-3xl mb-8 text-center">{t("coreValues")}</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={value.title}
                  className="p-6 rounded-2xl border border-border bg-card text-center hover:bg-accent/30 transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Icon className="w-10 h-10 text-chart-1 mx-auto mb-4" />
                  <h4 className="text-xl mb-2">{value.title}</h4>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
