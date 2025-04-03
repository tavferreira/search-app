import styled from 'styled-components'
import { Search } from '../features/search/Search'

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
  return (
    <StyledTopBar>
      <Search />
    </StyledTopBar>
  )
}
