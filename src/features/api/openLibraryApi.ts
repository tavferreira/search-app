import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

interface RawBookDocument {
  key: string
  title: string
  author_name?: string[]
  isbn?: string[]
  cover_i?: number
  first_publish_year?: number
}

export interface BookDocument {
  key: string
  title: string
  author_name?: string[]
  isbn?: string[]
  imageUrl?: string
  first_publish_year?: number
}

interface RawSearchResponse {
  numFound: number
  start: number
  numFoundExact: boolean
  docs: RawBookDocument[]
}

export interface SearchResponse {
  numFound: number
  start: number
  numFoundExact: boolean
  docs: BookDocument[]
}

const COVER_ID_BASE_URL = 'https://covers.openlibrary.org/b/id/'
const PLACEHOLDER_IMAGE_URL = 'https://placehold.co/40x50/eee/ccc?text=?' // Placeholder

export const openLibraryApi = createApi({
  reducerPath: 'openLibraryApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://openlibrary.org/' }),
  endpoints: (builder) => ({
    searchBooks: builder.query<SearchResponse, string>({
      query: (searchTerm) =>
        `search.json?q=${encodeURIComponent(searchTerm)}&limit=10&fields=key,title,author_name,isbn,cover_i,first_publish_year`,
      transformResponse: (response: RawSearchResponse): SearchResponse => {
        const transformedDocs = response.docs.map((doc) => {
          const { cover_i, ...rest } = doc

          const isValidCoverId = typeof cover_i === 'number' && cover_i > 0
          return {
            ...rest,
            imageUrl: isValidCoverId
              ? `${COVER_ID_BASE_URL}${cover_i}-S.jpg`
              : PLACEHOLDER_IMAGE_URL,
          }
        })
        return { ...response, docs: transformedDocs }
      },
    }),
  }),
})

export const { useSearchBooksQuery } = openLibraryApi
