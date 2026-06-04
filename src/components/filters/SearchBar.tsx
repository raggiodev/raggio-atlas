import { Search } from "lucide-react"
import type { ChangeEvent } from "react"

type SearchBarProps = {
  value: string
  onChange: (value: string) => void
}

export function SearchBar({ value, onChange }: SearchBarProps) {
  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    onChange(event.target.value)
  }

  return (
    <div className="relative w-full">
      <label className="sr-only" htmlFor="profile-search">
        Search Raggio profiles
      </label>
      <Search
        aria-hidden="true"
        className="pointer-events-none absolute left-4 top-1/2 size-5 -translate-y-1/2 text-muted-foreground"
      />
      <input
        aria-describedby="profile-search-help"
        autoComplete="off"
        className="h-14 w-full rounded-2xl border border-input bg-background pl-12 pr-4 text-base shadow-sm outline-none transition placeholder:text-muted-foreground focus:border-ring focus:ring-2 focus:ring-ring focus:ring-offset-2"
        id="profile-search"
        onChange={handleChange}
        placeholder="Search by name, country, category, or tag"
        type="search"
        value={value}
      />
      <p className="mt-2 text-sm text-muted-foreground" id="profile-search-help">
        Search the current archive by exact text match across names, places,
        categories, and tags.
      </p>
    </div>
  )
}
