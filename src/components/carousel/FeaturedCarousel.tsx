import { AnimatePresence, motion, useReducedMotion } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { useId, useMemo, useState } from "react"
import { Link } from "react-router-dom"

import { PersonAvatar } from "@/components/shared/PersonAvatar"
import { Button } from "@/components/ui/button"
import { routes } from "@/constants/routes"
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

type FeaturedCarouselProps = {
  people: readonly RaggioPerson[]
}

export function FeaturedCarousel({ people }: FeaturedCarouselProps) {
  const headingId = useId()
  const shouldReduceMotion = useReducedMotion()
  const [activeIndex, setActiveIndex] = useState(0)
  const activePerson = people[activeIndex]

  const hasMultipleSlides = people.length > 1
  const slideCountLabel = useMemo(
    () => `${activeIndex + 1} of ${people.length}`,
    [activeIndex, people.length],
  )

  function goToPrevious() {
    setActiveIndex((currentIndex) =>
      currentIndex === 0 ? people.length - 1 : currentIndex - 1,
    )
  }

  function goToNext() {
    setActiveIndex((currentIndex) =>
      currentIndex === people.length - 1 ? 0 : currentIndex + 1,
    )
  }

  if (!activePerson) {
    return null
  }

  return (
    <section aria-labelledby={headingId} className="py-12 sm:py-16">
      <div className="mb-6 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
        <div>
          <p className="text-sm font-medium uppercase tracking-[0.3em] text-muted-foreground">
            Featured
          </p>
          <h2 className="mt-2 text-3xl font-semibold tracking-tight" id={headingId}>
            Notable Raggio profiles
          </h2>
        </div>
        <p className="text-sm text-muted-foreground">
          Showing profiles with notoriety level 4 or higher.
        </p>
      </div>

      <div className="relative overflow-hidden rounded-[2rem] border border-border bg-card shadow-sm">
        <AnimatePresence mode="wait">
          <motion.div
            animate={{ opacity: 1, x: 0 }}
            className="grid gap-0 lg:grid-cols-[0.9fr_1.1fr]"
            exit={{ opacity: 0, x: shouldReduceMotion ? 0 : -24 }}
            initial={{ opacity: 0, x: shouldReduceMotion ? 0 : 24 }}
            key={activePerson.id}
            transition={{ duration: shouldReduceMotion ? 0 : 0.28, ease: "easeOut" }}
          >
            <PersonAvatar
              className="min-h-80 rounded-none lg:min-h-[28rem]"
              person={activePerson}
              priority
            />
            <div className="flex min-h-80 flex-col justify-center p-8 sm:p-10 lg:p-12">
              <div className="mb-5 flex flex-wrap items-center gap-3">
                <span className="rounded-full bg-primary px-3 py-1 text-xs font-medium uppercase tracking-[0.2em] text-primary-foreground">
                  {categoryLabels[activePerson.category]}
                </span>
                <span className="text-sm text-muted-foreground">
                  Notoriety {activePerson.notoriety}/5
                </span>
              </div>
              <h3 className="text-4xl font-semibold tracking-tight sm:text-5xl">
                {activePerson.name}
              </h3>
              <p className="mt-5 max-w-2xl text-pretty text-lg leading-8 text-muted-foreground">
                {activePerson.summary}
              </p>
              <Button asChild className="mt-8 w-fit" size="lg">
                <Link to={routes.person(activePerson.slug)}>
                  Open {activePerson.name} profile
                </Link>
              </Button>
            </div>
          </motion.div>
        </AnimatePresence>

        {hasMultipleSlides ? (
          <div className="absolute bottom-5 right-5 flex items-center gap-2 rounded-full border border-border bg-background/90 p-1 shadow-sm backdrop-blur">
            <Button
              aria-label="Show previous featured profile"
              onClick={goToPrevious}
              size="sm"
              type="button"
              variant="ghost"
            >
              <ChevronLeft aria-hidden="true" className="size-4" />
            </Button>
            <span className="px-2 text-sm text-muted-foreground" role="status">
              {slideCountLabel}
            </span>
            <Button
              aria-label="Show next featured profile"
              onClick={goToNext}
              size="sm"
              type="button"
              variant="ghost"
            >
              <ChevronRight aria-hidden="true" className="size-4" />
            </Button>
          </div>
        ) : null}
      </div>
    </section>
  )
}
