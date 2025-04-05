import React from 'react'
import { StyledImage } from './SearchResultItem.styles'

const PLACEHOLDER_IMG_URL = 'https://placehold.co/40x50/eee/ccc?text=N/A'

interface BookImageProps {
  src?: string
  alt: string
}

export const BookImage = ({ src, alt }: BookImageProps) => {
  const handleError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    e.currentTarget.src = PLACEHOLDER_IMG_URL
  }

  return (
    <StyledImage
      src={src || PLACEHOLDER_IMG_URL}
      alt={alt}
      loading="lazy"
      onError={handleError}
    />
  )
}
