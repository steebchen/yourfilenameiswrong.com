import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { FileCode, Filter, GitBranch, Terminal } from "lucide-react"

export function WhyItMatters() {
  return (
    <section className="mb-16">
      <h2 className="text-3xl font-bold mb-6 text-foreground">Why It Matters</h2>

      <div className="grid md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <FileCode className="mr-2 h-5 w-5" /> Consistency
            </CardTitle>
            <CardDescription>Maintaining a logical pattern</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              File extensions tell us what type of file we're looking at. The name before the extension should tell us
              its purpose or variant, not the other way around.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Filter className="mr-2 h-5 w-5" /> Filtering & Sorting
            </CardTitle>
            <CardDescription>Better organization in file explorers</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Proper naming allows files to be grouped by extension first, then sorted by their purpose, making them
              easier to find in directories with many files.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Terminal className="mr-2 h-5 w-5" /> Command Line Efficiency
            </CardTitle>
            <CardDescription>Easier to work with in the terminal</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Commands like <code className="bg-muted px-1 rounded">*.env</code> will match all environment files
              regardless of their purpose, making shell operations more intuitive.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <GitBranch className="mr-2 h-5 w-5" /> Tool Integration
            </CardTitle>
            <CardDescription>Better compatibility with development tools</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Many tools recognize files by their extensions. Proper naming ensures better syntax highlighting, linting,
              and other tooling support.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
