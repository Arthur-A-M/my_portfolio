"use client";

import { motion } from "motion/react";
import { Award, CheckCircle2 } from "lucide-react";

const skillGroups = [
  {
    category: "Frontend",
    color: {
      bar: "bg-chart-1",
      indicator: "bg-chart-1",
      text: "text-chart-1",
      badge: "bg-chart-1/10 border-chart-1/30 text-chart-1",
    },
    skills: [
      { name: "React / Next.js", level: 95, cert: "Meta Certified" },
      { name: "TypeScript", level: 90, cert: "Advanced" },
      { name: "Tailwind CSS", level: 92, cert: null },
      { name: "Vue.js", level: 85, cert: null },
      { name: "State Management", level: 88, cert: "Redux Certified" },
    ],
  },
  {
    category: "Backend",
    color: {
      bar: "bg-chart-2",
      indicator: "bg-chart-2",
      text: "text-chart-2",
      badge: "bg-chart-2/10 border-chart-2/30 text-chart-2",
    },
    skills: [
      { name: "Node.js / Express", level: 93, cert: "OpenJS Certified" },
      { name: "Python / Django", level: 87, cert: null },
      { name: "REST & GraphQL APIs", level: 90, cert: "API Design" },
      { name: "Authentication & Security", level: 89, cert: "OWASP" },
      { name: "Microservices", level: 86, cert: "AWS Certified" },
    ],
  },
  {
    category: "Databases",
    color: {
      bar: "bg-chart-3",
      indicator: "bg-chart-3",
      text: "text-chart-3",
      badge: "bg-chart-3/10 border-chart-3/30 text-chart-3",
    },
    skills: [
      { name: "PostgreSQL", level: 91, cert: "Advanced SQL" },
      { name: "MongoDB", level: 88, cert: "MongoDB University" },
      { name: "Redis", level: 85, cert: null },
      { name: "Database Design", level: 90, cert: "Schema Design" },
      { name: "ORMs (Prisma, TypeORM)", level: 87, cert: null },
    ],
  },
  {
    category: "DevOps & Tools",
    color: {
      bar: "bg-chart-4",
      indicator: "bg-chart-4",
      text: "text-chart-4",
      badge: "bg-chart-4/10 border-chart-4/30 text-chart-4",
    },
    skills: [
      { name: "Docker / Kubernetes", level: 88, cert: "K8s Admin" },
      { name: "AWS / Cloud Services", level: 90, cert: "Solutions Architect" },
      { name: "CI/CD Pipelines", level: 89, cert: "GitHub Actions" },
      { name: "Git / Version Control", level: 95, cert: null },
      { name: "Testing (Jest, Cypress)", level: 87, cert: "Test Automation" },
    ],
  },
];

export function Skills() {
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
          <h2 className="text-5xl md:text-6xl mb-4 bg-gradient-to-r from-foreground to-chart-3 bg-clip-text text-transparent">
            Skills & Tools
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive technical expertise, validated by certifications
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {skillGroups.map((group, groupIndex) => (
            <motion.div
              key={group.category}
              className="p-8 rounded-2xl border border-border bg-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: groupIndex * 0.1 }}
            >
              <h3 className="text-2xl mb-6 flex items-center gap-3">
                <span className={`w-2 h-8 ${group.color.indicator} rounded-full`} />
                {group.category}
              </h3>

              <div className="space-y-6">
                {group.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.4,
                      delay: groupIndex * 0.1 + skillIndex * 0.05,
                    }}
                  >
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className={`w-4 h-4 ${group.color.text}`} />
                        <span>{skill.name}</span>
                      </div>
                      {skill.cert && (
                        <div
                          className={`flex items-center gap-1 px-2 py-0.5 rounded-full border ${group.color.badge}`}
                        >
                          <Award className={`w-3 h-3 ${group.color.text}`} />
                          <span className={`text-xs ${group.color.text}`}>{skill.cert}</span>
                        </div>
                      )}
                    </div>

                    <div className="relative h-2 bg-secondary rounded-full overflow-hidden">
                      <motion.div
                        className={`absolute inset-y-0 left-0 ${group.color.bar} rounded-full opacity-80`}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 1,
                          delay: groupIndex * 0.1 + skillIndex * 0.05 + 0.2,
                        }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
