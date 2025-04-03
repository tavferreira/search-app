import styled from 'styled-components'
import { SearchInput } from './SearchInput'
import { useState } from 'react'

const StyledTopBar = styled.header`
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  background-color: #e9ecef;
  padding: 0.75rem 1.5rem;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  z-index: 1000;

  display: flex;
  align-items: center;
  justify-content: flex-end;
  min-height: 60px;
`

export const TopBar = () => {
  const [searchValue, setSearchValue] = useState('')

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value)
    // In real app, call prop like: props.onSearchChange?.(event.target.value);
    console.log('Search term changed (temp):', event.target.value) // For demo
  }

  return (
    <StyledTopBar>
      <SearchInput
        value={searchValue}
        onChange={handleSearchChange}
        placeholder="Search Open Library..."
      />
    </StyledTopBar>
  )
}
