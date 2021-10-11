export interface Article {
  id: number,
  featured: false,
  title: string,
  url: string,
  imageUrl: string,
  newsSite: string,
  summary: string,
  publishedAt: string,
  launches: Provider[],
  events: Provider[]
}

interface Provider {
  id: string,
  provider: string
}
