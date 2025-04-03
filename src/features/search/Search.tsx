import React, { useCallback, useRef, useState } from 'react'
import { SearchInput } from './components/SearchInput' // Path relative to src/features/search/
import { useSearchBooksQuery } from './api/openLibraryApi'
import { SearchResults } from './components/SearchResults'
import { styled } from 'styled-components'
import { useDismiss } from '../../hooks/useDismiss'

const SearchWrapper = styled.div`
  position: relative;
  display: inline-block;
  width: auto;
`

export const Search = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const { data, error, isFetching } = useSearchBooksQuery(searchTerm, {
    skip: !searchTerm,
  })
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const searchWrapperRef = useRef<HTMLDivElement>(null)

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value
    setSearchTerm(newValue)
    setIsOpen(newValue !== '')
  }

  const handleInputFocus = () => {
    if (searchTerm) {
      setIsOpen(true)
    }
  }

  const handleClose = useCallback(() => {
    setIsOpen(false)
  }, [])

  useDismiss<HTMLDivElement>(searchWrapperRef, handleClose, isOpen)

  return (
    <SearchWrapper ref={searchWrapperRef}>
      <SearchInput
        value={searchTerm}
        onChange={handleInputChange}
        onFocus={handleInputFocus}
        placeholder="Search Open Library..."
      />
      {isOpen && (
        <SearchResults
          isLoading={isFetching}
          error={error}
          data={data?.docs}
          searchTerm={searchTerm}
        />
      )}
    </SearchWrapper>
  )
}
