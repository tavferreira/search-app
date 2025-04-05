import React, { forwardRef } from 'react'
import styled from 'styled-components'

const StyledSearchInput = styled.input`
  min-width: 250px;
  padding: 0.6rem 0.85rem;
  font-size: 0.95rem;
  color: #212529;
  background-color: #fff;
  border: 1px solid #dee2e6;
  border-radius: 6px;

  &::placeholder {
    color: #6c757d;
  }

  &:focus {
    outline: 2px solid transparent;
    border-color: #86b7fe;
    box-shadow: 0 0 0 0.2rem rgb(13 110 253 / 25%);
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
