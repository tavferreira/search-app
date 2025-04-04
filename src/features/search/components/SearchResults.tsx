import styled from 'styled-components'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { FetchBaseQueryError } from '@reduxjs/toolkit/query'
import { SerializedError } from '@reduxjs/toolkit'

import { SearchResultItem } from './SearchResultItem'
import { BookDocument } from '../api/openLibraryApi'

const SearchResultsContainer = styled.ul`
  position: absolute;
  top: calc(100% + 4px);
  left: -150px;
  right: 0;

  background-color: #ffffff;
  border: 4px solid #dee2e6;
  border-top: none;
  border-radius: 0 0 6px 6px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  padding: 0;
  margin: 0;
  max-height: 450px;
  overflow-y: auto;
  list-style: none;
  z-index: 999;
`

const MessageContainer = styled.div`
  position: absolute;
  top: calc(100% + 4px);
  left: -150px;
  right: 0;

  padding: 1rem 1.5rem;
  color: #6c757d;
  text-align: center;
  background-color: #ffffff;
  border: 1px solid #dee2e6;
  border-top: none;
  border-radius: 0 0 6px 6px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin-top: -1px;
  z-index: 999;
`

const SkeletonItem = () => (
  <li
    style={{
      display: 'flex',
      alignItems: 'center',
      padding: '0.75rem 1.5rem',
      borderBottom: '1px solid #eee',
    }}
  >
    <Skeleton
      circle={false}
      height={50}
      width={40}
      style={{ marginRight: '1rem', flexShrink: 0 }}
    />
    <div style={{ flex: 1, overflow: 'hidden' }}>
      <Skeleton height={15} width="60%" style={{ marginBottom: '0.5rem' }} />
      <Skeleton height={10} count={3} style={{ marginBottom: '0.25rem' }} />
    </div>
  </li>
)

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
    return (
      <SearchResultsContainer role="listbox" id="search-results-list">
        {Array.from({ length: 4 }).map((_, index) => (
          <SkeletonItem key={index} />
        ))}
      </SearchResultsContainer>
    )
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

  return (
    <SearchResultsContainer role="listbox" id="search-results-list">
      {data.map((book) => (
        <SearchResultItem key={book.key} book={book} />
      ))}
    </SearchResultsContainer>
  )
}
