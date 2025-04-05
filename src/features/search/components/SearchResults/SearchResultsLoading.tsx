import { SkeletonItem } from '@/features/search/components/SearchResults/SkeletonItem'
import { SearchResultsContainer } from './SearchResults.styles'

export const SearchResultsLoading = () => {
  return (
    <SearchResultsContainer role="listbox" aria-busy="true">
      {Array.from({ length: 4 }).map((_, index) => (
        <SkeletonItem key={index} />
      ))}
    </SearchResultsContainer>
  )
}
