import React from 'react'
import styled from 'styled-components'
import { BookDocument } from '../api/openLibraryApi'

const ItemWrapper = styled.li<{ $isHighlighted?: boolean }>`
  display: flex;
  align-items: center;
  padding: 0.75rem 1.5rem;
  border-bottom: 1px solid #eee;
  cursor: pointer;
  transition: background-color 0.15s ease-in-out;
  background-color: ${(props) =>
    props.$isHighlighted ? '#f0f4f8' : 'transparent'};

  &:last-child {
    border-bottom: none;
  }

  &:hover {
    background-color: #f8f9fa;
  }
`

const Image = styled.img`
  width: 40px;
  height: 50px;
  object-fit: cover;
  margin-right: 1rem;
  flex-shrink: 0;
  background-color: #eee;
  border-radius: 2px;
`

const TextContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.1rem;
  overflow: hidden;
  flex-grow: 1;
`

const TitleLink = styled.a`
  font-size: 0.95rem;
  font-weight: 600;
  color: #212529;
  text-decoration: none;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  display: block;

  &:hover {
    text-decoration: underline;
    color: #0d6efd;
  }
`

const Author = styled.p`
  font-size: 0.85rem;
  color: #6c757d;
  margin: 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`

const PublishYear = styled.p`
  font-size: 0.75rem;
  color: #868e96;
  margin: 0;
`

interface SearchResultItemProps {
  book: BookDocument
  isHighlighted?: boolean
  id?: string
}

const generateAmazonSearchUrl = (book: BookDocument): string => {
  const baseUrl = 'https://www.amazon.es/s?i=stripbooks'
  const rhParams: string[] = []

  rhParams.push(`p_28:${encodeURIComponent(book.title)}`)

  if (book.author_name && book.author_name.length > 0) {
    rhParams.push(`p_27:${encodeURIComponent(book.author_name[0])}`)
  }

  if (book.isbn && book.isbn.length > 0) {
    const isbnSearchTerm = book.isbn.join('|')
    rhParams.push(`p_66:${encodeURIComponent(isbnSearchTerm)}`)
  }

  const rhValue = rhParams.join(',')

  return `${baseUrl}&rh=${rhValue}&s=relevancerank`
}

const SearchResultItemComponent = ({
  book,
  isHighlighted = false,
  id,
}: SearchResultItemProps) => {
  const displayAuthors =
    book.author_name && book.author_name.length > 0
      ? `by ${book.author_name.join(', ')}`
      : 'Author unknown'
  const amazonUrl = generateAmazonSearchUrl(book)

  return (
    <ItemWrapper role="option" id={id} $isHighlighted={isHighlighted}>
      <Image
        src={book.imageUrl}
        alt={`Cover for ${book.title}`}
        loading="lazy"
        onError={(e) =>
          (e.currentTarget.src = 'https://placehold.co/40x50/eee/ccc?text=N/A')
        }
      />
      <TextContent>
        <TitleLink
          href={amazonUrl}
          target="_blank"
          rel="noopener noreferrer"
          title={book.title}
        >
          {book.title}
        </TitleLink>
        <Author title={book.author_name?.join(', ')}>{displayAuthors}</Author>
        {book.first_publish_year && (
          <PublishYear>First published: {book.first_publish_year}</PublishYear>
        )}
      </TextContent>
    </ItemWrapper>
  )
}

export const SearchResultItem = React.memo(SearchResultItemComponent)
