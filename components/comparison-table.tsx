import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export function ComparisonTable() {
  return (
    <section className="mb-16">
      <h2 className="text-3xl font-bold mb-6 text-foreground">Common Examples</h2>

      <div className="border rounded-lg overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-1/3">File Type</TableHead>
              <TableHead className="w-1/3 text-red-500 dark:text-red-400">Common (Incorrect)</TableHead>
              <TableHead className="w-1/3 text-green-500 dark:text-green-400">Proper (Correct)</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell className="font-medium">Environment Variables</TableCell>
              <TableCell className="font-mono">.env.local</TableCell>
              <TableCell className="font-mono">local.env</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">Docker Configuration</TableCell>
              <TableCell className="font-mono">Dockerfile.prod</TableCell>
              <TableCell className="font-mono">prod.dockerfile</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">Build Scripts</TableCell>
              <TableCell className="font-mono">Makefile.ci</TableCell>
              <TableCell className="font-mono">ci.makefile</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">Git Configuration</TableCell>
              <TableCell className="font-mono">.gitignore.node</TableCell>
              <TableCell className="font-mono">node.gitignore</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">Shell Scripts</TableCell>
              <TableCell className="font-mono">setup.sh.macos</TableCell>
              <TableCell className="font-mono">macos.setup.sh</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </section>
  )
}
