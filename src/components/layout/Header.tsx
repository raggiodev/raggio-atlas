import { Link } from "react-router-dom"

import { routes } from "@/constants/routes"

export function Header() {
  return (
    <header className="border-b border-border/70 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="container flex min-h-16 items-center justify-between gap-4">
        <Link
          className="rounded-md text-lg font-semibold tracking-tight text-foreground transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          to={routes.home}
        >
          Raggio Atlas
        </Link>
        <nav aria-label="Primary navigation">
          <span className="text-sm text-muted-foreground">Visual archive</span>
        </nav>
      </div>
    </header>
  )
}
