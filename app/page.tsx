const focusAreas = [
  "Product-minded front-end systems",
  "Fast, content-driven web experiences",
  "Interfaces that are editorial, not generic",
];

const featuredProjects = [
  {
    name: "Signal",
    type: "Design system and product shell",
    summary:
      "A reusable interface foundation for shipping dashboards, landing pages, and internal tools with a single visual language.",
    impact: "Reduced duplicate UI work and made new feature delivery materially faster.",
  },
  {
    name: "Northstar",
    type: "Marketing site architecture",
    summary:
      "A modular content framework for campaigns, case studies, and narrative product storytelling.",
    impact: "Turned a rigid site into a flexible publishing surface without adding heavy CMS complexity.",
  },
  {
    name: "Frame",
    type: "Portfolio and personal platform",
    summary:
      "A lightweight base for publishing selected work, writing process notes, and growing a personal web presence over time.",
    impact: "Created a maintainable structure that can evolve from simple portfolio to full personal site.",
  },
];

const workingPrinciples = [
  {
    title: "Clear hierarchy",
    description:
      "Every section should make its purpose obvious in seconds, without relying on decoration to do the work.",
  },
  {
    title: "Deliberate motion",
    description:
      "Interaction should support reading flow and orientation, not compete with the content itself.",
  },
  {
    title: "Maintainable systems",
    description:
      "The visual layer has to stay editable by future-you, which means sensible tokens, structure, and content boundaries.",
  },
];

const nextSteps = [
  "Replace the placeholder project entries with real case studies.",
  "Swap the generic positioning copy for your own bio and role focus.",
  "Add outbound links, resume details, and contact destinations once the content is finalized.",
];

