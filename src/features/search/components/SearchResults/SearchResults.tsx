import { FetchBaseQueryError } from '@reduxjs/toolkit/query'
import { SerializedError } from '@reduxjs/toolkit'
import { BookDocument } from '@/features/search/api/openLibraryApi'

import { SearchResultsLoading } from './SearchResultsLoading'
import { SearchResultsList } from './SearchResultsList'
import { MessageContainer } from './SearchResults.styles'

interface SearchResultsProps {
  isLoading: boolean
  error?: FetchBaseQueryError | SerializedError
  data?: BookDocument[]
  searchTerm: string
}

export const SearchResults = ({
  isLoading,
  error,
  data,
  searchTerm,
}: SearchResultsProps) => {
  if (error) {
    console.error('Search Error:', error)
    return (
      <MessageContainer role="alert">
        Error fetching results. Please try again later.
      </MessageContainer>
    )
  }

  if (isLoading) {
    return <SearchResultsLoading />
  }

  if (!data || data.length === 0) {
    if (!searchTerm) {
      return null
    }
    return (
      <MessageContainer role="status">
        No results found for "{searchTerm}".
      </MessageContainer>
    )
  }

  return <SearchResultsList data={data} />
}
