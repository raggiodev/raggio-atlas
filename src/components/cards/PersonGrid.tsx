import { PersonCard } from "@/components/cards/PersonCard"
import type { RaggioPerson } from "@/types/raggio"

type PersonGridProps = {
  people: readonly RaggioPerson[]
  emptyMessage?: string
}

export function PersonGrid({
  people,
  emptyMessage = "No Raggio profiles are available yet.",
}: PersonGridProps) {
  if (people.length === 0) {
    return (
      <div className="rounded-3xl border border-dashed border-border bg-muted/30 p-8 text-center text-muted-foreground">
        {emptyMessage}
      </div>
    )
  }

  return (
    <div
      aria-label="Raggio profile results"
      className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4"
      role="list"
    >
      {people.map((person) => (
        <div key={person.id} role="listitem">
          <PersonCard person={person} />
        </div>
      ))}
    </div>
  )
}
