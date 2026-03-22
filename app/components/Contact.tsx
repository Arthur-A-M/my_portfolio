"use client";

import { motion } from "motion/react";
import { Mail, Linkedin, Github, Send, MapPin } from "lucide-react";

export function Contact() {
  return (
    <section
      id="contact"
      className="h-screen snap-start flex items-center justify-center bg-gradient-to-b from-accent/5 to-background relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-0 left-1/4 w-96 h-96 bg-chart-1/10 rounded-full blur-3xl"
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
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-5xl md:text-6xl mb-6 bg-gradient-to-r from-foreground via-chart-1 to-chart-2 bg-clip-text text-transparent">
              Let&apos;s Build Something Great
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Available for full-time opportunities, consulting, or collaboration on innovative projects
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="p-8 rounded-2xl border border-border bg-card hover:bg-accent/30 transition-all duration-300 hover:shadow-xl hover:shadow-chart-1/10">
              <h3 className="text-2xl mb-6">Get in Touch</h3>

              <div className="space-y-4">
                <a
                  href="mailto:hello@example.com"
                  className="flex items-center gap-4 p-4 rounded-xl hover:bg-accent transition-all duration-300 group"
                >
                  <div className="p-3 rounded-lg bg-chart-1/10 group-hover:bg-chart-1/20 transition-colors">
                    <Mail className="w-5 h-5 text-chart-1" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">Email</div>
                    <div className="group-hover:text-chart-1 transition-colors">
                      hello@example.com
                    </div>
                  </div>
                </a>

                <a
                  href="#"
                  className="flex items-center gap-4 p-4 rounded-xl hover:bg-accent transition-all duration-300 group"
                >
                  <div className="p-3 rounded-lg bg-chart-2/10 group-hover:bg-chart-2/20 transition-colors">
                    <MapPin className="w-5 h-5 text-chart-2" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">Location</div>
                    <div className="group-hover:text-chart-2 transition-colors">
                      Available Remotely
                    </div>
                  </div>
                </a>
              </div>
            </div>

            <div className="p-8 rounded-2xl border border-border bg-card hover:bg-accent/30 transition-all duration-300 hover:shadow-xl hover:shadow-chart-2/10">
              <h3 className="text-2xl mb-6">Connect Online</h3>

              <div className="space-y-4">
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-xl hover:bg-accent transition-all duration-300 group"
                >
                  <div className="p-3 rounded-lg bg-chart-1/10 group-hover:bg-chart-1/20 transition-colors">
                    <Linkedin className="w-5 h-5 text-chart-1" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">LinkedIn</div>
                    <div className="group-hover:text-chart-1 transition-colors">
                      Connect professionally
                    </div>
                  </div>
                </a>

                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-xl hover:bg-accent transition-all duration-300 group"
                >
                  <div className="p-3 rounded-lg bg-chart-2/10 group-hover:bg-chart-2/20 transition-colors">
                    <Github className="w-5 h-5 text-chart-2" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">GitHub</div>
                    <div className="group-hover:text-chart-2 transition-colors">
                      View my repositories
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <a
              href="mailto:hello@example.com"
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-chart-1 to-chart-2 text-white rounded-lg hover:shadow-lg hover:shadow-chart-1/50 transition-all duration-300 hover:scale-105 group"
            >
              <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              Send a Message
            </a>
          </motion.div>

          <motion.div
            className="mt-16 pt-8 border-t border-border text-center text-sm text-muted-foreground"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <p>© 2026 Full Stack Developer Portfolio. Built with Next.js, TypeScript, and Tailwind CSS.</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
