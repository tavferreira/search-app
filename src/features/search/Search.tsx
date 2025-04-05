import React, { useCallback, useRef, useState } from 'react'
import { useSearchBooksQuery } from '@/features/search/api/openLibraryApi'
import { SearchResults } from '@/features/search/components/SearchResults'
import { styled } from 'styled-components'
import { useDismiss } from '@/hooks/useDismiss'
import { useDebounce } from '@/hooks/useDebounce'
import { SearchInput } from '@/features/search/components/SearchInput'

const SearchWrapper = styled.div`
  position: relative;
  display: inline-block;
  width: auto;
`

export const Search = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const debouncedSearchTerm = useDebounce(searchTerm, 500) // Debounce with 500ms delay

  const { data, error, isFetching } = useSearchBooksQuery(debouncedSearchTerm, {
    skip: !debouncedSearchTerm,
  })
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const searchWrapperRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value
    setSearchTerm(newValue)
    setIsOpen(
      newValue !== '' ||
        document.activeElement ===
          searchWrapperRef.current?.querySelector('input')
    )
  }

  const handleInputFocus = () => {
    if (debouncedSearchTerm || searchTerm) {
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
        ref={inputRef}
        value={searchTerm}
        onChange={handleInputChange}
        onFocus={handleInputFocus}
        placeholder="Search Open Library..."
        role="combobox"
      />
      {isOpen && (
        <SearchResults
          isLoading={isFetching}
          error={error}
          data={data?.docs}
          searchTerm={debouncedSearchTerm}
        />
      )}
    </SearchWrapper>
  )
}
