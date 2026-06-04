export type RaggioPerson = {
  id: string
  slug: string

  name: string
  fullName?: string
  aliases?: string[]

  birthYear?: number
  deathYear?: number

  status: "alive" | "deceased" | "unknown"

  country?: string
  region?: string
  city?: string

  category:
    | "sports"
    | "science"
    | "art"
    | "law"
    | "business"
    | "tech"
    | "education"
    | "music"
    | "politics"
    | "other"

  subcategory?: string

  notoriety: 1 | 2 | 3 | 4 | 5

  image?: string
  imageSource?: string

  summary: string

  bio: string

  highlights?: string[]

  tags: string[]

  verified: boolean

  sources?: string[]

  createdAt?: string
  updatedAt?: string
}

export type RaggioStatus = RaggioPerson["status"]

export type RaggioCategory = RaggioPerson["category"]

export type RaggioNotoriety = RaggioPerson["notoriety"]

export type SortOption =
  | "name-asc"
  | "name-desc"
  | "birth-year-asc"
  | "birth-year-desc"
  | "notoriety-asc"
  | "notoriety-desc"
  | "recently-updated"

export type RaggioFilters = {
  statuses: RaggioStatus[]
  categories: RaggioCategory[]
  countries: string[]
  notoriety: RaggioNotoriety[]
  verifiedOnly: boolean
}
