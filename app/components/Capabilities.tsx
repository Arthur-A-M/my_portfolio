"use client";

import { motion } from "motion/react";
import { Code2, Server, Layers, Lightbulb, Award } from "lucide-react";

const capabilities = [
  {
    icon: Code2,
    title: "Frontend Development",
    description: "Crafting responsive, accessible interfaces with modern frameworks and best practices",
    skills: ["React", "TypeScript", "Tailwind CSS", "Next.js"],
    certifications: [
      { name: "React Developer", issuer: "Meta" },
      { name: "Frontend Masters", issuer: "FEM" },
    ],
  },
  {
    icon: Server,
    title: "Backend Development",
    description: "Building robust APIs and services with scalable architecture and security in mind",
    skills: ["Node.js", "PostgreSQL", "REST APIs", "GraphQL"],
    certifications: [
      { name: "Node.js Developer", issuer: "OpenJS" },
      { name: "AWS Certified", issuer: "Amazon" },
    ],
  },
  {
    icon: Layers,
    title: "Full Stack Systems",
    description: "Integrating frontend and backend into cohesive, production-ready applications",
    skills: ["System Design", "DevOps", "CI/CD", "Cloud Infrastructure"],
    certifications: [
      { name: "Solutions Architect", issuer: "AWS" },
      { name: "Kubernetes Admin", issuer: "CNCF" },
    ],
  },
  {
    icon: Lightbulb,
    title: "Problem Solving & Architecture",
    description: "Analyzing requirements and designing efficient, maintainable solutions",
    skills: ["System Design", "Code Review", "Performance Optimization", "Testing"],
    certifications: [
      { name: "System Design", issuer: "Educative" },
      { name: "Clean Code", issuer: "Uncle Bob" },
    ],
  },
];

export function Capabilities() {
  return (
    <section className="h-screen snap-start flex items-center justify-center bg-background overflow-y-auto">
      <div className="container mx-auto px-6 py-20">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-5xl md:text-6xl mb-4 bg-gradient-to-r from-foreground to-chart-1 bg-clip-text text-transparent">
            Core Capabilities
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Validated expertise across the full development stack
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {capabilities.map((capability, index) => {
            const Icon = capability.icon;
            return (
              <motion.div
                key={capability.title}
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
                    <span className="text-sm text-muted-foreground">Certifications</span>
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