export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-50 text-zinc-950 dark:bg-zinc-950 dark:text-zinc-50">
      <section className="border-b border-zinc-200/80 dark:border-zinc-800/80">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-12 px-6 py-20 sm:px-10 lg:px-12 lg:py-28">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-4xl">
              <p className="text-sm font-medium uppercase tracking-[0.28em] text-zinc-500 dark:text-zinc-400">
                Portfolio base
              </p>
              <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl lg:text-7xl">
                Building sharp digital work with structure, clarity, and room to grow.
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-7 text-zinc-600 dark:text-zinc-300 sm:text-lg">
                This homepage is now organized as a reusable portfolio foundation.
                It gives you a clear hero, positioning, project area, working
                principles, and contact section without locking you into generic
                starter content.
              </p>
            </div>

            <div className="grid gap-3 rounded-[2rem] border border-zinc-200 bg-white p-6 shadow-[0_20px_80px_-40px_rgba(15,23,42,0.45)] dark:border-zinc-800 dark:bg-zinc-900 lg:max-w-sm">
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-zinc-500 dark:text-zinc-400">
                Current direction
              </p>
              <p className="text-2xl font-semibold tracking-tight">
                One-page portfolio with strong editorial hierarchy.
              </p>
              <p className="text-sm leading-6 text-zinc-600 dark:text-zinc-300">
                Stage 3 will handle the full visual system. For now, the focus is
                on clean structure and content boundaries.
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-4 sm:flex-row">
            <a
              href="#work"
              className="inline-flex h-12 items-center justify-center rounded-full bg-zinc-950 px-6 text-sm font-medium text-white transition-colors hover:bg-zinc-700 dark:bg-zinc-100 dark:text-zinc-950 dark:hover:bg-zinc-300"
            >
              View selected work
            </a>
            <a
              href="#contact"
              className="inline-flex h-12 items-center justify-center rounded-full border border-zinc-300 px-6 text-sm font-medium text-zinc-900 transition-colors hover:border-zinc-900 hover:bg-white dark:border-zinc-700 dark:text-zinc-100 dark:hover:border-zinc-300 dark:hover:bg-zinc-900"
            >
              Jump to contact
            </a>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {focusAreas.map((area) => (
              <div
                key={area}
                className="rounded-3xl border border-zinc-200 bg-white px-5 py-6 text-sm leading-6 text-zinc-700 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-200"
              >
                {area}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="border-b border-zinc-200/80 dark:border-zinc-800/80">
        <div className="mx-auto grid w-full max-w-6xl gap-10 px-6 py-20 sm:px-10 lg:grid-cols-[1.1fr_0.9fr] lg:px-12">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.24em] text-zinc-500 dark:text-zinc-400">
              About
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
              A base for showing who you are, what you build, and how you think.
            </h2>
          </div>

          <div className="space-y-5 text-base leading-7 text-zinc-600 dark:text-zinc-300">
            <p>
              The structure now supports an actual portfolio narrative instead of
              a framework demo. You can use this section for a concise bio,
              location, role focus, and a short explanation of the kind of work
              you want to attract.
            </p>
            <p>
              The goal here is not to overproduce content early. It is to create
              clear slots for real information so later content passes stay
              disciplined and easy to update.
            </p>
          </div>
        </div>
      </section>

      <section id="work" className="border-b border-zinc-200/80 dark:border-zinc-800/80">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-6 py-20 sm:px-10 lg:px-12">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.24em] text-zinc-500 dark:text-zinc-400">
                Selected work
              </p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
                Featured projects are now first-class content blocks.
              </h2>
            </div>
            <p className="max-w-xl text-sm leading-6 text-zinc-600 dark:text-zinc-300">
              These entries are intentionally written as placeholders with real
              structure: project name, category, summary, and outcome.
            </p>
          </div>

          <div className="grid gap-5 lg:grid-cols-3">
            {featuredProjects.map((project) => (
              <article
                key={project.name}
                className="flex h-full flex-col rounded-[2rem] border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900"
              >
                <p className="text-sm font-medium text-zinc-500 dark:text-zinc-400">
                  {project.type}
                </p>
                <h3 className="mt-4 text-2xl font-semibold tracking-tight">
                  {project.name}
                </h3>
                <p className="mt-4 text-sm leading-6 text-zinc-600 dark:text-zinc-300">
                  {project.summary}
                </p>
                <p className="mt-auto pt-8 text-sm leading-6 text-zinc-900 dark:text-zinc-100">
                  {project.impact}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-zinc-200/80 dark:border-zinc-800/80">
        <div className="mx-auto grid w-full max-w-6xl gap-10 px-6 py-20 sm:px-10 lg:grid-cols-[0.85fr_1.15fr] lg:px-12">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.24em] text-zinc-500 dark:text-zinc-400">
              Principles
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
              The working style can now be communicated explicitly.
            </h2>
          </div>

          <div className="grid gap-4">
            {workingPrinciples.map((principle) => (
              <article
                key={principle.title}
                className="rounded-3xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900"
              >
                <h3 className="text-xl font-semibold tracking-tight">
                  {principle.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-zinc-600 dark:text-zinc-300">
                  {principle.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="contact">
        <div className="mx-auto grid w-full max-w-6xl gap-10 px-6 py-20 sm:px-10 lg:grid-cols-[1fr_0.9fr] lg:px-12 lg:py-24">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.24em] text-zinc-500 dark:text-zinc-400">
              Contact
            </p>
            <h2 className="mt-4 max-w-2xl text-3xl font-semibold tracking-tight sm:text-4xl">
              The closing section is ready for your real contact paths and next actions.
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-7 text-zinc-600 dark:text-zinc-300">
              In a later content pass, replace this generic copy with your actual
              email, social profiles, resume link, and availability details.
            </p>
          </div>

          <div className="rounded-[2rem] border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-zinc-500 dark:text-zinc-400">
              Suggested next edits
            </p>
            <ul className="mt-5 space-y-4 text-sm leading-6 text-zinc-700 dark:text-zinc-200">
              {nextSteps.map((step) => (
                <li key={step} className="border-t border-zinc-200 pt-4 first:border-t-0 first:pt-0 dark:border-zinc-800">
                  {step}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
