import { Outlet } from "react-router-dom"

import { SkipLink } from "@/components/shared/SkipLink"
import { Footer } from "./Footer"
import { Header } from "./Header"

export function AppLayout() {
  return (
    <div className="flex min-h-dvh flex-col bg-background text-foreground">
      <SkipLink />
      <Header />
      <main className="flex-1" id="main-content" tabIndex={-1}>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
