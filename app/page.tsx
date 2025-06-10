import { FileConvention } from "@/components/file-convention"
import { FileConverter } from "@/components/file-converter"
import { ComparisonTable } from "@/components/comparison-table"
import { WhyItMatters } from "@/components/why-it-matters"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <header className="bg-gradient-to-r from-slate-800 to-slate-900 dark:from-slate-900 dark:to-black text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">File Naming Done Right</h1>
          <p className="text-xl md:text-2xl opacity-90 max-w-2xl">
            Let's normalize file extensions how they should be used, not how they're often misused.
          </p>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12 max-w-4xl">
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-foreground">The Problem</h2>
          <p className="text-lg text-muted-foreground mb-4">
            Many developers and so many projects unfortunately use inconsistent file naming patterns, especially for configuration files. We often see
            patterns like <code className="bg-muted px-2 py-1 rounded">.env.development</code> instead of
            <code className="bg-muted px-2 py-1 rounded ml-1">development.env</code>.
          </p>
          <p className="text-lg text-muted-foreground">
            .env, dockerfile and others are actually file extensions, and it's a mystery why people start to suffix the file type and this page is trying to change this.
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
