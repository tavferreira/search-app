import styled from 'styled-components'

export const StyledImage = styled.img`
  flex-shrink: 0;
  width: 40px;
  height: 50px;
  margin-right: 1rem;
  object-fit: cover;
  background-color: #eee;
  border-radius: 2px;
`

export const TextContent = styled.div`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  gap: 0.1rem;
  overflow: hidden;
`

export const TitleLink = styled.a`
  display: block;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 0.95rem;
  font-weight: 600;
  color: #212529;
  white-space: nowrap;
  text-decoration: none;

  &:hover {
    color: #0d6efd;
    text-decoration: underline;
  }

  &:focus-visible {
    outline-offset: -1px;
  }
`

export const Author = styled.p`
  margin: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 0.85rem;
  color: #6c757d;
  white-space: nowrap;
`

export const PublishYear = styled.p`
  margin: 0;
  font-size: 0.75rem;
  color: #868e96;
`

export const ItemWrapper = styled.li<{ $isHighlighted?: boolean }>`
  display: flex;
  align-items: center;
  padding: 0.75rem 1.5rem;
  cursor: pointer;
  background-color: ${(props) =>
    props.$isHighlighted ? '#f0f4f8' : 'transparent'};
  border-bottom: 1px solid #eee;
  transition: background-color 0.15s ease-in-out;

  &:last-child {
    border-bottom: none;
  }

  &:hover {
    background-color: ${(props) =>
      props.$isHighlighted ? '#e1e9f2' : '#f8f9fa'};
  }
`
