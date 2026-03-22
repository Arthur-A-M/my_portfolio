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
    <main className="page-shell">
      <section className="section-divider">
        <div className="section-shell flex flex-col gap-12 py-20 lg:py-28">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-4xl">
              <p className="eyebrow">Portfolio base</p>
              <h1 className="headline mt-4 text-4xl font-semibold sm:text-5xl lg:text-7xl">
                Building sharp digital work with structure, clarity, and room to grow.
              </h1>
              <p className="body-copy mt-6 max-w-2xl text-base leading-7 sm:text-lg">
                This homepage is now organized as a reusable portfolio foundation.
                It gives you a clear hero, positioning, project area, working
                principles, and contact section without locking you into generic
                starter content.
              </p>
            </div>

            <div className="panel panel-strong grid gap-3 rounded-[2rem] p-6 lg:max-w-sm">
              <p className="eyebrow tracking-[0.2em]">Current direction</p>
              <p className="headline text-2xl font-semibold">
                One-page portfolio with strong editorial hierarchy.
              </p>
              <p className="body-copy text-sm leading-6">
                Stage 3 turns the structure into a real visual system with warm
                contrast, stronger surfaces, and reusable styling primitives.
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-4 sm:flex-row">
            <a href="#work" className="cta-primary">
              View selected work
            </a>
            <a href="#contact" className="cta-secondary">
              Jump to contact
            </a>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {focusAreas.map((area) => (
              <div key={area} className="pill-card rounded-3xl px-5 py-6 text-sm leading-6">
                {area}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="section-divider">
        <div className="section-shell grid gap-10 py-20 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="eyebrow">About</p>
            <h2 className="headline mt-4 text-3xl font-semibold sm:text-4xl">
              A base for showing who you are, what you build, and how you think.
            </h2>
          </div>

          <div className="body-copy space-y-5 text-base leading-7">
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

      <section id="work" className="section-divider">
        <div className="section-shell flex flex-col gap-10 py-20">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="eyebrow">Selected work</p>
              <h2 className="headline mt-4 text-3xl font-semibold sm:text-4xl">
                Featured projects are now first-class content blocks.
              </h2>
            </div>
            <p className="body-copy max-w-xl text-sm leading-6">
              These entries are intentionally written as placeholders with real
              structure: project name, category, summary, and outcome.
            </p>
          </div>

          <div className="grid gap-5 lg:grid-cols-3">
            {featuredProjects.map((project) => (
              <article key={project.name} className="panel panel-strong flex h-full flex-col rounded-[2rem] p-6">
                <p className="eyebrow tracking-[0.18em]">{project.type}</p>
                <h3 className="headline mt-4 text-2xl font-semibold">{project.name}</h3>
                <p className="body-copy mt-4 text-sm leading-6">{project.summary}</p>
                <p className="metric-copy mt-auto pt-8 text-sm leading-6">{project.impact}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-divider">
        <div className="section-shell grid gap-10 py-20 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="eyebrow">Principles</p>
            <h2 className="headline mt-4 text-3xl font-semibold sm:text-4xl">
              The working style can now be communicated explicitly.
            </h2>
          </div>

          <div className="grid gap-4">
            {workingPrinciples.map((principle) => (
              <article key={principle.title} className="panel rounded-3xl p-6">
                <h3 className="headline text-xl font-semibold">{principle.title}</h3>
                <p className="body-copy mt-3 text-sm leading-6">{principle.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="contact">
        <div className="section-shell grid gap-10 py-20 lg:grid-cols-[1fr_0.9fr] lg:py-24">
          <div>
            <p className="eyebrow">Contact</p>
            <h2 className="headline mt-4 max-w-2xl text-3xl font-semibold sm:text-4xl">
              The closing section is ready for your real contact paths and next actions.
            </h2>
            <p className="body-copy mt-5 max-w-2xl text-base leading-7">
              In a later content pass, replace this generic copy with your actual
              email, social profiles, resume link, and availability details.
            </p>
          </div>

          <div className="panel panel-strong rounded-[2rem] p-6">
            <p className="eyebrow tracking-[0.2em]">Suggested next edits</p>
            <ul className="list-divider mt-5 space-y-4 text-sm leading-6 text-[color:var(--foreground)]">
              {nextSteps.map((step) => (
                <li key={step} className="pt-4 first:pt-0">
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
