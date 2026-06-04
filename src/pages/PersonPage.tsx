import { Link, useParams } from "react-router-dom"

import { Button } from "@/components/ui/button"
import { routes } from "@/constants/routes"

export default function PersonPage() {
  const { slug } = useParams<{ slug: string }>()

  return (
    <section className="container py-16 sm:py-24">
      <div className="mx-auto max-w-3xl rounded-3xl border border-border bg-card p-8 text-card-foreground shadow-sm sm:p-10">
        <p className="text-sm font-medium uppercase tracking-[0.3em] text-muted-foreground">
          Profile route placeholder
        </p>
        <h1 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
          {slug ?? "Unknown profile"}
        </h1>
        <p className="mt-4 text-muted-foreground">
          Phase 2 wires the lazy route and accessible layout only. The real
          data-backed profile experience will begin after Phase 3 is approved.
        </p>
        <Button asChild className="mt-8" variant="outline">
          <Link to={routes.home}>Back to homepage</Link>
        </Button>
      </div>
    </section>
  )
}
