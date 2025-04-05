import { BookDocument } from '@/features/search/api/openLibraryApi'
import { SearchResultsContainer } from './SearchResults.styles'
import { SearchResultItem } from '../SearchResultsItem'

interface SearchResultsListProps {
  data: BookDocument[]
}

export const SearchResultsList = ({ data }: SearchResultsListProps) => {
  return (
    <SearchResultsContainer role="listbox" id="search-results-list">
      {data.map((book) => (
        <SearchResultItem key={book.key} book={book} />
      ))}
    </SearchResultsContainer>
  )
}
