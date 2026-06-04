import { useMemo, useState } from "react"

import { PersonGrid } from "@/components/cards/PersonGrid"
import { FeaturedCarousel } from "@/components/carousel/FeaturedCarousel"
import { SearchBar } from "@/components/filters/SearchBar"
import { getAllPeople, getFeaturedPeople } from "@/data/raggio.data"
import type { RaggioPerson } from "@/types/raggio"

function matchesBasicSearch(person: RaggioPerson, query: string) {
  const normalizedQuery = query.trim().toLowerCase()

  if (!normalizedQuery) {
    return true
  }

  const searchableValues = [
    person.name,
    person.fullName,
    person.country,
    person.category,
    person.subcategory,
    ...(person.aliases ?? []),
    ...person.tags,
  ]

  return searchableValues.some((value) =>
    value?.toLowerCase().includes(normalizedQuery),
  )
}

export default function HomePage() {
  const [searchQuery, setSearchQuery] = useState("")
  const people = useMemo(() => getAllPeople(), [])
  const featuredPeople = useMemo(() => getFeaturedPeople(), [])
  const visiblePeople = useMemo(
    () => people.filter((person) => matchesBasicSearch(person, searchQuery)),
    [people, searchQuery],
  )

  return (
    <div className="bg-background">
      <section className="container py-16 sm:py-24 lg:py-28">
        <div className="max-w-4xl">
          <p className="text-sm font-medium uppercase tracking-[0.3em] text-muted-foreground">
            Visual encyclopedia
          </p>
          <h1 className="mt-4 text-balance text-5xl font-semibold tracking-tight text-foreground sm:text-6xl lg:text-7xl">
            Raggio Atlas
          </h1>
          <p className="mt-6 max-w-2xl text-pretty text-lg leading-8 text-muted-foreground sm:text-xl">
            A visual archive of notable people with the surname Raggio.
          </p>
        </div>
      </section>

      <div className="container">
        <FeaturedCarousel people={featuredPeople} />
      </div>

      <section
        aria-labelledby="archive-heading"
        className="container py-12 sm:py-16"
      >
        <div className="mb-8 grid gap-6 lg:grid-cols-[1fr_24rem] lg:items-end">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.3em] text-muted-foreground">
              Archive
            </p>
            <h2
              className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl"
              id="archive-heading"
            >
              Browse Raggio profiles
            </h2>
            <p className="mt-3 max-w-2xl text-muted-foreground">
              Explore the current seed archive of people, places, and fields of
              work connected by the Raggio surname.
            </p>
          </div>
          <SearchBar onChange={setSearchQuery} value={searchQuery} />
        </div>

        <p aria-live="polite" className="mb-6 text-sm text-muted-foreground">
          Showing {visiblePeople.length} of {people.length} profiles.
        </p>
        <PersonGrid
          emptyMessage="No profiles match the current search. Try another name, country, category, or tag."
          people={visiblePeople}
        />
      </section>
    </div>
  )
}
