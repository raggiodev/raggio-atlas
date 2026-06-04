import { useState } from "react"

import { cn } from "@/lib/cn"
import type { RaggioPerson } from "@/types/raggio"

type PersonAvatarProps = {
  person: Pick<RaggioPerson, "image" | "name">
  className?: string
  priority?: boolean
}

function getInitials(name: string) {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part.at(0)?.toUpperCase())
    .join("")
}

export function PersonAvatar({
  person,
  className,
  priority = false,
}: PersonAvatarProps) {
  const [hasImageError, setHasImageError] = useState(false)
  const shouldShowImage = Boolean(person.image) && !hasImageError

  return (
    <div
      className={cn(
        "flex aspect-[4/5] w-full items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br from-slate-100 via-slate-200 to-slate-300 text-slate-600",
        className,
      )}
    >
      {shouldShowImage ? (
        <img
          alt={`Portrait of ${person.name}`}
          className="h-full w-full object-cover"
          decoding="async"
          loading={priority ? "eager" : "lazy"}
          onError={() => setHasImageError(true)}
          src={person.image}
        />
      ) : (
        <span
          aria-hidden="true"
          className="text-4xl font-semibold tracking-tight"
        >
          {getInitials(person.name)}
        </span>
      )}
    </div>
  )
}
