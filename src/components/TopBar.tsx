import React from 'react'
import styled from 'styled-components'
import type { CSSProperties } from 'react'

interface StyledTopBarProps {
  $justifyContent?: CSSProperties['justifyContent']
}

const StyledTopBar = styled.header<StyledTopBarProps>`
  position: sticky;
  top: 0;
  right: 0;
  left: 0;
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: ${(props) => props.$justifyContent ?? 'flex-end'};
  min-height: 60px;
  padding: 0.75rem 1.5rem;
  background-color: #e9ecef;
  box-shadow: 0 2px 5px rgb(0 0 0 / 10%);
`

interface TopBarProps {
  children?: React.ReactNode
  justifyContent?: CSSProperties['justifyContent']
}

export const TopBar = ({ children, justifyContent }: TopBarProps) => {
  return (
    <StyledTopBar $justifyContent={justifyContent}>{children}</StyledTopBar>
  )
}
