import { memo } from "react"
import { Link } from "react-router-dom"

import { PersonAvatar } from "@/components/shared/PersonAvatar"
import { routes } from "@/constants/routes"
import { cn } from "@/lib/cn"
import type { RaggioCategory, RaggioPerson } from "@/types/raggio"

const categoryLabels: Record<RaggioCategory, string> = {
  sports: "Sports",
  science: "Science",
  art: "Art",
  law: "Law",
  business: "Business",
  tech: "Tech",
  education: "Education",
  music: "Music",
  politics: "Politics",
  other: "Other",
}

type PersonCardProps = {
  person: RaggioPerson
  className?: string
}

function PersonCardComponent({ person, className }: PersonCardProps) {
  const location = [person.city, person.region, person.country]
    .filter(Boolean)
    .join(", ")

  return (
    <article className={cn("h-full", className)}>
      <Link
        aria-label={`Open profile for ${person.name}`}
        className="group flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-card text-card-foreground shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
        to={routes.person(person.slug)}
      >
        <PersonAvatar
          className="rounded-none border-b border-border"
          person={person}
        />
        <div className="flex flex-1 flex-col gap-4 p-5">
          <div className="flex items-start justify-between gap-3">
            <div>
              <h3 className="text-lg font-semibold leading-tight tracking-tight group-hover:text-primary">
                {person.name}
              </h3>
              {location ? (
                <p className="mt-1 text-sm text-muted-foreground">{location}</p>
              ) : null}
            </div>
            <span className="rounded-full bg-secondary px-2.5 py-1 text-xs font-medium text-secondary-foreground">
              {categoryLabels[person.category]}
            </span>
          </div>
          <p className="line-clamp-4 text-sm leading-6 text-muted-foreground">
            {person.summary}
          </p>
        </div>
      </Link>
    </article>
  )
}

export const PersonCard = memo(PersonCardComponent)
