import { Link } from "react-router-dom"

import { Button } from "@/components/ui/button"
import { routes } from "@/constants/routes"

export default function NotFoundPage() {
  return (
    <section className="container flex min-h-[calc(100dvh-9rem)] items-center py-16">
      <div className="mx-auto max-w-xl text-center">
        <p className="text-sm font-medium uppercase tracking-[0.3em] text-muted-foreground">
          404
        </p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight">
          Page not found
        </h1>
        <p className="mt-4 text-muted-foreground">
          The requested Raggio Atlas page does not exist.
        </p>
        <Button asChild className="mt-8">
          <Link to={routes.home}>Return home</Link>
        </Button>
      </div>
    </section>
  )
}
