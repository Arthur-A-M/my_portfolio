export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-zinc-50 text-zinc-950 dark:bg-zinc-950 dark:text-zinc-50">
      <section className="mx-auto flex w-full max-w-6xl flex-1 flex-col justify-center gap-12 px-6 py-20 sm:px-10 lg:px-12">
        <div className="flex flex-col gap-4">
          <p className="text-sm font-medium uppercase tracking-[0.24em] text-zinc-500 dark:text-zinc-400">
            Stage 1 cleanup
          </p>
          <h1 className="max-w-4xl text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
            The default starter has been cleared out so this project can become
            an actual portfolio.
          </h1>
          <p className="max-w-2xl text-base leading-7 text-zinc-600 dark:text-zinc-300 sm:text-lg">
            This first pass removes create-next-app branding, starter links, and
            template-specific dependencies from the landing page. The next stage
            will turn this shell into a proper portfolio structure.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          <article className="rounded-3xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900">
            <p className="text-sm font-medium text-zinc-500 dark:text-zinc-400">
              Removed
            </p>
            <h2 className="mt-3 text-xl font-semibold">Starter branding</h2>
            <p className="mt-3 text-sm leading-6 text-zinc-600 dark:text-zinc-300">
              No more Next.js logos, Vercel promotion, or default instructional
              copy on the homepage.
            </p>
          </article>

          <article className="rounded-3xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900">
            <p className="text-sm font-medium text-zinc-500 dark:text-zinc-400">
              Preserved
            </p>
            <h2 className="mt-3 text-xl font-semibold">App Router baseline</h2>
            <p className="mt-3 text-sm leading-6 text-zinc-600 dark:text-zinc-300">
              The project stays on the current Next 16 app structure so later
              stages can build on a stable foundation.
            </p>
          </article>

          <article className="rounded-3xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900">
            <p className="text-sm font-medium text-zinc-500 dark:text-zinc-400">
              Next
            </p>
            <h2 className="mt-3 text-xl font-semibold">Portfolio sections</h2>
            <p className="mt-3 text-sm leading-6 text-zinc-600 dark:text-zinc-300">
              The next implementation pass will define the real information
              architecture and content blocks for the homepage.
            </p>
          </article>
        </div>
      </section>
    </main>
  );
}
