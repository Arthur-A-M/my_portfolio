"use client";

import { motion, useScroll } from "motion/react";
import { useEffect, useState } from "react";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const [currentSection, setCurrentSection] = useState(0);
  const totalSections = 7;

  useEffect(() => {
    const updateSection = () => {
      const scrollContainer = document.querySelector(".snap-y");
      if (!scrollContainer) return;

      const scrollPercentage =
        scrollContainer.scrollTop /
        (scrollContainer.scrollHeight - scrollContainer.clientHeight);
      const section = Math.min(
        Math.floor(scrollPercentage * totalSections),
        totalSections - 1,
      );
      setCurrentSection(section);
    };

    const scrollContainer = document.querySelector(".snap-y");
    if (scrollContainer) {
      scrollContainer.addEventListener("scroll", updateSection);
      return () => scrollContainer.removeEventListener("scroll", updateSection);
    }
  }, []);

  const sectionNames = [
    "Hero",
    "Capabilities",
    "Work",
    "Skills",
    "Certifications",
    "Process",
    "Contact",
  ];

  return (
    <div className="fixed top-0 left-0 right-0 z-50 pointer-events-none">
      {/* Progress bar */}
      <motion.div
        className="h-1 bg-gradient-to-r from-chart-1 via-chart-2 to-chart-3 origin-left"
        style={{ scaleX: scrollYProgress }}
      />

      {/* Section dot nav */}
      <div className="absolute right-8 top-1/2 -translate-y-1/2 hidden lg:flex flex-col gap-3 pointer-events-auto">
        {sectionNames.map((name, index) => (
          <button
            key={name}
            onClick={() => {
              const sections = document.querySelectorAll(".snap-start");
              sections[index]?.scrollIntoView({ behavior: "smooth" });
            }}
            className="group relative"
          >
            <div
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentSection
                  ? "bg-chart-1 scale-150"
                  : "bg-muted-foreground/30 hover:bg-muted-foreground/60"
              }`}
            />
            <div className="absolute right-6 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
              <div className="px-3 py-1 rounded-lg bg-card border border-border text-sm">
                {name}
              </div>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
