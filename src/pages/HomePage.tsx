import { Link } from "react-router-dom"

import { Button } from "@/components/ui/button"
import { routes } from "@/constants/routes"

export default function HomePage() {
  return (
    <section className="container flex min-h-[calc(100dvh-9rem)] items-center py-16 sm:py-24">
      <div className="mx-auto max-w-3xl text-center">
        <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-muted-foreground">
          Frontend foundation
        </p>
        <h1 className="text-balance text-5xl font-semibold tracking-tight text-foreground sm:text-6xl lg:text-7xl">
          Raggio Atlas
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg leading-8 text-muted-foreground sm:text-xl">
          A visual archive of notable people with the surname Raggio.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button asChild size="lg">
            <Link to={routes.person("example-profile")}>Preview profile route</Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <a href="https://vite.dev" rel="noreferrer" target="_blank">
              Vite setup ready
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
