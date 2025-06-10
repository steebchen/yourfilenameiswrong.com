import { FileConvention } from "@/components/file-convention"
import { FileConverter } from "@/components/file-converter"
import { ComparisonTable } from "@/components/comparison-table"
import { WhyItMatters } from "@/components/why-it-matters"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <header className="bg-gradient-to-r from-slate-800 to-slate-900 dark:from-slate-900 dark:to-black text-white py-16">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold">File Naming Done Right</h1>
            <a
              href="https://github.com/steebchen/yourfilenameiswrong.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-white/10 hover:bg-white/20 transition-colors px-4 py-2 rounded-full"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-github"
              >
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                <path d="M9 18c-4.51 2-5-2-7-2" />
              </svg>
              GitHub
            </a>
          </div>
          <p className="text-xl md:text-2xl opacity-90 max-w-2xl">
            Let's normalize file extensions how they should be used, not how they're often misused.
          </p>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12 max-w-4xl">
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-foreground">The Problem</h2>
          <p className="text-lg text-muted-foreground mb-4">
            Many developers and so many projects unfortunately use inconsistent file naming patterns, especially for
            configuration files. We often see patterns like{" "}
            <code className="bg-muted px-2 py-1 rounded">.env.development</code> instead of
            <code className="bg-muted px-2 py-1 rounded ml-1">development.env</code>.
          </p>
          <p className="text-lg text-muted-foreground">
            .env, dockerfile and others are actually file extensions, and it's a mystery why people start to suffix the
            file type and this page is trying to change this.
          </p>
          <p className="text-lg text-muted-foreground">
            This creates confusion and inconsistency in codebases. Let's explore why the proper convention matters and
            how to fix it.
          </p>
        </section>

        <FileConvention />

        <ComparisonTable />

        <WhyItMatters />

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-foreground">Try It Yourself</h2>
          <p className="text-lg text-muted-foreground mb-6">
            Convert your incorrectly named files to the proper convention:
          </p>
          <FileConverter />
        </section>
      </main>

      <footer className="bg-muted py-8">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          <p>Promoting better file naming conventions for cleaner, more consistent codebases.</p>
        </div>
      </footer>
    </div>
  )
}
