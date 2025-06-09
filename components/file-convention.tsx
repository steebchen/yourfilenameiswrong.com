import { Check, X } from "lucide-react"

export function FileConvention() {
  return (
    <section className="mb-16">
      <h2 className="text-3xl font-bold mb-6 text-foreground">The Proper Convention</h2>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-card border border-red-200 dark:border-red-900 rounded-lg p-6">
          <div className="flex items-center mb-4">
            <X className="text-red-500 mr-2" />
            <h3 className="text-xl font-semibold text-foreground">Incorrect Pattern</h3>
          </div>
          <p className="text-muted-foreground mb-4">Adding purpose after the extension:</p>
          <ul className="space-y-2">
            <li className="bg-red-50 dark:bg-red-950/30 p-3 rounded border border-red-100 dark:border-red-900 font-mono text-foreground">
              .env.development
            </li>
            <li className="bg-red-50 dark:bg-red-950/30 p-3 rounded border border-red-100 dark:border-red-900 font-mono text-foreground">
              Dockerfile.static
            </li>
            <li className="bg-red-50 dark:bg-red-950/30 p-3 rounded border border-red-100 dark:border-red-900 font-mono text-foreground">
              Makefile.local
            </li>
            <li className="bg-red-50 dark:bg-red-950/30 p-3 rounded border border-red-100 dark:border-red-900 font-mono text-foreground">
              .gitignore.template
            </li>
          </ul>
        </div>

        <div className="bg-card border border-green-200 dark:border-green-900 rounded-lg p-6">
          <div className="flex items-center mb-4">
            <Check className="text-green-500 mr-2" />
            <h3 className="text-xl font-semibold text-foreground">Correct Pattern</h3>
          </div>
          <p className="text-muted-foreground mb-4">Adding purpose before the extension:</p>
          <ul className="space-y-2">
            <li className="bg-green-50 dark:bg-green-950/30 p-3 rounded border border-green-100 dark:border-green-900 font-mono text-foreground">
              development.env
            </li>
            <li className="bg-green-50 dark:bg-green-950/30 p-3 rounded border border-green-100 dark:border-green-900 font-mono text-foreground">
              static.dockerfile
            </li>
            <li className="bg-green-50 dark:bg-green-950/30 p-3 rounded border border-green-100 dark:border-green-900 font-mono text-foreground">
              local.makefile
            </li>
            <li className="bg-green-50 dark:bg-green-950/30 p-3 rounded border border-green-100 dark:border-green-900 font-mono text-foreground">
              template.gitignore
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}
