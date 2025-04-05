import styled from 'styled-components'

const ITEM_APPROX_HEIGHT = 90
const VISIBLE_ITEMS = 3.5
const CONTAINER_MAX_HEIGHT = ITEM_APPROX_HEIGHT * VISIBLE_ITEMS

export const SearchResultsContainer = styled.ul`
  position: absolute;
  top: calc(100% + 4px);
  right: 0;
  left: -150px; /* Adjust as needed */
  z-index: 999;
  max-height: ${CONTAINER_MAX_HEIGHT}px;
  padding: 0;
  margin: 0;
  overflow-y: auto;

  /* Scrollbar Styles (Cross-browser) */
  scrollbar-gutter: stable both-edges;
  list-style: none;
  scrollbar-color: transparent transparent;

  /* Firefox */
  scrollbar-width: thin;
  background-color: #fff;
  border: 4px solid #dee2e6;
  border-top: none;
  border-radius: 0 0 6px 6px;
  box-shadow: 0 6px 12px rgb(0 0 0 / 15%);

  &:hover {
    scrollbar-color: #aaa #fff;
  }

  /* Webkit */
  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background-color: transparent;
    border-radius: 4px;
  }

  &:hover::-webkit-scrollbar-thumb {
    background-color: rgb(0 0 0 / 30%);
  }
`

export const MessageContainer = styled.div`
  position: absolute;
  top: calc(100% + 4px);
  right: 0;
  left: -150px;
  z-index: 999;
  padding: 1rem 1.5rem;
  margin-top: -1px;
  color: #6c757d;
  text-align: center;
  background-color: #fff;
  border: 1px solid #dee2e6;
  border-top: none;
  border-radius: 0 0 6px 6px;
  box-shadow: 0 4px 8px rgb(0 0 0 / 10%);
`
