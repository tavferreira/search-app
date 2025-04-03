import styled from 'styled-components'

const StyledTopBar = styled.header`
  /* Styling for the sticky top bar */
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

const PlaceholderSearchInput = styled.input`
  padding: 0.5rem 0.75rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 0.9rem;
  min-width: 200px; // Example width
`

export const TopBar = () => {
  return (
    <StyledTopBar>
      <PlaceholderSearchInput type="search" placeholder="Search..." />
    </StyledTopBar>
  )
}

export default TopBar
