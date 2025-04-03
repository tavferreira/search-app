import React, { useState } from 'react'
import { SearchInput } from './components/SearchInput' // Path relative to src/features/search/
import { useSearchBooksQuery } from './api/openLibraryApi'

export const Search = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const { data, error, isFetching } = useSearchBooksQuery(searchTerm, {
    skip: !searchTerm,
  })

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value)
  }

  console.log(data, error, isFetching)

  return (
    <SearchInput
      value={searchTerm}
      onChange={handleInputChange}
      placeholder="Search Open Library..."
    />
  )
}
