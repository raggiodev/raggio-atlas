import { lazy, Suspense } from "react"
import { createBrowserRouter } from "react-router-dom"

import { AppLayout } from "@/components/layout/AppLayout"
import { routes } from "@/constants/routes"

const HomePage = lazy(() => import("@/pages/HomePage"))
const PersonPage = lazy(() => import("@/pages/PersonPage"))
const NotFoundPage = lazy(() => import("@/pages/NotFoundPage"))

function RouteFallback() {
  return (
    <div
      aria-live="polite"
      className="container flex min-h-[50dvh] items-center justify-center py-16 text-sm text-muted-foreground"
      role="status"
    >
      Loading Raggio Atlas…
    </div>
  )
}

export const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: routes.home,
        element: (
          <Suspense fallback={<RouteFallback />}>
            <HomePage />
          </Suspense>
        ),
      },
      {
        path: "/person/:slug",
        element: (
          <Suspense fallback={<RouteFallback />}>
            <PersonPage />
          </Suspense>
        ),
      },
      {
        path: "*",
        element: (
          <Suspense fallback={<RouteFallback />}>
            <NotFoundPage />
          </Suspense>
        ),
      },
    ],
  },
])
