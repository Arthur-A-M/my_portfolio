"use client";

import { motion } from "motion/react";
import { ArrowDown } from "lucide-react";
import { useTranslations } from "next-intl";
import { LanguageSwitcher } from "./LanguageSwitcher";

export function Hero() {
  const t = useTranslations("hero");

  const scrollToNext = () => {
    const sections = document.querySelectorAll(".snap-start");
    if (sections[1]) {
      sections[1].scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="min-h-[100dvh] snap-start flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-background via-background to-accent/10">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/4 -left-20 w-96 h-96 bg-chart-1/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 -right-20 w-96 h-96 bg-chart-2/10 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.5, 0.3, 0.5],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="absolute top-6 right-6 z-20">
        <LanguageSwitcher />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="inline-block mb-4 px-4 py-2 rounded-full bg-chart-1/20 border border-chart-1/30">
              <span className="text-sm text-chart-1">{t("badge")}</span>
            </div>
          </motion.div>

          <motion.h1
            className="text-6xl md:text-7xl lg:text-8xl mb-6 bg-gradient-to-r from-foreground via-chart-1 to-chart-2 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {t("title")}
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl lg:text-3xl text-muted-foreground mb-12 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            {t("subtitle")}
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <button
              onClick={scrollToNext}
              className="group px-8 py-4 bg-gradient-to-r from-chart-1 to-chart-2 text-white rounded-lg hover:shadow-lg hover:shadow-chart-1/50 transition-all duration-300 hover:scale-105"
            >
              {t("explore")}
            </button>
            <button
              onClick={() => {
                const contact = document.querySelector("#contact");
                contact?.scrollIntoView({ behavior: "smooth" });
              }}
              className="px-8 py-4 border border-border rounded-lg hover:bg-accent transition-all duration-300 hover:scale-105"
            >
              {t("contact")}
            </button>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-12 left-1/2 -translate-x-1/2 cursor-pointer"
        onClick={scrollToNext}
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ArrowDown className="w-6 h-6 text-muted-foreground" />
      </motion.div>
    </section>
  );
}
