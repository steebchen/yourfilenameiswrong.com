"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ArrowRight } from "lucide-react"

export function FileConverter() {
  const [filename, setFilename] = useState("")
  const [convertedName, setConvertedName] = useState("")
  const [error, setError] = useState("")

  const handleConvert = () => {
    // Reset states
    setError("")
    setConvertedName("")

    if (!filename) {
      setError("Please enter a filename")
      return
    }

    // Check if it's a dotfile with a suffix (.env.development)
    if (filename.startsWith(".") && filename.includes(".", 1)) {
      const parts = filename.split(".")
      // For dotfiles like .env.development
      if (parts.length === 3) {
        setConvertedName(`${parts[2]}.${parts[0].substring(1)}`)
        return
      }
    }

    // Check for files like Dockerfile.prod
    const lastDotIndex = filename.lastIndexOf(".")
    if (lastDotIndex > 0) {
      const name = filename.substring(0, lastDotIndex)
      const suffix = filename.substring(lastDotIndex + 1)

      // If the name doesn't contain dots, it's likely a simple file with a purpose suffix
      if (!name.includes(".")) {
        setConvertedName(`${suffix}.${name.toLowerCase()}`)
        return
      }
    }

    setError("This doesn't appear to be a file with an incorrect naming pattern")
  }

  return (
    <div className="bg-black rounded-lg p-6">
      <form onSubmit={e => {
        e.preventDefault()
        handleConvert()
      }} className="flex flex-col md:flex-row gap-4">
        <div className="flex-1">
          <label htmlFor="filename" className="block font-medium text-background mb-2 text-lg">
            Enter incorrectly named file:
          </label>
          <Input
            id="filename"
            placeholder="e.g. .env.development or Dockerfile.prod"
            value={filename}
            onChange={(e) => setFilename(e.target.value)}
          />
        </div>
        <div className="flex items-end">
          <Button type="submit" className="w-full md:w-auto bg-white text-black hover:bg-white ">
            Convert <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </form>

      {error && (
        <div className="mt-6 p-4 bg-red-950/30 border border-red-400 rounded-md text-red-400 mb-4">
          {error}
        </div>
      )}

      {convertedName && (
        <div className="mt-6 p-4 bg-green-950/30 border border-green-900 rounded-md">
          <p className="text-sm text-background mb-1">Properly named file:</p>
          <p className="font-mono text-lg font-medium text-green-400">{convertedName}</p>
        </div>
      )}
    </div>
  )
}
