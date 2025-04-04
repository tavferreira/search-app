import React, { forwardRef } from 'react'
import styled from 'styled-components'

const StyledSearchInput = styled.input`
  padding: 0.6rem 0.85rem;
  border: 1px solid #dee2e6;
  border-radius: 6px;
  font-size: 0.95rem;
  min-width: 250px;
  background-color: #ffffff;
  color: #212529;

  &::placeholder {
    color: #6c757d;
  }

  &:focus {
    outline: 2px solid transparent;
    border-color: #86b7fe;
    box-shadow: 0 0 0 0.2rem rgba(13, 110, 253, 0.25);
  }
`

interface SearchInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  value: string
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  placeholder?: string
  onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void
}

export const SearchInput = forwardRef<HTMLInputElement, SearchInputProps>(
  ({ value, onChange, placeholder = 'Search...', onFocus, ...props }, ref) => {
    return (
      <StyledSearchInput
        ref={ref}
        name="search"
        type="search"
        value={value}
        onChange={onChange}
        onFocus={onFocus}
        placeholder={placeholder}
        {...props}
      />
    )
  }
)
