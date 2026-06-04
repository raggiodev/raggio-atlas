export const routes = {
  home: "/",
  person: (slug: string) => `/person/${slug}`,
} as const
